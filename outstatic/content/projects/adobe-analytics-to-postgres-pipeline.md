---
title: 'Adobe Analytics to Postgres Pipeline'
status: 'published'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'adobe-analytics-to-postgres-pipeline'
description: 'A pipeline that extracts data from Adobe Anaytics to Postgres daily.'
coverImage: '/images/adobe-anaytics-to-postgresql-k5OD.jpg'
publishedAt: '2024-07-12T05:40:47.466Z'
---

# **Overview**

A company with some Adobe Analytics data needed them in a PostgreSQL database, and they wanted regular automatic updates. Another dev had already had a crack but bailed for unknown reasons. I was given his Jupyter Notebook and in theory just had to refactor the code into a better setup, and I only had a couple evenings and a morning to pull it off. That sounded simple enough, and after a seemingly successful morning, I planned to finish the project late that evening, until I discovered that things would not be so simple, and the volume of data was too large to wait around for. At this point, I had to hand it back to the boss, as I had no more time. It proved a time sink for him also, due to oddities with the design of the pipeline resulting in an infinite loop.

# Features

- Pivots data into new schemas.
- Runs automatically on a server.
- Errors introduce breaking changes when appropriate, so that they are not baked in.

# Tools Involved

- Python
- PostgreSQL database
- Jupyter Notebook
- [**Singer.io**](http://singer.io/)
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
- Testing the Jupyter Notebook
- Refactoring the code.
- Writing the schemas and loops.
- Testing.
- Code cleanup.