import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as kb } from "./kb-Cf7MQEII.mjs";
import { a as PeptideView, l as StackView, n as Button } from "./library-cards-Daq-R0x-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mito-B_tS3dlD.js
var import_jsx_runtime = require_jsx_runtime();
function MitoPage() {
	const peptides = kb.peptides.filter((p) => p.desk === "mito" || p.id === "tesamorelin-mito");
	const stacks = kb.stacks.filter((s) => s.category === "mito" || s.category === "longevity");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
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
						children: "Mitochondria"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back to Mr. Pep"
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl space-y-6 px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
							children: "Longevity multiplier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: "Mitochondria first. Peptides second."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted",
							children: "ISSCA Volume 2 treats mitochondrial support as a multiplier of repair, immune quieting, and endocrine preservation — not as a license to stack unlisted injectables. MOTS-c, SS-31, and humanin are research literacy. If a card has no ISSCA dose, Mr. Pep will say so instead of inventing milligrams."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						{
							n: "01",
							t: "Quiet the noise",
							d: "Longevity Class I — BPC-157 + KPV. No GH yet."
						},
						{
							n: "02",
							t: "Protect the engine",
							d: "Sleep, protein, zone-2 and lifting. NAD talk without an IV recipe."
						},
						{
							n: "03",
							t: "Then signal",
							d: "Class II–V only when foundations hold. Wash out. If gains vanish, you compensated."
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
					className: "space-y-8",
					children: [peptides.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: p })
					}, p.id)), stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: s })
					}, s.id))]
				})
			]
		})]
	});
}
//#endregion
export { MitoPage as component };
