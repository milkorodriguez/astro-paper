---
title: "SRT-H: Autonomía Quirúrgica con IA da un Paso Más"
description: "Resumen y análisis del robot quirúrgico SRT-H, guiado por lenguaje natural, desarrollado por Johns Hopkins y Stanford. Utiliza IA para realizar tareas quirúrgicas complejas sin intervención humana directa."
pubDatetime: 2024-07-14T10:00:00.000Z
tags:
  - AI
  - Robótica
  - Cirugía
  - LLMs
  - Ciencia
---

Un equipo de Johns Hopkins y Stanford ha desarrollado **SRT-H**, un robot guiado por lenguaje natural capaz de ejecutar subrutinas reales de colecistectomía (extracción de vesícula biliar) de manera **autónoma**, utilizando el sistema quirúrgico da Vinci.

La intervención se realizó sobre tejidos reales de vesícula biliar porcina (ex vivo), sin intervenir animales vivos. En **8 de 8 pruebas**, el sistema completó la tarea sin intervención humana, cumpliendo con criterios de precisión y seguridad.

## ¿Cómo Funciona?

SRT-H se basa en una **arquitectura jerárquica** donde un modelo de lenguaje genera instrucciones quirúrgicas específicas como:

- “coloca el clip en la arteria”
- “mueve el brazo izquierdo hacia la derecha”

Este modelo permite adaptar y corregir acciones en **tiempo real**, algo crítico en entornos quirúrgicos.

## ¿Por qué es Importante?

La cirugía autónoma representa un **reto mayor** para la IA, por:

- La **variabilidad anatómica** entre pacientes.
- La necesidad de planificación a largo plazo.
- Las estrictas condiciones de **seguridad clínica**.

SRT-H es un gran avance, ya que demuestra que es posible automatizar procedimientos quirúrgicos con modelos de lenguaje sin comprometer la precisión.

## Próximos Pasos

Se planea validar el sistema **en estudios in vivo**, con el objetivo de su aplicación clínica real y la democratización del acceso a cirugías seguras a nivel mundial.

📄 Paper y demos en video: [h-surgical-robot-transformer.github.io](https://h-surgical-robot-transformer.github.io/)
