import { NextResponse } from "next/server";
import { isSupabaseConfigured, fetchFromSupabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  try {
    const passcode = request.headers.get("x-admin-passcode");
    const isAdmin = passcode === process.env.ADMIN_PASSCODE;

    if (!isSupabaseConfigured()) {
      console.warn("Supabase is not configured. Returning empty feedback list.");
      return NextResponse.json({
        success: true,
        source: "local",
        data: [],
      });
    }

    // Determine query path based on admin credentials
    // Admins see all rows; public users see only approved, consented testimonials
    const queryPath = isAdmin
      ? "feedbacks?order=created_at.desc"
      : "feedbacks?approved=eq.true&allow_public_display=eq.true&order=created_at.desc";

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const headers: Record<string, string> = {};
    if (isAdmin && serviceRoleKey) {
      headers["apikey"] = serviceRoleKey;
      headers["Authorization"] = `Bearer ${serviceRoleKey}`;
    }

    const feedbacks = await fetchFromSupabase<any>(queryPath, { headers });

    return NextResponse.json({
      success: true,
      source: "supabase",
      data: feedbacks,
    });
  } catch (error) {
    console.error("Error in GET /api/feedback:", error);
    return NextResponse.json({
      success: false,
      source: "error",
      data: [],
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      role_title,
      company,
      project_type,
      rating,
      feedback_text,
      valuable_part,
      linkedin_url,
      allow_public_display,
    } = body;

    // Validation
    const errors: { field: string; message: string }[] = [];
    if (!name || name.trim().length < 2) {
      errors.push({ field: "name", message: "Name must be at least 2 characters" });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: "email", message: "A valid email address is required" });
    }
    if (!role_title || role_title.trim().length === 0) {
      errors.push({ field: "role_title", message: "Job title / role is required" });
    }
    if (!company || company.trim().length === 0) {
      errors.push({ field: "company", message: "Company/Organization name is required" });
    }
    if (!project_type || project_type.trim().length === 0) {
      errors.push({ field: "project_type", message: "Project or service type is required" });
    }
    if (rating === undefined || rating < 1 || rating > 5) {
      errors.push({ field: "rating", message: "Rating must be between 1 and 5 stars" });
    }
    if (!feedback_text || feedback_text.trim().length < 10) {
      errors.push({ field: "feedback_text", message: "Feedback must be at least 10 characters" });
    }
    if (!valuable_part || valuable_part.trim().length < 5) {
      errors.push({ field: "valuable_part", message: "Please share the most valuable part of our collaboration" });
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const newFeedback = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role_title: role_title.trim(),
      company: company.trim(),
      project_type: project_type.trim(),
      rating: Number(rating),
      feedback_text: feedback_text.trim(),
      valuable_part: valuable_part.trim(),
      linkedin_url: linkedin_url ? linkedin_url.trim() : null,
      approved: false, // Moderation default
      allow_public_display: allow_public_display !== false, // Default to true
    };

    if (!isSupabaseConfigured()) {
      console.log("Feedback received (Emulated insert, Supabase not configured):", newFeedback);
      return NextResponse.json({
        success: true,
        message: "Demo mode: Feedback received and validated successfully!",
        data: {
          id: `demo_${Date.now()}`,
          created_at: new Date().toISOString(),
          ...newFeedback,
        },
      });
    }

    // Perform fetch-based POST to Supabase table
    // We request minimal return representation to avoid triggering a post-insert SELECT query.
    // Since unapproved feedbacks (approved=false) are blocked by select RLS policies, return=representation would fail.
    const result = await fetchFromSupabase<any>("feedbacks", {
      method: "POST",
      headers: {
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(newFeedback),
    });

    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully! It is pending review.",
      data: result[0] || newFeedback,
    });
  } catch (error) {
    console.error("Error in POST /api/feedback:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const passcode = request.headers.get("x-admin-passcode");
    if (passcode !== process.env.ADMIN_PASSCODE) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: false, message: "Supabase not configured" }, { status: 500 });
    }

    const body = await request.json();
    const { id, approved, feedback_text, valuable_part, rating, name, role_title, company } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Feedback ID is required" }, { status: 400 });
    }

    const updateData = {
      approved,
      feedback_text,
      valuable_part,
      rating: rating ? Number(rating) : undefined,
      name,
      role_title,
      company
    };

    // Filter out undefined properties to avoid overwriting with null
    const cleanData = Object.fromEntries(
      Object.entries(updateData).filter(([_, v]) => v !== undefined)
    );

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const headers: Record<string, string> = {
      "Prefer": "return=minimal"
    };
    if (serviceRoleKey) {
      headers["apikey"] = serviceRoleKey;
      headers["Authorization"] = `Bearer ${serviceRoleKey}`;
    }

    // In PostgREST, updates are done via PATCH requests targeting the ID
    await fetchFromSupabase<any>(`feedbacks?id=eq.${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(cleanData)
    });

    return NextResponse.json({
      success: true,
      message: "Feedback updated successfully"
    });
  } catch (error) {
    console.error("Error in PUT /api/feedback:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to update feedback",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const passcode = request.headers.get("x-admin-passcode");
    if (passcode !== process.env.ADMIN_PASSCODE) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: false, message: "Supabase not configured" }, { status: 500 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Feedback ID is required" }, { status: 400 });
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const headers: Record<string, string> = {
      "Prefer": "return=minimal"
    };
    if (serviceRoleKey) {
      headers["apikey"] = serviceRoleKey;
      headers["Authorization"] = `Bearer ${serviceRoleKey}`;
    }

    // In PostgREST, deletes are done via DELETE requests targeting the ID
    await fetchFromSupabase<any>(`feedbacks?id=eq.${id}`, {
      method: "DELETE",
      headers
    });

    return NextResponse.json({
      success: true,
      message: "Feedback deleted successfully"
    });
  } catch (error) {
    console.error("Error in DELETE /api/feedback:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete feedback",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
