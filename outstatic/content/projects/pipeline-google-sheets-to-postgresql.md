---
title: 'Pipeline Google Sheets to PostgreSQL'
status: 'published'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'pipeline-google-sheets-to-postgresql'
description: 'A data pipeline built with Python, using the Singer.io framework, to get data from Google Sheets to a PostgreSQL database.'
coverImage: '/images/img_1169-M1Mj.jpeg'
publishedAt: '2024-06-05T22:25:15.727Z'
---

# Overview

A company with some Google Sheets data needed them in a PostgreSQL database, and they wanted regular automatic updates. The data were from Zoho Forms. My dear friend subcontracted this job to me, and after acquiring the necessary credentials and key objectives, I got to work. I soon got it working locally, and after some minor adjustments for more readable code by my friend, the project was ready to ship. It is now in use by client.

# Features

- Pivots data into new schemas.
- Runs automatically on a server.
- Future-proof
- Errors introduce breaking changes when appropriate, so that they are not baked in.

# Tools Involved

- Python
- PostgreSQL database
- Postman
- [Singer.io](http://Singer.io)
- JSON schema
- YAML and setup files
- Git
- Environnemental variables
- WSL
- Google Sheets API
- A virtual environment

# The Steps

- Identifying key endpoints.
- Scoping out the details of the API.
- Testing the endpoints in Postman.
- Development of the query functions.
- Testing the query functions.
- Developing the data transformations and writing the schemas.
- Testing.
- Code cleanup.
