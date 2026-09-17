/** One-line “what it does” for library skimming. Everyday language, not mechanism. */
export const PEPTIDE_SKIM: Record<string, string> = {
  "bpc-157": "Repair peptide for stalled tendons, gut lining, and slow healing — not a painkiller.",
  "tb-500": "Systemic remodeler for multi-site or muscle injury when local repair is not enough.",
  kpv: "Quiets gut and tissue inflammation that can block healing. Not a tanning peptide.",
  "ta-1": "Immune coordinator (T-cell / NK support) — not a crude immune booster.",
  "cjc-ipam": "Nighttime GH-pulse support for recovery and lean mass. Needs a working pituitary.",
  glp1: "Labeled medicines for diabetes and weight — prescription, not a research fat vial.",
  melanocortin: "Pigmentation and metabolic-signaling family. Lowest-dose titration in the books.",
  hcg: "LH-receptor hormone for axis / fertility support under a specialist — not a crash diet drug.",
  "ll-37": "Antimicrobial / biofilm adjunct for sinus, wound, and gut-dysbiosis clinic talk.",
  "ghrp-others": "Older GH secretagogues. ISSCA prefers ipamorelin for most people.",
  "support-peptides": "Arsenal extras (GHK-Cu, AOD-9604, Selank, Semax) — one-liners, not core protocols.",
  "mots-c": "Mitochondrial research peptide studied as a metabolic signal. No ISSCA dose table.",
  "ss-31": "Cardiolipin-targeted mitochondrial research (elamipretide). Literacy, not a starter stack.",
  humanin: "Mitochondrial-derived peptide in magazine longevity/immune stacks. Textbook has no milligram table.",
  "nad-support": "Cofactor / sirtuin talk, not a peptide protocol. Sleep and training sit underneath.",
  "tesamorelin-mito": "Labeled GHRH analogue for visceral fat in a specific population — prescription.",
  "ghk-cu": "Copper peptide for skin quality and wound-adjacent talk. Arsenal line, not a facelift.",
  epitalon: "Magazine longevity peptide (10–20 day cycles). Not a Volume 1/2 textbook table.",
  cerebrolysin: "Neurotrophic mixture in the magazine brain stack. Not a DIY concussion protocol.",
  "pe-22-28": "Magazine neuro-stack adjunct. Faculty protocol, not a textbook card.",
  fgl: "Magazine neuro-stack (NCAM mimetic). Faculty protocol, not a textbook card.",
  "ptd-dbm": "Topical scalp peptide in the magazine beauty stack. Not an approved hair drug.",
  "ara-290": "Magazine immune-stack peptide for nerve/immune literacy. Medical-grade, not DIY.",
  dsip: "Magazine sleep/recovery adjunct. Timing printed; milligrams were not.",
  "peg-mgf": "Magazine rest-day muscle signal. Milligrams not printed — not invented here.",
  "igf-lr3": "Magazine post-training IGF analogue. Short cycle; milligrams not printed.",
  "vip-peptide": "Magazine immune-stack circulation peptide. Not sexual coaching.",
};

export function peptideSkim(id: string, fallback?: string) {
  return PEPTIDE_SKIM[id] || fallback || "Open the card for what the books actually say.";
}
