registerContent([
  {
    id: "2-1",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">We Can't Help It — We See Personalities in Everything</h2>
    <p class="lesson-text">Humans anthropomorphize instinctively. We name our cars, apologize to Roombas, and feel guilty closing a chatbot mid-conversation. This isn't a flaw — it's deeply wired social cognition. And when an AI agent speaks in natural language, takes actions on our behalf, and remembers past conversations, the anthropomorphism goes into overdrive.</p>
    <p class="lesson-text">As a designer, you need to understand this tendency because it's the invisible force shaping every user interaction with your agent. Users don't build mental models of your agent based on your documentation. They build models based on <strong>the first three interactions</strong> — and those models are shockingly sticky.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">How Mental Models Form</h2>
    <p class="lesson-text">When a user first encounters an AI agent, they unconsciously answer three questions: <strong>What is this thing?</strong> (Is it a search engine? A person? A tool?) <strong>What can it do?</strong> (Can it just answer questions, or can it actually do things?) <strong>How smart is it?</strong> (Should I give it simple tasks or complex ones?)</p>
    <p class="lesson-text">The answers they land on — in the first few seconds — become their mental model. And here's the problem: <em>these models are formed from surface cues, not actual capability.</em></p>

    <div class="lesson-diagram">
      <div class="lesson-label" style="text-align:center;margin-bottom:12px;">Mental Model Formation Timeline</div>
      <div style="display:flex;align-items:stretch;gap:0;margin:0 auto;max-width:520px;">
        <div style="flex:1;background:var(--purple-d);border:1px solid rgba(139,127,212,.3);border-radius:10px 0 0 10px;padding:14px;text-align:center;">
          <div style="font-size:11px;color:var(--purple);font-weight:600;margin-bottom:4px;">0–10 seconds</div>
          <div style="font-size:12px;color:var(--muted);">Visual cues: avatar, tone, interface shape → "What is this?"</div>
        </div>
        <div style="flex:1;background:var(--blue-d);border:1px solid rgba(74,144,217,.3);padding:14px;text-align:center;">
          <div style="font-size:11px;color:var(--blue);font-weight:600;margin-bottom:4px;">First interaction</div>
          <div style="font-size:12px;color:var(--muted);">Response quality & speed → "What can it do?"</div>
        </div>
        <div style="flex:1;background:var(--green-d);border:1px solid rgba(86,163,116,.3);border-radius:0 10px 10px 0;padding:14px;text-align:center;">
          <div style="font-size:11px;color:var(--green);font-weight:600;margin-bottom:4px;">First 3 sessions</div>
          <div style="font-size:12px;color:var(--muted);">Consistency & failures → "How much do I trust it?"</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Dangers of Miscalibrated Mental Models</h2>
    <p class="lesson-text">Mental models go wrong in two directions, and both are dangerous:</p>

    <div class="lesson-grid">
      <div class="lesson-card">
        <div class="card-icon" style="color:var(--coral);">&#9650;</div>
        <h3>Over-trust</h3>
        <p>User believes the agent is more capable than it is. They hand it complex tasks, don't check outputs, and get burned when it fails. This is <strong>automation bias</strong> — and it's the default when your agent sounds confident and polished. ChatGPT's fluent prose made millions of people trust fabricated citations.</p>
      </div>
      <div class="lesson-card">
        <div class="card-icon" style="color:var(--blue);">&#9660;</div>
        <h3>Under-trust</h3>
        <p>User believes the agent is less capable than it is. They only use it for trivial tasks, manually redo its work, or abandon it entirely. This happens when early interactions include a visible failure — even a minor one. The user mentally files the agent as "unreliable" and never updates that model.</p>
      </div>
    </div>

    <div class="lesson-callout tip">
      <strong>Design principle:</strong> Your job is not to maximize trust — it's to <em>calibrate</em> it. The user's confidence in the agent should match the agent's actual reliability. No more, no less.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Designing for Calibrated Expectations</h2>
    <p class="lesson-text">Here are four practical techniques to shape accurate mental models from the start:</p>

    <div class="lesson-grid">
      <div class="lesson-card">
        <div class="card-num">01</div>
        <h3>Scope the introduction</h3>
        <p>Tell users what the agent can and can't do <em>before</em> they ask. "I can help you draft emails, schedule meetings, and search your documents. I can't access external websites or make purchases." This one sentence prevents 80% of miscalibrated expectations.</p>
      </div>
      <div class="lesson-card">
        <div class="card-num">02</div>
        <h3>Show confidence levels</h3>
        <p>When the agent isn't sure, say so. "I found three documents that might match — the first one is most likely what you need." Hedging language isn't weakness; it's accuracy that builds long-term trust.</p>
      </div>
      <div class="lesson-card">
        <div class="card-num">03</div>
        <h3>Design the first failure</h3>
        <p>The first time the agent gets something wrong is the most important UX moment. How it handles failure teaches users more about the agent than ten successful interactions. Design graceful failure into the onboarding flow intentionally.</p>
      </div>
      <div class="lesson-card">
        <div class="card-num">04</div>
        <h3>Match the tone to capability</h3>
        <p>An agent that says "Absolutely! I'll handle everything!" but fails 20% of the time destroys trust. An agent that says "I'll try this approach — let me know if I should adjust" with the same failure rate builds it. Tone calibrates expectations.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <div class="lesson-quote">
      "The most dangerous AI product isn't one that fails often — it's one that fails rarely but unpredictably, wrapped in an interface that never hints at the possibility of failure."
      <cite>— Adapted from research on automation complacency in aviation systems</cite>
    </div>
  </div>

  <div class="lesson-exercise">
    <h3>Reflection</h3>
    <ol>
      <li>Think of an AI product you use regularly. What was your mental model after the first interaction? Has it changed since? What shifted it?</li>
      <li>Pick an agentic product (Claude, ChatGPT, Copilot). Find one design decision that could lead to over-trust and one that calibrates trust well.</li>
      <li>Write a 2-sentence onboarding message for an AI scheduling agent that honestly scopes its capabilities without underselling itself.</li>
    </ol>
  </div>

</div>
`
  },
  {
    id: "2-2",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">A Systematic Approach to Trust</h2>
    <p class="lesson-text">Trust in agentic products isn't one thing — it's a stack of four distinct layers, each solving a different user concern. Skip any layer and users will feel uneasy without being able to articulate why. The Trust Calibration Stack gives you a systematic way to audit and design trust into every part of your product.</p>
    <p class="lesson-text">Think of it like Maslow's hierarchy: you need the foundation before the higher layers matter. A beautifully explainable agent that constantly surprises users with unexpected behavior will never be trusted, no matter how good the explanations are.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Four Layers</h2>

    <div class="stack">
      <div class="stack-layer" style="background:var(--purple-d);border-color:rgba(139,127,212,.3);">
        <div class="stack-num" style="background:var(--purple);color:#fff;">4</div>
        <div><span class="stack-label" style="color:var(--purple);">User Control & Override</span><br><span style="font-size:11.5px;color:var(--muted);">"I can step in at any time"</span></div>
      </div>
      <div class="stack-layer" style="background:var(--blue-d);border-color:rgba(74,144,217,.3);">
        <div class="stack-num" style="background:var(--blue);color:#fff;">3</div>
        <div><span class="stack-label" style="color:var(--blue);">Explainable Decisions</span><br><span style="font-size:11.5px;color:var(--muted);">"I understand why it did that"</span></div>
      </div>
      <div class="stack-layer" style="background:var(--green-d);border-color:rgba(86,163,116,.3);">
        <div class="stack-num" style="background:var(--green);color:#fff;">2</div>
        <div><span class="stack-label" style="color:var(--green);">Behavioral Consistency</span><br><span style="font-size:11.5px;color:var(--muted);">"It acts the way I expect"</span></div>
      </div>
      <div class="stack-layer" style="background:var(--amber-d);border-color:rgba(201,146,58,.3);">
        <div class="stack-num" style="background:var(--amber);color:#fff;">1</div>
        <div><span class="stack-label" style="color:var(--amber);">Capability Transparency</span><br><span style="font-size:11.5px;color:var(--muted);">"I know what it can and can't do"</span></div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Layer 1: Capability Transparency</h2>
    <p class="lesson-text">The foundation. Users must understand the agent's scope — what it can do, what it can't do, and where the boundaries are. Without this, every other trust signal is noise.</p>
    <p class="lesson-text"><strong>Design patterns:</strong> Onboarding capability cards. Suggested prompts that imply scope. Graceful "I can't do that, but here's what I can do" responses. Empty states that educate. Documentation that's actually read (hint: put it in the UI, not in a help center).</p>
    <div class="lesson-callout">
      <strong>Example:</strong> Claude's response when asked to access the internet: "I don't have the ability to browse the web, but I can help you draft the search query or analyze content you paste here." This response simultaneously sets a boundary and redirects to capability.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Layer 2: Behavioral Consistency</h2>
    <p class="lesson-text">Consistency is the foundation of all trust — in people and in software. When an agent behaves differently on the same input, users lose confidence fast. The challenge: LLM-powered agents are inherently non-deterministic. The same prompt can produce different outputs.</p>
    <p class="lesson-text"><strong>Design patterns:</strong> Consistent formatting of outputs (always use the same structure for summaries, code, etc.). Stable UI — don't rearrange elements between sessions. Behavioral guardrails that prevent wild swings in tone or approach. Version indicators when the model updates.</p>
    <div class="lesson-callout warning">
      <strong>Watch out:</strong> Users notice inconsistency in <em>small</em> things more than big ones. If the agent sometimes uses bullet points and sometimes doesn't for the same type of request, that micro-inconsistency erodes trust faster than an occasional wrong answer.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Layer 3: Explainable Decisions</h2>
    <p class="lesson-text">When the agent makes a choice — which search results to show, how to organize a document, what code to generate — users want to understand <em>why</em>. Not the technical details of attention weights, but a human-readable rationale.</p>
    <p class="lesson-text"><strong>Design patterns:</strong> Reasoning traces ("I chose this approach because..."). Source citations (Perplexity's model). Before/after comparisons for edits. Confidence indicators on outputs. Decision logs for multi-step tasks.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Layer 4: User Control & Override</h2>
    <p class="lesson-text">The capstone. Even when users trust the agent, they need to know they <em>could</em> intervene. Control is about psychological safety as much as functionality. The undo button is trust made tangible.</p>
    <p class="lesson-text"><strong>Design patterns:</strong> Undo/redo for all agent actions. Edit/refine after generation. Pause/resume for long-running tasks. Settings that let users tune agent behavior. Clear "stop" mechanisms that work instantly.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Applying the Stack</h2>
    <div class="lesson-table">
      <table>
        <tr><th>Layer</th><th>Audit question</th><th>Red flag if missing</th></tr>
        <tr><td style="color:var(--amber);">1. Capability</td><td>Can a new user describe what the agent does and doesn't do after 60 seconds?</td><td>Users attempt tasks beyond the agent's scope and get frustrated</td></tr>
        <tr><td style="color:var(--green);">2. Consistency</td><td>Does the same input produce a structurally similar output every time?</td><td>"It worked yesterday but not today" complaints</td></tr>
        <tr><td style="color:var(--blue);">3. Explainability</td><td>Can users understand why the agent made a particular choice?</td><td>Users accept outputs uncritically (automation bias) or reject them entirely</td></tr>
        <tr><td style="color:var(--purple);">4. Control</td><td>Can users modify, undo, or stop the agent at any point?</td><td>Users feel anxious during long-running tasks</td></tr>
      </table>
    </div>
  </div>

  <div class="lesson-exercise">
    <h3>Apply the Framework</h3>
    <ol>
      <li>Pick an AI product you use. Score it 1–5 on each layer of the Trust Calibration Stack. Where is the weakest layer? What design change would strengthen it?</li>
      <li>Think about a product where you trust the AI outputs without checking them. Which layer is creating that trust — and is it genuinely earned or is it automation bias?</li>
      <li>Design a "trust audit card" — a single screen that shows the user all four layers of trust for your agent at a glance.</li>
    </ol>
  </div>

</div>
`
  },
  {
    id: "2-3",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Two Words Designers Use Interchangeably (But Shouldn't)</h2>
    <p class="lesson-text">In almost every design review for an agentic product, someone says "we need to make this more transparent." But what do they actually mean? Do they want to show <em>what</em> the agent is doing? Or do they want to explain <em>why</em> the agent made a particular decision? These are fundamentally different design problems, and confusing them leads to interfaces that overwhelm without illuminating.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Transparency: Showing What</h2>
    <p class="lesson-text"><strong>Transparency</strong> means making the agent's actions and processes visible. It answers the question: "What is happening right now?" and "What did the agent do?"</p>
    <p class="lesson-text">Examples of transparency in practice:</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Action logs</h3>
        <p>Claude Code showing each file it reads, each command it runs, each edit it makes — in real time.</p>
      </div>
      <div class="lesson-card">
        <h3>Source citations</h3>
        <p>Perplexity showing which web pages it read to generate an answer.</p>
      </div>
      <div class="lesson-card">
        <h3>Data access indicators</h3>
        <p>An email agent showing "Reading your last 50 emails..." before summarizing.</p>
      </div>
      <div class="lesson-card">
        <h3>Change diffs</h3>
        <p>GitHub Copilot showing exactly what code it proposes to add or remove.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Explainability: Showing Why</h2>
    <p class="lesson-text"><strong>Explainability</strong> means making the agent's reasoning legible. It answers the question: "Why did it do that?" and "Why this approach instead of another?"</p>
    <p class="lesson-text">Examples of explainability in practice:</p>
    <div class="lesson-grid">
      <div class="lesson-card">
        <h3>Reasoning traces</h3>
        <p>Claude's extended thinking showing the chain of logic that led to an answer.</p>
      </div>
      <div class="lesson-card">
        <h3>Decision rationale</h3>
        <p>"I chose to refactor this as a separate function because it's called in three places" — explaining the why, not just the what.</p>
      </div>
      <div class="lesson-card">
        <h3>Confidence signals</h3>
        <p>"I'm fairly confident about sections 1–3, but section 4 is based on limited data" — explaining the basis for the output quality.</p>
      </div>
      <div class="lesson-card">
        <h3>Trade-off narration</h3>
        <p>"I optimized for readability over performance here because your codebase prioritizes maintainability" — explaining the choices within the output.</p>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">When Each Is Needed</h2>
    <div class="lesson-table">
      <table>
        <tr><th>Situation</th><th>Transparency needed?</th><th>Explainability needed?</th></tr>
        <tr><td>Agent is running a 5-minute task</td><td><strong>High</strong> — show progress, steps taken</td><td>Low — they'll evaluate the result</td></tr>
        <tr><td>Agent produced an unexpected result</td><td>Medium — show what data it used</td><td><strong>High</strong> — explain why this result</td></tr>
        <tr><td>Agent is about to take an irreversible action</td><td><strong>High</strong> — show exactly what will change</td><td><strong>High</strong> — explain why this action</td></tr>
        <tr><td>Agent completed a routine task successfully</td><td>Low — brief summary is enough</td><td>Low — don't over-explain success</td></tr>
        <tr><td>Agent failed and needs user input</td><td><strong>High</strong> — show what was attempted</td><td><strong>High</strong> — explain why it failed</td></tr>
      </table>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">The Cost of Too Much</h2>
    <p class="lesson-text">Here's the counterintuitive truth: <strong>too much transparency or explainability is just as bad as too little.</strong></p>

    <div class="lesson-grid">
      <div class="lesson-card" style="border-color:rgba(201,146,58,.3);">
        <h3 style="color:var(--amber);">Too much transparency</h3>
        <p>Showing every API call, every token generated, every decision branch creates information overload. Users can't distinguish important events from noise. AutoGPT's verbose execution logs are a cautionary tale — technically transparent, practically overwhelming.</p>
      </div>
      <div class="lesson-card" style="border-color:rgba(196,101,74,.3);">
        <h3 style="color:var(--coral);">Too much explainability</h3>
        <p>Explaining every micro-decision makes the agent feel uncertain and slow. If the agent explains why it chose blue over red for a chart color, it's wasting attention on decisions users didn't care about. Over-explanation signals lack of confidence.</p>
      </div>
    </div>

    <div class="lesson-callout tip">
      <strong>The golden rule:</strong> Be transparent about <em>actions</em> proportional to their impact. Be explainable about <em>decisions</em> proportional to their unexpectedness. A routine action needs a one-liner. A surprising or consequential decision deserves a paragraph.
    </div>
  </div>

  <div class="lesson-exercise">
    <h3>Practice Distinguishing</h3>
    <ol>
      <li>Open Claude, ChatGPT, or Cursor. Find one moment of transparency (showing what) and one moment of explainability (showing why). Are they both well-calibrated?</li>
      <li>Design two versions of the same agent notification: one optimized for transparency, one for explainability. The scenario: an email agent just moved 12 messages to a new folder.</li>
      <li>For your current or most recent project: is the bigger trust gap in transparency or explainability? What's one UI change that would close it?</li>
    </ol>
  </div>

</div>
`
  },
  {
    id: "2-4",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">The Unique Attention Challenge of Agent Tasks</h2>
    <p class="lesson-text">Traditional software demands attention <em>during</em> use. You click, you type, you read, you respond. Agentic products flip this model. The agent might work for 30 seconds, 5 minutes, or an hour. During that time, the user is in a cognitive no-man's land: they've delegated a task but don't know if they should watch, wait, or walk away.</p>
    <p class="lesson-text">This ambiguity is a design failure, not a user problem. Every moment a user spends wondering "should I be paying attention right now?" is wasted cognitive load — and it erodes the very efficiency gains that made the agent worthwhile in the first place.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Attention Economics in Agentic Products</h2>
    <p class="lesson-text">User attention is a finite resource, and agent tasks create three distinct attention states:</p>

    <div class="lesson-grid">
      <div class="lesson-card">
        <div class="card-icon">&#128064;</div>
        <h3>Active monitoring</h3>
        <p>User is watching the agent work in real-time. Appropriate for: short tasks (&lt;30s), high-stakes actions, learning a new agent's capabilities. Cost: highest cognitive load, user is blocked.</p>
      </div>
      <div class="lesson-card">
        <div class="card-icon">&#128260;</div>
        <h3>Peripheral awareness</h3>
        <p>User is doing other work but keeps a tab/window visible. Appropriate for: medium tasks (1-10 min), tasks where intermediate results matter. Cost: context-switching penalty, split attention.</p>
      </div>
      <div class="lesson-card">
        <div class="card-icon">&#128716;</div>
        <h3>Full delegation</h3>
        <p>User walks away entirely and expects a notification when done. Appropriate for: long tasks (&gt;10 min), batch operations, low-stakes routine work. Cost: lowest, but requires reliable notification.</p>
      </div>
    </div>

    <div class="lesson-callout">
      <strong>Key insight:</strong> The user should never have to guess which attention state is appropriate. Your UI should explicitly signal it. "This will take about 2 minutes — I'll show you progress" vs. "This will take a while — I'll notify you when it's done."
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Progressive Disclosure of Agent Activity</h2>
    <p class="lesson-text">Not all activity is equally important. Progressive disclosure means showing the right level of detail at the right time:</p>

    <div class="stack">
      <div class="stack-layer" style="background:var(--bg3);">
        <div class="stack-num" style="background:var(--accent);color:#fff;">1</div>
        <div><span class="stack-label">Status headline</span><br><span style="font-size:11.5px;color:var(--muted);">Always visible. "Analyzing 47 documents..." or "3 of 5 steps complete"</span></div>
      </div>
      <div class="stack-layer" style="background:var(--bg3);">
        <div class="stack-num" style="background:var(--accent);color:#fff;">2</div>
        <div><span class="stack-label">Current action</span><br><span style="font-size:11.5px;color:var(--muted);">Visible on hover or expand. "Currently reading quarterly-report-Q3.pdf"</span></div>
      </div>
      <div class="stack-layer" style="background:var(--bg3);">
        <div class="stack-num" style="background:var(--accent);color:#fff;">3</div>
        <div><span class="stack-label">Full activity log</span><br><span style="font-size:11.5px;color:var(--muted);">Available on click. Complete chronological list of every action taken</span></div>
      </div>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">When to Interrupt vs. Stay Quiet</h2>
    <p class="lesson-text">The hardest design decision in long-running agent tasks: when should the agent pull the user back? Interrupt too often and you've recreated the problem you were solving. Interrupt too rarely and users feel anxious or miss critical decision points.</p>

    <div class="lesson-table">
      <table>
        <tr><th>Interrupt (pull attention)</th><th>Stay quiet (let them work)</th></tr>
        <tr><td>Agent needs a decision to continue</td><td>Agent is progressing normally</td></tr>
        <tr><td>Agent encountered a recoverable error</td><td>Agent recovered from a minor issue on its own</td></tr>
        <tr><td>Agent is about to take an irreversible action</td><td>Agent completed a routine sub-step</td></tr>
        <tr><td>Task is complete</td><td>Task is partially complete with more to go</td></tr>
        <tr><td>Significant unexpected finding</td><td>Expected intermediate results</td></tr>
      </table>
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Designing the "Away" State</h2>
    <p class="lesson-text">When a user returns after full delegation, they need to rebuild context fast. The "away state" — what users see when they come back — is one of the most underdesigned screens in agentic products.</p>
    <p class="lesson-text">A good away state answers four questions instantly: <strong>Is it done?</strong> (status) <strong>Did it work?</strong> (outcome) <strong>What did it do?</strong> (summary of actions) <strong>What do I need to do now?</strong> (next action). Design this screen like a morning briefing — scannable, prioritized, actionable.</p>

    <div class="lesson-callout tip">
      <strong>Pattern: The return summary.</strong> When the user comes back, don't just show the result. Show a 3-line summary: "I completed [task]. Here's what I did: [2-3 key actions]. [One thing that needs your attention / or: Everything looks good.]"
    </div>
  </div>

  <div class="lesson-exercise">
    <h3>Design Challenge</h3>
    <ol>
      <li>Map an agent task that takes 5+ minutes. Design the three attention states (active, peripheral, delegated) for it. What changes in the UI between each?</li>
      <li>Write the "return summary" for a research agent that spent 20 minutes analyzing 30 articles and found 3 key insights. Make it scannable in 5 seconds.</li>
      <li>Audit an AI product you use: does it ever leave you in the "should I be watching?" uncertainty zone? How would you fix it?</li>
    </ol>
  </div>

</div>
`
  },
  {
    id: "2-5",
    content: `
<div class="lesson-content">

  <div class="lesson-section">
    <h2 class="lesson-h2">Three Products, Three Philosophies</h2>
    <p class="lesson-text">How much should users see of the agent's reasoning? This question has no single right answer — it depends on the product's context, user expectations, and the nature of the task. Let's examine three products that each took a radically different stance, and extract the design principles that actually matter.</p>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Perplexity: "Show Your Sources"</h2>
    <p class="lesson-text">Perplexity's core design decision is to treat AI-generated answers like academic papers: every claim gets a citation. Numbered references appear inline, linking to the actual web pages the model drew from.</p>
    <p class="lesson-text"><strong>What it gets right:</strong> Users can verify any claim. Trust is anchored in external, checkable sources rather than the AI's authority. The design says "don't trust me — trust the evidence." This works brilliantly for information-seeking tasks where accuracy matters.</p>
    <p class="lesson-text"><strong>What it trades off:</strong> The answer is optimized for verifiability, not readability. Citations fragment the reading experience. For creative or synthesis tasks where there's no single "source," the citation model feels forced. And users often see the citations as proof of correctness even when the AI misinterprets the source.</p>

    <div class="lesson-callout">
      <strong>Design lesson:</strong> Citation-based trust works when the user's goal is <em>finding information</em>. It breaks down when the goal is <em>generating something new</em>.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Notion AI: "Invisible Until You Need It"</h2>
    <p class="lesson-text">Notion AI takes the opposite approach. The agent lives inside the document — appearing as inline suggestions, summaries, and transformations that blend into the user's own content. There's no separate "AI panel" or reasoning trace. The agent's work looks like your work.</p>
    <p class="lesson-text"><strong>What it gets right:</strong> Zero context-switching. The AI enhances the user's flow rather than interrupting it. For writing and editing tasks, this feels natural — like having a skilled editor who marks up your document quietly.</p>
    <p class="lesson-text"><strong>What it trades off:</strong> Minimal transparency. Users can't see what the AI considered and rejected. If the suggestion is wrong, there's no reasoning to debug. The "magic" feel works when the AI is right, but when it's wrong, users have no scaffold for understanding why or correcting course.</p>

    <div class="lesson-callout">
      <strong>Design lesson:</strong> Invisible AI works for low-stakes, easily-reversible tasks where the user can quickly judge quality. It's dangerous for complex tasks where the user needs to evaluate the <em>approach</em>, not just the output.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Cursor: "Show Everything, Let Them Scroll"</h2>
    <p class="lesson-text">Cursor (the AI code editor) takes a maximalist approach to transparency. In its agent mode, it shows every file it reads, every search it runs, every edit it makes, in a terminal-style log. The user sees the full stream of consciousness.</p>
    <p class="lesson-text"><strong>What it gets right:</strong> Developers — Cursor's audience — are comfortable with logs and terminal output. The verbose display builds trust through transparency ("I can see it's actually reading the right files"). It also serves as a teaching tool: watching the agent's approach helps developers understand their own codebase better.</p>
    <p class="lesson-text"><strong>What it trades off:</strong> Information overload for non-expert users. The log becomes noise for routine tasks. There's no clear hierarchy — important decisions are buried in the same stream as trivial file reads. For long-running tasks, the log becomes an unreadable wall of text.</p>

    <div class="lesson-callout">
      <strong>Design lesson:</strong> Full transparency works when users are domain experts who can parse the activity, and when the task is complex enough that the process matters as much as the result.
    </div>
  </div>

  <div class="lesson-section">
    <h2 class="lesson-h2">Synthesis: What Actually Matters</h2>

    <div class="lesson-table">
      <table>
        <tr><th>Dimension</th><th>Perplexity</th><th>Notion AI</th><th>Cursor</th></tr>
        <tr><td>Transparency level</td><td>Medium (sources shown)</td><td>Low (inline, hidden process)</td><td>High (full activity log)</td></tr>
        <tr><td>Explainability level</td><td>High (citations as evidence)</td><td>Low (output speaks for itself)</td><td>Medium (actions visible, rationale implicit)</td></tr>
        <tr><td>Best for</td><td>Information verification</td><td>Creative flow tasks</td><td>Complex technical tasks</td></tr>
        <tr><td>User expertise assumed</td><td>General</td><td>General</td><td>Domain expert</td></tr>
        <tr><td>Trust mechanism</td><td>External evidence</td><td>Output quality</td><td>Process visibility</td></tr>
        <tr><td>Biggest risk</td><td>False citation confidence</td><td>Invisible errors</td><td>Information overload</td></tr>
      </table>
    </div>

    <p class="lesson-text">The lesson is not that one approach is "right." It's that <strong>the right level of reasoning visibility is a function of three variables:</strong> how consequential the task is, how expert the user is, and how verifiable the output is on its own. Match your transparency to these three factors and you'll avoid both the "black box" trap and the "information overload" trap.</p>
  </div>

  <div class="lesson-exercise">
    <h3>Comparative Analysis</h3>
    <ol>
      <li>For a product you're designing (or would like to design): which of these three philosophies is the best starting point? Why? What would you modify?</li>
      <li>Design a "transparency dial" — a single UI control that lets the user choose between Notion-style invisibility, Perplexity-style citations, and Cursor-style full logs. What does each setting look like?</li>
      <li>Find a fourth AI product not mentioned here. Where does it fall on the transparency spectrum? What does it get right that the others don't?</li>
    </ol>
  </div>

</div>
`
  }
]);
