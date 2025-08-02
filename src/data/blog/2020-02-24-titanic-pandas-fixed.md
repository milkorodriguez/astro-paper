---
title: "Exploring Titanic Data with Pandas"
description: "A beginner-friendly walkthrough using pandas to explore Titanic dataset."
pubDatetime: 2020-02-24T10:00:00Z
tags: ["pandas", "data-analysis", "titanic", "python"]
---

In this notebook, we explore the Titanic dataset using pandas. We will demonstrate how to read the data, inspect it, and perform basic filtering operations.

```python
import pandas as pd

df = pd.read_csv("titanic.csv")
print(df.head(10))
```

This gives us a preview of the first 10 rows of the dataset, allowing us to check the structure of the data.

---
