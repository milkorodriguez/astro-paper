---
title: "Delegating Generators with yield from in Python"
description: "How to compose coroutines using yield from and return values from generator pipelines."
pubDatetime: 2018-03-14
author: "Milko Rodríguez"
tags: ["Python", "Generators", "yield from", "Coroutines", "Learning"]
---

This project introduced one of the most elegant and advanced Python features: **`yield from`**.

With it, we can **delegate** part of a generator’s work to another generator — and even collect its return value.

This allows modular, nested, and clean coroutine design.

---

## Step 1 — Basic Delegation with yield from

Here’s a simple example:

```python
def child():
    yield 1
    yield 2
    return 99

def parent():
    result = yield from child()
    print("Child returned:", result)
```

When `parent()` is run, it yields the values from `child()` and then captures its return value.

---

## Step 2 — Refactoring Pipelines

Earlier, we built processing steps manually:

```python
for item in source():
    for subitem in transform(item):
        sink(subitem)
```

With `yield from`, we can write:

```python
def pipeline():
    yield from transform_stage(sink_stage())
```

Each stage becomes a **composable coroutine**.

---

## Step 3 — Returning Values from Coroutines

A generator can now `return` a value, and that value is passed back to the caller via `yield from`:

```python
def tally():
    total = 0
    try:
        while True:
            x = yield
            total += x
    except GeneratorExit:
        return total
```

This lets a supervisor coroutine collect results:

```python
def controller():
    t = tally()
    next(t)
    for x in [1, 2, 3]:
        t.send(x)
    t.close()
    result = t.throw(StopIteration)
    print("Total:", result.value)
```

---

## Step 4 — The returns.py Example

In the project, we implemented nested coroutines where:

- Sub-coroutines aggregate data (like prices or returns)
- Supervisors collect their return values via `yield from`
- Final results are aggregated without explicit control structures

This demonstrates **structured concurrency** built from generators alone.

---

## Why It Matters

- `yield from` simplifies control flow between coroutines
- You can build **multi-level pipelines** with clean delegation
- Return values from generators make them more powerful than iterators

We’re now ready to move toward **asynchronous programming**, where the same patterns apply — but are powered by event loops and `async/await`.

