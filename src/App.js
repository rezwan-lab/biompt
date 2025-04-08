


import React, { useState } from 'react';
import './App.css';

// Writing Guidance Configuration - Add this outside the component
const writingGuidanceConfig = {
  sections: [
    {
      id: "transitionsFlow",
      title: "Transitions & Flow",
      options: [
        {
          id: "smooth",
          value: "Use smooth transitions",
          description: "Use smooth, human-like transitions between sentences and paragraphs"
        },
        {
          id: "logical",
          value: "Maintain logical flow",
          description: "Maintain logical flow—each paragraph should build naturally on the previous one"
        },
        {
          id: "avoid_robotic",
          value: "Avoid robotic phrasing",
          description: "Avoid robotic, disconnected, or template-based phrasing"
        }
      ]
    },
    {
      id: "contentBalance",
      title: "Content Balance & Quality",
      options: [
        {
          id: "clarity",
          value: "Prioritize clarity",
          description: "Prioritize clarity, depth, and accuracy over length or verbosity"
        },
        {
          id: "focus",
          value: "Focus on meaningful info",
          description: "Focus on meaningful, high-value information only"
        },
        {
          id: "purpose",
          value: "Every sentence must serve a purpose",
          description: "Every sentence must serve a purpose—no fluff"
        }
      ]
    },
    {
      id: "toneLanguage",
      title: "Tone & Language",
      options: [
        {
          id: "professional",
          value: "Professional tone",
          description: "Maintain a professional, formal, and respectful tone"
        },
        {
          id: "confidence",
          value: "Native speaker confidence",
          description: "Write with the confidence of a native English speaker, without exaggeration"
        },
        {
          id: "avoid_hype",
          value: "Avoid self-praise",
          description: "Avoid self-praise, inflated adjectives, or hype-driven expressions"
        },
        {
          id: "enthusiasm",
          value: "Show grounded enthusiasm",
          description: "Show enthusiasm only when relevant and grounded in facts"
        }
      ]
    },
    {
      id: "structureReadability",
      title: "Structure & Readability",
      options: [
        {
          id: "short_paragraphs",
          value: "Short clear paragraphs",
          description: "Break content into short, clear paragraphs"
        },
        {
          id: "bullet_points",
          value: "Use bullets for multiple ideas",
          description: "Use bullet points or headings for multiple ideas"
        },
        {
          id: "active_voice",
          value: "Use active voice",
          description: "Favor active voice; minimize use of passive constructions"
        },
        {
          id: "one_idea",
          value: "One main idea per paragraph",
          description: "Keep one main idea per paragraph"
        }
      ]
    },
    {
      id: "contentPrecision",
      title: "Content Precision & Relevance",
      options: [
        {
          id: "actionable",
          value: "Focus on actionable insights",
          description: "Focus on actionable insights and informative value"
        },
        {
          id: "support_claims",
          value: "Support claims with data",
          description: "Support claims with brief data points, clear examples, or real context"
        },
        {
          id: "questions",
          value: "Ask purposeful questions",
          description: "Ask thoughtful, open-ended questions only when they serve a purpose"
        }
      ]
    },
    {
      id: "avoidFollowing",
      title: "Avoid the Following",
      options: [
        {
          id: "cliches",
          value: "Avoid clichés and vague metaphors",
          description: "Clichés, vague metaphors, or generalizations"
        },
        {
          id: "redundant",
          value: "Avoid redundant words",
          description: "Redundant or overused words (e.g., 'very,' 'really,' 'incredible')"
        },
        {
          id: "summary_openers",
          value: "Avoid summary openers",
          description: "Summary openers like 'In conclusion', 'To summarize'"
        },
        {
          id: "emojis",
          value: "Avoid decorative symbols",
          description: "Emojis, hashtags, semicolons, or decorative symbols"
        },
        {
          id: "self_promotion",
          value: "Avoid self-promotion",
          description: "Self-promotion or excessive confidence—opt for humility and clarity"
        }
      ]
    },
    {
      id: "prohibitedWords",
      title: "Prohibited Words & Phrases",
      options: [
        {
          id: "transitional",
          value: "Avoid common transitional phrases",
          description: "Transitional Phrases (avoid these): Accordingly, Additionally, Arguably, Certainly, Consequently, Hence, However, Indeed, Moreover, Nevertheless, Nonetheless, Notwithstanding, Thus, Undoubtedly"
        },
        {
          id: "buzzwords",
          value: "Avoid buzzwords and adjectives",
          description: "Buzzwords/Adjectives: Adept, Commendable, Dynamic, Efficient, Ever-evolving, Exemplary, Innovative, Invaluable, Robust, Seamless, Synergistic, Transformative, Thought-provoking, Vital"
        },
        {
          id: "generic_nouns",
          value: "Avoid generic nouns",
          description: "Generic Nouns: Efficiency, Innovation, Institution, Integration, Implementation, Landscape, Optimization, Realm, Tapestry, Transformation"
        },
        {
          id: "overused_verbs",
          value: "Avoid overused verbs",
          description: "Overused Verbs: Delve, Leverage, Expound, Utilize, Facilitate, Iterate, Streamline, Augment, Optimize, Hone"
        },
        {
          id: "redundant_adj",
          value: "Avoid redundant adjectives",
          description: "Redundant Adjectives: Eager, Robust, Comprehensive, Holistic, Intriguing, Compelling, Insightful, Pragmatic, Scalable"
        },
        {
          id: "cliched_connectors",
          value: "Avoid clichéd connectors",
          description: "Clichéd Connectors: In light of this, It's worth noting, With this in mind, To that end, Broadly speaking, At its core, Undoubtedly, For instance, As such, Moving forward"
        }
      ]
    },
    {
      id: "grammarSentence",
      title: "Grammar & Sentence Craft",
      options: [
        {
          id: "correct",
          value: "Correct punctuation and grammar",
          description: "Use correct punctuation and grammar at all times"
        },
        {
          id: "avoid_long",
          value: "Avoid long sentences",
          description: "Avoid long, nested, or convoluted sentence structures"
        },
        {
          id: "eliminate",
          value: "Eliminate repetition",
          description: "Eliminate repetition or overlapping phrases"
        }
      ]
    },
    {
      id: "languageQuality",
      title: "Language Quality Best Practices",
      options: [
        {
          id: "proofread",
          value: "Proofread for clarity",
          description: "Proofread for clarity, sentence variety, and consistency"
        },
        {
          id: "logical_build",
          value: "Logical sentence progression",
          description: "Ensure each sentence builds logically from the last"
        },
        {
          id: "aligned_tone",
          value: "Academic tone alignment",
          description: "Keep the tone aligned with academic and professional expectations"
        }
      ]
    },
    {
      id: "goldenRule",
      title: "Golden Rule",
      options: [
        {
          id: "default",
          value: "Bridge between minds",
          description: "Write like you're building a bridge between minds. Each sentence should carry intent, each paragraph should progress the story, and the entire piece should breathe as one coherent whole"
        }
      ]
    }
  ]
};

const PromptCraftApp = () => {
  const [activeTab, setActiveTab] = useState('model');
  // Enhanced form data with additional fields from second implementation
  const [formData, setFormData] = useState({
    objective: '',
    topic: '',
    audience: '',
    toneStyle: '',
    format: '',
    length: '',
    styleExample: '',
    rulesConstraints: '',
    notesLimitations: '',
    priorityFallback: '',
    refinement: '',
    writingGuidance: '',
    documentInfo: ''
  });
  
  const [generatedOutput, setGeneratedOutput] = useState('');
  // Track which examples are expanded
  const [expandedExamples, setExpandedExamples] = useState({});

  // Toggle example expansion
  const toggleExample = (field) => {
    setExpandedExamples({
      ...expandedExamples,
      [field]: !expandedExamples[field]
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle dropdown selections
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enhanced handleSubmit that incorporates all 12 fields
  const handleSubmit = () => {
    // Generate output from form data
    let output = '';
    
    if (formData.objective) output += `I need a prompt that will ${formData.objective}. `;
    if (formData.topic) output += `The topic is about ${formData.topic}. `;
    if (formData.audience) output += `This content is targeted toward ${formData.audience}. `;
    if (formData.toneStyle) output += `Adopt a writing style that use a ${formData.toneStyle} tone. `;
    
    if (formData.format || formData.length) {
      output += 'Structure the output as a ';
      if (formData.format) {
        output += formData.format;
      }
      if (formData.format && formData.length) {
        output += ' targeting a summary with ';
      }
      if (formData.length) {
        output += formData.length + ' length';
      }
      output += '. ';
    }
    
    if (formData.styleExample) {
      output += `Here's an example of the style I'm looking for: "${formData.styleExample}". `;
    }
    
    if (formData.rulesConstraints) output += `Please follow these constraints: ${formData.rulesConstraints}. `;
    if (formData.notesLimitations) output += `Consider the following limitations when generating the content: ${formData.notesLimitations}. `;
    if (formData.priorityFallback) output += `When faced with ambiguity, prioritize the following principles: ${formData.priorityFallback}. `;
    if (formData.refinement) output += `After the initial output, apply the following refinement instruction: ${formData.refinement}. `;
    
    // NEW CODE FOR WRITING GUIDANCE - START
    if (formData.writingGuidance) {
      output += `Use the following writing principles to refine AI-generated responses to sound professional, human-like, and free from overly polished or artificial tones.: `;
      
      // Parse the comma-separated values into an array
      const selectedOptions = formData.writingGuidance.split(", ");
      
      // Create a map for custom inputs that may not match predefined options
      const customInputs = {};
      
      // Prepare section outputs
      const sectionOutputs = {};
      
      // Process each selected option
      selectedOptions.forEach(option => {
        let handled = false;
        
        // Check against all predefined options in all sections
        writingGuidanceConfig.sections.forEach(section => {
          // Try to find the option in this section
          const matchingOption = section.options.find(o => o.value === option);
          
          if (matchingOption) {
            // Initialize this section's output array if not already done
            sectionOutputs[section.id] = sectionOutputs[section.id] || [];
            // Add the full description to the section's output
            sectionOutputs[section.id].push(matchingOption.description);
            handled = true;
          }
        });
        
        // Handle custom inputs that start with specific prefixes
        if (!handled) {
          if (option.startsWith("Golden rule:")) {
            sectionOutputs.goldenRule = sectionOutputs.goldenRule || [];
            sectionOutputs.goldenRule.push(option.replace("Golden rule:", "").trim());
          } else if (option.startsWith("Avoid:")) {
            sectionOutputs.prohibitedWords = sectionOutputs.prohibitedWords || [];
            sectionOutputs.prohibitedWords.push(option);
          } else {
            // Try to infer the section based on the content
            let inferredSection = null;
            
            if (option.toLowerCase().includes("transition") || option.toLowerCase().includes("flow")) {
              inferredSection = "transitionsFlow";
            } else if (option.toLowerCase().includes("clarity") || option.toLowerCase().includes("quality")) {
              inferredSection = "contentBalance";
            } else if (option.toLowerCase().includes("tone") || option.toLowerCase().includes("language")) {
              inferredSection = "toneLanguage";
            } else if (option.toLowerCase().includes("structure") || option.toLowerCase().includes("readability")) {
              inferredSection = "structureReadability";
            } else if (option.toLowerCase().includes("precision") || option.toLowerCase().includes("relevant")) {
              inferredSection = "contentPrecision";
            } else if (option.toLowerCase().includes("avoid") || option.toLowerCase().includes("don't use")) {
              inferredSection = "avoidFollowing";
            } else if (option.toLowerCase().includes("prohibited") || option.toLowerCase().includes("words") || option.toLowerCase().includes("phrases")) {
              inferredSection = "prohibitedWords";
            } else if (option.toLowerCase().includes("grammar") || option.toLowerCase().includes("sentence")) {
              inferredSection = "grammarSentence";
            } else if (option.toLowerCase().includes("proofread") || option.toLowerCase().includes("language quality")) {
              inferredSection = "languageQuality";
            } else {
              // Catch-all for truly custom inputs with no obvious section
              customInputs.other = customInputs.other || [];
              customInputs.other.push(option);
              return; // Skip further processing for this option
            }
            
            // Add to the inferred section
            sectionOutputs[inferredSection] = sectionOutputs[inferredSection] || [];
            sectionOutputs[inferredSection].push(option);
          }
        }
      });
      
      // Format the output with proper section headings
      const formattedSections = [];
      
      writingGuidanceConfig.sections.forEach(section => {
        if (sectionOutputs[section.id] && sectionOutputs[section.id].length > 0) {
          const sectionText = `${section.title}: ${sectionOutputs[section.id].join(", ")}`;
          formattedSections.push(sectionText);
        }
      });
      
      // Add any custom sections
      if (customInputs.other && customInputs.other.length > 0) {
        formattedSections.push(`Other Guidance: ${customInputs.other.join(", ")}`);
      }
      
      // Join all sections with the appropriate separator
      output += formattedSections.join(". ") + ". ";
    }
    // NEW CODE FOR WRITING GUIDANCE - END
    
    if (formData.documentInfo) output += `Document information: ${formData.documentInfo}. `;
    
    // Combine with model description (from your original code)
    const modelInfo = 
`PromptCraft-AI is a next-generation, modular prompt synthesis engine that converts raw unstructured or ambiguous draft instructions into precise, context-aware prompts for Large Language Models (LLMs).

PromptCraft-AI follows a multi-stage synthesis pipeline:
1. Instruction Decomposition Layer (IDL) - Purpose: Parse and interpret user-provided draft instructions across core dimensions:
Task Type: (generate, summarize, classify, extract, etc.), Topic/Domain, Tone & Audience, Format & Constraints, Intent Type (zero-shot, few-shot, CoT, structured)
Techniques:
Lightweight transformer-based classifier. Rule-based heuristic fallbacks. Contextual gap detection for underspecified input

2. Prompt Strategy Selector (PSS) - Purpose: Match the decomposed task to best-fit prompting strategies:
Zero-shot / Few-shot / Chain-of-Thought / Multi-turn, Structured vs Freeform formats, Instructional / Summarization / Conversational / Code-generation
Features Considered:
Task complexity and ambiguity level, Target domain, Desired output structure (e.g., code, markdown, paragraph)

3. Context Infusion Module (CIM) - Purpose:Expand the intermediate prompt representation with relevant domain-aware examples, context, and structure to increase LLM accuracy, reduce ambiguity, and improve tone/format fit.
Capabilities
a. Retrieval-Augmented Inference (RAI)
Queries a curated internal prompt corpus (e.g., prompt_templates/) based on:
Topic match (e.g., "VCF annotation", "RNA-seq QC"), Tool/technology (e.g., "GATK", "STAR", "Nextflow"), Task category (e.g., summarize, generate code, debug)
Example:
 For a task like "debug GFF parsing", it retrieves past examples or successful patterns to seed the prompt.
b. Ontology-Based Tone & Audience Alignment
Maps terms and concepts to controlled vocabularies, ensuring clarity and scientific correctness. Ontologies used—Disease: MeSH, ICD-10; Genes: HGNC; Species: NCBI Taxonomy; Bioinformatics: EDAM.
Example:
 "heart attack" → replaced with "myocardial infarction (MeSH:D009203)",  "BRCA gene" → corrected to "BRCA1 (HGNC:1100)"
c. Few-shot Pattern Generation
When task type is ambiguous or complex, it auto-injects few-shot prompt patterns based on retrieved examples: Includes input/output samples, Uses minimal examples with diverse phrasing, Tuned for each LLM's few-shot performance profile.

Design Integration
Modular: Plug-and-play integration into PromptCraft-AI pipeline
Configurable: Can be domain-specific (genomics, clinical NLP) or generalized
Internal corpus stored as: prompt_templates/{domain}/{tool}.yml

Output Example (Post-CIM):
Summarize the results of a GATK HaplotypeCaller run on exome data, using MeSH terms for disease relevance. Include an example interpretation.

4. Prompt Optimization Engine (POE) - Purpose: Apply prompt engineering best practices and transform intermediate representation into polished natural language prompts.
Features: Modular prompt chunking. Clarity enforcement (verb-object replacement, noun disambiguation). Format enforcement (word count, bullet/paragraph constraints). Tone transfer aligned with audience profile

5. Prompt Quality Evaluator (PQE) - Each prompt is evaluated against 8 core dimensions:
Prompt quality criteria—Specificity: Action clarity, filler pruning, POS-based rephrasing; Task Clarity: Executable phrasing, LLM parse simulation; Context Fit: Background inference, intent alignment; Format Adherence: Length, layout, structure; Tone-Audience Fit: Style transfer via domain personas; Few-shot Utility: Pattern detection, auto-synthesis; Modularity: Task decomposition, nesting; Iteration Readiness: Tagged as Ready, Refine, or Clarify.

6. Meta-Prompt Renderer (MPR) - Purpose: Generate final LLM-ready natural language prompts from the abstracted prompt-IR, using domain-tuned, platform-specific meta-templates.
Capabilities (Expanded)
 a. DSL-like Prompt IR → Natural Language Generation
Uses intermediate representation like:
{
  "task": "Summarize",
  "topic": "RNA-seq analysis of melanoma",
  "audience": "Researchers",
  "format": "Concise paragraph",
  "tone": "Academic",
  "ontology": ["MeSH", "HGNC"]
}
Converts into structured, precise, natural-language prompts.


b. Dynamic Template Selection Logic
Based on: Task type (generate/code/explain), Format (paragraph, bullet, code), Target LLM, Audience/tone mapping


Example Meta-Templates
For Summarization
"Write a concise academic summary suitable for researchers that explains RNA-seq differential expression analysis results in melanoma. Use technical terms where necessary and keep under 200 words."
For Debug Code Prompt
"Analyze the error log below and suggest the likely cause and fix. Format the response with 'Likely Cause' and 'Suggested Fix'."
For Few-shot Classification
"Classify each gene variant below as Pathogenic, Benign, or Uncertain based on prior examples."
For Multi-turn clarification prompt
"The user wants to extract metadata from a FASTQ file header. Should the output include read group, platform, and sample ID?"

Design Integration
Template files: meta_templates/{llm}.json
Can be extended with your own field like:
"ontology_term_usage": true
"explanation_required": false

7. Fallback & Clarification Module (FCM) - When user input is ambiguous or underspecified: Defaults to concise, professional tone. Inserts clarifying sub-prompts (e.g., "Should I write this in simple terms or academic tone?"). Labels result as DRAFT_PROMPT for user review

Learning Paradigm
PromptCraft-AI is built with continuous refinement in mind:
Pretraining: Prompt datasets from FLAN, PromptSource, OpenPrompt
Fine-tuning: On draft-to-prompt transformations + human feedback
Reinforcement: Simulated LLM response loops rated for quality and clarity


Key Capabilities
Framework features—Cross-LLM Compatibility: Prompts adapt to target LLM behavior; LLM-Aware Design: Tailored to LLM strengths (e.g., Claude = verbose, GPT-4 = structured); Auto-formatting: Outputs in Markdown, JSON, YAML; Few-shot Frame Insertion: Adds examples as needed; Meta-Agent Integration: Compatible with LangChain, Auto-GPT, RAG; Self-Correcting Loop: Supports user tagging, feedback, re-generation.
Model Type
Type: Hybrid Rule-Based + Generative Inference Engine
Design: Modular, Multi-stage prompt generation with IR schema
Optimization: Reinforcement + Classification + Ranking heads
Format: Accepts draft input form (JSON or form-based UI) → generates LLM-ready prompts


Deployment Modes
Deployment modes—Standalone App: Web/CLI interface for draft-to-prompt generation; API Service: Converts instruction schema into prompt; IDE Plugin: Auto-generates prompts for developer workflows; LLM Agent Node: Functions as a prompt synthesis unit in agent chains; Training Assistant: Guides users with structured feedback on prompt design.
Iteration Loop
Each generated prompt is labeled:
✅ Final – meets all criteria
📝 Refine – minor improvements suggested
❓ Clarify – missing input, needs user confirmation
This enables use in LLM-as-a-Service pipelines, where PromptCraft-AI becomes part of a continuous improvement loop for prompt generation and execution.


Use the draft instruction below as input:

`;
    
    setGeneratedOutput(modelInfo + output);
    setActiveTab('result');
  };

  // Examples for each field (from second implementation)

  const examples = {
    objective: [
      "Summarize a differential expression result from RNA-seq analysis.",
      "Generate a publication-ready abstract for my research on long-read structural variant detection.",
      "Debug a Python script used for VCF annotation with Ensembl VEP.",
      "Generate a few-shot prompt to extract variant types from unstructured clinical reports.",
      "Create a code block to calculate TPM values from raw gene count matrix.",
      "Rewrite an academic paragraph explaining mosaicism using simpler terms.",
      "Suggest GPT prompts for improving quality control checks in a WGS pipeline.",
      "Diagnose why my BAM file fails in samtools sort and recommend a fix.",
      "Interpret GATK HaplotypeCaller log and explain possible failure causes.",
      "Generate metadata prompts to extract platform, organism, and read length from FASTQ headers.",
      "Convert user notes on variant prioritization into a CoT-style prompt for GPT-4."
    ],
    topic: [
      "Structural variant detection using long-read Nanopore data.",
      "Multi-omics integration for rare disease diagnosis.",
      "Deep learning application for histopathological image analysis.",
      "Designing prompts to automate metadata extraction from NCBI GEO.",
      "Debugging Nextflow workflows for cancer genome analysis.",
      "Training a transformer model for variant pathogenicity classification."
    ],
    styleExample: [
      "This study presents a machine learning-based annotation framework to prioritize disease-causing variants in rare genetic disorders using multi-omics integration. Results demonstrate improved diagnostic yield across RNA-seq and WGS datasets.",
      "We developed a deep learning model leveraging transformer architecture for detecting structural variants from Nanopore long-read data. The model outperforms existing benchmarks and uncovers previously undetected deletions in rare disease genomes.",
      "To calculate TPM from a raw count matrix, first normalize for gene length, then scale to per-million mapped reads. This approach ensures comparability across samples in RNA-seq analysis.",
      "🧬 Building a variant prioritization pipeline for undiagnosed rare disease? Here's how we combined RNA-seq, expression outliers, and splice AI predictions to find functional hits. 🧵👇",
      "Thrilled to share our latest work on applying AI to rare disease genomics! We designed a pipeline combining variant calling, transcriptome integration, and pathogenicity scoring to improve clinical prioritization. #Bioinformatics #AI #Genomics",
      "Think of our genome as a recipe book. Some rare diseases are caused by typos in these recipes. We're using AI to help doctors quickly find the most harmful typos — even the hidden ones — by analyzing both the text (DNA) and how it's read (RNA).",
      "By integrating long-read sequencing and AI-based structural variant detection, our project aims to fill the diagnostic gap in undiagnosed neurodevelopmental disorders. We seek collaborators in clinical genomics and data sharing.",
      "The vcf_annotation.py script uses Ensembl VEP via REST API to annotate SNVs and indels with consequence terms, allele frequency, and predicted pathogenicity. Designed to be modular, extensible, and compatible with GRCh38 and GRCh37 builds."
    ],
    rulesConstraints: [
      "Must follow Nextflow DSL2 syntax.",
      "Output should not exceed 200 words.",
      "Avoid terms like 'novel' or 'innovative' in scientific summaries.",
      "Include the term 'machine learning-based annotation.'",
      "Use Biopython only — no external libraries.",
      "All gene names should be formatted in uppercase (HGNC standard).",
      "Disease and phenotype terms must use MeSH descriptors.",
      "Taxonomic names must follow NCBI Taxonomy IDs or scientific nomenclature.",
      "For prompt training, structure must be few-shot compatible (input/output pair).",
      "Do not include emojis, hype language, or overused adjectives."
    ],
    notesLimitations: [
      "I'm not confident in English, so I want a clear and precise version of my idea.",
      "I have partial notes, but the structure is unclear.",
      "I often write in fragmented notes — please structure it clearly.",
      "I'm unsure whether to use a technical or public-friendly tone — ask me.",
      "I know the method, but can't articulate its importance."
    ],
    priorityFallback: [
      "Prioritize clarity over style.",
      "If a section is unclear, ask me a clarifying question.",
      "If tone is not specified, use neutral and professional.",
      "If unclear, default to academic tone.",
      "Prioritize scientific accuracy over simplicity.",
      "If input lacks gene IDs, ask whether to use Ensembl or RefSeq."
    ],
    refinement: [
      "First write a summary, then suggest a better title.",
      "Generate the initial prompt, then revise after feedback.",
      "Break it into outline first, then expand each point.",
      "Generate initial paragraph, then help me shorten for abstract submission.",
      "First write plain summary, then convert into grant-style tone.",
      "Output code first, then add documentation for each function."
    ],
    documentInfo: [
      "A draft research article on single-cell RNA-seq analysis of melanoma.",
      "A rough outline of my PhD thesis methodology section (needs clarity and flow).",
      "A clinical report written in formal tone; I want to simplify it for public communication.",
      "A raw dataset description with some notes and figures; help me summarize it clearly.",
      "A partially written manuscript on repeat expansion analysis in neurological diseases.",
      "A JSON metadata schema for cancer datasets from TCGA.",
      "Raw LaTeX dump of my thesis methodology section with messy structure.",
      "Collection of debug logs from my WDL pipeline failing on HPC.",
      "Error messages from GATK BaseRecalibrator and STAR alignment steps.",
      "A Python script for parsing GFF3 files — returns malformed attributes; I need help fixing it.",
      "An R script that fails during differential expression with edgeR — suggest debugging steps."
    ]
  };



  // Audience dropdown options
  const audienceOptions = [
    "General Public",
    "Researchers/Academicians",
    "Students",
    "Individual",
    "Developers/Engineers",
    "Employers/HR/Recruiters",
    "Domain Experts in Biology",
    "Clinical Genomics Teams",
    "Research Collaborators",
    "Grant Review Panels"
  ];

  // Tone options
  const toneOptions = [
    "Professional and Formal",
    "Simple and Clear (avoid jargon)",
    "Academic and Detailed",
    "Friendly and Conversational",
    "Balanced and Neutral"
  ];

  // Format options
  const formatOptions = [
    "Structured Paragraph",
    "Research Paper",
    "Standard Operating Procedure (SOP)",
    "Grant Writing/Research Proposal",
    "Cover Letter",
    "CV writing",
    "Email",
    "LaTeX-Ready",
    "Bullet Points",
    "Python Snippet",
    "Bash Command Block",
    "Nextflow DSL2 Module",
    "Few-shot Prompt Format (Input/Output)",
    "Chain-of-Thought (CoT) Prompt",
    "With Figures",
    "With Flow Chart",
    "With Tables"
  ];

  // Length options
  const lengthOptions = [
    "Abstract",
    "Methods",
    "Results",
    "Discussion",
    "Conclusion",
    "Summary",
    "Key Highlights",
    "Executive Snapshot",
    "Concise & Clear",
    "Brief & Clear",
    "Minimal Answer Only",
    "Elaborate & Thorough",
    "Code Only",
    "Code with Comments",
    "Step-by-Step Format"
  ];

  // Writing guidance options
  const writingGuidanceOptions = [
    "Academic & Scientific",
    "Conversational & Friendly",
    "Technical & Precise",
    "Concise & Direct",
    "Storytelling & Narrative"
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>PromptCraft-AI</h1>
        <p>Prompt Synthesis Engine</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button 
          className={activeTab === 'model' ? 'active-tab' : 'tab'}
          onClick={() => setActiveTab('model')}
        >
          Model
        </button>
        <button 
          className={activeTab === 'draft' ? 'active-tab' : 'tab'}
          onClick={() => setActiveTab('draft')}
        >
          Draft
        </button>
        <button 
          className={activeTab === 'result' ? 'active-tab' : 'tab'}
          onClick={() => setActiveTab('result')}
        >
          Result
        </button>
      </div>

      {/* Model Tab Content - Keeping original */}
      {activeTab === 'model' && (
        <div className="tab-content">
          <h2>Background</h2>
            <p>
              PromptCraft-AI is a next-generation, modular prompt synthesis engine that converts raw unstructured or ambiguous draft  instructions into precise, context-aware prompts optimized, goal-aligned prompts for Large Language Models (LLMs) like ChatGPT, Claude, Gemini, Gork, and Copilot. Inspired by program synthesis, prompt abstraction, and few-shot learning, it bridges human intent and LLM interpretability through rule-based engineering, transformer-driven classification, and intent-aware conditioning.
            </p>

          <div className="section">
            <h3>Model Philosophy</h3>
            <p>
              LLMs are highly capable yet prompt-sensitive. PromptCraft-AI functions as a Prompt Intermediate Representation (Prompt-IR) generator, converting draft instructions as inputs into goal-aligned, high-precision directives using layered abstraction, rule-aligned reasoning, and modular composition. It adapts across standalone, integrated, or CoT workflows for robust prompt refinement.
            </p>
          </div>
          
          <div className="section">
            <h3>Model Architecture Overview</h3>
            <p>PromptCraft-AI follows a multi-stage synthesis pipeline:</p>
            
            <div className="architecture-components">
              <div className="component">
                <h4>1. Instruction Decomposition Layer (IDL)</h4>
                <p>Parses and interprets user-provided draft instructions.</p>
              </div>
              
              <div className="component">
                <h4>2. Prompt Strategy Selector (PSS)</h4>
                <p>Matches tasks to best-fit prompting strategies.</p>
              </div>
              
              <div className="component">
                <h4>3. Context Infusion Module (CIM)</h4>
                <p>Expands prompts with relevant examples and context.</p>
              </div>
              
              <div className="component">
                <h4>4. Prompt Optimization Engine (POE)</h4>
                <p>Applies prompt engineering best practices.</p>
              </div>
              
              <div className="component">
                <h4>5. Prompt Quality Evaluator (PQE)</h4>
                <p>Evaluates against 8 core dimensions for quality.</p>
              </div>
              
              <div className="component">
                <h4>6. Meta-Prompt Renderer (MPR)</h4>
                <p>Generates final LLM-ready natural language prompts.</p>
              </div>
              
              <div className="component">
                <h4>7. Fallback & Clarification Module (FCM)</h4>
                <p>Handles ambiguous or underspecified input.</p>
              </div>
            </div>
          </div>
          
          <div className="features">
            <div className="feature-box">
              <h3>Key Capabilities</h3>
              <ul>
                <li>Cross-LLM Compatibility</li>
                <li>LLM-Aware Design</li>
                <li>Auto-formatting</li>
                <li>Few-shot Frame Insertion</li>
                <li>Meta-Agent Integration</li>
                <li>Self-Correcting Loop</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <h3>Iteration Loop</h3>
              <p>Each generated prompt is labeled:</p>
              <ul>
                <li>✅ Final – meets all criteria</li>
                <li>📝 Refine – minor improvements suggested</li>
                <li>❓ Clarify – missing input, needs user confirmation</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Draft Tab Content - Using structure from second implementation */}
      {activeTab === 'draft' && (
        <div className="tab-content">
          <h2>Draft Instructions Form</h2>
          <div className="form">
            {/* 1. Objective */}
            <div className="form-field">
              <div className="form-field-header">
                <label>1. Objective </label>
                <div className="example-buttons">
                  <button 
                    className="example-toggle-button"
                    onClick={() => toggleExample('objective')}
                  >
                    {expandedExamples['objective'] ? 'Hide Examples' : 'View Examples'}
                  </button>
                </div>
              </div>
              
              {expandedExamples['objective'] && (
                <div className="example-box">
                  <ol>
                    {examples.objective.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ol>
                </div>
              )}
              
              <textarea 
                name="objective"
                placeholder="What do you want the AI to do? Describe the main task"
                rows="3"
                value={formData.objective}
                onChange={handleInputChange}
              />
            </div>
            
            {/* 2. Topic */}
            <div className="form-field">
              <div className="form-field-header">
                <label>2. Topic </label>
                <button 
                  className="example-toggle-button"
                  onClick={() => toggleExample('topic')}
                >
                  {expandedExamples['topic'] ? 'Hide Examples' : 'View Examples'}
                </button>
              </div>
              {expandedExamples['topic'] && (
                <div className="example-box">
                  <ol>
                    {examples.topic.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ol>
                </div>
              )}
              <input 
                type="text"
                name="topic"
                placeholder="What is the Content About? Describe the subject area or topic the prompt focuses on. Be direct and specific."
                value={formData.topic}
                onChange={handleInputChange}
              />
            </div>
            
            {/* 3. Audience */}
            <div className="form-field">
              <div className="form-field-header">
                <label>3. Audience</label>
                <button 
                  className="example-toggle-button"
                  onClick={() => toggleExample('audience')}
                >
                  {expandedExamples['audience'] ? 'Hide Example' : 'View Example'}
                </button>
              </div>
              <div className="field-subtext">
                <em><strong>Who Will Read the Output?</strong> Define who the AI is writing for — this affects tone, vocabulary, and complexity.</em>
              </div>
              {expandedExamples['audience'] && (
                <div className="example-box">
                  <p><strong>Example:</strong> {examples.audience}</p>
                </div>
              )}
              
              <div className="guidance-category">
                <div className="guidance-items">
                  {audienceOptions.map(option => (
                    <div className="guidance-item" key={option}>
                      <div className="checkbox-container">
                        <input 
                          type="checkbox" 
                          id={`audience-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name={`audience-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          onChange={(e) => {
                            const newValue = e.target.checked ?
                              (formData.audience ? formData.audience + ", " + option : option) :
                              formData.audience.replace(", " + option, "").replace(option, "");
                            setFormData({...formData, audience: newValue});
                          }}
                        />
                      </div>
                      <div className="guidance-text">
                        {option}
                      </div>
                    </div>
                  ))}
                  
                  <div className="guidance-other">
                    <div className="other-label">Other:</div>
                    <div className="other-input-container">
                      <input 
                        type="text"
                        placeholder="Specify custom audience"
                        onBlur={(e) => {
                          if (e.target.value.trim()) {
                            const newValue = formData.audience ? 
                              formData.audience + ", " + e.target.value.trim() : e.target.value.trim();
                            setFormData({...formData, audience: newValue});
                            e.target.value = ''; // Clear the input after adding
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value.trim()) {
                            const newValue = formData.audience ? 
                              formData.audience + ", " + e.target.value.trim() : e.target.value.trim();
                            setFormData({...formData, audience: newValue});
                            e.target.value = ''; // Clear the input after adding
                            e.preventDefault(); // Prevent form submission
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Tone and Style */}
            <div className="form-field">
              <div className="form-field-header">
                <label>4. Tone and Style</label>
                <button 
                  className="example-toggle-button"
                  onClick={() => toggleExample('toneStyle')}
                >
                  {expandedExamples['toneStyle'] ? 'Hide Example' : 'View Example'}
                </button>
              </div>
              <div className="field-subtext">
                <em>Choose how the content should feel. Match it to your intent and audience.</em>
              </div>
              {expandedExamples['toneStyle'] && (
                <div className="example-box">
                  <p><strong>Example:</strong> {examples.toneStyle}</p>
                </div>
              )}
              
              <div className="guidance-category">
                <div className="guidance-items">
                  {toneOptions.map(option => (
                    <div className="guidance-item" key={option}>
                      <div className="checkbox-container">
                        <input 
                          type="checkbox" 
                          id={`tone-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name={`tone-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          onChange={(e) => {
                            const newValue = e.target.checked ?
                              (formData.toneStyle ? formData.toneStyle + ", " + option : option) :
                              formData.toneStyle.replace(", " + option, "").replace(option, "");
                            setFormData({...formData, toneStyle: newValue});
                          }}
                        />
                      </div>
                      <div className="guidance-text">
                        {option}
                      </div>
                    </div>
                  ))}
                  
                  <div className="guidance-other">
                    <div className="other-label">Other:</div>
                    <div className="other-input-container">
                      <input 
                        type="text"
                        placeholder="Specify custom tone"
                        onBlur={(e) => {
                          if (e.target.value.trim()) {
                            const newValue = formData.toneStyle ? 
                              formData.toneStyle + ", " + e.target.value.trim() : e.target.value.trim();
                            setFormData({...formData, toneStyle: newValue});
                            e.target.value = ''; // Clear the input after adding
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value.trim()) {
                            const newValue = formData.toneStyle ? 
                              formData.toneStyle + ", " + e.target.value.trim() : e.target.value.trim();
                            setFormData({...formData, toneStyle: newValue});
                            e.target.value = ''; // Clear the input after adding
                            e.preventDefault(); // Prevent form submission
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Format and Length */}
            <div className="form-row">
              {/* 5a. Format */}
              <div className="form-field format-length-field">
                <div className="form-field-header">
                  <label>5a. Format</label>
                </div>
                <div className="guidance-category">
                  <div className="guidance-items">
                    {formatOptions.map(option => (
                      <div className="guidance-item" key={option}>
                        <div className="checkbox-container">
                          <input 
                            type="checkbox" 
                            id={`format-${option.replace(/\s+/g, '-').toLowerCase()}`}
                            name={`format-${option.replace(/\s+/g, '-').toLowerCase()}`}
                            onChange={(e) => {
                              const newValue = e.target.checked ?
                                (formData.format ? formData.format + ", " + option : option) :
                                formData.format.replace(", " + option, "").replace(option, "");
                              setFormData({...formData, format: newValue});
                            }}
                          />
                        </div>
                        <div className="guidance-text">
                          {option}
                        </div>
                      </div>
                    ))}
                    
                    <div className="guidance-other">
                      <div className="other-label">Other:</div>
                      <div className="other-input-container">
                        <input 
                          type="text"
                          placeholder="Specify custom format"
                          onBlur={(e) => {
                            if (e.target.value.trim()) {
                              const newValue = formData.format ? 
                                formData.format + ", " + e.target.value.trim() : e.target.value.trim();
                              setFormData({...formData, format: newValue});
                              e.target.value = ''; // Clear the input after adding
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim()) {
                              const newValue = formData.format ? 
                                formData.format + ", " + e.target.value.trim() : e.target.value.trim();
                              setFormData({...formData, format: newValue});
                              e.target.value = ''; // Clear the input after adding
                              e.preventDefault(); // Prevent form submission
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 5b. Length Preference */}
              <div className="form-field format-length-field">
                <div className="form-field-header">
                  <label>5b. Length Preference</label>
                </div>
                <div className="guidance-category">
                  <div className="guidance-items">
                    {lengthOptions.map(option => (
                      <div className="guidance-item" key={option}>
                        <div className="checkbox-container">
                          <input 
                            type="checkbox" 
                            id={`length-${option.replace(/\s+/g, '-').toLowerCase()}`}
                            name={`length-${option.replace(/\s+/g, '-').toLowerCase()}`}
                            onChange={(e) => {
                              const newValue = e.target.checked ?
                                (formData.length ? formData.length + ", " + option : option) :
                                formData.length.replace(", " + option, "").replace(option, "");
                              setFormData({...formData, length: newValue});
                            }}
                          />
                        </div>
                        <div className="guidance-text">
                          {option}
                        </div>
                      </div>
                    ))}
                    
                    <div className="guidance-other">
                      <div className="other-label">Other:</div>
                      <div className="other-input-container">
                        <input 
                          type="text"
                          placeholder="Specify custom length"
                          onBlur={(e) => {
                            if (e.target.value.trim()) {
                              const newValue = formData.length ? 
                                formData.length + ", " + e.target.value.trim() : e.target.value.trim();
                              setFormData({...formData, length: newValue});
                              e.target.value = ''; // Clear the input after adding
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim()) {
                              const newValue = formData.length ? 
                                formData.length + ", " + e.target.value.trim() : e.target.value.trim();
                              setFormData({...formData, length: newValue});
                              e.target.value = ''; // Clear the input after adding
                              e.preventDefault(); // Prevent form submission
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                {/* 6. Style Example */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>6. Style Example</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('styleExample')}
                    >
                      {expandedExamples['styleExample'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['styleExample'] && (
                    <div className="example-box">
                      <ol>
                        {examples.styleExample.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="styleExample"
                    placeholder="Paste or describe a sample that reflects what you want. This can be an existing post, code snippet, paragraph, or format you liked."
                    rows="3"
                    value={formData.styleExample}
                    onChange={handleInputChange}
                  />
                </div>
            
                {/* 7. Rules or Constraints */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>7. Rules or Constraints</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('rulesConstraints')}
                    >
                      {expandedExamples['rulesConstraints'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['rulesConstraints'] && (
                    <div className="example-box">
                      <ol>
                        {examples.rulesConstraints.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="rulesConstraints"
                    placeholder="Mention key elements the AI must include or rules to follow"
                    rows="3"
                    value={formData.rulesConstraints}
                    onChange={handleInputChange}
                  />
                </div>
            
                {/* 8. Notes & Limitations */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>8. Notes & Limitations</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('notesLimitations')}
                    >
                      {expandedExamples['notesLimitations'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['notesLimitations'] && (
                    <div className="example-box">
                      <ol>
                        {examples.notesLimitations.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="notesLimitations"
                    placeholder="Add any notes, rough ideas, or unclear sections. You can describe concepts even if messy — the AI will interpret them logically."
                    rows="3"
                    value={formData.notesLimitations}
                    onChange={handleInputChange}
                  />
                </div>
            
                {/* 9. Priority and Fallback */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>9. Priority and Fallback</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('priorityFallback')}
                    >
                      {expandedExamples['priorityFallback'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['priorityFallback'] && (
                    <div className="example-box">
                      <ol>
                        {examples.priorityFallback.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="priorityFallback"
                    placeholder="Tell the AI what to prioritize or how to handle missing or unclear parts"
                    rows="3"
                    value={formData.priorityFallback}
                    onChange={handleInputChange}
                  />
                </div>
            
                {/* 10. Refinement */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>10. Refinement</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('refinement')}
                    >
                      {expandedExamples['refinement'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['refinement'] && (
                    <div className="example-box">
                      <ol>
                        {examples.refinement.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="refinement"
                    placeholder="Break a complex task into steps or specify if you want follow-up improvements"
                    rows="3"
                    value={formData.refinement}
                    onChange={handleInputChange}
                  />
                </div>
            
                {/* 11. Writing Guidance */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>11. Writing Guidance</label>
                  </div>
                  <div className="field-subtext">
                    <em>Writing guidance helps shape the tone, flow, and style of the AI's response</em>
                  </div>
                  
                  {/* Writing Guidance Categories */}
                  <div className="writing-guidance-container">
                    {/* Transitions & Flow */}
                    <div className="guidance-category">
                      <h4>Transitions & Flow</h4>
                      <div className="guidance-items">
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="flow-transitions" name="flow-transitions"
                              onChange={(e) => {
                                const newValue = e.target.checked ? 
                                  (formData.writingGuidance ? formData.writingGuidance + ", Use smooth transitions" : "Use smooth transitions") : 
                                  formData.writingGuidance.replace(", Use smooth transitions", "").replace("Use smooth transitions", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Use smooth, human-like transitions between sentences and paragraphs.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="flow-logical" name="flow-logical"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Maintain logical flow" : "Maintain logical flow") :
                                  formData.writingGuidance.replace(", Maintain logical flow", "").replace("Maintain logical flow", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Maintain logical flow—each paragraph should build naturally on the previous one.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="flow-avoid-robotic" name="flow-avoid-robotic"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Avoid robotic phrasing" : "Avoid robotic phrasing") :
                                  formData.writingGuidance.replace(", Avoid robotic phrasing", "").replace("Avoid robotic phrasing", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Avoid robotic, disconnected, or template-based phrasing.
                          </div>
                        </div>
                        
                        <div className="guidance-other">
                          <div className="other-label">Other:</div>
                          <div className="other-input-container">
                            <input 
                              type="text"
                              placeholder="Specify the transitions"
                              onChange={(e) => {
                                if (e.target.value) {
                                  const newValue = formData.writingGuidance ? 
                                    formData.writingGuidance + ", " + e.target.value : e.target.value;
                                  setFormData({...formData, writingGuidance: newValue});
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Balance & Quality */}
                    <div className="guidance-category">
                      <h4>Content Balance & Quality</h4>
                      <div className="guidance-items">
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="quality-clarity" name="quality-clarity"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Prioritize clarity" : "Prioritize clarity") :
                                  formData.writingGuidance.replace(", Prioritize clarity", "").replace("Prioritize clarity", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Prioritize clarity, depth, and accuracy over length or verbosity.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="quality-meaningful" name="quality-meaningful"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Focus on meaningful info" : "Focus on meaningful info") :
                                  formData.writingGuidance.replace(", Focus on meaningful info", "").replace("Focus on meaningful info", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Focus on meaningful, high-value information only.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="quality-purpose" name="quality-purpose"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Every sentence must serve a purpose" : "Every sentence must serve a purpose") :
                                  formData.writingGuidance.replace(", Every sentence must serve a purpose", "").replace("Every sentence must serve a purpose", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Every sentence must serve a purpose—no fluff.
                          </div>
                        </div>
                        
                        <div className="guidance-other">
                          <div className="other-label">Other:</div>
                          <div className="other-input-container">
                            <input 
                              type="text"
                              placeholder="Specify the quality"
                              onChange={(e) => {
                                if (e.target.value) {
                                  const newValue = formData.writingGuidance ? 
                                    formData.writingGuidance + ", " + e.target.value : e.target.value;
                                  setFormData({...formData, writingGuidance: newValue});
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tone & Language */}
                    <div className="guidance-category">
                      <h4>Tone & Language</h4>
                      <div className="guidance-items">
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="tone-professional" name="tone-professional"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Professional tone" : "Professional tone") :
                                  formData.writingGuidance.replace(", Professional tone", "").replace("Professional tone", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Maintain a professional, formal, and respectful tone.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="tone-confidence" name="tone-confidence"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Native speaker confidence" : "Native speaker confidence") :
                                  formData.writingGuidance.replace(", Native speaker confidence", "").replace("Native speaker confidence", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Write with the confidence of a native English speaker, without exaggeration.
                          </div>
                        </div>
                        
                        <div className="guidance-item">
                          <div className="checkbox-container">
                            <input type="checkbox" id="tone-avoid-praise" name="tone-avoid-praise"
                              onChange={(e) => {
                                const newValue = e.target.checked ?
                                  (formData.writingGuidance ? formData.writingGuidance + ", Avoid self-praise" : "Avoid self-praise") :
                                  formData.writingGuidance.replace(", Avoid self-praise", "").replace("Avoid self-praise", "");
                                setFormData({...formData, writingGuidance: newValue});
                              }}
                            />
                          </div>
                          <div className="guidance-text">
                            Avoid self-praise, inflated adjectives, or hype-driven expressions.
                          </div>
                        </div>
                        
                        <div className="guidance-other">
                          <div className="other-label">Other:</div>
                          <div className="other-input-container">
                            <input 
                              type="text"
                              placeholder="Specify the tone"
                              onChange={(e) => {
                                if (e.target.value) {
                                  const newValue = formData.writingGuidance ? 
                                    formData.writingGuidance + ", " + e.target.value : e.target.value;
                                  setFormData({...formData, writingGuidance: newValue});
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                      {/* Structure & Readability */}
                      <div className="guidance-category">
                        <h4>Structure & Readability</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="structure-paragraphs" name="structure-paragraphs"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Short clear paragraphs" : "Short clear paragraphs") :
                                    formData.writingGuidance.replace(", Short clear paragraphs", "").replace("Short clear paragraphs", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Break content into short, clear paragraphs.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="structure-bullets" name="structure-bullets"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Use bullets for multiple ideas" : "Use bullets for multiple ideas") :
                                    formData.writingGuidance.replace(", Use bullets for multiple ideas", "").replace("Use bullets for multiple ideas", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Use bullet points or headings for multiple ideas.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="structure-active" name="structure-active"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Use active voice" : "Use active voice") :
                                    formData.writingGuidance.replace(", Use active voice", "").replace("Use active voice", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Favor active voice; minimize use of passive constructions.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="structure-one-idea" name="structure-one-idea"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", One main idea per paragraph" : "One main idea per paragraph") :
                                    formData.writingGuidance.replace(", One main idea per paragraph", "").replace("One main idea per paragraph", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Keep one main idea per paragraph.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify the structure"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", " + e.target.value : e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Precision & Relevance */}
                      <div className="guidance-category">
                        <h4>Content Precision & Relevance</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="precision-actionable" name="precision-actionable"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Focus on actionable insights" : "Focus on actionable insights") :
                                    formData.writingGuidance.replace(", Focus on actionable insights", "").replace("Focus on actionable insights", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Focus on actionable insights and informative value.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="precision-support" name="precision-support"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Support claims with data" : "Support claims with data") :
                                    formData.writingGuidance.replace(", Support claims with data", "").replace("Support claims with data", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Support claims with brief data points, clear examples, or real context.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="precision-questions" name="precision-questions"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Ask purposeful questions" : "Ask purposeful questions") :
                                    formData.writingGuidance.replace(", Ask purposeful questions", "").replace("Ask purposeful questions", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Ask thoughtful, open-ended questions only when they serve a purpose.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify the relevance"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", " + e.target.value : e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Avoid the Following */}
                      <div className="guidance-category">
                        <h4>Avoid the Following</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="avoid-cliches" name="avoid-cliches"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid clichés and vague metaphors" : "Avoid clichés and vague metaphors") :
                                    formData.writingGuidance.replace(", Avoid clichés and vague metaphors", "").replace("Avoid clichés and vague metaphors", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Clichés, vague metaphors, or generalizations.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="avoid-redundant" name="avoid-redundant"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid redundant words" : "Avoid redundant words") :
                                    formData.writingGuidance.replace(", Avoid redundant words", "").replace("Avoid redundant words", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Redundant or overused words (e.g., "very," "really," "incredible").
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="avoid-summaries" name="avoid-summaries"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid summary openers" : "Avoid summary openers") :
                                    formData.writingGuidance.replace(", Avoid summary openers", "").replace("Avoid summary openers", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Summary openers like "In conclusion", "To summarize".
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="avoid-decorative" name="avoid-decorative"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid decorative symbols" : "Avoid decorative symbols") :
                                    formData.writingGuidance.replace(", Avoid decorative symbols", "").replace("Avoid decorative symbols", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Emojis, hashtags, semicolons, or decorative symbols.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="avoid-promotion" name="avoid-promotion"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid self-promotion" : "Avoid self-promotion") :
                                    formData.writingGuidance.replace(", Avoid self-promotion", "").replace("Avoid self-promotion", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Self-promotion or excessive confidence—opt for humility and clarity.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify what to avoid"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", " + e.target.value : e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prohibited Words & Phrases */}
                      <div className="guidance-category">
                        <h4>Prohibited Words & Phrases</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-transitions" name="prohibited-transitions"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid common transitional phrases" : "Avoid common transitional phrases") :
                                    formData.writingGuidance.replace(", Avoid common transitional phrases", "").replace("Avoid common transitional phrases", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>I. Transitional Phrases (avoid these):</strong> Accordingly, Additionally, Arguably, Certainly, Consequently, Hence, However, Indeed, Moreover, Nevertheless, Nonetheless, Notwithstanding, Thus, Undoubtedly
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-buzzwords" name="prohibited-buzzwords"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid buzzwords and adjectives" : "Avoid buzzwords and adjectives") :
                                    formData.writingGuidance.replace(", Avoid buzzwords and adjectives", "").replace("Avoid buzzwords and adjectives", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>II. Buzzwords / Adjectives:</strong> Adept, Commendable, Dynamic, Efficient, Ever-evolving, Exemplary, Innovative, Invaluable, Robust, Seamless, Synergistic, Transformative, Thought-provoking, Vital
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-nouns" name="prohibited-nouns"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid generic nouns" : "Avoid generic nouns") :
                                    formData.writingGuidance.replace(", Avoid generic nouns", "").replace("Avoid generic nouns", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>III. Generic Nouns:</strong> Efficiency, Innovation, Institution, Integration, Implementation, Landscape, Optimization, Realm, Tapestry, Transformation
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-verbs" name="prohibited-verbs"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid overused verbs" : "Avoid overused verbs") :
                                    formData.writingGuidance.replace(", Avoid overused verbs", "").replace("Avoid overused verbs", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>IV. Overused Verbs:</strong> Delve, Leverage, Expound, Utilize, Facilitate, Iterate, Streamline, Augment, Optimize, Hone
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-adjectives" name="prohibited-adjectives"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid redundant adjectives" : "Avoid redundant adjectives") :
                                    formData.writingGuidance.replace(", Avoid redundant adjectives", "").replace("Avoid redundant adjectives", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>V. Redundant Adjectives:</strong> Eager, Robust, Comprehensive, Holistic, Intriguing, Compelling, Insightful, Pragmatic, Scalable
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="prohibited-connectors" name="prohibited-connectors"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid clichéd connectors" : "Avoid clichéd connectors") :
                                    formData.writingGuidance.replace(", Avoid clichéd connectors", "").replace("Avoid clichéd connectors", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>VI. Clichéd Connectors:</strong> In light of this, It's worth noting, With this in mind, To that end, Broadly speaking, At its core, Undoubtedly, For instance, As such, Moving forward
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify the phrases to avoid"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", Avoid: " + e.target.value : "Avoid: " + e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Grammar & Sentence Craft */}
                      <div className="guidance-category">
                        <h4>Grammar & Sentence Craft</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="grammar-punctuation" name="grammar-punctuation"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Correct punctuation and grammar" : "Correct punctuation and grammar") :
                                    formData.writingGuidance.replace(", Correct punctuation and grammar", "").replace("Correct punctuation and grammar", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Use correct punctuation and grammar at all times.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="grammar-sentences" name="grammar-sentences"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Avoid long sentences" : "Avoid long sentences") :
                                    formData.writingGuidance.replace(", Avoid long sentences", "").replace("Avoid long sentences", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Avoid long, nested, or convoluted sentence structures.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="grammar-repetition" name="grammar-repetition"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Eliminate repetition" : "Eliminate repetition") :
                                    formData.writingGuidance.replace(", Eliminate repetition", "").replace("Eliminate repetition", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Eliminate repetition or overlapping phrases.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify grammar preferences"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", " + e.target.value : e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Language Quality Best Practices */}
                      <div className="guidance-category">
                        <h4>Language Quality Best Practices</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="quality-proofread" name="quality-proofread"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Proofread for clarity" : "Proofread for clarity") :
                                    formData.writingGuidance.replace(", Proofread for clarity", "").replace("Proofread for clarity", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Proofread for clarity, sentence variety, and consistency.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="quality-logical" name="quality-logical"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Logical sentence progression" : "Logical sentence progression") :
                                    formData.writingGuidance.replace(", Logical sentence progression", "").replace("Logical sentence progression", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Ensure each sentence builds logically from the last.
                            </div>
                          </div>
                          
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="quality-tone-alignment" name="quality-tone-alignment"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Academic tone alignment" : "Academic tone alignment") :
                                    formData.writingGuidance.replace(", Academic tone alignment", "").replace("Academic tone alignment", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              Keep the tone aligned with academic and professional expectations.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify language quality preferences"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", " + e.target.value : e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Golden Rule */}
                      <div className="guidance-category">
                        <h4>Golden Rule</h4>
                        <div className="guidance-items">
                          <div className="guidance-item">
                            <div className="checkbox-container">
                              <input type="checkbox" id="golden-rule" name="golden-rule"
                                onChange={(e) => {
                                  const newValue = e.target.checked ?
                                    (formData.writingGuidance ? formData.writingGuidance + ", Bridge between minds" : "Bridge between minds") :
                                    formData.writingGuidance.replace(", Bridge between minds", "").replace("Bridge between minds", "");
                                  setFormData({...formData, writingGuidance: newValue});
                                }}
                              />
                            </div>
                            <div className="guidance-text">
                              <strong>Write like you're building a bridge between minds.</strong> Each sentence should <strong>carry intent</strong>, each paragraph should <strong>progress the story</strong>, and the entire piece should <strong>breathe as one coherent whole</strong>.
                            </div>
                          </div>
                          
                          <div className="guidance-other">
                            <div className="other-label">Other:</div>
                            <div className="other-input-container">
                              <input 
                                type="text"
                                placeholder="Specify your golden rule"
                                onChange={(e) => {
                                  if (e.target.value) {
                                    const newValue = formData.writingGuidance ? 
                                      formData.writingGuidance + ", Golden rule: " + e.target.value : "Golden rule: " + e.target.value;
                                    setFormData({...formData, writingGuidance: newValue});
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            
                {/* 12. Document Info */}
                <div className="form-field">
                  <div className="form-field-header">
                    <label>12. Document Info</label>
                    <button 
                      className="example-toggle-button"
                      onClick={() => toggleExample('documentInfo')}
                    >
                      {expandedExamples['documentInfo'] ? 'Hide Examples' : 'View Examples'}
                    </button>
                  </div>
                  {expandedExamples['documentInfo'] && (
                    <div className="example-box">
                      <ol>
                        {examples.documentInfo.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <textarea 
                    name="documentInfo"
                    placeholder="Briefly describe any uploaded files - content, purpose, and focus area"
                    rows="3"
                    value={formData.documentInfo}
                    onChange={handleInputChange}
                  />
                </div>
            
              <div className="button-container">
                <button
                  onClick={handleSubmit}
                  className="primary-button"
                >
                  Generate Final Prompt
                </button>
              </div>
            </div>
          </div>
        )}

      {/* Result Tab Content - Keeping original */}
      {activeTab === 'result' && (
        <div className="tab-content">
          <h2>Generated Final Prompt</h2>
          <div className="result-box">
            {generatedOutput || "Your generated prompt will appear here. Fill out the Draft tab and click Generate Final Prompt."}
          </div>
          <div className="button-container">
            <button
              onClick={() => setActiveTab('draft')}
              className="secondary-button"
            >
              Back to Draft
            </button>
            <button
              onClick={() => {
                if (navigator.clipboard && generatedOutput) {
                  navigator.clipboard.writeText(generatedOutput);
                  alert("Copied to clipboard!");
                }
              }}
              className="primary-button"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptCraftApp;