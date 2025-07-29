---
title: "Getting Started with the Titanic Dataset using pandas"
date: 2020-02-24
description: "A beginner-friendly walkthrough using pandas to explore the Titanic dataset: loading data, slicing columns, and creating utility functions."
tags: [python, pandas, data-analysis, titanic]
---

One of the most common datasets for practicing data analysis is the Titanic passenger dataset. In this post, we’ll walk through how to load it using `pandas`, perform some basic slicing, and even define a small utility function to retrieve the top N rows of any DataFrame.

Let’s begin.

---

## 1. Load the Dataset

First, we load the dataset from a CSV file hosted on GitHub. You can use `pandas.read_csv()` for this.

```python
import pandas as pd

url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv"
df = pd.read_csv(url)

df.info()
```

This will show you the number of entries, column names, and data types.

---

## 2. Basic Exploration

Once loaded, we can quickly explore the first few records.

```python
df.head()
```

Let’s also look at the `sex` column to see the distribution:

```python
df["sex"].value_counts()
```

You can also select multiple columns at once:

```python
df[["name", "sex", "age", "survived"]].head()
```

---

## 3. Utility: Get Top N Rows

Sometimes you want a reusable function to inspect just the top N rows of a DataFrame. Here’s a quick utility you can write:

```python
def get_top_n_rows(df, n=5):
    return df.head(n)
```

Use it like this:

```python
top10 = get_top_n_rows(df, 10)
print(top10)
```

---

## 4. Wrap-up

This is a great first step for anyone starting out with `pandas`. You’ve:
- Loaded a dataset from a URL
- Used `.info()`, `.head()`, and `.value_counts()`
- Selected specific columns
- Defined a custom function

In future posts, we’ll explore how to clean and visualize this dataset, and maybe even train a simple model. Stay tuned.

---
