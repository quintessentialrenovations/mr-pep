import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as kb } from "./kb-Cf7MQEII.mjs";
import { n as GOALS } from "./goals-JBdGIbH_.mjs";
import { a as PeptideView, c as SafetyView, d as peptideSkim, i as GoalView, l as StackView, n as Button, o as ProtocolView, t as Badge, u as cn } from "./library-cards-Daq-R0x-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-BVN03ewB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"feel",
	"peptides",
	"stacks",
	"protocols",
	"safety"
];
function LibraryPage() {
	const [tab, setTab] = (0, import_react.useState)("peptides");
	const [openId, setOpenId] = (0, import_react.useState)(kb.peptides[0]?.id ?? null);
	const peptide = kb.peptides.find((p) => p.id === openId);
	const stack = kb.stacks.find((s) => s.id === openId);
	const protocol = kb.protocols.find((p) => p.id === openId);
	const goal = GOALS.find((g) => g.id === openId);
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
						children: "Library"
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
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[340px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-center text-sm leading-relaxed text-muted",
					children: "Skim what it does in plain language. Open a card for ranges, cycling, and cautions — not a shopping list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex flex-wrap justify-center gap-1",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setTab(t);
							if (t === "feel") setOpenId(GOALS[0]?.id ?? null);
							if (t === "peptides") setOpenId(kb.peptides[0]?.id ?? null);
							if (t === "stacks") setOpenId(kb.stacks[0]?.id ?? null);
							if (t === "protocols") setOpenId(kb.protocols[0]?.id ?? null);
						},
						className: cn("min-h-9 rounded-full px-3 py-2 text-xs font-semibold", tab === t ? "bg-navy text-navy-foreground" : "bg-card text-muted shadow-[var(--shadow-border)]"),
						children: t === "feel" ? "how you feel" : t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex max-h-[70vh] flex-col gap-2 overflow-y-auto",
					children: [
						tab === "feel" ? GOALS.filter((g) => g.id !== "puffiness").map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenId(g.id),
							className: cn("rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]", openId === g.id ? "ring-2 ring-ring" : ""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-sm font-semibold",
								children: g.chip.en
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm leading-snug text-muted",
								children: g.hint.en
							})]
						}, g.id)) : null,
						tab === "peptides" ? kb.peptides.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
						}, p.id)) : null,
						tab === "stacks" ? kb.stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
						}, s.id)) : null,
						tab === "protocols" ? kb.protocols.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenId(p.id),
							className: cn("rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]", openId === p.id ? "ring-2 ring-ring" : ""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-sm font-semibold leading-snug",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm leading-snug text-muted",
								children: p.timeline
							})]
						}, p.id)) : null
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
				children: [
					tab === "safety" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyView, {}) : null,
					tab === "feel" && goal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalView, { card: goal }) : null,
					tab === "peptides" && peptide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeptideView, { card: peptide }) : null,
					tab === "stacks" && stack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, { card: stack }) : null,
					tab === "protocols" && protocol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtocolView, { card: protocol }) : null
				]
			})]
		})]
	});
}
//#endregion
export { LibraryPage as component };
