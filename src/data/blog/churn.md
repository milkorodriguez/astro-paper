---
title: "Churn Prediction with Business Value Optimization using Random Forest"
description: "We used a business-driven approach to evaluate churn prediction models, maximizing real-world profit and reducing financial loss using Random Forest."
pubDatetime: 2025-08-08T10:00:00.000Z
tags: ["Churn", "Machine Learning", "Random Forest", "Business Value", "Data Analytics"]
---

## Introduction

This post summarizes a project developed as part of the Data Analytics Specialization at PUCP. The objective was to train churn prediction models, not only based on traditional metrics like F1-score, but also optimized for **business value**—focusing on maximizing gains and reducing losses from customer retention strategies.

We used the *churn-bigml-80.csv* dataset and tested several hypotheses, selecting the one with the best tradeoff between cost and profit.

## Methodology

We tested multiple machine learning models, including Logistic Regression and Random Forest, using a RandomizedSearchCV over hyperparameters.

We developed pipelines with custom preprocessing steps, including:

- Feature engineering with custom transformers
- Outlier removal
- Dimensionality reduction with PCA
- Categorical encoding
- Business-value-based evaluation metrics

The selected model (H6) used a Random Forest with the following parameters:

- `n_estimators`: 289  
- `max_depth`: 6  
- `min_samples_leaf`: 6  
- `min_samples_split`: 11  
- `max_features`: 'log2'  

## Results

After training and evaluation, the H6 model achieved:

- **Precision on test set:** 92%  
- **F1-score (positive class):** 86.87%  
- **Improvement in Net Profit:** **161.82%** compared to baseline  
- **Reduction in Total Loss:** **61.95%**

### Business Value Comparison

| Metric                  | H0 (Baseline) | H6 (Selected) |
|------------------------|---------------|---------------|
| Net Gain               | $1,450,000    | $3,880,000    |
| Total Loss             | $760,000      | $289,000      |
| Improvement in Gain    | –             | +161.82%      |
| Reduction in Loss      | –             | –61.95%       |

## Conclusion

By incorporating business metrics into the model evaluation, we were able to prioritize solutions that generated **real economic value**. The selected Random Forest model (H6) significantly improved the expected revenue and reduced losses, making it a better option than models optimized only for technical metrics like F1-score.

This approach illustrates the power of aligning machine learning with business goals.

---

*Note: This project was completed as part of the course “Proyecto de Análisis de Datos – Sprint 03” in the PUCP Data Analytics specialization. Contributors included Franco Silva, Anthony Talavera, and Milko Rodríguez.*
