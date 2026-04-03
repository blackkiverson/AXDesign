registerContent([
  {
    id: "1-1",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">The Loop That Changes Everything</h2>
          <p class="lesson-text">
            Forget what you think you know about designing for AI. Most designers approach AI products as if they're building smarter search bars or fancier autocomplete. But AI agents are fundamentally different. They don't just respond — they <strong>perceive</strong>, <strong>reason</strong>, and <strong>act</strong>. And then they do it again. And again. That loop is the single most important concept in this entire course.
          </p>
          <p class="lesson-text">
            An AI agent is a system that can observe its environment, make decisions based on what it observes, and then take actions that change that environment — triggering a new cycle of observation. This is the <strong>perception-reasoning-action loop</strong>, and understanding it is the difference between designing a chatbot skin and designing a genuinely useful agentic product.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The 3-Part Loop: Perceive, Reason, Act</h2>

          <div class="lesson-diagram">
            <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 32px 16px;">
              <div style="background: var(--color-primary, #6C5CE7); color: #fff; border-radius: 12px; padding: 20px 28px; text-align: center; min-width: 140px;">
                <div style="font-size: 1.6rem; margin-bottom: 4px;">&#128065;</div>
                <strong style="font-size: 1.05rem;">Perceive</strong>
                <div style="font-size: 0.82rem; opacity: 0.85; margin-top: 6px;">Gather inputs: user messages, API data, screen content, tool outputs</div>
              </div>
              <div style="font-size: 1.5rem; color: var(--color-text-secondary, #888);">&#8594;</div>
              <div style="background: var(--color-secondary, #0984E3); color: #fff; border-radius: 12px; padding: 20px 28px; text-align: center; min-width: 140px;">
                <div style="font-size: 1.6rem; margin-bottom: 4px;">&#129504;</div>
                <strong style="font-size: 1.05rem;">Reason</strong>
                <div style="font-size: 0.82rem; opacity: 0.85; margin-top: 6px;">Interpret context, weigh options, form a plan of action</div>
              </div>
              <div style="font-size: 1.5rem; color: var(--color-text-secondary, #888);">&#8594;</div>
              <div style="background: var(--color-accent, #00B894); color: #fff; border-radius: 12px; padding: 20px 28px; text-align: center; min-width: 140px;">
                <div style="font-size: 1.6rem; margin-bottom: 4px;">&#9889;</div>
                <strong style="font-size: 1.05rem;">Act</strong>
                <div style="font-size: 0.82rem; opacity: 0.85; margin-top: 6px;">Execute: call APIs, write code, send messages, modify files</div>
              </div>
            </div>
            <div style="text-align: center; padding: 0 16px 16px;">
              <div style="display: inline-block; border: 2px dashed var(--color-border, #ccc); border-radius: 24px; padding: 8px 24px; font-size: 0.85rem; color: var(--color-text-secondary, #888);">
                &#128260; The output of <strong>Act</strong> feeds back into <strong>Perceive</strong> &mdash; the loop continues
              </div>
            </div>
          </div>

          <p class="lesson-text">
            <strong>Perceive:</strong> The agent takes in information. This could be a user's prompt, the contents of a file it just read, an error message from an API it called, or data from a sensor. Perception is not passive — agents often actively seek information by calling tools, browsing the web, or reading documents.
          </p>
          <p class="lesson-text">
            <strong>Reason:</strong> The agent processes what it perceived. It evaluates what it knows, considers its goal, and decides what to do next. This is where the LLM does the heavy lifting — interpreting ambiguity, weighing trade-offs, and forming a plan. The quality of reasoning determines the quality of the agent.
          </p>
          <p class="lesson-text">
            <strong>Act:</strong> The agent executes. It might write a line of code, send an email, call an API, create a file, or ask the user a clarifying question. The critical insight: the result of that action becomes new input for the next perception step. The agent sees what happened and adapts.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Agents vs. Simple Tools</h2>
          <p class="lesson-text">
            A traditional AI tool is a <strong>one-shot transaction</strong>. You give it an input, it gives you an output, done. Think of Google Translate: text in, translation out. Or a simple image generator: prompt in, image out. There's no loop. No adaptation. No multi-step reasoning.
          </p>
          <p class="lesson-text">
            An agent, by contrast, operates in <strong>multiple turns against the world</strong>. When Claude Code is fixing a bug, it reads your code, forms a hypothesis, makes an edit, runs the tests, sees the test fail, reads the error, revises its approach, edits again, runs the tests again — and keeps going until the tests pass. That's agency.
          </p>
          <div class="lesson-callout tip">
            <strong>Key distinction:</strong> A tool transforms input into output. An agent pursues a goal through a series of observations and actions, adjusting its approach as it goes. The loop is what makes it an agent.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Why Loops Change Everything for UX</h2>
          <p class="lesson-text">
            If you've only designed for request-response systems, agentic loops will break your assumptions. Here's why:
          </p>
          <p class="lesson-text">
            <strong>Time becomes unpredictable.</strong> A one-shot tool returns in milliseconds or seconds. An agent loop might take 30 seconds or 30 minutes. You can't show a spinner and call it done — you need to design for sustained engagement during long-running tasks.
          </p>
          <p class="lesson-text">
            <strong>Intermediate states are visible.</strong> Users can see the agent working — reading files, making decisions, hitting errors. These intermediate states are either a trust-building feature or a confusing mess, depending on how you design them.
          </p>
          <p class="lesson-text">
            <strong>Control becomes a spectrum.</strong> When do you let the agent keep going? When do you ask the user to confirm? When do you pause for approval? These are design decisions that don't exist in one-shot tools.
          </p>
          <p class="lesson-text">
            <strong>Errors compound.</strong> In a one-shot tool, a bad output is obvious and easily discarded. In an agent loop, a wrong decision on step 3 might not surface until step 12. Designing for error recovery in multi-step systems is a fundamentally different challenge.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Mental Model: Chatbot vs. Contractor</h2>
          <p class="lesson-text">
            Here's a mental model that will serve you throughout this course. Stop thinking of AI agents as chatbots. Start thinking of them as <strong>contractors</strong>.
          </p>
          <p class="lesson-text">
            A <strong>chatbot</strong> is like a reference librarian. You ask a question, they give you an answer. The conversation is the product. You're always in the driver's seat. The UX is about making that conversation smooth.
          </p>
          <p class="lesson-text">
            A <strong>contractor</strong> is someone you hire to do a job. You give them a brief, they go away and work, they come back with results (or questions). You're not managing every keystroke — you're managing outcomes. The UX is about delegation, oversight, and trust.
          </p>
          <div class="lesson-callout">
            Think about it this way: when you hire a contractor to renovate your kitchen, you don't stand behind them telling them which nail to hammer. You set expectations, check in at milestones, and review the result. That's the mental model for designing agentic UX. Your job as a designer is to build the scaffolding for that relationship.
          </div>
          <p class="lesson-text">
            Products like Cursor, Claude Code, and Devin are already operating in contractor territory. Users give high-level instructions ("refactor this module to use the new API") and the agent handles the details. The UX patterns for these products look nothing like a chat window — and that's the point.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text">Think about these questions before moving on:</p>
          <ol>
            <li class="lesson-text">Pick an AI product you use regularly. Can you identify the perception-reasoning-action loop? How many loops does it typically run per task?</li>
            <li class="lesson-text">Think about a frustrating experience you've had with an AI tool. Was the frustration caused by the lack of a loop (one-shot limitations) or by a poorly designed loop (agent going off-track)?</li>
            <li class="lesson-text">For a product you're currently designing, where does it sit on the chatbot-to-contractor spectrum? Would your users benefit from more agency — or less?</li>
          </ol>
        </div>

      </div>
    `
  },
  {
    id: "1-2",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Not All AI Is Created Equal</h2>
          <p class="lesson-text">
            One of the biggest mistakes designers make is treating all AI products the same. A single-turn chatbot and a fully autonomous agent require completely different UX approaches — different information architectures, different interaction patterns, different trust models. To design well, you need to know exactly where your product sits on the <strong>agentic spectrum</strong>.
          </p>
          <p class="lesson-text">
            The spectrum runs from fully human-controlled to fully AI-controlled. Every AI product falls somewhere on this line, and its position determines almost every UX decision you'll make.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The 4 Levels of Agency</h2>

          <div class="lesson-diagram">
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--color-border, #ddd);">
                    <th style="padding: 12px 16px; text-align: left; width: 18%;">Level</th>
                    <th style="padding: 12px 16px; text-align: left; width: 22%;">How It Works</th>
                    <th style="padding: 12px 16px; text-align: left; width: 30%;">Real Examples</th>
                    <th style="padding: 12px 16px; text-align: left; width: 30%;">UX Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--color-border, #eee);">
                    <td style="padding: 12px 16px;"><strong style="color: var(--color-primary, #6C5CE7);">1. Chatbot</strong></td>
                    <td style="padding: 12px 16px;">Single-turn Q&A. User asks, AI responds. No tool use, no multi-step.</td>
                    <td style="padding: 12px 16px;">Early ChatGPT, customer support bots, Siri (basic queries)</td>
                    <td style="padding: 12px 16px;">Conversation quality, response speed, prompt clarity</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-border, #eee); background: var(--color-surface, rgba(0,0,0,0.02));">
                    <td style="padding: 12px 16px;"><strong style="color: var(--color-secondary, #0984E3);">2. Copilot</strong></td>
                    <td style="padding: 12px 16px;">AI suggests, human decides. Inline assistance within human workflow.</td>
                    <td style="padding: 12px 16px;">GitHub Copilot, Gmail Smart Compose, Figma AI, Notion AI</td>
                    <td style="padding: 12px 16px;">Suggestion quality, accept/reject speed, non-disruption</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-border, #eee);">
                    <td style="padding: 12px 16px;"><strong style="color: var(--color-accent, #00B894);">3. Multi-Step</strong></td>
                    <td style="padding: 12px 16px;">AI executes multi-step tasks with human checkpoints. Uses tools.</td>
                    <td style="padding: 12px 16px;">Claude with tools, ChatGPT with Code Interpreter, Cursor Composer</td>
                    <td style="padding: 12px 16px;">Progress visibility, checkpoint design, error recovery</td>
                  </tr>
                  <tr style="background: var(--color-surface, rgba(0,0,0,0.02));">
                    <td style="padding: 12px 16px;"><strong style="color: var(--color-warning, #E17055);">4. Autonomous</strong></td>
                    <td style="padding: 12px 16px;">AI runs independently for extended periods. Minimal human oversight.</td>
                    <td style="padding: 12px 16px;">Devin, Claude Code (headless), Auto-GPT, AI sales development reps</td>
                    <td style="padding: 12px 16px;">Trust calibration, audit trails, guardrails, outcome review</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="margin-top: 16px; padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--color-text-secondary, #888);">
                <span style="display:inline-block;width:60px;height:6px;border-radius:3px;background:linear-gradient(to right, var(--color-primary,#6C5CE7), var(--color-warning,#E17055));"></span>
                <span>Human control &nbsp;&#8594;&nbsp; AI autonomy</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Where Major Products Sit</h2>
          <p class="lesson-text">
            Let's map some products you likely use to the spectrum. Notice how products from the same company can sit at different levels:
          </p>
          <p class="lesson-text">
            <strong>Google:</strong> Google Search with AI Overviews is Level 1 (chatbot — generates a summary, done). Google Docs "Help me write" is Level 2 (copilot — suggests text you accept or reject). Google's NotebookLM is pushing into Level 3 territory as it synthesizes across sources.
          </p>
          <p class="lesson-text">
            <strong>Anthropic:</strong> Claude in a basic conversation is Level 1. Claude with tool use and artifacts moves to Level 3. Claude Code running in headless mode on a CI pipeline is Level 4.
          </p>
          <p class="lesson-text">
            <strong>Coding tools:</strong> GitHub Copilot's inline suggestions are Level 2. Cursor's Composer mode is Level 3. Devin operating independently on a Jira ticket is Level 4.
          </p>
          <div class="lesson-callout tip">
            <strong>Watch for this:</strong> Many products are moving up the spectrum over time. GitHub Copilot started at Level 2 and is adding Level 3 features (multi-file edits, workspace agents). Design for where your product is heading, not just where it is today.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">How Autonomy Level Shapes UX</h2>
          <p class="lesson-text">
            The level of autonomy directly determines your core UX patterns:
          </p>
          <p class="lesson-text">
            At <strong>Level 1 (Chatbot)</strong>, your primary design challenge is conversational clarity. Response formatting, follow-up suggestions, and making the AI's capabilities discoverable. The user is always in control and the stakes are low.
          </p>
          <p class="lesson-text">
            At <strong>Level 2 (Copilot)</strong>, your challenge is integration with existing workflows. The AI has to suggest without disrupting. Ghost text, inline diffs, accept/reject with a single keystroke. Speed is critical — if a suggestion takes 2 seconds, it's useless because the human has already moved on.
          </p>
          <p class="lesson-text">
            At <strong>Level 3 (Multi-Step)</strong>, you're designing for delegation with oversight. Progress indicators for long tasks, meaningful checkpoints where users can review and redirect, clear rollback mechanisms, and transparent reasoning. This is where most of the interesting design work is happening right now.
          </p>
          <p class="lesson-text">
            At <strong>Level 4 (Autonomous)</strong>, the UX shifts to monitoring and review. Dashboards, audit logs, outcome summaries, and escalation flows when the agent is stuck or uncertain. You're designing mission control, not a chat window.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Choosing the Right Level</h2>
          <p class="lesson-text">
            More autonomy is not always better. The right level depends on three factors:
          </p>
          <p class="lesson-text">
            <strong>1. Stakes.</strong> How bad is it if the AI gets it wrong? Suggesting a code completion (Level 2) has low stakes — the developer sees it immediately and can reject it. Autonomously deploying code to production (Level 4) has very high stakes. Match autonomy to risk tolerance.
          </p>
          <p class="lesson-text">
            <strong>2. Predictability.</strong> How well-defined is the task? Formatting a document is highly predictable — great for Level 3 or 4. Creative strategy work is unpredictable — better suited for Level 1 or 2 where the human stays closely involved.
          </p>
          <p class="lesson-text">
            <strong>3. User trust maturity.</strong> New users need lower autonomy levels to build confidence. Power users who've calibrated their expectations can handle higher autonomy. Consider progressive disclosure of autonomy — start users at Level 2 and let them unlock Level 3 and 4 as they gain experience.
          </p>
          <div class="lesson-callout warning">
            <strong>Common mistake:</strong> Shipping a Level 4 experience to users who expect Level 2. When users think they're getting a copilot but the AI starts taking autonomous actions, trust collapses immediately. Always be explicit about the autonomy level.
          </div>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text">Think about these questions before moving on:</p>
          <ol>
            <li class="lesson-text">Map 3-5 AI products you use regularly onto the 4-level spectrum. Were any of them surprising to place?</li>
            <li class="lesson-text">Think about a product that feels like it's at the wrong autonomy level — either too autonomous or not autonomous enough. What would you change?</li>
            <li class="lesson-text">For your current or next project, which level is the right starting point? How might you design a path for users to move up the spectrum over time?</li>
          </ol>
        </div>

      </div>
    `
  },
  {
    id: "1-3",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Two Philosophies, One Problem</h2>
          <p class="lesson-text">
            GitHub Copilot and Devin are both AI coding tools. They both use large language models. They both aim to make developers more productive. But they represent fundamentally different design philosophies — and studying them side by side reveals the most important decision in agentic UX: <strong>how much control do you give the human?</strong>
          </p>
          <p class="lesson-text">
            GitHub Copilot is the <strong>copilot model</strong> — AI assists within the human's workflow, suggesting code as you type. Devin is the <strong>autopilot model</strong> — AI operates independently, taking a task description and working through it autonomously. Neither approach is inherently better. But each demands a completely different UX strategy.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">GitHub Copilot: The Human Stays in the Driver's Seat</h2>
          <p class="lesson-text">
            Copilot's core interaction is deceptively simple: as you type code, gray "ghost text" appears with a suggested completion. Press Tab to accept. Press Escape (or just keep typing) to reject. That's it.
          </p>
          <p class="lesson-text">
            But the design genius is in what that simplicity enables. The developer <strong>never loses context</strong>. They're always looking at their code, in their editor, with their cursor right where they left it. The suggestion is a whisper, not a shout. And critically, the developer evaluates every single line before it enters the codebase.
          </p>
          <p class="lesson-text">
            The design principles at work: <strong>minimal disruption</strong> (ghost text doesn't move your cursor or reflow the page), <strong>instant evaluation</strong> (you can read the suggestion in-place), <strong>zero-cost rejection</strong> (ignoring a suggestion costs nothing), and <strong>preserved flow state</strong> (the developer stays in their creative zone).
          </p>
          <p class="lesson-text">
            Copilot also has a chat panel and multi-file edit features, but its bread and butter remains that inline ghost text. It succeeded because it understood that developers value control and flow above raw capability.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Devin: The AI Works Independently</h2>
          <p class="lesson-text">
            Devin takes a completely different approach. You give Devin a task — "Fix the authentication bug in issue #247" or "Add dark mode support to the settings page" — and it goes to work. It reads the codebase, forms a plan, writes code, runs tests, debugs errors, and delivers a pull request. The developer isn't watching every keystroke. They're reviewing outcomes.
          </p>
          <p class="lesson-text">
            Devin's UX centers around a <strong>workspace view</strong> where you can see what the agent is doing: which files it's reading, what commands it's running, what it's thinking. You can intervene at any time with a message, but the default mode is hands-off. It's closer to assigning a task to a junior developer than to pair programming.
          </p>
          <p class="lesson-text">
            The design challenges are entirely different from Copilot's. Devin needs to communicate <strong>what it's doing and why</strong> without requiring constant attention. It needs <strong>good judgment about when to ask for help</strong> versus when to push forward. And it needs to produce <strong>auditable output</strong> that a human can review efficiently after the fact.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Side-by-Side Comparison</h2>

          <div class="lesson-table">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
              <thead>
                <tr style="border-bottom: 2px solid var(--color-border, #ddd);">
                  <th style="padding: 12px 16px; text-align: left; width: 28%;">Dimension</th>
                  <th style="padding: 12px 16px; text-align: left; width: 36%;">GitHub Copilot</th>
                  <th style="padding: 12px 16px; text-align: left; width: 36%;">Devin</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--color-border, #eee);">
                  <td style="padding: 10px 16px;"><strong>Autonomy level</strong></td>
                  <td style="padding: 10px 16px;">Level 2 — Copilot</td>
                  <td style="padding: 10px 16px;">Level 4 — Autonomous</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-border, #eee); background: var(--color-surface, rgba(0,0,0,0.02));">
                  <td style="padding: 10px 16px;"><strong>Primary interaction</strong></td>
                  <td style="padding: 10px 16px;">Inline ghost-text suggestions</td>
                  <td style="padding: 10px 16px;">Task assignment via chat</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-border, #eee);">
                  <td style="padding: 10px 16px;"><strong>Human role</strong></td>
                  <td style="padding: 10px 16px;">Driver (AI is passenger)</td>
                  <td style="padding: 10px 16px;">Manager (AI is worker)</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-border, #eee); background: var(--color-surface, rgba(0,0,0,0.02));">
                  <td style="padding: 10px 16px;"><strong>Feedback loop</strong></td>
                  <td style="padding: 10px 16px;">Per-line, instant</td>
                  <td style="padding: 10px 16px;">Per-task, async</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-border, #eee);">
                  <td style="padding: 10px 16px;"><strong>Error cost</strong></td>
                  <td style="padding: 10px 16px;">Low — bad suggestion is ignored</td>
                  <td style="padding: 10px 16px;">Higher — may need to undo many steps</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-border, #eee); background: var(--color-surface, rgba(0,0,0,0.02));">
                  <td style="padding: 10px 16px;"><strong>Trust model</strong></td>
                  <td style="padding: 10px 16px;">Trust builds per-suggestion</td>
                  <td style="padding: 10px 16px;">Trust builds per-task outcome</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px;"><strong>Best for</strong></td>
                  <td style="padding: 10px 16px;">Accelerating experienced developers</td>
                  <td style="padding: 10px 16px;">Offloading well-defined tasks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Design Implications</h2>
          <p class="lesson-text">
            The copilot model requires designing for <strong>speed and unobtrusiveness</strong>. Every millisecond of latency matters because the suggestion competes with the human's own typing. The UI must be nearly invisible — if you're noticing the interface, it's too heavy.
          </p>
          <p class="lesson-text">
            The autopilot model requires designing for <strong>transparency and reviewability</strong>. Since the human isn't watching every step, the agent needs to leave a clear trail. Devin shows a timeline of actions, diffs of changes, and test results. The review experience after the task is just as important as the task assignment experience.
          </p>
          <div class="lesson-callout">
            <strong>The key insight:</strong> Copilot optimizes for the <em>during</em> — making the in-the-moment experience seamless. Autopilot optimizes for the <em>before</em> (clear task specification) and <em>after</em> (efficient review and approval). These are fundamentally different design briefs.
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">When to Choose Which</h2>
          <p class="lesson-text">
            Choose the <strong>copilot model</strong> when: the user is an expert who wants to stay in control, the task requires continuous creative judgment, errors are cheap to fix in the moment, and speed of the human-AI collaboration matters more than full automation.
          </p>
          <p class="lesson-text">
            Choose the <strong>autopilot model</strong> when: the task is well-defined and repeatable, the user wants to delegate and move on to other work, the agent can be given clear success criteria, and there's a reliable review/approval step before results go live.
          </p>
          <p class="lesson-text">
            Many products are wisely offering <strong>both modes</strong>. Cursor gives you Copilot-style tab completions AND an autonomous Composer that can refactor across files. Claude Code lets you ask a quick question (copilot-ish) or kick off a complex task and let it run (autonomous). Designing for graceful transitions between modes is an emerging and critical UX challenge.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text">Think about these questions before moving on:</p>
          <ol>
            <li class="lesson-text">If you were redesigning Devin's workspace view, what information would you prioritize to help developers trust the autonomous work?</li>
            <li class="lesson-text">Can you think of a non-coding product that would benefit from offering both copilot and autopilot modes? Sketch what the transition between modes might look like.</li>
          </ol>
        </div>

      </div>
    `
  },
  {
    id: "1-4",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">Your Design Playbook Needs an Update</h2>
          <p class="lesson-text">
            If you've been designing digital products for any length of time, you have a well-developed intuition for how interfaces should work. Responsive layouts, loading states, error messages, form validation — you've got patterns for all of it. But agentic AI systems break four fundamental assumptions that underpin most of those patterns.
          </p>
          <p class="lesson-text">
            These aren't edge cases. They're <strong>core challenges</strong> that show up in every agentic product. Understanding them now will save you from designing beautiful interfaces that completely fail in practice.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Four Core Challenges</h2>

          <div class="lesson-grid">

            <div class="lesson-card">
              <span class="lesson-label" style="color: var(--color-primary, #6C5CE7); font-weight: 600;">Challenge 1</span>
              <h3 style="margin: 8px 0 12px; font-size: 1.15rem;">Latency</h3>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>The problem:</strong> Traditional UX assumes responses in under 3 seconds. Agentic tasks routinely take 30 seconds, 5 minutes, or even hours. A standard loading spinner doesn't cut it when the agent is running for 10 minutes.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>What breaks:</strong> Users lose confidence. They don't know if the system is working or stuck. They're tempted to retry or abandon. The classic "perceived performance" tricks (skeleton screens, progress bars) were designed for seconds, not minutes.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>Design response:</strong> Show a live activity feed of what the agent is doing. Use meaningful progress indicators (not fake percentage bars). Let users do other things while the agent works — this is why Devin and Claude Code show a running log. Notify users when the task completes, like a build pipeline notification.
              </p>
              <div class="lesson-callout tip" style="font-size: 0.88rem;">
                <strong>Product example:</strong> Claude's artifact panel lets you see the agent building something in real time. Cursor Composer shows file-by-file progress. Both convert wait time into watch time.
              </div>
            </div>

            <div class="lesson-card">
              <span class="lesson-label" style="color: var(--color-secondary, #0984E3); font-weight: 600;">Challenge 2</span>
              <h3 style="margin: 8px 0 12px; font-size: 1.15rem;">Uncertainty</h3>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>The problem:</strong> AI agents are probabilistic. They might be right, they might be subtly wrong, and they usually can't tell you which. Unlike a calculator that gives you the exact answer, an agent's output always carries some degree of uncertainty.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>What breaks:</strong> Users either over-trust (accepting everything without review) or under-trust (rejecting everything because they can't verify). Both extremes destroy the value of the agent. Traditional UX has success and error states — agentic UX needs a "maybe" state.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>Design response:</strong> Surface confidence signals where possible. Use visual hierarchy to distinguish high-confidence actions from uncertain ones. Design for easy verification — show diffs, provide before/after views, link to sources. Make it cheaper to check than to redo.
              </p>
              <div class="lesson-callout tip" style="font-size: 0.88rem;">
                <strong>Product example:</strong> Perplexity shows inline citations so you can verify claims. Cursor shows a diff view for every code change so you can evaluate exactly what changed. Both reduce the cost of verification.
              </div>
            </div>

            <div class="lesson-card">
              <span class="lesson-label" style="color: var(--color-accent, #00B894); font-weight: 600;">Challenge 3</span>
              <h3 style="margin: 8px 0 12px; font-size: 1.15rem;">Irreversibility</h3>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>The problem:</strong> Agents take real actions in the real world — sending emails, modifying files, calling APIs, making purchases. Some of these actions cannot be undone. Traditional UX "undo" patterns assume you can always go back.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>What breaks:</strong> The safety net disappears. A misunderstood instruction can lead to an email sent to the wrong person, code deployed to production, or money transferred to the wrong account. The stakes of a design mistake go from "user is annoyed" to "user suffers real harm."
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>Design response:</strong> Classify actions by reversibility. Auto-approve reversible actions (reading files, drafting content). Require explicit confirmation for irreversible ones (sending emails, making payments, deleting data). Use "dry run" modes that show what would happen without doing it.
              </p>
              <div class="lesson-callout warning" style="font-size: 0.88rem;">
                <strong>Real incident:</strong> Early Auto-GPT implementations gave agents the ability to execute arbitrary code and make API calls with no confirmation step. Users reported agents spending money, sending emails, and modifying systems without approval. The capability was there — the guardrails weren't.
              </div>
            </div>

            <div class="lesson-card">
              <span class="lesson-label" style="color: var(--color-warning, #E17055); font-weight: 600;">Challenge 4</span>
              <h3 style="margin: 8px 0 12px; font-size: 1.15rem;">Trust</h3>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>The problem:</strong> Trust in AI agents isn't binary — it's a spectrum that changes over time, varies by task, and is deeply personal. A user might trust the agent with code formatting but not with database migrations. Traditional UX treats trust as a given after onboarding.
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>What breaks:</strong> One bad experience can reset weeks of trust-building. Users develop superstitions about what the agent can and can't handle. Misaligned trust leads to either micromanagement (checking every action) or negligence (rubber-stamping everything).
              </p>
              <p class="lesson-text" style="font-size: 0.92rem;">
                <strong>Design response:</strong> Design for progressive trust. Start with low-stakes tasks and earn the right to higher autonomy. Show your work — agents that explain their reasoning build trust faster. Create explicit "trust levels" that users can adjust. Track success rates per task type and surface them.
              </p>
              <div class="lesson-callout tip" style="font-size: 0.88rem;">
                <strong>Product example:</strong> Claude Code asks for permission before executing commands and lets users create allow-lists for trusted operations. As the user builds confidence, they can expand the agent's permissions. Trust is built into the permission model.
              </div>
            </div>

          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">These Challenges Interact</h2>
          <p class="lesson-text">
            Here's what makes agentic design genuinely hard: these four challenges don't exist in isolation. They compound.
          </p>
          <p class="lesson-text">
            Long latency <strong>amplifies</strong> uncertainty — the longer you wait, the more you worry about whether the agent is on the right track. Uncertainty makes irreversibility <strong>scarier</strong> — if you're not sure the agent is right, approving an irreversible action feels risky. And all three erode trust.
          </p>
          <p class="lesson-text">
            The best agentic products address all four simultaneously. They show progress (latency), explain reasoning (uncertainty), protect against harm (irreversibility), and build confidence through a track record (trust). Keep all four in mind as a design checklist for every agentic feature you ship.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text">Think about these questions before moving on:</p>
          <ol>
            <li class="lesson-text">Pick an agentic product you use. Score it 1-5 on how well it handles each of the four challenges. Where is the biggest gap?</li>
            <li class="lesson-text">Think of an irreversible action in a product you're designing. What would a "dry run" mode look like for that action?</li>
            <li class="lesson-text">How might you design a "trust dashboard" that shows a user their history with an AI agent — tasks completed, accuracy rate, errors caught?</li>
          </ol>
        </div>

      </div>
    `
  },
  {
    id: "1-5",
    content: `
      <div class="lesson-content">

        <div class="lesson-section">
          <h2 class="lesson-h2">A Cautionary Tale</h2>
          <p class="lesson-text">
            In March 2023, OpenAI launched ChatGPT Plugins — a system that let third-party services connect to ChatGPT, giving it the ability to browse the web, book restaurants, search flights, run code, and more. It was the first major attempt to turn a chatbot into an agent platform. The AI community was electrified. "This is the new app store," people said.
          </p>
          <p class="lesson-text">
            By early 2024, OpenAI quietly sunset plugins and replaced them with a different architecture (GPTs and eventually the Assistants API). Plugins didn't fail because the technology was bad. They failed because <strong>the UX wasn't ready for agency</strong>. And the lessons from that failure are some of the most valuable in this entire course.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">What Went Wrong</h2>
          <p class="lesson-text">
            <strong>Problem 1: Discovery was broken.</strong> With hundreds of plugins available, users had no way to know which ones to enable for a given task. The system relied on the AI to figure out which plugin to use based on the user's prompt — but users didn't know what was possible, so they couldn't write effective prompts. The mental model gap was enormous: users thought they were talking to ChatGPT, but they were actually orchestrating a complex system of third-party tools they couldn't see.
          </p>
          <p class="lesson-text">
            <strong>Problem 2: Reliability was invisible.</strong> When a plugin failed — and they failed often — the user had no way to distinguish between "ChatGPT misunderstood me," "the plugin returned bad data," and "the plugin is down." Error messages were generic. There was no transparency into which plugin was called, what data was sent, or what came back. Users felt like they were debugging a black box.
          </p>
          <p class="lesson-text">
            <strong>Problem 3: Trust was unearned.</strong> Plugins could access real services — booking systems, payment processors, databases. But there was no progressive disclosure of capability. On your first interaction, a plugin could theoretically make a purchase on your behalf. There were no permission tiers, no confirmation flows for high-stakes actions, no way to set spending limits or scope restrictions.
          </p>
          <p class="lesson-text">
            <strong>Problem 4: The conversational interface was wrong.</strong> Plugins tried to shove agentic capabilities into a chat interface designed for Q&A. Booking a flight requires comparing options, adjusting preferences, and reviewing details — tasks that need structured UI, not a text conversation. The chat window became a bottleneck, not an enabler.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Capability-UX Gap</h2>
          <p class="lesson-text">
            The fundamental lesson of ChatGPT Plugins is what I call the <strong>capability-UX gap</strong>. The technology was capable of remarkable things — it could genuinely search the web, query databases, and interact with services. But the user experience couldn't support those capabilities.
          </p>
          <div class="lesson-callout">
            <strong>The gap principle:</strong> When an AI system's capabilities exceed what its UX can support, the result isn't a powerful product — it's a confusing one. Capability without UX is just complexity.
          </div>
          <p class="lesson-text">
            This gap shows up everywhere in early agentic products. Auto-GPT in 2023 could theoretically accomplish complex tasks, but users couldn't understand what it was doing, couldn't intervene effectively, and couldn't trust the results. The capability was real; the usability wasn't.
          </p>
          <p class="lesson-text">
            The products that succeeded — GitHub Copilot, Cursor, Claude with artifacts — did so by carefully matching capability to UX. They didn't ship every possible feature. They shipped the features they could make understandable, controllable, and trustworthy.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Lessons Applied to Modern Products</h2>
          <p class="lesson-text">
            The industry learned from these failures. Look at how modern products address each problem:
          </p>
          <p class="lesson-text">
            <strong>Discovery:</strong> Instead of an open plugin marketplace, Claude and ChatGPT now have curated tool integrations. Claude Code doesn't ask you to pick tools — it knows which ones to use based on context. The AI handles orchestration; the user focuses on goals.
          </p>
          <p class="lesson-text">
            <strong>Reliability:</strong> Modern agentic products show their work. Claude Code displays every command it runs and every file it reads. Perplexity shows its search queries and sources. When something fails, you can see exactly where and why.
          </p>
          <p class="lesson-text">
            <strong>Trust:</strong> Permission systems have become standard. Claude Code asks before running shell commands. Cursor asks before applying edits to files. Autonomy is earned through explicit user approval, not assumed.
          </p>
          <p class="lesson-text">
            <strong>Interface fit:</strong> Products now use the right interface for the job. Claude uses artifacts for rich content alongside chat. Cursor uses inline diffs for code changes. The chat window is one component, not the entire experience.
          </p>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">Your Failure Prevention Checklist</h2>
          <p class="lesson-text">
            Based on the plugin failure and other early agentic product mistakes, here's a checklist to evaluate any agentic feature before you ship it:
          </p>
          <div class="lesson-checklist">
            <div class="lesson-check-item">
              <strong>Mental model clarity:</strong> Can a new user understand what the agent can and cannot do within 30 seconds? If not, your onboarding needs work.
            </div>
            <div class="lesson-check-item">
              <strong>Transparency of action:</strong> Can the user see what the agent did, what data it accessed, and what tools it used? If the agent is a black box, trust will never form.
            </div>
            <div class="lesson-check-item">
              <strong>Graceful failure:</strong> When the agent fails (and it will), does the user understand why and know what to do next? Generic error messages are unacceptable.
            </div>
            <div class="lesson-check-item">
              <strong>Progressive stakes:</strong> Does the system start with low-risk actions and escalate only with explicit permission? Never assume trust on day one.
            </div>
            <div class="lesson-check-item">
              <strong>Interface fit:</strong> Is the interaction pattern appropriate for the complexity of the task? Not everything belongs in a chat window.
            </div>
            <div class="lesson-check-item">
              <strong>Reversibility classification:</strong> Have you classified every agent action as reversible or irreversible, and designed appropriate confirmation flows for each?
            </div>
            <div class="lesson-check-item">
              <strong>User control:</strong> Can the user pause, redirect, or stop the agent at any point? An agent without a stop button is a liability.
            </div>
            <div class="lesson-check-item">
              <strong>Scope boundaries:</strong> Is it clear what the agent will NOT do? Unbounded agents create unbounded anxiety.
            </div>
          </div>
        </div>

        <div class="lesson-section">
          <h2 class="lesson-h2">The Meta-Lesson</h2>
          <p class="lesson-text">
            The biggest takeaway from the plugin era isn't about any specific design pattern. It's about <strong>humility</strong>. The smartest people in AI shipped a product that failed because they underestimated the UX challenge. They assumed that giving users powerful capabilities would be enough. It wasn't.
          </p>
          <div class="lesson-quote">
            The best agentic products don't try to do everything. They do a few things well, with UX that makes those few things understandable, controllable, and trustworthy. Then they expand from there.
          </div>
          <p class="lesson-text">
            That's the design philosophy we'll build on throughout this course. Start narrow. Earn trust. Expand capability only when your UX can support it.
          </p>
        </div>

        <div class="lesson-exercise">
          <h2 class="lesson-h2">Reflect &amp; Apply</h2>
          <p class="lesson-text">Think about these questions before moving on:</p>
          <ol>
            <li class="lesson-text">Run through the 8-point checklist above against an agentic product you're using or building. Where does it score lowest? What would you redesign first?</li>
            <li class="lesson-text">Think about the "capability-UX gap" in your own work. Is there a feature you've shipped (or plan to ship) where the AI capability exists but the UX doesn't fully support it yet?</li>
            <li class="lesson-text">If you were redesigning ChatGPT Plugins from scratch today, what's the single most important UX change you'd make?</li>
          </ol>
        </div>

      </div>
    `
  }
]);
