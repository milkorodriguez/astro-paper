---
title: "Working with CSV Files and DataFrames in Python: A Beginner’s Guide"
description: "Learn how to load, convert, explore, and manipulate CSV files in Python using built-in tools and pandas. A practical entry point into data analysis."
pubDatetime: 2017-11-10
author: "Milko Rodríguez"
tags: ["Python", "CSV", "DataFrames", "pandas", "Data Analysis"]
---

CSV files are everywhere — from open data portals to scraped exports, to datasets for training machine learning models. They’re often the first format you’ll encounter when working with real-world data.

This post is a hands-on, step-by-step guide on how to work with CSVs in Python using both built-in tools and the powerful `pandas` library.

---

## 🔹 What is a CSV File?

CSV stands for *Comma-Separated Values*. Each line represents a row, and each comma-separated item is a column.

```csv
name,age,city
Alice,30,New York
Bob,25,London
```

Sometimes, values are separated by tabs, semicolons, or spaces — the concept is the same: structured text.

---

## 🔹 Reading CSV Files without pandas

You don’t need `pandas` to read a CSV file. Python’s built-in `csv` module does the job:

```python
import csv

with open("data.csv") as f:
    rows = csv.reader(f)
    headers = next(rows)
    for row in rows:
        print(dict(zip(headers, row)))
```

You can also convert the column types:

```python
types = [str, int, str]
converted = [func(val) for func, val in zip(types, row)]
```

---

## 🔹 Converting Space-Separated Data to CSV

Sometimes the data looks like this:

```
John    1000    Lima
Maria   1500    Arequipa
Luis    1200    Trujillo
```

Here’s how to convert it to CSV format:

```python
import csv

with open("data.txt") as infile, open("data.csv", "w", newline="") as outfile:
    writer = csv.writer(outfile)
    for line in infile:
        row = line.strip().split()
        writer.writerow(row)
```

---

## 🔹 Downloading CSV Files from GitHub

To download a raw CSV hosted on GitHub:

```python
import urllib.request

url = "https://raw.githubusercontent.com/username/repo/main/data.csv"
urllib.request.urlretrieve(url, "data.csv")
```

This saves the file locally for later use.

---

## 🔹 Using pandas for Exploration

Once your CSV is ready, use `pandas` to load and explore it:

```python
import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())
```

### Get Top N Rows

```python
def get_top_n_rows(df, n=5):
    return df.head(n)
```

Useful when checking the start of large files.

---

## 🔹 Case Study: The Titanic Dataset

You can load a well-known dataset like Titanic:

```python
df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")
```

Get basic insights:

```python
print(df.info())
print(df["Survived"].value_counts())
```

Extract a subset:

```python
df_subset = df[["Name", "Sex", "Age", "Survived"]]
print(df_subset.head(10))
```

---

## 🧭 Final Thoughts

These are foundational operations that will serve you well in every data project. Whether you’re doing machine learning or cleaning messy files, understanding how to read, convert, and explore CSV files is an essential skill.

Later, you’ll discover more powerful tools — but it all starts here.

