---
title: "Phishing Website Detection Using Machine Learning"
pubDatetime: 2025-6-12T10:00:00.000Z
description: "Development of a machine learning model to detect phishing websites using supervised classification techniques."
tags: ["machine learning", "classification", "phishing detection", "security"]
---

## Project Overview

In this project the objective was to design, train, and evaluate a machine learning model capable of classifying websites as **phishing** or **legitimate** based on extracted features.

Phishing attacks are among the most widespread and damaging threats to online security. Automating their detection can help prevent fraud, protect user data, and improve trust in online services.

---

## Dataset

We used the **Phishing Websites Dataset** from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/327/phishing+websites), containing **11,055 records** and **31 features** describing website characteristics, including:

- URL length and structure
- Use of HTTPS protocol
- Presence of suspicious symbols
- Domain registration length
- Page rank and traffic statistics

The target variable is binary:
- `1` → Phishing website  
- `-1` → Legitimate website  

---

## Preprocessing

The preprocessing pipeline included:

- Handling missing values.
- Encoding categorical variables into numerical format.
- Normalizing numerical features.
- Splitting the dataset into **training (80%)** and **testing (20%)** sets.

---

## Models and Evaluation

We trained and evaluated multiple supervised classification algorithms:

- **Decision Tree Classifier**
- **Random Forest Classifier**
- **Logistic Regression**
- **Support Vector Machine (SVM)**
- **K-Nearest Neighbors (KNN)**

**Evaluation Metrics:**
- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix

---

## Results

The **Random Forest Classifier** delivered the highest performance across all metrics:

| Model                  | Accuracy | Precision | Recall | F1-Score |
|------------------------|----------|-----------|--------|----------|
| Decision Tree          | 0.951    | 0.95      | 0.95   | 0.95     |
| **Random Forest**      | **0.977**| **0.98**  | **0.98**| **0.98** |
| Logistic Regression    | 0.926    | 0.93      | 0.93   | 0.93     |
| SVM                    | 0.961    | 0.96      | 0.96   | 0.96     |
| KNN                    | 0.934    | 0.93      | 0.93   | 0.93     |

The Random Forest model showed excellent generalization on unseen data and is the recommended approach for deployment.

---

## Conclusions

- Random Forest proved to be a highly effective algorithm for phishing detection, offering strong performance without extensive parameter tuning.
- This model can be integrated into a **real-time phishing detection API** to flag suspicious URLs before users access them.
- Future work could explore **deep learning models** or **dynamic feature extraction** from live webpage content.

---

## Team & Acknowledgments

This was a group project completed as part of the **Fundamentos de Aprendizaje de Máquina** course at PUCP, with:

- Carlos Alberto Varas Tello  
- Lucia Dayhana Garcia Murguia  
- Paul Oliver Mateo Rodulfo  
  

**GitHub Repository:** [https://github.com/milkreator/deteccion_phishing_web](https://github.com/milkreator/deteccion_phishing_web)
