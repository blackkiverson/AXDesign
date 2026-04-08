registerContent([
  {
    id: "4-1",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">What Is Multi-Agent Orchestration?</h2>
          <p class="lesson-text">
            Most people picture AI as a single assistant responding to a single prompt. That mental model is already outdated. The systems shipping today — from coding assistants to enterprise research tools — increasingly rely on <strong>multiple agents working together</strong>, each with a distinct role, passing context and decisions between them like a well-run operations team. This coordination layer is called <em>orchestration</em>, and it is quickly becoming the most consequential design surface in AI product work.
          </p>
          <p class="lesson-text">
            Orchestration is what happens <em>between</em> the user's request and the final output. It is the invisible backstage where a planner agent breaks down a goal, worker agents execute subtasks, tool agents call APIs or search the web, and a supervisor stitches the results together. If you have ever used a product that felt like it was "thinking for a while" before returning a surprisingly thorough answer, you were likely on the receiving end of an orchestrated pipeline.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Three Roles: Planner, Worker, Tool</h2>
          <p class="lesson-text">
            While architectures vary, most multi-agent systems decompose into three broad roles:
          </p>
          <div class="lesson-grid">
            <div class="lesson-card">
              <span class="lesson-label">Planner Agent</span>
              <p class="lesson-text">
                The planner receives the user's goal and decomposes it into a sequence of subtasks. Think of it as the project manager. It decides <em>what</em> needs to happen, in what order, and which specialist should handle each step. In Devin (the AI software engineer), the planner reads a GitHub issue, drafts a step-by-step implementation plan, and assigns coding, testing, and deployment tasks to downstream agents.
              </p>
            </div>
            <div class="lesson-card">
              <span class="lesson-label">Worker Agent</span>
              <p class="lesson-text">
                Workers are specialists. A coding worker writes code. A research worker searches documentation. A review worker checks output quality. Each worker has a narrower context window and a focused system prompt. The planner routes tasks to workers and collects their outputs. Workers rarely talk to each other directly — they communicate through the planner or a shared state object.
              </p>
            </div>
            <div class="lesson-card">
              <span class="lesson-label">Tool Agent</span>
              <p class="lesson-text">
                Tool agents are the bridge between language models and the real world. They call APIs, query databases, execute code in sandboxes, read files, or trigger webhooks. A single worker might invoke multiple tool agents in sequence: search the web, extract data from the results, then write that data to a spreadsheet. Tool agents are deterministic — they either succeed or fail — and that predictability is a design asset.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">How Handoffs Work</h2>
          <p class="lesson-text">
            A <strong>handoff</strong> is the moment one agent passes context, instructions, or partial results to another. Handoffs are where things go wrong — and where design has the most leverage. Consider a research pipeline: the planner tells a search worker to find recent papers on a topic. The search worker returns ten results. The planner then hands those results to a summarization worker with the instruction "extract key findings relevant to the user's question." If the planner's instruction is vague, the summarization worker produces irrelevant output. The failure is in the handoff, not in either agent's capability.
          </p>
          <p class="lesson-text">
            For designers, handoffs raise critical questions. Should the user see them happening? Should they be able to intervene between steps? What happens when a handoff fails — does the system retry silently, or surface the failure? These are not engineering decisions. They are experience decisions, and they define how trustworthy and controllable the product feels.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Visualizing the Orchestration Flow</h2>
          <p class="lesson-text">
            The following diagram shows a typical orchestration pattern. The user's request flows to a planner, which fans out to workers, each of which may call tools. Results flow back up through the planner to the user.
          </p>
          <div class="lesson-diagram">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 32px; background: var(--color-surface-alt, #1a1a2e); border-radius: 12px; font-family: inherit;">
              <div style="background: var(--color-accent, #6c63ff); color: #fff; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">User Request</div>
              <div style="width: 2px; height: 24px; background: var(--color-border, #444);"></div>
              <div style="background: var(--color-primary, #4a90d9); color: #fff; padding: 14px 36px; border-radius: 10px; font-weight: 700; font-size: 16px; box-shadow: 0 2px 12px rgba(74,144,217,0.3);">Planner Agent</div>
              <div style="display: flex; align-items: flex-start; gap: 0; justify-content: center; width: 100%;">
                <div style="width: 2px; height: 24px; background: var(--color-border, #444); margin: 0 80px;"></div>
                <div style="width: 2px; height: 24px; background: var(--color-border, #444); margin: 0 80px;"></div>
                <div style="width: 2px; height: 24px; background: var(--color-border, #444); margin: 0 80px;"></div>
              </div>
              <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px solid var(--color-border, #444); padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--color-text, #e0e0e0);">Research Worker</div>
                  <div style="font-size: 11px; color: var(--color-text-muted, #888);">&#8595;</div>
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px dashed var(--color-border, #555); padding: 6px 14px; border-radius: 6px; font-size: 12px; color: var(--color-text-muted, #aaa);">Web Search Tool</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px solid var(--color-border, #444); padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--color-text, #e0e0e0);">Coding Worker</div>
                  <div style="font-size: 11px; color: var(--color-text-muted, #888);">&#8595;</div>
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px dashed var(--color-border, #555); padding: 6px 14px; border-radius: 6px; font-size: 12px; color: var(--color-text-muted, #aaa);">Code Sandbox Tool</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px solid var(--color-border, #444); padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--color-text, #e0e0e0);">Review Worker</div>
                  <div style="font-size: 11px; color: var(--color-text-muted, #888);">&#8595;</div>
                  <div style="background: var(--color-surface, #2a2a3e); border: 1px dashed var(--color-border, #555); padding: 6px 14px; border-radius: 6px; font-size: 12px; color: var(--color-text-muted, #aaa);">Validation Tool</div>
                </div>
              </div>
              <div style="width: 2px; height: 24px; background: var(--color-border, #444);"></div>
              <div style="background: var(--color-accent, #6c63ff); color: #fff; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">Assembled Response</div>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Why the Backstage Is a Design Problem</h2>
          <p class="lesson-text">
            In traditional software, what happens on the server is an engineering concern. In agentic systems, what happens backstage is <em>directly experienced by the user</em> — through wait times, through partial updates, through unexpected outputs, and through failures they cannot diagnose. The backstage is no longer invisible. Users sense its complexity even when they cannot see it.
          </p>
          <p class="lesson-text">
            This means designers must develop opinions about the backstage. How many agents are involved? What can go wrong at each step? Where should the user have visibility or control? These questions are not optional — they are the core of agentic UX. A product that hides all orchestration feels like a black box. A product that shows everything feels like a server log. The design challenge is finding the right middle ground for your users, your domain, and your level of system reliability. That is what the rest of this module is about.
          </p>
          <div class="lesson-callout tip">
            <strong>Design Principle:</strong> The more autonomous your system, the more important it is to design the backstage — not just the output. Users do not need to see every handoff, but they need enough signal to build a mental model of what the system is doing and why.
          </div>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text"><strong>1.</strong> Think of a product you use that likely involves multiple AI models or agents behind the scenes (e.g., Notion AI, GitHub Copilot Workspace, Perplexity). Map out what you think the planner/worker/tool breakdown might look like. What clues does the UI give you?</p>
          <p class="lesson-text"><strong>2.</strong> Identify one moment in that product where a handoff between agents might be happening. How does the interface handle the transition? Is it visible, hidden, or somewhere in between?</p>
          <p class="lesson-text"><strong>3.</strong> Write a one-paragraph "backstage brief" for an agentic feature in your own product: list the agents involved, the handoffs between them, and the points where the user might need visibility or control.</p>
        </div>

        <div class="lesson-practice">
          <h3>Test Your Understanding</h3>
          <div class="practice-q">
            <p>1. What are the three broad roles in a multi-agent system and what does each do?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Planner Agent (receives the user's goal and decomposes it into subtasks — the project manager), Worker Agent (specialists that handle focused tasks like coding, research, or review), Tool Agent (bridges between language models and the real world by calling APIs, querying databases, executing code — they're deterministic).</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>2. What is a "handoff" in multi-agent systems, and why are handoffs where most failures occur?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>A handoff is the moment one agent passes context, instructions, or partial results to another. Failures occur at handoffs because if the passing agent's instructions are vague or the context is incomplete, the receiving agent produces irrelevant output. The failure is in the handoff communication, not in either agent's individual capability.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>3. Why is the "backstage" of a multi-agent system a design problem, not just an engineering problem?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Because what happens backstage is directly experienced by users — through wait times, partial updates, unexpected outputs, and failures they cannot diagnose. Users sense the complexity even when they can't see it. Designers must decide: how much orchestration to show, where users need visibility or control, and how to translate system events into user-meaningful information.</p></div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "4-2",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Visibility Into Agent Networks</h2>
          <p class="lesson-text">
            Here is the central tension of multi-agent design: users want to feel in control, but they do not want to be overwhelmed. Show too little and the system feels opaque — a black box that either works or does not, with no way to diagnose problems or build trust. Show too much and you have built a server monitoring dashboard that terrifies anyone without an engineering background. Every multi-agent product must navigate this tension, and most get it wrong in one direction or the other.
          </p>
          <p class="lesson-text">
            This lesson gives you a framework for thinking about visibility: what to show, when to show it, and to whom. The goal is not a single correct answer — it is the ability to make deliberate, defensible choices for your specific product and audience.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Visibility Spectrum</h2>
          <p class="lesson-text">
            Think of agent visibility as a spectrum with five zones. Every product sits somewhere on this line, and different features within the same product may sit at different points.
          </p>
          <div class="lesson-diagram">
            <div style="padding: 28px; background: var(--color-surface-alt, #1a1a2e); border-radius: 12px;">
              <div style="display: flex; align-items: stretch; gap: 0; width: 100%; border-radius: 8px; overflow: hidden; min-height: 80px;">
                <div style="flex: 1; background: #1e1e3a; padding: 14px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,0.08);">
                  <div style="font-weight: 700; font-size: 13px; color: #e74c3c; margin-bottom: 6px;">Black Box</div>
                  <div style="font-size: 11px; color: #aaa; line-height: 1.4;">No visibility. User sees only final output.</div>
                </div>
                <div style="flex: 1; background: #222244; padding: 14px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,0.08);">
                  <div style="font-weight: 700; font-size: 13px; color: #e67e22; margin-bottom: 6px;">Status Only</div>
                  <div style="font-size: 11px; color: #aaa; line-height: 1.4;">Progress indicator. "Searching..." "Analyzing..."</div>
                </div>
                <div style="flex: 1; background: #262650; padding: 14px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,0.08);">
                  <div style="font-weight: 700; font-size: 13px; color: #f1c40f; margin-bottom: 6px;">Summary</div>
                  <div style="font-size: 11px; color: #aaa; line-height: 1.4;">Confidence + key steps shown. Details on demand.</div>
                </div>
                <div style="flex: 1; background: #2a2a5a; padding: 14px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,0.08);">
                  <div style="font-weight: 700; font-size: 13px; color: #2ecc71; margin-bottom: 6px;">Step Trace</div>
                  <div style="font-size: 11px; color: #aaa; line-height: 1.4;">Each agent step visible. Expandable detail.</div>
                </div>
                <div style="flex: 1; background: #2e2e64; padding: 14px 10px; text-align: center;">
                  <div style="font-weight: 700; font-size: 13px; color: #3498db; margin-bottom: 6px;">Full Log</div>
                  <div style="font-size: 11px; color: #aaa; line-height: 1.4;">Complete execution trace. Every token, every call.</div>
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; margin-top: 12px; padding: 0 8px;">
                <span style="font-size: 11px; color: #888;">&#8592; Less visibility</span>
                <span style="font-size: 11px; color: #888;">More visibility &#8594;</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">When to Show Sub-Agent Activity</h2>
          <p class="lesson-text">
            Not every agent action deserves screen time. The question is not "can we show this?" but "does showing this help the user make better decisions or feel more confident?" Here are the situations where surfacing sub-agent activity earns its place:
          </p>
          <div class="lesson-grid">
            <div class="lesson-card">
              <span class="lesson-label">High-stakes decisions</span>
              <p class="lesson-text">When the agent is about to take an irreversible action — sending an email, deploying code, making a purchase — users need to see what led to that decision. Show the reasoning chain, not just the final action. Stripe's AI fraud detection surfaces the signals that triggered a block, not just the block itself.</p>
            </div>
            <div class="lesson-card">
              <span class="lesson-label">Long-running tasks</span>
              <p class="lesson-text">Anything over 15 seconds needs progress signal. Anything over a minute needs stage-level updates. Perplexity shows "Searching 5 sources..." then "Reading articles..." then "Generating answer..." — each label maps roughly to a different agent or pipeline stage. This transforms dead air into perceived progress.</p>
            </div>
            <div class="lesson-card">
              <span class="lesson-label">Ambiguous or low-confidence results</span>
              <p class="lesson-text">When the system is uncertain, showing its work helps users calibrate trust. A research agent that says "I found conflicting information from 3 sources" is more trustworthy than one that picks a side silently. Uncertainty is not a bug — it is a signal users can act on.</p>
            </div>
            <div class="lesson-card">
              <span class="lesson-label">Debugging and iteration</span>
              <p class="lesson-text">When something goes wrong, users need enough visibility to understand <em>where</em> the failure happened. Did the search agent find the wrong sources? Did the coding agent misinterpret the spec? Without step-level visibility, every failure looks the same: "it didn't work."</p>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">What Users Actually Need to See</h2>
          <p class="lesson-text">
            Research on AI transparency consistently shows that users do not want <em>all</em> the information — they want the <em>right</em> information at the <em>right</em> time. Through user testing across agentic products, a consistent hierarchy emerges:
          </p>
          <p class="lesson-text">
            <strong>Always show:</strong> What the system is currently doing (in plain language), how long it will roughly take, and whether it succeeded or failed. This is the minimum viable visibility for any agentic product.
          </p>
          <p class="lesson-text">
            <strong>Show on request:</strong> Which specific sub-agents were involved, what sources or tools were used, and the reasoning behind key decisions. This is the "details on demand" layer — collapsed by default, available for curious or cautious users.
          </p>
          <p class="lesson-text">
            <strong>Rarely show:</strong> Raw model outputs, token counts, internal routing decisions, retry logs. This is developer-level information. It belongs in a debug console, not the primary UI. The exception is developer tools (like Claude Code or Cursor), where the audience expects and values this level of detail.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Confidence Summary Pattern</h2>
          <p class="lesson-text">
            One of the most effective patterns emerging in agentic design is the <strong>confidence summary</strong>: a compact, end-of-task summary that tells the user how confident the system is in its output and why. It typically includes three elements:
          </p>
          <p class="lesson-text">
            <strong>1. A confidence signal</strong> — not necessarily a percentage, but a qualitative indicator. "High confidence — consistent across 4 sources" or "Mixed results — 2 of 5 sources disagree." This sets expectations before the user reads the full output.
          </p>
          <p class="lesson-text">
            <strong>2. A source/step summary</strong> — "Searched 12 papers, analyzed 5 in depth, synthesized findings." This gives users a sense of thoroughness without showing every step.
          </p>
          <p class="lesson-text">
            <strong>3. An expandable trace</strong> — for users who want to verify or debug, a collapsible section showing the actual steps taken. Perplexity's source citations and ChatGPT's "Searched 3 sites" disclosure are lightweight versions of this pattern.
          </p>
          <div class="lesson-callout tip">
            <strong>Pro tip:</strong> The confidence summary works best when it is honest about limitations. A system that says "I could not find recent data on this — my answer is based on sources from 2023" is far more trustworthy than one that presents stale information with false confidence. Calibrated uncertainty is a feature, not a liability.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Matching Visibility to Audience</h2>
          <p class="lesson-text">
            The right visibility level depends heavily on who your users are. A consumer product like ChatGPT rightly defaults to minimal visibility — most users want an answer, not a process log. A developer tool like Cursor or Claude Code can show much more because the audience understands and values execution traces. An enterprise compliance tool might need high visibility by regulation, regardless of user preference.
          </p>
          <p class="lesson-text">
            The mistake many teams make is choosing a single visibility level and applying it everywhere. The better approach is <strong>progressive disclosure</strong>: start at the level your median user needs, and let power users drill down. Google's Search Generative Experience does this well — you get a summary answer with cited sources visible, and you can click through to see the full source material. The architecture is deeply multi-agent, but the interface never says the word "agent."
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text"><strong>1.</strong> Audit a product you use that involves AI-generated output. Where does it sit on the visibility spectrum? Would moving it one level in either direction improve the experience? Why or why not?</p>
          <p class="lesson-text"><strong>2.</strong> Design a confidence summary for an AI travel planning agent that has just booked a complex multi-city itinerary. What three pieces of information would you include? What would you put behind an expand/collapse?</p>
          <p class="lesson-text"><strong>3.</strong> Write two versions of a progress indicator for a multi-agent research task: one for a consumer audience and one for an expert audience. How do they differ in language, detail, and structure?</p>
        </div>

        <div class="lesson-practice">
          <h3>Test Your Understanding</h3>
          <div class="practice-q">
            <p>1. What are the five zones of the visibility spectrum for agent systems?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Black Box (no visibility, only final output), Status Only (progress indicators like "Searching..."), Summary (confidence + key steps, details on demand), Step Trace (each agent step visible, expandable detail), Full Log (complete execution trace, every token and call).</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>2. What three pieces of information should "always be shown" as minimum viable visibility in any agentic product?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>(1) What the system is currently doing in plain language, (2) how long it will roughly take, and (3) whether it succeeded or failed. This is the minimum. Additional detail (which sub-agents were involved, sources used, reasoning) should be available on request.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>3. What is the "confidence summary" pattern and what three elements does it include?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>The confidence summary is a compact end-of-task summary that tells users how confident the system is in its output. It includes: (1) a confidence signal ("High confidence — consistent across 4 sources"), (2) a source/step summary ("Searched 12 papers, analyzed 5 in depth"), and (3) an expandable trace for users who want to verify or debug.</p></div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "4-3",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">The Delegation Spectrum</h2>
          <p class="lesson-text">
            In the previous lesson, we explored when and how to surface agent activity. Now we need a more rigorous framework — one you can bring to a product review and use to make defensible design decisions. The <strong>Delegation Spectrum</strong> is a five-level model for deciding how much orchestration detail to surface in your product. Each level represents a different contract between the system and the user about who is in control and how much is visible.
          </p>
          <p class="lesson-text">
            This is not a "more is better" scale. Each level is appropriate for different products, audiences, and risk profiles. The goal is to choose deliberately — and to be able to explain your choice to your team.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Five Levels</h2>
          <div class="lesson-diagram">
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 28px; background: var(--color-surface-alt, #1a1a2e); border-radius: 12px;">
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(231,76,60,0.1); border-left: 4px solid #e74c3c; border-radius: 0 8px 8px 0;">
                <div style="min-width: 48px; height: 48px; background: #e74c3c; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 18px;">1</div>
                <div>
                  <div style="font-weight: 700; color: #e74c3c; font-size: 15px; margin-bottom: 4px;">Silent Delegation</div>
                  <div style="font-size: 13px; color: var(--color-text, #ccc); line-height: 1.5;">System acts autonomously. User sees only the final result. No indication that multiple agents were involved. Example: Google Search ranking (hundreds of models, zero visibility).</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(230,126,34,0.1); border-left: 4px solid #e67e22; border-radius: 0 8px 8px 0;">
                <div style="min-width: 48px; height: 48px; background: #e67e22; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 18px;">2</div>
                <div>
                  <div style="font-weight: 700; color: #e67e22; font-size: 15px; margin-bottom: 4px;">Progress Narration</div>
                  <div style="font-size: 13px; color: var(--color-text, #ccc); line-height: 1.5;">System narrates what it is doing in plain language. User cannot intervene but feels oriented. Example: Perplexity's "Searching..." / "Reading..." / "Writing..." status labels.</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(241,196,15,0.1); border-left: 4px solid #f1c40f; border-radius: 0 8px 8px 0;">
                <div style="min-width: 48px; height: 48px; background: #f1c40f; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1a1a2e; font-size: 18px;">3</div>
                <div>
                  <div style="font-weight: 700; color: #f1c40f; font-size: 15px; margin-bottom: 4px;">Checkpoint Control</div>
                  <div style="font-size: 13px; color: var(--color-text, #ccc); line-height: 1.5;">System pauses at key decision points for user approval. User sees the plan and can redirect before execution continues. Example: GitHub Copilot Workspace showing a proposed plan before generating code.</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(46,204,113,0.1); border-left: 4px solid #2ecc71; border-radius: 0 8px 8px 0;">
                <div style="min-width: 48px; height: 48px; background: #2ecc71; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 18px;">4</div>
                <div>
                  <div style="font-weight: 700; color: #2ecc71; font-size: 15px; margin-bottom: 4px;">Live Trace</div>
                  <div style="font-size: 13px; color: var(--color-text, #ccc); line-height: 1.5;">User can see each agent step as it happens. Expandable detail on each step. Ability to pause, retry, or redirect mid-execution. Example: Devin's task log with real-time updates.</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(52,152,219,0.1); border-left: 4px solid #3498db; border-radius: 0 8px 8px 0;">
                <div style="min-width: 48px; height: 48px; background: #3498db; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 18px;">5</div>
                <div>
                  <div style="font-weight: 700; color: #3498db; font-size: 15px; margin-bottom: 4px;">Full Orchestration</div>
                  <div style="font-size: 13px; color: var(--color-text, #ccc); line-height: 1.5;">User sees the complete agent network: which agents exist, how they connect, what each is doing. User can configure, reorder, or disable agents. Example: LangGraph Studio's visual agent graph editor.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Mapping Levels to Use Cases</h2>
          <p class="lesson-text">
            Each level naturally fits certain product contexts. Here is how to think about the mapping:
          </p>
          <div class="lesson-table">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Best For</th>
                  <th>Audience</th>
                  <th>Risk Profile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 — Silent</strong></td>
                  <td>Commodity features, low-stakes suggestions</td>
                  <td>Mass consumer</td>
                  <td>Low — errors are cheap to fix</td>
                </tr>
                <tr>
                  <td><strong>2 — Narration</strong></td>
                  <td>Search, summarization, creative generation</td>
                  <td>General users</td>
                  <td>Low to medium</td>
                </tr>
                <tr>
                  <td><strong>3 — Checkpoint</strong></td>
                  <td>Code generation, email drafts, data analysis</td>
                  <td>Knowledge workers</td>
                  <td>Medium — outputs are consequential</td>
                </tr>
                <tr>
                  <td><strong>4 — Live Trace</strong></td>
                  <td>Software engineering, complex research, financial analysis</td>
                  <td>Specialists / power users</td>
                  <td>High — errors are costly</td>
                </tr>
                <tr>
                  <td><strong>5 — Full Orchestration</strong></td>
                  <td>Agent development, system configuration, compliance</td>
                  <td>Developers / admins</td>
                  <td>Critical — system-level impact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Decision Criteria for Your Product</h2>
          <p class="lesson-text">
            When choosing a delegation level, evaluate these four dimensions:
          </p>
          <p class="lesson-text">
            <strong>Reversibility.</strong> Can the user undo the agent's output easily? Auto-completing a sentence is trivially reversible (just delete it). Deploying code to production is not. The less reversible the action, the higher the delegation level should be — users need more visibility and control when mistakes are expensive.
          </p>
          <p class="lesson-text">
            <strong>User expertise.</strong> How well does your audience understand the domain the agents operate in? A designer using an AI coding assistant needs more visibility into what the code agent is doing than a developer would. Expertise determines how much context users need to evaluate agent output.
          </p>
          <p class="lesson-text">
            <strong>System reliability.</strong> How often does your pipeline produce correct results? Early-stage systems with lower accuracy need higher visibility so users can catch and correct errors. As reliability improves, you can gradually reduce visibility. Many products launch at Level 3 or 4 and move toward Level 2 as the system matures.
          </p>
          <p class="lesson-text">
            <strong>Task duration.</strong> A sub-second autocomplete needs no visibility. A 20-minute research task needs ongoing status. A multi-hour engineering task needs the ability to intervene, redirect, and monitor. Duration and visibility are directly correlated.
          </p>
          <div class="lesson-callout warning">
            <strong>Common mistake:</strong> Choosing a delegation level based on what the engineering team thinks is cool to show, rather than what users need. Full orchestration views are technically impressive, but they can actively harm the experience for non-technical users. Let user needs drive visibility, not system architecture.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">How to Test the Right Level</h2>
          <p class="lesson-text">
            The delegation level is a hypothesis — you need to validate it with real users. Here is a practical testing approach:
          </p>
          <p class="lesson-text">
            <strong>Build two prototypes</strong> at adjacent levels (e.g., Level 2 and Level 3). Give both to the same users and measure two things: task confidence ("How sure are you this output is correct?") and task efficiency ("How quickly did you get to a usable result?"). The right level maximizes confidence without significantly hurting efficiency.
          </p>
          <p class="lesson-text">
            <strong>Watch for signal mismatch.</strong> If users at Level 2 frequently ask "wait, how did it get that?" — they need more visibility. If users at Level 4 ignore most of the step detail and skip to the output — they need less. The mismatch between what you show and what users engage with is your strongest signal.
          </p>
          <p class="lesson-text">
            <strong>Test failure scenarios specifically.</strong> The true test of a delegation level is not the happy path — it is what happens when the system gets something wrong. Can the user identify the failure? Can they understand where in the pipeline it happened? Can they take corrective action? If not, you need to increase visibility, at least for error states.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text"><strong>1.</strong> Pick a feature in your product (or a product you admire) that uses AI. Using the four decision criteria — reversibility, user expertise, system reliability, and task duration — argue for the appropriate delegation level. Would your team agree? Why or why not?</p>
          <p class="lesson-text"><strong>2.</strong> Design a quick test plan: How would you prototype two adjacent delegation levels for a multi-agent feature? What metrics would you track? What failure scenario would you test?</p>
          <p class="lesson-text"><strong>3.</strong> Consider whether your product should use <em>different</em> delegation levels for different user roles (e.g., admin vs. end user) or different task types. Sketch out a matrix mapping roles and tasks to levels.</p>
        </div>

        <div class="lesson-practice">
          <h3>Test Your Understanding</h3>
          <div class="practice-q">
            <p>1. Name the five levels of the Delegation Spectrum from least to most user control.</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Level 1: Silent Delegation (user sees only final result), Level 2: Progress Narration (system narrates in plain language, no intervention), Level 3: Checkpoint Control (system pauses at key decisions for approval), Level 4: Live Trace (user sees each step, can pause/retry/redirect), Level 5: Full Orchestration (user sees and configures the complete agent network).</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>2. What are the four decision criteria for choosing the right delegation level for a product feature?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>(1) Reversibility — can the user undo the agent's output? Less reversible = higher level needed. (2) User expertise — do users understand the domain? Less expertise = more context needed. (3) System reliability — how often does the pipeline produce correct results? Lower accuracy = higher visibility. (4) Task duration — longer tasks need more visibility and intervention capability.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>3. How do you test whether you've chosen the right delegation level? What are you measuring?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Build two prototypes at adjacent levels (e.g., Level 2 and Level 3) and give both to the same users. Measure task confidence ("How sure are you the output is correct?") and task efficiency ("How quickly did you get a usable result?"). The right level maximizes confidence without significantly hurting efficiency. Watch for signal mismatch: if users at Level 2 ask "how did it get that?" they need more; if users at Level 4 skip to the output, they need less.</p></div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "4-4",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Three Philosophies on Orchestration UI</h2>
          <p class="lesson-text">
            Theory is useful, but nothing teaches multi-agent design like studying products that have shipped it. In this case study, we examine three products that all orchestrate multiple agents to complete complex tasks — and that have chosen radically different approaches to surfacing that orchestration. Each represents a distinct philosophy about user trust, control, and visibility. By studying all three, you will develop a sharper intuition for when each approach works and why.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Devin: The Structured Task Log</h2>
          <p class="lesson-text">
            Devin, developed by Cognition, is an AI software engineer that can take a GitHub issue and autonomously plan, code, test, and deploy a solution. Under the hood, it orchestrates planner agents, coding agents, terminal agents, and browser agents. The orchestration is complex — but the interface tells a surprisingly clean story.
          </p>
          <p class="lesson-text">
            Devin's primary UI is a <strong>structured task log</strong>: a chronological feed of high-level actions with expandable detail. You see entries like "Read the GitHub issue," "Created a plan with 4 steps," "Wrote file auth.py," "Ran tests — 2 passed, 1 failed," "Fixed the failing test." Each entry is a human-readable summary of what an underlying agent did. You can click into any entry to see the raw output — code diffs, terminal output, browser screenshots — but the default view is curated narration.
          </p>
          <p class="lesson-text">
            This sits at <strong>Level 4 (Live Trace)</strong> on our Delegation Spectrum. The key design insight is <em>progressive structure</em>: the log is not a flat list of everything that happened. It is grouped by intent. You can scan the plan-level actions in seconds, then drill into specifics only where you need to. Devin also supports mid-task intervention — you can message the agent, redirect its approach, or reject a step and ask it to try again. This makes the trace feel collaborative rather than passive.
          </p>
          <div class="lesson-callout tip">
            <strong>What Devin gets right:</strong> The task log translates agent actions into <em>human-meaningful</em> narrative. You never see "Agent 3 invoked tool_run_code with parameters {...}." You see "Ran the test suite." This translation layer is the most important — and most undervalued — design work in multi-agent UI.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">AutoGPT: The Verbose Execution Trace</h2>
          <p class="lesson-text">
            AutoGPT was one of the earliest autonomous agent systems to capture public imagination. Its approach to orchestration UI is the opposite of Devin's: <strong>radical transparency</strong>. The interface shows every thought, every tool call, every reasoning step, in near-real-time. You see the agent's internal monologue: "I need to search for information about X. Let me use the web_search tool. The results show... I should now..."
          </p>
          <p class="lesson-text">
            This is <strong>Level 5 (Full Orchestration)</strong> pushed to its extreme. The entire reasoning chain is visible, including dead ends, retries, and self-corrections. For the developer and AI-curious audience that AutoGPT attracted, this was fascinating — watching an AI "think out loud" was the core experience. But as a product design pattern, it has significant limitations.
          </p>
          <p class="lesson-text">
            The verbose trace creates <strong>information overload</strong> for anyone who is not deeply technical. There is no hierarchy — a trivial tool call gets the same visual weight as a critical decision. There is no summarization layer — you must read everything to understand anything. And there is limited intervention capability — you are mostly watching, not collaborating. Users reported "losing track" of what the agent was doing after just a few minutes of output.
          </p>
          <p class="lesson-text">
            AutoGPT's verbosity <em>did</em> serve one purpose exceptionally well: <strong>debugging and learning</strong>. If you wanted to understand how agent reasoning works, or why a task failed, the full trace gave you everything you needed. This is valuable for developers building agent systems — but it is not the right default for end users trying to get work done.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Claude Code: The Minimal Terminal</h2>
          <p class="lesson-text">
            Claude Code takes a third approach: <strong>minimal, trust-based output</strong> in a terminal interface. When Claude Code executes a multi-step task — say, refactoring a module across several files — it shows compact action summaries: which files it is reading, which files it is editing, which commands it is running. The output is terse, technical, and fast-moving. There is no narrative layer, no progress percentage, no thought process. Just actions and results.
          </p>
          <p class="lesson-text">
            This sits at roughly <strong>Level 3 (Checkpoint Control)</strong> — the system shows what it intends to do (file edits, command execution) and pauses for permission at key moments (especially destructive actions). But within approved operations, it streams output without narration. The implicit design philosophy is: <em>the user is a developer; they can read code and terminal output; narration would slow them down.</em>
          </p>
          <p class="lesson-text">
            Claude Code's minimal approach works because of a tight <strong>audience-context fit</strong>. The users are developers, working in a terminal, on code they understand. They do not need the system to explain what "editing auth.py" means — they know that file. The permission checkpoints provide control without adding verbosity. And the raw output (code diffs, command results) is the actual artifact the user cares about.
          </p>
          <div class="lesson-callout warning">
            <strong>The risk of minimalism:</strong> When Claude Code fails in the middle of a complex task, the minimal output can make it hard to understand <em>where</em> in the reasoning chain the failure occurred. The same brevity that feels efficient on the happy path can feel opaque on the error path. This is the core trade-off of Level 2-3 approaches.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Comparison: What Works and Why</h2>
          <div class="lesson-table">
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Devin</th>
                  <th>AutoGPT</th>
                  <th>Claude Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Delegation Level</strong></td>
                  <td>Level 4 — Live Trace</td>
                  <td>Level 5 — Full Orchestration</td>
                  <td>Level 3 — Checkpoint Control</td>
                </tr>
                <tr>
                  <td><strong>Primary UI pattern</strong></td>
                  <td>Structured task log</td>
                  <td>Verbose thought stream</td>
                  <td>Minimal terminal actions</td>
                </tr>
                <tr>
                  <td><strong>Narration layer</strong></td>
                  <td>Human-readable summaries</td>
                  <td>Raw agent reasoning</td>
                  <td>None — actions speak</td>
                </tr>
                <tr>
                  <td><strong>User intervention</strong></td>
                  <td>Mid-task messaging and redirection</td>
                  <td>Limited — mostly observation</td>
                  <td>Permission gates at key steps</td>
                </tr>
                <tr>
                  <td><strong>Error diagnosis</strong></td>
                  <td>Good — step-level trace shows where failure occurred</td>
                  <td>Excellent — full reasoning chain available</td>
                  <td>Moderate — may need to re-run with more logging</td>
                </tr>
                <tr>
                  <td><strong>Target audience</strong></td>
                  <td>Engineering teams</td>
                  <td>AI enthusiasts / developers</td>
                  <td>Individual developers</td>
                </tr>
                <tr>
                  <td><strong>Core strength</strong></td>
                  <td>Balances visibility with usability</td>
                  <td>Maximum transparency</td>
                  <td>Speed and minimal friction</td>
                </tr>
                <tr>
                  <td><strong>Core weakness</strong></td>
                  <td>Narration requires careful curation</td>
                  <td>Overwhelming for non-expert users</td>
                  <td>Opaque when things go wrong</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Synthesis: Choosing Your Philosophy</h2>
          <p class="lesson-text">
            These three products illustrate that there is no universally correct approach to orchestration UI. The right choice depends on your answers to three questions:
          </p>
          <p class="lesson-text">
            <strong>How technical is your audience?</strong> Claude Code can be minimal because developers read code natively. Devin needs narration because even developers benefit from structured summaries of complex multi-step tasks. AutoGPT's verbosity only works for people who are actively studying agent behavior.
          </p>
          <p class="lesson-text">
            <strong>How consequential are the actions?</strong> Devin writes and deploys production code — users need to verify before shipping. Claude Code edits local files — the blast radius is smaller. AutoGPT's early use cases were exploratory — stakes were low, so observation was acceptable.
          </p>
          <p class="lesson-text">
            <strong>Is the user collaborating or supervising?</strong> Devin positions the user as a collaborator who can redirect the agent mid-task. Claude Code positions the user as a supervisor who approves key actions. AutoGPT positions the user as a spectator. The collaboration model determines how much agency the interface needs to provide.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text"><strong>1.</strong> If you were redesigning AutoGPT for a non-technical audience, what would you change? Which elements would you keep, collapse, or remove? Sketch a simplified version of the execution trace.</p>
          <p class="lesson-text"><strong>2.</strong> Devin's narration layer requires someone to define how raw agent actions translate to human-readable summaries. Draft five "translation rules" — e.g., "When the coding agent creates a new file, show: 'Created [filename]'" — for a hypothetical multi-agent product in your domain.</p>
          <p class="lesson-text"><strong>3.</strong> Pick a product idea you are working on (or invent one). Which of these three philosophies — structured trace, verbose log, or minimal output — best fits your users? Write a brief argument for your choice using the three synthesis questions above.</p>
        </div>

        <div class="lesson-practice">
          <h3>Test Your Understanding</h3>
          <div class="practice-q">
            <p>1. At what delegation level does each product sit: Devin, AutoGPT, and Claude Code?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Devin sits at Level 4 (Live Trace) with a structured task log. AutoGPT sits at Level 5 (Full Orchestration) with verbose thought streams. Claude Code sits at Level 3 (Checkpoint Control) with minimal terminal actions and permission gates.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>2. What is the key design insight behind Devin's structured task log that makes it effective?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>The task log translates raw agent actions into human-meaningful narrative. You never see "Agent 3 invoked tool_run_code with parameters {...}" — you see "Ran the test suite." This translation layer is the most important and most undervalued design work in multi-agent UI. The log is also grouped by intent, allowing quick scanning with drill-down on demand.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>3. What three questions should guide your choice of orchestration UI philosophy?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>(1) How technical is your audience? (determines how much raw detail they can parse), (2) How consequential are the actions? (determines how much verification users need), (3) Is the user collaborating or supervising? (determines how much agency the interface needs to provide — redirect capability vs. approve-only vs. observe-only).</p></div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "4-5",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Project: Orchestration Dashboard</h2>
          <p class="lesson-text">
            You are the design lead for an AI-powered research platform called <strong>Deepfield</strong>. The platform helps analysts at consulting firms conduct market research by orchestrating a pipeline of specialized agents: a <em>Query Planner</em> that decomposes research questions, a <em>Source Hunter</em> that finds relevant reports and data, a <em>Data Extractor</em> that pulls key figures from documents, a <em>Synthesizer</em> that combines findings into coherent analysis, and a <em>Fact Checker</em> that validates claims against sources.
          </p>
          <p class="lesson-text">
            A typical research task takes 5-15 minutes and involves 20-50 individual agent actions. Analysts currently have no visibility into what the pipeline is doing — they submit a question and wait for a finished report. The team has received consistent feedback: "I don't trust the output because I can't see how it got there," and "When the report is wrong, I have no idea which part of the process failed."
          </p>
          <p class="lesson-text">
            Your job is to design an <strong>orchestration dashboard</strong> — a monitoring and intervention UI that gives analysts the right level of visibility into the multi-agent pipeline without overwhelming them with system internals.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Project Brief</h2>
          <div class="lesson-callout">
            <p class="lesson-text"><strong>Product:</strong> Deepfield — AI research platform for consulting analysts</p>
            <p class="lesson-text"><strong>Users:</strong> Strategy consultants and market analysts. Smart, time-pressured, not technical. They understand research methodology but not AI architecture.</p>
            <p class="lesson-text"><strong>Pipeline agents:</strong></p>
            <p class="lesson-text" style="padding-left: 16px;">1. <strong>Query Planner</strong> — Breaks the research question into 3-7 sub-questions<br>
            2. <strong>Source Hunter</strong> — Searches databases, news, reports, and academic papers<br>
            3. <strong>Data Extractor</strong> — Pulls quantitative data, quotes, and key findings from sources<br>
            4. <strong>Synthesizer</strong> — Combines extracted data into analysis sections<br>
            5. <strong>Fact Checker</strong> — Cross-references claims with original sources, flags inconsistencies</p>
            <p class="lesson-text"><strong>Task duration:</strong> 5-15 minutes</p>
            <p class="lesson-text"><strong>Core design challenge:</strong> Build trust and enable intervention without requiring users to understand agent architecture</p>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Part 1: Define What Needs to Be Visible</h2>
          <p class="lesson-text">
            Before you sketch a single pixel, you need to answer the fundamental question: <em>what does the analyst actually need to see?</em> Apply the Delegation Spectrum framework from Lesson 4-3 and the visibility principles from Lesson 4-2.
          </p>
          <p class="lesson-text">
            Start with the four decision criteria. <strong>Reversibility:</strong> the research output will be used in client presentations — errors are embarrassing and hard to retract. This pushes toward higher visibility. <strong>User expertise:</strong> analysts understand research methodology deeply but do not understand AI systems — they need the pipeline translated into research language, not agent language. <strong>System reliability:</strong> the pipeline is accurate roughly 85% of the time — good but not good enough to hide behind a black box. <strong>Task duration:</strong> 5-15 minutes is long enough that users will context-switch away, then come back to check progress.
          </p>
          <p class="lesson-text">
            Based on these criteria, <strong>Level 3 (Checkpoint Control)</strong> with selective <strong>Level 4 (Live Trace)</strong> elements is the right target. The dashboard should show a narrated, stage-level view of progress with the ability to drill into details. It should pause for user input at one critical checkpoint: after the Query Planner produces sub-questions, before the Source Hunter begins searching. This gives analysts control over the research direction without requiring them to approve every step.
          </p>
          <div class="lesson-callout tip">
            <strong>Key insight:</strong> Name the pipeline stages in <em>research language</em>, not agent language. "Planning research approach" instead of "Query Planner agent running." "Gathering sources" instead of "Source Hunter executing tool calls." The language you choose determines whether users feel like they are supervising a research process or monitoring a computer system.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Part 2: Design the Agent Activity Feed</h2>
          <p class="lesson-text">
            The activity feed is the core of your dashboard. It needs to serve three audiences simultaneously: the analyst who glances at it for 2 seconds to check progress, the analyst who wants to understand what sources were used, and the analyst who needs to figure out why a specific claim in the report is wrong.
          </p>
          <p class="lesson-text">
            Design the feed with <strong>three layers of progressive disclosure:</strong>
          </p>
          <p class="lesson-text">
            <strong>Layer 1 — Stage Progress (always visible).</strong> A horizontal pipeline showing five stages with status indicators: completed (checkmark), in progress (animated), pending (gray), or failed (red). Each stage shows a one-line summary: "Gathered 23 sources across 4 databases" or "Extracted data from 18 of 23 sources." This is what users see at a glance.
          </p>
          <p class="lesson-text">
            <strong>Layer 2 — Step Feed (visible by default, scrollable).</strong> Below the pipeline, a chronological feed of individual steps within the current stage. Each step is a single line: an icon, a plain-language description, and a timestamp. "Found 12 reports in McKinsey database" or "Extracted revenue growth figure from Gartner 2025 report." Keep entries under 80 characters. This is what users scan when they want to follow along.
          </p>
          <p class="lesson-text">
            <strong>Layer 3 — Step Detail (on click).</strong> Clicking any step opens a detail panel showing the actual content: the sources found, the data extracted, the synthesis reasoning. For the Data Extractor, this means showing the original source passage alongside the extracted data point. For the Fact Checker, this means showing the claim, the supporting evidence, and any conflicts. This is what users need when they are verifying or debugging.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Part 3: Create Intervention and Override Controls</h2>
          <p class="lesson-text">
            A dashboard that only shows information is a monitoring tool. A dashboard that lets users <em>act</em> is a collaboration tool. Design intervention points that give analysts real control without requiring them to understand the agent architecture.
          </p>
          <p class="lesson-text">
            <strong>The research direction checkpoint.</strong> After the Query Planner produces sub-questions, show them to the analyst in an editable list. They can reword, remove, add, or reorder sub-questions before the Source Hunter begins. This is the highest-leverage intervention point — it shapes the entire downstream pipeline. Design it as a clear "Review and Approve" step, not a modal that can be dismissed. Make it feel like a research kickoff, not a system prompt.
          </p>
          <p class="lesson-text">
            <strong>Source rejection.</strong> In the step feed, any source can be flagged with a "Skip this source" action. If an analyst sees the Source Hunter pulling from a competitor's biased report, they can exclude it before the Extractor processes it. This is a lightweight intervention that does not interrupt the pipeline — it just narrows the input.
          </p>
          <p class="lesson-text">
            <strong>The "Dig Deeper" and "Move On" controls.</strong> At the end of each stage, offer two actions: "Dig Deeper" (ask the agent to expand its search or analysis in this area) and "Move On" (proceed to the next stage). This gives analysts pacing control. If the source results look thin, they can ask for more. If they look comprehensive, they can skip ahead.
          </p>
          <p class="lesson-text">
            <strong>The emergency stop.</strong> A persistent "Stop and show what you have" button that halts the pipeline and assembles a partial report from whatever has been completed. This is critical for time-pressured analysts who realize mid-task that they need results now, even if incomplete.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Part 4: Handle Failure at Scale</h2>
          <p class="lesson-text">
            In a five-agent pipeline processing dozens of sources, failures are not exceptional — they are routine. A database might be down. A PDF might be malformed. The Fact Checker might find a contradiction. The design must handle failure as a <em>normal state</em>, not an edge case.
          </p>
          <p class="lesson-text">
            <strong>Distinguish failure severity.</strong> Not all failures are equal. A single source failing to load is minor — the pipeline can continue with other sources. The Synthesizer producing contradictory conclusions is major — the output cannot be trusted. Design three failure levels: <em>warning</em> (shown in the step feed, pipeline continues), <em>error</em> (stage paused, analyst must decide whether to continue or retry), and <em>critical</em> (pipeline halted, analyst must intervene).
          </p>
          <p class="lesson-text">
            <strong>Make failures actionable.</strong> Every error message should include what went wrong, what impact it has on the output, and what the user can do. "3 of 23 sources could not be accessed (Gartner, Forrester, IBISWorld). The report will not include data from these sources. You can retry, proceed without them, or add alternative sources." Never show a generic "Something went wrong" — always show the specific failure and the available actions.
          </p>
          <p class="lesson-text">
            <strong>Aggregate failures intelligently.</strong> If 15 sources fail in a row, do not show 15 separate error messages. Show one: "15 sources could not be accessed — this may indicate a connectivity issue. Retry all?" Batching failures respects the analyst's attention and prevents error fatigue.
          </p>
          <div class="lesson-callout warning">
            <strong>Design for the worst case:</strong> In your prototype, simulate a scenario where the Fact Checker flags 40% of the Synthesizer's claims as unsupported. What does that look like in the dashboard? How does the analyst triage which claims to investigate? This is where orchestration dashboards truly earn their value — not on the happy path, but in the messy middle.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Deliverables Checklist</h2>
          <div class="lesson-checklist">
            <div class="lesson-check-item">A pipeline stage map showing all 5 agents, their inputs/outputs, and the user intervention points between them</div>
            <div class="lesson-check-item">A high-fidelity mockup of the orchestration dashboard showing the stage progress bar, the step activity feed, and the detail panel</div>
            <div class="lesson-check-item">The "Review and Approve" checkpoint screen for the research sub-questions</div>
            <div class="lesson-check-item">An intervention controls specification: what each control does, when it appears, and how it affects the pipeline</div>
            <div class="lesson-check-item">Three failure state designs: warning (minor), error (stage-level), and critical (pipeline-halting)</div>
            <div class="lesson-check-item">A failure aggregation design showing how bulk failures are batched and presented</div>
            <div class="lesson-check-item">A written rationale (one page) explaining your delegation level choices using the framework from Lesson 4-3</div>
          </div>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text"><strong>1.</strong> Before you start designing, write down three assumptions you are making about what analysts need to see. How would you validate each assumption? What user research method would give you the fastest signal?</p>
          <p class="lesson-text"><strong>2.</strong> The "emergency stop" button is easy to add but has complex implications — how do you assemble a coherent partial report from an incomplete pipeline? Write a brief spec for how the system should handle a mid-pipeline stop at each of the five stages.</p>
          <p class="lesson-text"><strong>3.</strong> Imagine Deepfield grows to support 10 concurrent research tasks. How does the dashboard need to change? Sketch a multi-task monitoring view that lets analysts track several pipelines at once without losing the detail available in the single-task view.</p>
        </div>

        <div class="lesson-practice">
          <h3>Test Your Understanding</h3>
          <div class="practice-q">
            <p>1. The Deepfield project brief specifies Level 3 (Checkpoint Control) with selective Level 4 elements. What specific evidence from the four decision criteria supports this choice?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Reversibility: output goes into client presentations, errors are hard to retract (pushes toward higher visibility). User expertise: analysts understand research methodology but not AI (need research language, not agent language). System reliability: 85% accuracy — good but not enough for a black box. Task duration: 5-15 minutes, long enough for context-switching away and back.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>2. Why should the pipeline stages be named in "research language" rather than "agent language"?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Because the users are consultants and analysts, not engineers. "Planning research approach" is meaningful to them; "Query Planner agent running" is not. The language determines whether users feel they're supervising a research process (familiar, trustworthy) or monitoring a computer system (alien, anxiety-inducing). Domain-native language builds trust.</p></div>
            </div>
          </div>
          <div class="practice-q">
            <p>3. What are the three failure severity levels the dashboard should support, and what happens at each?</p>
            <div class="practice-reveal">
              <span class="reveal-btn">Show Answer</span>
              <div class="reveal-body"><p>Warning (minor — shown in the step feed, pipeline continues automatically, e.g., a single source fails to load). Error (stage-level — pipeline pauses, analyst decides whether to continue or retry, e.g., a key database is inaccessible). Critical (pipeline-halting — analyst must intervene, e.g., the Fact Checker flags major contradictions in the synthesis).</p></div>
            </div>
          </div>
        </div>

      </div>
    `
  }
]);
