 create table feedbacks (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    email text not null,
    role_title text not null,
    company text not null,
    project_type text not null,
    rating integer not null check (rating >= 1 and rating <= 5),
    feedback_text text not null,
    valuable_part text not null,
    linkedin_url text,
    approved boolean default false not null,
    allow_public_display boolean default true not null
  );
  
  -- Enable Row Level Security (RLS)
  alter table feedbacks enable row level security;
  
  -- Create Policies
  create policy "Allow public inserts" on feedbacks 
    for insert to anon 
    with check (true);
  
  create policy "Allow public read of approved feedback" on feedbacks 
    for select to anon 
    using (approved = true);