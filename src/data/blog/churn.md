------
title: "Churn Prediction Using Random Forest: A Business Value Perspective"
description: "How we used Random Forest and permutation importance to increase business value in churn prediction"
pubDatetime: 2025-06-14T10:00:00.000Z
tags: ["machine learning", "business value", "random forest", "churn"]
---

## Churn Prediction Using Random Forest: A Business Value Perspective

In a data analytics project during my postgraduate program (2024–2025), our team explored how to maximize business value through machine learning. The challenge: identify customers likely to churn, and do it in a way that delivers actionable insights—not just accuracy scores.

We chose to focus on **Random Forest**, a robust and interpretable model, and applied **permutation importance** to understand which features most impacted predictions. But rather than optimizing for F1 or AUC alone, we introduced a novel angle: **Business Value**.

---

### Methodology

We worked with a telecom churn dataset. Our pipeline included:

- Data cleaning and preprocessing
- Baseline model (H0)
- A tuned Random Forest model (H6)
- Four variants of H6 with new features or transformations (H6_N1 to H6_N4)
- Feature selection using **permutation importance**
- Business value simulation based on a cost matrix

Instead of traditional model metrics, we assigned financial value to different outcomes in the confusion matrix:

| Prediction      | Actual Positive (Churn) | Actual Negative |
|-----------------|-------------------------|-----------------|
| **True Positive**  | +\$150                  | -\$10           |
| **False Positive** | -\$20                   | -\$10           |

---

### Results

Each hypothesis (H6, H6_N1...N4) was evaluated using cross-validation and simulated business value. Our key findings:

- Adding certain features (e.g., `Int'l plan` interaction terms) significantly improved business value
- Some hypotheses improved precision but not value
- **H6_N2** delivered the best gain with the least false positives

Here's a simplified comparison:

| Model    | Business Value |
|----------|----------------|
| H0       | \$2,340        |
| H6       | \$3,050        |
| H6_N2    | **\$3,480**    |

---

### Lessons Learned

- **Business value ≠ accuracy**: a model with lower accuracy can outperform another if it reduces costly errors
- **Feature importance helps** but only if evaluated through domain-specific impact
- **Interactive notebooks** with `ipywidgets` helped us present results to stakeholders

---

### Team & Acknowledgments

This was a group project developed during the [PUCP Data Analytics program](https://www.pucp.edu.pe), with:

- Franco Silva and Anthony Talavera
---

### Source Code

Repository available at:  
🔗 [https://github.com/milkreator/pishingweb](https://github.com/milkreator/pishingweb)
