---
title: "SRT-H: A Step Forward in Autonomous Surgery with AI"
description: "A language-guided surgical robot from Johns Hopkins and Stanford successfully performed an autonomous bile duct extraction procedure ex vivo. Here's why it matters."
pubDatetime: 2024-07-14
tags: ["AI", "Surgery", "Robotics", "Language Models", "Autonomy"]
---

A team from Johns Hopkins and Stanford has developed **SRT-H**, a language-guided surgical robot capable of autonomously performing a real subtask of gallbladder removal (cholecystectomy), using the **da Vinci surgical system**.

The procedure was carried out on **real porcine bile duct tissue**, but outside the body (*ex vivo*), meaning **no live animals were used**. In all test cases (8 out of 8), the system **completed the task without human intervention**, meeting key **precision and safety** criteria.

---

## How Does It Work?

SRT-H uses a **hierarchical architecture**. A **language model** generates step-by-step instructions like:

> “Place the clip on the artery”  
> “Move the left arm to the right”

This architecture allows the system to **adapt and self-correct in real time**—an essential requirement for surgical tasks.

---

## Why Is This Significant?

Surgery is one of the most complex applications for AI due to:

- **High anatomical variability**
- **Need for long-term planning**
- **Strict safety requirements**

Autonomous robotic systems must handle unexpected situations with extreme reliability. SRT-H shows that **language models can now assist not only in decision-making but also in physical execution** under controlled conditions.

---

## What Comes Next?

The next step is to **validate the system in live studies**, moving closer to **real clinical application**. The long-term goal is to **democratize access to safe surgeries** worldwide.

📄 Official site and videos: [h-surgical-robot-transformer.github.io](https://h-surgical-robot-transformer.github.io/)
