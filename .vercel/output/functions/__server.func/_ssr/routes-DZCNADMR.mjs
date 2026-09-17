import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as kb } from "./kb-Cf7MQEII.mjs";
import { i as askFromFeatured, t as FEATURED } from "./goals-JBdGIbH_.mjs";
import { a as shouldClarify, i as retrieveAsk, r as matchGoals, t as composeClarify } from "./retrieve-O75Xofb3.mjs";
import { n as Button, r as CopyNote, s as RetrievedViews, t as Badge, u as cn } from "./library-cards-Daq-R0x-.mjs";
import { a as ScanFace, c as Moon, d as HeartPulse, f as FlaskConical, h as Bandage, i as Send, l as LoaderCircle, m as Bone, o as Scale, p as Calendar, r as ShieldAlert, s as Salad, t as Zap, u as Library } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DZCNADMR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askDrPep = createServerFn({ method: "POST" }).validator((input) => {
	return {
		question: (input.question || "").trim().slice(0, 900),
		history: (input.history || []).slice(-6)
	};
}).handler(createSsrRpc("f9bf58ef79744b0f4e6ca52833f518815c60f7f3b9ae8d209c8657568b8bde92"));
function loadAdult() {
	if (typeof window === "undefined") return false;
	return window.localStorage.getItem("bpx-adult") === "1";
}
var useDesk = create((set) => ({
	adult: false,
	lang: "en",
	messages: [],
	pinned: [],
	busy: false,
	setAdult: () => {
		if (typeof window !== "undefined") window.localStorage.setItem("bpx-adult", "1");
		set({ adult: true });
	},
	setLang: (lang) => set({ lang }),
	add: (m) => set((s) => ({ messages: [...s.messages, m] })),
	setPinned: (pinned) => set({ pinned }),
	setBusy: (busy) => set({ busy }),
	clear: () => set({
		messages: [],
		pinned: []
	})
}));
function hydrateAdult() {
	useDesk.setState({ adult: loadAdult() });
}
function AgeGate({ onAdult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-navy/80 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl bg-card p-6 text-center shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
					children: "Age verification"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl font-semibold tracking-tight text-foreground",
					children: "Are you 18 or older?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "This guide quotes ISSCA textbooks. It is educational, not a prescription. Research peptides are not approved drugs — not a consumer treatment plan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: onAdult,
						children: "Yes, I am 18 or older"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						type: "button",
						children: "No"
					})]
				})
			]
		})
	});
}
var ICONS = {
	weight: Scale,
	tired: Moon,
	injury: Bandage,
	joints: Bone,
	glow: ScanFace,
	longevity: HeartPulse,
	gut: Salad,
	mito: Zap
};
function FeelPicker({ lang, selected, onToggle, onAsk, disabled }) {
	const ready = selected.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-accent p-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold",
				children: lang === "es" ? "Empieza por como te sientes" : "Start with how you feel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted",
				children: lang === "es" ? "Toca lo que es verdad. Puedes tocar varios." : "Tap what is true. You can tap more than one."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: FEATURED.map((g) => {
					const Icon = ICONS[g.id] ?? Scale;
					const on = selected.includes(g.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled,
						onClick: () => onToggle(g.id),
						className: cn("flex min-h-14 items-start gap-2 rounded-md px-3 py-3 text-left text-sm shadow-[var(--shadow-border)] transition-colors duration-150", on ? "bg-navy text-navy-foreground" : "bg-card text-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("mt-0.5 size-4 shrink-0", on ? "text-cyan" : "text-primary") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold leading-snug",
							children: g.chip[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 block text-xs leading-snug", on ? "text-cyan" : "text-muted"),
							children: g.hint[lang]
						})] })]
					}, g.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: !ready || disabled,
					onClick: () => onAsk(askFromFeatured(selected)),
					children: lang === "es" ? "Continuar" : "Continue"
				})
			})
		]
	});
}
function HeardPills({ text, lang }) {
	const goals = matchGoals(text);
	if (!goals.length || !text.trim()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "px-4 pb-2 text-xs text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold uppercase tracking-wide text-primary",
			children: lang === "es" ? "Te escucho: " : "Heard: "
		}), goals.map((g) => lang === "es" ? g.chip.es : g.chip.en).join(" · ")]
	});
}
function renderInline(text) {
	return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold text-foreground",
			children: part.slice(2, -2)
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i);
	});
}
function MarkdownLite({ text }) {
	const blocks = text.split(/\n{2,}/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 text-sm leading-relaxed text-foreground",
		children: blocks.map((block, i) => {
			const lines = block.split("\n");
			if (lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc space-y-1 pl-5",
				children: lines.map((l, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: renderInline(l.replace(/^\s*[-*]\s/, "")) }, j))
			}, i);
			if (lines[0]?.startsWith("#")) {
				const t = lines[0].replace(/^#+\s*/, "");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: t
				}, i);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lines.map((l, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [j > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}) : null, renderInline(l)] }, j)) }, i);
		})
	});
}
var copy = {
	en: {
		kicker: "For you · educational, not a checkout",
		titleA: "Let us know how you feel.",
		titleB: "What questions do you have around health, longevity, peptides, mitochondrial support?",
		lede: "Tap how you feel below, or type it in your words. We'll ask a couple of questions, then sequence what the books discuss, including mitochondrial support. A clinician decides what you actually use.",
		status: "ISSCA-grounded",
		banner: "Educational only — not a prescription. Approved GLP-1s follow the label. Research peptides are not interchangeable with approved drugs. Talk anything you use through with a clinician.",
		ask: "Conversation",
		ph: "I'm tired, my joints hurt, I want more energy…",
		send: "Ask",
		consult: "Schedule a consult",
		library: "Matching cards",
		browse: "Full library"
	},
	es: {
		kicker: "Para ti · educativo, no es el checkout",
		titleA: "Cuentanos como te sientes.",
		titleB: "Que preguntas tienes sobre salud, longevidad, peptidos, apoyo mitocondrial?",
		lede: "Toca como te sientes, o escribelo. Primero unas preguntas, luego la secuencia de los libros, incluido el apoyo mitocondrial. Un clinico decide que usas.",
		status: "Basado en ISSCA",
		banner: "Solo educativo. Los GLP-1 aprobados siguen la ficha tecnica. Los peptidos de investigacion no son medicamentos aprobados. Habla con un clinico antes de usar nada.",
		ask: "Conversacion",
		ph: "Estoy cansado, me duelen las articulaciones, quiero mas energia…",
		send: "Preguntar",
		consult: "Agendar consulta",
		library: "Fichas que coinciden",
		browse: "Biblioteca"
	}
};
function Desk() {
	const adult = useDesk((s) => s.adult);
	const setAdult = useDesk((s) => s.setAdult);
	const lang = useDesk((s) => s.lang);
	const setLang = useDesk((s) => s.setLang);
	const messages = useDesk((s) => s.messages);
	const add = useDesk((s) => s.add);
	const clear = useDesk((s) => s.clear);
	const pinned = useDesk((s) => s.pinned);
	const setPinned = useDesk((s) => s.setPinned);
	const busy = useDesk((s) => s.busy);
	const setBusy = useDesk((s) => s.setBusy);
	const [q, setQ] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [mobileLib, setMobileLib] = (0, import_react.useState)(false);
	const logRef = (0, import_react.useRef)(null);
	const t = copy[lang];
	(0, import_react.useEffect)(() => {
		hydrateAdult();
	}, []);
	(0, import_react.useEffect)(() => {
		logRef.current?.scrollTo({
			top: logRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, busy]);
	function toggleFeel(id) {
		setSelected((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
	}
	async function submit(text) {
		const question = text.trim();
		if (!question || busy) return;
		setQ("");
		setSelected([]);
		add({
			id: crypto.randomUUID(),
			role: "user",
			text: question
		});
		const prior = useDesk.getState().messages.filter((m) => m.role === "user").map((m) => m.text);
		const r = retrieveAsk(question, prior);
		const askedBefore = useDesk.getState().messages.some((m) => m.role === "assistant");
		const clarifying = shouldClarify(r.goals, askedBefore ? 1 : 0);
		setPinned(clarifying ? [] : r.items);
		setBusy(true);
		try {
			const res = await askDrPep({ data: {
				question,
				history: useDesk.getState().messages.filter((m) => m.role === "user" || m.role === "assistant").slice(-6).map((m) => ({
					role: m.role,
					content: m.text
				}))
			} });
			add({
				id: crypto.randomUUID(),
				role: "assistant",
				text: res.text,
				usedModel: res.usedModel,
				hardStop: res.hardStop
			});
			if (!res.clarify && r.items.length) setPinned(r.items);
		} catch {
			add({
				id: crypto.randomUUID(),
				role: "assistant",
				text: clarifying ? composeClarify(r.goals) : r.map || r.context || kb.meta.legal.short,
				usedModel: false
			});
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			!adult ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeGate, { onAdult: setAdult }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/bpx-wordmark.jpg",
							alt: "BPX",
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden border-l border-border pl-2 text-xs font-semibold uppercase tracking-wide text-muted sm:block",
							children: "Mr. Pep"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library",
								className: "hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-4" }), "Library"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mito",
								className: "hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-4" }), "Mitochondria"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex overflow-hidden rounded-full bg-card shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `min-h-9 px-3 py-2 text-xs font-bold ${lang === "en" ? "bg-navy text-navy-foreground" : "text-muted"}`,
									onClick: () => setLang("en"),
									children: "EN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `min-h-9 px-3 py-2 text-xs font-bold ${lang === "es" ? "bg-navy text-navy-foreground" : "text-muted"}`,
									onClick: () => setLang("es"),
									children: "ES"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#consult",
									target: void 0,
									rel: void 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), t.consult]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 pb-24 sm:pb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
								children: t.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
								children: t.titleA
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-2xl font-display text-lg font-semibold leading-snug text-primary sm:text-xl",
								children: t.titleB
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted",
								children: t.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "mx-auto mt-5 flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-card p-4 text-left shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/bpx-mark.jpg",
									alt: "",
									className: "size-12 rounded-lg object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base font-semibold",
									children: "Mr. Pep"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block size-2 rounded-full bg-ok" }), t.status]
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 rounded-lg bg-warn-bg px-4 py-3 text-center text-sm text-warn",
						children: t.banner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: pinned.length ? "grid gap-4 lg:grid-cols-[1.15fr_0.85fr]" : "mx-auto max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex min-h-[560px] flex-col rounded-xl bg-card shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted",
										children: t.ask
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => {
											clear();
											setSelected([]);
										},
										children: "Clear"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: logRef,
									className: "flex-1 space-y-3 overflow-y-auto px-4 py-4",
									children: [
										messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeelPicker, {
											lang,
											selected,
											onToggle: toggleFeel,
											onAsk: (question) => void submit(question),
											disabled: busy
										}) : null,
										messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `max-w-[92%] rounded-lg px-3 py-3 text-sm ${m.role === "user" ? "ml-auto bg-accent" : "bg-background shadow-[var(--shadow-border)]"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-1 text-xs font-semibold uppercase tracking-wide text-muted",
													children: m.role === "user" ? "You" : "Mr. Pep"
												}),
												m.hardStop ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mb-2 flex items-center gap-1 text-destructive",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4" }), " Safety stop"]
												}) : null,
												m.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownLite, { text: m.text }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }),
												m.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyNote, { text: m.text })
												}) : null
											]
										}, m.id)),
										busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-sm text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }), " Looking that up…"]
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeardPills, {
									text: q.trim() ? q : askFromFeatured(selected),
									lang
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "flex gap-2 border-t border-border p-3",
									onSubmit: (e) => {
										e.preventDefault();
										submit(q);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: q,
										onChange: (e) => setQ(e.target.value),
										placeholder: t.ph,
										className: "h-11 min-h-11 flex-1 rounded-md bg-background px-3 text-sm shadow-[var(--shadow-border)] outline-none ring-ring focus:ring-2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										disabled: busy,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), t.send]
									})]
								})
							]
						}), pinned.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "hidden rounded-xl bg-card p-4 shadow-[var(--shadow-border)] lg:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted",
									children: t.library
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/library",
									className: "text-xs font-semibold text-primary",
									children: t.browse
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-[640px] overflow-y-auto pr-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetrievedViews, { items: pinned })
							})]
						}) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "fixed bottom-4 right-4 z-30 flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-sm font-semibold text-navy-foreground shadow-[var(--shadow-border)] lg:hidden",
				onClick: () => setMobileLib(true),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-4" }),
					" Cards",
					pinned.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-primary text-primary-foreground",
						children: pinned.length
					}) : null
				]
			}),
			mobileLib ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-navy/50 lg:hidden",
				onClick: () => setMobileLib(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-xl bg-card p-4",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-semibold",
							children: "Matching cards"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setMobileLib(false),
							children: "Close"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetrievedViews, { items: pinned })]
				})
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, {});
}
//#endregion
export { Home as component };
