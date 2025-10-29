---
title: "Inside the Black Box: The Limits of Our Understanding"
description: "From hyperplanes to neural networks, a reflection on why some of the most powerful AI models remain opaque to human comprehension."
tags: ["AI", "Machine Learning", "Black Box", "Neural Networks", "SVM"]
pubDatetime: 2025-10-29
---

### The Language We Don’t Yet Understand

In the world of artificial intelligence, the *black box* is not just a metaphor—it’s a frontier.  
It describes models capable of predicting, classifying, and generating with astonishing precision, while revealing almost nothing about how they do it.  
A black box, in its simplest sense, is a system we can observe from the outside: we see its inputs, we see its outputs, yet its internal reasoning remains invisible.  
Its logic exists, but it is written in a language we still don’t know how to read.

This idea doesn’t arise from secrecy but from complexity.  
As machine learning systems grow in depth and scale, their internal representations—millions of weights, nonlinear functions, transformations across hundreds of dimensions—become impossible to visualize or narrate in human terms.  
We can measure their performance, verify their accuracy, even control their training, but we can no longer *see* how intelligence unfolds inside them.

---

###  The Four Families of the Invisible

Omar Loyola-González, in his 2019 article *“Black-Box vs. White-Box: Understanding Their Advantages and Weaknesses”* published in *IEEE Access*, describes four main families of models that inhabit this opaque territory.

The first are **hyperplane-based models**, such as *Support Vector Machines (SVMs)*.  
They operate in abstract geometries, seeking invisible boundaries that separate data classes.  
In two or three dimensions, we can imagine them as lines dividing colored points; but in real-world problems—with thousands of examples and hundreds of variables—these hyperplanes exist in spaces we can no longer imagine.  
They exist mathematically, not visually.

Then come the **biologically inspired networks**, from the early *Artificial Neural Networks* to the modern *Convolutional* and *Generative Adversarial Networks*.  
These systems imitate, in simplified form, the behavior of neurons.  
They adjust weights between nodes, layer by layer, until patterns emerge: faces, voices, textures, words.  
And yet, no one can point to a specific neuron and say, *“Here lies the concept of a cat.”*  
Meaning in these architectures is diffuse, emergent, collective—a reasoning distributed among thousands of connections.

A third family, the **probabilistic and combinatorial models**, builds meaning through uncertainty.  
They don’t express absolute truths but degrees of belief.  
Even if their structure seems transparent on paper, their internal calculations intertwine through countless conditional dependencies until the overall picture dissolves into statistical fog.

Finally, there are the **instance-based models**, such as *k-Nearest Neighbors*.  
They don’t generalize—they remember.  
To classify a new example, they search their memory for similar past cases and decide by proximity.  
Their simplicity makes them intuitive, but even here, the accumulation of local decisions doesn’t reveal the global shape of reasoning.

Each of these families offers a distinct path toward intelligence, and yet they share one truth:  
the more powerful the model becomes, the less transparent its internal workings are.

---

###  The Strength of Opacity

The black box, paradoxically, owes its success to the very opacity that unsettles us.  
Its deep and nonlinear architecture allows it to detect patterns that escape our perception.  
By giving up direct interpretability, we gain access to forms of learning that transcend our analytical reach.

That is why neural networks can read medical images, predict language, or compose music.  
Their understanding is not symbolic but spatial; not verbal but structural.  
They perceive the shape of data in ways that cannot be described by rules.

And yet, this gift comes at a cost.  
When such a model fails, we rarely know why.  
When it succeeds, we cannot fully explain how.  
We stand before the glass of an immense machine, witnessing its precision from the outside, unable to follow the path of its thought.

---

###  Beyond Control, Toward Comprehension

To call these models *black boxes* is to acknowledge both their brilliance and our limits.  
They challenge an ancient habit: the belief that to know something, we must be able to explain it.  
Here, understanding does not mean deciphering—it means coexisting with complexity.  
We build systems whose reasoning we can supervise, but not fully share.

Perhaps the black box is not a flaw to be fixed, but a mirror to be studied.  
It reflects a new condition of knowledge, one in which machines compute faster than we interpret, and meaning shifts from clarity to depth.

The machine doesn’t hide its secrets.  
It simply speaks a language we are still learning.

---

 *“We once built machines that obeyed.  
Now we build machines that think…  
and we are still learning how to listen.”*

---

📚**Main reference:**
Loyola-González, O. (2019). *Black-Box vs. White-Box: Understanding Their Advantages and Weaknesses from a Practical Point of View.* IEEE Access, 7, 154096–154113.

