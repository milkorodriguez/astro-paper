---
title: "Building a Portfolio Report Tool with Pure Python"
description: "From raw CSV files to structured reports — building a simple financial data pipeline using Python, inspired by David Beazley’s course."
pubDatetime: 2018-01-17
author: "Milko Rodríguez"
tags: ["Python", "Data Processing", "CSV", "Financial Analysis", "Learning"]
---

In the second phase of David Beazley’s Python course, the exercises shifted from abstract language features to practical data manipulation. The challenge: build a report generator that reads a portfolio file and a price list, then prints a well-formatted summary of gains and losses.

We did it all without Pandas — just pure Python.

---

## Step 1 — Reading the Portfolio File

The `portfolio.csv` file contains a list of stocks purchased, including their names, number of shares, and purchase price. In `ex1.py`, we use `csv.reader` to parse it manually:

```python
import csv
with open("portfolio.csv") as f:
    rows = csv.reader(f)
    headers = next(rows)
    for row in rows:
        print(row)
```

This gives us raw lists. To make it useful, we begin converting fields to proper types in `ex2.py`, and eventually transform each row into a dictionary.

---

## Step 2 — Creating Structured Records

In `ex3.py`, we use `zip(headers, row)` to combine column names and values, making each row a dictionary:

```python
records = []
for row in rows:
    record = dict(zip(headers, row))
    records.append(record)
```

This small change improves readability and sets the stage for more structured processing.

---

## Step 3 — Loading Prices

In parallel, `prices.csv` contains the current market prices. We load this into a dictionary for fast lookups:

```python
prices = {}
with open("prices.csv") as f:
    for line in f:
        row = line.split(",")
        try:
            prices[row[0]] = float(row[1])
        except:
            pass
```

Now we can compare the current price with the purchase price for each stock.

---

## Step 4 — Generating the Report

In `report.py`, we calculate the change in price and generate tuples for each line in the report:

```python
report = []
for holding in portfolio:
    name = holding["name"]
    shares = int(holding["shares"])
    purchase_price = float(holding["price"])
    current_price = prices[name]
    change = current_price - purchase_price
    report.append((name, shares, purchase_price, current_price, change))
```

The final step is formatting:

```python
headers = ("Name", "Shares", "Price", "Current", "Change")
print("%10s %10s %10s %10s %10s" % headers)
for row in report:
    print("%10s %10d %10.2f %10.2f %10.2f" % row)
```

And voilà — a clean terminal table.

---

## Why This Exercise Mattered

This project was a deep lesson in:

- Processing structured text data manually
- Thinking in terms of transformation pipelines
- Using only the Python standard library — no shortcuts

It's a great example of how much you can do without external tools, and how to appreciate what libraries like Pandas automate for us.

Next up, I’ll explore **building a generator-based pipeline** to streamline this logic even further.
