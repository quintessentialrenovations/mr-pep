import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as kb } from "./kb-DDN-pANJ.mjs";
import { i as SiteFooter, o as cn, t as Button } from "./site-footer-B6lUeUrh.mjs";
import { c as StackView, i as PeptideView, l as peptideSkim, t as Badge } from "./library-cards-BemypTGW.mjs";
import { h as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/protocols-DqiTJb4A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var METABOLIC_PEPTIDES = [
	"glp1",
	"tesamorelin-mito",
	"cjc-ipam"
];
var METABOLIC_STACKS = ["glp-t2d", "metabolic-v2-1"];
var BROWSE_TABS = ["peptides", "stacks"];
var timeline = [
	{
		period: "0-24 hours",
		emoji: "💊",
		desc: "A labeled GLP-1 begins acting on appetite and blood-sugar signaling. Some people notice less hunger; many notice nothing on day one. Response is individual."
	},
	{
		period: "First few days",
		emoji: "📉",
		desc: "Appetite suppression is often most noticeable. Nausea or fullness can appear as the body adjusts. A prescriber manages side effects and decides whether to hold or change anything."
	},
	{
		period: "Weeks 1-2",
		emoji: "🔥",
		desc: "The body settles on the starting dose before any titration a clinician may choose. Protein and resistance training start now, not later, so you do not lose muscle with the fat."
	},
	{
		period: "Weeks 3-6",
		emoji: "⚡",
		desc: "Early shifts in weight and blood-sugar patterns may appear. Volume 2 treats this as a slow, monitored process, not a crash. Dose changes stay with the prescriber and the label."
	},
	{
		period: "Long term",
		emoji: "🧠",
		desc: "The Volume 2 objective is metabolic clarity, not the fastest possible weight loss. Muscle, sleep, and labs matter as much as the scale. A clinician owns the plan."
	}
];
function ProtocolsPage() {
	const peptides = kb.peptides.filter((p) => METABOLIC_PEPTIDES.includes(p.id));
	const stacks = kb.stacks.filter((s) => METABOLIC_STACKS.includes(s.id));
	const [browseTab, setBrowseTab] = (0, import_react.useState)("peptides");
	const [openId, setOpenId] = (0, import_react.useState)(kb.peptides[0]?.id ?? null);
	const openPeptide = kb.peptides.find((p) => p.id === openId);
	const openStack = kb.stacks.find((s) => s.id === openId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/bpx-wordmark.jpg",
							alt: "BPX",
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold",
							children: "Protocols"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							children: "Terms"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl space-y-8 px-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-primary",
									children: "Education center"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-3xl font-semibold tracking-tight",
								children: "Metabolic protocols, the way the books frame them."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted",
								children: "ISSCA's metabolic chapter is about labeled GLP-1 medicines, semaglutide, tirzepatide, liraglutide, used under a prescriber and according to the label, not a research \"fat peptide\" from a chat. Protein and lifting are mandatory so you do not melt muscle. Mr. Pep shows what the compounds are and how they are sequenced. It does not hand you a personal dose to inject. A clinician decides that."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [peptides.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: p })
						}, p.id)), stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: s })
						}, s.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "What the first weeks tend to look like"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "A general, educational pattern, not a schedule to self-administer. Your prescriber sets dose, timing, and monitoring."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4",
							children: timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-10 items-center justify-center rounded-xl bg-primary/8 text-lg",
										children: item.emoji
									}), i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-8 w-px bg-border" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold",
										children: item.period
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm leading-relaxed text-muted",
										children: item.desc
									})]
								})]
							}, item.period))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Browse every compound"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "The full library, not just the metabolic set. Pick a compound to open its ranges, cycling, and cautions. This is reference reading, not a shopping list or a prescription."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 lg:grid-cols-[340px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex flex-wrap gap-1",
								children: BROWSE_TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setBrowseTab(t);
										if (t === "peptides") setOpenId(kb.peptides[0]?.id ?? null);
										if (t === "stacks") setOpenId(kb.stacks[0]?.id ?? null);
									},
									className: cn("min-h-9 rounded-full px-3 py-2 text-xs font-semibold", browseTab === t ? "bg-navy text-navy-foreground" : "bg-card text-muted shadow-[var(--shadow-border)]"),
									children: t === "peptides" ? "compounds" : "stacks"
								}, t))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex max-h-[70vh] flex-col gap-2 overflow-y-auto",
								children: [browseTab === "peptides" ? kb.peptides.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpenId(p.id),
									className: cn("rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]", openId === p.id ? "ring-2 ring-ring" : ""),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-semibold leading-snug",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: p.desk ?? "core" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-snug text-muted",
										children: peptideSkim(p.id, p.good_for[0])
									})]
								}, p.id)) : null, browseTab === "stacks" ? kb.stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpenId(s.id),
									className: cn("rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]", openId === s.id ? "ring-2 ring-ring" : ""),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-semibold leading-snug",
											children: s.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: s.category })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-snug text-muted",
										children: s.use_when
									})]
								}, s.id)) : null]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
								children: [browseTab === "peptides" && openPeptide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: openPeptide }) : null, browseTab === "stacks" && openStack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: openStack }) : null]
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl border border-border bg-card p-4 text-xs leading-relaxed text-muted",
						children: "Educational only, not a prescription and not personal medical advice. Approved GLP-1 medicines must be used only under a licensed prescriber, according to the product label. Research or compounded peptides are not approved drugs. A clinician decides what you actually use."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProtocolsPage as component };
