---
title: 'Content Management Options for Web Developers'
status: 'draft'
author:
  name: ''
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'content-management-options'
description: 'Whether you’re a bit tech-savvy and want to create your own blog or need to create a content-driven website for a client, you can start here.'
coverImage: ''
tags: [{"value":"nextJs","label":"NextJs"},{"value":"outstatic","label":"Outstatic"}]
publishedAt: '2024-06-08T23:23:31.446Z'
---

If you’re fairly new to front-end development, or scoping out your options for handling large amounts of content, you might wonder where to start. This article should help you out.

# General Content Management Options

## Option 1: Creating Your Own CMS

Creating a CMS requires the most work, but it will give you the most control over the editor and types of content. (You might also want to consider using a headless CMS that allows customisation of the editor, such as Sanity.) Standard hosting will be required.

If you don’t know where to start with setting up a CMS, really ask yourself if you want to commit a lot of time to this. If you do, you will need a database and a backend, or an integrated service that handles both, such as Firebase or Supabase. MySQL is a simple and ubiquitous database. Laravel (PHP) and Django (Python) are a couple of popular back-end options.

## Option 2: A Headless CMS

Getting started with a headless CMS can be just as fast or faster than hard-coding, and it gives you an editor to use, but if the headless CMS has bugs, you might not be able to remedy them. Customising parts of your content can be the most difficult with this option. A blog with a headless CMS can often run on free-tier plans while it doesn’t have many visitors. 

## Option 3: Hard-Coding

Writing directly within the source code gives you complete control over the appearance of the website. It also leaves you with less parts to worry about. You won’t have as easy of a time editing your content though, especially away from your main device. The free-tier of hosting will work if you use a modern framework (such as Gatsby); otherwise standard hosting will be needed for HTML.

# Other Considerations

## Markdown

Before we go any further, you should know what [markdown syntax](https://www.markdownguide.org/basic-syntax/) is, and you should definitely check out what you can do with it and think about whether it is flexible enough for your content. It is basically plain text that uses special characters to denote things like headings and bold text.

\`# This Is a Heading In Markdown

`**This** would appear bold, and _this_ would be in italics.`

It is easy to convert markdown to rich text and vice versa, so most markdown editors support using rich text, which lets your users get straight into it with no learning required.

However, what if you want custom components in your documents? Most headless CMSs don’t support tables or accordions out of the box, for example, but with Markdocs and MDX, you can add things like these in a moment. Support for these file types seems rare for headless CMSs, but Keystatic supports both. 

### Markdocs

[Markdocs](https://markdoc.dev/docs/) lets you extend markdown with your own custom components and HTML. It allows the creation of tables with rich text by default, among other perks.

### MDX

[MDX](https://mdxjs.com/) mixes markdown syntax with JSX.

ContentLayer is a neat way to instantly handle integration of MDX with Next.js (without a UI). You can simply clone the example from [here](https://github.com/contentlayerdev/next-contentlayer-example/tree/88da08590d6a19c9d1678007c0f2a40513d12981) to get started. 

## Hosting

You should also consider you or your client’s budget for hosting, and how likely the project is to be successful. There are free tiers to Vercel and Netlify, where you could deploy a Next.js or Gatsby site, but they get expensive if your usage is high. Firebase and Supabase also have free tiers for developing your own CMS.

## Custom Components

Whether you’re using plain HTML and JavaScript or bleeding-edge web tools, it is generally easy enough to customise the elements your content will be transformed into. For example, you can add animations to your paragraphs, ids to your headings, or customise all external links.

## Styling options

Besides the usual CSS options, with modern frameworks and tools, you have plenty of options to speed up the process or easily separate the styles for your content from the rest of your website styles; e.g., [Tailwind](%5Bhttps://tailwindcss.com%5D\(https://tailwindcss.com/\)), [Styled JSX](https://nextjs.org/blog/styling-next-with-styled-jsx), [modular styles](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/), and [Material UI](https://mui.com/material-ui/all-components/).

Tailwind, for example, has typography classes that provide with you truly classy styles for the elements in your articles in a moment. You can also easily specify choices from the available colour schemes for light and dark modes.

## Front-End Frameworks

When considering a framework, you may want to use one you are likely to use for other projects in future. The following are all versatile and great for content-heavy websites:

- Next.js ([docs](https://nextjs.org/docs))
- Gatsby ([docs](https://www.gatsbyjs.com/docs/))
- Astro ([docs](https://docs.astro.build/en/getting-started/))
- Vue ([docs](https://vuejs.org/guide/introduction.html))

# Specific Content Management Options

## Outstatic

[Outstatic](%5Bhttps://outstatic.com%5D\(https://outstatic.com/\)) is a headless CMS that supports using local files, so if you want to host a free site on Vercel, this is a great choice. You can deploy a starter in one click and make it your own from there.

The editor is good-looking and user-friendly, which is great. However, I have found that I need to rebuild the metadata when I add posts (there is a button for this in Settings), which is slightly annoying. Changing a post from draft to published also seems to be an issue on mobile.

Overall, this is my favourite option so far, since it is the best for on-the-go editing and free.

## HTML

A plain old HTML blog is an option you should probably consider. You can host them very cheaply, and if your needs are quite straightforward and it is only you dealing with the content, it may be your best choice.

Writing with HTML elements directly will give you the freedom to customise wherever you see fit without having to worry about a plug-in or a bug with the headless CMS. It will also mean a blazing fast website, without bulky extras that slow down loading.

The downsides are that if you want a lot of reusable components, copying them and keeping any changes to them consistent is a chore; and you probably won’t be able to just log in anywhere and edit your content—at least not in a very user-friendly way.

## Sanity

[Sanity](https://www.sanity.io/) is a modern way to manage content without handling the back-end yourself. It allows team-member collaboration, provides previews of how your content will appear on the live website, and more. There is a free tier as well.

The studio, where content is managed, is fully customisable, and is quite sleek out of the box. It is a great option, especially if you want every aspect of your website to be editable for a non-technical collaborator. 

## Decap CMS

[Decap CMS](%5Bhttps://decapcms.org%5D\(https://decapcms.org/\)) provides you with a content editor with a simplified preview panel. You can use the editor from anywhere and host the files for free in the same repo as your front-end code. This is easiest to use with Netlify for authentication. Just make sure to read your emails in case your site suddenly blows up, as you’ll need to take it offline to avoid being charged.

I find the editor clunky on mobile, which I actually would like to use when I have a free moment. The editor was also buggy until very recently: some people, myself included, found they could not edit any text without the cursor moving to the end of the paragraph after entering one letter (on a desktop). This issue was around for years, showing this project was probably not well maintained, but their website seems to have gotten a facelift, so maybe this will change.

## HTML using MD

You can write markdown within HTML instead of using those pesky element tags with [zero-md](https://zerodevx.github.io/zero-md/). If you aren’t used to modern frameworks like Gatsby, this is a great option.

If you’re a beginner, you could create a simple blog with Bootstrap or customise a template you find by searching GitHub, add zero-md, and choose a cheap hosting provider.

## Keystatic 

I am about to try out [Keystatic](https://keystatic.com/docs/introduction). It can store data locally in the repo of your front-end code, but cloud storage is also possible. Markdocs and MDX fields are supported, which is very neat.

 