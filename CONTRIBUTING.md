# Contribution Guidelines

Thank you for helping improve Awesome Recursive Self-Critiquing. This repository is deliberately selective: a smaller list with clear evaluation evidence is more useful than a broad collection of loosely related self-improvement claims.

## Before suggesting a resource

Please search the README, open issues, and pull requests for duplicates. A candidate should satisfy at least one of the following:

- Isolate critique quality, correction quality, recursive depth, or iterative improvement in an explicit evaluation.
- Test scalable oversight, weak-to-strong supervision, or evaluator improvement within a feedback loop.
- Provide an executable environment for measuring whether an agent improves an AI artifact or its own future behavior.
- Document an industry evaluation-feedback-improvement workflow with enough public evidence to understand what changed and how it was measured.

Resources are usually out of scope when they are generic LLM-as-a-judge, agent, observability, AutoML, or reinforcement-learning work without a measured improvement loop. Marketing claims without public methodology are not accepted.

## Evidence checklist

Every proposal should answer:

1. **Target** — What artifact is improved: output, prompt, skill, scaffold, data, evaluator, recipe, or model?
2. **Loop** — What is recursive or iterative, and what state passes between cycles?
3. **Evaluator** — Who or what judges improvement, and how independent is it from the improver?
4. **Baselines** — Is the loop compared with direct generation, same-budget sampling/search, or a controlled ablation?
5. **Generalization** — Is there a hidden, held-out, fresh-session, or cross-distribution test?
6. **Efficiency** — Are token, time, compute, or monetary costs reported when relevant?
7. **Failure modes** — Are correct-to-wrong regressions, reward hacking, critique hallucination, or stopping failures measured?
8. **Limitations** — What does the result not establish?

## Pull request format

- Submit one resource or one tightly related group per pull request.
- Use an objective title such as `Add RealCritic` or `Clarify CAST scope`.
- Link primary sources whenever possible: papers, official repositories, datasets, benchmark pages, or technical reports.
- Do not use affiliate links, tracking parameters, or marketing copy.
- Keep descriptions concise and state the most important evaluation contribution and limitation.
- Update both `README.md` and `catalog.json`. The two files must describe the same resource and links.
- Update `last_updated` in `catalog.json` when changing the catalog.

Suggested README entry:

```markdown
- **Name** (Authors/Organization, Year) — **[Paper](...)** · **[Code](...)**
  What is evaluated, why it is relevant, and the most important limitation.
```

Suggested catalog fields:

```json
{
  "id": "stable-kebab-case-id",
  "name": "Resource name",
  "year": 2026,
  "group": "academic",
  "section": "critique-and-self-correction-evaluation",
  "type": "paper",
  "urls": {
    "paper": "https://example.org/paper",
    "code": "https://github.com/example/project"
  },
  "relevance": "One concise, evidence-based explanation.",
  "scope_note": "The most important boundary or limitation.",
  "tags": ["critique-quality", "iterative-revision"]
}
```

## Taxonomy changes

Open an issue before making major changes to scope, evaluation dimensions, or section structure. Explain which existing entries move and how the new taxonomy improves retrieval or evaluation clarity.

## Review standard

Maintainers may request stronger primary evidence, narrower wording, or an explicit scope note. Inclusion is not an endorsement of every claim made by a paper, project, or organization.

Please be respectful, disclose relevant conflicts of interest, and identify AI-assisted text or analysis when it materially shaped a contribution.
