---
sidebar_position: 3
---

# Migrating from Next.js to Astro: A Performance-First Approach

After migrating our stack from Next.js to Astro, we learned some hard lessons about JavaScript hydration, First Load JS, and what "interactive" really means. Here's what we wish we knew from day one.

## The Core Insight: HTML First, JS Later

**Next.js treats everything as interactive by default.** Every component ships with React runtime, hydration code, and event handlers—even if you're just rendering static text.

**Astro flips this model:** Everything is static HTML unless you explicitly opt into JavaScript. This isn't just a philosophical difference—it's a measurable performance win.

## First Load JS: The Metric That Matters

First Load JS is the amount of JavaScript your browser downloads, parses, and executes before rendering the page. For first-time visitors without cache, this is the single biggest performance bottleneck.

**The rule is simple:** Don't ship JS unless you must.

In Next.js, you pay the React tax on every component. In Astro, you only pay for components that actually need interactivity.

## What "Interactive" Really Means

Here's where most developers trip up: **Buttons don't require JavaScript.**

```astro
<!-- This is just HTML. No JS needed. -->
<a href="/pricing" class="button">View Pricing</a>
```

Only hydrate components that use:
- State (`useState`, `useSignal`, etc.)
- Effects (`useEffect`, lifecycle methods)
- JavaScript event handlers (`onClick`, `onInput`)
- Browser APIs (localStorage, canvas, WebGL)

If your component is just rendering data or navigation, keep it server-rendered.

## Client Directives: The Right Tool for the Job

Astro gives you surgical control over hydration with client directives. Here's when to use each:

### `client:load` — Critical Interactivity

Use for above-the-fold interactive components that users expect immediately.

```astro
<!-- Navigation with mobile menu toggle -->
<Navigation client:load />

<!-- Hero form that captures leads -->
<ContactForm client:load />
```

**Ships JS immediately.** Use sparingly.

### `client:visible` — Lazy Interactivity

Use for below-the-fold components. JS only loads when the component enters the viewport.

```astro
<!-- Pricing toggle that's lower on the page -->
<PricingTable client:visible />

<!-- Interactive demo users scroll to -->
<ProductDemo client:visible />
```

**Reduces initial bundle size** by deferring non-critical JS.

### `client:only` — Browser-Only Code

Use for components that can't be server-rendered (they use `window`, `document`, or browser-only APIs).

```astro
<!-- Canvas animation that uses requestAnimationFrame -->
<AnimatedBackground client:only="react" />

<!-- WebGL component that needs GPU context -->
<ThreeJSScene client:only="react" />
```

**⚠️ Warning:** `client:only` skips SSR entirely. The component doesn't exist until JavaScript loads. This causes:
- Layout shift (content pops in after page load)
- SEO issues (Googlebot might not see it)
- Hydration errors (if you try to SSR it accidentally)

**Only use `client:only` when SSR is impossible.** For everything else, use `client:load` or `client:visible`.

## The Island Architecture Pattern

Astro's real power is in splitting mixed content into islands. Instead of making an entire section interactive, isolate the parts that need JS.

### Before: Everything Is Interactive

```astro
<!-- The entire pricing section ships with React -->
<PricingSection client:load>
  <h2>Pricing Plans</h2>
  <p>Choose the plan that works for you.</p>
  <PricingCards /> {/* Only this needs JS! */}
</PricingSection>
```

**Result:** Ships unnecessary JS for static headings and text.

### After: Islands of Interactivity

```astro
<!-- Server-rendered HTML -->
<section>
  <h2>Pricing Plans</h2>
  <p>Choose the plan that works for you.</p>

  <!-- Only the interactive part hydrates -->
  <PricingCards client:visible />
</section>
```

**Result:** Lower First Load JS, faster page load, same user experience.

## Real-World Example: Landing Page Hero

Let's say you have a hero section with an animated background, a heading, and a CTA form.

### Next.js Approach

```tsx
// Everything hydrates, even the static text
export default function Hero() {
  return (
    <section>
      <AnimatedBackground />
      <h1>Welcome to Our Product</h1>
      <p>The best solution for your needs.</p>
      <CTAForm />
    </section>
  );
}
```

**First Load JS:** ~85 KB (React runtime + all components)

### Astro Approach

```astro
---
import AnimatedBackground from '../components/AnimatedBackground';
import CTAForm from '../components/CTAForm';
---

<section>
  <!-- Browser-only canvas animation -->
  <AnimatedBackground client:only="react" />

  <!-- Static HTML -->
  <h1>Welcome to Our Product</h1>
  <p>The best solution for your needs.</p>

  <!-- Critical interactive form -->
  <CTAForm client:load />
</section>
```

**First Load JS:** ~22 KB (only CTAForm hydrates immediately, AnimatedBackground deferred)

## Common Mistakes We Made

### 1. Using `client:only` by Default

We initially used `client:only` everywhere because we came from Next.js and didn't trust SSR in Astro. This caused:
- SEO issues (Google couldn't see our content)
- Layout shift (components popped in after load)
- Unnecessary hydration errors

**Fix:** Default to server-rendered. Only add `client:*` directives when you need interactivity.

### 2. Hydrating Static Navigation

We hydrated our nav component because it had a mobile menu toggle—but we didn't need React for that.

**Fix:** Use vanilla JS or Alpine.js for simple toggles. Reserve React/Vue/Svelte for complex state management.

### 3. Not Splitting Heavy Visuals

We made entire sections `client:load` because they had one interactive element buried inside.

**Fix:** Keep layout server-rendered. Isolate heavy visuals (carousels, animations, charts) as separate islands with `client:visible`.

## The Migration Checklist

1. **Audit your components:** Which ones actually need state, effects, or handlers?
2. **Server-render by default:** If it's just rendering data, don't hydrate.
3. **Use `client:visible` for below-the-fold interactivity:** Lazy-load non-critical JS.
4. **Reserve `client:load` for critical interactions:** Nav, forms, and above-the-fold UI.
5. **Only use `client:only` when SSR is impossible:** Canvas, WebGL, and browser-only APIs.
6. **Split mixed content:** Isolate interactive islands from static layout.

## The End Result

After migrating from Next.js to Astro and optimizing our hydration strategy:

- **First Load JS:** Dropped from ~120 KB to ~18 KB
- **Lighthouse Performance:** 78 → 98
- **Time to Interactive:** Reduced by 60%
- **Hydration errors:** Eliminated entirely

**The takeaway:** Treat JavaScript like a tax. Pay it only when required. Astro's strength is HTML first, JS later. Lean into it.
