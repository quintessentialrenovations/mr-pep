import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-BXPk4NRR.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-transform transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			navy: "bg-navy text-navy-foreground hover:bg-navy/90",
			outline: "bg-card text-foreground shadow-[var(--shadow-border)] hover:bg-accent",
			ghost: "bg-transparent text-muted hover:bg-accent hover:text-foreground"
		},
		size: {
			default: "h-11 min-h-11 px-4 text-sm",
			sm: "h-9 min-h-9 px-3 text-xs",
			lg: "h-12 min-h-12 px-5 text-sm",
			icon: "size-11 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var LEGAL_EFFECTIVE = "September 8, 2026";
var LEGAL_SHORT = "Educational compilation of ISSCA publications. Not medical advice, not a prescription, not affiliated with ISSCA or any clinic, pharmacy, or manufacturer. No liability. A licensed clinician decides what you use.";
var DISCLAIMER_POINTS = [
	{
		title: "Educational only",
		body: "Mr. Pep compiles published ISSCA educational material (textbooks, and faculty magazines as extra context). It is not medical advice, a diagnosis, a prescription, or a treatment plan. Nothing here creates a clinician–patient relationship."
	},
	{
		title: "Not affiliated",
		body: "This guide is not affiliated with, endorsed by, sponsored by, or an official product of the International Society for Stem Cell Application (ISSCA), any ISSCA faculty author, any clinic, compounding pharmacy, peptide manufacturer, telehealth company, or government agency. Citing a publication is not an endorsement in either direction."
	},
	{
		title: "No liability",
		body: "You use this information at your own risk. The operator of Mr. Pep is not liable for any decision, purchase, injection, supplement, lab, or outcome that follows from reading or chatting here — including injury, illness, lost money, or regulatory trouble."
	},
	{
		title: "Books take precedence",
		body: "ISSCA Volumes 1–2 are the primary source. Faculty magazines and slide decks are additional context only. If they disagree, the textbooks win. Common-practice ranges in those books are not instructions to self-administer."
	},
	{
		title: "Approved vs research",
		body: "Some molecules discussed are FDA-approved prescription drugs (for example certain GLP-1 receptor agonists) and must be used only under a licensed prescriber, on-label. Many others are research or compounded peptides that are not approved for the uses described. This guide is not a license to buy research chemicals or to inject anything."
	},
	{
		title: "A clinician decides",
		body: "Do not start, stop, or change any therapy based on this chat. Talk with a qualified clinician who can examine you, review labs, and take responsibility for care. Scheduling a consult from this site, if offered, is optional and does not make the operator your doctor."
	}
];
var TERMS_SECTIONS = [
	{
		title: "1. Agreement",
		body: "By entering this site, tapping that you are 18 or older, or using Mr. Pep (the chat, library, mitochondrial pages, or any related pages), you agree to these Terms of Use and the Disclaimers. If you do not agree, do not use the site."
	},
	{
		title: "2. Who we are — and who we are not",
		body: "Mr. Pep is an educational information guide. It is not a medical practice, pharmacy, laboratory, or ISSCA office. It is not affiliated with ISSCA, BioPeptideX, any compounding pharmacy, any peptide brand, any faculty author named in ISSCA materials, or any clinician you may separately consult. Names, logos, and publication titles appear only to identify sources of educational data."
	},
	{
		title: "3. What this is",
		body: "Content is a compilation and restatement of publicly described ISSCA educational publications (The Science of Peptide Medicine Vol. 1, The Ultimate Guide to Peptide Medicine Vol. 2, and, as extra context only, ISSCA faculty magazines and slide material). It is provided for general information and literacy. It is not a complete copy of those works and is not a substitute for reading them with a clinician."
	},
	{
		title: "4. What this is not",
		body: "This is not medical advice, veterinary advice, legal advice, or a recommendation to obtain, compound, import, or inject any substance. It is not a marketplace. Dosing figures, stacks, and sequences are published educational examples from those sources, not personal orders. You must not treat a chat reply as authorization to use a drug or research chemical."
	},
	{
		title: "5. Eligibility",
		body: "You must be 18 years of age or older. This library is written for adult educational discussion. Pediatric use is out of scope except where a labeled product is used under a specialist, which this site does not arrange."
	},
	{
		title: "6. No professional relationship",
		body: "Use of Mr. Pep does not create a doctor–patient, pharmacist–patient, or attorney–client relationship with the operator or with ISSCA. A calendar or consult link, if present, is an invitation to speak with someone else. That third party has their own terms, licenses, and liability. We are not responsible for their advice or services."
	},
	{
		title: "7. Assumption of risk",
		body: "Peptides, hormones, metabolic drugs, and related topics involve medical, legal, and quality risks (including unapproved status, contamination, incorrect reconstitution, contraindication, and adverse events). You assume all risk for how you interpret or act on anything on this site."
	},
	{
		title: "8. Disclaimer of warranties",
		body: "THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, OR THAT THE COMPILATION MATCHES ANY PRINT EDITION. ISSCA publications may be updated; this compilation may lag or omit material."
	},
	{
		title: "9. Limitation of liability",
		body: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE OPERATOR OF MR. PEP, AND ANY PEOPLE OR ENTITIES PROVIDING THIS GUIDE, ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF HEALTH, DATA, PROFITS, OR BUSINESS, ARISING FROM USE OF THE SITE OR RELIANCE ON ITS CONTENT — EVEN IF ADVISED OF THE POSSIBILITY. DIRECT DAMAGES, IF ANY ARE EVER FOUND NON-WAIVABLE, ARE LIMITED TO ZERO U.S. DOLLARS, BECAUSE THE SERVICE IS PROVIDED FREE FOR EDUCATION. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE PLACES, LIABILITY IS LIMITED TO THE FULLEST EXTENT THE LAW ALLOWS."
	},
	{
		title: "10. Indemnity",
		body: "You agree to indemnify and hold harmless the operator of Mr. Pep from claims, damages, losses, and expenses (including reasonable legal fees) arising from your use of the site, your violation of these terms, or any decision you make after reading or chatting here — including obtaining or using peptides, drugs, or supplements."
	},
	{
		title: "11. Intellectual property",
		body: "ISSCA textbooks, magazines, faculty names, and related marks belong to their owners. This site does not claim ownership of those works. Original compilation, interface, and copy of Mr. Pep belong to the operator. You may not scrape the library to resell it as a medical product."
	},
	{
		title: "12. Acceptable use",
		body: "You will not use the site to seek a personal injection plan, to involve a minor, to promote illegal acquisition of drugs, or to bypass safety stops. We may refuse or end access at any time."
	},
	{
		title: "13. Privacy (short)",
		body: "This educational guide does not require an account. Age confirmation and language preference may be stored on your device (local storage). Do not paste names, medical-record numbers, or anyone else’s health information into the chat. Conversations may be processed to generate a reply and are not a confidential medical record."
	},
	{
		title: "14. Governing law",
		body: "These terms are governed by the laws of the State of Florida, United States, without regard to conflict-of-law rules, except where a mandatory consumer law in your home jurisdiction cannot be waived. Exclusive venue for disputes that cannot be resolved informally is the state or federal courts located in Florida, unless a non-waivable law says otherwise."
	},
	{
		title: "15. Changes",
		body: "We may update these terms. The effective date above will change when we do. Continued use after an update is acceptance of the new terms."
	},
	{
		title: "16. Contact",
		body: "Questions about these terms: use the consult link on the site if one is offered, or do not use the guide if you cannot accept them. No email here creates a duty to treat, advise, or respond clinically."
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl space-y-3 px-4 py-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted",
				children: LEGAL_SHORT
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "text-primary",
						children: "Terms & Disclaimers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/library",
						className: "text-muted",
						children: "Library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/mito",
						className: "text-muted",
						children: "Mitochondria"
					})
				]
			})]
		})
	});
}
//#endregion
export { TERMS_SECTIONS as a, SiteFooter as i, DISCLAIMER_POINTS as n, cn as o, LEGAL_EFFECTIVE as r, Button as t };
