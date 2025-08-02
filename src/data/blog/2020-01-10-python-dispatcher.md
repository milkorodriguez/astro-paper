---
title: "Understanding py-dispatcher: A Simple Priority Queue in Python"
description: "An overview of py-dispatcher, a simple Python project for managing prioritized tasks using a dispatcher pattern."
pubDatetime: 2020-01-10T09:00:00Z
tags:
  - Python
  - Projects
  - Queues
  - Dispatcher
  - Data Structures
---

## Understanding `py-dispatcher`: A Simple Priority Queue in Python

This is an interesting small project: [`py-dispatcher`](https://github.com/Milko-R/py-dispatcher).  
It is a minimal implementation of a dispatcher queue system that handles tasks based on priority.

### What Is It?

At its core, the `py-dispatcher` project defines a class that allows enqueuing items and dispatching them based on their priority.  
It uses the `heapq` module under the hood to maintain a priority queue efficiently.

```python
import heapq

class Dispatcher:
    def __init__(self):
        self._queue = []
        self._index = 0

    def add_task(self, task, priority):
        heapq.heappush(self._queue, (priority, self._index, task))
        self._index += 1

    def get_next_task(self):
        return heapq.heappop(self._queue)[-1]
```

### Why Is It Useful?

This kind of dispatcher is useful in scenarios like:

- Managing job execution with different priority levels.
- Task scheduling systems.
- Simplified event loops or simulation engines.

Even though it’s minimal, it shows the power of combining Python’s built-in data structures with a clean and simple pattern.
