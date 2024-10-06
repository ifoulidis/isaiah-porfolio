---
title: 'Common Mistakes in Python'
status: 'draft'
author:
  name: 'Isaiah Foulidis'
  picture: 'https://avatars.githubusercontent.com/u/44555774?v=4'
slug: 'common-mistakes-in-python'
description: 'Up your game by fixing these style mistakes and logic errors.'
coverImage: '/images/website_image_canva-M2MD.jpg'
tags: [{"value":"python","label":"Python"}]
publishedAt: '2024-10-06T19:37:35.622Z'
---

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

 