---
title: "🧠 Predicción de Churn con Random Forest: Un Proyecto de Análisis con Impacto Económico"
description: "Un enfoque de Data Analytics que conecta métricas técnicas con impacto económico en la predicción de churn, usando Random Forest y visualizaciones en Python."
pubDate: 2025-06-15
author: "Milko Rodríguez"
tags: ["machine learning", "churn", "random forest", "data analytics", "python"]
featured: true
draft: false
---
En el marco del diplomado de especialización en Data Analytics (2024–2025), desarrollamos un proyecto grupal para abordar uno de los desafíos clásicos del análisis de datos: la predicción de churn (abandono de clientes). Lo interesante no fue solo mejorar métricas técnicas, sino cuantificar directamente el impacto económico de cada modelo probado.

Este post resume nuestro enfoque, decisiones técnicas y resultados, utilizando técnicas de clasificación, optimización y visualización con Python y Jupyter Notebooks.

## 📊 El reto: Predecir clientes que abandonarán el servicio

Trabajamos con un dataset etiquetado de churn que simula datos reales de una empresa de telecomunicaciones. Nuestro objetivo fue construir un modelo robusto de clasificación que permitiera anticipar con precisión qué clientes abandonarían el servicio.

Pero no nos quedamos en métricas como F1 o precisión: queríamos responder a la pregunta clave para cualquier negocio:

> **¿Cuánto dinero se gana o se pierde si usamos este modelo para tomar decisiones?**

## ⚙️ Técnicas usadas

- Limpieza, imputación y transformación de datos con `Pipeline` y `ColumnTransformer`
- Codificación y escalado de variables categóricas y numéricas
- Reducción de dimensionalidad con PCA
- Selección de características con Permutation Importance
- Entrenamiento de modelos con Random Forest y validación cruzada
- Optimización con `RandomizedSearchCV`
- Métricas de evaluación: F1-Score, Matriz de Confusión, Reporte de clasificación
- Análisis económico basado en matrices de confusión

## 🧪 Resultados clave

El modelo final, un Random Forest optimizado, logró:

- **Precisión (clase positiva):** 96%
- **F1-Score (test):** 86.87%
- **Reducción de pérdida total:** 61.9%
- **Incremento en ganancia neta:** 161.82%

Todo esto, comparado contra un modelo base (H₀) más simple y sin selección de características.

```python
# Ejemplo de resultados económicos
Mejor en ganancia neta: 161.82% = Ganancia H0: 1459280.0 → Nueva Ganancia: 3830880.0
Reducción en pérdida total: 61.9% = Pérdida H0: -760880.0 → Nueva Pérdida: -289200.0
```

## 🧠 ¿Por qué este enfoque importa?

Más allá del rendimiento técnico, el valor real del modelo se midió en **decisiones de negocio**. Esto fue posible gracias a:

- Una función de evaluación personalizada que traduce la matriz de confusión en cifras económicas
- Evaluación de hipótesis y ramas del modelo como estrategias diferenciadas de intervención
- Visualización y explicación del impacto en lenguaje accesible para stakeholders

## 👥 Equipo

Este trabajo fue realizado en el marco del curso **Proyecto de Análisis de Datos - Sprint 03** de la **Diplomatura de Especialización en Data Analytics**. Participaron:

- Franco Silva  
- Anthony Talavera  
- Milko Rodríguez _(autor de este blog post)_

## 📁 Recursos

Puedes explorar el código y los notebooks del proyecto aquí:  
👉 [Repositorio en GitHub](https://github.com/milkreator/pishingweb)

## 💡 Próximamente

¿Te interesa saber cómo podríamos llevar este modelo a producción usando `FastAPI`, `MongoDB`, o desplegarlo en AWS?  
Pronto publicaré una segunda parte explicando cómo hacerlo paso a paso.

¿Tienes dudas o comentarios? Escríbeme o conéctate a través de [GitHub](https://github.com/milkreator).
