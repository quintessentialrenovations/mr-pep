import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as kb } from "./kb-DMTCCrYb.mjs";
import { i as SiteFooter, t as Button } from "./site-footer-BXPk4NRR.mjs";
import { c as StackView, i as PeptideView } from "./library-cards-jRUQ7W6D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/protocols-D9xFcPtM.js
var import_jsx_runtime = require_jsx_runtime();
var PEPTIDE_IDS = [
	"glp1",
	"tesamorelin-mito",
	"cjc-ipam"
];
var STACK_IDS = ["glp-t2d", "metabolic-v2-1"];
function ProtocolsPage() {
	const peptides = PEPTIDE_IDS.map((id) => kb.peptides.find((p) => p.id === id)).filter((p) => Boolean(p));
	const stacks = STACK_IDS.map((id) => kb.stacks.find((s) => s.id === id)).filter((s) => Boolean(s));
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
				className: "mx-auto max-w-6xl space-y-6 px-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
								children: "Metabolic literacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-semibold tracking-tight",
								children: "Metabolic & GLP-1 protocols."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted",
								children: "GLP-1 receptor agonists changed the metabolic conversation by acting on appetite, gastric emptying, and glucose signaling — but they are approved drugs that follow their label under a clinician, not a lever to pull at home. The cards below explain what the books discuss around metabolic support and growth-hormone-axis signaling. If a card has no ISSCA dose, Mr. Pep will say so instead of inventing milligrams. Nothing here is a prescription and no doses are stated."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 md:grid-cols-3",
						children: [
							{
								n: "01",
								t: "Foundations first",
								d: "Protein, sleep, resistance training and zone-2 carry the metabolic load before any signal."
							},
							{
								n: "02",
								t: "Label-bound signals",
								d: "Approved GLP-1s follow the label. A clinician sets the plan, titration, and monitoring — not a card."
							},
							{
								n: "03",
								t: "Preserve, don't chase",
								d: "Protect lean mass while weight moves. If gains vanish on a wash-out, foundations did the work."
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-card p-5 text-center shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-primary",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-lg font-semibold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: s.d
								})
							]
						}, s.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card p-6 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
								children: "What the first weeks look like"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-xl font-semibold",
								children: "A qualitative timeline — no doses, no promises."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Individual response varies widely. This is a general, educational picture of how a clinician-managed metabolic plan often unfolds — not a schedule to self-administer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-4",
								children: [
									{
										w: "Week 1–2",
										t: "Settling in",
										d: "Appetite signaling shifts and portions often feel smaller. Some notice mild nausea or fullness. Hydration, protein, and slower meals matter most here."
									},
									{
										w: "Week 3–4",
										t: "Finding rhythm",
										d: "Eating patterns start to feel more predictable. This is where lean-mass protection — protein and resistance training — earns its keep so weight loss isn't muscle loss."
									},
									{
										w: "Week 5–8",
										t: "Steady state",
										d: "Habits and appetite tend to stabilize. Clinicians watch tolerance, energy, and body composition, adjusting the plan to the person rather than a template."
									},
									{
										w: "Beyond",
										t: "Maintenance mindset",
										d: "The durable wins are behavioral. If results depend entirely on a signal, the foundation underneath still needs building. A clinician decides what continues."
									}
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1 border-l-2 border-primary pl-4 sm:flex-row sm:items-baseline sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "w-24 shrink-0 font-display text-sm font-semibold text-primary",
										children: row.w
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm font-semibold",
										children: row.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-muted",
										children: row.d
									})] })]
								}, row.w))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [peptides.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: p })
						}, p.id)), stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: s })
						}, s.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-warn-bg px-4 py-3 text-center text-sm text-warn",
						children: "Educational only — not a prescription and not medical advice. No specific doses are provided here. Approved GLP-1 medications follow their label; research peptides are not approved drugs. Not affiliated with ISSCA or any clinic. A licensed clinician decides what you actually use."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProtocolsPage as component };
