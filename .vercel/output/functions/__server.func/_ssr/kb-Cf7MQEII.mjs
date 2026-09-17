//#region node_modules/.nitro/vite/services/ssr/assets/kb-Cf7MQEII.js
var protocols_default = {
	meta: {
		"title": "ISSCA Peptide Educational Knowledge Base",
		"version": "1.0.0",
		"sources": [{
			"id": "vol1",
			"name": "The Science of Peptide Medicine, Volume 1",
			"publisher": "International Society for Stem Cell Application (ISSCA)",
			"year": 2026
		}, {
			"id": "vol2",
			"name": "The Ultimate Guide to Peptide Medicine, Volume 2 — A Practical Clinical & Applied Guide",
			"publisher": "ISSCA",
			"year": 2026
		}],
		"legal": {
			"short": "Educational information from ISSCA textbooks. Not medical advice, not a prescription, not a substitute for evaluation by a licensed clinician.",
			"full": "The information in this assistant is drawn from ISSCA educational textbooks written for clinicians. It is intended for education only. It does not constitute medical advice, a diagnosis, or a prescription. Dosing figures are published common-practice ranges and protocol examples from those books, not instructions for self-administration. Many peptides discussed are not FDA-approved for the uses described in research or clinic protocols. Approved prescription medicines (for example branded GLP-1 receptor agonists) must be used only under a licensed prescriber, according to the product label. Compounded or research peptides carry quality, legality, and safety variability. Do not start, stop, or change any therapy based on this chat. Talk with a qualified clinician who can examine you, review labs, and take responsibility for care."
		}
	},
	disclaimers: {
		"always": [
			"Educational only — not a prescription and not personal medical advice.",
			"Ranges below are common-practice figures published in ISSCA Volumes 1–2, cited by chapter.",
			"A licensed clinician must individualize dose, route, labs, and monitoring.",
			"Do not buy research chemicals and self-inject from this chat."
		],
		"approved_vs_research": "ISSCA discusses both FDA-approved prescription peptides (certain GLP-1 receptor agonists, bremelanotide, setmelanotide, hCG products, tesamorelin, thymosin alpha-1 in some countries) and research/compounded peptides that are not approved for the uses described. This assistant labels that distinction on every card."
	},
	hard_stops: [
		{
			"id": "prescribe",
			"triggers": [
				"tell me exactly what to inject",
				"prescribe",
				"what should i take tonight",
				"how many units should i pin",
				"write me a script"
			],
			"reply": "I cannot prescribe or tell you a personal dose to inject. I can show the published ISSCA common-practice ranges and the safety checks a clinician uses. Share this card with your clinician."
		},
		{
			"id": "pregnancy",
			"triggers": [
				"pregnant",
				"pregnancy",
				"breastfeeding",
				"lactating",
				"trying to conceive peptide"
			],
			"reply": "ISSCA lists pregnancy and lactation as insufficient-safety / do-not-use contexts for nearly all peptides in this library except specialist obstetric/fertility protocols run by a reproductive clinician. Do not start peptides in pregnancy. Speak with your OB or fertility specialist."
		},
		{
			"id": "cancer",
			"triggers": [
				"active cancer",
				"i have cancer",
				"tumor",
				"malignancy",
				"chemotherapy peptide"
			],
			"reply": "ISSCA flags active malignancy as a hard caution for angiogenesis-related peptides (BPC-157, TB-500) and IGF-1–raising GH secretagogues. Oncology-adjacent use of thymosin alpha-1 is described only as clinician-coordinated adjuvant care. Do not self-treat cancer with peptides."
		},
		{
			"id": "minor",
			"triggers": [
				"my kid",
				"my child",
				"teenager",
				"16 year",
				"under 18"
			],
			"reply": "This educational library is written for adult clinical practice. Pediatric peptide use (other than labeled setmelanotide in rare genetic obesity under a specialist) is out of scope here."
		}
	],
	peptides: [
		{
			"id": "bpc-157",
			"name": "BPC-157",
			"aliases": [
				"bpc",
				"bpc157",
				"bpc 157",
				"body protection compound",
				"pentadecapeptide"
			],
			"class_name": "Tissue repair / gastric-derived pentadecapeptide",
			"regulatory": "Research / compounded in most jurisdictions. Not FDA-approved as a finished drug for injury or gut indications.",
			"what_it_is": "15-amino-acid fragment from human gastric juice (Body Protection Compound). Acid-stable enough that oral use is discussed for gut applications. Short plasma half-life (<30 minutes) with longer tissue signaling (VEGF / angiogenesis, growth-factor and nitric-oxide pathways, cell migration).",
			"good_for": [
				"Tendon and ligament injuries that have stalled",
				"Gut barrier / ulcer / IBD-pattern mucosal repair",
				"Post-surgical soft-tissue recovery",
				"Wound healing support",
				"Nerve-irritation adjunct in ISSCA protocols"
			],
			"not_for": [
				"First-line painkiller instead of rehab",
				"Cosmetic or vague wellness without a repair target",
				"Active malignancy (theoretical angiogenesis concern)",
				"Pregnancy / lactation (no safety data)"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1 arsenal)",
					"text": "250–500 mcg twice daily for gut, tendon, ligament, and muscle repair.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "Systemic SC / IM (Vol 1 Ch.4)",
					"text": "Standard 200–500 µg daily, split into 1–2 injections. Duration 2–4 weeks acute, 6–8 weeks chronic. Rotate abdomen and thighs. Start 200–250 µg.",
					"source": "vol1",
					"chapter": "Chapter 4",
					"pages": "45–46"
				},
				{
					"label": "Localized peri-lesional (Vol 1 Ch.4)",
					"text": "100–200 µg per injection, 2–3 times weekly, 4–6 weeks, into or around target tissue.",
					"source": "vol1",
					"chapter": "Chapter 4",
					"pages": "45"
				},
				{
					"label": "Oral GI focus (Vol 1 Ch.4)",
					"text": "500 µg to 2 mg daily on an empty stomach, 4–8 weeks, capsule or oral solution (higher because of partial absorption).",
					"source": "vol1",
					"chapter": "Chapter 4",
					"pages": "46"
				},
				{
					"label": "Practical daily range used in Vol 2 protocols",
					"text": "250–500 mcg/day SC once daily or divided BID. Localized injury 250–500 mcg/day near (not into) tissue. GI: 250–500 mcg/day oral or SC. Clinical note: going above 500–750 mcg/day rarely helps and may rebound inflammation.",
					"source": "vol2",
					"chapter": "Chapter 4",
					"pages": "25–26"
				}
			],
			"reconstitution": "Bacteriostatic water. Typical 250–500 µg/mL. Refrigerate reconstituted 2–8°C. Use within 30–60 days. Protect from light.",
			"cycle": "Vol 2: typical 4–6 weeks, up to 8 weeks chronic, washout 2–4 weeks. Re-cycle only if structural recovery is incomplete. If plateaued, do not escalate dose — reassess rehab, inflammation, or stacking.",
			"stacks_with": [
				"tb-500",
				"kpv",
				"cjc-ipam"
			],
			"contraindications": [
				"Active malignancy (angiogenesis theory)",
				"Pregnancy / lactation",
				"Acute untreated severe infection",
				"Using as a substitute for rest, loading, or surgery when those are required"
			],
			"monitoring": [
				"Pain / load-tolerance scores",
				"Range of motion",
				"Injection-site integrity",
				"Rehab progression — peptides without load are considered protocol failure in Vol 2"
			],
			"side_effects": [
				"Usually well tolerated",
				"Transient injection-site irritation",
				"Occasional mild headache"
			],
			"citations": [
				"Vol 1 Ch.1 pp.12–13",
				"Vol 1 Ch.4 pp.43–55",
				"Vol 2 Ch.4 pp.21–28"
			]
		},
		{
			"id": "tb-500",
			"name": "TB-500",
			"aliases": [
				"tb500",
				"tb 500",
				"thymosin beta-4",
				"thymosin beta 4",
				"tb4",
				"tβ4"
			],
			"class_name": "Systemic repair — synthetic thymosin beta-4 fragment",
			"regulatory": "Research / compounded. Not FDA-approved for musculoskeletal repair. Anti-doping status changes — athletes must verify current WADA/league rules.",
			"what_it_is": "Synthetic 43-aa peptide mimicking thymosin beta-4. Regulates actin, cell migration, and multi-tissue remodeling. Longer half-life (8–12 hours) than BPC-157, so it is dosed a few times per week rather than daily. Works systemically more than locally.",
			"good_for": [
				"Diffuse or multi-site soft-tissue injury",
				"Muscle injury and systemic recovery",
				"When local BPC-157 is not enough",
				"Post-surgical multi-tissue rehab",
				"Cardiac / endothelial repair discussions in ISSCA cardio chapter"
			],
			"not_for": [
				"Uncomplicated single-site injuries as first-line",
				"Prophylactic use with no tissue damage",
				"Active malignancy",
				"General wellness without a repair deficit"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1)",
					"text": "2–2.5 mg twice weekly for systemic tissue regeneration.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "Standard practice (Vol 1 Ch.5)",
					"text": "2–2.5 mg per injection, 2–3 times weekly.",
					"source": "vol1",
					"chapter": "Chapter 5",
					"pages": "63"
				},
				{
					"label": "Acute loading (Vol 1 Ch.5)",
					"text": "4–6 mg per week divided into 2 doses for 2–4 weeks (example: 2.5 mg every 3 days or 2 mg three times weekly).",
					"source": "vol1",
					"chapter": "Chapter 5",
					"pages": "63"
				},
				{
					"label": "Maintenance (Vol 1 Ch.5)",
					"text": "2–4 mg per week for 4–8 weeks (2 mg twice weekly or 2.5 mg every 3–4 days).",
					"source": "vol1",
					"chapter": "Chapter 5",
					"pages": "64"
				},
				{
					"label": "Chronic pattern (Vol 1 Ch.5)",
					"text": "4 mg/week for 4 weeks, then 2 mg weekly for 4–8 weeks, reassess every 4–8 weeks with treatment breaks. Weekly ceiling 10 mg — higher rarely adds benefit.",
					"source": "vol1",
					"chapter": "Chapter 5",
					"pages": "64"
				},
				{
					"label": "Comparison table (Vol 1 Ch.5)",
					"text": "Standard range listed as 2–5 mg twice weekly; loading 4–6 mg weekly for 2–4 weeks. Onset 2–4 weeks, peak 8–12 weeks.",
					"source": "vol1",
					"chapter": "Chapter 5",
					"pages": "72"
				},
				{
					"label": "Vol 2 injury stacks",
					"text": "Common stack doses: 2 mg twice weekly, or 2–5 mg/week depending on protocol class.",
					"source": "vol2",
					"chapter": "Chapters 5 and 13",
					"pages": "36, 100–101"
				}
			],
			"reconstitution": "1–2 mL bacteriostatic water per 5 mg vial; swirl, do not shake. Refrigerate 2–8°C up to 8–12 weeks. Typical 2–5 mg/mL.",
			"cycle": "Loading 2–4 weeks then maintenance 4–8 weeks. Chronic: build in 4-week treatment-free intervals. Vol 2 washout often 4 weeks.",
			"stacks_with": [
				"bpc-157",
				"kpv",
				"cjc-ipam"
			],
			"contraindications": [
				"Active malignancy",
				"Pregnancy / lactation",
				"Using as a local-only injection strategy (book emphasizes systemic distribution)"
			],
			"monitoring": [
				"Function and load, not just pain",
				"Anti-doping calendar for competitors",
				"Swelling / flare frequency"
			],
			"side_effects": [
				"Generally mild",
				"Injection-site irritation",
				"Theoretical angiogenesis concern in cancer history"
			],
			"citations": [
				"Vol 1 Ch.5 pp.60–72",
				"Vol 2 Ch.5",
				"Vol 2 Ch.13"
			]
		},
		{
			"id": "kpv",
			"name": "KPV",
			"aliases": [
				"kpv peptide",
				"lys-pro-val",
				"alpha-msh fragment"
			],
			"class_name": "Anti-inflammatory tripeptide (α-MSH fragment)",
			"regulatory": "Research / compounded. Not an FDA-approved anti-inflammatory drug.",
			"what_it_is": "Lys-Pro-Val, the anti-inflammatory fragment of α-MSH, without the tanning effect of full melanocortin agonists. Very small (~340 Da). Routes discussed: oral, SC, topical, rectal. Short plasma half-life, longer local tissue effect via MC1R/MC3R on immune and epithelial cells.",
			"good_for": [
				"Mucosal / gut inflammation",
				"Inflammation that is blocking BPC/TB repair",
				"Autoimmune-adjacent stabilization (not a disease-modifying claim)",
				"Skin inflammatory conditions (topical)",
				"Distal colitis patterns (rectal in Vol 1)"
			],
			"not_for": [
				"Acute infection as a standalone antimicrobial",
				"Expecting opioid-like analgesia",
				"Structural injury with no inflammatory component"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1)",
					"text": "200–500 mcg daily for mucosal inflammation and autoimmune support.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "Oral GI (Vol 1 Ch.6)",
					"text": "500 µg to 2 mg daily, often with meals. Higher oral doses because of first-pass metabolism. Applications: IBD-pattern, leaky-gut pattern, systemic inflammation.",
					"source": "vol1",
					"chapter": "Chapter 6",
					"pages": "76"
				},
				{
					"label": "Topical (Vol 1 Ch.6)",
					"text": "0.1% to 1% cream or gel, 2–3 times daily on clean dry skin. Start low.",
					"source": "vol1",
					"chapter": "Chapter 6",
					"pages": "76"
				},
				{
					"label": "Rectal (Vol 1 Ch.6)",
					"text": "1–2 mg suppositories, usually bedtime, for distal colonic disease.",
					"source": "vol1",
					"chapter": "Chapter 6",
					"pages": "77"
				},
				{
					"label": "Duration (Vol 1 Ch.6)",
					"text": "Acute 2–4 weeks. Chronic 8–12 weeks then reassess. Then lower-dose or less-frequent maintenance.",
					"source": "vol1",
					"chapter": "Chapter 6",
					"pages": "77"
				},
				{
					"label": "Vol 2 protocol doses (most stacks)",
					"text": "200 mcg/day, or 200–300 mcg/day in inflammatory-blockade and gut-repair stacks. Gut repair stack example: KPV 300 mcg/day + BPC-157 250–500 mcg/day for 4–6 weeks.",
					"source": "vol2",
					"chapter": "Chapter 6 / 14",
					"pages": "43–44, 108"
				}
			],
			"reconstitution": "Compounded product dependent. Follow the dispensing clinic. Start at the low end of the published range.",
			"cycle": "Vol 2 often 4–6 weeks (gut) or 6–8 weeks (autoimmune-adjacent), then reassess. Stability over intensity.",
			"stacks_with": [
				"bpc-157",
				"ta-1",
				"tb-500"
			],
			"contraindications": [
				"Trying to treat acute infection instead of appropriate antimicrobials",
				"Pregnancy / lactation",
				"Dose-chasing when inflammation is driven by ongoing food, NSAID, or stress triggers"
			],
			"monitoring": [
				"Stool / symptom volatility",
				"Whether repair peptides start working after inflammation drops",
				"Do not escalate if the sequence is wrong (Vol 2: control immune noise before barrier repair)"
			],
			"side_effects": ["Generally described as well tolerated", "Route-specific local irritation"],
			"citations": [
				"Vol 1 Ch.6 pp.73–83",
				"Vol 1 Ch.1 p.13",
				"Vol 2 Ch.6 and Ch.14"
			]
		},
		{
			"id": "ta-1",
			"name": "Thymosin Alpha-1",
			"aliases": [
				"ta1",
				"ta-1",
				"thymosin alpha",
				"thymalfasin",
				"zadaxin"
			],
			"class_name": "Immune-modulating thymic peptide",
			"regulatory": "Pharmaceutical thymalfasin (Zadaxin) is approved in multiple countries for hepatitis B and as a cancer adjuvant; it is not a general US OTC immune booster. Compounded TA-1 is used off-label in integrative clinics.",
			"what_it_is": "28-aa peptide (thymalfasin), active fragment of prothymosin α. Immune modulator — T-cell maturation, cytokine balance, NK and dendritic-cell support — not a crude 'immune booster.' Peak ~30–60 min after SC, plasma half-life ~2 hours, downstream immune effects days to weeks.",
			"good_for": [
				"Immune competence after viral illness / long-COVID-pattern fatigue (as discussed in ISSCA)",
				"Age-related immune decline (adults >50, quarterly cycles in the book)",
				"Peri-operative immune support",
				"Clinician-coordinated viral and oncology-adjuvant contexts",
				"Recurrent infection / immune-exhaustion patterns"
			],
			"not_for": [
				"Acute infection as a replacement for indicated antimicrobials or vaccines",
				"Continuous daily 'boosting' without a cycle",
				"Autoimmune flare chasing without a clinician"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1)",
					"text": "1.6 mg twice weekly for immune optimization.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "Standard intensive (Vol 1 Ch.7)",
					"text": "1.6 mg SC twice weekly (often Monday/Thursday). 8 weeks intensive, then 1.6 mg once weekly for 4–8 weeks maintenance. Cited applications include hepatitis B/C and persistent EBV/CMV patterns under clinical care.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "87"
				},
				{
					"label": "Cancer adjuvant (Vol 1 Ch.7 — clinician + oncology only)",
					"text": "1.6 mg SC twice weekly throughout other treatment, continue 4–6 weeks after, coordinated with the oncology team.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "87"
				},
				{
					"label": "Post-viral (Vol 1 Ch.7)",
					"text": "1.6 mg once weekly for 6–8 weeks initial trial. Reassess energy, cognition, NK activity ~every 4 weeks.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "88"
				},
				{
					"label": "Healthy-adult optimization (Vol 1 Ch.7)",
					"text": "1.6 mg once weekly for 4–6 weeks, quarterly cycles, adults over 50.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "88"
				},
				{
					"label": "Peri-operative (Vol 1 Ch.7)",
					"text": "1.6 mg twice weekly starting 2 weeks pre-surgery, continue 4 weeks post-surgery.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "88"
				},
				{
					"label": "Severe immunodeficiency (Vol 1 Ch.7 — specialist)",
					"text": "Up to 6.4 mg weekly divided or single dose, close immune-function supervision only.",
					"source": "vol1",
					"chapter": "Chapter 7",
					"pages": "89"
				},
				{
					"label": "Vol 2 immune stacks",
					"text": "1.6 mg SC twice weekly for 6–8 weeks in immune-coordination and immune-resilient longevity stacks. Washout 4–6 weeks in Class III longevity stack.",
					"source": "vol2",
					"chapter": "Chapters 7 and 15",
					"pages": "52–53, 117"
				}
			],
			"reconstitution": "Typical pharmaceutical presentation is already a measured SC dose. Compounded vials follow clinic SOP. Start with the standard 1.6 mg to assess tolerance.",
			"cycle": "Intensive twice-weekly 6–8 weeks, then weekly maintenance or a washout. Quarterly pulses for age-related support. Not framed as indefinite daily therapy.",
			"stacks_with": ["kpv", "bpc-157"],
			"contraindications": [
				"Unsupervised use in active cancer",
				"Pregnancy / lactation unless a specialist directs otherwise",
				"Using during acute infection as a substitute for indicated care"
			],
			"monitoring": [
				"Infection frequency and recovery time",
				"Energy / sleep",
				"Oncology or hepatitis labs when used in those labeled contexts",
				"Reassess every 4–8 weeks"
			],
			"side_effects": [
				"Transient initial fatigue is described as a possible early response",
				"Injection-site irritation",
				"Otherwise extensive historical safety literature in approved markets"
			],
			"citations": [
				"Vol 1 Ch.7 pp.84–95",
				"Vol 2 Ch.7",
				"Vol 2 Ch.15"
			]
		},
		{
			"id": "cjc-ipam",
			"name": "CJC-1295 + Ipamorelin",
			"aliases": [
				"cjc",
				"cjc-1295",
				"cjc1295",
				"ipamorelin",
				"ipam",
				"mod grf",
				"mod grf 1-29",
				"sermorelin",
				"ghrh",
				"ghs",
				"secretagogue",
				"growth hormone peptide"
			],
			"class_name": "GHRH analogue + GH secretagogue (ghrelin-receptor agonist)",
			"regulatory": "Sermorelin was previously an FDA-approved GHRH analogue (later discontinued as a brand). Tesamorelin is FDA-approved for HIV-associated lipodystrophy. CJC-1295 and ipamorelin used in clinics are typically compounded / research peptides, not approved GH-replacement drugs.",
			"what_it_is": "Dual-pathway stimulation of physiologic GH pulses: a GHRH analogue (CJC-1295 no-DAC / Mod GRF 1-29 or sermorelin) plus a ghrelin-receptor agonist (ipamorelin preferred in ISSCA for selectivity). Requires a working pituitary. Benefits accrue over 8–12 weeks. Night / empty-stomach timing is emphasized.",
			"good_for": [
				"Sleep-related GH pulse support",
				"Recovery capacity and lean-mass preservation",
				"Adjunct to repair when recovery is globally impaired",
				"Metabolic stacks to protect muscle during GLP-1 weight loss"
			],
			"not_for": [
				"Active cancer (IGF-1 / tumor-growth theory)",
				"Severe poorly controlled diabetes",
				"Pregnancy / lactation",
				"Pituitary failure (secretagogues cannot replace an absent axis)",
				"Patients wanting overnight 'HGH bodybuilding' results"
			],
			"dosing": [
				{
					"label": "Quick-reference combo (Vol 1 Ch.1)",
					"text": "CJC-1295 + Ipamorelin 200 mcg + 300 mcg nightly.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "CJC-1295 without DAC (Vol 1 Ch.8)",
					"text": "100–300 μg per injection, 2–3 times weekly, before bed or 2–3 hours post-meal. Preferred for pulsatile pattern.",
					"source": "vol1",
					"chapter": "Chapter 8",
					"pages": "99"
				},
				{
					"label": "CJC-1295 with DAC (Vol 1 Ch.8)",
					"text": "1–2 mg once weekly. More convenient, less physiologic, faster desensitization risk. Vol 1 Ch.9 lists 2–3 mg weekly.",
					"source": "vol1",
					"chapter": "Chapters 8–9",
					"pages": "100, 113"
				},
				{
					"label": "Ipamorelin (Vol 1 Ch.8)",
					"text": "200–300 μg once daily before bed, 30–60 minutes before sleep. Selective, fewer side effects.",
					"source": "vol1",
					"chapter": "Chapter 8",
					"pages": "100"
				},
				{
					"label": "Gold-standard combination (Vol 1 Ch.8)",
					"text": "CJC-1295 no-DAC 100–200 μg + ipamorelin 200–300 μg together before bed, 5 days/week. Cycle 12 weeks on / 4 weeks off.",
					"source": "vol1",
					"chapter": "Chapter 8",
					"pages": "101"
				},
				{
					"label": "Sermorelin (Vol 1 Ch.9)",
					"text": "200–500 μg SC before bed, 5–6 nights weekly, empty stomach, 3–6 month cycles.",
					"source": "vol1",
					"chapter": "Chapter 9",
					"pages": "112"
				},
				{
					"label": "Mod GRF 1-29 (Vol 1 Ch.9)",
					"text": "100–300 μg, 1–3 times daily on empty stomach (pre-meal, post-workout, or bedtime).",
					"source": "vol1",
					"chapter": "Chapter 9",
					"pages": "113"
				},
				{
					"label": "Hexarelin (advanced only)",
					"text": "Vol 1: 100–200 μg 1–2x daily with mandatory cycling. Vol 2: 100–200 μg once daily max, pre-sleep only, ≤4 week cycles. Highest desensitization risk.",
					"source": "vol1+vol2",
					"chapter": "Vol 1 Ch.8; Vol 2 Ch.8",
					"pages": "100; 59–60"
				},
				{
					"label": "Tesamorelin (labeled / arsenal)",
					"text": "2 mg nightly in the Vol 1 quick-reference for visceral fat / metabolic enhancement. This is the FDA-labeled analogue family for HIV lipodystrophy — prescribe only to label.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "Vol 2 preferred clinic pattern",
					"text": "CJC-1295 no-DAC 100–200 mcg SC 1–2x daily, pre-sleep mandatory. Ipamorelin 100–300 mcg SC 1–3x daily, pre-sleep ± post-training. Standard restoration protocol: CJC 100 mcg + ipamorelin 200 mcg pre-sleep for 8–12 weeks.",
					"source": "vol2",
					"chapter": "Chapter 8",
					"pages": "59–60"
				}
			],
			"reconstitution": "Bacteriostatic water, insulin syringe, SC abdomen or thigh. Empty stomach: 2–3 hours after last meal, 30–60 minutes before food or sleep.",
			"cycle": "Vol 1 gold standard 12 on / 4 off. Vol 2 standard 8–12 weeks, washout 4–6 weeks. Hexarelin ≤4 weeks. Continuous use without breaks → receptor fatigue.",
			"stacks_with": [
				"bpc-157",
				"tb-500",
				"glp1"
			],
			"contraindications": [
				"Active malignancy",
				"Uncontrolled diabetes",
				"Pregnancy / lactation",
				"Non-functional pituitary",
				"Daytime GH stacking that interferes with insulin during aggressive fat-loss phases (Vol 2)"
			],
			"monitoring": [
				"Sleep depth by weeks 2–3",
				"Recovery by weeks 4–6",
				"Lean mass by week 8+",
				"Glucose tolerance",
				"IGF-1 as context, not a vanity target"
			],
			"side_effects": [
				"Water retention more with DAC long-acting CJC",
				"Fasting glucose drift",
				"Vivid dreams / flushing uncommon with ipamorelin vs older GHRPs"
			],
			"citations": [
				"Vol 1 Ch.1 p.12",
				"Vol 1 Ch.8–9 pp.96–119",
				"Vol 2 Ch.8 pp.59–60"
			]
		},
		{
			"id": "glp1",
			"name": "GLP-1 family (semaglutide, tirzepatide, liraglutide)",
			"aliases": [
				"glp-1",
				"glp1",
				"semaglutide",
				"ozempic",
				"wegovy",
				"rybelsus",
				"tirzepatide",
				"mounjaro",
				"zepbound",
				"liraglutide",
				"saxenda",
				"victoza",
				"incretin"
			],
			"class_name": "Incretin / dual GIP-GLP-1 receptor agonists — prescription metabolic drugs",
			"regulatory": "FDA-approved prescription medicines for type 2 diabetes and/or chronic weight management when labeled criteria are met. This is not a research peptide class. Compounded copies raise quality and legal issues; branded products have a boxed warning for thyroid C-cell tumors in rodents.",
			"what_it_is": "Medicines that mimic GLP-1 (tirzepatide also agonizes GIP). Glucose-dependent insulin secretion, glucagon suppression, delayed gastric emptying, central appetite reduction. ISSCA also discusses longevity / NAFLD / CV-risk framing, but labeled indications and REMS/label warnings still govern real-world prescribing.",
			"good_for": [
				"Type 2 diabetes under a prescriber",
				"Chronic weight management when labeled criteria are met",
				"Cardiometabolic risk reduction where the specific agent has outcome data (liraglutide, semaglutide)",
				"NAFLD / NASH discussion as an adjunct with hepatology"
			],
			"not_for": [
				"Personal or family history of medullary thyroid carcinoma (MTC)",
				"MEN2",
				"Pregnancy or pregnancy planned within ~2 months (book language)",
				"Severe gastroparesis",
				"History of pancreatitis without a careful risk-benefit review",
				"Cosmetic crash dieting without protein and resistance training"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1)",
					"text": "Semaglutide 0.25–2.4 mg weekly. Tirzepatide 2.5–15 mg weekly.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "Liraglutide (Vol 1 Ch.10)",
					"text": "Start 0.6 mg SC daily, increase 0.6 mg weekly as tolerated, maintenance 1.2–3.0 mg daily (higher end for weight). Same time each day. Book notes 1.8 mg daily in a CV-protection protocol example.",
					"source": "vol1",
					"chapter": "Chapter 10",
					"pages": "123, 126"
				},
				{
					"label": "Semaglutide injectable (Vol 1 Ch.10)",
					"text": "Start 0.25 mg SC weekly. Titrate every 4 weeks: 0.25 → 0.5 → 1.0 → 2.4 mg. Maintenance 0.5–2.4 mg depending on indication. Same day each week.",
					"source": "vol1",
					"chapter": "Chapter 10",
					"pages": "124"
				},
				{
					"label": "Oral semaglutide (Vol 1 Ch.10)",
					"text": "Start 3 mg daily empty stomach; monthly 3 → 7 → 14 mg. First thing in the morning, wait 30+ minutes before food.",
					"source": "vol1",
					"chapter": "Chapter 10",
					"pages": "124"
				},
				{
					"label": "Tirzepatide (Vol 1 Ch.10)",
					"text": "Start 2.5 mg SC weekly. Increase 2.5 mg every 4 weeks as tolerated. Maintenance 5–15 mg. Max 15 mg for weight management.",
					"source": "vol1",
					"chapter": "Chapter 10",
					"pages": "124"
				},
				{
					"label": "Vol 2 metabolic protocol classes (conservative clinic style)",
					"text": "Many Vol 2 cards use 'GLP-1 peptide 0.25–0.5 mg weekly' as a low-and-slow educational pattern, escalate to 0.5 mg only if appetite suppression plateaus, 12-week minimum. Aggressive short-term class: 0.5–1.0 mg weekly for 8–10 weeks max then mandatory washout. These are protocol-class examples, not a substitute for the FDA titration schedule on the pen you were prescribed.",
					"source": "vol2",
					"chapter": "Chapter 17",
					"pages": "135"
				}
			],
			"reconstitution": "Use the approved pen or tablet as labeled. Do not reconstruct branded titration from research vials.",
			"cycle": "Approved indications are often long-term. ISSCA still talks about reassessment, lean-mass protection, and not starving. Vol 2 aggressive class is explicitly time-limited with washout because rebound follows failure to consolidate.",
			"stacks_with": [
				"cjc-ipam",
				"kpv",
				"bpc-157"
			],
			"contraindications": [
				"MTC personal or family history",
				"MEN2",
				"Pregnancy",
				"Severe gastroparesis",
				"Pancreatitis history — specialist decision"
			],
			"monitoring": [
				"GI tolerance every titration step",
				"Weight and body composition (not scale alone)",
				"HbA1c / glucose",
				"Muscle: protein 1.2–1.6 g/kg (Vol 1) or ≥1.6 g/kg (Vol 2) plus resistance training 3–4x/week",
				"Gallbladder symptoms, hydration, constipation"
			],
			"side_effects": [
				"Nausea, vomiting, constipation or diarrhea — the reason titration exists",
				"Gallbladder events",
				"Rare pancreatitis",
				"Lean-mass loss if protein and lifting are skipped"
			],
			"citations": [
				"Vol 1 Ch.10 pp.120–131",
				"Vol 1 Ch.1 p.13",
				"Vol 2 Ch.17"
			]
		},
		{
			"id": "melanocortin",
			"name": "Melanocortin peptides (MT-II, PT-141, setmelanotide)",
			"aliases": [
				"melanotan",
				"melanotan 2",
				"mt-2",
				"mt2",
				"mt-ii",
				"pt-141",
				"pt141",
				"bremelanotide",
				"vyleesi",
				"setmelanotide",
				"imcivree",
				"tanning peptide",
				"libido peptide"
			],
			"class_name": "α-MSH analogues — MC1R / MC3R / MC4R / MC5R",
			"regulatory": "Bremelanotide (Vyleesi) is FDA-approved for premenopausal acquired, generalized hypoactive sexual desire disorder. Setmelanotide (Imcivree) is FDA-approved for specific genetic obesity disorders. Melanotan II is not FDA-approved; tanning use is unapproved and carries melanoma-history cautions in ISSCA.",
			"what_it_is": "Synthetic α-MSH analogues. Receptor map: MC1R pigmentation, MC3R/MC4R energy and sexual signaling, MC5R inflammatory tone. Effects are central and variable — ISSCA insists on lowest-dose titration because sensitivity differs dramatically.",
			"good_for": [
				"Labeled bremelanotide use for qualifying female HSDD",
				"Labeled setmelanotide use in rare genetic obesity",
				"Investigational / clinic discussion of libido and appetite (off-label / unapproved for MT-II)"
			],
			"not_for": [
				"Uncontrolled hypertension",
				"MI or stroke in the last 6 months",
				"Personal or family melanoma or atypical-mole syndromes (especially MT-II tanning)",
				"Pregnancy / lactation",
				"Casual tanning"
			],
			"dosing": [
				{
					"label": "Melanotan II initiation (Vol 1 Ch.11)",
					"text": "Start 0.25–0.5 mg SC every other day. Assess 1–2 weeks before any increase. Some patients respond at this floor.",
					"source": "vol1",
					"chapter": "Chapter 11",
					"pages": "135"
				},
				{
					"label": "Melanotan II maintenance (Vol 1 Ch.11)",
					"text": "Sexual function: 0.5–1.0 mg 2–3x weekly. Tanning: 0.5 mg daily 1–2 weeks loading, then 0.5–1.0 mg 2–3x weekly. Appetite: 0.25–0.5 mg every other day.",
					"source": "vol1",
					"chapter": "Chapter 11",
					"pages": "135"
				},
				{
					"label": "Bremelanotide / PT-141 (Vol 1 Ch.11 — labeled product is 1.75 mg)",
					"text": "1.75 mg SC as needed, 45 minutes before activity. Maximum once daily and no more than 8 doses per month. Sensitive patients 1.0–1.25 mg.",
					"source": "vol1",
					"chapter": "Chapter 11",
					"pages": "136"
				},
				{
					"label": "Setmelanotide (Vol 1 Ch.11 — specialist / labeled)",
					"text": "Adults start 2 mg daily, titrate weekly 0.5–1 mg; maintenance 2–3 mg daily. Pediatrics start 1 mg daily. Only for indicated genetic obesity under a specialist.",
					"source": "vol1",
					"chapter": "Chapter 11",
					"pages": "136"
				},
				{
					"label": "Cycling principle",
					"text": "4–12 weeks active then breaks to limit receptor desensitization. Escalate conservatively to avoid severe nausea and drop-out.",
					"source": "vol1",
					"chapter": "Chapter 11",
					"pages": "136"
				}
			],
			"reconstitution": "Approved pens for Vyleesi / Imcivree. MT-II if encountered in research settings is not a recommended consumer product.",
			"cycle": "4–12 weeks then a break for unapproved MT-II-style clinic use. Approved bremelanotide is on-demand with a monthly cap.",
			"stacks_with": [],
			"contraindications": [
				"Uncontrolled HTN",
				"Recent CV event",
				"Melanoma / atypical nevi history (MT-II)",
				"Pregnancy",
				"Stacking multiple central agents carelessly"
			],
			"monitoring": [
				"Blood pressure",
				"Skin exam before MT-II discussions",
				"Nausea",
				"Sexual-function goals vs pigmentation side effects"
			],
			"side_effects": [
				"Nausea is the dose-limiting effect",
				"Flushing, stretching/yawning with PT-141",
				"Pigmentation and mole darkening with MT-II",
				"Blood-pressure changes"
			],
			"citations": ["Vol 1 Ch.11 pp.132–145"]
		},
		{
			"id": "hcg",
			"name": "hCG (human chorionic gonadotropin)",
			"aliases": [
				"hcg",
				"human chorionic",
				"gonadotropin",
				"pregnyl",
				"novarel"
			],
			"class_name": "LH-receptor agonist / gonadotropin",
			"regulatory": "FDA-approved prescription products exist for selected female-fertility and other labeled uses. Male hypogonadism / TRT-adjunct and PCT-style use is common in practice but must be clinician-directed. FDA has warned against over-the-counter 'hCG diet' products.",
			"what_it_is": "Glycoprotein hormone that activates LH receptors. In men it stimulates testicular testosterone and supports intratesticular function / fertility signaling. In women it is used by specialists as an ovulation trigger. ISSCA frames it as axis support, not a crash diet drug.",
			"good_for": [
				"Preserving testicular function during exogenous testosterone",
				"Male fertility pathways (months, not weeks)",
				"Post-suppression recovery as part of a planned protocol",
				"Specialist female ovulation triggering"
			],
			"not_for": [
				"Hormone-sensitive cancers (prostate, breast)",
				"Severe cardiovascular disease that could worsen with hormonal change",
				"Uncontrolled thyroid disease",
				"Pregnancy (except as the fertility specialist directs)",
				"OTC weight-loss 'hCG diet'"
			],
			"dosing": [
				{
					"label": "Testosterone-support combination (Vol 1 Ch.12)",
					"text": "hCG 500–1500 IU SC 2–3 times weekly, with reduced testosterone 100–150 mg weekly instead of 200 mg, to keep therapeutic levels while preserving testicular function.",
					"source": "vol1",
					"chapter": "Chapter 12",
					"pages": "149"
				},
				{
					"label": "Male fertility (Vol 1 Ch.12)",
					"text": "1000–1500 IU SC every other day or three times weekly (e.g., M/W/F) for a minimum 3–6 months. Spermatogenesis ~74 days; do not judge at week 4–6.",
					"source": "vol1",
					"chapter": "Chapter 12",
					"pages": "150"
				},
				{
					"label": "Post-cycle style recovery (Vol 1 Ch.12)",
					"text": "Phase 1: 1000–2000 IU every other day for 2–3 weeks. Phase 2: clomiphene 50 mg daily or tamoxifen 20 mg daily for 4–6 weeks. This is a specialist protocol, not a DIY PCT kit.",
					"source": "vol1",
					"chapter": "Chapter 12",
					"pages": "150"
				},
				{
					"label": "Female ovulation trigger (specialist only)",
					"text": "Single 5000–10000 IU IM as a final follicle-maturation signal.",
					"source": "vol1",
					"chapter": "Chapter 12",
					"pages": "150"
				}
			],
			"reconstitution": "Pharmaceutical hCG is reconstituted per package insert. Refrigerate as labeled. Dosed in IU, not mcg.",
			"cycle": "Fertility: plan in months. TRT adjunct: ongoing with labs. Recovery: short intensive phase then SERM phase. Avoid chronic high-dose stimulation (desensitization / estrogenic effects).",
			"stacks_with": ["cjc-ipam"],
			"contraindications": [
				"Hormone-sensitive cancer",
				"Uncontrolled thyroid or severe CVD",
				"Pregnancy outside specialist fertility care",
				"Using hCG as a diet drug"
			],
			"monitoring": [
				"Total/free T, LH, FSH, estradiol, prolactin",
				"Testicular volume",
				"Semen analysis when fertility is the goal",
				"Prostate assessment in men >40",
				"Estradiol symptoms (sensitive nipples, water)"
			],
			"side_effects": [
				"Estrogen rise, gynecomastia risk",
				"Mood / water shifts",
				"Injection-site irritation",
				"Ovarian hyperstimulation in female specialist protocols"
			],
			"citations": ["Vol 1 Ch.12 pp.146–161", "Vol 2 Ch.12"]
		},
		{
			"id": "ll-37",
			"name": "LL-37",
			"aliases": [
				"ll37",
				"ll 37",
				"cathelicidin"
			],
			"class_name": "Host-defense / antimicrobial peptide",
			"regulatory": "Research peptide. Not an FDA-approved antibiotic. Must not replace indicated antimicrobial care or delay treatment of serious infection.",
			"what_it_is": "Cathelicidin-derived antimicrobial peptide discussed in ISSCA for biofilm, sinus, wound, and dysbiosis-adjacent clinic protocols. Dual local and systemic routes appear in Chapter 13.",
			"good_for": [
				"Adjunctive biofilm / chronic sinus discussion",
				"Wound irrigation adjunct in clinic protocols",
				"Gut dysbiosis / SIBO-pattern protocols as an adjunct, not a substitute for standard SIBO care"
			],
			"not_for": [
				"Sepsis or acute life-threatening infection",
				"Replacing culture-guided antibiotics",
				"Self-irrigation of deep wounds"
			],
			"dosing": [
				{
					"label": "Quick-reference (Vol 1 Ch.1)",
					"text": "100 mcg daily for antimicrobial and biofilm disruption.",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "Systemic (Vol 1 Ch.13)",
					"text": "200–500 mcg SC daily or every other day. Higher end reserved for severe immunocompromise / systemic infection contexts under a clinician.",
					"source": "vol1",
					"chapter": "Chapter 13",
					"pages": "166"
				},
				{
					"label": "Nasal irrigation (Vol 1 Ch.13)",
					"text": "200 mcg in 10 mL sterile saline twice daily for 4–8 weeks, or 100–300 mcg in 10–15 mL, mix fresh each use.",
					"source": "vol1",
					"chapter": "Chapter 13",
					"pages": "166"
				},
				{
					"label": "Wound (Vol 1 Ch.13)",
					"text": "200–300 mcg in sterile solution applied twice daily with standard wound care.",
					"source": "vol1",
					"chapter": "Chapter 13",
					"pages": "167"
				},
				{
					"label": "Oral / gut (Vol 1 Ch.13)",
					"text": "500 mcg to 1 mg daily empty stomach. SIBO-pattern example: 500 mcg twice daily. IBD-pattern example: 500–1000 mcg daily. 30–60 minutes before food.",
					"source": "vol1",
					"chapter": "Chapter 13",
					"pages": "167"
				}
			],
			"reconstitution": "Fresh saline mixes for irrigation. Parenteral product per compounding SOP.",
			"cycle": "Acute 2–8 weeks. Biofilm discussion 3–6 months in the book. A 5-on / 2-off pattern is mentioned with limited evidence.",
			"stacks_with": ["kpv", "ta-1"],
			"contraindications": ["Delaying emergency care for infection", "Pregnancy / lactation without specialist input"],
			"monitoring": ["Infection trajectory — if worse, escalate to standard care immediately", "Sinus / wound appearance"],
			"side_effects": ["Local irritation", "Systemic flu-like feelings possible with immune-active peptides"],
			"citations": ["Vol 1 Ch.13 pp.162–178", "Vol 1 Ch.1 p.13"]
		},
		{
			"id": "ghrp-others",
			"name": "Other GHRPs (GHRP-2, GHRP-6, hexarelin)",
			"aliases": [
				"ghrp-2",
				"ghrp2",
				"ghrp-6",
				"ghrp6",
				"hexarelin"
			],
			"class_name": "Older ghrelin-receptor agonists",
			"regulatory": "Research / compounded. More side-effect baggage (appetite, cortisol, prolactin) than ipamorelin.",
			"what_it_is": "Earlier GH secretagogues. ISSCA lists them in the arsenal but prefers ipamorelin for most patients.",
			"good_for": ["Short supervised pulses when a clinician chooses them"],
			"not_for": ["Unsupervised continuous use", "Hexarelin as a lifestyle peptide"],
			"dosing": [{
				"label": "GHRP-6 / GHRP-2 arsenal",
				"text": "100 mcg three times daily for appetite stimulation with GH release.",
				"source": "vol1",
				"chapter": "Chapter 1",
				"pages": "12"
			}, {
				"label": "Hexarelin arsenal",
				"text": "100 mcg twice daily for acute GH pulses and cardiac-support discussions.",
				"source": "vol1",
				"chapter": "Chapter 1",
				"pages": "12"
			}],
			"reconstitution": "Same SC secretagogue handling.",
			"cycle": "Short. Hexarelin especially must be cycled.",
			"stacks_with": [],
			"contraindications": ["Same as other GH secretagogues plus lower tolerability"],
			"monitoring": ["Hunger, edema, glucose, prolactin symptoms"],
			"side_effects": ["Appetite surge (GHRP-6)", "Cortisol / prolactin elevation vs ipamorelin"],
			"citations": ["Vol 1 Ch.1 p.12", "Vol 1 Ch.8"]
		},
		{
			"id": "support-peptides",
			"name": "Other arsenal peptides (GHK-Cu, AOD-9604, Selank, Semax)",
			"aliases": [
				"ghk",
				"ghk-cu",
				"copper peptide",
				"aod-9604",
				"aod9604",
				"selank",
				"semax",
				"dihexa",
				"5-amino-1mq",
				"thymulin"
			],
			"class_name": "Adjunct peptides listed in the Vol 1 quick-reference arsenal",
			"regulatory": "Mixture of cosmetic, research, and nootropic peptides. None of these arsenal lines should be treated as approved drugs for the marketed wellness claims unless a specific product is labeled.",
			"what_it_is": "Short list from Volume 1 Chapter 1 so the assistant can quote the book instead of inventing numbers.",
			"good_for": ["Book-listed adjunct roles only"],
			"not_for": ["Using the quick-reference as a shopping list"],
			"dosing": [
				{
					"label": "GHK-Cu",
					"text": "1–2 mg daily for skin, wound healing, and anti-aging effects (arsenal line).",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "12"
				},
				{
					"label": "AOD-9604",
					"text": "300 mcg daily for fat-reduction discussion without GH side effects (arsenal line).",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "5-Amino-1MQ",
					"text": "50–150 mg daily (arsenal line).",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "Selank",
					"text": "300 mcg intranasal twice daily for anxiolysis and focus (arsenal line). Concussion protocol in Ch.4 pairs Selank 300 mcg IN BID if anxiety/sleep disruption is present.",
					"source": "vol1",
					"chapter": "Chapters 1 and 4",
					"pages": "13, 55"
				},
				{
					"label": "Semax",
					"text": "500–1000 mcg intranasal daily (arsenal). Concussion protocol uses 500 mcg IN daily.",
					"source": "vol1",
					"chapter": "Chapters 1 and 4",
					"pages": "13, 55"
				},
				{
					"label": "Dihexa",
					"text": "10–20 mg oral daily (arsenal line).",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				},
				{
					"label": "Thymulin",
					"text": "50 mcg daily for thymic reconstitution (arsenal line).",
					"source": "vol1",
					"chapter": "Chapter 1",
					"pages": "13"
				}
			],
			"reconstitution": "Product-specific.",
			"cycle": "Not independently specified in the arsenal table — treat as adjunct lines, not core protocols.",
			"stacks_with": ["bpc-157"],
			"contraindications": ["Pregnancy", "Self-directed nootropic stacking"],
			"monitoring": ["Indication-specific"],
			"side_effects": ["Insufficient book detail to catalog — clinician supervision required"],
			"citations": ["Vol 1 Ch.1 pp.12–13", "Vol 1 Ch.4 p.55"]
		}
	],
	stacks: [
		{
			"id": "injury-a",
			"name": "Advanced injury repair (Vol 2 Stack A)",
			"category": "injury",
			"items": ["BPC-157 500 mcg/day", "TB-500 2–5 mg/week"],
			"duration": "4–6 weeks",
			"use_when": "Multi-tissue injury, chronic/recurrent damage, post-surgical recovery",
			"source": "Vol 2 Ch.4 p.27"
		},
		{
			"id": "injury-b",
			"name": "Inflammatory injury (Vol 2 Stack B)",
			"category": "injury",
			"items": ["BPC-157 500 mcg/day", "KPV 200–300 mcg/day"],
			"duration": "4–6 weeks",
			"use_when": "Healing blocked by inflammation",
			"source": "Vol 2 Ch.4 p.27"
		},
		{
			"id": "injury-c",
			"name": "GH-supported repair (Vol 2 Stack C)",
			"category": "injury",
			"items": ["BPC-157 500 mcg/day", "CJC-1295 + Ipamorelin standard night protocol"],
			"duration": "6–8 weeks",
			"use_when": "Recovery capacity globally impaired. Vol 2 post-op rule: no GH support in first 2 weeks.",
			"source": "Vol 2 Ch.4 p.27 and Ch.13"
		},
		{
			"id": "injury-v2-v",
			"name": "Repair-capacity failure (Vol 2 Class V)",
			"category": "injury",
			"items": [
				"BPC-157 500 mcg/day",
				"TB-500 2–4 mg/week",
				"CJC-1295 100 mcg pre-sleep",
				"Ipamorelin 100 mcg pre-sleep"
			],
			"duration": "8 weeks",
			"use_when": "Slow healing despite correct rehab; aging, high stress, poor sleep — only if sleep is first corrected.",
			"source": "Vol 2 Ch.13 pp.100–101"
		},
		{
			"id": "gut-a",
			"name": "Gut repair stack",
			"category": "gut",
			"items": ["KPV 300 mcg/day", "BPC-157 250–500 mcg/day"],
			"duration": "4–6 weeks",
			"use_when": "Barrier dysfunction after diet is addressed",
			"source": "Vol 2 Ch.6 p.43"
		},
		{
			"id": "immune-b",
			"name": "Immune coordination",
			"category": "immune",
			"items": ["Thymosin Alpha-1 1.6 mg SC 2×/week", "KPV 200 mcg/day"],
			"duration": "6–8 weeks",
			"use_when": "Recurrent flares, immune exhaustion, poor infection recovery. Do not escalate.",
			"source": "Vol 2 Ch.14 p.108"
		},
		{
			"id": "longevity-1",
			"name": "Longevity Class I — quiet inflammation",
			"category": "longevity",
			"items": ["BPC-157 250–500 mcg/day", "KPV 200 mcg/day"],
			"duration": "6 weeks",
			"use_when": "First longevity move. No GH or immune stimulation at this stage.",
			"source": "Vol 2 Ch.15 p.117"
		},
		{
			"id": "longevity-2",
			"name": "Longevity Class II — repair + endocrine preservation",
			"category": "longevity",
			"items": [
				"BPC-157 500 mcg/day",
				"TB-500 2 mg/week",
				"CJC-1295 100 mcg pre-sleep",
				"Ipamorelin 100 mcg pre-sleep"
			],
			"duration": "8 weeks",
			"use_when": "Declining recovery, sleep fragmentation, tissue fragility. Resistance training mandatory.",
			"source": "Vol 2 Ch.15 p.117"
		},
		{
			"id": "longevity-3",
			"name": "Longevity Class III — immune-resilient",
			"category": "longevity",
			"items": ["TA-1 1.6 mg 2×/week", "KPV 200 mcg/day"],
			"duration": "8 weeks + 4–6 week washout",
			"use_when": "Inflammatory aging, immune volatility. No repair peptides until immune noise falls.",
			"source": "Vol 2 Ch.15 p.117"
		},
		{
			"id": "longevity-4",
			"name": "Longevity Class IV — metabolic",
			"category": "longevity",
			"items": [
				"GLP-1 0.25–0.5 mg weekly (example class dose)",
				"CJC-1295 100 mcg pre-sleep",
				"Ipamorelin 100 mcg pre-sleep"
			],
			"duration": "12 weeks",
			"use_when": "Visceral fat, insulin resistance. Protein ≥1.6 g/kg, lifting mandatory, no starvation. Weight loss is not the stated objective — metabolic clarity is.",
			"source": "Vol 2 Ch.15 p.118"
		},
		{
			"id": "longevity-5",
			"name": "Longevity Class V — advanced (disciplined only)",
			"category": "longevity",
			"items": [
				"BPC-157 250 mcg/day",
				"TB-500 2 mg/week",
				"TA-1 1.6 mg 2×/week",
				"CJC-1295 100 mcg pre-sleep",
				"Ipamorelin 100 mcg pre-sleep"
			],
			"duration": "8 weeks + 6 week washout",
			"use_when": "Only when foundations are stable. Do not extend. Do not escalate.",
			"source": "Vol 2 Ch.15 p.118"
		},
		{
			"id": "ghs-recovery",
			"name": "Secretagogue recovery stack",
			"category": "recovery",
			"items": [
				"CJC-1295 100 mcg/night",
				"Ipamorelin 200 mcg/night",
				"TB-500 2–4 mg/week"
			],
			"duration": "8–12 weeks",
			"use_when": "Recovery-limited patients",
			"source": "Vol 2 Ch.8 p.60"
		},
		{
			"id": "gold-ghs",
			"name": "Vol 1 gold-standard GH combo",
			"category": "recovery",
			"items": [
				"CJC-1295 no-DAC 100–200 μg",
				"Ipamorelin 200–300 μg",
				"Together pre-bed 5 days/week"
			],
			"duration": "12 weeks on / 4 off",
			"use_when": "Physiologic GH support with a working pituitary",
			"source": "Vol 1 Ch.8 p.101"
		}
	],
	protocols: [
		{
			"id": "bpc-tendon",
			"name": "BPC-157 tendon / ligament",
			"peptide_ids": ["bpc-157"],
			"steps": [
				"BPC-157 500 mcg/day SC",
				"Duration 4–6 weeks",
				"Progressive loading mandatory",
				"Physical therapy"
			],
			"timeline": "Week 1–2 reduced irritation; week 3–4 improved load tolerance; week 5–6 structural resilience",
			"source": "Vol 2 Ch.4 Protocol 1 p.26"
		},
		{
			"id": "bpc-gut",
			"name": "BPC-157 gut barrier",
			"peptide_ids": ["bpc-157"],
			"steps": [
				"BPC-157 250–500 mcg/day oral or SC",
				"4–6 weeks",
				"Dietary correction required"
			],
			"timeline": "Facilitates repair; not a standalone IBS drug",
			"source": "Vol 2 Ch.4 Protocol 4 p.27"
		},
		{
			"id": "bpc-postop",
			"name": "BPC-157 post-surgical (Vol 2)",
			"peptide_ids": ["bpc-157", "tb-500"],
			"steps": [
				"Start day 5–7 post-op after acute inflammation (Vol 2) or day 7–10 in Class IV",
				"BPC-157 500 mcg/day",
				"Optional TB-500 2 mg/week",
				"4–8 weeks",
				"No GH in first 2 weeks"
			],
			"timeline": "Remodeling and angiogenesis support, not day-of-surgery analgesia",
			"source": "Vol 2 Ch.4 Protocol 3 and Ch.13 Class IV"
		},
		{
			"id": "bpc-postop-v1",
			"name": "BPC-157 peri-operative (Vol 1 more aggressive)",
			"peptide_ids": ["bpc-157", "tb-500"],
			"steps": [
				"Pre-op 1–2 weeks: 250 mcg BID",
				"Immediate post-op days 1–14: 500 mcg BID SC (avoid oral if GI surgery)",
				"Add TB-500 2.5 mg twice weekly starting day 3",
				"Weeks 3–8: 500 mcg BID through week 4, then 250 mcg BID weeks 5–8"
			],
			"timeline": "Book claims accelerated recovery vs standard healing — still surgeon-directed",
			"source": "Vol 1 Ch.4 p.54"
		},
		{
			"id": "tb-acute",
			"name": "TB-500 acute tendon protocol",
			"peptide_ids": ["tb-500"],
			"steps": [
				"Weeks 1–2: 2.5 mg every 3 days (5–7.5 mg/week)",
				"Weeks 3–6: 2 mg twice weekly",
				"Evaluate at week 6",
				"Coordinate PT"
			],
			"timeline": "Function over pain scores",
			"source": "Vol 1 Ch.5 p.65"
		},
		{
			"id": "kpv-ibd",
			"name": "KPV IBD-pattern management (Vol 1)",
			"peptide_ids": ["kpv"],
			"steps": [
				"Oral KPV 500 µg daily with meals",
				"Titrate toward 1–2 mg daily",
				"Consider rectal 1–2 mg nightly for distal disease",
				"Support: L-glutamine, zinc carnosine as listed in the chapter"
			],
			"timeline": "Anti-inflammatory healing, not instant analgesia",
			"source": "Vol 1 Ch.6 p.78"
		},
		{
			"id": "glp-t2d",
			"name": "Labeled-style T2D + CVD framing",
			"peptide_ids": ["glp1"],
			"steps": [
				"Use the specific approved agent and pen schedule",
				"Titrate to GI tolerance",
				"Reassess HbA1c ~3 months",
				"Lifestyle still required"
			],
			"timeline": "Days for appetite; 8–12 weeks for fuller metabolic effect (Vol 1 Ch.1 framing)",
			"source": "Vol 1 Ch.10 pp.123–126"
		},
		{
			"id": "metabolic-v2-1",
			"name": "Vol 2 metabolic Class I conservative",
			"peptide_ids": ["glp1"],
			"steps": [
				"GLP-1 example 0.25 mg weekly",
				"Escalate to 0.5 mg weekly only if appetite suppression plateaus",
				"≥12 weeks",
				"Protein ≥1.6 g/kg",
				"Resistance training ≥3×/week",
				"No caloric starvation"
			],
			"timeline": "12 weeks minimum",
			"source": "Vol 2 Ch.17 p.135"
		}
	],
	safety: {
		"universal_avoid": [
			"Pregnancy and lactation (insufficient data almost across the library)",
			"Active malignancy for BPC-157, TB-500, and GH/IGF-1-raising secretagogues",
			"Buying unlabeled research vials and dosing off a chatbot",
			"Stacking everything at once — Vol 2 repeatedly says escalation usually means bad sequencing, not a low dose"
		],
		"glp1_boxed_style": [
			"MTC personal or family history — do not use",
			"MEN2 — do not use",
			"Pancreatitis history — specialist only",
			"Severe gastroparesis — do not use"
		],
		"monitoring_chapter": "Vol 1 Chapter 21 (Safety, Monitoring & Troubleshooting, pp.274–294) and Vol 2 Chapter 19.",
		"nonresponse_tree": [
			"Confirm the actual dose, route, reconstitution, and refrigeration (2–8°C, not frozen)",
			"Confirm product quality / source",
			"Give the published window (often 4–6 weeks) before declaring failure",
			"Fix sleep, protein, rehab load, and ongoing inflammatory triggers",
			"Do not escalate first",
			"Stop if no benefit by 8–12 weeks (Vol 1 Ch.21 decision tree)"
		],
		"storage": "Reconstituted peptides: refrigerate 2–8°C, protect from light, respect beyond-use dating (BPC 30–60 days; TB-500 up to 8–12 weeks in Vol 1). Powders generally cooler and dry.",
		"quality": "ISSCA repeatedly flags source, sterility, and certificate of analysis. Counterfeit or degraded product is a listed cause of 'non-response.'"
	},
	intents: [
		{
			"id": "dose",
			"examples": [
				"dose",
				"dosing",
				"how much",
				"mcg",
				"units",
				"protocol dose",
				"how is it dosed"
			]
		},
		{
			"id": "stack",
			"examples": [
				"stack",
				"combine",
				"together",
				"with bpc",
				"gold standard"
			]
		},
		{
			"id": "safety",
			"examples": [
				"safe",
				"side effect",
				"contraindicat",
				"cancer",
				"pregnant",
				"warning"
			]
		},
		{
			"id": "cycle",
			"examples": [
				"cycle",
				"washout",
				"how long",
				"weeks",
				"break"
			]
		},
		{
			"id": "compare",
			"examples": [
				"vs",
				"versus",
				"difference",
				"better",
				"or tb-500"
			]
		},
		{
			"id": "what",
			"examples": [
				"what is",
				"used for",
				"good for",
				"mechanism"
			]
		},
		{
			"id": "protocol",
			"examples": [
				"tendon",
				"gut",
				"injury",
				"post op",
				"longevity",
				"weight loss",
				"fertility"
			]
		}
	]
};
/** Mitochondrial / longevity cards. ISSCA doses only when the books list them. */
var mitoPeptides = [
	{
		id: "mots-c",
		name: "MOTS-c",
		aliases: [
			"motsc",
			"mots c",
			"mitochondrial orf",
			"mdp"
		],
		class_name: "Mitochondrial-derived peptide (12S rRNA ORF)",
		desk: "mito",
		regulatory: "Research peptide. Not FDA-approved. Not in ISSCA Volume 1 core peptide chapters as a dosed protocol. This desk will not invent a clinic dose.",
		what_it_is: "A 16-amino-acid peptide encoded in the mitochondrial genome. In published research it is studied as a metabolic signal (AMPK-related, exercise-mimetic, insulin-sensitivity literature) rather than as a tissue-repair peptide like BPC-157. ISSCA’s longevity chapter treats mitochondrial support as a multiplier of repair signaling — not as a license to stack unlisted injectables.",
		good_for: ["Educational discussion of mitochondrial-derived peptides (MDPs)", "Metabolic / exercise-signaling literature review with a clinician"],
		not_for: [
			"A substitute for zone-2 training, sleep, or protein",
			"Self-directed fat-loss stacking on top of a GLP-1",
			"Any invented milligram protocol from a chatbot"
		],
		dosing: [{
			label: "ISSCA dosing table",
			text: "None in Volume 1 Chapters 4–13 or Volume 2 protocol cards extracted for this library. If a clinician uses MOTS-c, the dose is theirs — not this desk’s.",
			source: "library",
			chapter: "Not a core ISSCA protocol card",
			pages: "—"
		}],
		reconstitution: "Research-compound handling is clinic/lab SOP. Not a consumer reconstitution guide.",
		cycle: "No ISSCA cycle. Do not run continuous unmonitored courses.",
		stacks_with: [],
		contraindications: [
			"Pregnancy / lactation",
			"Self-experimentation without a responsible clinician",
			"Active malignancy discussions without oncology input"
		],
		monitoring: ["Clinician-directed metabolic labs if used at all", "Do not chase energy as a titration target"],
		side_effects: ["Insufficient ISSCA safety table — treat as unknown in this library"],
		citations: ["Vol 2 Ch.15 (mitochondrial support as longevity multiplier — conceptual)", "Research-literature framing only"]
	},
	{
		id: "ss-31",
		name: "SS-31 (elamipretide)",
		aliases: [
			"ss31",
			"ss 31",
			"elamipretide",
			"bendavia",
			"cardiolipin peptide"
		],
		class_name: "Mitochondrial inner-membrane tetrapeptide",
		desk: "mito",
		regulatory: "Investigational (elamipretide has been studied in clinical trials for mitochondrial and cardiac indications). Not an ISSCA core protocol peptide in this library. Not a catalog ‘pin tonight’ compound.",
		what_it_is: "A small tetrapeptide that associates with cardiolipin on the inner mitochondrial membrane. Research focus: electron-transport efficiency, ROS at complex I/III, and tissues with high ATP demand (heart, kidney, muscle). This is mitochondrial medicine literature — distinct from gastric repair peptides.",
		good_for: ["Understanding cardiolipin-targeted mitochondrial research", "Specialist discussion of trial-stage mitochondrial therapeutics"],
		not_for: ["DIY ‘mito stack’ with MOTS-c + NAD+ + SS-31", "Replacing indicated heart-failure or mitochondrial-disease care"],
		dosing: [{
			label: "ISSCA dosing table",
			text: "None in this library. Trial doses are protocol-specific and are not converted into a common-practice range here.",
			source: "library",
			chapter: "Not a core ISSCA protocol card",
			pages: "—"
		}],
		reconstitution: "If encountered as a research material, handling is lab/clinic SOP — not this chat.",
		cycle: "No ISSCA cycle.",
		stacks_with: [],
		contraindications: ["Pregnancy", "Unsupervised cardiac self-treatment"],
		monitoring: ["Specialist only"],
		side_effects: ["Trial literature is not restated as a consumer side-effect list here"],
		citations: ["Vol 2 Ch.15 conceptual mitochondrial multiplier", "Investigational / trial-class — not ISSCA-dosed"]
	},
	{
		id: "humanin",
		name: "Humanin",
		aliases: [
			"humanin peptide",
			"hn",
			"mitochondrial derived peptide humanin"
		],
		class_name: "Mitochondrial-derived cytoprotective peptide",
		desk: "mito",
		regulatory: "Research. Volume 1–2 textbooks in this library have no milligram table. ISSCA peptides magazine faculty published a range.",
		what_it_is: "A mitochondrial-derived peptide discussed for cytoprotection, metabolic stress, and healthspan literacy. Grouped with MOTS-c as an MDP. Magazine longevity and immune articles include it in faculty stacks.",
		good_for: ["MDP family literacy", "Magazine longevity / immune-stack talk under a clinician"],
		not_for: ["Anti-aging injections off a chat window"],
		dosing: [{
			label: "Volume 1–2 textbook table",
			text: "None in the extracted ISSCA textbook chapters.",
			source: "vol2",
			chapter: "Not a core textbook protocol card",
			pages: "—"
		}, {
			label: "Magazine faculty (Lapeire / Moya)",
			text: "0.04 mg/kg SC daily — about 3.2 mg for an 80 kg adult; immune article also writes 3.2–4 mg SC daily. Not a Volume 1/2 table. A clinician chooses.",
			source: "mag-pep",
			chapter: "Longevity stack p.10; Immune stack p.26",
			pages: "10, 26"
		}],
		reconstitution: "If encountered as a research material, handling is lab/clinic SOP — not this chat.",
		cycle: "Magazine longevity: during the 10–20 day Epitalon window. Immune article: up to 12 weeks then 1 month off.",
		stacks_with: [
			"epitalon",
			"bpc-157",
			"ta-1",
			"ara-290"
		],
		contraindications: ["Pregnancy", "Self-administration"],
		monitoring: ["Clinician-directed"],
		side_effects: ["Magazine does not print a consumer AE table"],
		citations: ["ISSCA Peptides Magazine pp.10, 26", "Vol 2 Ch.15 conceptual MDP framing"]
	},
	{
		id: "nad-support",
		name: "NAD+ / NAD-support (not a peptide)",
		aliases: [
			"nad",
			"nad+",
			"nmn",
			"nr",
			"nicotinamide",
			"nadh"
		],
		class_name: "Redox cofactor — adjacent to mitochondrial peptides",
		desk: "mito",
		regulatory: "NAD+ is a cofactor, not a signaling peptide. IV NAD clinics and research vials are not ISSCA peptide-protocol cards. Oral NR/NMN supplements are a different regulatory bucket than injectable peptides.",
		what_it_is: "ISSCA Volume 2 frames mitochondrial support as a longevity multiplier around repair, immune quieting, and endocrine preservation — not as an IV cocktail. NAD biology (sirtuins, PARPs, redox) is real; this desk will not turn that into an infusion recipe.",
		good_for: ["Understanding why sleep, zone-2, and protein sit underneath peptide stacks", "Separating cofactor talk from peptide protocol cards"],
		not_for: ["Chat-designed NAD IV drip", "Stacking NAD + GH + GLP-1 because a forum said so"],
		dosing: [{
			label: "ISSCA peptide dosing",
			text: "No NAD infusion protocol in the extracted ISSCA peptide chapters. Lifestyle load (sleep, resistance training, protein) is the book’s actual mitochondrial chapter, not a gram-per-hour drip.",
			source: "vol2",
			chapter: "Chapter 15",
			pages: "conceptual — mitochondrial support as multiplier"
		}],
		reconstitution: "Not a peptide reconstitution card.",
		cycle: "Foundations are ongoing. Peptide stacks still wash out (Vol 2: 4–6 weeks typical).",
		stacks_with: [],
		contraindications: ["Unsupervised IV self-administration"],
		monitoring: ["If a clinic infuses NAD, that is their protocol and monitoring — not this library"],
		side_effects: ["Flushing and GI effects are commonly reported with NAD-related products; not an ISSCA table"],
		citations: ["Vol 2 Ch.15"]
	},
	{
		id: "tesamorelin-mito",
		name: "Tesamorelin (visceral fat / GHRH analogue)",
		aliases: ["tesamorelin", "egrifta"],
		class_name: "FDA-labeled GHRH analogue — metabolic / VAT",
		desk: "approved",
		regulatory: "Tesamorelin is FDA-approved for HIV-associated lipodystrophy (visceral adipose reduction). ISSCA lists 2 mg nightly in the Volume 1 arsenal for visceral fat / metabolic enhancement. Labeled use is a prescription, not a research vial.",
		what_it_is: "A stabilized GHRH analogue. Distinct from CJC-1295/ipamorelin compounding. The labeled indication is reduction of excess abdominal fat in HIV lipodystrophy. Off-label metabolic use is clinician territory.",
		good_for: ["Labeled VAT reduction in the approved population", "ISSCA arsenal discussion of visceral fat"],
		not_for: [
			"Active malignancy (IGF-1 theory, same GH-axis caution)",
			"Pregnancy",
			"Uncontrolled diabetes without a prescriber"
		],
		dosing: [{
			label: "ISSCA arsenal (Vol 1 Ch.1)",
			text: "2 mg nightly for visceral fat reduction and metabolic enhancement — arsenal line. Follow the labeled product when a branded pen exists.",
			source: "vol1",
			chapter: "Chapter 1",
			pages: "12"
		}],
		reconstitution: "Use the approved product as labeled when prescribed.",
		cycle: "Labeled courses are prescriber-directed. Secretagogue cycling rules in Ch.8–9 do not automatically map onto branded tesamorelin.",
		stacks_with: [],
		contraindications: [
			"Active malignancy",
			"Pregnancy",
			"Pituitary context per label"
		],
		monitoring: [
			"IGF-1",
			"Glucose",
			"VAT / waist as the labeled target"
		],
		side_effects: ["GH-axis: edema, glucose drift — label governs"],
		citations: ["Vol 1 Ch.1 p.12"]
	},
	{
		id: "ghk-cu",
		name: "GHK-Cu",
		aliases: [
			"ghk",
			"ghkcu",
			"copper peptide",
			"copper tripeptide",
			"skin peptide"
		],
		class_name: "Copper tripeptide — skin / wound arsenal line",
		desk: "adjunct",
		regulatory: "Cosmetic / research copper peptide. Not an FDA-approved skin drug in this library. ISSCA lists it in the Volume 1 quick-reference arsenal, not as a core chapter protocol like BPC-157.",
		what_it_is: "GHK-Cu is listed in ISSCA Vol 1 Chapter 1 for skin, wound healing, and anti-aging-adjacent effects. It is an adjunct appearance/repair signal, not a facelift and not a substitute for protein, lifting, or dermatology.",
		good_for: ["Skin-quality discussion as an arsenal adjunct", "Wound-adjacent cosmetic talk in the book’s one-liner"],
		not_for: [
			"A promise of tighter skin after large weight loss",
			"Replacing indicated dermatologic or surgical care",
			"Sexual or cosmetic coaching beyond the arsenal line"
		],
		dosing: [{
			label: "Quick-reference (Vol 1 Ch.1 arsenal)",
			text: "1–2 mg daily for skin, wound healing, and anti-aging effects (arsenal line).",
			source: "vol1",
			chapter: "Chapter 1",
			pages: "12"
		}, {
			label: "Magazine faculty (beauty stack)",
			text: "1–2 mg SC daily, 6-week cycles, 3–4×/year, plus topical after shower or microneedling.",
			source: "mag-pep",
			chapter: "Aesthetic & Skin Regeneration Peptide Stacks",
			pages: "20"
		}],
		reconstitution: "Product-specific. Follow the dispensing clinic. Not a consumer recipe.",
		cycle: "Arsenal table is thin. Magazine beauty stack: 6-week SC pulses, 3–4×/year.",
		stacks_with: [
			"bpc-157",
			"ptd-dbm",
			"tb-500"
		],
		contraindications: ["Pregnancy", "Self-directed cosmetic stacking"],
		monitoring: ["Skin irritation", "Whether the actual goal is mass change vs skin quality"],
		side_effects: ["Local irritation possible; the arsenal line is thin — clinician supervision required"],
		citations: ["Vol 1 Ch.1 p.12", "ISSCA Peptides Magazine p.20"]
	}
];
var mitoStacks = [{
	id: "mito-foundations",
	name: "Mitochondrial foundations (Vol 2 — before peptides)",
	category: "mito",
	items: [
		"Sleep first — Vol 2: poor sleep means poor GH and poor repair, whatever the dose",
		"Protein ≥ 1.6 g/kg when metabolic peptides are in play (Vol 2)",
		"Resistance training in longevity Class II / IV",
		"Quiet inflammation (Class I: BPC-157 + KPV) before GH or immune stimulation",
		"MOTS-c / SS-31 / NAD have no ISSCA milligram table here — a clinician can discuss them after foundations",
		"ISSCA synergies magazine: NAD+ / glutathione IVs, HBOT, PEMF are clinic adjuncts — not a chat recipe"
	],
	duration: "Ongoing — peptides still cycle 6–8 or 8–12 weeks with washout",
	use_when: "Someone asks for a ‘mito stack’ or ‘anti-aging everything’. Sequence beats addition. If benefits vanish in washout, the protocol compensated rather than restored (Vol 2 Ch.15).",
	source: "Vol 2 Ch.15 pp.117–118"
}];
/** ISSCA faculty magazines from BPX8 — quote as magazine protocols, not Vol 1/2 tables. Sexual-health chapter is not ingested. */
var magazineSources = [{
	id: "mag-pep",
	name: "ISSCA Regenerative Medicine Magazine — Peptides Edition Vol 1",
	publisher: "ISSCA",
	year: 2026
}, {
	id: "mag-syn",
	name: "ISSCA Regenerative Medicine Magazine — Regenerative Synergies",
	publisher: "ISSCA",
	year: 2026
}];
var mag = "Faculty magazine protocol — not a Volume 1/2 textbook table. A clinician chooses. Do not self-administer.";
var magazinePeptides = [
	{
		id: "epitalon",
		name: "Epitalon (Epithalon)",
		aliases: [
			"epithalon",
			"epithalamin",
			"epitalin"
		],
		class_name: "Synthetic pineal / telomerase-signaling tetrapeptide",
		desk: "adjunct",
		regulatory: "Research. Not FDA-approved. Magazine faculty protocol, not a labeled drug.",
		what_it_is: "ISSCA magazine longevity article (Dr. Andrea Lapeire) describes Epitalon as a synthetic epithalamin analogue discussed for telomerase / pineal signaling. Volume 1–2 core chapters in this library do not carry a textbook milligram table for it.",
		good_for: ["Longevity-stack literacy as published in the ISSCA peptides magazine"],
		not_for: ["A once-a-year anti-aging shot from a chat", "Pregnancy"],
		dosing: [{
			label: "Magazine faculty (Lapeire longevity stack)",
			text: "5–10 mg daily, subcutaneous, for 10–20 days, 1–2× per year.",
			source: "mag-pep",
			chapter: "Longevity & Anti-Aging Peptide Stacks",
			pages: "10"
		}],
		reconstitution: mag,
		cycle: "10–20 day core cycle; magazine says the stack may be repeated 1–2× per year as a “system reboot.”",
		stacks_with: [
			"bpc-157",
			"tb-500",
			"humanin",
			"tesamorelin-mito",
			"cjc-ipam",
			"ghk-cu"
		],
		contraindications: [
			"Pregnancy",
			"Self-directed telomerase stacking",
			"Active malignancy discussions without oncology"
		],
		monitoring: ["Clinician-directed; magazine frames this as a supervised reboot, not DIY"],
		side_effects: ["Magazine does not print a full adverse-event table — treat as unknown without a clinician"],
		citations: ["ISSCA Peptides Magazine pp.7–10 (Lapeire)"]
	},
	{
		id: "cerebrolysin",
		name: "Cerebrolysin",
		aliases: ["cerebrolysin peptide", "porcine brain peptide"],
		class_name: "Porcine-brain neurotrophic peptide mixture",
		desk: "adjunct",
		regulatory: "Used in some countries for stroke/cognitive indications; not an FDA-approved US wellness peptide. Magazine faculty protocol.",
		what_it_is: "ISSCA magazine neuro article (Dr. María Navarro) describes Cerebrolysin as a porcine-brain peptide mixture used in Europe/Asia stroke and cognitive-impairment literature. Not a Volume 1 core protocol card.",
		good_for: ["Educational discussion of neuroregenerative stacks in the ISSCA peptides magazine"],
		not_for: ["Self-injection after a concussion instead of emergency/TBI care"],
		dosing: [{
			label: "Magazine faculty (Navarro neuro stack)",
			text: "5–10 ml SC (215 mg/ml).",
			source: "mag-pep",
			chapter: "Brain Function & Cognitive Regeneration Peptide Stacks",
			pages: "14"
		}],
		reconstitution: mag,
		cycle: "Magazine: 6 weeks on / 6 weeks off with the rest of the neuro stack.",
		stacks_with: [
			"bpc-157",
			"tb-500",
			"support-peptides",
			"cjc-ipam"
		],
		contraindications: ["Pregnancy", "Unsupervised post-stroke self-treatment"],
		monitoring: ["Neurologic follow-up belongs with a clinician, not this chat"],
		side_effects: ["Magazine does not catalog a consumer side-effect list"],
		citations: ["ISSCA Peptides Magazine pp.11–15 (Navarro)"]
	},
	{
		id: "pe-22-28",
		name: "PE-22-28",
		aliases: [
			"pe2228",
			"pe 22 28",
			"fradin peptide"
		],
		class_name: "TREK-1–related synthetic peptide (magazine neuro stack)",
		desk: "adjunct",
		regulatory: "Research. Not FDA-approved. Magazine faculty only.",
		what_it_is: "ISSCA magazine neuro article lists PE-22-28 as a Fradin-derived peptide discussed for TREK-1 / mood and stress-tolerance literacy. No Volume 1 textbook table.",
		good_for: ["Magazine neuro-stack literacy"],
		not_for: ["A substitute for indicated psychiatric or neurologic care"],
		dosing: [{
			label: "Magazine faculty (Navarro)",
			text: "400 mcg intranasally.",
			source: "mag-pep",
			chapter: "Brain Function & Cognitive Regeneration Peptide Stacks",
			pages: "14"
		}],
		reconstitution: mag,
		cycle: "Magazine runs it with the 6-on / 6-off neuro cycle.",
		stacks_with: ["bpc-157", "tb-500"],
		contraindications: ["Pregnancy", "Self-directed nootropic stacking"],
		monitoring: ["Mood and sleep with the prescribing clinician"],
		side_effects: ["Insufficient magazine safety table"],
		citations: ["ISSCA Peptides Magazine p.14"]
	},
	{
		id: "fgl",
		name: "FGL(L)",
		aliases: [
			"fgl peptide",
			"fgll",
			"ncam mimetic"
		],
		class_name: "NCAM-mimetic fibroblast-growth-factor–related peptide",
		desk: "adjunct",
		regulatory: "Research. Magazine faculty protocol.",
		what_it_is: "ISSCA magazine neuro article describes FGL(L) as an NCAM mimetic discussed for neuronal growth/plasticity literacy. Not a Volume 1 core card.",
		good_for: ["Magazine neuro-stack literacy"],
		not_for: ["A DIY Alzheimer’s protocol"],
		dosing: [{
			label: "Magazine faculty (Navarro)",
			text: "1–2 mg SC (lower dose for younger patients, per the article).",
			source: "mag-pep",
			chapter: "Brain Function & Cognitive Regeneration Peptide Stacks",
			pages: "14"
		}],
		reconstitution: mag,
		cycle: "With the 6-on / 6-off neuro cycle in the magazine.",
		stacks_with: ["cjc-ipam", "tesamorelin-mito"],
		contraindications: ["Pregnancy"],
		monitoring: ["Clinician-directed"],
		side_effects: ["Insufficient magazine safety table"],
		citations: ["ISSCA Peptides Magazine p.14"]
	},
	{
		id: "ptd-dbm",
		name: "PTD-DBM",
		aliases: [
			"ptd dbm",
			"ptddbm",
			"cxxc5 peptide"
		],
		class_name: "Topical follicle-signaling peptide (CXXC5-related, magazine)",
		desk: "adjunct",
		regulatory: "Research / cosmetic-adjacent. Not an approved hair drug in this library.",
		what_it_is: "ISSCA magazine beauty stack (Dr. Yanti Kushmiran) describes PTD-DBM as a topical peptide discussed for follicle signaling (CXXC5). Educational, not a hair-restoration prescription.",
		good_for: ["Magazine aesthetic-stack literacy when someone asks about hair/glow"],
		not_for: ["Replacing indicated dermatology"],
		dosing: [{
			label: "Magazine faculty (beauty stack)",
			text: "Spray 1–2×/week to scalp (0.001% solution). Magazine also mentions combining valproic acid topically — that is a clinician decision, not a chat recipe.",
			source: "mag-pep",
			chapter: "Aesthetic & Skin Regeneration Peptide Stacks",
			pages: "20"
		}],
		reconstitution: mag,
		cycle: "Magazine: ongoing weekly application.",
		stacks_with: [
			"ghk-cu",
			"bpc-157",
			"tb-500"
		],
		contraindications: ["Pregnancy", "Broken scalp without a clinician"],
		monitoring: ["Scalp irritation"],
		side_effects: ["Local irritation possible; magazine table is thin"],
		citations: ["ISSCA Peptides Magazine pp.17–20"]
	},
	{
		id: "ara-290",
		name: "ARA-290 (cibinetide)",
		aliases: [
			"ara290",
			"cibinetide",
			"ara 290"
		],
		class_name: "EPO-derived helix-B peptide (magazine immune stack)",
		desk: "adjunct",
		regulatory: "Investigational / research. Not an approved neuropathy drug in this library.",
		what_it_is: "ISSCA magazine immune article (Dr. Roni Moya) lists ARA-290 as an erythropoietin-derived peptide discussed for neuroprotection and immune regulation. Not a Volume 1 core card.",
		good_for: ["Magazine immune-stack literacy (fatigue, post-viral, nerve talk)"],
		not_for: ["A substitute for diabetes or neuropathy care"],
		dosing: [{
			label: "Magazine faculty (Moya immune stack)",
			text: "4 mg SC daily.",
			source: "mag-pep",
			chapter: "Immune Optimization Peptide Stacks",
			pages: "26"
		}],
		reconstitution: mag,
		cycle: "Magazine: up to 12 weeks, then 1 month off (with TA-1 / BPC / Humanin in that article).",
		stacks_with: [
			"ta-1",
			"bpc-157",
			"kpv",
			"humanin"
		],
		contraindications: ["Pregnancy", "Unsupervised immune self-treatment"],
		monitoring: ["Clinician-directed; magazine calls this a medical-grade protocol, not DIY"],
		side_effects: ["Insufficient magazine safety table"],
		citations: ["ISSCA Peptides Magazine pp.23–27 (Moya)"]
	},
	{
		id: "dsip",
		name: "DSIP (delta sleep-inducing peptide)",
		aliases: ["delta sleep", "dsip peptide"],
		class_name: "Sleep-architecture peptide (magazine muscle/recovery stack)",
		desk: "adjunct",
		regulatory: "Research. Magazine faculty protocol.",
		what_it_is: "ISSCA magazine muscle article (Dr. Christopher Walker) describes DSIP as supporting slow-wave sleep rather than a knockout hypnotic. Volume 2 still says poor sleep means poor GH — DSIP is not a substitute for sleep hygiene.",
		good_for: ["Magazine recovery-stack literacy when sleep is the bottleneck"],
		not_for: ["A sleeping-pill replacement", "Minors"],
		dosing: [{
			label: "Magazine faculty (Walker muscle stack)",
			text: "SC, 2–3 hours before bed. The magazine prints timing, not a milligram table for DSIP — this library will not invent milligrams.",
			source: "mag-pep",
			chapter: "Muscle Growth & Recovery Peptide Stacks",
			pages: "38"
		}],
		reconstitution: mag,
		cycle: "Magazine: titrate down as sleep normalizes; stack 10–12 weeks on, 4–8 weeks off.",
		stacks_with: ["cjc-ipam", "bpc-157"],
		contraindications: ["Pregnancy", "Untreated sleep apnea as the only intervention"],
		monitoring: ["Sleep quality; do not chase sedation"],
		side_effects: ["Insufficient milligram and AE table in the magazine"],
		citations: ["ISSCA Peptides Magazine pp.35–39 (Walker)"]
	},
	{
		id: "peg-mgf",
		name: "PEG-MGF",
		aliases: [
			"pegmgf",
			"peg mgf",
			"mechano growth factor"
		],
		class_name: "PEGylated mechano growth factor (magazine muscle stack)",
		desk: "adjunct",
		regulatory: "Research. Anabolic-adjacent. Magazine faculty — no milligram table printed.",
		what_it_is: "ISSCA magazine muscle article describes PEG-MGF for satellite-cell recruitment on rest days, alternated with IGF-1 LR3 because they compete for receptors. Not a Volume 1 core card.",
		good_for: ["Magazine muscle-stack literacy"],
		not_for: ["A gym-floor hypertrophy cycle from a chatbot"],
		dosing: [{
			label: "Magazine faculty (Walker)",
			text: "SC on rest days (target site if localized growth is desired). No milligram figure in the magazine — not invented here.",
			source: "mag-pep",
			chapter: "Muscle Growth & Recovery Peptide Stacks",
			pages: "37–38"
		}],
		reconstitution: mag,
		cycle: "With the 10–12 week stack; alternate with IGF-1 LR3 (do not same-day overlap per the article).",
		stacks_with: ["bpc-157", "igf-lr3"],
		contraindications: [
			"Pregnancy",
			"Active malignancy / IGF-axis talk without oncology",
			"Unsupervised anabolic stacking"
		],
		monitoring: ["Clinician-directed"],
		side_effects: ["Insufficient magazine AE table"],
		citations: ["ISSCA Peptides Magazine pp.37–38"]
	},
	{
		id: "igf-lr3",
		name: "IGF-1 LR3",
		aliases: [
			"igf1 lr3",
			"igf-1 lr3",
			"long r3 igf"
		],
		class_name: "Long-acting IGF-1 analogue (magazine muscle stack)",
		desk: "adjunct",
		regulatory: "Research / anabolic-adjacent. Not a labeled muscle drug in this library.",
		what_it_is: "ISSCA magazine muscle article describes IGF-1 LR3 as the post-training IGF signal. High-caution compound. Magazine prints timing and a short cycle, not milligrams.",
		good_for: ["Magazine muscle-stack literacy under a clinician"],
		not_for: ["A personal ‘post-workout pin’ from this chat"],
		dosing: [{
			label: "Magazine faculty (Walker)",
			text: "SC after training, with protein/carbs. Cycle 3–6 weeks on, then 3–6 weeks off. No milligram figure in the magazine — not invented here.",
			source: "mag-pep",
			chapter: "Muscle Growth & Recovery Peptide Stacks",
			pages: "37–38"
		}],
		reconstitution: mag,
		cycle: "3–6 weeks on max, then 3–6 weeks off (magazine).",
		stacks_with: ["bpc-157", "peg-mgf"],
		contraindications: [
			"Pregnancy",
			"Active cancer / IGF-axis",
			"Unsupervised anabolic use"
		],
		monitoring: ["Glucose, edema, clinician-owned IGF talk"],
		side_effects: ["Hypoglycemia risk is why this is not a chat protocol"],
		citations: ["ISSCA Peptides Magazine pp.37–38"]
	},
	{
		id: "vip-peptide",
		name: "VIP (vasoactive intestinal peptide)",
		aliases: ["vasoactive intestinal peptide"],
		class_name: "Neuropeptide — circulation / mucosal immunity (magazine immune stack)",
		desk: "adjunct",
		regulatory: "Research. Magazine immune article only. This library does not use VIP for sexual coaching.",
		what_it_is: "ISSCA magazine immune article lists VIP for blood flow, oxygenation, and tactical mucosal-immunity talk. Short-acting. Not ingested here as a sexual-health protocol.",
		good_for: ["Magazine immune-stack literacy (circulation, post-stress, clinician-timed)"],
		not_for: ["Sexual coaching", "Dependency / all-day spraying"],
		dosing: [{
			label: "Magazine faculty (Moya immune stack)",
			text: "50 mcg intranasal per nostril, up to 6×/day if needed; magazine says as-needed, avoid dependency, 1–6 sprays/day depending on use case.",
			source: "mag-pep",
			chapter: "Immune Optimization Peptide Stacks",
			pages: "26"
		}],
		reconstitution: mag,
		cycle: "As needed; magazine warns against dependency.",
		stacks_with: [
			"ta-1",
			"ll-37",
			"ara-290"
		],
		contraindications: ["Pregnancy", "Unsupervised vasoactive self-dosing"],
		monitoring: ["Blood pressure, flushing; clinician-timed"],
		side_effects: ["Fast-acting, short-lived per the article"],
		citations: ["ISSCA Peptides Magazine p.26"]
	}
];
var magazineStacks = [
	{
		id: "mag-longevity",
		name: "Magazine longevity stack (Lapeire)",
		category: "longevity",
		items: [
			"Epitalon 5–10 mg SC daily × 10–20 days, 1–2×/year",
			"BPC-157 400–600 mcg SC daily",
			"TB-500 300 mcg–1 mg SC",
			"GHK-Cu daily injection or topical (magazine: both if accessible)",
			"Tesamorelin 500–2,000 mcg SC daily (fasted) — Vol 1 arsenal also lists 2 mg nightly for VAT; print both",
			"Ipamorelin 100–300 mcg SC daily (fasted)",
			"Humanin 0.04 mg/kg (~3.2 mg SC for an 80 kg adult) — magazine faculty, not a Vol 1/2 table"
		],
		duration: "10–20 day Epitalon core; other peptides daily in that window; 1–2× per year",
		use_when: "Longevity / vitality questions after foundations (sleep, protein, zone-2). Faculty magazine, not a personal plan. Lifestyle first — ISSCA slide deck: do not sell peptides as magic.",
		source: "ISSCA Peptides Magazine pp.7–10"
	},
	{
		id: "mag-neuro",
		name: "Magazine neuro stack (Navarro)",
		category: "longevity",
		items: [
			"N-Acetyl Selank 100–300 mcg SC or 750–1,000 mcg IN; 6 weeks on / 6 off",
			"BPC-157 400–600 mcg SC",
			"TB-500 300 mcg–1 mg SC",
			"PE-22-28 400 mcg IN",
			"FGL(L) 1–2 mg SC",
			"Tesamorelin 500–2,000 mcg SC + Ipamorelin 100–300 mcg SC, fasted",
			"Dihexa 10–15 mg oral or topical; magazine: 3×/week, start low (half-life 7–10 days)",
			"Cerebrolysin 5–10 ml SC (215 mg/ml)"
		],
		duration: "6 weeks on / 6 weeks off; morning preferred; GH peptides fasted",
		use_when: "Brain fog, burnout, concussion-adjacent literacy — after emergency/TBI care is ruled out. Not a DIY Alzheimer’s protocol.",
		source: "ISSCA Peptides Magazine pp.11–15"
	},
	{
		id: "mag-beauty",
		name: "Magazine beauty stack (Kushmiran)",
		category: "longevity",
		items: [
			"Tesamorelin 500–2,000 mcg SC daily (fasted)",
			"Ipamorelin 100–300 mcg SC daily (fasted); magazine 5 days on / 2 off × 10–12 weeks",
			"GHK-Cu 1–2 mg SC daily, 6-week cycles, 3–4×/year + topical after shower / microneedling",
			"PTD-DBM scalp spray 1–2×/week (0.001%)",
			"BPC-157 300–600 mcg SC 3–5×/week",
			"TB-4 300–1,000 mcg SC 3–5×/week; 10–12 weeks then 4–8 weeks off"
		],
		duration: "GH peptides 10–12 weeks (5 on / 2 off); GHK-Cu 6-week pulses; BPC/TB 10–12 weeks",
		use_when: "Glow / tighter skin / hair-quality questions. Sequence foundations first. People do stack — a clinician combines them.",
		source: "ISSCA Peptides Magazine pp.17–20"
	},
	{
		id: "mag-immune",
		name: "Magazine immune reset (Moya)",
		category: "immune",
		items: [
			"TA-1 1–1.5 mg SC every 3rd day (2 weeks to 3 months)",
			"TB-4 300 mcg–1 mg SC daily (up to 12 weeks)",
			"BPC-157 400–600 mcg SC daily (oral if GI-specific)",
			"KPV 200–500 mcg SC or oral 1–2×/day",
			"LL-37 100 mcg SC 1–2×/day for 4–6 weeks max — magazine: monitor closely, not forgiving",
			"Humanin 0.04 mg/kg (3.2–4 mg SC) daily",
			"ARA-290 4 mg SC daily",
			"VIP 50 mcg IN per nostril as needed — not a sexual protocol in this library"
		],
		duration: "Up to 12 weeks then 1 month off; LL-37 4–6 weeks max",
		use_when: "Post-viral, autoimmune-adjacent, inflamed, run-down — magazine says this is medical-grade, not DIY. Stage it: BPC/KPV/TA-1 first, then Humanin/ARA-290.",
		source: "ISSCA Peptides Magazine pp.23–27"
	},
	{
		id: "mag-muscle",
		name: "Magazine recovery / muscle stack (Walker)",
		category: "injury",
		items: [
			"Morning fasted: GHRP-2 + Tesamorelin SC",
			"Post-workout: IGF-1 LR3 SC (3–6 weeks on max) — milligrams not printed",
			"Rest days: PEG-MGF SC — milligrams not printed; do not same-day overlap with IGF-1 LR3",
			"BPC-157 with nagging injury (can run longer)",
			"DSIP SC 2–3 hours before bed — milligrams not printed",
			"10–12 weeks on, 4–8 weeks off"
		],
		duration: "10–12 weeks on / 4–8 weeks off; IGF-1 3–6 weeks then off",
		use_when: "Return-to-training, durability, sleep-plus-repair. Not a vanity ‘big cycle.’ Magazine did not print milligrams for IGF-1 LR3, PEG-MGF, or DSIP — do not invent them.",
		source: "ISSCA Peptides Magazine pp.35–39"
	},
	{
		id: "mag-terrain",
		name: "Magazine regenerative terrain (synergies issue)",
		category: "mito",
		items: [
			"No single biologic is enough — terrain first (ISSCA founder letter)",
			"Sleep, protein, zone-2 remain Volume 2 mitochondrial foundations",
			"Clinic adjuncts discussed: TPE, EBOO, HBOT, PEMF / red light / cryotherapy",
			"NAD+ and glutathione IVs as mitochondrial support around cell therapy — no milligram drip recipe in this library",
			"Bioidentical hormones and methylation testing are clinician tools, not chat protocols"
		],
		duration: "Ongoing clinic architecture — not a peptide cycle",
		use_when: "Someone asks for NAD drips, HBOT, ozone, or ‘the full regen stack.’ Sequence and refer; do not DIY extracorporeal procedures.",
		source: "ISSCA Regenerative Synergies Magazine"
	}
];
var base = protocols_default;
var deskById = {
	"bpc-157": "core",
	"tb-500": "core",
	kpv: "core",
	"ta-1": "core",
	"cjc-ipam": "core",
	glp1: "approved",
	melanocortin: "approved",
	hcg: "approved",
	"ll-37": "core",
	"ghrp-others": "adjunct",
	"support-peptides": "adjunct"
};
var kb = {
	...base,
	meta: {
		...base.meta,
		sources: [...base.meta.sources, ...magazineSources]
	},
	peptides: [
		...base.peptides.map((p) => ({
			...p,
			desk: deskById[p.id] ?? "core"
		})),
		...mitoPeptides,
		...magazinePeptides
	],
	stacks: [
		...base.stacks,
		...mitoStacks,
		...magazineStacks
	]
};
kb.meta.legal.short;
kb.meta.legal.full;
//#endregion
export { kb as t };
