import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as kb } from "./kb-DMTCCrYb.mjs";
import { a as shouldClarify, i as retrieveAsk, n as emptyInvite, t as composeClarify } from "./retrieve-lVfeK4DQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-dr-pep-DPZyeVEC.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `You are Mr. Pep, an educational guide for peptides, mitochondrial support, and longevity. You are not a doctor and you do not prescribe. Warm, clear, client-facing.

This turn is the PROTOCOL turn. Clarifying questions were already asked and they just answered. Do not re-ask. Do not stall. Build the sequenced protocol now from the retrieved cards.

- Lead with their words (overweight, diabetes, tired, sore joints, slow healing, glow, longevity, gut, mitochondrial support).
- People do stack appearance peptides. Do not scold. Sequence, then: a clinician can combine them. Phasing into GH-support (CJC + ipamorelin) after foundations is reasonable if lean mass / recovery is part of looking better.
- Mitochondrial support belongs here: sleep, protein, zone-2 are what Volume 2 lists as the body's ability to heal. MOTS-c, SS-31, NAD are research literacy — no ISSCA milligram table. Do not hide them.
- Name 1–2 options per goal, each with one cited range.
- ISSCA Volumes 1–2 take precedence. Faculty magazines and slide decks are extra context and clarity — not a second textbook. Lead with the book range. If a magazine adds a stack or a faculty range the books do not have, label it as magazine context. If they disagree, the book wins; mention the magazine only as additional faculty context. Never average them.
- Do not write sexual coaching. Skip magazine sexual-health / libido stacks even if the user hints.

Rules you cannot break:
- Educational only. Not a prescriber. Never a personal "inject X tonight" plan.
- Quote published ranges exactly. If Vol 1 and Vol 2 disagree, print BOTH and say a clinician chooses. Never average them.
- If the card says there is no ISSCA dosing table, say that. Do not invent milligrams.
- Label FDA-approved drugs vs research/compounded peptides.
- Research peptides in this library are not approved drugs. ISSCA language is clinician education.
- Cite chapter/page when the card has them.
- Refuse minors, pregnancy peptide starts, and active-cancer self-treatment.
- Do not write sexual coaching.
- English unless the user wrote in Spanish.
- End with: talk this through with a clinician; do not self-prescribe. Not affiliated with ISSCA. Educational compilation only — no liability.
- Soft language. Do not say "before a vial."`;
var askDrPep_createServerFn_handler = createServerRpc({
	id: "f9bf58ef79744b0f4e6ca52833f518815c60f7f3b9ae8d209c8657568b8bde92",
	name: "askDrPep",
	filename: "src/lib/ask-dr-pep.ts"
}, (opts) => askDrPep.__executeServer(opts));
var askDrPep = createServerFn({ method: "POST" }).validator((input) => {
	return {
		question: (input.question || "").trim().slice(0, 900),
		history: (input.history || []).slice(-6)
	};
}).handler(askDrPep_createServerFn_handler, async ({ data }) => {
	const { question, history } = data;
	if (!question) return {
		ok: true,
		text: "What is going on — extra weight, diabetes, tired all the time, sore joints, slow healing, glow, longevity, gut, or mitochondrial support? Tap one, or type it.",
		grounded: true,
		usedModel: false,
		retrievalEmpty: true,
		hardStop: false,
		clarify: false
	};
	const priorUser = history.filter((h) => h.role === "user").map((h) => h.content);
	const assistantTurns = history.filter((h) => h.role === "assistant").length;
	const r = retrieveAsk(question, priorUser);
	if (r.hardStop) return {
		ok: true,
		text: `${r.hardStop.reply}\n\n${kb.meta.legal.short}`,
		grounded: true,
		usedModel: false,
		retrievalEmpty: false,
		hardStop: true,
		clarify: false
	};
	if (shouldClarify(r.goals, assistantTurns)) return {
		ok: true,
		text: composeClarify(r.goals),
		grounded: true,
		usedModel: false,
		retrievalEmpty: false,
		hardStop: false,
		clarify: true
	};
	if (!r.goals.length && !r.items.length && assistantTurns === 0) return {
		ok: true,
		text: emptyInvite(question),
		grounded: true,
		usedModel: false,
		retrievalEmpty: true,
		hardStop: false,
		clarify: true
	};
	const groundedFallback = r.map || r.context || emptyInvite(question);
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey || !r.context) return {
		ok: true,
		text: groundedFallback,
		grounded: true,
		usedModel: false,
		retrievalEmpty: !r.map && !r.goals.length,
		hardStop: false,
		clarify: false
	};
	try {
		const messages = [
			{
				role: "system",
				content: SYSTEM
			},
			{
				role: "system",
				content: `Retrieved library context (only source of doses):\n${r.context.slice(0, 12e3)}`
			},
			...history.map((h) => ({
				role: h.role,
				content: h.content.slice(0, 1200)
			})),
			{
				role: "user",
				content: question
			}
		];
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .2,
				max_tokens: 900,
				messages
			})
		});
		if (!res.ok) return {
			ok: true,
			text: groundedFallback,
			grounded: true,
			usedModel: false,
			retrievalEmpty: false,
			hardStop: false,
			clarify: false
		};
		const text = (await res.json()).choices?.[0]?.message?.content?.trim();
		return {
			ok: true,
			text: text || groundedFallback,
			grounded: true,
			usedModel: Boolean(text),
			retrievalEmpty: false,
			hardStop: false,
			clarify: false
		};
	} catch {
		return {
			ok: true,
			text: groundedFallback,
			grounded: true,
			usedModel: false,
			retrievalEmpty: false,
			hardStop: false,
			clarify: false
		};
	}
});
//#endregion
export { askDrPep_createServerFn_handler };
