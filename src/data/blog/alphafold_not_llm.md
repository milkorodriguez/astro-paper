---
title: "AlphaFold doesn’t predict words, it predicts shapes"
description: "Why confusing AlphaFold with an LLM is misleading: it doesn’t predict text, it solves the 3D puzzle of biology"
pubDatetime: 2025-09-08
tags: ["AI", "biology", "AlphaFold", "LLM", "machine learning"]
---


# AlphaFold is not an LLM  

At the intersection of biology and artificial intelligence, it is common to confuse AlphaFold with an LLM.  
But it isn’t.  

---

## Why the confusion?  
It is true that AlphaFold uses **transformers**, the same architecture behind LLMs. But sharing components does not mean sharing purpose.  
Saying AlphaFold is an LLM is like saying a satellite and a microwave are the same because both use electromagnetic waves.  

---

## What does AlphaFold actually do?  
Imagine you have a long **necklace of beads**. At first glance, you only see the stretched chain, but you don’t know how it will fold or what shape it will take when, for example, you drop it on the table.  

In biology, the same thing happens: a protein starts as a **linear sequence of amino acids**, but its true function depends on the **three-dimensional shape** it folds into. That shape can turn it into an enzyme that digests food, hemoglobin that carries oxygen, or an antibody that protects you from viruses.  

What AlphaFold does is **predict how that necklace will fold**:  
- **AlphaFold 2 (2020)** managed to anticipate the final shape of thousands of proteins with near-atomic precision.  
- **AlphaFold 3 (2024)** went further: it can also predict how proteins interact with other molecules —DNA, RNA, drugs, ions— like several necklaces intertwining into a single design.  

In short: AlphaFold does not write sentences, it solves the three-dimensional puzzle of biology.  

---

## What AlphaFold really does  
- **AlphaFold 2 (2020)** solved the historic *protein folding problem* by combining:  
  • MSA (Multiple Sequence Alignments) to leverage evolutionary information.  
  • A specialized module (*Evoformer*) to represent residue-residue relationships.  
  • A *structure module* that predicts 3D coordinates.  
- **AlphaFold 3 (2024)** went further:  
  • Introduced the *Pairformer* (less dependent on MSAs).  
  • Replaced the structure module with a **generative diffusion model**, able to refine atomic coordinates from noise.  
  • Expanded its scope: now it predicts proteins, DNA, RNA, ligands, and ions in biological complexes.  

All of this is about **molecular geometry**, not language.  

---

## How it differs from an LLM  
- **LLM**: Its goal is to predict the next token in a sequence of text, based on statistical probability.  
- **AlphaFold**: Its goal is to predict the stable 3D form of biomolecules, respecting the laws of physics, chemical constraints, and evolutionary signals.  

Even so-called *protein language models* (like **ESMFold, ProGen, or Evo2**) are not “linguistic” in the human sense. As Offert, Kim & Cai (2024) note, transformers operate on artificially tokenized sequences (amino acids, subwords, pixels…), not on natural human language.  

---

## References  

- Jumper, J., Evans, R., Pritzel, A., et al. (2021). **Highly accurate protein structure prediction with AlphaFold.** *Nature*, 596, 583–589. https://doi.org/10.1038/s41586-021-03819-2  
- Abramson, J., Adler, J., Dunger, J., et al. (2024). **Accurate structure prediction of biomolecular interactions with AlphaFold 3.** *Nature*, 630, 493–500. https://doi.org/10.1038/s41586-024-07487-w  
- Rives, A., Meier, J., Sercu, T., et al. (2021). **Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences.** *PNAS*, 118(15). https://doi.org/10.1073/pnas.2016239118  
- Madani, A., McCann, B., Naik, N., et al. (2023). **Large language models in protein science: Opportunities and challenges.** *Nature Biotechnology*, 41, 1–10. https://doi.org/10.1038/s41587-023-01798-8  
- Offert, F., Kim, S., & Cai, Y. (2024). **Protein language models are not language models.** *arXiv preprint arXiv:2405.09788*. https://arxiv.org/abs/2405.09788  
