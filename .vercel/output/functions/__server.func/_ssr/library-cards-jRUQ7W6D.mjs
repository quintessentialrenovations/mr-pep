import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as kb } from "./kb-DMTCCrYb.mjs";
import { n as DISCLAIMER_POINTS, o as cn, t as Button } from "./site-footer-BXPk4NRR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-cards-jRUQ7W6D.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy", className),
		...props
	});
}
/** One-line “what it does” for library skimming. Everyday language, not mechanism. */
var PEPTIDE_SKIM = {
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
	"vip-peptide": "Magazine immune-stack circulation peptide. Not sexual coaching."
};
function peptideSkim(id, fallback) {
	return PEPTIDE_SKIM[id] || fallback || "Open the card for what the books actually say.";
}
function DoseList({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children: card.dosing.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md bg-accent p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-navy",
					children: d.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed",
					children: d.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [
						d.source.toUpperCase(),
						" · ",
						d.chapter,
						" · p.",
						d.pages
					]
				})
			]
		}, d.label))
	});
}
function PeptideView({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: card.desk ?? "core" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold tracking-tight",
				children: card.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-snug text-muted",
				children: peptideSkim(card.id, card.good_for[0])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wide text-primary",
				children: card.class_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: card.regulatory
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed",
				children: card.what_it_is
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-semibold uppercase tracking-wide text-primary",
				children: "Common-practice ranges — not a personal dose"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoseList, { card })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Cycle / washout. "
				}), card.cycle]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5 text-sm",
				children: card.not_for.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-danger-bg p-3 text-sm text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Flagged in the books: "
				}), card.contraindications.join(" · ")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: ["Sources: ", card.citations.join(" · ")]
			})
		]
	});
}
function StackView({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: card.category }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: card.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5 text-sm",
				children: card.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Duration. "
				}), card.duration]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed",
				children: card.use_when
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: card.source
			})
		]
	});
}
function ProtocolView({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "protocol" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: card.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5 text-sm",
				children: card.steps.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: card.timeline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: card.source
			})
		]
	});
}
function SafetyView() {
	const s = kb.safety;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-3 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: "Safety rails"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-danger-bg p-3 text-destructive",
				children: kb.meta.legal.full
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: DISCLAIMER_POINTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "list-none rounded-lg bg-accent p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: d.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: d.body
					})]
				}, d.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Full",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/terms",
					className: "font-semibold text-primary",
					children: "Terms & Disclaimers"
				}),
				" ",
				"— not affiliated, no liability, books take precedence."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5",
				children: s.universal_avoid.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: "GLP-1 hard stops (Vol 1 Ch.10)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5",
				children: s.glp1_boxed_style.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: "When it does not work (Vol 1 Ch.21)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5",
				children: s.nonresponse_tree.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-ok-bg p-3 text-ok",
				children: s.storage
			})
		]
	});
}
function GoalView({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "plain language" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold tracking-tight",
				children: card.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed",
				children: card.plain
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-semibold uppercase tracking-wide text-primary",
				children: "Start with"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "list-decimal space-y-1 pl-5 text-sm",
				children: card.firstDo.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			})] }),
			card.clarify?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-accent p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-xs font-semibold uppercase tracking-wide text-primary",
					children: "Worth knowing so the map fits"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "list-decimal space-y-1 pl-5",
					children: card.clarify.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "How this is usually sequenced. "
				}), card.sequence]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-warn-bg p-3 text-sm text-warn",
				children: card.caution
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: card.source
			})
		]
	});
}
function CompareView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-2 text-sm leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: "BPC-157 vs TB-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Volume 1 Chapter 5 comparison table (p.72):" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BPC-157" }), " — VEGF / NO, 15 aa, half-life 4–6 h, oral possible, 250–500 mcg daily in that table, GI and localized tendon, onset 1–2 weeks."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TB-500" }), " — actin / cell migration, 43 aa, half-life 8–12 h, injection, 2–5 mg twice weekly with a 4–6 mg/week load, systemic / muscle / multi-site, onset 2–4 weeks."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Complementary, not redundant. Vol 2 injury Stack A: BPC-157 500 mcg/day + TB-500 2–5 mg/week for 4–6 weeks." })
				]
			})
		]
	});
}
function RetrievedViews({ items }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Cards that match what you said will land here."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: items.map((it, i) => {
			if (it.kind === "goal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalView, { card: it.card }, `g-${it.card.id}-${i}`);
			if (it.kind === "peptide") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: it.card }, `p-${it.card.id}-${i}`);
			if (it.kind === "stack") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: it.card }, `s-${it.card.id}-${i}`);
			if (it.kind === "protocol") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtocolView, { card: it.card }, `r-${it.card.id}-${i}`);
			if (it.kind === "compare") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareView, {}, `c-${i}`);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyView, {}, `safe-${i}`);
		})
	});
}
function CopyNote({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		type: "button",
		onClick: () => {
			const payload = `Mr. Pep — educational (not medical advice)\n\n${text}\n\nTalk this through with a clinician. Do not self-prescribe. Research peptides are not approved drugs. Not affiliated with ISSCA. No liability.`;
			navigator.clipboard.writeText(payload);
		},
		children: "Copy"
	});
}
//#endregion
export { ProtocolView as a, StackView as c, PeptideView as i, peptideSkim as l, CopyNote as n, RetrievedViews as o, GoalView as r, SafetyView as s, Badge as t };
