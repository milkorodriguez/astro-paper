---
title: "Understanding py-dispatcher: A Simple Priority Queue in Python"
description: "An overview of py-dispatcher, a simple Python project for managing prioritized tasks using a dispatcher pattern."
pubDatetime: 2020-01-10
tags:
  - Python
  - Projects
  - Queues
  - Dispatcher
  - Data Structures
---

# Understanding `py-dispatcher`: A Simple Priority Queue in Python

This is an interesting small project: [`py-dispatcher`](https://github.com/Milko-R/py-dispatcher). It is a minimal implementation of a dispatcher queue system that handles tasks based on priority.

## What Is It?

At its core, the `py-dispatcher` project defines a class that allows enqueuing items and dispatching them based on their priority. It uses the `heapq` module under the hood to maintain a priority queue efficiently.

## Why Is It Useful?

This kind of dispatcher is useful in scenarios like:

- Managing job execution with different priority levels.
- Simulating task scheduling (e.g., operating systems, game loops).
- Basic task coordination systems.

## Code Summary

The main idea is:

```pythoni
import heapq
|
class Dispatcher:
    def __init__(self):
        self.queue = []

    def add(self, item, priority=0):
        heapq.heappush(self.queue, (priority, item))

    def dispatch(self):
        if self.queue:
            return heapq.heappop(self.queue)[1]
```

## How It Works

1. `add(item, priority)` inserts an item with a given priority.
2. `dispatch()` removes and returns the item with the highest priority (lowest number).

This relies on Python’s `heapq` behavior, where the smallest value has the highest priority.

🔗 [View on GitHub](https://github.com/Milko-R/py-dispatcher)
