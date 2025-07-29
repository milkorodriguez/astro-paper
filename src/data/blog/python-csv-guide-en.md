---
title: "Working with CSV Files in Python: A Practical Step-by-Step Guide"
description: "From understanding the CSV format to converting, reading, and downloading files using Python. A complete beginner-friendly guide."
pubDatetime: 2017-11-15
author: "Milko Rodríguez"
tags: ["Python", "CSV", "Data Processing", "Tutorial", "Learning"]
---

CSV files are among the most common formats for representing structured data. They are simple, portable, and easy to manipulate with Python.

This guide brings together several small but practical exercises on working with CSV files from scratch. It covers:

1. What CSV really is
2. How to convert space-separated data into CSV
3. How to read a CSV file without external libraries
4. How to download a CSV file from GitHub

---

## 1. What is a CSV file?

CSV stands for **Comma-Separated Values**. Each line is a record, and each value is separated by commas:

```
name,age,city
Alice,30,New York
Bob,25,London
```

However, not all CSVs use commas: some use `;`, `	`, or even space.

Also:

- Values may be quoted if they contain special characters
- Newlines must be handled carefully
- Not all CSVs have headers

---

## 2. Converting space-separated data to CSV

Imagine you have data like this:

```
John    1000    Lima
Maria   1500    Arequipa
Luis    1200    Trujillo
```

You can convert it to CSV with Python:

```python
import csv

with open("data.txt") as infile, open("data.csv", "w", newline="") as outfile:
    writer = csv.writer(outfile)
    for line in infile:
        row = line.strip().split()
        writer.writerow(row)
```

This removes irregular spacing and writes comma-separated rows.

---

## 3. Reading a CSV file in simple form

Without using `pandas`, you can read a CSV with `csv.reader`:

```python
import csv

with open("data.csv") as f:
    rows = csv.reader(f)
    headers = next(rows)
    for row in rows:
        print(dict(zip(headers, row)))
```

This converts each row into a readable dictionary.

You can also convert types:

```python
types = [str, int, str]

for row in rows:
    converted = [func(val) for func, val in zip(types, row)]
    print(converted)
```

---

## 4. Downloading a CSV from GitHub

If a CSV is hosted on GitHub, you can download it like this:

```python
import urllib.request

url = "https://raw.githubusercontent.com/user/repo/main/data.csv"
urllib.request.urlretrieve(url, "data.csv")
```

Now it's available locally for `csv.reader` or `pandas`.

---

## Conclusion

Working with CSV files in Python is a fundamental skill for any analyst, data scientist, or developer. Knowing how to read, convert, and manipulate CSVs without external libraries helps you understand the flow of data.

Later on, you can build on this knowledge to:

- Automate reports
- Clean and validate data
- Integrate with APIs
- Perform deeper analysis with `pandas`

