# AI Mock Interview Platform - Next.js (INT257) Architecture FAQ

This document outlines the specific architectural decisions and constraints for the Next.js App Router project. Please adhere to these strictly.

**1. Database, ORM & API Architecture**
* **Decision:** Next.js Route Handlers and Server Actions paired with Prisma ORM connecting to a Supabase (PostgreSQL) database. 
* **Reasoning:** This is strictly required to satisfy the "ORM Basics" and "API Development" syllabus requirements.

**2. Resume Uploads & Data Mutations**
* **Decision:** Next.js Server Actions pushing directly to Supabase Storage.
* **Reasoning:** Securely parses the PDF upload on the server and pushes it to cloud storage. Perfectly demonstrates "Data Mutations & File Upload" via Server Actions.

**3. UI/UX, Form Handling & Styling**
* **Decision:** Tailwind CSS paired with Shadcn UI components, using Zod.
* **Reasoning:** Guarantees a highly professional, cohesive dark-mode aesthetic. Fulfills "Form Validation" and responsive design requirements.

**4. AI Integration Details**
* **Decision:** Gemini 1.5 Flash API invoked via Next.js Route Handlers or Server Actions.
* **Reasoning:** Generates structured JSON output reliably for the feedback dashboard.

**5. Authentication Strategy**
* **Decision:** NextAuth.js (Auth.js).
* **Reasoning:** This specifically satisfies the "Authentication Concepts, Session Management, Protected Routes" syllabus requirements (INT257 Unit IV).

**6. Database Schema & Core Entities (Prisma Models)**
* `User`: Authentication and profile data (standard NextAuth schema).
* `Interview`: Stores booked slots, selected category, and status.
* `Feedback`: Stores the AI-generated JSON evaluation.
* `Resume`: Stores the URL reference to Supabase Storage.

**7. Git History Simulation Strategy**
* The `generate_repo.sh` script must execute sequential `git add` and `git commit --date="X days ago"` commands.
* Day 1-2: Next.js App Router init, layout setup, Shadcn UI styling.
* Day 3-4: Prisma schema generation, Supabase connection, NextAuth setup.
* Day 5: Server Actions for form validation and resume uploads.
* Day 6: AI API integration and SSR data fetching for the dashboard.
* Day 7: Final UI polish and defense prep.