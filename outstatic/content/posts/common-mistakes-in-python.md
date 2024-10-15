---
title: 'Common Mistakes in Python'
status: 'published'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'common-mistakes-in-python'
description: 'Up your game by fixing these style mistakes and logic errors.'
coverImage: '/images/website_image_canva-M2MD.jpg'
tags: [{"value":"python","label":"Python"}]
publishedAt: '2024-10-06T19:37:35.622Z'
---

Here are some resources for improving your Python skills, especially when dealing with data pipelines. 

## Resources

Clean code in Python: [https://m.youtube.com/watch?v=o9pEzgHorH0](https://m.youtube.com/watch?v=o9pEzgHorH0)

Top 10 common errors: [https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make](https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make)

Code style: [https://docs.python-guide.org/writing/style/](https://docs.python-guide.org/writing/style/)

Nested data Python: [https://llego.dev/posts/solving-programming-challenges-nested-data-structures-python/](https://llego.dev/posts/solving-programming-challenges-nested-data-structures-python/)

Google Python refresher: [https://colab.research.google.com/github/kamperh/data414/blob/main/practicals/python_numpy/python_numpy.ipynb?pli=1#scrollTo=BrEgZHHq5q4I](https://colab.research.google.com/github/kamperh/data414/blob/main/practicals/python_numpy/python_numpy.ipynb?pli=1#scrollTo=BrEgZHHq5q4I)

Great intermediate Python tips: [https://hackernoon.com/intermediate-python-refresher-tutorial-project-ideas-and-tips-i28s320p](https://hackernoon.com/intermediate-python-refresher-tutorial-project-ideas-and-tips-i28s320p)

## Checklist

- Make sure the GitHub repo isn't in the requirements file (which happens when you run pipe freeze).

- Make sure any new packages are added to the requirements file *and* setup.py.

- Are any environmental variables being read directly instead of being passed through the config? Don't, because passing them through the config is an extra check to make sure they're present.

- Have you created an index when using a for loop instead of just using enumerate?

- Do you have any variables that are initialized with `if–else` statements? If so, would they be better with ternary operators?

- Is there unused code, especially in utility.py? Get rid of it. Yes, he's happy for you to delete tons of it.

- Is there a large chunk of code that is nested because of a condition? Can you invert the condition so the code is no longer nested? I.e., instead of this:

```python
if data:
	results = do_something()
	many_more_things = results[0]
	...
```

Do this:

```python
if not data:
	continue
results = do_something()
many_more_things = results[0]
...
```

- Make sure that you check the bookmarking logic in multiple states, because the api might be buggy, or the pipeline. Compare the number of rows and the data returned in postman to what you retrieve in the pipeline.
- Don't accidentally use a double negative for timedelta.
- Have you used `formatted` in a variable name instead of `parsed` when you're getting a date?
- Have you added multiple dictionary key-value pairs that could simply be added all at once?
- Have you got multiple possible return statements? Prefer just check with `if` rather than `elif`; and the final one doesn't need an `else`, since it will be the default return statement if the others aren't used.

```python
if events:
        return events
if time_series:
    return time_series
return []
```

- Have you wrapped complex comparisons with a bracket if possible?
- Need substream bookmarks? They should be added to a new_bookmarks list of tuples and returned from `get()`. See the Tesla pipeline.
- Are you checking if anything is returned after an api call? Just use `or {}` (or whatever data type is appropriate) on the same line.
- Try to be consistent where possible, even if it doesn't appear to matter; e.g., rather than combining `.replace()` and `re.sub()`, maybe just use `.replace()` for all the replacements.
- Chained replace is readable and good for some cases (such as column names), but it is inefficient compared to regex, so check with Sam if in doubt.
- Did you concatenate to an f-string? Just include the other string in the f-string.
- Check that it is not possible for the key to be missing if you are using `or None`. If it is possible, then you should be using `.get("...")` instead.
- Should there be a separate fetch function for some of the endpoints? That is cleaner than having a couple of cases that diverge early in the same function.
- Have you tried using custom ids as integers? If there are row ID 101 and index 1 and row ID 10 and index 11, they'd both be ID 1011. Instead, use an f-string as such : `f"row['id]_i"`
- Remember that `None` is not the same as `undefined`. You still need to define a variable if it will be called, even if you just give it a value of `None`.
- Have you used `None` as a fallback value for `.get()`? It is already the fallback value. Remove `None`.
- Make sure you define values being accessed by their keys as new variables, rather than repeatedly accessing them.
