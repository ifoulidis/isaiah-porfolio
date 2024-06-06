---
title: 'Spitfire Records'
status: 'draft'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'spitfire-records'
description: 'Spitfire records is a full-stack e-commerce website built with PHP, JQuery, and MySQL.'
coverImage: '/images/img_1172-cxMD.jpeg'
publishedAt: '2024-06-06T07:39:03.611Z'
---

[https://spitfirerecords.co.nz](http://spitfirerecords.co.nz/)

## The Story

Spitfire Records is an online record store in New Zealand, specialising in Hard Rock and Metal. After a discussion with the client about the pros of a custom website compared to Shopify, he was very keen to go ahead with the build.

I decided to use plain PHP and JQuery as a learning exercise, and for SEO, speed, and ease of hosting. Then, my first order of business was to get all the possible attributes he might want for his product data to know what I would be working with design-wise. I tried a few designs and colours, and before long, I had a theme which he was happy with also.

In the mean time, the client prepared some data in CSV form, which I transformed and transferred to MySQL. Then I got the database populated, and worked on the product viewing and shopping cart areas of the website. Next, I got things going for the bank transfer option, since that only required emailing the customer. Finally, I integrated Stripe and PoLi, although he decided PoLi was not the best choice for business in the end.

At last, I made ready for production and launched the site, which continues to take in revenue today. There have been some unexpected bugs which were difficult to track down, but things have been going flawlessly for some time now.

## Features

- Responsive design, for optimal performance on desktop and mobile devices.
- Subtle effects and animations for a high-quality user experience.
- Precise product filters.
- Shopping cart recovery that takes into account possible sale of stock in the meantime.
- Users can request stock of an item that has been sold out.
- Optimised sharing—search results are easy to share, along with products.
- And More.

## Technical Details

- A full PHP back end.
- JQuery use throughout for responsive webpages and requests.
- A MySQL database.
- Data can be imported and transformed from CSV files.
- Flexibility for new genres, product types, etc., thanks to building this into all my SQL, HTML, JQuery and PHP ahead of time.
- Proper security practices (hiding passwords, using prepared statements for mySQL, hiding the .env file, etc.).
- Thorough error catching, often directing a user to the contact page if he encountered an issue.

## Challenges

A full-stack e-commerce website done the old-fashioned way to an extent is quite the challenge in itself. In particular though, session variables seem to be very unreliable on the server for whatever reason, and I tried many fixes both locally and in production. I made sure errors were well-handled, but it was still a real issue. In the end, I just thought of a work-around that does the trick.