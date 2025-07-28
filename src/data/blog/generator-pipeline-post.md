---
title: "Generator Pipelines in Python: Refactoring a Portfolio Report"
description: "Learn how to refactor procedural code into a clean, lazy-processing pipeline using Python generators."
pubDatetime: 2018-01-24
author: "Milko Rodríguez"
tags: ["Python", "Generators", "Data Pipelines", "Lazy Evaluation", "Learning"]
---

After building a basic portfolio report generator in Python, the next step in Beazley’s course was learning how to refactor it using **generators** — making the code more modular, composable, and memory-efficient.

---

## Why Generators?

Generators let you write code that *produces* values lazily, one at a time, instead of computing everything upfront. This not only saves memory, but also promotes a pipeline-style architecture.

In our case, instead of loading all the rows into lists, we turn our functions into pipelines of `yield`ed items.

---

## Step 1 — A Generator to Read CSV as Dictionaries

```python
def read_csv_as_dicts(filename):
    with open(filename) as f:
        rows = csv.reader(f)
        headers = next(rows)
        for row in rows:
            yield dict(zip(headers, row))
```

This function yields one dictionary at a time, converting each CSV row to a proper record.

---

## Step 2 — A Generator for Type Conversion

```python
def convert_types(records, types):
    for row in records:
        values = [func(val) for func, val in zip(types, row.values())]
        yield dict(zip(row.keys(), values))
```

This modularizes the transformation logic: decoupling I/O from data handling.

---

## Step 3 — A Report Generator

We now write a function that takes a portfolio and prices, and yields report rows lazily:

```python
def make_report(portfolio, prices):
    for holding in portfolio:
        name = holding["name"]
        shares = holding["shares"]
        price = holding["price"]
        current_price = prices.get(name, 0.0)
        change = current_price - price
        yield (name, shares, price, current_price, change)
```

---

## Step 4 — Printing the Result

```python
headers = ("Name", "Shares", "Price", "Current", "Change")
print("%10s %10s %10s %10s %10s" % headers)
for row in make_report(portfolio, prices):
    print("%10s %10d %10.2f %10.2f %10.2f" % row)
```

Now each stage is clean, testable, and reusable.

---

## Final Thoughts

Refactoring into generators not only improves performance — it changes the *way you think* about data flow.

Instead of a monolithic script, you build a **streaming pipeline**: data in, transformation, output — each step lazily connected to the next.

Next up: we’ll look into **coroutines**, a more advanced control-flow mechanism in Python that builds on the same idea.
