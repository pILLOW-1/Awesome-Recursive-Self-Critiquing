import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  GitFork,
  GitPullRequest,
  Layers3,
  Scale,
  Sparkles,
} from 'lucide-react';

import catalog from '@/data/catalog.json';
import { ResourceExplorer } from '@/app/resource-explorer';

const evaluationDimensions = [
  {
    number: '01',
    title: 'Outcome',
    question: 'Does the artifact actually improve across iterations?',
    measure: 'Per-round delta · pass rate · performance recovered',
  },
  {
    number: '02',
    title: 'Attribution',
    question: 'Did the recursive loop cause the gain?',
    measure: 'Loop ablations · matched-compute baselines · replay',
  },
  {
    number: '03',
    title: 'Critique quality',
    question: 'Does feedback expose errors and enable correction?',
    measure: 'Error recall · correction uplift · calibration',
  },
  {
    number: '04',
    title: 'Recursive depth',
    question: 'When do higher-order critiques add signal?',
    measure: 'C1/C2/C3 gain · marginal value · stopping behavior',
  },
  {
    number: '05',
    title: 'Generalization',
    question: 'Does improvement survive outside the optimization loop?',
    measure: 'Hidden tests · fresh sessions · transfer · retention',
  },
  {
    number: '06',
    title: 'Robustness',
    question: 'Does the loop amplify mistakes or exploit its evaluator?',
    measure: 'Regressions · reward hacking · safety violations',
  },
];

const openQuestions = [
  ['Evaluator independence', 'What remains when the improver cannot see or overfit the final judge?'],
  ['Recursive stopping', 'Can a system know when another critique level will add signal rather than noise?'],
  ['Weak-to-strong limits', 'How large can the capability gap become before supervision breaks down?'],
  ['Safety across generations', 'How do we separate capability gain from accumulating misalignment?'],
];

export default function Home() {
  const academicCount = catalog.resources.filter(
    (resource) => resource.group === 'academic',
  ).length;
  const industryCount = catalog.resources.length - academicCount;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="page-shell flex h-18 items-center justify-between gap-6">
          <a href="#top" className="brand-mark" aria-label="Back to top">
            <span className="brand-loop" aria-hidden="true">↻</span>
            <span>
              <strong>Recursive Self-Critiquing</strong>
              <small>evaluation-first index</small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#position">Position</a>
            <a className="nav-link" href="#framework">Framework</a>
            <a className="nav-link" href="#catalog">Catalog</a>
            <a className="nav-link" href="#questions">Questions</a>
          </nav>
          <a
            className="button-secondary"
            href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing"
            target="_blank"
            rel="noreferrer"
          >
            <GitFork aria-hidden="true" />
            GitHub
          </a>
        </div>
      </header>

      <section id="top" className="hero-section scroll-mt-24">
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles aria-hidden="true" /> A curated map of evidence</p>
            <h1>Can recursive self-critique reliably guide self-improvement?</h1>
            <p className="hero-lede">
              Self-critique is one component of self-improvement. The deeper problem is
              whether evaluation remains reliable as the system, critic, and target
              co-evolve. This project treats evaluation as a first-class object of RSI research.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#catalog">
                Explore the evidence <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
              >
                Read the full research index <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <dl className="hero-stats" aria-label="Collection statistics">
              <div><dt>{catalog.resources.length}</dt><dd>curated resources</dd></div>
              <div><dt>{academicCount}</dt><dd>academic works</dd></div>
              <div><dt>{industryCount}</dt><dd>industry systems</dd></div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="visual-label"><CircleDot aria-hidden="true" /> critique → evaluation → revision</div>
            <Image
              src="/recursive-self-critiquing.png"
              alt="Recursive self-critiquing concept showing nested evaluation loops"
              width={1680}
              height={945}
              priority
            />
            <div className="visual-note">
              <span>Core distinction</span>
              <p>Iteration is not evidence of improvement. The evaluator must make the difference observable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="thesis-strip" aria-label="Research thesis">
        <div className="page-shell thesis-grid">
          <div><span>01</span><strong>Critique</strong><p>Locate the failure</p></div>
          <div className="thesis-arrow" aria-hidden="true">→</div>
          <div><span>02</span><strong>Evaluate</strong><p>Test the feedback</p></div>
          <div className="thesis-arrow" aria-hidden="true">→</div>
          <div><span>03</span><strong>Improve</strong><p>Verify persistent gain</p></div>
        </div>
      </section>

      <section id="position" className="position-section scroll-mt-20">
        <div className="page-shell position-layout">
          <div className="position-statement">
            <p className="eyebrow"><CircleDot aria-hidden="true" /> The position</p>
            <h2>RSI needs an evaluation science, not just a stronger optimization loop.</h2>
            <p>
              In recursive systems, the evaluator is not guaranteed to remain outside the
              loop. The improver may shape the critic, data, reward, benchmark exposure,
              stopping rule, or even the definition of success.
            </p>
          </div>
          <div className="risk-grid">
            <article><span>01</span><h3>Self-confirmation</h3><p>Shared blind spots turn repeated agreement into false confidence.</p></article>
            <article><span>02</span><h3>Metric capture</h3><p>The score rises while the underlying objective stays unchanged.</p></article>
            <article><span>03</span><h3>Fragile gains</h3><p>Apparent improvement disappears on hidden tests or future iterations.</p></article>
            <article><span>04</span><h3>False attribution</h3><p>Extra search or privileged feedback improves results, but recursion gets the credit.</p></article>
          </div>
        </div>
      </section>

      <section id="framework" className="section-block scroll-mt-20">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><Scale aria-hidden="true" /> Evaluation framework</p>
              <h2>Improvement claims need more than a final score.</h2>
            </div>
            <p>
              A credible RSI evaluation isolates what improved, why it improved, and
              whether the gain survives beyond the loop that produced it.
            </p>
          </div>
          <div className="dimension-grid">
            {evaluationDimensions.map((dimension) => (
              <article className="dimension-card" key={dimension.number}>
                <span className="dimension-number">{dimension.number}</span>
                <h3>{dimension.title}</h3>
                <p>{dimension.question}</p>
                <small>{dimension.measure}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section-block catalog-section scroll-mt-20">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><Layers3 aria-hidden="true" /> Curated landscape</p>
              <h2>Trace the field from oversight protocols to measurable RSI.</h2>
            </div>
            <p>
              Selected for explicit evaluation protocols, controlled baselines,
              reproducible artifacts, or clear evidence about where improvement fails.
            </p>
          </div>
          <ResourceExplorer resources={catalog.resources} />
        </div>
      </section>

      <section id="questions" className="section-block scroll-mt-20">
        <div className="page-shell questions-layout">
          <div className="section-heading questions-intro">
            <p className="eyebrow"><CircleDot aria-hidden="true" /> Open research questions</p>
            <h2>The unresolved questions are the map.</h2>
            <p>
              Recursive systems make evaluation part of the object being improved.
              That turns measurement itself into a moving target.
            </p>
            <a
              className="text-link"
              href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing#-open-evaluation-questions"
              target="_blank"
              rel="noreferrer"
            >
              View all ten questions <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="question-list">
            {openQuestions.map(([title, question], index) => (
              <article key={title}>
                <span>Q{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{question}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contribute-section">
        <div className="page-shell contribute-panel">
          <div>
            <p className="eyebrow"><GitPullRequest aria-hidden="true" /> Help sharpen the map</p>
            <h2>Found rigorous evidence we missed?</h2>
            <p>
              Relevance and evaluation quality take priority over list size. Every
              contribution should state the target, loop, evaluator, baselines,
              generalization evidence, and limitations.
            </p>
          </div>
          <div className="contribute-actions">
            <a
              className="button-primary"
              href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              Contribution guide <ArrowUpRight aria-hidden="true" />
            </a>
            <span><CheckCircle2 aria-hidden="true" /> Evidence-first curation</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-grid">
          <p><strong>Awesome Recursive Self-Critiquing</strong><br />A selective, evaluation-first research index.</p>
          <div>
            <a href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing" target="_blank" rel="noreferrer">Repository</a>
            <a href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/releases" target="_blank" rel="noreferrer">Releases</a>
            <a href="https://github.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/blob/main/CITATION.cff" target="_blank" rel="noreferrer">Cite</a>
          </div>
          <p className="footer-meta">CC BY 4.0 · Updated {catalog.last_updated}</p>
        </div>
      </footer>
    </main>
  );
}
