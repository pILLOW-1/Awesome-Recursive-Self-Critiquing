# Outreach Kit: Evaluation-First Recursive Self-Improvement

This document provides reusable language for sharing **Awesome Recursive Self-Critiquing** without overstating the evidence or the maturity of recursive self-improvement research.

## Core Position

> **RSI needs an evaluation science, not just a stronger optimization loop.**

Recursive self-improvement is usually framed as an optimization problem: can a system produce a better artifact, policy, scaffold, evaluator, dataset, or successor? The prior question is how we can know that the apparent improvement is causal, persistent, generalizable, and robust to evaluator gaming.

In RSI, evaluation is not necessarily outside the loop. The improver may influence the critic, reward signal, data, benchmark exposure, stopping rule, or definition of success. Evaluation should therefore be treated as a first-class research object rather than a final scorecard.

## Short Post — X / Bluesky

RSI needs an evaluation science, not just a stronger optimization loop.

If an improver can influence its critic, benchmark, data, reward, or stopping rule, a rising score is not enough. We built an evaluation-first map of recursive self-critique and self-improvement research: protocols, benchmarks, negative evidence, industry systems, and open questions.

Website: https://awesome-recursive-self-critiquing.saxoe.chatgpt.site
GitHub: https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing

We especially welcome causal ablations, hidden-test results, failure cases, and work that distinguishes real improvement from evaluator capture.

## Research Community Post — LinkedIn / Mastodon

**Recursive self-improvement has an evaluation problem.**

Much of the discussion asks whether an AI system can improve an output, scaffold, evaluator, training recipe, research workflow, or future version of itself. But recursive improvement makes the measurement problem unusually difficult: the system may affect the critic, reward, data, benchmark exposure, stopping rule, or even the definition of success.

This creates at least four risks:

1. Generator and critic share blind spots, producing self-confirmation rather than independent evidence.
2. The system captures the metric without improving the underlying objective.
3. Gains vanish on hidden tests, fresh sessions, distribution shifts, or later iterations.
4. Extra sampling, search, compute, or privileged feedback causes the gain while recursion receives the credit.

I created **Awesome Recursive Self-Critiquing** as a selective, evaluation-first map of this space. It currently organizes academic work, benchmarks, public implementations, and industry evaluation systems around explicit evaluation questions rather than broad RSI claims.

Explore the interactive map: https://awesome-recursive-self-critiquing.saxoe.chatgpt.site

Contributions are especially welcome when they include negative results, causal ablations, matched-compute baselines, independent evaluators, hidden tests, or evidence of persistence.

## r/MachineLearning Self-Promotion Thread

**Awesome Recursive Self-Critiquing — an evaluation-first map of RSI research**

I am maintaining a free, open-source collection focused on a gap in recursive self-improvement research: evaluation is often treated as a final score, even though the improver may influence the critic, reward, data, benchmark exposure, or stopping rule.

The repository organizes 25 carefully scoped academic and industry resources, an evaluation framework, machine-readable metadata, and open research questions. It distinguishes higher-order critique from ordinary self-correction and avoids treating automated AI R&D capability as proof of unrestricted RSI.

Project page: https://awesome-recursive-self-critiquing.saxoe.chatgpt.site
Repository: https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing

There is no paid product or signup. I would especially value feedback on missing negative results, evaluation protocols, and whether the taxonomy draws the right boundary between iterative improvement and RSI.

Post this in the current monthly **r/MachineLearning Self-Promotion Thread**, which explicitly accepts personal projects and asks posters to disclose pricing. Do not use link shorteners.

## Hacker News

Suggested regular submission title:

> Recursive self-improvement has an evaluation problem

Link to the project homepage or a substantive essay based on the Core Position above. Do **not** label this as “Show HN”: the official Show HN guidance excludes lists and other reading material.

## LessWrong / Alignment Forum Abstract

**Evaluation Is Part of the Recursive System**

Discussions of recursive self-improvement often assume that “improvement” can be read from an external benchmark. That assumption weakens when an improver can influence the evaluator, reward, data distribution, benchmark exposure, stopping rule, or definition of success. Under those conditions, evaluation becomes both part of the recursive system and a potential optimization target.

This post proposes an evaluation-first decomposition of RSI claims: outcome improvement, causal attribution, critique quality, recursive depth, oversight asymmetry, persistence, efficiency, and robustness. It also asks what evidence should be required before iterative gains are described as recursive self-improvement.

The accompanying open repository maps existing work and invites counterexamples, negative results, and better protocols: https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing

## Chinese Post — 知乎 / 微信 / 小红书

**递归自我改进真正的瓶颈，可能不是“改进”，而是“如何证明改进”。**

在普通评测中，我们通常把 benchmark 当作系统外部的固定标尺。但在 Recursive Self-Improvement 中，改进者可能同时影响 critic、奖励信号、训练数据、评测暴露、停止条件，甚至“成功”的定义。这时分数上升并不自动意味着能力真正提高。

我创建了 **Awesome Recursive Self-Critiquing**，专门整理 RSI 与递归自我批评中的评测工作，包括监督协议、benchmark、负面结果、可复现项目和工业界评测系统。它重点关注四类风险：自我确认、指标俘获、不可持续的提升，以及错误的因果归因。

项目主页：https://awesome-recursive-self-critiquing.saxoe.chatgpt.site
GitHub：https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing

欢迎推荐包含隐藏测试、同算力基线、因果消融、独立 evaluator、失败案例或跨迭代保持性证据的工作。

## Calls to Action

Prefer one concrete request per post:

- Recommend a missing benchmark or negative result.
- Challenge one boundary in the inclusion criteria.
- Contribute a matched-compute baseline or causal ablation.
- Share public industry evidence about a closed evaluation-improvement loop.
- Reuse `catalog.json` in an agent, literature tool, or dataset and report retrieval failures.

Avoid asking for coordinated upvotes or generic engagement. Ask for criticism, missing evidence, and falsifiable counterexamples instead.
