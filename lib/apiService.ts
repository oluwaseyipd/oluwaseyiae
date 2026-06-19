/**
 * API Service for handling feedback submissions and data fetching
 * This is a demo service that simulates API calls
 */

export interface FeedbackInput {
  name: string;
  email: string;
  message: string;
  rating?: number;
}

export interface FeedbackResponse {
  success: boolean;
  message: string;
  data?: FeedbackInput & { id: string; timestamp: string };
  error?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validate feedback form data
 */
export const validateFeedback = (data: Partial<FeedbackInput>): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  } else if (data.name.trim().length > 50) {
    errors.push({ field: "name", message: "Name must not exceed 50 characters" });
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: "email", message: "Email is required" });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push({ field: "email", message: "Please enter a valid email address" });
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: "message", message: "Feedback message is required" });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: "message", message: "Feedback must be at least 10 characters" });
  } else if (data.message.trim().length > 1000) {
    errors.push({ field: "message", message: "Feedback must not exceed 1000 characters" });
  }

  // Rating validation (optional but if provided should be 1-5)
  if (data.rating !== undefined) {
    if (data.rating < 1 || data.rating > 5) {
      errors.push({ field: "rating", message: "Rating must be between 1 and 5" });
    }
  }

  return errors;
};

/**
 * Submit feedback to the server (demo API call)
 * In a real app, this would make an actual HTTP request
 */
export const submitFeedback = async (data: FeedbackInput): Promise<FeedbackResponse> => {
  try {
    // Validate input
    const validationErrors = validateFeedback(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        message: "Validation failed",
        error: validationErrors.map((e) => `${e.field}: ${e.message}`).join("; "),
      };
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate occasional error (10% chance)
    if (Math.random() < 0.1) {
      return {
        success: false,
        message: "Failed to submit feedback",
        error: "Server error: Please try again later",
      };
    }

    // Success response
    return {
      success: true,
      message: "Thank you for your feedback! We appreciate your input.",
      data: {
        ...data,
        id: `feedback_${Date.now()}`,
        timestamp: new Date().toISOString(),
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

/**
 * Fetch feedback statistics (demo)
 */
export const fetchFeedbackStats = async () => {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: {
        totalFeedback: 47,
        averageRating: 4.8,
        responseRate: 92,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
