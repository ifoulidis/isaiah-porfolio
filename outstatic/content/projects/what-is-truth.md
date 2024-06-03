---
title: 'What Is Truth'
status: 'draft'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'what-is-truth'
description: ''
coverImage: '/images/main-advertising-card-g0NT.jpg'
publishedAt: '2024-06-03T04:54:50.147Z'
---

# The Short Story

What is Truth is a website designed to provide the sort of knowledge I wish I had access to quickly and efficiently. It's a long process learning about the different beliefs in the world, and a lot of people are highly dishonest when explaining them, wanting to sugar-coat everything. Who wants to trawl through article after article and struggle to find sources or even direct, unapologetic answers? Moreover, the quizzes I build hit users with information that lots of people simply don't come across because it is against the narrative (though not wild and speculative either).

# Features

- Dark mode can be toggled and is selected based on the user's choice during a previous visit or by prefers-color-scheme for first-time visitors.
- Reusable quiz components for ease of adding attributes and new content.
- Integrates both markdown and MDX articles, so that if extra features will improve the content, it's easy to add them in.
- On-the-go content management.
- Videos, images, and footnotes in articles are all processed automatically for better performance and standardized appearance.
- Internal and external links are automatically detected in MD and MDX files. Internal links then use the next/link component, which loads in the background, and external links are given the appropriate attributes to open in a new tab.
- A Table of Contents is automatically generated from the headings in an article. The heading level is clear in the table, and it can be expanded or hidden.
- Modals are used for short content, so that the user does not have to leave the page and feels as though he isn't done with just one topic.

# Tech Stack

- Built with Next.js (React library).
- Framer Motion is used for animations.
- Decap CMS for content management (headless CMS), although I plan to migrate to Outstatic in the future.
- Modular CSS is used for readability and flexibility.
- Hosted on Netlify and Vercel. The primary domain points to the Vercel deployment. The Netlify instance is for content management (see below).

# SEO and Sharing

Each page needs to be very share-friendly, so the following attributes were considered:

- Open-graph format data.
- Twitter specifications.
- Optimized image sizes for sharing cards.

# The Difficulties

## Next.js Updates

With Next.js updates I could no longer include &lt;a&gt; inside &lt;Link&gt; elements for styling, and the &lt;Image/&gt; element changed substantially. Fortunately, the Next.js docs are quite good.

## Framer Motion

Framer Motion does not have the clearest docs in my opinion, and it seems to be fairly buggy. I had to go to GitHub issues and forums for some answers, and other things I just learned through experience or had to work around.

One thing I learned in particular is that the children must NOT have initial and animate props!

## Styling

Although I had been told to use *em* for relative units, I ran into issues. Text that should have been the same size clearly wasn't (i.e., blockquotes and paragraphs). It turns out that *em* is relative to the parent element and can create inconsistent sizes, so *rem* is a far better option. Other things I discovered:

- Interactive components cannot be wrapped within each other, so I made the Read More button inside a clickable card actually just a div. (Motion components are allowed to be nested, just not, say, an &lt;a&gt; inside an &lt;a&gt;).
- Animations frequently cause issues with page size due to overflow, making only part of the page wider, for instance. As long as the parent element hides the overflow, the problem is solved!
- I ran checks to see if a user had visited previously or had a colour scheme preference in their browser, but because I had to supply a default value, I was accidentally overriding these checks by setting the state to the default value. The solution was using useRef to check if the initial render had taken place before changing the state.