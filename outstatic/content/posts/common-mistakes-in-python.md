---
title: "Common Mistakes in Python"
status: "published"
author:
  name: "Isaiah Foulidis"
  picture: "https://avatars.githubusercontent.com/u/44555774?v=4"
slug: "common-mistakes-in-python"
description: "Up your game by fixing these style mistakes and logic errors."
coverImage: "/images/website_image_canva-M2MD.jpg"
tags: [{ "value": "python", "label": "Python" }]
publishedAt: "2024-10-06T19:37:35.622Z"
---

If you're new to a professional environment, there are quite a few mistakes you might not have been made aware of by tutorials or classes. Here are some examples:

- **Committing secrets to GitHub**. Use a `.env` file and make sure it isn't uploaded by using a `.gitignore` file.
- **Using classes too often**. If your class has the constructor and a single other method, it shouldn't be a class. It should probably just be a function.
- **Nesting a huge chunk of code in a conditional block**. Can you invert the condition so the code is no longer nested? I.e., instead of this:

```python
if data:
	results = do_something()
	thing1 = results[0]
  thing2 = results[2]
  thing3 = results[3]
	...
```

Do this:

```python
if not data:
	continue
results = do_something()
	thing1 = results[0]
  thing2 = results[2]
  thing3 = results[3]
...
```

## Resources

Here are some resources for improving your Python skills:

Clean code in Python: [https://m.youtube.com/watch?v=o9pEzgHorH0](https://m.youtube.com/watch?v=o9pEzgHorH0)

Top 10 common errors: [https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make](https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make)

Code style: [https://docs.python-guide.org/writing/style/](https://docs.python-guide.org/writing/style/)

Nested data Python: [https://llego.dev/posts/solving-programming-challenges-nested-data-structures-python/](https://llego.dev/posts/solving-programming-challenges-nested-data-structures-python/)

Google Python refresher: [https://colab.research.google.com/github/kamperh/data414/blob/main/practicals/python_numpy/python_numpy.ipynb?pli=1#scrollTo=BrEgZHHq5q4I](https://colab.research.google.com/github/kamperh/data414/blob/main/practicals/python_numpy/python_numpy.ipynb?pli=1#scrollTo=BrEgZHHq5q4I)

Great intermediate Python tips: [https://hackernoon.com/intermediate-python-refresher-tutorial-project-ideas-and-tips-i28s320p](https://hackernoon.com/intermediate-python-refresher-tutorial-project-ideas-and-tips-i28s320p)
