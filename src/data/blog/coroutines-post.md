---
title: "Coroutines in Python: From Passive Generators to Reactive Code"
description: "A hands-on introduction to coroutines in Python using send(), yield, and the power of interactive pipelines."
pubDatetime: 2018-01-31
author: "Milko Rodríguez"
tags: ["Python", "Coroutines", "Generators", "Reactive Programming", "Learning"]
---

After learning how to build generator pipelines, the next level was to make them interactive.

This is where **coroutines** come in.

Unlike traditional generators that only `yield` values, coroutines can also **receive** values using `send()`. This opens the door to more dynamic dataflows — filtering, accumulation, or reacting to external events.

---

## The Coroutine Pattern

A coroutine is a function that contains a `yield`, but is used differently from a generator. Here's the classic example:

```python
def grep(pattern):
    print(f"Looking for {pattern}")
    while True:
        line = (yield)
        if pattern in line:
            print(line)
```

To use it:

```python
g = grep("python")
next(g)              # Prime the coroutine
g.send("hello")      # Ignored
g.send("python rocks")  # Matched and printed
```

---

## What's Happening Here?

- `next(g)` starts the coroutine and runs it up to the first `yield`
- `g.send(...)` pushes values into the function — they're received where `line = (yield)` is
- The coroutine stays alive, ready to handle more inputs, until it’s closed

---

## Building a Coroutine Pipeline

Coroutines become especially powerful when **composed** into a pipeline:

```python
def printer():
    while True:
        item = (yield)
        print("OUTPUT:", item)

def filter_min(threshold, target):
    while True:
        value = (yield)
        if value >= threshold:
            target.send(value)
```

Then hook it up:

```python
p = printer()
next(p)
f = filter_min(10, p)
next(f)

for x in [4, 5, 10, 25]:
    f.send(x)
```

Only `10` and `25` are printed.

---

## Use Cases

- **Live log filtering**
- **Streaming data processing**
- **Event-driven architectures**
- **Backpressure or cancellation flow**

Coroutines give you a lightweight way to **react to data**, rather than just consume it.

---

## What's Next?

We’ll explore how to clean up complex coroutine flows using `yield from`, which allows delegation — breaking pipelines into simpler, nested pieces.

Stay tuned for **coroutine composition with yield from**.
