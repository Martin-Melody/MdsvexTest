---
title: Mastering Svelte Transitions and Animations
description: Learn how to add smooth transitions and animations to your Svelte and SvelteKit apps.
date: '2026-02-10'
categories:
  - svelte
  - animations
published: true
---

## Introduction

Animations play a critical role in delivering delightful user experiences. Svelte provides built-in tools for transitions and animations, enabling smooth interactions with minimal effort.

### Built-In Transitions

Svelte includes transitions like `fade`, `fly`, and `slide` that can be applied easily:

```svelte
<script>
 import { fade } from 'svelte/transition';
 let visible = true;
</script>

<button on:click={() => (visible = !visible)}>Toggle</button>

{#if visible}
 <div transition:fade>This element fades in and out.</div>
{/if}
```

### Custom Transitions

```svelte
<script>
 import { tweened } from 'svelte/motion';
 import { cubicOut } from 'svelte/easing';

 const opacity = tweened(0, {
  duration: 400,
  easing: cubicOut
 });
</script>
```

## Final Thoughts

With Svelte’s animation toolkit, you can bring life to your UI with very little code. In a future post, we'll explore page transitions in SvelteKit.
