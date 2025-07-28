---
title: "Context Switching and Cooperative Multitasking in Python"
description: "How generators and coroutines enable lightweight, cooperative concurrency by yielding control in Python."
pubDatetime: 2018-03-07
author: "Milko Rodríguez"
tags: ["Python", "Coroutines", "Concurrency", "Context Switching", "Generators", "Learning"]
---

After mastering exceptions and stack traces, we explored how **Python can switch between tasks** using **generators and coroutines** — without threads or async syntax.

This is known as **cooperative multitasking**.

---

## Step 1 — The Core Idea

In cooperative multitasking, each task voluntarily yields control so others can run. There's no preemption — **your code decides when to pause**.

Python generators support this via `yield`.

---

## Step 2 — Building a Task Scheduler

We built a minimal task runner that switches between generator-based tasks:

```python
from collections import deque

def run(tasks):
    tasks = deque(tasks)
    while tasks:
        task = tasks.popleft()
        try:
            next(task)
            tasks.append(task)
        except StopIteration:
            pass
```

Each `task` is a generator. It runs until `yield`, then returns to the queue.

---

## Step 3 — Writing Tasks with Yields

Here’s a simple countdown task:

```python
def countdown(n):
    while n > 0:
        print("Down", n)
        yield
        n -= 1
```

And a count-up:

```python
def countup(stop):
    x = 0
    while x < stop:
        print("Up", x)
        yield
        x += 1
```

You can run both "at the same time":

```python
run([countdown(3), countup(3)])
```

Output:

```
Down 3
Up 0
Down 2
Up 1
Down 1
Up 2
```

---

## Step 4 — Voluntary Yielding = Predictable Control

Unlike threads, this kind of concurrency is predictable: **no race conditions**, no locking.

Each task explicitly `yield`s control when it's safe to do so.

---

## Where It Leads

This pattern is foundational for:

- Event loops (like in `asyncio`)
- Coroutines with `await`/`async`
- Simulations and task scheduling

By understanding the low-level mechanics, we can better appreciate high-level tools.

Next up: we’ll explore **how to compose complex coroutines using `yield from`**, allowing delegation and nested flows.
