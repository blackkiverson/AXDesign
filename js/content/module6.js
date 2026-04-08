registerContent([
  {
    id: "6-1",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Why Domain Selection Matters</h2>
    <p class="lesson-text">Your capstone project is the single most important artifact you will produce in this course. It is the proof that you can think through agentic design from first principles, not just follow templates. And it all starts with choosing the right problem domain. A weak domain choice leads to a generic project that blends into every other portfolio piece out there. A strong domain choice gives you constraints that force genuinely interesting design decisions.</p>
    <p class="lesson-text">The goal is not to pick the "biggest" problem. It is to pick a problem that is rich enough to demonstrate agentic UX thinking, scoped enough to complete in two weeks, and specific enough that your design decisions feel grounded in real user needs rather than hand-waving.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Four Core Domain Categories</h2>
    <p class="lesson-text">Most agentic products fall into one of four broad categories. Each comes with different design challenges, which is exactly why your choice matters.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Research Agents</h3>
        <p class="lesson-text">These agents gather, synthesize, and summarize information on behalf of the user. Think market research assistants, literature review tools, or competitive analysis bots. The core UX challenge is <strong>transparency of sources</strong> and helping users trust that the synthesis is complete and accurate. You will spend most of your design energy on provenance, citation flows, and progressive disclosure of evidence.</p>
      </div>
      <div class="lesson-card">
        <h3>Productivity Agents</h3>
        <p class="lesson-text">These agents automate workflows: scheduling, email triage, task management, data entry. The core UX challenge is <strong>delegation and control</strong>. Users need to understand what the agent is doing on their behalf, approve or override actions, and set boundaries. Your design work will center on permission models, action previews, and undo flows.</p>
      </div>
      <div class="lesson-card">
        <h3>Creative Agents</h3>
        <p class="lesson-text">These agents co-create with users: writing assistants, design generation tools, brainstorming partners. The core UX challenge is <strong>authorship and iteration</strong>. Users want to feel ownership over the output while leveraging the agent's capabilities. You will focus on revision flows, style controls, and the spectrum between human direction and agent autonomy.</p>
      </div>
      <div class="lesson-card">
        <h3>Customer Service Agents</h3>
        <p class="lesson-text">These agents interact with end-customers on behalf of a business: support bots, onboarding guides, troubleshooting assistants. The core UX challenge is <strong>escalation and empathy</strong>. When should the agent hand off to a human? How do you maintain trust when the user knows they are talking to an AI? Your design will focus on handoff patterns, emotional tone, and failure recovery.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Domain Evaluation Matrix</h2>
    <p class="lesson-text">Use this matrix to score your top 3 domain ideas. Rate each criterion from 1 (low) to 5 (high). A total score of 18 or above signals a strong capstone domain.</p>
    <div class="lesson-table">
      <table>
        <thead>
          <tr>
            <th>Criterion</th>
            <th>What You Are Evaluating</th>
            <th>Idea A</th>
            <th>Idea B</th>
            <th>Idea C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agentic Richness</strong></td>
            <td>Does it require multi-step agent actions, not just a single prompt-response?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
          <tr>
            <td><strong>User Stakes</strong></td>
            <td>Are the consequences of agent errors meaningful enough to require good UX?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
          <tr>
            <td><strong>Scope Fit</strong></td>
            <td>Can you design the core flow in 2 weeks without needing deep technical research?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
          <tr>
            <td><strong>Portfolio Value</strong></td>
            <td>Will this project stand out to hiring managers at AI-forward companies?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
          <tr>
            <td><strong>Personal Interest</strong></td>
            <td>Are you genuinely curious about this space? Will you stay motivated?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
          <tr>
            <td><strong>Access to Users</strong></td>
            <td>Can you find 3-5 people to interview who would actually use this product?</td>
            <td>__/5</td>
            <td>__/5</td>
            <td>__/5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Scoping for a Two-Week Sprint</h2>
    <p class="lesson-text">Two weeks is tight. You are not building a product; you are designing one. That distinction matters. Your deliverable is a design artifact, not working software. Here is how to scope correctly:</p>
    <div class="lesson-callout tip">
      <p class="lesson-text"><strong>The "One User, One Job" Rule:</strong> Pick one specific user persona and one specific job they are hiring the agent to do. Not "a marketing team using AI" but "a solo content marketer who needs to repurpose a blog post into social media threads automatically." The narrower your focus, the deeper your design thinking can go.</p>
    </div>
    <p class="lesson-text">For a two-week sprint, aim to produce: (1) a clear problem statement and design brief, (2) user research findings from at least 3 interviews, (3) a complete agentic flow map, (4) key screen wireframes or mid-fidelity mockups for the critical path, and (5) a written case study documenting your decisions. That is achievable. An end-to-end polished prototype with 40 screens is not.</p>
    <p class="lesson-text">Cut ruthlessly. If your agent product has six features, pick the two that are most "agentic" in nature and design those deeply. A hiring manager would rather see two thoughtfully designed flows than six shallow ones.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Defining Your Target User and Agent Tasks</h2>
    <p class="lesson-text">Once you have a domain, get specific about who your user is and what the agent does for them. Write a brief user profile that includes their role, their current workflow without the agent, their pain points, and what success looks like for them.</p>
    <p class="lesson-text">Then list the agent's tasks. Be concrete. Instead of "the agent helps with research," write "the agent monitors 15 competitor websites daily, flags pricing changes, and drafts a weekly summary email for the user to review before sending to stakeholders." That level of specificity is what makes your design decisions meaningful.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Writing Your Design Brief</h2>
    <p class="lesson-text">Your design brief is a one-page document that anchors everything that follows. It should include:</p>
    <div class="lesson-checklist">
      <div class="lesson-check-item">Problem Statement: One sentence describing the user's pain point.</div>
      <div class="lesson-check-item">Target User: A brief persona (role, context, key behaviors).</div>
      <div class="lesson-check-item">Agent Role: What the agent does, in plain language.</div>
      <div class="lesson-check-item">Key Interactions: The 2-3 moments where user and agent must coordinate.</div>
      <div class="lesson-check-item">Success Metric: How you would know the design is working (even hypothetically).</div>
      <div class="lesson-check-item">Constraints: What is out of scope, what technology assumptions you are making.</div>
    </div>
    <p class="lesson-text">Write this brief before you start any design work. It is your north star for the next two weeks. When you are unsure about a design decision later, come back to this document.</p>
  </div>

  <div class="lesson-exercise">
    <h3>Exercise: Define Your Capstone Domain</h3>
    <p class="lesson-text"><strong>1.</strong> Brainstorm at least 5 potential agent product ideas across the four domain categories. Spend no more than 10 minutes. Quantity over quality at this stage.</p>
    <p class="lesson-text"><strong>2.</strong> Score your top 3 ideas using the Domain Evaluation Matrix. Be honest with yourself, especially on "Scope Fit" and "Access to Users."</p>
    <p class="lesson-text"><strong>3.</strong> For your highest-scoring idea, write a complete design brief using the template above. Share it with a peer or mentor for feedback before moving to Lesson 6-2.</p>
  </div>

  <div class="lesson-practice">
    <h3>Test Your Understanding</h3>
    <div class="practice-q">
      <p>1. What are the four core domain categories for agentic products, and what is the primary UX challenge for each?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>Research Agents (transparency of sources &mdash; provenance and citation flows), Productivity Agents (delegation and control &mdash; permission models and undo flows), Creative Agents (authorship and iteration &mdash; revision flows and style controls), Customer Service Agents (escalation and empathy &mdash; handoff patterns and failure recovery).</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>2. Name the six criteria in the Domain Evaluation Matrix for scoring a capstone idea.</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>Agentic Richness (requires multi-step agent actions), User Stakes (consequences of errors are meaningful), Scope Fit (designable in 2 weeks), Portfolio Value (stands out to hiring managers), Personal Interest (you'll stay motivated), Access to Users (you can find 3&ndash;5 people to interview).</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>3. What is the "One User, One Job" scoping rule and why is it important for a two-week sprint?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>Pick one specific user persona and one specific job they're hiring the agent to do &mdash; not "a marketing team using AI" but "a solo content marketer who needs to repurpose a blog post into social media threads automatically." It's important because the narrower the focus, the deeper the design thinking can go. In two weeks, you're designing a few flows deeply, not building a complete product.</p></div>
      </div>
    </div>
  </div>

</div>
`
  },
  {
    id: "6-2",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Why AI Product Research Is Different</h2>
    <p class="lesson-text">Interviewing users about AI-powered products is fundamentally different from traditional UX research. People carry strong preconceptions about AI, ranging from science fiction fantasies to deep skepticism, and these mental models shape how they respond to your questions. Your job in this research sprint is not just to understand what users want, but to uncover how they think about autonomy, trust, and delegation when a non-human actor is involved in their workflow.</p>
    <p class="lesson-text">The other challenge is that you are often researching a product category that does not yet exist in your user's daily life. They cannot tell you about their experience using an AI research agent if they have never used one. This means your interview technique must shift from "tell me about your current experience" to "help me understand your current workflow, pain points, and decision-making so I can design the right agent behavior."</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Five Essential Interview Questions for AI Product Research</h2>
    <p class="lesson-text">These five questions are designed to surface the information you need for agentic design. Adapt the wording to your specific domain, but preserve the intent of each question.</p>
    <div class="lesson-checklist">
      <div class="lesson-check-item"><strong>"Walk me through the last time you did [the task your agent would handle]. What steps did you take, and where did you get stuck?"</strong> — This maps the current workflow and identifies friction points the agent could address.</div>
      <div class="lesson-check-item"><strong>"If someone else was going to do this task for you, what instructions would you give them? What would you want to check before they finished?"</strong> — This reveals the user's mental model of delegation, which directly maps to how they will interact with an agent.</div>
      <div class="lesson-check-item"><strong>"What is the worst thing that could happen if this task was done incorrectly? How would you know something went wrong?"</strong> — This surfaces stakes and error detection patterns, which are critical for designing trust and oversight mechanisms.</div>
      <div class="lesson-check-item"><strong>"Have you ever used a tool that automated part of this for you? What did you like and dislike about that experience?"</strong> — This uncovers existing mental models about automation and highlights trust patterns from past experience.</div>
      <div class="lesson-check-item"><strong>"If an AI assistant could handle parts of this for you, which parts would you be comfortable handing off, and which would you want to keep control over?"</strong> — This directly maps the autonomy spectrum for your agent's design. It tells you where to build approval flows versus autonomous action.</div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Interview Script Template</h2>
    <p class="lesson-text">Use this template as your interview backbone. Each interview should run 30-40 minutes. Aim for 3-5 interviews total in your sprint.</p>
    <div class="lesson-diagram">
      <p class="lesson-label">Interview Script Structure</p>
      <p class="lesson-text"><strong>Opening (3 min):</strong> Thank them for their time. Explain you are designing an AI-powered tool and want to understand their current workflow. Reassure them there are no right or wrong answers. Ask permission to record or take notes.</p>
      <p class="lesson-text"><strong>Context Setting (5 min):</strong> Ask about their role, how long they have been doing this work, and what a typical day or week looks like. This builds rapport and gives you context for interpreting later answers.</p>
      <p class="lesson-text"><strong>Workflow Deep Dive (12 min):</strong> Use Questions 1 and 2 from above. Follow up with "why" and "tell me more" prompts. Ask them to show you artifacts if possible (documents, tools, screenshots).</p>
      <p class="lesson-text"><strong>Stakes and Trust (10 min):</strong> Use Questions 3 and 4. Probe for stories about past failures or near-misses. Ask how they verify quality in their current process.</p>
      <p class="lesson-text"><strong>Autonomy Mapping (8 min):</strong> Use Question 5. If they are vague, offer specific scenarios: "Would you be comfortable if the agent sent this email without your review, or would you want to approve it first?"</p>
      <p class="lesson-text"><strong>Wrap-Up (2 min):</strong> Ask if there is anything they expected you to ask that you did not. Thank them again. Ask if you can follow up with a short question via email if needed.</p>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Mental Model Mapping Workshop</h2>
    <p class="lesson-text">After your interviews, run a 60-minute synthesis session (solo or with a partner) to map user mental models. Create a simple diagram for each participant that shows:</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>The Delegation Spectrum</h3>
        <p class="lesson-text">Draw a horizontal line from "I want full control" to "The agent can handle it." Place each task from the user's workflow on this spectrum based on what they told you. Look for patterns across participants. Where do most people cluster? Where do they diverge? The convergence points tell you where to focus your design.</p>
      </div>
      <div class="lesson-card">
        <h3>The Trust Dependency Map</h3>
        <p class="lesson-text">For each task the user would delegate, note what conditions must be true for them to trust the agent. Common conditions include: "I can see what it did," "I can undo it," "the stakes are low," "it has done this correctly before." These conditions become your design requirements for transparency, reversibility, and progressive trust-building.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Identifying Trust Patterns in Your Research</h2>
    <p class="lesson-text">As you synthesize your interviews, look for these recurring trust patterns. Highlight quotes from your interviews that map to each one:</p>
    <div class="lesson-callout">
      <p class="lesson-text"><strong>Verification Need:</strong> "I would want to check it before..." — Signals a need for preview/approval screens.</p>
      <p class="lesson-text"><strong>Past Betrayal:</strong> "I tried [tool] once and it..." — Signals skepticism that your design must proactively address.</p>
      <p class="lesson-text"><strong>Conditional Trust:</strong> "I'd be fine with that if..." — Signals the exact design criteria for building trust.</p>
      <p class="lesson-text"><strong>Expertise Tension:</strong> "I know better than any tool about..." — Signals areas where the agent should defer to the user's judgment.</p>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Synthesis Framework: From Interviews to Design Brief</h2>
    <p class="lesson-text">Use this framework to turn raw interview data into actionable design inputs. For each row, synthesize findings across all your interviews.</p>
    <div class="lesson-table">
      <table>
        <thead>
          <tr>
            <th>Synthesis Category</th>
            <th>What to Capture</th>
            <th>Design Implication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Workflow Steps</td>
            <td>List every step users take today for the target task</td>
            <td>Which steps the agent handles vs. which the user retains</td>
          </tr>
          <tr>
            <td>Pain Points</td>
            <td>Recurring frustrations across interviews</td>
            <td>Priority features for the agent to address</td>
          </tr>
          <tr>
            <td>Delegation Comfort</td>
            <td>Tasks users will hand off vs. tasks they want to keep</td>
            <td>Autonomy levels for each agent capability</td>
          </tr>
          <tr>
            <td>Trust Conditions</td>
            <td>What users need to see or control to trust the agent</td>
            <td>Transparency and oversight UI requirements</td>
          </tr>
          <tr>
            <td>Error Consequences</td>
            <td>What happens when the task goes wrong</td>
            <td>Reversibility and error recovery patterns to design</td>
          </tr>
          <tr>
            <td>Existing Tools</td>
            <td>Current tools users rely on and their pain points</td>
            <td>Integration opportunities and UX expectations to meet</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="lesson-text">Once you have completed this table, update your design brief from Lesson 6-1. Your problem statement and agent role description should now be grounded in real user language, not assumptions.</p>
  </div>

  <div class="lesson-exercise">
    <h3>Project: User Research Sprint</h3>
    <p class="lesson-text"><strong>1.</strong> Recruit 3-5 interview participants who match your target user persona. Use your network, social media, or relevant online communities. Conduct 30-40 minute interviews using the script template above.</p>
    <p class="lesson-text"><strong>2.</strong> After all interviews, run the Mental Model Mapping workshop. Create a Delegation Spectrum and Trust Dependency Map for each participant, then look for cross-participant patterns.</p>
    <p class="lesson-text"><strong>3.</strong> Complete the Synthesis Framework table and update your design brief. Highlight the three most important findings that will shape your agentic flow design in Lesson 6-3.</p>
  </div>

  <div class="lesson-practice">
    <h3>Test Your Understanding</h3>
    <div class="practice-q">
      <p>1. What makes interviewing users about AI products fundamentally different from traditional UX research?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>People carry strong preconceptions about AI (from sci-fi fantasies to deep skepticism) that shape their responses. Also, you're often researching a product category that doesn't yet exist in the user's life, so you can't ask "tell me about your experience" &mdash; you must shift to understanding their current workflow, pain points, and decision-making so you can design the right agent behavior.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>2. What is the purpose of the interview question "If someone else was going to do this task for you, what instructions would you give them?"</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>It reveals the user's mental model of delegation, which directly maps to how they will interact with an agent. The instructions they'd give a human delegate (what to do, what to check, what not to touch) are essentially the requirements for the agent's autonomy model, approval flows, and scope boundaries.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>3. What are the four trust patterns to look for when synthesizing interview data?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>(1) Verification Need &mdash; "I would want to check it before..." (signals need for preview/approval screens), (2) Past Betrayal &mdash; "I tried [tool] once and it..." (signals skepticism to proactively address), (3) Conditional Trust &mdash; "I'd be fine with that if..." (signals exact design criteria for building trust), (4) Expertise Tension &mdash; "I know better than any tool about..." (signals areas where the agent should defer to user judgment).</p></div>
      </div>
    </div>
  </div>

</div>
`
  },
  {
    id: "6-3",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">From Research to Interaction Design</h2>
    <p class="lesson-text">You now have a design brief grounded in real user research. The next step is translating those findings into a concrete interaction design: the screens, flows, and behaviors that define how your user and their agent work together. This is where the course frameworks you have learned come together in a single, cohesive design.</p>
    <p class="lesson-text">Agentic interaction design differs from traditional app design in one critical way: you are designing for two actors, not one. The user takes actions, and the agent takes actions. Your flow must account for both, showing when the agent acts autonomously, when it pauses for user input, and how the user monitors and corrects the agent's work. A standard user flow diagram is not sufficient. You need an agentic flow map.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Agentic Flow Map Template</h2>
    <p class="lesson-text">An agentic flow map is a swim-lane diagram with two lanes: one for the user and one for the agent. Between them, you map every interaction point where control passes from one to the other. Here is how to construct yours:</p>
    <div class="lesson-diagram">
      <p class="lesson-label">Agentic Flow Map Structure</p>
      <p class="lesson-text"><strong>Lane 1 — User Actions (top):</strong> Every deliberate action the user takes. Examples: initiating a task, reviewing agent output, approving an action, providing feedback, adjusting settings.</p>
      <p class="lesson-text"><strong>Lane 2 — Agent Actions (bottom):</strong> Every action the agent performs. Examples: gathering data, generating a draft, executing an approved action, monitoring for changes, sending a notification.</p>
      <p class="lesson-text"><strong>Handoff Points (between lanes):</strong> Every moment where control shifts. Mark each with a label: "User initiates," "Agent proposes," "User approves," "Agent executes," "Agent flags issue," "User overrides." These handoff points are the most important moments in your entire design. They are where trust is built or broken.</p>
      <p class="lesson-text"><strong>Decision Diamonds:</strong> Where the flow branches based on autonomy level. For example: "Is this a high-stakes action?" If yes, route to approval flow. If no, agent proceeds autonomously and logs the action.</p>
    </div>
    <div class="lesson-callout tip">
      <p class="lesson-text"><strong>Start with the happy path.</strong> Map the ideal flow first where everything goes right. Then add branches for: agent uncertainty (low confidence), user disagreement (override/edit), agent failure (error recovery), and edge cases from your research.</p>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Key Screens Every Agent Product Needs</h2>
    <p class="lesson-text">Regardless of your domain, your agentic product design should include wireframes or mockups for these essential screens. Not every product needs all of them, but consider each one and make a deliberate choice about whether to include it.</p>
    <div class="lesson-checklist">
      <div class="lesson-check-item"><strong>Task Initiation Screen:</strong> Where the user defines what they want the agent to do. This might be a prompt input, a form, a configuration panel, or a simple "start" button with pre-set parameters. The key design question: how much context does the user need to provide for the agent to act effectively?</div>
      <div class="lesson-check-item"><strong>Agent Working State:</strong> What the user sees while the agent is processing. This is where you communicate progress, set expectations about timing, and give the user confidence that something is happening. Avoid empty loading spinners. Show intermediate steps, partial results, or a progress narrative.</div>
      <div class="lesson-check-item"><strong>Results/Output Review:</strong> Where the user sees what the agent produced. This screen must make it easy to evaluate quality, spot errors, and understand how the agent arrived at its output. Include provenance indicators, confidence signals, or explanation layers as appropriate.</div>
      <div class="lesson-check-item"><strong>Approval/Action Confirmation:</strong> For actions with consequences (sending an email, making a purchase, publishing content), design an explicit approval moment. Show exactly what will happen, make it easy to edit before confirming, and provide a clear "not yet" path.</div>
      <div class="lesson-check-item"><strong>Agent Activity Log:</strong> A persistent view of what the agent has done over time. This builds trust through transparency and helps users audit agent behavior. Think of it as the agent's "work history."</div>
      <div class="lesson-check-item"><strong>Settings/Autonomy Controls:</strong> Where the user configures what the agent can do independently versus what requires approval. This is where your Delegation Spectrum research from Lesson 6-2 directly informs the design.</div>
      <div class="lesson-check-item"><strong>Error/Escalation State:</strong> What happens when the agent encounters something it cannot handle. How does it communicate the problem? What options does the user have? How does the system recover gracefully?</div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Annotating for Agent-Specific Patterns</h2>
    <p class="lesson-text">Your wireframes need annotations that a developer (or a portfolio reviewer) can read to understand the agentic behavior behind each screen. Standard UI annotations are not enough. Add these agentic annotations to your designs:</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Autonomy Level Labels</h3>
        <p class="lesson-text">For each agent action in your flow, annotate the autonomy level: "Autonomous" (agent acts without asking), "Supervised" (agent proposes, user confirms), or "On-demand" (agent only acts when asked). This shows you have thought deliberately about the control model.</p>
      </div>
      <div class="lesson-card">
        <h3>Confidence and Uncertainty Indicators</h3>
        <p class="lesson-text">Annotate where and how the UI communicates agent confidence. Where does the agent say "I'm sure about this" versus "You might want to double-check this"? What visual or textual cues signal uncertainty? This is one of the most overlooked aspects of agentic design.</p>
      </div>
      <div class="lesson-card">
        <h3>Fallback Behaviors</h3>
        <p class="lesson-text">For every agent action, annotate what happens when it fails. Does the agent retry? Ask the user for help? Degrade gracefully to a simpler output? Showing fallback thinking proves you understand that agents are probabilistic, not deterministic.</p>
      </div>
      <div class="lesson-card">
        <h3>Data Flow Notes</h3>
        <p class="lesson-text">Annotate what information the agent needs at each step and where it comes from: user input, system data, external APIs, previous conversation context. This helps developers understand the agent's information architecture and helps reviewers assess feasibility.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Prototype Fidelity Decisions</h2>
    <p class="lesson-text">You have limited time. Choosing the right fidelity level for each part of your prototype is a strategic decision, not a default one.</p>
    <div class="lesson-callout">
      <p class="lesson-text"><strong>High fidelity (polished mockups):</strong> Use for your 2-3 most critical handoff moments. The approval screen, the results review, the error state. These are the screens that demonstrate your agentic thinking most clearly.</p>
      <p class="lesson-text"><strong>Mid fidelity (annotated wireframes):</strong> Use for the rest of the core flow. Clean enough to understand, annotated enough to convey the agentic behavior, but not pixel-perfect.</p>
      <p class="lesson-text"><strong>Low fidelity (flow diagram only):</strong> Use for edge cases and secondary flows. Show that you have thought about them without spending hours on screens no one will focus on.</p>
    </div>
    <p class="lesson-text">A common mistake in capstone projects is spending too much time making every screen look beautiful and not enough time making the agentic logic clear. A hiring manager reviewing your portfolio can forgive rough visuals. They cannot forgive shallow thinking about how the agent and user interact.</p>
  </div>

  <div class="lesson-exercise">
    <h3>Project: Interaction Design Sprint</h3>
    <p class="lesson-text"><strong>1.</strong> Create your Agentic Flow Map using the swim-lane template. Map the happy path first, then add at least two branching scenarios (agent uncertainty and user override). Identify every handoff point between user and agent.</p>
    <p class="lesson-text"><strong>2.</strong> Using the Screen Checklist above, decide which screens your product needs. For each one you include, write a one-sentence rationale. For each one you exclude, write why it is unnecessary for your specific domain.</p>
    <p class="lesson-text"><strong>3.</strong> Wireframe or mockup your key screens with agentic annotations. Aim for high fidelity on your 2-3 most important handoff moments and mid fidelity for everything else. Be ready to walk someone through your flow in under 5 minutes.</p>
  </div>

  <div class="lesson-practice">
    <h3>Test Your Understanding</h3>
    <div class="practice-q">
      <p>1. What is an "agentic flow map" and how does it differ from a standard user flow diagram?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>An agentic flow map is a swim-lane diagram with two lanes &mdash; one for the user and one for the agent. Between them, you map every interaction point where control passes between them (handoffs). It differs from a standard flow because it accounts for two actors taking actions, showing when the agent acts autonomously, when it pauses for user input, and how the user monitors and corrects.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>2. Name four types of agentic annotations that should be added to wireframes beyond standard UI annotations.</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>(1) Autonomy Level Labels &mdash; marking each agent action as Autonomous, Supervised, or On-demand. (2) Confidence and Uncertainty Indicators &mdash; where and how the UI signals agent certainty. (3) Fallback Behaviors &mdash; what happens when each agent action fails (retry, ask user, degrade gracefully). (4) Data Flow Notes &mdash; what information the agent needs at each step and where it comes from.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>3. Where should you invest high-fidelity design effort in a time-constrained sprint, and why?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>Invest high fidelity in your 2&ndash;3 most critical handoff moments &mdash; the approval screen, results review, and error state. These are the screens that demonstrate agentic thinking most clearly. Use mid-fidelity for the core flow and low-fidelity for edge cases. A common mistake is making every screen beautiful while leaving the agentic logic shallow. Hiring managers forgive rough visuals but not shallow thinking.</p></div>
      </div>
    </div>
  </div>

</div>
`
  },
  {
    id: "6-4",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Why Agentic Design Critique Is Unique</h2>
    <p class="lesson-text">Design critique is always valuable, but critiquing agentic products requires a different lens than critiquing a standard app. In traditional UX, you evaluate whether the interface is usable, whether the information architecture makes sense, and whether the visual design supports the user's goals. In agentic UX, you must also evaluate the relationship between two actors. Is the agent behaving in a way the user can understand and trust? Does the control model match the stakes of each action? Are failures handled with the same care as successes?</p>
    <p class="lesson-text">This lesson gives you a structured critique framework that combines everything you have learned in this course. You will use it to review your own capstone project and, ideally, a peer's project as well. Giving and receiving agentic UX feedback is a skill you will use throughout your career as AI products become the norm.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Combined Framework Review Checklist</h2>
    <p class="lesson-text">This checklist draws from every module in the course. Work through it systematically for the design you are reviewing. For each item, note whether it is present, partially addressed, or missing. A "missing" item is not automatically a problem; it might be a conscious scope decision. But it should be a deliberate choice, not an oversight.</p>
    <div class="lesson-table">
      <table>
        <thead>
          <tr>
            <th>Framework Area</th>
            <th>Review Question</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Autonomy & Control</strong></td>
            <td>Are autonomy levels clearly defined for each agent action? Can the user adjust them?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Transparency</strong></td>
            <td>Can the user understand what the agent is doing and why at every stage?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Trust Building</strong></td>
            <td>Does the design build trust progressively? Are confidence signals visible?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Error Recovery</strong></td>
            <td>What happens when the agent fails? Can the user recover without starting over?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Handoff Quality</strong></td>
            <td>Are the transitions between user and agent actions smooth and clearly signaled?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Feedback Loops</strong></td>
            <td>Can the user correct the agent and does the agent learn from corrections?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Progressive Disclosure</strong></td>
            <td>Is complexity revealed gradually? Can novice users start simple and power users go deep?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Mental Model Alignment</strong></td>
            <td>Does the design match how users actually think about delegation, based on research?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Ethical Safeguards</strong></td>
            <td>Are there guardrails for harmful or unintended agent actions?</td>
            <td>Present / Partial / Missing</td>
          </tr>
          <tr>
            <td><strong>Edge Case Handling</strong></td>
            <td>Are low-confidence, ambiguous, and unexpected scenarios addressed?</td>
            <td>Present / Partial / Missing</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">How to Give Useful Agentic UX Feedback</h2>
    <p class="lesson-text">Giving critique on agentic designs requires moving beyond "I like this" or "this is confusing." Your feedback should be specific, grounded in frameworks, and actionable. Here is a structure for delivering feedback that actually helps the designer improve:</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>1. Describe What You See</h3>
        <p class="lesson-text">Start by describing the design's intent as you understand it. "It looks like the agent automatically sends the follow-up email after the user approves the draft." This confirms alignment and surfaces misunderstandings early. If you misread the intent, the designer knows they have a clarity problem.</p>
      </div>
      <div class="lesson-card">
        <h3>2. Name the Framework</h3>
        <p class="lesson-text">Ground your feedback in a specific framework. Instead of "this feels risky," say "the autonomy level here seems high for an action with real consequences. The trust-building framework suggests users need a preview step before irreversible actions." This makes your feedback educational, not just opinionated.</p>
      </div>
      <div class="lesson-card">
        <h3>3. Pose a Scenario</h3>
        <p class="lesson-text">Test the design with a specific scenario. "What happens if the agent generates a summary that cites an incorrect source? How does the user discover the error, and what is their path to correction?" Scenarios expose gaps that static screen reviews often miss.</p>
      </div>
      <div class="lesson-card">
        <h3>4. Suggest a Direction</h3>
        <p class="lesson-text">End with a constructive suggestion, not a prescription. "You might explore adding a confidence indicator to each source citation so the user knows which ones to verify." This gives the designer a starting point for iteration without dictating the solution.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Common Gaps in First-Time Agentic Designs</h2>
    <p class="lesson-text">Having reviewed dozens of student agentic design projects, certain gaps appear consistently. Check your project against these common pitfalls:</p>
    <div class="lesson-callout warning">
      <p class="lesson-text"><strong>The Happy Path Trap:</strong> The design only shows the agent working perfectly. There are no error states, no low-confidence scenarios, no moments where the agent says "I do not know." Real agents fail regularly. Your design must account for this.</p>
    </div>
    <div class="lesson-callout warning">
      <p class="lesson-text"><strong>The Transparency Gap:</strong> The user can see the agent's output but not its reasoning or process. Why did the agent choose this approach? What data did it consider? Without transparency, users cannot calibrate their trust or catch errors.</p>
    </div>
    <div class="lesson-callout warning">
      <p class="lesson-text"><strong>The Control Illusion:</strong> The design includes settings or toggles that give the appearance of control but do not actually change agent behavior in meaningful ways. Genuine control means the user can adjust autonomy levels, set boundaries, and override decisions at the moment they matter.</p>
    </div>
    <div class="lesson-callout warning">
      <p class="lesson-text"><strong>The Feedback Dead End:</strong> The user can correct the agent in one instance, but the correction does not carry forward. If I edit the agent's draft to change the tone, does it remember my preference next time? Designing for learning and adaptation over time is what separates good agentic UX from simple chatbot interfaces.</p>
    </div>
    <p class="lesson-text">If any of these gaps exist in your design, that is normal. The purpose of critique is to find them. The purpose of your next iteration is to address the most important ones given your remaining time.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Iterating from Critique to Final Design</h2>
    <p class="lesson-text">After receiving critique (from yourself, a peer, or a mentor), prioritize your revisions. You will not have time to address everything. Use this framework to decide what to fix:</p>
    <div class="lesson-checklist">
      <div class="lesson-check-item"><strong>High priority:</strong> Gaps in the core handoff moments. If the agent-to-user transition is unclear at the most critical point in your flow, fix that first.</div>
      <div class="lesson-check-item"><strong>Medium priority:</strong> Missing error or edge case states for high-stakes actions. Add at least one failure scenario to your design to show you have considered it.</div>
      <div class="lesson-check-item"><strong>Lower priority:</strong> Visual polish, secondary flows, or settings screens. These matter, but they are less impactful for demonstrating agentic thinking in a portfolio context.</div>
    </div>
    <p class="lesson-text">Document your iteration decisions. In your case study (Lesson 6-5), you will explain not just your final design, but how critique shaped it. Showing that you can receive feedback, prioritize, and iterate is just as impressive as the design itself.</p>
  </div>

  <div class="lesson-exercise">
    <h3>Project: Agentic Design Critique</h3>
    <p class="lesson-text"><strong>1.</strong> Complete a self-review of your capstone design using the Combined Framework Review Checklist. Be ruthlessly honest. Mark each item as Present, Partial, or Missing and write a brief note explaining your assessment.</p>
    <p class="lesson-text"><strong>2.</strong> If possible, exchange designs with a peer and conduct a mutual critique session using the four-step feedback structure (Describe, Name the Framework, Pose a Scenario, Suggest a Direction). Spend 20 minutes reviewing each project.</p>
    <p class="lesson-text"><strong>3.</strong> Based on the critique, identify your top 3 revisions and implement them. Document what changed and why in preparation for your case study.</p>
  </div>

  <div class="lesson-practice">
    <h3>Test Your Understanding</h3>
    <div class="practice-q">
      <p>1. What are the four steps of the structured feedback method for critiquing agentic designs?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>(1) Describe What You See &mdash; state the design's intent as you understand it to confirm alignment. (2) Name the Framework &mdash; ground feedback in a specific framework (trust, autonomy, transparency). (3) Pose a Scenario &mdash; test the design with a specific what-if situation to expose gaps. (4) Suggest a Direction &mdash; offer a constructive starting point for iteration, not a prescription.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>2. Name three of the four common gaps found in first-time agentic designs.</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>(1) The Happy Path Trap &mdash; design only shows the agent working perfectly with no error states. (2) The Transparency Gap &mdash; user sees output but not reasoning or process. (3) The Control Illusion &mdash; settings give appearance of control but don't meaningfully change agent behavior. (4) The Feedback Dead End &mdash; user can correct the agent once but corrections don't carry forward.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>3. When prioritizing revisions after critique, what should be addressed first, second, and third?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>First: gaps in core handoff moments (if the agent-to-user transition is unclear at the critical point). Second: missing error or edge case states for high-stakes actions (add at least one failure scenario). Third: visual polish, secondary flows, or settings screens (these matter but are less impactful for demonstrating agentic thinking in a portfolio).</p></div>
      </div>
    </div>
  </div>

</div>
`
  },
  {
    id: "6-5",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Why Your Case Study Matters More Than Your Screens</h2>
    <p class="lesson-text">Here is an uncomfortable truth about design portfolios: most hiring managers spend less than two minutes on any single project. They are not carefully examining every pixel of your wireframes. They are scanning for evidence that you can think. A well-written case study that shows your process, reasoning, and the tradeoffs you navigated will do more for your career than a pixel-perfect mockup with no explanation behind it.</p>
    <p class="lesson-text">This is especially true for agentic design work. The field is new enough that most hiring managers are still figuring out what "good" looks like. Your case study is your opportunity to define what good agentic UX thinking looks like by demonstrating it. You are not just showing a project. You are teaching the reader how to evaluate agentic design through the lens of your work.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Case Study Structure for AI Products</h2>
    <p class="lesson-text">The following structure is specifically designed for AI and agentic product case studies. It differs from a standard UX case study by emphasizing the unique challenges of designing for AI systems: uncertainty, trust, autonomy, and human-agent collaboration.</p>
    <div class="lesson-diagram">
      <p class="lesson-label">Case Study Template Structure</p>
      <p class="lesson-text"><strong>1. The Hook (100 words):</strong> Start with the problem in human terms. Not "I designed an AI agent for X" but "Content marketers spend 6 hours a week reformatting blog posts for social media, and most of them hate every minute of it." Make the reader care about the problem before you introduce the solution.</p>
      <p class="lesson-text"><strong>2. Context and Scope (150 words):</strong> Explain the project parameters. What was the timeline? What was your role? What tools did you use? What were the constraints? Be honest about scope. "This was a 2-week design sprint focused on the core delegation flow, not a complete product design" is a perfectly respectable framing.</p>
      <p class="lesson-text"><strong>3. Research Findings (200 words):</strong> Summarize your user research. Share 2-3 key insights with direct quotes from interviews. Focus on what surprised you or challenged your assumptions. The insight that "users wanted less control than I expected in low-stakes tasks" is more interesting than "users want the product to be easy to use."</p>
      <p class="lesson-text"><strong>4. The Agentic Design Challenge (150 words):</strong> Articulate what made this design problem specifically agentic. What tensions did you have to resolve? Where did the agent's autonomy and the user's need for control conflict? This section is what distinguishes your case study from a standard UX project.</p>
      <p class="lesson-text"><strong>5. Design Decisions (300 words):</strong> Walk through your 3-4 most important design decisions. For each one, explain the options you considered, the tradeoff you were making, and why you chose the direction you did. Use annotated screen images to illustrate each decision.</p>
      <p class="lesson-text"><strong>6. Iteration and Critique (150 words):</strong> Show how your design evolved. What changed after your critique session? What did you try that did not work? This section demonstrates humility and growth, both of which are attractive to employers.</p>
      <p class="lesson-text"><strong>7. Reflection (100 words):</strong> What would you do differently with more time? What open questions remain? What did you learn about designing for AI agents that you did not know before?</p>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Showing Your Thinking, Not Just Your Screens</h2>
    <p class="lesson-text">The most common mistake in design case studies is showing a sequence of polished screens with captions like "the home screen" and "the settings page." That tells the reader nothing about your thinking. Instead, pair every visual with a design decision.</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Weak Example</h3>
        <p class="lesson-text">"Here is the agent's output screen where users can see the generated summary." This describes the screen. It does not explain any design thinking.</p>
      </div>
      <div class="lesson-card">
        <h3>Strong Example</h3>
        <p class="lesson-text">"I chose to display the agent's summary alongside the original sources in a split view. My research showed that users' primary trust concern was source accuracy, so I designed the review screen to make verification as frictionless as possible. I considered a tabbed view but rejected it because switching between tabs added cognitive load at the exact moment users need to compare."</p>
      </div>
    </div>
    <p class="lesson-text">Notice the difference. The strong example names the design decision, references research, explains the rationale, and mentions an alternative that was rejected. Every paragraph in your case study should carry this density of thinking.</p>
    <div class="lesson-callout tip">
      <p class="lesson-text"><strong>The "Why not?" technique:</strong> For each major design decision, write one sentence about an alternative you considered and why you did not choose it. "I considered letting the agent send emails autonomously after three successful supervised sends, but my research participants expressed discomfort with the idea of 'earning' autonomy without an explicit opt-in, so I kept the approval step permanent with a toggle to change it." This single sentence demonstrates more design maturity than five polished screens.</p>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Writing About Uncertainty and Tradeoffs</h2>
    <p class="lesson-text">Agentic design is full of unresolved tensions. Do not pretend you solved them all. Hiring managers are far more impressed by a designer who can articulate a tradeoff honestly than by one who presents every decision as obvious.</p>
    <div class="lesson-quote">
      <p class="lesson-text">"I struggled with how much to surface the agent's reasoning. Showing full chain-of-thought builds transparency but adds visual clutter and slows down power users. I landed on a collapsed-by-default approach with an expand option, but I am not fully satisfied. In a longer engagement, I would A/B test this against an always-visible summary to see which approach better supports trust without sacrificing efficiency."</p>
    </div>
    <p class="lesson-text">Writing like this communicates several things simultaneously: you understand the tradeoff, you made a considered decision, you know its limitations, and you know how you would validate it given more resources. That is the full arc of design thinking, captured in four sentences.</p>
    <p class="lesson-text">Be specific about what you are uncertain about. "More testing is needed" is vague. "I would test whether users actually read the confidence indicators or if they become background noise after the third use" is specific and shows genuine curiosity.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Publishing and Sharing Your Work</h2>
    <p class="lesson-text">Your case study needs to live somewhere people can find it. Here are practical recommendations:</p>
    <div class="lesson-checklist">
      <div class="lesson-check-item"><strong>Portfolio website:</strong> If you have one, this is the primary home. Structure it as a long-scroll page with clear section headings, annotated images, and a consistent visual style.</div>
      <div class="lesson-check-item"><strong>Medium or Substack:</strong> Excellent for discoverability. Tag your post with "AI UX," "product design," and "agentic design." The AI design community is actively reading these platforms.</div>
      <div class="lesson-check-item"><strong>LinkedIn article:</strong> Good for reaching hiring managers directly. Share a summary post linking to the full case study. Engage with comments to build visibility.</div>
      <div class="lesson-check-item"><strong>Behance or Dribbble:</strong> Good for the visual components, but supplement with a written narrative. Pure visual portfolios undersell agentic design thinking.</div>
    </div>
    <p class="lesson-text">When sharing, write a compelling one-paragraph summary that hooks the reader. Lead with the problem, not the solution. "How do you design trust into an AI system that makes decisions with real consequences?" is more compelling than "I designed an AI scheduling assistant."</p>
    <div class="lesson-callout">
      <p class="lesson-text"><strong>One final note:</strong> Your capstone project is a beginning, not an end. The field of agentic experience design is evolving rapidly. The frameworks you have learned in this course will continue to develop as the technology matures. Stay curious, keep designing, and keep questioning how humans and AI agents can work together effectively. The designers who build expertise in this space now will shape how the next generation of products works.</p>
    </div>
  </div>

  <div class="lesson-exercise">
    <h3>Project: Publish Your Case Study</h3>
    <p class="lesson-text"><strong>1.</strong> Write your complete case study following the template structure above. Aim for 1,000-1,500 words plus annotated images. Focus on decisions and rationale, not just descriptions of screens.</p>
    <p class="lesson-text"><strong>2.</strong> Include at least one paragraph that honestly discusses an unresolved tradeoff or uncertainty in your design. Use the "Why not?" technique for your three most important design decisions.</p>
    <p class="lesson-text"><strong>3.</strong> Publish your case study on at least one platform and share the link with your cohort. Read two peers' case studies and leave substantive feedback using the critique framework from Lesson 6-4.</p>
  </div>

  <div class="lesson-practice">
    <h3>Test Your Understanding</h3>
    <div class="practice-q">
      <p>1. What are the seven sections of the AI product case study template, in order?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>(1) The Hook (problem in human terms, 100 words), (2) Context and Scope (project parameters, 150 words), (3) Research Findings (key insights with quotes, 200 words), (4) The Agentic Design Challenge (what made it specifically agentic, 150 words), (5) Design Decisions (3&ndash;4 key decisions with tradeoffs, 300 words), (6) Iteration and Critique (how design evolved, 150 words), (7) Reflection (what you'd do differently, open questions, 100 words).</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>2. What is the "Why not?" technique and why does a single sentence using it demonstrate more design maturity than five polished screens?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>For each major design decision, write one sentence about an alternative you considered and why you didn't choose it. Example: "I considered auto-approving after three successful sends, but users expressed discomfort with earning autonomy without explicit opt-in, so I kept the approval step with a toggle." It demonstrates maturity because it shows you evaluated options, understood tradeoffs, grounded decisions in research, and made deliberate choices &mdash; the full arc of design thinking.</p></div>
      </div>
    </div>
    <div class="practice-q">
      <p>3. Why should a case study lead with the problem, not the solution, when sharing it publicly?</p>
      <div class="practice-reveal">
        <span class="reveal-btn">Show Answer</span>
        <div class="reveal-body"><p>Because "How do you design trust into an AI system that makes decisions with real consequences?" is more compelling than "I designed an AI scheduling assistant." Leading with the problem hooks the reader by making them care about the challenge before introducing the solution. Hiring managers want to see how you think about problems, not just what you built.</p></div>
      </div>
    </div>
  </div>

</div>
`
  }
]);
