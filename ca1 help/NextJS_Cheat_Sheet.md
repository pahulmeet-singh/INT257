# Next.js CA1 — Cheat Sheet

*One-glance reference. Full reasoning/evidence is in the prep guide — this is just the "what to type."*

---

## 1. The core mental model (say this first, always)

> **The rendering strategy is a property of the `fetch()` cache config, not a separate API.**

| Strategy | Cache config | Meaning |
|---|---|---|
| **SSG** | `{ cache: "force-cache" }` *(or omit — it's the default)* | Fetch once, reuse until rebuild |
| **ISR** | `{ next: { revalidate: N } }` **or** `export const revalidate = N;` | SSG + auto-refresh every N seconds |
| **SSR** | `{ cache: "no-store" }` | Fetch fresh on every single request |
| **CSR** | `"use client"` + `useEffect` + `fetch` | Fetch in the browser, after mount |

---

## 2. The skeleton — write this from memory

```js
// app/<route>/page.js
import Link from "next/link";

export const revalidate = 60; // ← swap in the number the question gives you

export default async function RouteName() {
  const res = await fetch("https://api-url-here", {
    next: { revalidate: 60 }, // match the number above
  });
  const data = await res.json();

  return (
    <div>
      <h1>Title</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
}
```
**Swap:** API URL → filter logic (`.filter()` before `.map()` if question says "treat X as Y") → field names → route folder name. Structure never changes.

---

## 3. Dynamic route — `[id]` folder

```js
// app/<route>/[id]/page.js

export default async function DetailPage({ params }) {
  const { id } = await params; // ⚠️ MUST await — params is a Promise in Next.js 15

  const res = await fetch(`https://api-url/${id}`, { cache: "no-store" });
  const item = await res.json();

  return <h1>{item.title}</h1>;
}
```
`[slug]` instead of `[id]` when the identifier is text-like (blog/menu items), not numeric.

---

## 4. Server vs. Client Component

|  | **Server (default)** | **Client** |
|---|---|---|
| Directive | none needed | `"use client"` — **first line of file** |
| Can be `async`? | ✅ yes | ❌ **never** |
| Fetch how? | direct `await fetch()` in component body | inside `useEffect`, store in `useState` |
| Can use hooks/`onClick`? | ❌ no | ✅ yes |

```js
"use client";
import { useState, useEffect } from "react";

export default function ClientExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api-url")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;
  return <div>{data.title}</div>;
}
```

---

## 5. Special files (drop into the route folder, zero config)

```js
// loading.js — shown automatically during fetch
export default function Loading() {
  return <p>Loading...</p>;
}
```

```js
// error.js — MUST be Client Component (hard rule)
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

```js
// not-found.js — pairs with notFound() call in page.js
export default function NotFound() {
  return <h2>Item not found.</h2>;
}
```
```js
// trigger it from page.js:
import { notFound } from "next/navigation";
if (!res.ok) notFound();
```

```js
// layout.js — wraps page.js + everything nested below; children slot doesn't re-render on nav
export default function RouteLayout({ children }) {
  return (
    <div>
      <nav>...</nav>
      {children}
    </div>
  );
}
```

---

## 6. `generateStaticParams` (bonus tier — know the shape, don't over-drill)

```js
export async function generateStaticParams() {
  const res = await fetch("https://api-url");
  const items = await res.json();
  return items.slice(0, 10).map((item) => ({
    id: item.id.toString(), // ⚠️ must be a string
  }));
}
```

---

## 7. ⚠️ Trap list — re-read this 2 minutes before you walk in

- [ ] `await params` — never `params.id` bare (that's pre-Next.js-15 syntax, now a bug)
- [ ] Client Component (`"use client"`) → **never** `async function Component()`
- [ ] `error.js` → **always** needs `"use client"` (server-side error.js is invalid)
- [ ] `key={item.id}` in every `.map()` — never the array index
- [ ] `next/link`, never raw `<a href>`, for internal navigation
- [ ] Don't declare `revalidate` twice with different numbers (segment-level + per-fetch) — pick one
- [ ] JSX return: don't mix `return (<>...</>)` and `return <>...</>;` — check for a stray trailing `)`
- [ ] "Treat X as Y" in a question = a `.filter()` in disguise. Find the actual field being filtered.

---

## 8. One-line answers for "when would you choose X" questions

- **SSR over SSG:** data changes every request and staleness is unacceptable (live prices, personalized data).
- **SSG over SSR:** content is the same for everyone and rarely changes (marketing pages, docs) — faster, cheaper.
- **ISR's purpose:** keeps SSG's speed, but auto-refreshes content every N seconds without a manual redeploy.
- **Server vs. Client Components:** Server Components are the default and minimize JS shipped to the browser; Client Components are opt-in (`"use client"`) and are the only place hooks/event handlers work.
- **File-based routing:** each `app/` folder = a URL segment; `page.js` makes it routable; `[x]` = dynamic segment; `layout.js` wraps it + children; `loading.js`/`error.js`/`not-found.js` are auto-wired by filename alone.

---

## 9. Two things worth 10 minutes each, with the evidence gap stated plainly

**`error.js` — the convention is confirmed used, the implementation isn't.** Three separate submissions have a file literally named `error.js`/`error.jsx` sitting in the right folder, so the convention is real. But in all three, OCR only ever gave me the filename — the actual code inside was either not on a page I could read or scrambled into VS Code panel noise. So: "`error.js` gets used" is solid; "here's how students actually wrote it" is not something I can back with evidence. What's in the cheat sheet (`"use client"` + `error`/`reset` props) comes from Next.js's own current docs, independently verified — treat it as correct, just not corpus-confirmed.

**Route Handlers — I was wrong to call this untested.** I told you earlier that no submission touches `app/api/` or `route.js`. Re-checking just now, one does — Ananya's file tree shows `app/api/.../route.js` on three separate pages. I still can't read what's inside it (same OCR wall as above), so I don't know if it's a two-line stub or a real endpoint, and I can't tell you how likely it is to matter tomorrow. But "zero evidence of Route Handlers in scope" was the wrong thing to have told you, and since nothing else in either the guide or the cheat sheet covers this, here's the minimum shape:

```js
// app/api/<name>/route.js
export async function GET(request) {
  const res = await fetch("https://api-url");
  const data = await res.json();
  return Response.json(data);
}
```
Exports named after HTTP methods (`GET`, `POST`, etc.) instead of a default component — that's the one structural fact to hold onto. I'd genuinely rather flag this honestly than either bury the correction or oversell how much you need to prepare for it — 10 minutes, not a redo of tonight's plan.

**What I checked and can say cleanly: no submission has a form, `onSubmit`, or POST mutation anywhere.** That part holds. Nothing here points to you needing to handle form submission or data mutation — the entire corpus is read-only fetch-and-display, consistent with everything else in the guide.
