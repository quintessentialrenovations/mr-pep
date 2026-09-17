import type { PeptideCard, StackCard } from "./types";

/** Mitochondrial / longevity cards. ISSCA doses only when the books list them. */
export const mitoPeptides: PeptideCard[] = [
  {
    id: "mots-c",
    name: "MOTS-c",
    aliases: ["motsc", "mots c", "mitochondrial orf", "mdp"],
    class_name: "Mitochondrial-derived peptide (12S rRNA ORF)",
    desk: "mito",
    regulatory:
      "Research peptide. Not FDA-approved. Not in ISSCA Volume 1 core peptide chapters as a dosed protocol. This desk will not invent a clinic dose.",
    what_it_is:
      "A 16-amino-acid peptide encoded in the mitochondrial genome. In published research it is studied as a metabolic signal (AMPK-related, exercise-mimetic, insulin-sensitivity literature) rather than as a tissue-repair peptide like BPC-157. ISSCA’s longevity chapter treats mitochondrial support as a multiplier of repair signaling — not as a license to stack unlisted injectables.",
    good_for: [
      "Educational discussion of mitochondrial-derived peptides (MDPs)",
      "Metabolic / exercise-signaling literature review with a clinician",
    ],
    not_for: [
      "A substitute for zone-2 training, sleep, or protein",
      "Self-directed fat-loss stacking on top of a GLP-1",
      "Any invented milligram protocol from a chatbot",
    ],
    dosing: [
      {
        label: "ISSCA dosing table",
        text: "None in Volume 1 Chapters 4–13 or Volume 2 protocol cards extracted for this library. If a clinician uses MOTS-c, the dose is theirs — not this desk’s.",
        source: "library",
        chapter: "Not a core ISSCA protocol card",
        pages: "—",
      },
    ],
    reconstitution: "Research-compound handling is clinic/lab SOP. Not a consumer reconstitution guide.",
    cycle: "No ISSCA cycle. Do not run continuous unmonitored courses.",
    stacks_with: [],
    contraindications: [
      "Pregnancy / lactation",
      "Self-experimentation without a responsible clinician",
      "Active malignancy discussions without oncology input",
    ],
    monitoring: ["Clinician-directed metabolic labs if used at all", "Do not chase energy as a titration target"],
    side_effects: ["Insufficient ISSCA safety table — treat as unknown in this library"],
    citations: ["Vol 2 Ch.15 (mitochondrial support as longevity multiplier — conceptual)", "Research-literature framing only"],
  },
  {
    id: "ss-31",
    name: "SS-31 (elamipretide)",
    aliases: ["ss31", "ss 31", "elamipretide", "bendavia", "cardiolipin peptide"],
    class_name: "Mitochondrial inner-membrane tetrapeptide",
    desk: "mito",
    regulatory:
      "Investigational (elamipretide has been studied in clinical trials for mitochondrial and cardiac indications). Not an ISSCA core protocol peptide in this library. Not a catalog ‘pin tonight’ compound.",
    what_it_is:
      "A small tetrapeptide that associates with cardiolipin on the inner mitochondrial membrane. Research focus: electron-transport efficiency, ROS at complex I/III, and tissues with high ATP demand (heart, kidney, muscle). This is mitochondrial medicine literature — distinct from gastric repair peptides.",
    good_for: [
      "Understanding cardiolipin-targeted mitochondrial research",
      "Specialist discussion of trial-stage mitochondrial therapeutics",
    ],
    not_for: [
      "DIY ‘mito stack’ with MOTS-c + NAD+ + SS-31",
      "Replacing indicated heart-failure or mitochondrial-disease care",
    ],
    dosing: [
      {
        label: "ISSCA dosing table",
        text: "None in this library. Trial doses are protocol-specific and are not converted into a common-practice range here.",
        source: "library",
        chapter: "Not a core ISSCA protocol card",
        pages: "—",
      },
    ],
    reconstitution: "If encountered as a research material, handling is lab/clinic SOP — not this chat.",
    cycle: "No ISSCA cycle.",
    stacks_with: [],
    contraindications: ["Pregnancy", "Unsupervised cardiac self-treatment"],
    monitoring: ["Specialist only"],
    side_effects: ["Trial literature is not restated as a consumer side-effect list here"],
    citations: ["Vol 2 Ch.15 conceptual mitochondrial multiplier", "Investigational / trial-class — not ISSCA-dosed"],
  },
  {
    id: "humanin",
    name: "Humanin",
    aliases: ["humanin peptide", "hn", "mitochondrial derived peptide humanin"],
    class_name: "Mitochondrial-derived cytoprotective peptide",
    desk: "mito",
    regulatory: "Research. Volume 1–2 textbooks in this library have no milligram table. ISSCA peptides magazine faculty published a range.",
    what_it_is:
      "A mitochondrial-derived peptide discussed for cytoprotection, metabolic stress, and healthspan literacy. Grouped with MOTS-c as an MDP. Magazine longevity and immune articles include it in faculty stacks.",
    good_for: ["MDP family literacy", "Magazine longevity / immune-stack talk under a clinician"],
    not_for: ["Anti-aging injections off a chat window"],
    dosing: [
      {
        label: "Volume 1–2 textbook table",
        text: "None in the extracted ISSCA textbook chapters.",
        source: "vol2",
        chapter: "Not a core textbook protocol card",
        pages: "—",
      },
      {
        label: "Magazine faculty (Lapeire / Moya)",
        text: "0.04 mg/kg SC daily — about 3.2 mg for an 80 kg adult; immune article also writes 3.2–4 mg SC daily. Not a Volume 1/2 table. A clinician chooses.",
        source: "mag-pep",
        chapter: "Longevity stack p.10; Immune stack p.26",
        pages: "10, 26",
      },
    ],
    reconstitution: "If encountered as a research material, handling is lab/clinic SOP — not this chat.",
    cycle: "Magazine longevity: during the 10–20 day Epitalon window. Immune article: up to 12 weeks then 1 month off.",
    stacks_with: ["epitalon", "bpc-157", "ta-1", "ara-290"],
    contraindications: ["Pregnancy", "Self-administration"],
    monitoring: ["Clinician-directed"],
    side_effects: ["Magazine does not print a consumer AE table"],
    citations: ["ISSCA Peptides Magazine pp.10, 26", "Vol 2 Ch.15 conceptual MDP framing"],
  },
  {
    id: "nad-support",
    name: "NAD+ / NAD-support (not a peptide)",
    aliases: ["nad", "nad+", "nmn", "nr", "nicotinamide", "nadh"],
    class_name: "Redox cofactor — adjacent to mitochondrial peptides",
    desk: "mito",
    regulatory:
      "NAD+ is a cofactor, not a signaling peptide. IV NAD clinics and research vials are not ISSCA peptide-protocol cards. Oral NR/NMN supplements are a different regulatory bucket than injectable peptides.",
    what_it_is:
      "ISSCA Volume 2 frames mitochondrial support as a longevity multiplier around repair, immune quieting, and endocrine preservation — not as an IV cocktail. NAD biology (sirtuins, PARPs, redox) is real; this desk will not turn that into an infusion recipe.",
    good_for: [
      "Understanding why sleep, zone-2, and protein sit underneath peptide stacks",
      "Separating cofactor talk from peptide protocol cards",
    ],
    not_for: ["Chat-designed NAD IV drip", "Stacking NAD + GH + GLP-1 because a forum said so"],
    dosing: [
      {
        label: "ISSCA peptide dosing",
        text: "No NAD infusion protocol in the extracted ISSCA peptide chapters. Lifestyle load (sleep, resistance training, protein) is the book’s actual mitochondrial chapter, not a gram-per-hour drip.",
        source: "vol2",
        chapter: "Chapter 15",
        pages: "conceptual — mitochondrial support as multiplier",
      },
    ],
    reconstitution: "Not a peptide reconstitution card.",
    cycle: "Foundations are ongoing. Peptide stacks still wash out (Vol 2: 4–6 weeks typical).",
    stacks_with: [],
    contraindications: ["Unsupervised IV self-administration"],
    monitoring: ["If a clinic infuses NAD, that is their protocol and monitoring — not this library"],
    side_effects: ["Flushing and GI effects are commonly reported with NAD-related products; not an ISSCA table"],
    citations: ["Vol 2 Ch.15"],
  },
  {
    id: "tesamorelin-mito",
    name: "Tesamorelin (visceral fat / GHRH analogue)",
    aliases: ["tesamorelin", "egrifta"],
    class_name: "FDA-labeled GHRH analogue — metabolic / VAT",
    desk: "approved",
    regulatory:
      "Tesamorelin is FDA-approved for HIV-associated lipodystrophy (visceral adipose reduction). ISSCA lists 2 mg nightly in the Volume 1 arsenal for visceral fat / metabolic enhancement. Labeled use is a prescription, not a research vial.",
    what_it_is:
      "A stabilized GHRH analogue. Distinct from CJC-1295/ipamorelin compounding. The labeled indication is reduction of excess abdominal fat in HIV lipodystrophy. Off-label metabolic use is clinician territory.",
    good_for: ["Labeled VAT reduction in the approved population", "ISSCA arsenal discussion of visceral fat"],
    not_for: ["Active malignancy (IGF-1 theory, same GH-axis caution)", "Pregnancy", "Uncontrolled diabetes without a prescriber"],
    dosing: [
      {
        label: "ISSCA arsenal (Vol 1 Ch.1)",
        text: "2 mg nightly for visceral fat reduction and metabolic enhancement — arsenal line. Follow the labeled product when a branded pen exists.",
        source: "vol1",
        chapter: "Chapter 1",
        pages: "12",
      },
    ],
    reconstitution: "Use the approved product as labeled when prescribed.",
    cycle: "Labeled courses are prescriber-directed. Secretagogue cycling rules in Ch.8–9 do not automatically map onto branded tesamorelin.",
    stacks_with: [],
    contraindications: ["Active malignancy", "Pregnancy", "Pituitary context per label"],
    monitoring: ["IGF-1", "Glucose", "VAT / waist as the labeled target"],
    side_effects: ["GH-axis: edema, glucose drift — label governs"],
    citations: ["Vol 1 Ch.1 p.12"],
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    aliases: ["ghk", "ghkcu", "copper peptide", "copper tripeptide", "skin peptide"],
    class_name: "Copper tripeptide — skin / wound arsenal line",
    desk: "adjunct",
    regulatory:
      "Cosmetic / research copper peptide. Not an FDA-approved skin drug in this library. ISSCA lists it in the Volume 1 quick-reference arsenal, not as a core chapter protocol like BPC-157.",
    what_it_is:
      "GHK-Cu is listed in ISSCA Vol 1 Chapter 1 for skin, wound healing, and anti-aging-adjacent effects. It is an adjunct appearance/repair signal, not a facelift and not a substitute for protein, lifting, or dermatology.",
    good_for: ["Skin-quality discussion as an arsenal adjunct", "Wound-adjacent cosmetic talk in the book’s one-liner"],
    not_for: [
      "A promise of tighter skin after large weight loss",
      "Replacing indicated dermatologic or surgical care",
      "Sexual or cosmetic coaching beyond the arsenal line",
    ],
    dosing: [
      {
        label: "Quick-reference (Vol 1 Ch.1 arsenal)",
        text: "1–2 mg daily for skin, wound healing, and anti-aging effects (arsenal line).",
        source: "vol1",
        chapter: "Chapter 1",
        pages: "12",
      },
      {
        label: "Magazine faculty (beauty stack)",
        text: "1–2 mg SC daily, 6-week cycles, 3–4×/year, plus topical after shower or microneedling.",
        source: "mag-pep",
        chapter: "Aesthetic & Skin Regeneration Peptide Stacks",
        pages: "20",
      },
    ],
    reconstitution: "Product-specific. Follow the dispensing clinic. Not a consumer recipe.",
    cycle: "Arsenal table is thin. Magazine beauty stack: 6-week SC pulses, 3–4×/year.",
    stacks_with: ["bpc-157", "ptd-dbm", "tb-500"],
    contraindications: ["Pregnancy", "Self-directed cosmetic stacking"],
    monitoring: ["Skin irritation", "Whether the actual goal is mass change vs skin quality"],
    side_effects: ["Local irritation possible; the arsenal line is thin — clinician supervision required"],
    citations: ["Vol 1 Ch.1 p.12", "ISSCA Peptides Magazine p.20"],
  },
];

export const mitoStacks: StackCard[] = [
  {
    id: "mito-foundations",
    name: "Mitochondrial foundations (Vol 2 — before peptides)",
    category: "mito",
    items: [
      "Sleep first — Vol 2: poor sleep means poor GH and poor repair, whatever the dose",
      "Protein ≥ 1.6 g/kg when metabolic peptides are in play (Vol 2)",
      "Resistance training in longevity Class II / IV",
      "Quiet inflammation (Class I: BPC-157 + KPV) before GH or immune stimulation",
      "MOTS-c / SS-31 / NAD have no ISSCA milligram table here — a clinician can discuss them after foundations",
      "ISSCA synergies magazine: NAD+ / glutathione IVs, HBOT, PEMF are clinic adjuncts — not a chat recipe",
    ],
    duration: "Ongoing — peptides still cycle 6–8 or 8–12 weeks with washout",
    use_when:
      "Someone asks for a ‘mito stack’ or ‘anti-aging everything’. Sequence beats addition. If benefits vanish in washout, the protocol compensated rather than restored (Vol 2 Ch.15).",
    source: "Vol 2 Ch.15 pp.117–118",
  },
];
