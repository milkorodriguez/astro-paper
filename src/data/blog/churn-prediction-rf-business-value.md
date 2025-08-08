---
title: "Churn Prediction with Random Forest: A Business-Oriented Evaluation"
description: "A machine learning experiment using Random Forest to reduce churn and economic loss, developed as part of a group project in a Data Analytics program."
pubDate: 2025-08-08
tags: ["Machine Learning", "Churn", "Random Forest", "Business Value"]
---

In this post, I share the results of a machine learning project developed as part of the Data Analytics Specialization (2024–2025). Our objective was to train a model capable of predicting customer churn, but instead of focusing solely on technical metrics like precision or recall, we used business value as the primary evaluation criterion.

## Project Overview

The project was carried out as a team and focused on improving the performance of a churn classifier through a series of hypotheses (H0 to H6). The best-performing model (H6) was a tuned Random Forest that achieved the following:

- **Precision on class 1 (churn)**: 100%
- **Reduction in total loss**: 61.9%
- **Improvement in net gain**: 161.82%

The analysis included a comparison with a baseline model (H0), and economic metrics were calculated using a custom cost matrix, including costs for false positives and false negatives.

## Key Technical Steps

- Feature selection based on correlation and permutation importance.
- Hyperparameter tuning using `RandomizedSearchCV` with 10-fold cross-validation.
- Evaluation of business performance using monetary costs and gains.
- Visualization of model performance with grouped bar charts comparing models.

## Tools Used

- Python (Jupyter Notebook)
- Scikit-learn (Random Forest, pipelines, metrics)
- Matplotlib & Seaborn for visualization

## Collaboration

This project was developed as a team effort with **Franco Silva**, **Anthony Talavera**, and **Milko Rodríguez**. The implementation and deployment plan is led by Milko Rodríguez as a follow-up step.

You can find the code in the public repository: [GitHub - milkreator/pishingweb](https://github.com/milkreator/pishingweb)

## What's Next?

A second post will address how we move this model closer to production, integrating a simple interactive interface and preparing it for deployment.

---

*Note: This was a student project as part of the Data Analytics Specialization program and used synthetic churn data for demonstration purposes.*
