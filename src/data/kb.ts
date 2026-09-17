import raw from "./protocols.json";
import { mitoPeptides, mitoStacks } from "./mito";
import { magazinePeptides, magazineSources, magazineStacks } from "./magazine";
import type { KnowledgeBase, PeptideCard } from "./types";

const base = raw as KnowledgeBase;

const deskById: Record<string, PeptideCard["desk"]> = {
  "bpc-157": "core",
  "tb-500": "core",
  kpv: "core",
  "ta-1": "core",
  "cjc-ipam": "core",
  glp1: "approved",
  melanocortin: "approved",
  hcg: "approved",
  "ll-37": "core",
  "ghrp-others": "adjunct",
  "support-peptides": "adjunct",
};

export const kb: KnowledgeBase = {
  ...base,
  meta: {
    ...base.meta,
    sources: [...base.meta.sources, ...magazineSources],
  },
  peptides: [
    ...base.peptides.map((p) => ({ ...p, desk: deskById[p.id] ?? "core" })),
    ...mitoPeptides,
    ...magazinePeptides,
  ],
  stacks: [...base.stacks, ...mitoStacks, ...magazineStacks],
};

export const legalShort = kb.meta.legal.short;
export const legalFull = kb.meta.legal.full;