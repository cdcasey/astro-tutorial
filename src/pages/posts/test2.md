---
layout: '@/layouts/MarkdownPostLayout.astro'
title: My 6th Blog Post
author: Just Chris
description: "This post will show up on its own! (I hope)"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2024-08-08
tags: ["astro", "successes", "testing"]
---
This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.

```jsx
// PreviewLink is a styled component created with Emotion
const previewLinks = React.useMemo(() => {
  return edges.map(({ node }) => {
    const bgUrl = node.featuredImage
      ? node.featuredImage.node.localFile?.childImageSharp.fixed.src
      : ''
    return (
      <PreviewLink
        key={node.id}
        uri={node.uri}
        slug={node.slug}
        title={node.title}
        date={node.date}
        excerpt={node.excerpt}
        bgUrl={bgUrl}
      />
    )
  })
}, [edges])
```
