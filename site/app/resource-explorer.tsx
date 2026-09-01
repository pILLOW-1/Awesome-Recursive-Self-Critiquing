'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Resource = {
  id: string;
  name: string;
  year: number;
  group: string;
  section: string;
  type: string;
  urls: Record<string, string>;
  relevance: string;
  scope_note: string;
  tags: string[];
};

const sectionLabels: Record<string, string> = {
  'recursive-critique-and-scalable-oversight': 'Scalable oversight',
  'critique-and-self-correction-evaluation': 'Critique evaluation',
  'self-improving-evaluators-and-reward-models': 'Evaluator improvement',
  'rsi-and-automated-ai-rd-benchmarks': 'AI R&D benchmarks',
  'recursive-self-critique-systems': 'Recursive systems',
  'metric-and-evaluation-infrastructure': 'Evaluation infrastructure',
  'ai-rd-measurement': 'AI R&D measurement',
};

const linkPriority = ['paper', 'benchmark', 'platform', 'technical_blog', 'report', 'code', 'data'];

function primaryLink(urls: Record<string, string>) {
  for (const key of linkPriority) {
    if (urls[key]) return urls[key];
  }
  return Object.values(urls)[0];
}

export function ResourceExplorer({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('all');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesGroup = group === 'all' || resource.group === group;
      const haystack = [
        resource.name,
        resource.relevance,
        resource.scope_note,
        sectionLabels[resource.section] ?? resource.section,
        ...resource.tags,
      ].join(' ').toLowerCase();
      return matchesGroup && (!needle || haystack.includes(needle));
    });
  }, [group, query, resources]);

  const visible = expanded ? filtered : filtered.slice(0, 9);

  return (
    <div className="resource-explorer">
      <div className="explorer-toolbar">
        <div className="search-wrap">
          <Search aria-hidden="true" />
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setExpanded(false);
            }}
            placeholder="Search papers, benchmarks, tags…"
            aria-label="Search resources"
          />
        </div>
        <div className="filter-group" aria-label="Filter by resource group">
          <SlidersHorizontal aria-hidden="true" />
          {[
            ['all', 'All'],
            ['academic', 'Academic'],
            ['industry', 'Industry'],
          ].map(([value, label]) => (
            <Button
              key={value}
              type="button"
              variant={group === value ? 'default' : 'ghost'}
              aria-pressed={group === value}
              onClick={() => {
                setGroup(value);
                setExpanded(false);
              }}
            >
              {label}
            </Button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">{filtered.length} resources</p>
      </div>

      {visible.length ? (
        <div className="resource-grid">
          {visible.map((resource) => (
            <article className="resource-card" key={resource.id}>
              <div className="resource-meta">
                <span className={`group-pill ${resource.group}`}>{resource.group}</span>
                <span>{resource.year}</span>
                <span>{sectionLabels[resource.section] ?? resource.section}</span>
              </div>
              <h3>{resource.name}</h3>
              <p>{resource.relevance}</p>
              <div className="resource-footer">
                <div className="tag-list">
                  {resource.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a
                  href={primaryLink(resource.urls)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${resource.name}`}
                >
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search aria-hidden="true" />
          <h3>No matching resources</h3>
          <p>Try a broader term such as “oversight”, “critic”, or “benchmark”.</p>
        </div>
      )}

      {filtered.length > 9 && (
        <div className="show-more-wrap">
          <Button type="button" variant="outline" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show fewer resources' : `Show all ${filtered.length} resources`}
          </Button>
        </div>
      )}
    </div>
  );
}
