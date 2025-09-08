---
title: "AlphaFold doesn’t predict words, it predicts shapes"
description: "Why confusing AlphaFold with an LLM is misleading: it doesn’t predict text, it solves the 3D puzzle of biology"
pubDatetime: 2025-09-08
tags: ["AI", "biology", "AlphaFold", "LLM", "machine learning"]
---


# 🚫 AlphaFold is not an LLM  

**At the intersection of biology and artificial intelligence, it’s common to confuse AlphaFold with an LLM.**  
❌ But it isn’t.  

---

### 🔍 Why the confusion?  
It’s true that AlphaFold uses **transformers**, the same architecture behind LLMs. But **sharing components doesn’t mean sharing purpose**.  
Saying AlphaFold is an LLM is like saying a satellite and a microwave are the same because both use electromagnetic waves.  

---

### 🧬 So, what does AlphaFold actually do?  
Imagine you have a long **necklace of beads**. At first glance, you only see the stretched chain, but you don’t know how it will fold or what shape it will take when, for example, you drop it on the table.  

In biology, the same thing happens: a protein starts as a **linear sequence of amino acids**, but its true function depends on the **three-dimensional shape** it folds into. That shape can turn it into an enzyme that digests food, hemoglobin that carries oxygen, or an antibody that protects you from viruses.  

What AlphaFold does is **predict how that necklace will fold**:  
- **AlphaFold 2 (2020)** managed to anticipate the final shape of thousands of proteins with near-atomic precision.  
- **AlphaFold 3 (2024)** went further: it can also predict how proteins interact with other molecules —DNA, RNA, drugs, ions— like several necklaces intertwining into a single design.  

In short: **AlphaFold doesn’t write sentences, it solves the three-dimensional puzzle of biology**.  

---

## ⚙️ What AlphaFold really does  
- **AlphaFold 2 (2020)** solved the historic *protein folding problem* by combining:  
  • MSA (Multiple Sequence Alignments) to leverage evolutionary information.  
  • A specialized module (*Evoformer*) to represent residue-residue relationships.  
  • A *structure module* that predicts 3D coordinates.  
- **AlphaFold 3 (2024)** went further:  
  • Introduced the *Pairformer* (less dependent on MSAs).  
  • Replaced the structure module with a **generative diffusion model**, able to refine atomic coordinates from noise.  
  • Expanded its scope: now it predicts proteins, DNA, RNA, ligands, and ions in biological complexes.  

👉 All of this is about **molecular geometry**, not language.  

---

## 📚 How it differs from an LLM  
- **LLM**: Its goal is to predict the next token in a sequence of text, based on statistical probability.  
- **AlphaFold**: Its goal is to predict the stable 3D form of biomolecules, respecting the laws of physics, chemical constraints, and evolutionary signals.  

Even so-called *protein language models* (like **ESMFold, ProGen, or Evo2**) aren’t “linguistic” in the human sense. As **Offert, Kim & Cai (2024)** note, transformers operate on artificially tokenized sequences (amino acids, subwords, pixels…), not on natural human language.  

---

💡 **Conclusion**: Calling AlphaFold an LLM reduces it to a cliché. Let’s recognize it for what it truly is: **a pioneering model that solves the three-dimensional puzzle of biology**.  
