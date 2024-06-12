---
title: "UFC Data Analysis"
status: "published"
author:
  name: "Isaiah Foulidis"
  picture: "https://avatars.githubusercontent.com/u/44555774?v=4"
slug: "ufc-data-analysis"
description: "A Python-based analysis of thousands of UFC fights, along with reusable functions for finding interesting information."
coverImage: "/images/mma-gloves-A5OT.jpg"
tags:
  [
    { "label": "UFC", "value": "ufc" },
    { "label": "Python", "value": "python" },
    { "label": "Pandas", "value": "pandas" },
  ]
publishedAt: "2024-06-11T20:59:38.378Z"
---

## Summary

Due to a personal interest in mixed martial arts, I thought that analysing data on UFC fights could be fascinating. I found that height is actually a slight disadvantage statistically in MMA bouts, which is not overly surprising to me, but should be considered by commentators, gamblers, and coaches alike.

To see the code, please view this [PDF](/UFC_project_code.pdf) of the Jupyter notebook.

The Ultimate Fighting Championship (UFC) is the premier mixed martial arts (MMA) organisation. Athletes typically use techniques kickboxing, wrestling, and Brazilian Jiu Jitsu (among other martial arts) to defeat their opponents. More information about mixed martial arts can be found in the UFC's Introduction to MMA.

The dataset used here was kindly gathered by Rajeev Warrier. [Click here ](https://www.kaggle.com/datasets/rajeevw/ufcdata)to see a description of the dataset.

### Skills Shown

- Problem solving with real, slightly messy data.
- Pursuing results that could have relevance in the real world.
- Clear understanding of the limitations of the analysis.
- The ability to use Pandas, numpy, matplotlib, etc.
- The ability to write efficient and clear Python code.

### Utility Functions

First, I made a few simple functions to quickly retrieve information from the dataset. For instance, one function takes fighters' names as input and returns the results of their fights, or that they have not fought (and it catches possible errors). I made a version of this function that would be suitable for use by a user in a web-app. If desired, using a Flask API and simple HTML, this function could return the results of all fights between two selected individuals.

## Findings

### Win Rate by Stance

The first investigation I performed (after some investigation of the dataset itself) was one comparing how well the various stances that can be used serve fighters. Given that in most weight classes, wrestling, if used, is more important than striking, I didn't expect the stance to have a massive impact; and I had also seen enough fights to know that it does not. That being said, it is well known that orthodox fighters tend to have a disadvantage against southpaws, since southpaws are rarer and thus have more practice against orthodox fighters than orthodox fighters do against southpaws, typically. I note some other factors in the markdown in the code.

The win rates were as follows:

Orthodox win rate: 46%\
Southpaw win rate: 52%\
Switch win rate: 57%\
Open stance win rate: 51%

These results were not too surprising. The only real question for an MMA enthusiast is whether the switch stance fighters have an advantage because of their ability to switch stances, or because of another factor: They are generally seen as having a high skill level in striking, but confidence and a willingness to use more variety in one's approach are also related to using both stances regularly (nearly all fighters will occasionally use their weak stance, especially as leg damage mid-fight often forces this).

'Switch' and 'open stance' fighters are very rare in this dataset. There is pressure in many gyms to stick with one stance, rather than 'trying to be fancy' by switching stances at will; but this is changing, and there is definitely also a trend of fighters learning to fight proficiently in both stances. Again, fighters who do have the confidence to switch stances as a matter of course are often very confident strikers, often for good reason. Finally, I will note that the UFC often does not label fighters who do in fact switch stances very often as switch-stance fighters, so the data are certainly not particularly accurate in this regard.

I also created a function which can compare the effectiveness of fighters of any two stances against each other in general. It returns the win rates of both stances as a tuple. I return both because no contests are not wins for either party, so the win rates do not add up to 1.

### Reach Advantage

The following results show the reach advantage that the winner had over the loser on average, for a given weight class. Note that there are negative values.

Bantamweight: -0.58\
Middleweight: 0.59\
Heavyweight: 1.84\
WomenStrawweight: -0.92\
WomenBantamweight: 1.04\
Lightweight: 0.39\
Welterweight: 0.45\
Flyweight: -0.11\
LightHeavyweight: 1.8\
Featherweight: 0.47\
WomenFlyweight: 0.53\
WomenFeatherweight: 1.11\
CatchWeight: -0.07\
OpenWeight: No relevant data

Although the data are incomplete and have some issues, the results are quite interesting, in that the mean difference is very small. The strength of the correlation and statistical significance are irrelevant, since the differences are so small anyway.

What I thought would be interesting to do next is find the average difference in reach for opponents of each weight class. The results were as follows:

Bantamweight: 7.09\
Middleweight: 6.46\
Heavyweight: 8.28\
WomenStrawweight: 5.6\
WomenBantamweight: 5.55\
Lightweight: 5.93\
Welterweight: 6.42\
Flyweight: 5.25\
LightHeavyweight: 6.57\
Featherweight: 6.31\
WomenFlyweight: 6.49\
WomenFeatherweight: 6.51\
CatchWeight: 6.77\
OpenWeight: No relevant data

The data show that the average reach difference for every weight class is substantial, of which I was already aware.

I also checked whether any reach advantage at all relates to win rate. The results were as follows:

Bantamweight: 42.76%\
Middleweight: 46.94%\
Heavyweight: 51.22%\
WomenStrawweight: 35.23%\
WomenBantamweight: 46.51%\
Lightweight: 42.15%\
Welterweight: 44.01%\
Flyweight: 42.18%\
LightHeavyweight: 48.18%\
Featherweight: 44.78%\
WomenFlyweight: 42.59%\
WomenFeatherweight: 43.75%\
CatchWeight: 44.44%\
OpenWeight: No relevant data

The outcome appears to be that a longer reach is often negatively correlated with victory, and this is likely related to the well-known tendency for the shorter fighter to resort to wrestling, and wrestling is more often a successful strategy than striking.

### Other Findings

There are yet more findings to see, so check out the [PDF](/UFC_project_code.pdf) if you are interested in this topic.
