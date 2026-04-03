registerContent([
  {
    id: "3-1",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">The Universal Rhythm of Agent Interaction</h2>
    <p class="lesson-text">Every interaction between a human and an AI agent follows the same three-beat rhythm: the user expresses what they want, the agent does something about it, and the agent delivers a result. Intent, Action, Result. This is the foundational framework you will use to design every agent experience from this point forward.</p>
    <p class="lesson-text">This might sound obvious, but the insight is in the transitions. Most failed agent experiences break down not within a phase, but between them. The user states intent but the agent misunderstands. The agent acts but the user has no idea what is happening. The result arrives but the user cannot connect it back to what they asked for. Your job as a designer is to make each phase crystal clear and each transition seamless.</p>
    <p class="lesson-text">Think of how Google Maps works. You type a destination (intent). It calculates the route and shows you the path (action). It presents turn-by-turn directions with an ETA (result). At no point are you confused about what phase you are in. That clarity is what we are building for agent systems, where the "action" phase can be far more complex and unpredictable.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Three Phases Visualized</h2>
    <div class="lesson-diagram">
      <div style="display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; padding: 2rem 0;">
        <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; border-radius: 16px; padding: 1.5rem 2rem; text-align: center; min-width: 180px; box-shadow: 0 4px 16px rgba(99,102,241,0.3);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">1</div>
          <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.25rem;">INTENT</div>
          <div style="font-size: 0.85rem; opacity: 0.9;">User expresses goal</div>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.8;">Capture &bull; Clarify &bull; Confirm</div>
        </div>
        <div style="font-size: 2rem; padding: 0 1rem; color: #94a3b8;">&#8594;</div>
        <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #1a1a2e; border-radius: 16px; padding: 1.5rem 2rem; text-align: center; min-width: 180px; box-shadow: 0 4px 16px rgba(245,158,11,0.3);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">2</div>
          <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.25rem;">ACTION</div>
          <div style="font-size: 0.85rem;">Agent works on task</div>
          <div style="font-size: 0.75rem; margin-top: 0.5rem;">Progress &bull; Narrate &bull; Checkpoint</div>
        </div>
        <div style="font-size: 2rem; padding: 0 1rem; color: #94a3b8;">&#8594;</div>
        <div style="background: linear-gradient(135deg, #10b981, #34d399); color: #1a1a2e; border-radius: 16px; padding: 1.5rem 2rem; text-align: center; min-width: 180px; box-shadow: 0 4px 16px rgba(16,185,129,0.3);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">3</div>
          <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.25rem;">RESULT</div>
          <div style="font-size: 0.85rem;">Outcome delivered</div>
          <div style="font-size: 0.75rem; margin-top: 0.5rem;">Present &bull; Explain &bull; Next steps</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Phase 1: Capturing User Intent</h2>
    <p class="lesson-text">The intent phase is where everything begins, and where most agent interactions go wrong. Unlike traditional UIs where buttons and menus constrain input, agent interfaces often use natural language, which means the design challenge shifts from "what can the user click" to "how well does the system understand what the user actually wants."</p>
    <p class="lesson-text">Great intent capture has three layers. First, make the input surface inviting and clear. Slack's message composer, Notion AI's inline prompt, and ChatGPT's input box all use placeholder text, suggested prompts, and contextual hints to guide users toward well-formed requests. Second, build in disambiguation. If a user says "clean up my files," the agent should ask: which files? what does "clean up" mean to you? delete, archive, or reorganize? Third, reflect intent back before proceeding. This is the "so you want me to..." moment. GitHub Copilot does this implicitly by showing a code suggestion inline before you accept it. Cursor's AI editor shows a diff preview. These are intent confirmations disguised as previews.</p>
    <div class="lesson-callout tip">
      <strong>Design principle:</strong> The cost of clarifying intent upfront is always lower than the cost of delivering the wrong result. Build disambiguation into the default flow, not as an error recovery path.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Phase 2: Showing Agent Action</h2>
    <p class="lesson-text">The action phase is where traditional UX instincts can betray you. In conventional products, a loading spinner and a brief wait suffice. But agent tasks can take seconds, minutes, or even hours. They involve multiple steps, tool calls, and decision points. The user needs to understand what is happening, why it is taking time, and whether they should intervene.</p>
    <p class="lesson-text">The best agent UIs narrate progress. Anthropic's Claude shows its thinking process. Devin, the AI coding agent, streams a log of actions: reading files, writing code, running tests. Replit's agent shows a step-by-step plan and checks off items as it completes them. These patterns transform a black-box wait into a transparent collaboration. The user feels informed, not abandoned.</p>
    <p class="lesson-text">Design decisions in this phase include: Should you stream output token by token or wait and show the complete result? Should you show a plan upfront? Should you provide pause and cancel controls? The answers depend on task duration, reversibility, and user expertise, but the underlying principle is constant: narrate the work.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Phase 3: Presenting Results</h2>
    <p class="lesson-text">A result without context is just data. When an agent delivers its output, three things must be immediately clear: what was done, how it connects to the original intent, and what the user can do next. This is the "last mile" of agent UX, and it is where you either build trust or lose it.</p>
    <p class="lesson-text">Consider how Notion AI presents a rewritten paragraph. It shows the new text inline, highlights what changed, and gives you accept/reject/edit controls. Compare this to an agent that simply replaces your text with no trace of what was there before. Same result, vastly different experience. The first builds confidence. The second creates anxiety.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Strong Result Presentation</h3>
        <ul>
          <li>Shows before/after comparison</li>
          <li>Explains what was changed and why</li>
          <li>Provides accept, reject, and edit actions</li>
          <li>Offers undo with one click</li>
          <li>Suggests logical next steps</li>
        </ul>
      </div>
      <div class="lesson-card">
        <h3>Weak Result Presentation</h3>
        <ul>
          <li>Replaces content silently</li>
          <li>No explanation of reasoning</li>
          <li>Only a generic "Done" message</li>
          <li>No undo available</li>
          <li>Dead end with no next actions</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Designing the Transitions</h2>
    <p class="lesson-text">The transitions between phases are where the magic happens, or where the experience falls apart. The Intent-to-Action transition is a commitment moment. The user has stated what they want and the agent is about to act. This is where confirmation patterns live: previews, checkpoints, and explicit approvals. We will explore these in depth in Lesson 3-3.</p>
    <p class="lesson-text">The Action-to-Result transition is a delivery moment. The agent has finished and needs to hand the outcome back to the user. This transition should feel like a handoff, not a surprise. Animate it. Summarize what was done. Give the user a moment to orient before asking for their next input.</p>
    <p class="lesson-text">And never forget the Result-to-next-Intent loop. The best agent experiences do not end at the result. They suggest refinements, surface related tasks, and invite iteration. ChatGPT's follow-up suggestions, Midjourney's variation and upscale buttons, and Figma AI's "try again" options all close the loop and keep the user in flow.</p>
    <div class="lesson-callout">
      <strong>Remember:</strong> Users rarely get what they want on the first try. Design every result screen as the beginning of the next intent phase, not as a dead end.
    </div>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Map an existing product:</strong> Choose an AI-powered product you use regularly (ChatGPT, Copilot, Notion AI, etc.). Identify the Intent, Action, and Result phases in one specific workflow. Where do the transitions feel smooth? Where do they break down?</li>
        <li><strong>Spot the gap:</strong> Think of an agent experience where you felt confused or lost trust. Which phase transition failed? What would you redesign?</li>
        <li><strong>Sketch the flow:</strong> Pick a simple agent task (e.g., "summarize this document") and sketch three screens representing each phase. Focus on what information the user needs at each moment.</li>
      </ol>
    </div>
  </div>

</div>
`
  },
  {
    id: "3-2",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">The Most Important UI Element You Have Never Designed</h2>
    <p class="lesson-text">In traditional product design, the most critical UI elements are navigation, primary actions, and data displays. In agent-based products, there is a new king: the prompt input. It is the surface through which users express intent, define scope, set constraints, and ultimately determine the quality of the agent's output. And yet most teams treat it as a simple text field with a send button.</p>
    <p class="lesson-text">The prompt is not just an input. It is a design surface, a place where you shape user behavior, reduce errors, set expectations, and build confidence. If you design it well, users write better prompts, get better results, and trust the product more. If you neglect it, users flail, blame the AI, and churn.</p>
    <p class="lesson-text">Think about how far form design has come. We do not just throw an empty text field at users and say "enter your address." We use structured inputs, autocomplete, validation, helper text, and progressive disclosure. Prompt design deserves the same rigor.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Prompt Scaffolding and Templates</h2>
    <p class="lesson-text">Scaffolding means giving users structure without constraining their freedom. The goal is to reduce the blank-page problem where a user stares at an empty prompt and does not know where to start.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Starter Prompts</h3>
        <p>Show clickable suggestion chips below the input. ChatGPT does this on its home screen with prompts like "Help me write a cover letter" and "Explain a concept." These lower the barrier to first interaction and teach users the kinds of tasks the agent can handle.</p>
      </div>
      <div class="lesson-card">
        <h3>Template Slots</h3>
        <p>Provide fill-in-the-blank templates: "Write a [type] about [topic] in the style of [reference]." Notion AI's tone and format selectors are template slots in disguise. They let the user express intent without having to invent the structure themselves.</p>
      </div>
      <div class="lesson-card">
        <h3>Contextual Suggestions</h3>
        <p>Suggest prompts based on what the user is currently doing. When a user highlights text in a document, offer "Summarize," "Rewrite," "Translate." Figma AI suggests design-relevant actions based on selected elements. Context-aware suggestions feel like mind reading.</p>
      </div>
      <div class="lesson-card">
        <h3>Progressive Complexity</h3>
        <p>Start with a simple input and let users add complexity. Midjourney's prompt starts as plain text, but power users add parameters like --ar 16:9 and --style raw. Design for the beginner first, then provide expansion paths for experts.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Disambiguation Before Action</h2>
    <p class="lesson-text">Ambiguity is the enemy of good agent output. When a user says "make this better," an untrained instinct is to let the AI interpret and run with it. A designer's instinct should be to clarify before executing. Disambiguation is the art of turning vague intent into specific instructions without making the user feel interrogated.</p>
    <p class="lesson-text">There are several patterns that work well. Inline clarification asks a single focused question before proceeding: "By 'make this better,' do you mean improve the writing style, fix grammar, or restructure the argument?" Option cards present 2-4 interpretations as clickable choices, each with a brief preview of what the agent would do. Assumed intent with escape hatch is when the agent picks the most likely interpretation but clearly states its assumption: "I will improve the writing style. Want me to do something different instead?"</p>
    <div class="lesson-callout tip">
      <strong>The disambiguation sweet spot:</strong> Ask when the cost of guessing wrong is high. Assume when the cost of asking is higher than the cost of being wrong. A grammar check can assume. A file deletion must ask.
    </div>
    <p class="lesson-text">Perplexity does disambiguation beautifully for search queries. When your question could go in multiple directions, it sometimes shows clarifying questions before returning results. This feels helpful rather than burdensome because the clarification makes the eventual result dramatically better.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Guardrails and Input Validation</h2>
    <p class="lesson-text">In form design, we validate emails, enforce character limits, and flag missing fields. In prompt design, guardrails serve a similar but more nuanced purpose: they help users stay within the agent's capabilities and prevent requests that will lead to poor outcomes.</p>
    <p class="lesson-text">Effective guardrails include scope indicators that show what the agent can and cannot do ("I can help with code in Python, JavaScript, and TypeScript"), character or complexity limits that prevent prompts that are too vague or too sprawling, real-time feedback that gently steers the user ("This looks like a coding question. Would you like me to switch to code mode?"), and capability boundaries that are honest about limitations before the user discovers them through failure.</p>
    <div class="lesson-diagram">
      <div style="border: 2px solid #334155; border-radius: 12px; padding: 1.5rem; max-width: 500px; margin: 0 auto; background: #1e293b;">
        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.5rem;">EXAMPLE: PROMPT INPUT WITH GUARDRAILS</div>
        <div style="background: #0f172a; border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem;">
          <div style="color: #e2e8f0; font-size: 0.9rem;">Redesign my entire application from scratch...</div>
        </div>
        <div style="background: #7c2d12; border-radius: 8px; padding: 0.75rem; margin-bottom: 0.75rem; font-size: 0.85rem; color: #fdba74;">
          &#9888; This task may be too broad. Try breaking it into smaller steps like "Redesign the navigation bar" or "Update the color scheme for the dashboard."
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <div style="background: #1e3a5f; color: #93c5fd; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; cursor: pointer;">Redesign the navigation</div>
          <div style="background: #1e3a5f; color: #93c5fd; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; cursor: pointer;">Update the color scheme</div>
          <div style="background: #1e3a5f; color: #93c5fd; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; cursor: pointer;">Improve mobile layout</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Designing for Non-Technical Users</h2>
    <p class="lesson-text">Many agent products are built by engineers and tested on power users, then launched to a general audience that has never written a prompt in their life. This mismatch is one of the biggest failure modes in agent UX.</p>
    <p class="lesson-text">Non-technical users struggle with open-ended prompts. They do not know the vocabulary, they do not understand the agent's capabilities, and they are often afraid of "doing it wrong." Your design must account for this by eliminating the blank page, using language the user already knows (not AI jargon), offering examples that mirror the user's actual work, building structured alternatives to free-text input, and rewarding experimentation by making it easy to try again.</p>
    <p class="lesson-text">Canva's Magic Write is a great example. Instead of a raw text prompt, it offers specific actions like "Make it longer," "Make it more formal," "Summarize." These are prompts disguised as buttons. The user never has to write a prompt, yet they are still expressing intent. This is prompt design at its best: invisible to the user, powerful underneath.</p>
    <div class="lesson-callout warning">
      <strong>Watch out:</strong> Do not assume your users know what a "prompt" is. Many mainstream users have never used ChatGPT. Design as though the word "prompt" does not exist in your vocabulary. Use "describe what you need," "tell us what to change," or task-specific language instead.
    </div>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Audit a prompt surface:</strong> Open three AI products and screenshot their prompt inputs. What scaffolding do they provide? What guardrails exist? Grade each on a scale of 1-5 for beginner-friendliness.</li>
        <li><strong>Redesign a prompt:</strong> Take a product with a bare text input (like a basic ChatGPT-style interface) and redesign the prompt surface for a specific audience, such as small business owners writing marketing copy. Add scaffolding, suggestions, and guardrails.</li>
        <li><strong>Test the blank page:</strong> Give a non-technical friend or family member access to an AI tool and watch them try to use it without guidance. Note where they hesitate, what language they use, and where they get stuck. Use your observations to inform your prompt design.</li>
      </ol>
    </div>
  </div>

</div>
`
  },
  {
    id: "3-3",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">The Permission Question</h2>
    <p class="lesson-text">One of the hardest judgment calls in agent UX is deciding when to ask for permission. Ask too often and the experience feels like a series of "Are you sure?" dialogs that train users to click "Yes" without reading. Ask too rarely and the agent will eventually do something the user did not want, destroying trust in a single moment.</p>
    <p class="lesson-text">The answer is not "always confirm" or "never confirm." It is a function of risk, reversibility, and user expectations. This lesson gives you a framework for making that call and three concrete patterns for implementing confirmation when you need it.</p>
    <p class="lesson-text">Consider two scenarios. An AI email assistant drafts a reply for you to review before sending. That feels helpful. The same assistant asks "Should I capitalize this word?" while you are writing. That feels exhausting. Same product, same feature category, very different confirmation needs. The difference is the stakes of getting it wrong.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Reversibility Matrix</h2>
    <p class="lesson-text">The reversibility matrix is a 2x2 framework for deciding when confirmation is necessary. On one axis: how impactful is the action? On the other: how reversible is the action? The combination tells you how much friction to add.</p>
    <div class="lesson-diagram">
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: auto 1fr 1fr; grid-template-rows: auto 1fr 1fr; gap: 2px; background: #334155; border-radius: 12px; overflow: hidden;">
          <div style="background: #1e293b; padding: 1rem;"></div>
          <div style="background: #1e293b; padding: 1rem; text-align: center; font-weight: 700; color: #e2e8f0; font-size: 0.9rem;">Easily Reversible</div>
          <div style="background: #1e293b; padding: 1rem; text-align: center; font-weight: 700; color: #e2e8f0; font-size: 0.9rem;">Hard / Impossible to Reverse</div>
          <div style="background: #1e293b; padding: 1rem; text-align: center; font-weight: 700; color: #e2e8f0; font-size: 0.9rem; writing-mode: vertical-lr; transform: rotate(180deg);">Low Impact</div>
          <div style="background: #064e3b; padding: 1.25rem; text-align: center;">
            <div style="font-weight: 700; color: #6ee7b7; margin-bottom: 0.25rem;">Just Do It</div>
            <div style="font-size: 0.8rem; color: #a7f3d0;">No confirmation needed. Auto-correct, text formatting, suggesting completions.</div>
          </div>
          <div style="background: #1e3a5f; padding: 1.25rem; text-align: center;">
            <div style="font-weight: 700; color: #93c5fd; margin-bottom: 0.25rem;">Checkpoint</div>
            <div style="font-size: 0.8rem; color: #bfdbfe;">Quick inline confirmation. Renaming files, moving items between folders.</div>
          </div>
          <div style="background: #1e293b; padding: 1rem; text-align: center; font-weight: 700; color: #e2e8f0; font-size: 0.9rem; writing-mode: vertical-lr; transform: rotate(180deg);">High Impact</div>
          <div style="background: #1e3a5f; padding: 1.25rem; text-align: center;">
            <div style="font-weight: 700; color: #93c5fd; margin-bottom: 0.25rem;">Preview</div>
            <div style="font-size: 0.8rem; color: #bfdbfe;">Show before/after. Bulk edits, code refactoring, content rewrites.</div>
          </div>
          <div style="background: #7f1d1d; padding: 1.25rem; text-align: center;">
            <div style="font-weight: 700; color: #fca5a5; margin-bottom: 0.25rem;">Explicit Approval</div>
            <div style="font-size: 0.8rem; color: #fecaca;">Full review required. Sending emails, deleting data, financial transactions.</div>
          </div>
        </div>
      </div>
    </div>
    <p class="lesson-text">This matrix should be your first stop when deciding confirmation behavior for any agent action. Plot the action on both axes and let the quadrant guide your pattern choice.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Pattern 1: Preview</h2>
    <p class="lesson-text">The preview pattern shows users what the agent will do before it does it. This is ideal for high-impact but reversible actions like content generation, code refactoring, or bulk edits. The user sees the proposed outcome and can accept, reject, or modify it.</p>
    <p class="lesson-text">GitHub Copilot's inline suggestion is a pure preview pattern. The suggested code appears as ghost text. You press Tab to accept or keep typing to reject. There is zero friction for acceptance and zero cost for rejection. Cursor takes this further by showing a full diff view for multi-line edits, giving users a clear before/after comparison.</p>
    <p class="lesson-text">When designing previews, make the difference between current state and proposed state visually obvious. Use diff highlighting, side-by-side comparisons, or inline annotations. Do not just show the new version and expect users to remember what was there before. Memory is expensive. Make comparison cheap.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Pattern 2: Checkpoint</h2>
    <p class="lesson-text">Checkpoints are lightweight confirmation moments inserted at natural breakpoints in a multi-step process. They do not ask for full review. They just ask: "I have finished step 2 of 5. Here is what I did. Should I continue?"</p>
    <p class="lesson-text">This pattern is ideal for long-running agent tasks where the cost of going off-track compounds over time. Devin, the AI coding agent, uses checkpoints when it completes a sub-task in a larger plan. It shows a summary of what it did and asks whether to proceed to the next step. This prevents the nightmare scenario where an agent runs for ten minutes in the wrong direction.</p>
    <p class="lesson-text">Design checkpoints to be skippable. Power users should be able to say "just do it all" and suppress future checkpoints for the current task. But the default, especially for new users, should be to pause at natural boundaries. The key is making each checkpoint informative enough to be useful but fast enough to not feel like a speed bump.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Pattern 3: Explicit Approval</h2>
    <p class="lesson-text">Explicit approval is the heaviest confirmation pattern and should be reserved for actions that are both high-impact and hard to reverse: sending communications, deleting data, making purchases, deploying code to production. This is the "review and confirm" screen, the order summary before checkout, the send confirmation before an email blast.</p>
    <p class="lesson-text">When designing explicit approval flows, present a complete summary of what will happen, highlight anything unusual or risky, require a deliberate action (not just pressing Enter), and make cancellation as easy as confirmation. The approval screen should answer: What will happen? What will it affect? Can I undo it? Is there anything I should double-check?</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">When Confirmation Hurts More Than It Helps</h2>
    <p class="lesson-text">Confirmation fatigue is real. If your agent asks permission for every small action, users will stop reading the confirmations and start auto-approving everything, defeating the entire purpose. Worse, it makes the agent feel stupid and needy.</p>
    <p class="lesson-text">Avoid confirmation when: the action is trivially reversible (undo covers you), the user has already expressed clear intent, the action is within a scope the user has already approved, or the cost of asking exceeds the cost of the mistake. Build trust by getting small things right autonomously, so users believe you when you say a big thing needs their attention.</p>
    <div class="lesson-callout warning">
      <strong>The anti-pattern to avoid:</strong> Do not treat every agent action as if it were a nuclear launch. "Are you sure you want me to add a period at the end of this sentence?" is not a safety feature. It is a sign that you have not thought about your confirmation strategy.
    </div>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Build your own matrix:</strong> Pick a product you are designing (or one you use heavily). List 10 agent actions the product performs. Plot each one on the reversibility matrix. Does the current confirmation behavior match what the matrix recommends?</li>
        <li><strong>Spot confirmation fatigue:</strong> Use an AI product for 15 minutes and count every confirmation prompt. Which ones felt necessary? Which ones felt like interruptions? What would you remove or change?</li>
        <li><strong>Design a checkpoint flow:</strong> Sketch a multi-step agent task (like "reorganize my photo library") and design checkpoint moments at natural breakpoints. What information does each checkpoint show? How does the user continue or redirect?</li>
      </ol>
    </div>
  </div>

</div>
`
  },
  {
    id: "3-4",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Why Waiting for an Agent Feels Different</h2>
    <p class="lesson-text">Users are accustomed to waiting for traditional software. A file uploads: there is a progress bar. A page loads: there is a spinner. These waits are predictable. You know roughly how long they will take, and the system's behavior during the wait is well-understood.</p>
    <p class="lesson-text">Agent latency is fundamentally different. The wait times are unpredictable. The agent might take 2 seconds or 2 minutes, depending on complexity, tool calls, and reasoning depth. The work happening behind the scenes is opaque. And the user does not know if the agent is making progress, stuck in a loop, or about to deliver something brilliant. This ambiguity transforms a 10-second wait from "totally fine" to "is this thing broken?"</p>
    <p class="lesson-text">Research on perceived wait times shows that unexplained waits feel 36% longer than explained ones. For agent interfaces, this means that narrating what the agent is doing is not just a nice-to-have. It is a core UX requirement that directly impacts user satisfaction and retention.</p>
    <div class="lesson-callout">
      <strong>Key insight:</strong> The goal is not to make the agent faster. It is to make the wait feel productive, transparent, and tolerable. Perceived performance matters more than actual performance.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Live Streaming Output</h2>
    <p class="lesson-text">Streaming is the most impactful latency design pattern for agent interfaces. Instead of waiting for the complete response and delivering it all at once, you show output as it is generated, token by token or chunk by chunk.</p>
    <p class="lesson-text">ChatGPT popularized this pattern, and for good reason. Streaming transforms a wait into a conversation. The user begins reading while the agent is still generating. The perceived time-to-first-value drops dramatically because the user gets something useful within the first second, even if the full response takes 20 seconds.</p>
    <p class="lesson-text">But streaming is not always the right choice. It works brilliantly for text generation where partial output is immediately useful. It works poorly for structured outputs like tables, charts, or code that needs to be complete to be meaningful. For these cases, consider progressive reveal: generate the complete output, then animate it into view section by section, giving the user time to process each piece.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Stream When...</h3>
        <ul>
          <li>Output is text the user reads linearly</li>
          <li>Partial output has standalone value</li>
          <li>Response time exceeds 3 seconds</li>
          <li>The user benefits from seeing reasoning unfold</li>
        </ul>
      </div>
      <div class="lesson-card">
        <h3>Batch When...</h3>
        <ul>
          <li>Output is structured (tables, JSON, charts)</li>
          <li>Partial output is confusing or misleading</li>
          <li>Response time is under 2 seconds</li>
          <li>The output needs validation before display</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Progress Narration Patterns</h2>
    <p class="lesson-text">When an agent cannot stream its output, or when the work involves tool calls and multi-step reasoning, progress narration is your primary design tool. Narration means telling the user what the agent is doing in real time, in human-readable language.</p>
    <div class="lesson-diagram">
      <div style="max-width: 480px; margin: 0 auto; background: #1e293b; border-radius: 12px; padding: 1.5rem;">
        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">Agent Progress Narration</div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #10b981; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: white; flex-shrink: 0;">&#10003;</div>
            <div style="font-size: 0.9rem; color: #a7f3d0;">Analyzing your document structure...</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #10b981; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: white; flex-shrink: 0;">&#10003;</div>
            <div style="font-size: 0.9rem; color: #a7f3d0;">Found 12 sections across 3 chapters</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #f59e0b; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: white; animation: pulse 1s infinite;"></div>
            </div>
            <div style="font-size: 0.9rem; color: #fde68a;">Generating summary for Chapter 2...</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #334155; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <div style="width: 6px; height: 6px; border-radius: 50%; background: #64748b;"></div>
            </div>
            <div style="font-size: 0.9rem; color: #64748b;">Compiling final report</div>
          </div>
        </div>
      </div>
    </div>
    <p class="lesson-text">There are several levels of narration detail. Status labels are the simplest: "Thinking...", "Searching...", "Writing..." These are minimal but better than a spinner. Step narration adds specificity: "Reading your document", "Searching 3 databases", "Comparing results." Verbose narration shows the full chain of thought, tool calls, and intermediate results, like how Claude shows its extended thinking or how Devin logs each action. Choose the level based on task duration and user expertise.</p>
    <p class="lesson-text">The best narration patterns share three traits: they use verbs in the present progressive tense ("Analyzing..." not "Analysis"), they reference specific artifacts the user recognizes ("Searching your Q4 report" not just "Searching"), and they give a sense of progress toward completion ("Step 3 of 5" or a filling progress bar).</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Skeleton States for Agentic Content</h2>
    <p class="lesson-text">Skeleton screens are a well-established pattern in web and app design. Gray placeholder shapes show where content will appear, giving the user a mental model of the layout before data arrives. For agent interfaces, we can extend this concept.</p>
    <p class="lesson-text">An agentic skeleton is not just a layout hint. It is a contract. When you show a skeleton with a title area, three bullet points, and a summary section, you are telling the user: "The result will be structured like this." This sets expectations and makes the eventual content feel less surprising when it arrives.</p>
    <p class="lesson-text">Perplexity uses this approach when generating answers. Before the content streams in, you see the structure: sources on the side, answer area in the center, follow-up questions below. You know what is coming. Compare this to a blank screen that suddenly fills with text. The skeleton version feels faster and more controlled, even if the actual render time is identical.</p>
    <div class="lesson-callout tip">
      <strong>Design tip:</strong> For agent tasks that produce predictable output formats (reports, summaries, comparisons), design specific skeletons for each format. A skeleton for "compare these two products" should look different from a skeleton for "summarize this article." Specificity builds confidence.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Handling the Extremes: Very Fast and Very Slow</h2>
    <p class="lesson-text">Very fast responses (under 500 milliseconds) need no loading state. Adding one actually makes the experience feel slower. If the agent can respond instantly, let it. Do not add artificial delays for the sake of showing a loading animation.</p>
    <p class="lesson-text">Very slow responses (over 30 seconds) require a different strategy entirely. The user might navigate away, switch contexts, or lose patience. For these cases, design for disconnection: send a notification when the task is complete, show the in-progress task in a persistent sidebar or task list, allow the user to do other things while waiting, and provide a "check status" mechanism. Linear's AI features and Notion AI's page-level generation both handle long tasks by letting the user continue working while the agent operates in the background.</p>
    <p class="lesson-text">The in-between range of 2 to 30 seconds is where your narration, streaming, and skeleton patterns do the heavy lifting. This is also where cancel and pause controls matter most. Always give users an escape hatch during agent execution. A task that cannot be cancelled feels like a hostage situation.</p>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Time the wait:</strong> Use three different AI products and time the response for the same prompt. Note which ones stream, which show progress, and which use a bare spinner. How does each approach affect your perception of the wait?</li>
        <li><strong>Design a narration sequence:</strong> Pick an agent task that involves 4-6 steps (e.g., "research competitors and create a comparison table"). Write the progress narration messages for each step. Make them specific, informative, and human-readable.</li>
        <li><strong>Sketch a skeleton:</strong> Design a skeleton screen for an AI-generated market analysis report. What sections will the skeleton reveal? How does it animate into the real content? How does this differ from a simple loading spinner?</li>
      </ol>
    </div>
  </div>

</div>
`
  },
  {
    id: "3-5",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Failure Is Not the Exception</h2>
    <p class="lesson-text">In traditional software, errors are edge cases. A server goes down, a network request fails, a user enters invalid data. These are known failure modes with known solutions. In agent systems, failure is a constant companion. Agents hallucinate, misunderstand intent, call the wrong tool, exceed their capabilities, hit safety boundaries, and produce mediocre output. Designing for these failures is not defensive design. It is the core of the experience.</p>
    <p class="lesson-text">The stakes are higher too. When a web form throws a validation error, the user loses a few seconds. When an AI agent confidently delivers a wrong answer, the user might make a bad business decision, send an embarrassing email, or deploy broken code. The failure mode of agents is not "error screen." It is "misplaced confidence." Your designs must account for both visible failures (the agent explicitly fails) and invisible failures (the agent confidently delivers something wrong).</p>
    <p class="lesson-text">The good news is that well-designed failure states can actually build trust. When an agent says "I am not confident about this answer and here is why," users trust it more than an agent that is confidently wrong. Humility in failure is a feature, not a bug.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">A Taxonomy of Agent Failures</h2>
    <p class="lesson-text">Not all failures are created equal. Understanding the type of failure determines the appropriate design response. Here is a taxonomy of the three major categories.</p>
    <div class="lesson-diagram">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
        <div style="background: #1e293b; border-left: 4px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 1.25rem;">
          <div style="font-weight: 700; color: #fbbf24; margin-bottom: 0.5rem; font-size: 1rem;">Capability Failures</div>
          <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">The agent cannot do what was asked. Task is outside its abilities, requires knowledge it does not have, or exceeds its context window.</div>
          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #94a3b8;"><strong>Examples:</strong> "I can't access external websites," complex math errors, tasks requiring real-time data the agent lacks.</div>
        </div>
        <div style="background: #1e293b; border-left: 4px solid #ef4444; border-radius: 0 8px 8px 0; padding: 1.25rem;">
          <div style="font-weight: 700; color: #f87171; margin-bottom: 0.5rem; font-size: 1rem;">Tool Failures</div>
          <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">The agent's tools break. API calls fail, services time out, rate limits are hit, or external dependencies are unavailable.</div>
          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #94a3b8;"><strong>Examples:</strong> Search API down, code execution timeout, database connection failure, third-party service outage.</div>
        </div>
        <div style="background: #1e293b; border-left: 4px solid #8b5cf6; border-radius: 0 8px 8px 0; padding: 1.25rem;">
          <div style="font-weight: 700; color: #a78bfa; margin-bottom: 0.5rem; font-size: 1rem;">Safety Failures</div>
          <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">The agent refuses to act due to safety guardrails, policy boundaries, or content restrictions. These are intentional refusals, not bugs.</div>
          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #94a3b8;"><strong>Examples:</strong> Content policy violations, attempts to access unauthorized data, requests that could cause harm.</div>
        </div>
      </div>
    </div>
    <p class="lesson-text">Each category demands a different communication strategy and different recovery pathways. Treating all failures the same, with a generic "Something went wrong" message, is one of the most common and most damaging agent UX mistakes.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Failure Communication Language</h2>
    <p class="lesson-text">How you communicate failure matters as much as how you recover from it. The language of agent failure should follow four principles.</p>
    <p class="lesson-text"><strong>Be specific about what went wrong.</strong> "I couldn't complete your request" is useless. "I tried to access the Salesforce API to pull your pipeline data, but the connection timed out after 30 seconds" is actionable. Users cannot help fix a problem they do not understand.</p>
    <p class="lesson-text"><strong>Distinguish between agent limitations and user errors.</strong> Never blame the user for a capability limitation. "I don't have the ability to edit images yet" is honest. "Your request was too complex" implies the user did something wrong.</p>
    <p class="lesson-text"><strong>Express appropriate confidence levels.</strong> If the agent produced a partial result it is not confident about, say so. "I found some information but I'm not confident it's complete. You should verify these numbers before using them in your presentation." This builds far more trust than presenting uncertain information as fact.</p>
    <p class="lesson-text"><strong>Use plain language, not technical jargon.</strong> "Rate limit exceeded on the embedding model" means nothing to most users. "I'm getting too many requests right now. Try again in a minute" is clear and actionable.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Poor Failure Messages</h3>
        <ul>
          <li>"Error: Request failed"</li>
          <li>"Something went wrong. Please try again."</li>
          <li>"I can't do that."</li>
          <li>"Error code: 429"</li>
          <li>"Request too complex"</li>
        </ul>
      </div>
      <div class="lesson-card">
        <h3>Strong Failure Messages</h3>
        <ul>
          <li>"I couldn't pull your sales data because the Salesforce connection timed out."</li>
          <li>"I'm not able to edit images yet, but I can describe the changes you could make."</li>
          <li>"This analysis is based on data through March 2025. For newer data, check your dashboard directly."</li>
          <li>"The service is busy. I'll retry in 30 seconds, or you can try a simpler query."</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Recovery Pathways: Retry, Modify, Escalate</h2>
    <p class="lesson-text">Every failure state should offer at least one clear recovery path. Ideally, offer three tiers of recovery that escalate in user effort.</p>
    <p class="lesson-text"><strong>Retry</strong> is the lowest-effort recovery. The user clicks a button and the agent tries again, possibly with a slightly different approach. This works well for transient failures like timeouts and rate limits. Design the retry to feel effortless: a single button, ideally with a label that sets expectations ("Retry - may take longer this time").</p>
    <p class="lesson-text"><strong>Modify</strong> means adjusting the request to avoid the failure. The agent suggests a simpler version of the task, offers to break it into smaller pieces, or asks the user to provide additional context. Perplexity does this well: if a search fails, it might suggest a rephrased query. Claude suggests alternative approaches when it cannot perform a specific task.</p>
    <p class="lesson-text"><strong>Escalate</strong> means handing the task to a human or a different system. This is the safety net for failures the agent truly cannot recover from. It might mean routing to customer support, opening a link to do the task manually, or connecting to a more capable agent. The key is that escalation should never feel like abandonment. Frame it as "let me connect you with someone who can help" not "I give up."</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Undo/Redo Layer</h2>
    <p class="lesson-text">The best error recovery is one the user never notices because they can simply undo the agent's action. Building a robust undo/redo layer is one of the highest-leverage investments you can make in agent UX.</p>
    <p class="lesson-text">Every agent action that modifies user data should be undoable. This is non-negotiable. Notion AI lets you undo any AI-generated change with Cmd+Z. Cursor lets you reject any code edit. Google Docs' version history provides a full timeline of changes. These undo mechanisms transform high-risk actions into low-risk experiments. Users are far more willing to let an agent try something bold if they know they can instantly roll it back.</p>
    <p class="lesson-text">Design your undo layer to be visible and accessible. Do not hide it in a menu. After any agent action, show a persistent undo option: a toast notification with "Undo" as a clickable action, an inline "Revert" button next to the changed content, or a version history panel that shows exactly what changed. Gmail's "Undo Send" toast is a masterclass in this pattern: time-limited, visible, effortless.</p>
    <div class="lesson-callout tip">
      <strong>The undo-confidence connection:</strong> The easier it is to undo, the more freedom you can give the agent. If users can always roll back, you can reduce confirmation prompts and let the agent act more autonomously. Undo is not just error recovery. It is a trust accelerator.
    </div>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Catalog failures:</strong> Use an AI agent product for 30 minutes and intentionally try to break it. Push past its capabilities, give ambiguous instructions, ask for things it cannot do. Document every failure. Categorize each one as capability, tool, or safety. How did the product communicate each failure?</li>
        <li><strong>Rewrite error messages:</strong> Find 5 error messages in AI products you use. Rewrite each one to be specific, honest, non-blaming, and actionable. Include at least one recovery pathway in each message.</li>
        <li><strong>Design an undo flow:</strong> Pick an agent action with meaningful consequences (e.g., AI reformatting a slide deck). Design the complete undo experience: how is the undo surfaced, how long is it available, what does the user see when they undo, and what happens to the agent's work?</li>
      </ol>
    </div>
  </div>

</div>
`
  },
  {
    id: "3-6",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Project: Design a File Management Agent</h2>
    <p class="lesson-text">This capstone project for Module 3 brings together everything you have learned about the Intent-Action-Result framework, prompt design, confirmation patterns, progress narration, and error handling. You will design the complete interaction flow for a file management AI agent, an agent that helps users organize, rename, move, and clean up files across their cloud storage.</p>
    <p class="lesson-text">File management is an ideal design challenge because it involves a wide range of action types (some reversible, some not), requires clear confirmation patterns (nobody wants files accidentally deleted), and creates interesting progress and latency challenges (scanning thousands of files takes time). By the end of this project, you will have a portfolio-ready case study that demonstrates your agent UX design skills.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Project Brief</h2>
    <div class="lesson-diagram">
      <div style="background: #1e293b; border-radius: 12px; padding: 2rem; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 1rem;">Project Brief: FileFlow Agent</div>
        <div style="margin-bottom: 1.25rem;">
          <div style="font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem;">Product</div>
          <div style="font-size: 0.9rem; color: #cbd5e1;">FileFlow is a cloud file management tool with an AI agent that helps users organize their files. Users connect Google Drive, Dropbox, or OneDrive and the agent can scan, categorize, rename, move, archive, and delete files based on natural language instructions.</div>
        </div>
        <div style="margin-bottom: 1.25rem;">
          <div style="font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem;">Target User</div>
          <div style="font-size: 0.9rem; color: #cbd5e1;">Knowledge workers with 5,000+ files across multiple folders, many of which are outdated, duplicated, or poorly organized. They know what they want ("clean up my Downloads folder") but do not have time to do it manually.</div>
        </div>
        <div style="margin-bottom: 1.25rem;">
          <div style="font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem;">Agent Capabilities</div>
          <div style="font-size: 0.9rem; color: #cbd5e1;">
            <ul style="margin: 0.5rem 0; padding-left: 1.25rem;">
              <li>Scan and categorize files by type, date, and content</li>
              <li>Identify duplicates and near-duplicates</li>
              <li>Suggest folder structures based on file content</li>
              <li>Rename files using consistent naming conventions</li>
              <li>Move files to suggested locations</li>
              <li>Archive old files (move to archive folder)</li>
              <li>Delete files (with confirmation)</li>
              <li>Generate organization reports</li>
            </ul>
          </div>
        </div>
        <div>
          <div style="font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem;">Constraints</div>
          <div style="font-size: 0.9rem; color: #cbd5e1;">File deletion must always require explicit approval. All actions must be undoable for at least 30 days. The agent must work across multiple cloud storage providers. Scanning large directories may take 1-5 minutes.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Step 1: Define the Task Scope</h2>
    <p class="lesson-text">Before designing any screens, you need to define exactly what the agent can and cannot do. This is your capability boundary, and it determines everything from prompt scaffolding to error states.</p>
    <p class="lesson-text">Start by listing every action the agent can take and categorizing each one using the reversibility matrix from Lesson 3-3. Renaming a file is easily reversible and low impact: the agent can do this autonomously with just a preview. Deleting a file is hard to reverse and high impact: this needs explicit approval. Moving files falls somewhere in between: a checkpoint pattern works well.</p>
    <p class="lesson-text">Next, define what the agent cannot do. It cannot access files the user has not connected. It cannot recover files deleted outside the app. It cannot read the content of encrypted files. Being clear about these boundaries upfront will help you design honest, trustworthy error states.</p>
    <div class="lesson-callout tip">
      <strong>Scope tip:</strong> When in doubt, start with a narrower scope. An agent that does three things extremely well beats an agent that does ten things poorly. You can always expand capabilities later, but you cannot recover trust lost to a botched interaction.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Step 2: Map the Interaction Flow</h2>
    <p class="lesson-text">Using the Intent-Action-Result framework, map the full interaction flow for a core use case: "Organize my Downloads folder." Walk through each phase and design the transitions.</p>
    <p class="lesson-text"><strong>Intent phase:</strong> The user opens FileFlow and types "Clean up my Downloads folder." The agent disambiguates: "I can see 847 files in your Downloads. Would you like me to: (a) Sort files into folders by type, (b) Find and remove duplicates, (c) Archive files older than 6 months, or (d) All of the above?" The user selects option D.</p>
    <p class="lesson-text"><strong>Action phase:</strong> The agent begins scanning. Progress narration shows: "Scanning 847 files... Categorizing by type... Found 23 duplicates... Identifying files older than 6 months (312 found)..." The agent pauses at a checkpoint: "Here's my plan: Create 8 folders (Documents, Images, Videos, etc.), remove 23 duplicates (saving 2.1GB), and archive 312 old files. Review the plan?"</p>
    <p class="lesson-text"><strong>Result phase:</strong> The agent presents a summary: files organized into folders with a before/after view, duplicates listed with a "these will be deleted" preview requiring explicit approval, old files ready to archive with a one-click confirm. Each action group has its own accept/reject controls. A global undo button persists for the entire session.</p>
    <p class="lesson-text">Now map the edge cases. What happens if the user disconnects mid-scan? What if the agent finds files it cannot categorize? What if a file is locked by another application? What if the user's storage is nearly full and archiving requires more space? Each edge case is a design opportunity.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Step 3: Prototype Key Screens</h2>
    <p class="lesson-text">Design four key screens that represent the critical moments in the interaction flow.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Screen 1: Input</h3>
        <p>The prompt surface. Include scaffolding (suggested actions), context display (connected drives, file counts), and a well-designed input field with guardrails. Show how the disambiguation step works visually.</p>
      </div>
      <div class="lesson-card">
        <h3>Screen 2: Progress</h3>
        <p>The agent working. Show the narration log, a progress indicator, the plan checklist, and pause/cancel controls. Design the checkpoint moment where the agent pauses for review.</p>
      </div>
      <div class="lesson-card">
        <h3>Screen 3: Result</h3>
        <p>The outcome. Show the before/after comparison, grouped action summaries, individual accept/reject controls for destructive actions, and the persistent undo mechanism.</p>
      </div>
      <div class="lesson-card">
        <h3>Screen 4: Error</h3>
        <p>A failure state. Design the screen for when the agent cannot access some files (tool failure). Include a specific error message, partial results for what did work, and retry/modify/escalate recovery paths.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Step 4: Present and Critique</h2>
    <p class="lesson-text">Design is not done until it has been critiqued. Prepare a presentation of your FileFlow agent design that covers your design rationale, not just the screens themselves. For each design decision, articulate why you made that choice and what alternatives you considered.</p>
    <p class="lesson-text">Key questions to address in your critique: How does your prompt design help non-technical users? Where did you place confirmations and why? How does your progress narration build trust during long scans? How do your error states preserve trust and offer recovery? Is every destructive action undoable? How does the experience degrade gracefully when things go wrong?</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Deliverables Checklist</h2>
    <div class="lesson-checklist">
      <div class="lesson-check-item">
        <strong>Capability map:</strong> A document listing all agent actions, categorized by reversibility and impact, with the confirmation pattern assigned to each.
      </div>
      <div class="lesson-check-item">
        <strong>Interaction flow diagram:</strong> A complete flow covering the happy path and at least 4 edge cases, annotated with the IAR framework phases.
      </div>
      <div class="lesson-check-item">
        <strong>Screen designs (4 screens):</strong> Input, Progress, Result, and Error screens, designed at medium fidelity with real content and clear annotations.
      </div>
      <div class="lesson-check-item">
        <strong>Progress narration script:</strong> The full sequence of messages the agent shows during the "Organize my Downloads" task, from first scan to final result.
      </div>
      <div class="lesson-check-item">
        <strong>Error message library:</strong> At least 5 error messages covering capability, tool, and safety failures, each with specific language and recovery pathways.
      </div>
      <div class="lesson-check-item">
        <strong>Design rationale document:</strong> A short write-up (500-800 words) explaining your key design decisions and the trade-offs you made.
      </div>
    </div>
  </div>

  <div class="lesson-exercise">
    <h2 class="lesson-h2">Reflect &amp; Apply</h2>
    <div class="lesson-text">
      <ol>
        <li><strong>Peer review:</strong> Share your FileFlow design with a colleague or design peer. Ask them to "think aloud" as they walk through your flow. Note where they get confused, where they feel confident, and where they want more control. Use their feedback to iterate on your designs.</li>
        <li><strong>Stress test your edge cases:</strong> Role-play as a hostile user. Try to break your own design. What happens if someone asks the agent to delete everything? What if they connect an empty drive? What if they give contradictory instructions? Do your error states hold up?</li>
        <li><strong>Connect to Module 4:</strong> Review your FileFlow design through the lens of trust (which we will cover in the next module). Where does your design build trust? Where might it erode trust? Make a list of trust-building moments and trust-risk moments in your flow.</li>
      </ol>
    </div>
  </div>

</div>
`
  }
]);
