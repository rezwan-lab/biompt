# Biompt

## Project Overview

**Biompt** is a modular prompt engineering engine tailored for genomics, AI, and bioinformatics. Designed for researchers and developers, it systematically transforms ambiguous or unstructured input into high-quality prompts optimized for Large Language Models (LLMs) such as GPT, Claude, Gemini, and domain-specific agents. The tool supports scientific writing, clinical genomics, pipeline automation, and metadata extraction—wherever precision, context alignment, and interpretability are essential.

Prompt engineering plays a central role in ensuring the accuracy and utility of LLM outputs, particularly in knowledge-dense and terminology-sensitive domains such as biomedical research. Biompt addresses the gap by incorporating ontological reasoning, few-shot learning strategies, and domain alignment mechanisms into the prompt generation process.

---

## Background and Significance

While general-purpose LLMs offer strong language generation capabilities, their effectiveness is highly dependent on the quality of the prompt. In fields like genomics and bioinformatics, effective prompts must satisfy strict requirements: ontology conformance, tool-specific terminology, clarity in task specification, and adherence to scientific tone. Biompt introduces a formal pipeline for converting draft instructions into optimized prompts by integrating biomedical vocabularies (e.g., MeSH, HGNC, NCBI Taxonomy) and structured decomposition layers.

This approach is novel in its:
- Adaptability across scientific and clinical domains
- Integration of biomedical ontologies and prompt templates
- Modular, interpretable transformation pipeline from raw intent to finalized prompt

---

## Features

Biompt includes:

- A web-based React application for interactive prompt generation (`App.js`)
- Configurable multi-stage prompt engineering pipeline
- Controlled vocabulary alignment using MeSH, HGNC, NCBI Taxonomy, EDAM
- Support for zero-shot, few-shot, CoT (Chain of Thought), and multi-turn prompts
- Integration-ready prompt output (for APIs, LLM agents, IDE plugins)
- User-defined tone, structure, audience, and constraints
- Feedback-based refinement and iteration readiness tagging

---

## Methodology: Prompt Engineering Pipeline

Biompt implements a layered synthesis framework with seven distinct stages:

1. **Instruction Decomposition Layer (IDL)**  
   Classifies task type, tone, domain, and desired format from draft instructions using rule-based and transformer classifiers.

2. **Prompt Strategy Selector (PSS)**  
   Maps decomposed tasks to appropriate strategies: zero-shot, few-shot, CoT, instructional, or conversational templates.

3. **Context Infusion Module (CIM)**  
   Retrieves domain-aware examples and aligns terminology with ontologies. Auto-injects few-shot patterns if ambiguity exists.

4. **Prompt Optimization Engine (POE)**  
   Refines prompts for clarity, structure, tone fit, and task specificity. Enforces syntactic and semantic rules.

5. **Prompt Quality Evaluator (PQE)**  
   Evaluates prompts against criteria like specificity, task clarity, audience alignment, modularity, and context fitness.

6. **Meta-Prompt Renderer (MPR)**  
   Converts abstract intermediate representation (IR) into executable, LLM-optimized natural language prompts.

7. **Fallback & Clarification Module (FCM)**  
   Addresses underspecified input by defaulting to academic tone, inserting clarifying sub-prompts, and tagging outputs for refinement.

---

## Installation (from scratch)

To run Biompt locally:

```bash
# 1. Clone the repository
git clone https://github.com/rezwan-lab/biompt.git
cd biompt

# 2. Install Node.js (if not already installed)
# Visit https://nodejs.org/en/download and install v18.x or above

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
