---
title: "Understanding Stack Traces and Control Flow in Python"
description: "A closer look at how exceptions propagate through the call stack and how to read and use Python’s stack traces effectively."
pubDatetime: 2018-02-28
author: "Milko Rodríguez"
tags: ["Python", "Exceptions", "Stack Trace", "Call Stack", "Control Flow", "Learning"]
---

After learning to raise and catch exceptions, we took a step deeper — into **how Python handles control flow when something goes wrong**.

This meant examining how the **call stack** unwinds, how tracebacks are generated, and how to debug problems with greater precision.

---

## Step 1 — What Is a Stack Trace?

A stack trace (or traceback) is Python's way of telling you: "Here’s what happened, and here’s where."

When an exception is raised and not caught, Python shows:

- The file and line where the error occurred
- The function calls that led there
- The type and message of the exception

Example:

```text
Traceback (most recent call last):
  File "main.py", line 15, in <module>
    run()
  File "main.py", line 10, in run
    process()
  File "main.py", line 6, in process
    raise ValueError("Bad input")
ValueError: Bad input
```

---

## Step 2 — Following the Call Chain

We practiced tracing how control flows through a series of function calls:

```python
def a():
    b()

def b():
    c()

def c():
    raise RuntimeError("Something went wrong")

a()
```

Even if the error is in `c()`, the traceback shows the full call chain: `a` → `b` → `c`.

This is essential when debugging large systems.

---

## Step 3 — Catching and Logging Errors

We used `traceback` to capture the full stack trace as a string for logging:

```python
import traceback

try:
    a()
except Exception:
    err = traceback.format_exc()
    log_error(err)
```

This is especially useful in long-running systems (like servers) where you don’t want to crash but do want a record.

---

## Step 4 — Reraising Exceptions

Sometimes, you want to catch an exception temporarily, then re-raise it:

```python
try:
    dangerous_operation()
except SomeError:
    log("Something went wrong")
    raise  # Propagate up
```

This preserves the original traceback and lets higher levels decide what to do.

---

## Key Insight

When an exception is raised:

1. Python suspends the current function
2. It checks for an `except` block in that scope
3. If none, it goes up the call stack
4. If still unhandled, it prints the traceback and stops the program

Understanding this flow is vital for writing robust, debuggable code.


