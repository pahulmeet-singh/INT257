# Next.js CA1 Exam — Intelligence Report & Prep Guide

*Built from: your syllabus (Units I–II), 2 official sample questions, and 64 classmate submissions from last year's test (shared by your class teacher for study purposes).*

---

## 0. How this was built — read this first

I extracted text from all 64 files (62 PDF, 2 docx). **22 PDFs and both docx files were screenshot-based with no text layer**, so I OCR'd every page image with Tesseract. OCR is imperfect — file-tree panels, line numbers, and VS Code chrome sometimes bled into the code text. Where a submission was too garbled to verify a specific technical claim, I say so explicitly rather than guessing.

**Critical framing, which I'm holding to throughout:** you told me different students got different papers, and you don't have the actual question sheets. So "23 students independently did X" is **not** 23 confirmations of one question — it's 23 data points about what topics/patterns *this professor's question bank* draws from. That's still very strong evidence, just of a different thing than "the exact question." I've built the predictions accordingly: not "Q3 will be identical to what Student X wrote," but "the professor's question *shape* strongly favors this pattern."

**What counts as evidence vs. inference, throughout this doc:**
- **[FILE EVIDENCE]** — directly observed in the syllabus, sample questions, or submissions.
- **[MY INFERENCE]** — my prediction, reasoning, or synthesis, clearly flagged as such.
- I never invented a submission detail. Where OCR was too degraded to confirm something, I marked it unconfirmed rather than filling the gap.

---

## 1. The raw evidence base

### 1.1 Syllabus (your authority document)
**[FILE EVIDENCE]**
- **Unit I:** Fundamentals of Next.js (Intro, Features, Project Structure, App Router, Dev Workflow) + Routing and Navigation (File-based Routing, Dynamic Routes, Nested Routes, Layouts, Navigation, **Error and Loading UI**)
- **Unit II:** Rendering Strategies (SSR, SSG, ISR, Client-side Rendering, Rendering Strategy Selection) + Data Fetching (Server Components, Client Components, Fetch API, Client-side Fetching, Server-side Data Fetching, Caching and Revalidation)

### 1.2 The two official sample questions
**[FILE EVIDENCE]** — both follow an identical template:
> Build route `/X` | Fetch from a named public API | Filter/transform the data by some field | Display specific fields (ID, title, body) | **Use Server Component + server-side fetching + [specific rendering strategy] + [specific revalidate window]** | Add navigation links | "Write essential code only"

Q1: `/blog/technology`, jsonplaceholder `/posts`, ISR revalidate **60s**, cached fetch.
Q2: `/events`, jsonplaceholder `/posts`, ISR revalidate **120s**, cached/revalidated data.

This template is the single most important artifact you have. **[MY INFERENCE]** The professor's exam-writing pattern is almost certainly: pick one public JSON API → wrap it in a small fictional business context → assign a specific rendering strategy and a specific number → ask for minimal, working code. This is confirmed independently by the submissions (next section).

### 1.3 What the 64 submissions actually show

I'll give you file-level counts (X out of 64 files contain Y), which is the more honest statistic than raw occurrence counts, since one file can mention something many times.

| Signal | Files (out of 64) | What it tells you |
|---|---|---|
| References `jsonplaceholder.typicode.com` | 22 | Dominant API — matches both sample questions |
| References `dummyjson.com/products` | 6 | Clear secondary API — products/catalog framing |
| Uses `revalidate` (ISR, either syntax) | 14 | ISR is heavily tested, not a one-off |
| Uses `cache: "no-store"` (SSR) | 14 | SSR tested roughly as often as ISR |
| Uses `cache: "force-cache"` explicitly | 4 | SSG tested, but less frequently *as an explicit fetch option* — see §1.4 |
| Has a `loading.js` | 13 | Loading UI is a real, recurring requirement |
| Has `error.js` / `not-found.js` / `notFound()` | 15 | Error UI is a real, recurring requirement — **more prominent than the sample questions alone suggest** |
| Declares `"use client"` | 8 | Client Components tested, clearly the minority case (correct — Server Components are the App Router default) |
| Uses `useState`/`useEffect` for fetching | ~5-6 | Client-side fetching pattern present but rarer than server-side |
| Uses `[id]` as dynamic segment name | 22 occurrences | Strong naming convention — `[id]` is the default assumption unless the domain calls for something else |
| Uses `[slug]` as dynamic segment name | 5 occurrences | Used when the "identifier" is text-like (blog posts, menu items) rather than numeric |
| Uses `next/link` | 27 occurrences | Confirms sample papers' explicit "add navigation links" instruction is a hard requirement |
| Uses `next/image` | **0** | Nobody used Next's optimized Image component — see §7 |
| Uses `generateStaticParams` | 2 files | Present but rare — advanced/bonus-tier territory, not core |
| Explicit "Question N" label survived OCR | 1 (`Question 15`) | Confirms individualized numbered papers, consistent with what you told me. Not enough data to reconstruct "the paper has N questions."

**[MY INFERENCE]** Reading these together: SSR (`no-store`) and ISR (`revalidate`) are tested at roughly equal, high frequency. SSG as a *pure static-at-build, no revalidation* case is comparatively rare in what I could verify — most "static-feeling" answers actually use ISR with a revalidate window, which technically *is* a form of SSG (static generation + incremental revalidation), just not the "build once, never touch again" pure version. Loading and Error UI are more load-bearing than the two sample questions alone would suggest — treat them as core, not optional garnish.

### 1.4 The "skeleton vs. skin" pattern — the most important structural finding

**[FILE EVIDENCE]** The business-context wrapper varies enormously across submissions — I found: product catalogs, courses, student records, orders, music streaming, placements/interviews, libraries, events, blogs, job applicants, a restaurant menu, a fitness tracker, an admin dashboard, travel destinations, quizzes. That's at least 15 distinct fictional domains.

**[MY INFERENCE, high confidence]** But underneath every one of these, the *technical skeleton repeats*: one external API → one route (often with a nested dynamic segment) → one named rendering strategy → one specific revalidate number → a `.map()` over an array → `next/link` navigation. The professor is clearly generating variations on a fixed technical template, not testing 15 different concepts. This means: **don't try to memorize "the events question" or "the catalog question." Memorize the skeleton, and practice re-skinning it fast** — that's a skill you can drill tonight and it will transfer to whatever domain you're handed tomorrow.

### 1.5 A note on what I could *not* verify

Being straight with you about the evidence quality: several submissions were VS Code screenshots where OCR correctly picked up file names and folder trees but scrambled the actual code (editor line numbers, minimap text, and panel labels interleaved with real code tokens). Where I reference a specific submission below, I only claim what I could actually read cleanly. For `error.js` specifically — the corpus confirms 15 files *have* one, but OCR didn't give me clean enough code to verify implementation details from student work, so the error.js example in §5 is taught from Next.js's own current documentation, not reverse-engineered from a submission. I'm flagging this explicitly rather than presenting a guessed reconstruction as if it came from the evidence.

---

## 2. Confidence-rated prediction: what's likely tomorrow

**Methodology, stated plainly:** I combined (a) syllabus weight — what's explicitly named as a unit topic, (b) the sample-question template, (c) file-level frequency across submissions, (d) internal consistency — does the pattern show up in multiple independent forms, not just repetition of one file, and (e) my own knowledge of what's technically core vs. peripheral in App Router. No single factor drives a rating alone.

### 🔴 HIGH CONFIDENCE — build your night around these

| Prediction | Why |
|---|---|
| **One "build a page that fetches from a public API and renders a list" question, wrapped in a novel business context** | Both sample questions are this exact shape. It is the dominant pattern in submissions (22/64 use jsonplaceholder, 6/64 use dummyjson — both are trivial REST JSON APIs perfect for this template). |
| **You will be told an explicit rendering strategy + explicit revalidate number, and must implement it correctly** | Sample Q1 says "ISR/revalidate 60s"; Sample Q2 says "ISR/revalidate 120s." 14/64 submissions independently use `revalidate` with values clustering at 60/120/180/300. This is clearly the professor's signature move — not just picking SSR vs SSG conceptually, but picking a *number* and checking you can wire it correctly. |
| **You'll need `await params` for any dynamic route** | 25 clean occurrences across the corpus, zero contradicting evidence once you exclude one submission using outdated Next.js 14 syntax (see §4.3 for why that one's wrong). This is a Next.js 15 requirement — get this wrong and a working-looking submission will throw a build/type error. |
| **Server Component as the default; you must justify or demonstrate when `"use client"` is needed** | Only 8/64 files use `"use client"`, and the sample questions explicitly say "Use Server Component." App Router defaults to Server Components — the professor is very likely testing whether you know *when you're forced* to opt into Client Components (interactivity, hooks, browser APIs), not defaulting to client-side out of habit. |
| **`next/link` for all internal navigation, never raw `<a>`** | 27 occurrences, zero counter-examples found, and both sample papers explicitly instruct "add links." |
| **A `.map()` rendering a list with a `key` prop** | Present in essentially every submission I read cleanly. This is bread-and-butter React/Next and will be assumed baseline competence even if not the focus of the question. |

### 🟡 MEDIUM CONFIDENCE — know these solidly, budget real time

| Prediction | Why |
|---|---|
| **A `loading.js` requirement, possibly as part of the main question or a small separate ask** | 13/64 files have one. Not in either sample question explicitly, but it's an explicit syllabus sub-topic ("Error and Loading UI") and shows up often enough in independent submissions that I don't think it's incidental. |
| **Error handling: either `error.js`, `not-found.js`, or a `notFound()` call inside a dynamic route** | 15/64 files show this pattern (highest single frequency of any secondary feature). Also an explicit named syllabus sub-topic. My read: this is *more* likely to appear than pure SSG-only questions are. |
| **A question specifically distinguishing SSR vs SSG vs ISR conceptually (not just "implement one")** | The syllabus explicitly lists "Rendering Strategy Selection" as a named sub-topic — that phrase strongly implies a "when would you choose X over Y" question, which is a conceptual/short-answer format distinct from the coding questions. Frequency evidence is indirect here (submissions show *implementation*, not the conceptual question itself), so this is more syllabus-driven than corpus-driven. |
| **Client-side data fetching with `useEffect`/`useState`** | Real but minority pattern (~5-6/64 files), always correctly paired with `"use client"`. Syllabus explicitly names "Client-side Fetching" as a sub-topic, so don't skip it, but it's not where the bulk of points likely sit. |
| **Nested dynamic routes (e.g., `/orders/[id]/tracking`)** | Present in multiple submissions (e.g., an orders-tracking app, a fitness-tracker app with 3-4 nesting levels). Syllabus explicitly names "Nested Routes." Moderate-to-high likelihood of appearing as a complexity layer on top of the core fetch question. |

### 🟢 LOW CONFIDENCE / SPECULATIVE — nice to have, don't over-invest tonight

| Prediction | Why it's lower confidence |
|---|---|
| **`generateStaticParams` for pre-rendering multiple dynamic-route pages at build time** | Only 2/64 submissions show it. Real syllabus-adjacent concept (SSG + Dynamic Routes intersection) but clearly not core to what most students were asked, or most students skipped/couldn't do it. Could be a bonus/advanced question, could be untested this year too. |
| **Next.js Image component (`next/image`)** | **Zero** occurrences across all 64 submissions despite images appearing in some UIs (rendered as plain `<img>` a few times). Either genuinely untested, or it's a gap nobody happened to hit. I can't distinguish those from the evidence, so treat this as low-priority — know the one-line concept (automatic optimization/lazy-loading) but don't drill implementation syntax. |
| **A pure "SSG, cache forever, no revalidation at all" question with `force-cache` and no revalidate number** | Only 4/64 files use bare `force-cache`. Most "static-feeling" submissions actually use ISR (static + scheduled revalidation) rather than pure one-time-static. The professor may simply prefer ISR as "the SSG example" since it's more demonstrably testable (you can point to a number and ask "why this number"). |
| **Project structure / dev workflow theory questions (e.g., "what does `next dev` do")** | Named in the syllabus (Unit I, "Development Workflow") but essentially invisible in submissions, which are all implementation-focused. Could mean it's asked as a quick 1-2 mark question nobody bothered to write about at length, or it's genuinely low-weight. Skim, don't drill. |

---

## 3. What you absolutely must know (memorize this section cold)

This is taught to be *reproduced from scratch under exam pressure*, not recognized. Read each explanation, then close your eyes and try to write the code before checking it again.

### 3.1 The four rendering strategies — the real mental model

Forget "SSR renders on the server, SSG renders at build time" as your only definition — that's the *textbook* definition, but under the hood in App Router, **everything is controlled by one thing: how the `fetch()` call is cached.** This is the actual lever the exam is testing.

| Strategy | What it means | How you *actually write it* |
|---|---|---|
| **SSG** (Static Site Generation) | Fetch once, reuse the same HTML for every request until you rebuild | `fetch(url, { cache: "force-cache" })` — or simply omit the cache option entirely, since `force-cache` is `fetch`'s **default** in Next.js for static-ish routes |
| **ISR** (Incremental Static Regeneration) | Like SSG, but Next.js automatically re-fetches and regenerates the page in the background after N seconds | `fetch(url, { next: { revalidate: N } })` **or** `export const revalidate = N;` at the top of the file (applies to every fetch in that route segment) |
| **SSR** (Server-Side Rendering) | Fetch fresh data on *every single request*, no caching at all | `fetch(url, { cache: "no-store" })` |
| **CSR** (Client-side Rendering) | Don't fetch on the server at all — ship an empty shell, then fetch in the browser after the component mounts | `"use client"` + `useState`/`useEffect` + `fetch()` inside the effect |

**The one-sentence version you should be able to say out loud:** *"In the App Router, the rendering strategy isn't a separate API — it's a property of the `fetch` call's cache configuration. `force-cache` gives you SSG, `no-store` gives you SSR, and `next: { revalidate: N }` gives you ISR, which is SSG with a self-refresh timer."*

**Two equally valid ISR syntaxes — know both, since submissions used both:**
```js
// Option A: per-fetch (more common in the sample questions' phrasing)
const res = await fetch("https://api.example.com/data", {
  next: { revalidate: 60 },
});

// Option B: segment-level (applies to the whole route file — cleaner when you have multiple fetches)
export const revalidate = 60;

const res = await fetch("https://api.example.com/data");
```
If the question gives you one specific number (e.g., "revalidate 60s"), either syntax is correct — segment-level is slightly cleaner if you have more than one fetch call on the page, since you only declare it once.

### 3.2 The complete, correct skeleton — memorize this shape

This is the shape that will solve the large majority of what you'll be asked. Practice writing this from memory, then swap in whatever API/domain you're given.

```js
// app/<route-name>/page.js

export const revalidate = 60; // <-- swap in whatever number the question gives you

export default async function RouteName() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, // matches the segment-level value above
  });
  const data = await res.json();

  return (
    <div>
      <h1>Page Title</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
```

**Walk through every line and be able to explain *why* it's there:**
- `export default async function` — page components in App Router **can be `async`** directly (this is unique to Server Components; you could never do this in old React). No `useEffect` needed to fetch — you just `await` right in the component body.
- No `"use client"` at the top — this is a Server Component by default. This is correct for server-side fetching and is what both sample questions explicitly ask for.
- `key={item.id}` inside the `.map()` — React requires a stable, unique key on list items. Using the array index (`key={index}`) is a common but technically-wrong shortcut — if asked to justify it, use a real ID from the data, not the index.
- The `fetch` call is a plain `await`, not wrapped in `try/catch` in this minimal version — if the question says "write essential code only" (as both samples do), a bare `await` is acceptable and expected. If the question doesn't say that, add a `if (!res.ok)` check (see §3.5).

### 3.3 Dynamic routes with `await params` — the Next.js 15 requirement

**[FILE EVIDENCE + independently verified against Next.js's own official upgrade docs]** Starting in Next.js 15, `params` is a **Promise**, not a plain object. You must `await` it inside an `async` component. 25 separate submissions in your corpus use this correctly; the syllabus's "Dynamic Routes" topic will almost certainly be tested with this requirement live.

```js
// app/<route-name>/[id]/page.js

export const revalidate = 60;

export default async function DetailPage({ params }) {
  const { id } = await params; // <-- MUST await this in Next.js 15. Forgetting this is the #1 syntax trap.

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  const item = await res.json();

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
    </div>
  );
}
```

**Why this trips people up:** in Next.js 14 and earlier, you could write `{ params }: { params: { id: string } }` and use `params.id` directly, no `await`. That pattern is now technically outdated. One submission in your corpus (`generateStaticParams` example, otherwise a genuinely strong answer) used the old, un-awaited pattern — good structure, outdated syntax. **If you write `params.id` without awaiting first, on the version of Next.js this course uses, that is a bug**, not a stylistic choice — say this explicitly if a question asks you to spot an error in given code.

### 3.4 Server Components vs. Client Components — the decision rule

**The rule you should recite:** *"Everything is a Server Component by default in the App Router. You only add `"use client"` when you need something that can only happen in the browser: `useState`, `useEffect`, event handlers like `onClick`, or browser-only APIs like `localStorage`."*

```js
// Server Component (default — no directive needed)
// Can be async, can fetch directly, cannot use useState/useEffect/onClick
export default async function ServerExample() {
  const res = await fetch("...");
  const data = await res.json();
  return <div>{data.title}</div>;
}
```

```js
"use client"; // MUST be the very first line of the file, above imports

import { useState, useEffect } from "react";

// Client Component — CANNOT be async at the top level.
// Must fetch inside useEffect, store result in useState.
export default function ClientExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []); // empty dependency array = run once on mount

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
```

**Common trap to call out explicitly if asked "what's wrong with this code":** a Client Component function declared as `async function Component()` — **this is invalid.** Client Components cannot be `async` at the top level (that's a Server Component-only capability). If you see `"use client"` combined with `export default async function`, that's a bug — the fetch needs to move into `useEffect` instead.

### 3.5 Loading and Error UI — the file conventions

These are special files Next.js recognizes purely by name, placed alongside `page.js` in the same route folder.

**`loading.js`** — shown automatically while the page's data is being fetched (Next.js wraps your page in a React Suspense boundary for you):
```js
// app/<route-name>/loading.js
export default function Loading() {
  return <p>Loading...</p>;
}
```
No props, no imports needed beyond the component itself. This is the simplest file convention in the whole syllabus — if it comes up, it should cost you thirty seconds.

**`error.js`** — catches runtime errors thrown anywhere in that route segment. **This one has a hard rule: it must be a Client Component.** [Verified against Next.js's current official documentation — this is non-negotiable, not a style preference.]
```js
// app/<route-name>/error.js
"use client"; // required — error boundaries must be Client Components

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```
- `error` — the actual Error object that was thrown.
- `reset()` — a function Next.js gives you that attempts to re-render the segment (useful for transient failures like a flaky API call).

**`not-found.js`** — shown when you explicitly call the `notFound()` function (imported from `next/navigation`) inside a Server Component, typically after checking that fetched data doesn't exist:
```js
// app/<route-name>/[id]/page.js
import { notFound } from "next/navigation";

export default async function DetailPage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound(); // triggers the nearest not-found.js
  }

  const item = await res.json();
  return <h1>{item.title}</h1>;
}
```
```js
// app/<route-name>/not-found.js
export default function NotFound() {
  return <h2>Item not found.</h2>;
}
```
6 separate submissions in your corpus call `notFound()` this way — it's a real, recurring pattern. Note it's a **Server Component convention** (no `"use client"` needed) — different from `error.js`.

### 3.6 Layouts and nested routing

```js
// app/<route-name>/layout.js
export default function RouteLayout({ children }) {
  return (
    <div>
      <nav>{/* shared navigation for this route and everything nested under it */}</nav>
      {children}
    </div>
  );
}
```
**What to say if asked to explain layouts conceptually:** *"A `layout.js` wraps its own `page.js` and every nested route below it in the folder tree, and — critically — it does NOT re-render when you navigate between child pages. Only the `children` slot updates. This is what makes shared navigation bars/sidebars efficient in the App Router."*

### 3.7 Navigation with `next/link`

```js
import Link from "next/link";

<Link href="/products">View all products</Link>
<Link href={`/products/${item.id}`}>{item.title}</Link>
```
**Why not `<a href="...">`:** `next/link` enables client-side navigation (no full page reload) and Next.js automatically prefetches the linked page in the background when the link scrolls into view. If a question asks you to explain the difference, that's the one-sentence answer to give.

---

## 4. Worked solutions: the sample questions + realistic variants

Do these tonight, from scratch, with a timer. This is the actual skill the exam is testing — re-skinning the same skeleton fast under a new business context.

### 4.1 Sample Q1, solved in full (Blog Category Page)

*Task: `/blog/technology`, API `jsonplaceholder.typicode.com/posts`, treat `userId=1` as Technology posts, display ID/title/body, Server Component + server-side fetching + ISR/revalidate 60s + cached fetch, links to `/blog` and `/`.*

```js
// app/blog/technology/page.js
import Link from "next/link";

export const revalidate = 60;

export default async function TechnologyPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  const techPosts = posts.filter((post) => post.userId === 1);

  return (
    <div>
      <h1>Technology Posts</h1>
      {techPosts.map((post) => (
        <div key={post.id}>
          <h2>ID: {post.id} — {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <Link href="/blog">Back to Blog</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
```
Note the `.filter()` before `.map()` — "treat posts with userId=1 as Technology posts" is a filtering instruction hidden inside the business framing. Watch for this exact pattern tomorrow: **the professor frequently disguises a plain array filter as a domain rule** ("treat X as Y"). Read the question for the actual data operation underneath the story.

### 4.2 Sample Q2, solved in full (Event Listing)

*Task: `/events`, same API, treat each post as an event, ID/title/body, Server Component + server-side fetching + ISR/revalidate 120s + cached/revalidated data, links to `/` and `/events`, no CSS.*

```js
// app/events/page.js
import Link from "next/link";

export const revalidate = 120;

export default async function Events() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const events = await res.json();

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <p>ID: {event.id}</p>
          <p>Title: {event.title}</p>
          <p>{event.body}</p>
        </div>
      ))}
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
    </div>
  );
}
```
"No CSS" is explicit here — don't waste exam time adding `className`s or a stylesheet unless a question asks for it. Both samples reward *working, minimal* code over polish.

### 4.3 Variant: same skeleton, SSR instead of ISR, dynamic route

*Imagine: "Build `/products/[id]` that fetches a single product from `dummyjson.com/products/{id}`, always showing live data (no caching), Server Component."*

```js
// app/products/[id]/page.js

export default async function ProductDetail({ params }) {
  const { id } = await params; // Next.js 15: params is a Promise, must await

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store", // SSR — fresh data every request, no caching at all
  });
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}
```
This is the exact shape 14 different submissions independently converged on for SSR — the only things that ever change are the API and the field names.

### 4.4 Variant: Client Component + `useEffect` (CSR)

*Imagine: "Convert the events list to fetch on the client side instead."*

```js
"use client";
import { useState, useEffect } from "react";

export default function EventsClient() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading events...</p>;

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  );
}
```
Notice everything that changes relative to the server version: `"use client"` at the top, the component is **not** `async`, the fetch moves inside `useEffect`, and you need a `loading` state yourself since you no longer get `loading.js`'s automatic Suspense handling for free (that only wraps *server-side* fetches).

### 4.5 Variant: SSG with `generateStaticParams` (advanced/bonus tier)

*Imagine: "Pre-render the first 10 posts as static pages at build time, each individually cacheable."*

```js
// app/posts/[id]/page.js

export const revalidate = 300;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(), // params from generateStaticParams must be strings
  }));
}

export default async function PostDetail({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 300 },
  });
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```
Only 2/64 submissions attempted this — it's real but clearly a stretch case. If a question explicitly asks for it, the piece people forget is `.toString()` on the id — `generateStaticParams` must return string values matching the URL segment type.

---

## 5. Common traps, mistakes, and misconceptions — verified against actual submission errors

Every item here is something I could concretely point to, either in a submission or against Next.js's own current documentation. I'm not speculating on generic "things people usually get wrong" — these are specific.

| Trap | What I actually saw | The fix |
|---|---|---|
| **Using `params.id` without `await`** | One otherwise-strong submission (`generateStaticParams` + ISR + correct structure) used `params: { id: string }` and accessed `params.id` directly — this is the pre-Next.js-15 pattern | Always `const { id } = await params;` inside an `async` component |
| **Malformed JSX return wrapping** | A `not-found.js` file had `return <>...</> )` — a stray closing paren left over from converting between `return (...)` and `return <>...</>` shorthand | Pick one: either `return (<><h1>...</h1></>);` or `return <><h1>...</h1></>;` — don't mix a paren-wrapped return with fragment shorthand and leave a dangling `)` |
| **Empty destructuring after awaiting params** | One submission wrote `const { } = await params;` — awaited correctly, then destructured nothing, so the id was never actually available later in the function | Double-check that what you destructure from `params` matches what you actually use later — this is an easy copy-paste slip under time pressure, actively re-read this line before moving on |
| **Client Component declared `async`** | Not directly observed as a clean example in the corpus, but flagging because it's the single most common Client/Server confusion in App Router generally, and the corpus's Client Component examples correctly avoid it — meaning the students who understood the rule got it right, which is itself useful confirmation of the rule | `"use client"` components can never be `async function Component()`. Fetch inside `useEffect` instead |
| **Forgetting `key` or using array index as key** | Present in some corpus examples in weaker forms | Always use a real unique field (`item.id`) as the `key`, never the loop index, unless explicitly told the data has no stable ID |
| **Multiple different revalidate values on the same page (segment-level export, or several fetches with different numbers)** | Not directly observed in the corpus, but verified against Next.js's own docs: if a statically-rendered route has more than one `revalidate` value in play — whether from `export const revalidate` plus a fetch, or from two separate fetches — **the lowest number wins for the whole route**, not the one you "meant" | If you only need one revalidate window, declare it in exactly one place. If a question genuinely needs two different fetches with two different freshness needs, know that the page as a whole will revalidate at the shorter interval — say this explicitly if asked to explain the behavior |
| **Using `next/image` incorrectly or not at all when asked** | Zero submissions used it, meaning if it IS asked tomorrow, this is genuinely fresh territory for most of the class — a chance to differentiate yourself | Minimum viable knowledge: `import Image from "next/image"; <Image src={url} alt="description" width={200} height={200} />` — `src`, `alt`, and (`width` + `height`, or `fill` with a sized parent) are all required props, unlike a plain `<img>` |

---

## 6. Theoretical / conceptual questions — model answers

The syllabus's "Rendering Strategy Selection" phrasing strongly suggests at least one short-answer/conceptual question distinct from the coding tasks. Practice saying these out loud, not just reading them.

**Q: "When would you choose SSR over SSG?"**
> *Use SSR when the data changes on every request and staleness is unacceptable — a live stock price, a personalized dashboard, search results filtered by user input. Use SSG when the content is the same for every visitor and changes rarely, if ever — a marketing page, documentation, a blog post that isn't actively being edited. SSG is faster (pre-built, served from cache/CDN) and cheaper (no server compute per request), so you only pay SSR's cost when you actually need per-request freshness.*

**Q: "What problem does ISR solve that plain SSG doesn't?"**
> *Plain SSG content is frozen until you manually rebuild and redeploy. ISR lets you keep SSG's speed and caching benefits while automatically refreshing the content in the background after a set number of seconds, without a full redeploy — so a product catalog can update its prices every few minutes without you needing to trigger a new build every time something changes upstream.*

**Q: "Explain Server Components vs Client Components."**
> *Server Components run only on the server and never ship their code to the browser — they can directly `await` a `fetch()` or a database call and are the default in the App Router. Client Components are marked with `"use client"`, run in the browser, and are the only place you can use React hooks like `useState`/`useEffect` or attach event handlers like `onClick`. The App Router pushes you toward Server Components by default specifically to minimize how much JavaScript gets sent to the browser — you opt into Client Components only when you actually need interactivity.*

**Q: "What is the App Router's file-based routing convention?"**
> *Every folder under `app/` becomes a URL segment, and a `page.js` file inside a folder is what makes that segment publicly visible/routable — a folder without a `page.js` is not a reachable route on its own. Square brackets create a dynamic segment (`[id]` matches any value at that position), `layout.js` wraps that segment and everything nested under it, and special files like `loading.js`, `error.js`, and `not-found.js` are automatically wired in by Next.js without any manual routing code.*

---

## 7. Priority triage — where to spend tonight's hours

### Must know cold (this is most of the exam's likely point value)
- The `fetch` cache-config mental model (§3.1) — `force-cache` / `no-store` / `next: { revalidate }`
- The full page skeleton from memory (§3.2), re-skinnable to any API/domain in under 5 minutes
- `await params` for every dynamic route, no exceptions (§3.3)
- Server vs. Client Component decision rule + syntax differences (§3.4)
- `next/link` for navigation, always (§3.7)
- Being able to solve Sample Q1 and Q2 from scratch, then immediately re-solve them with a different API/domain swapped in, without looking anything up

### Know solidly if you have time left
- `loading.js` and `error.js`/`not-found.js` conventions (§3.5) — genuinely common in the evidence, not hard to memorize, high value-per-minute-studied
- Layouts and how `children` works across nested routes (§3.6)
- The conceptual "when would you choose X" answers (§6) — practice saying these, not just reading them
- Client-side fetching with `useEffect` (§4.4) as a variant you can produce if explicitly asked

### Lower priority — skim only, don't drill
- `generateStaticParams` (§4.5) — real but rare in the evidence; know the concept, don't over-rehearse the syntax
- `next/image` — nobody in 64 submissions used it; know the one-liner in §5's trap table (`src`, `alt`, `width`, `height` — or `fill` in place of width/height — are all required) and move on
- Project structure / dev workflow trivia (`next dev` vs `next build` vs `next start`) — named in the syllabus but essentially invisible in the evidence of what's actually asked

---

## 8. Tonight + tomorrow-morning plan

**Tonight (assuming a few hours before sleep):**
1. **(20 min)** Read §3.1–§3.4 once, out loud if you can. Don't write code yet — just get the mental model solid.
2. **(30 min)** Close this doc. Write the full skeleton from §3.2 from memory. Check it against the doc. Fix what you got wrong. Do it again from memory until it's clean in one pass.
3. **(30 min)** Solve Sample Q1 and Q2 (§4.1, §4.2) from scratch, timed — give yourself 10-12 minutes each, since that's roughly what exam time pressure will feel like.
4. **(20 min)** Pick one variant from §4.3 or §4.4 you haven't tried and solve it cold, no peeking, then check.
5. **(15 min)** Read §5's trap table twice. These are the specific, real mistakes — burn them into memory so you catch them in your own code under pressure.
6. **(10 min)** Read §6's conceptual answers out loud once each.
7. Sleep. Seriously — pattern-matching speed tomorrow matters more than one extra hour of cramming tonight.

**Tomorrow morning, before the exam (30-45 min):**
1. **(10 min)** Re-read §3.2 skeleton and §3.3 `await params` rule one more time — these are your highest-frequency, highest-certainty building blocks.
2. **(10 min)** Re-read §5's trap table once more — you want these front-of-mind, not back-of-mind.
3. **(10-15 min)** Do one more timed variant, any one you haven't already drilled twice.
4. Walk in. When you read the question, first identify: *(a) which API, (b) which rendering strategy + number, (c) static or dynamic route, (d) any extra requirement (loading/error/nested route)* — map it onto the skeleton, then fill in the domain-specific field names last. The structure comes first; the business story is just decoration.

---

## 9. One honest closing note

The strongest, most load-bearing evidence you have is genuinely the **two sample questions**, not the 64 submissions — they're official, unambiguous, and both point at the exact same template. The submissions are valuable *confirmation and breadth* (they show the template holds across at least 15 different business-context variations, and they surface the loading/error-UI signal that the samples alone under-represent) — but they're indirect evidence from students who themselves got things wrong sometimes, exactly as you flagged at the start. Where I found a real error in a submission, I called it out and corrected it against verified Next.js behavior rather than treating any one student's code as ground truth. Good luck tomorrow.
