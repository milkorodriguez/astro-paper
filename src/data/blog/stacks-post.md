---
title: "Building a Stack from Scratch in Python"
description: "Reinventing the stack data structure in Python to understand object-oriented design and control flow."
pubDatetime: 2018-02-07
author: "Milko Rodríguez"
tags: ["Python", "Data Structures", "Stacks", "Object-Oriented Programming", "Learning"]
---

In this stage of the course, we turned our attention to fundamental **data structures** — and what better place to start than with the **stack**.

Rather than relying on Python's built-in `list`, we implemented our own `Stack` class to practice object-oriented principles and low-level design.

---

## Step 1 — The Basic Stack API

The core methods of a stack are simple:

- `push(item)`: Add an item to the top
- `pop()`: Remove the item from the top
- `peek()`: Look at the top without removing it
- `is_empty()`: Check if the stack is empty

Here’s the skeleton we worked with:

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        return self._items.pop()

    def peek(self):
        return self._items[-1]

    def is_empty(self):
        return not self._items
```

---

## Step 2 — Avoiding Built-in List (Optional Challenge)

To deepen our understanding, we were encouraged to implement a stack using **linked nodes** instead of `list`.

```python
class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class Stack:
    def __init__(self):
        self.top = None

    def push(self, item):
        self.top = Node(item, self.top)

    def pop(self):
        if self.top is None:
            raise IndexError("pop from empty stack")
        item = self.top.value
        self.top = self.top.next
        return item

    def peek(self):
        return self.top.value

    def is_empty(self):
        return self.top is None
```

This approach reinforces the **mental model of stacks** as a LIFO structure with linked frames.

---

## Step 3 — Using the Stack: Matching Delimiters

One of the exercises was to use the stack to check for **balanced delimiters**:

```python
def is_balanced(expr):
    s = Stack()
    for char in expr:
        if char in "({[":
            s.push(char)
        elif char in ")}]":
            if s.is_empty():
                return False
            s.pop()
    return s.is_empty()
```

---

## What I Learned

- Even “simple” data structures are rich in design lessons
- Reimplementing them forces clarity in control flow and edge cases
- Using classes teaches encapsulation and abstraction

This wasn’t just about coding — it was about internalizing the **behavior** of stacks and building intuition for how tools like `deque` or recursion really work.

Next up: we’ll look into **context managers** and how they relate to control flow and resource management.
