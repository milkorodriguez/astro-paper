---
title: Building a Process Dispatcher with Priority Queue in Python
author: Milko
pubDatetime: 2018-03-02T15:30:00Z
slug: process-dispatcher-priority-queue-python
featured: true
draft: false
tags:i
  - python
  - operating-systems
  - priority-queue
  - tkinter
  - computer-science
  - process-scheduling
ogImage: ../../assets/images/dispatcher-demo.png
description: Detailed analysis of an educational process dispatcher implementation demonstrating priority queue usage for scheduling with a Tkinter GUI interface.
---

# Building a Process Dispatcher with Priority Queue in Python

In the world of operating systems, one of the most fundamental concepts is **process scheduling**. Today we'll analyze an educational implementation that demonstrates how a process dispatcher works using priority queues, developed as a project for the CS471 course.

## What is a Process Dispatcher?

A dispatcher is the operating system component responsible for:
- **Selecting** which process should run next
- **Performing context switches** between processes
- **Managing** process queues based on their state and priority

## System Features

### Data Structure
The program uses a simple but effective `process` class:
```python
class process:
    def __init__(self, pid, arrival, priority, status):
        self.pid = pid
        self.arrival = arrival
        self.priority = priority
        self.status = status
```

### Process States
- **Running**: Currently executing process
- **Ready**: Process ready to execute, waiting in queue
- **Waiting**: Blocked process waiting for some event

### Scheduling Algorithm
The system implements **Priority Scheduling** with the following characteristics:
- Processes are ordered by priority (lower numbers = higher priority)
- **Preemptive** scheduling: a higher priority process can interrupt the current one
- Automatic context switches when a higher priority process arrives

## Core Functionalities

### 1. Automatic Context Switching
```python
def check_priority():
    if numpy.greater_equal(runArray[0].priority, waitArray[0].priority) == True:
        run_process()
```

### 2. Dynamic Process Creation
- Users can create new processes by specifying only the priority
- System automatically assigns PID and arrival time
- Immediate evaluation for context switching if necessary

### 3. Manual Process Management
- **Click on Running process**: Forces termination of current process
- **Click on Ready process**: Executes it immediately
- **Click on Waiting process**: Moves it to Ready state

## Tkinter GUI Interface

The interface presents two main tables:
- **Running Process**: Shows the currently executing process
- **Ready/Waiting Processes**: Prioritized queue of waiting processes

### Interactive Elements
- Input field to specify priority for new processes
- "Create" button to add processes to the system
- Clickable tables for direct process interaction

## Technical Highlights

### Priority Queue Implementation
```python
def sort_ready():
    waitArray.sort(key=lambda x: x.priority, reverse=False)
```

### Time Management
The system uses real timestamps to simulate arrival times:
```python
arrival = round((time.time() - timeProg))
```

### Preemptive Scheduling
Every time a process is created, the system evaluates whether a context switch should occur based on priorities.

## Educational Value

This project is an excellent demonstration of fundamental operating system concepts:

1. **Clear visualization** of scheduling algorithm behavior
2. **Hands-on interaction** with processes and states
3. **Real implementation** of priority queues
4. **Observable context switching** in real-time

## Current Limitations and Potential Improvements

### Current Limitations
- Basic error handling in the interface
- Doesn't simulate real CPU time for processes
- Simple priority queue without advanced optimizations

### Suggested Improvements
- Implement **Round Robin** as an alternative algorithm
- Add **time slicing** for same-priority processes
- Include **aging** to prevent starvation
- Performance metrics (average waiting time, throughput)

## Implementation Details

### Context Switch Logic
The `run_process()` function handles the core scheduling logic:
1. Finds the highest priority ready process
2. Moves current running process to ready state
3. Promotes the selected process to running state
4. Updates the GUI to reflect changes

### Priority Management
The system maintains two arrays:
- `runArray`: Contains the single running process
- `waitArray`: Contains all ready and waiting processes, sorted by priority




