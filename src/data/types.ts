export type DoseLine = {
  label: string;
  text: string;
  source: string;
  chapter: string;
  pages: string;
};

export type PeptideCard = {
  id: string;
  name: string;
  aliases: string[];
  class_name: string;
  regulatory: string;
  what_it_is: string;
  good_for: string[];
  not_for: string[];
  dosing: DoseLine[];
  reconstitution: string;
  cycle: string;
  stacks_with: string[];
  contraindications: string[];
  monitoring: string[];
  side_effects: string[];
  citations: string[];
  desk?: "core" | "mito" | "adjunct" | "approved";
};

export type StackCard = {
  id: string;
  name: string;
  category: string;
  items: string[];
  duration: string;
  use_when: string;
  source: string;
};

export type ProtocolCard = {
  id: string;
  name: string;
  peptide_ids: string[];
  steps: string[];
  timeline: string;
  source: string;
};

export type HardStop = {
  id: string;
  triggers: string[];
  reply: string;
};

export type KnowledgeBase = {
  meta: {
    title: string;
    version: string;
    sources: { id: string; name: string; publisher: string; year: number }[];
    legal: { short: string; full: string };
  };
  disclaimers: { always: string[]; approved_vs_research: string };
  hard_stops: HardStop[];
  peptides: PeptideCard[];
  stacks: StackCard[];
  protocols: ProtocolCard[];
  safety: {
    universal_avoid: string[];
    glp1_boxed_style: string[];
    monitoring_chapter: string;
    nonresponse_tree: string[];
    storage: string;
    quality: string;
  };
  intents: { id: string; examples: string[] }[];
};

export type GoalGuide = {
  id: string;
  title: string;
  plain: string;
  keywords: string[];
  /** Regex sources (case-insensitive) for rambling everyday sentences. */
  signals: string[];
  chip: { en: string; es: string };
  hint: { en: string; es: string };
  utterance: string;
  firstDo: string[];
  peptideIds: string[];
  stackIds: string[];
  protocolIds: string[];
  sequence: string;
  caution: string;
  source: string;
  /** Asked in the same reply as the map — never instead of an answer. */
  clarify?: string[];
};

export type Retrieved =
  | { kind: "peptide"; card: PeptideCard }
  | { kind: "stack"; card: StackCard }
  | { kind: "protocol"; card: ProtocolCard }
  | { kind: "safety" }
  | { kind: "compare"; id: string }
  | { kind: "goal"; card: GoalGuide };
