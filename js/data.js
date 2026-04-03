// ============================================
// AAED Roadmap — Module & Lesson Data
// ============================================

const MODULES = [
  { id:1, title:"Foundations of AI Agency", color:"var(--purple)", bg:"var(--purple-d)",
    lessons:[
      {id:"1-1",icon:"\u25CE",type:"concept",label:"What is an AI agent?",desc:"The perception-reasoning-action loop that defines all autonomous AI systems.",learns:["The 3-part loop: perceive, reason, act","How agents differ from simple tools","Why loops change everything for UX","Mental model: chatbot vs contractor"]},
      {id:"1-2",icon:"\u25CE",type:"concept",label:"The agentic spectrum",desc:"From single-turn chatbots to fully autonomous systems \u2014 the full landscape with real product examples.",learns:["4 levels: chatbot, copilot, multi-step, autonomous","Where major products sit on the spectrum","How autonomy level shapes UX requirements","Choosing the right level for your product"]},
      {id:"1-3",icon:"\u25A3",type:"case",label:"Copilot vs Autopilot",desc:"GitHub Copilot and Devin side-by-side \u2014 what their design decisions reveal about experience tradeoffs.",learns:["How GitHub Copilot keeps humans in control","How Devin operates autonomously","Design implications of each model","When to choose which approach"]},
      {id:"1-4",icon:"\u25CE",type:"concept",label:"Why traditional UX breaks",desc:"The 4 core challenges that make agentic design fundamentally different from regular product design.",learns:["Latency: designing for long wait times","Uncertainty: when the agent might be wrong","Irreversibility: actions that can\u2019t be undone","Trust: building confidence over time"]},
      {id:"1-5",icon:"\u25A3",type:"case",label:"When ChatGPT plugins failed",desc:"Real-world failures in early agentic products and the design decisions that caused them.",learns:["What went wrong and why","The gap between capability and UX","Lessons applied to modern products","Your checklist from these failures"]},
    ]
  },
  { id:2, title:"Mental Models & Trust", color:"var(--teal)", bg:"var(--teal-d)",
    lessons:[
      {id:"2-1",icon:"\u25CE",type:"concept",label:"How users model agents",desc:"Why users anthropomorphize AI \u2014 and how to use that tendency to your advantage as a designer.",learns:["What anthropomorphism is and why it happens","How mental models form from first interactions","Dangers of over-trust and under-trust","Designing for calibrated expectations"]},
      {id:"2-2",icon:"\u25C7",type:"framework",label:"The Trust Calibration Stack",desc:"A 4-layer framework for designing trust into every layer of your agentic product.",learns:["Layer 1: Capability transparency","Layer 2: Behavioral consistency","Layer 3: Explainable decisions","Layer 4: User control & override"]},
      {id:"2-3",icon:"\u25CE",type:"concept",label:"Transparency vs explainability",desc:"Two concepts designers confuse \u2014 and how knowing the difference changes what you build.",learns:["What transparency means in agentic systems","What explainability means","When each is needed","The cost of too much of either"]},
      {id:"2-4",icon:"\u25CE",type:"concept",label:"Cognitive load in long tasks",desc:"Managing user attention when agents run complex, multi-step processes in the background.",learns:["Attention economics in agentic products","Progressive disclosure of agent activity","When to interrupt vs stay quiet","Designing the \u2018away\u2019 state"]},
      {id:"2-5",icon:"\u25A3",type:"case",label:"Perplexity, Notion AI, Cursor",desc:"Three contrasting philosophies on how much of the agent\u2019s reasoning to show users.",learns:["Perplexity\u2019s source-citation model","Notion AI\u2019s inline suggestion approach","Cursor\u2019s terminal-style transparency","What each teaches about trust"]},
    ]
  },
  { id:3, title:"Designing Agent Interactions", color:"var(--blue)", bg:"var(--blue-d)",
    lessons:[
      {id:"3-1",icon:"\u25C7",type:"framework",label:"Intent \u2192 Action \u2192 Result",desc:"The universal 3-phase framework for designing any agentic interaction from start to finish.",learns:["Phase 1: Capturing user intent clearly","Phase 2: Showing agent action in progress","Phase 3: Presenting results with context","Designing transitions between phases"]},
      {id:"3-2",icon:"\u25CE",type:"concept",label:"Prompting as a design surface",desc:"The prompt input is the most important UX element in an agentic product. Here\u2019s how to design it.",learns:["Prompt scaffolding and templates","Disambiguation before action","Guardrails and input validation","Designing for non-technical users"]},
      {id:"3-3",icon:"\u25CE",type:"concept",label:"Confirmation patterns",desc:"When to ask permission, show previews, and create checkpoints before irreversible actions.",learns:["The reversibility matrix","3 patterns: preview, checkpoint, explicit approval","When confirmation hurts more than it helps","Designing minimal-friction safeguards"]},
      {id:"3-4",icon:"\u25CE",type:"concept",label:"Progress, streaming & latency",desc:"Designing for the \u2018thinking\u2019 phase \u2014 the moment most agent products lose users.",learns:["Why latency feels different in agents","Live streaming output design","Progress narration patterns","Skeleton states for agentic content"]},
      {id:"3-5",icon:"\u25CE",type:"concept",label:"Error states & graceful failure",desc:"How to design agent failures that preserve user trust and enable recovery.",learns:["Types of agent failure (capability, tool, safety)","Failure communication language","Recovery pathways: retry, modify, escalate","Designing the undo/redo layer"]},
      {id:"3-6",icon:"\u25C8",type:"project",label:"Project: Task agent flow",desc:"End-to-end interaction design for a file management agent \u2014 your first agentic UX deliverable.",learns:["Define the task scope and agent capabilities","Map the full interaction flow with edge cases","Prototype key screens: input, progress, result, error","Present and critique your design decisions"]},
    ]
  },
  { id:4, title:"Multi-Agent & Orchestration", color:"var(--amber)", bg:"var(--amber-d)",
    lessons:[
      {id:"4-1",icon:"\u25CE",type:"concept",label:"What is multi-agent orchestration?",desc:"Planner agents, worker agents, handoffs and tool chains \u2014 explained in designer-friendly terms.",learns:["What orchestration means in practice","Planner vs worker vs tool agents","How handoffs work between agents","Why the backstage is a design problem"]},
      {id:"4-2",icon:"\u25CE",type:"concept",label:"Visibility into agent networks",desc:"The fundamental tension: users want control, but too much detail overwhelms them.",learns:["The visibility spectrum: black box to full log","When to show sub-agent activity","What users actually need to see","The \u2018confidence summary\u2019 pattern"]},
      {id:"4-3",icon:"\u25C7",type:"framework",label:"The Delegation Spectrum",desc:"A framework for deciding how much of your agent network\u2019s activity to surface in the UI.",learns:["5 levels of delegation visibility","Mapping each level to use cases","Decision criteria for your product","How to test the right level with users"]},
      {id:"4-4",icon:"\u25A3",type:"case",label:"Devin, AutoGPT, Claude Code",desc:"Three very different philosophies on orchestration UI \u2014 and what each gets right and wrong.",learns:["Devin\u2019s task log approach","AutoGPT\u2019s verbose execution trace","Claude Code\u2019s minimal terminal output","Your synthesis: what works and why"]},
      {id:"4-5",icon:"\u25C8",type:"project",label:"Project: Orchestration dashboard",desc:"Design a monitoring UI for a multi-agent research pipeline \u2014 your most complex challenge so far.",learns:["Define what needs to be visible and why","Design the agent activity feed","Create intervention and override controls","Handle the failure state at scale"]},
    ]
  },
  { id:5, title:"Ethics & Safety Patterns", color:"var(--coral)", bg:"var(--coral-d)",
    lessons:[
      {id:"5-1",icon:"\u25CE",type:"concept",label:"Harms unique to agentic systems",desc:"The risks that only exist when an AI can take real actions in the world \u2014 and why designers must own them.",learns:["Irreversibility at scale","Scope creep and agent overreach","Data exposure through tool use","Automation bias in high-stakes tasks"]},
      {id:"5-2",icon:"\u25C7",type:"framework",label:"Safe-by-Design Checklist",desc:"12 questions every agentic UX designer should answer before shipping any autonomous feature.",learns:["The 12-question framework in full","How to apply it to an existing product","Prioritizing which risks to address first","Creating a safety design review process"]},
      {id:"5-3",icon:"\u25CE",type:"concept",label:"Human-in-the-loop moments",desc:"Designing the checkpoints, approvals and undo capabilities that keep humans genuinely in control.",learns:["Meaningful vs performative control","4 patterns: confirm, preview, pause, rewind","How to space checkpoints without friction","Designing for low-trust vs high-trust users"]},
      {id:"5-4",icon:"\u25CE",type:"concept",label:"Consent & data transparency",desc:"What agents access, store and act on \u2014 and how to communicate it clearly to non-technical users.",learns:["The consent surface in agentic products","Permission models that users understand","Designing memory dashboards","Data minimization as a UX principle"]},
      {id:"5-5",icon:"\u25A3",type:"case",label:"Agentic failures in the wild",desc:"Real incidents where agentic products caused harm \u2014 and the design changes that could have prevented them.",learns:["5 documented agentic UX failures","Root cause analysis for each","The design intervention that could have helped","Building your own failure-mode library"]},
    ]
  },
  { id:6, title:"Capstone Project", color:"var(--accent)", bg:"var(--accent-d)",
    lessons:[
      {id:"6-1",icon:"\u25CE",type:"concept",label:"Choose your agent domain",desc:"How to select a focused, portfolio-worthy problem domain for your final project.",learns:["Evaluating domains: research, productivity, creative, CS","Scoping for a 2-week sprint","Defining your target user and their agent tasks","Writing your design brief"]},
      {id:"6-2",icon:"\u25C8",type:"project",label:"User research sprint",desc:"Interview techniques and mental model mapping adapted for AI-powered systems.",learns:["5 interview questions for AI product research","Mental model mapping workshop","Identifying trust patterns in research","Synthesizing into a design brief"]},
      {id:"6-3",icon:"\u25C8",type:"project",label:"Interaction design sprint",desc:"Wireframe the full agentic flow: onboarding, core task, error recovery, settings.",learns:["The agentic flow map template","Key screens every agent product needs","Annotating for agent-specific patterns","Prototype fidelity decisions"]},
      {id:"6-4",icon:"\u25C8",type:"project",label:"Agentic design critique",desc:"Apply all course frameworks to review your design \u2014 and someone else\u2019s.",learns:["The combined framework review checklist","How to give useful agentic UX feedback","Common gaps in first-time agentic designs","Iterating from critique to final"]},
      {id:"6-5",icon:"\u25C8",type:"project",label:"Portfolio case study",desc:"Document your design decisions and publish a case study that demonstrates agentic UX mastery.",learns:["Case study structure for AI products","How to show your thinking, not just screens","Writing about uncertainty and tradeoffs","Publishing and sharing your work"]},
    ]
  }
];

const TOTAL = MODULES.reduce((a,m)=>a+m.lessons.length,0);
const typeLabel = {concept:'Concept',project:'Project',case:'Case study',framework:'Framework'};
const tagClass  = {concept:'tag-concept',project:'tag-project',case:'tag-case',framework:'tag-framework'};
