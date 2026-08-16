# CloudDigify — SaaS Legal Readiness Review Pack

**Prepared:** 2026-08-16
**Scope:** clouddigify.com public website + CloudDigify Platform SaaS
**Status:** INTERNAL REVIEW PACK FOR LEGAL COUNSEL — nothing in this document is approved legal language, a legal conclusion, or a commitment. All classifications are factual assessments of what the current pages say, verified against the repositories cited.

Repositories reviewed (read-only):

- Website: this repository (`clouddigify.com`, Vite/React SPA, Vercel)
- Platform: `clouddigify-sales-crm` (branch `platform-v1`, Cloudflare Workers)

---

## 1. Executive Summary

- The current `/terms` and `/privacy` pages are **website-era documents (dated April 27, 2025)** with SaaS factual additions. Both contain **embedded "LEGAL REVIEW REQUIRED" flags in the source** acknowledging that SaaS subscription terms and privacy operational details are not covered.
- The public site now advertises **paid SaaS plans (₹2,999 / ₹6,999 / ₹14,999 per month, 14-day trial, annual = 10 monthly payments)** but the Terms contain **no subscription, payment, cancellation, suspension, data-ownership, availability, or SaaS liability provisions at all**.
- The Privacy Policy claims GDPR/CCPA compliance and lists user rights, but has **no retention periods, no subprocessor list, no DPA position, no breach-notification commitment, and no tenant-vs-controller role definition** — critical for a multi-tenant CRM that stores tenants' end-customer data.
- **Highest-risk item found:** the `/security` page **claims ISO 27001, SOC 2 Type II, and HIPAA compliance** ([src/components/pages/legal/Security.jsx](src/components/pages/legal/Security.jsx)). No evidence of these certifications exists in either repository. Counsel should review whether these claims must be removed or qualified immediately, independent of the SaaS work.
- The technical reality is favorable and simple to describe: the platform runs entirely on **Cloudflare** (Workers, D1, R2, Workers AI), authenticates staff via **Microsoft Entra ID**, and sends email via **Microsoft Graph**. The website runs on **Vercel** with **Google Analytics/GTM** and a form-to-email function (Zoho/SendGrid config drift noted in §5).
- 16 business decisions (§12) and 11 privacy decisions (§13) are required from the owner before counsel can draft final Terms; they are listed without proposed answers.

---

## 2. Current Terms Coverage Matrix

Source: [src/components/pages/legal/TermsAndConditions.jsx](src/components/pages/legal/TermsAndConditions.jsx) (`/terms`, "Updated: April 27, 2025"). The page itself contains the embedded flag: *"LEGAL REVIEW REQUIRED: SaaS subscription terms (payment, termination, liability, service terms for CloudDigify Platform) are not yet covered by this document."*

| # | Topic | Status | Notes |
|---|---|---|---|
| 1 | Company/service scope | **PARTIAL** | Names CloudDigify LLP; lists cloud services, consulting, training, and "CloudDigify Platform, a software-as-a-service (SaaS) product" — but all operative clauses govern only the **website**, not the SaaS. |
| 2 | CloudDigify Platform SaaS | **MISSING** | Mentioned in intro only; zero operative SaaS terms (self-acknowledged by the embedded flag). |
| 3 | Eligibility / authorized business users | **MISSING** | No B2B-only, business-use, or authorized-user language. |
| 4 | Account responsibility | **MISSING** | No credential/account-security responsibility clause. |
| 5 | Organization/tenant administrators | **MISSING** | No concept of tenant, Organization Admin, or admin authority to bind the organization. |
| 6 | Subscription plans | **MISSING** | No subscription terms; plans exist only on the pricing page. |
| 7 | Starter / Professional / Enterprise | **MISSING** | Not referenced in Terms. Pricing page describes them factually ([src/components/pages/platform/PlatformPricing.jsx](src/components/pages/platform/PlatformPricing.jsx)). |
| 8 | Free trial | **MISSING** | 14-day supervised trial advertised on pricing page; no trial terms (duration, conversion, data at end of trial). |
| 9 | Monthly billing | **MISSING** | No billing terms. |
| 10 | Annual billing | **MISSING** | "Pay for 10 months, get 12 months" advertised; no contractual treatment (commitment, refundability). |
| 11 | Taxes/GST | **PARTIAL** | Pricing page says "Prices exclude applicable taxes"; Terms silent on GST treatment. |
| 12 | Payment terms | **MISSING** | No invoicing/due-date/payment-method terms. |
| 13 | Late/non-payment | **MISSING** | No consequence of non-payment. |
| 14 | Plan upgrades/downgrades | **MISSING** | Not addressed. |
| 15 | Cancellation | **MISSING** | Not addressed. |
| 16 | Suspension | **PARTIAL** | Website-only: "reserves right to restrict/terminate access" to the website. No SaaS suspension terms (platform technically supports org suspension). |
| 17 | Termination | **MISSING** (for SaaS) | Website access termination only; nothing on subscription termination or post-termination data. |
| 18 | Acceptable use | **PARTIAL** | "Use of Website" clause covers lawful use of the **website**; no SaaS acceptable-use policy (abuse, illegal data, security testing, resale). |
| 19 | Customer data ownership | **MISSING** | Nothing stating tenants own their business data. "User Submissions" clause grants CloudDigify broad rights to use submitted content — **LEGAL DECISION REQUIRED**: as written this could be read against uploaded tenant data; counsel should scope it to website submissions. |
| 20 | CloudDigify IP | **PARTIAL** | Website content IP covered; platform software IP/license grant not covered. |
| 21 | Confidentiality | **MISSING** | No confidentiality clause. |
| 22 | Third-party services | **PARTIAL** | Third-party **links** disclaimer only; no third-party service-dependency terms. |
| 23 | Microsoft / AWS / Google / vendor dependencies | **MISSING** | Platform depends on Microsoft (auth/email) and Cloudflare (all infrastructure); tenants' own cloud businesses touch AWS/Azure/GCP data. Not addressed. |
| 24 | AI-assisted functionality | **MISSING** | AI invoice extraction is a marketed feature; no AI accuracy/verification disclaimer in Terms (see §10). |
| 25 | Service availability | **MISSING** | No uptime/availability/maintenance language, and no SLA is promised anywhere (consistent with the business position, but should be stated). |
| 26 | Backups/recovery | **MISSING** | Platform has an operational backup runbook; Terms make no commitment either way — **LEGAL DECISION REQUIRED** on whether to state anything. |
| 27 | Support | **MISSING** | Support hours/email exist on the Contact page only; no support terms. |
| 28 | Warranty disclaimers | **PARTIAL** | "As is" disclaimer covers the **website**; needs extension/decision for the SaaS. |
| 29 | Limitation of liability | **PARTIAL** | Excludes indirect/consequential damages for website use; **no liability cap**, and scope does not clearly cover the SaaS — **LEGAL DECISION REQUIRED**. |
| 30 | Indemnity | **PARTIAL** | One-way user indemnity for website use; SaaS scope undefined. |
| 31 | Governing law | **COMPLETE** (as a website term) | India; exclusive courts of Uttar Pradesh. **LEGAL DECISION REQUIRED** whether this remains the choice for SaaS contracts (note: second office in Bengaluru, Karnataka). |
| 32 | Dispute resolution | **PARTIAL** | Court jurisdiction only; no arbitration/escalation clause — **LEGAL DECISION REQUIRED**. |
| 33 | Changes to terms | **MISSING** | No amendment/notice mechanism. |
| 34 | Contact information | **COMPLETE** | CloudDigify LLP, Greater Noida West address, +91 7011112386, info@clouddigify.com. |

---

## 3. Current Privacy Coverage Matrix

Source: [src/components/pages/legal/PrivacyPolicy.jsx](src/components/pages/legal/PrivacyPolicy.jsx) (`/privacy`, "Updated: April 27, 2025"). Embedded flag: *"LEGAL REVIEW REQUIRED: data retention periods, data residency, DPA commitments, subprocessor list and breach notification timelines are not documented and must be confirmed by legal before publishing."*

### 3a. Data categories

| # | Category | Status | Notes |
|---|---|---|---|
| 1 | Account/contact information | **PARTIAL** | Name/email/phone/company listed for website visitors; platform account info mentioned generically. |
| 2 | Organization information | **PARTIAL** | "Organization/customer business data" mentioned in one line; no detail. |
| 3 | CRM data | **PARTIAL** | "CRM records" mentioned; no description of leads/contacts/activities held on tenants' behalf. |
| 4 | Customer/contact data uploaded by tenants | **MISSING** | The controller/processor distinction (tenant uploads THEIR customers' data) is absent — the policy's most important structural gap. |
| 5 | Billing/invoice/payment information | **PARTIAL** | "Billing/invoice info" mentioned generically; GSTIN, invoices, payments, TDS not described. |
| 6 | Cloud account identifiers | **MISSING** | Platform stores tenant customers' cloud account IDs (AWS/Azure/GCP account/tenant identifiers). Not mentioned. |
| 7 | Subscription/license information | **MISSING** | Vendor subscription IDs, seats, renewal data not mentioned. |
| 8 | Authentication information | **PARTIAL** | "Authentication & security logs" mentioned; Microsoft sign-in and passwordless portal login not described. |
| 9 | Application usage/security logs | **PARTIAL** | Mentioned generically; audit logging not described. |
| 10 | Uploaded files | **MISSING** | R2 file storage (attachments, logos, distributor invoices) not mentioned. |
| 11 | Distributor invoices | **MISSING** | Not mentioned. |
| 12 | AI invoice extraction | **MISSING** | No AI processing disclosure (see §10). |
| 13 | Customer Portal users | **MISSING** | External end-customer users are not addressed at all (see §11). |
| 14 | Cookies | **PARTIAL** | Covered generically here; detail lives in the separate Cookie Policy ([src/components/pages/legal/CookiePolicy.jsx](src/components/pages/legal/CookiePolicy.jsx)), which names Google Analytics. |
| 15 | Analytics | **PARTIAL** | Google Analytics named; GTM (`GTM-NZ8LCJ2J`) and the GA4 ID (`G-ZRMKN7K7BB`) in [index.html](index.html) are not disclosed as such. |
| 16 | Contact/demo forms | **PARTIAL** | Form data collection described; recipients (info@ + CC chirag@) and the email transport are not. |
| 17 | Support communications | **PARTIAL** | "Direct contact" mentioned generically. |

### 3b. Processing framework

| # | Topic | Status | Notes |
|---|---|---|---|
| 18 | Purpose of processing | **PARTIAL** | Four generic purposes (respond, communicate, improve, comply); nothing platform-specific. |
| 19 | Legal basis | **MISSING** | Claims GDPR/CCPA/IT Act compliance but states no lawful bases. India's **DPDP Act 2023 is not referenced** — LEGAL DECISION REQUIRED on framework positioning. |
| 20 | Data sharing | **PARTIAL** | Names "trusted partners AWS, Google, Zoho (+ others)" — this list does **not** match verified reality (§5): Cloudflare, Microsoft, and Vercel are absent. |
| 21 | Subprocessors | **MISSING** | No list (self-acknowledged in embedded flag). Verified candidates in §5. |
| 22 | International transfers | **PARTIAL** | SCC-or-equivalent sentence exists; no actual transfer map. |
| 23 | Data residency | **MISSING / LEGAL DECISION REQUIRED** | Platform data lives in Cloudflare D1/R2; region position not documented anywhere. |
| 24 | Retention | **MISSING** | No periods (self-acknowledged). |
| 25 | Security | **PARTIAL** | Lists hosting (Vercel), access control, encryption, monitoring — describes the **website**, not the platform. |
| 26 | Access/correction/deletion requests | **PARTIAL** | Rights listed by jurisdiction; no process, no address (privacy@ noted as "to be updated in the future" — not active). |
| 27 | Tenant/customer responsibilities | **MISSING** | No statement that tenants are responsible for data they upload about their own customers. |
| 28 | Children's data | **COMPLETE** | Not directed to under-18s; no intentional collection from minors. |
| 29 | Breach/incident wording | **MISSING** | No notification commitment (self-acknowledged). The `/security` page separately promises "transparency with customers about security incidents" — inconsistent surfaces. |
| 30 | Policy changes | **MISSING** | No amendment/notice mechanism found. |
| 31 | Contact information | **COMPLETE** | Same LLP address/phone/info@ block as Terms. |

---

## 4. Verified CloudDigify Data Flows

All flows below are verified from code in the two repositories. No vendor is listed that was not found in code or configuration.

### 4.1 Platform staff authentication
Tenant employee → **Microsoft Entra ID sign-in** (platform's own app registration) → CloudDigify Platform issues its own HttpOnly session cookie (JWT). No passwords are stored by CloudDigify. Dev-mode password-less login is disabled in production (verified by the production check script).
Evidence: platform `src/lib/auth.ts`, Microsoft OAuth callback, `wrangler.jsonc` (client ID), `scripts/verify-production.ts`.

### 4.2 Tenant business data
Tenant users → CloudDigify Platform (Cloudflare Worker, OpenNext/Next.js) → **Cloudflare D1** (SQL database: leads, customers, quotes, invoices, payments, subscriptions, settings, audit logs) and **Cloudflare R2** (object storage: uploaded files with metadata rows). All queries are organization-scoped; access is enforced server-side by role/capability checks and plan entitlements.
Evidence: platform `src/lib/db/schema.ts`, `src/lib/tenant.ts`, `src/lib/entitlements.ts`, `wrangler.jsonc` bindings.

### 4.3 Distributor invoice + AI extraction
Tenant uploads a distributor invoice → stored in R2 with a `files`/distributor-invoice record → **user-triggered** "extract" action runs **Cloudflare Workers AI** (model `@cf/meta/llama-3.3-70b-instruct-fp8-fast`) to propose line items → extracted lines land in a review/reconciliation workflow where staff link, edit, and convert them; nothing financial is issued automatically from AI output (converted invoices are created by explicit user actions and drafts require issue steps).
Evidence: platform `src/lib/services/billing/extraction.ts` (line 20: model constant), `src/lib/ai.ts` (AI binding), `src/app/(billing)/distributor-invoices/[id]/page.tsx` (manual form action), `reconciliation.ts`, `consumption-conversion.ts`.

### 4.4 Customer Portal (external end customers)
Tenant invites their end customer → **passwordless email link** (single-use invite/login tokens, no passwords ever stored) → separate `cdportal_session` cookie with a portal-only JWT audience → portal user sees **only their own customer-scoped data** (invoices, quotes, statement, subscriptions, cloud spend, profile) via whitelist projections that strip cost/margin/distributor fields. Portal identity (`portal_users`) is fully separate from staff identity. Enterprise-plan tenants only.
Evidence: platform `src/lib/portal-auth.ts`, `src/lib/services/portal/*` (migration `0040_...portal_users`).

### 4.5 Platform email
Platform-generated email (lead notifications, quote/invoice emails, renewal digests, portal invites/login links, operator alerts) → **Microsoft Graph API** using a configured sender mailbox (client-credentials app). Failures are recorded in a notification ledger; sending is best-effort.
Evidence: platform `src/lib/services/graph.ts`, notification services, `MICROSOFT_SENDER_USER_ID` secret in production checks.

### 4.6 Public website forms
Visitor submits the Contact form ([src/components/pages/Contact.jsx](src/components/pages/Contact.jsx)) or Platform Demo form ([src/components/pages/platform/PlatformDemo.jsx](src/components/pages/platform/PlatformDemo.jsx)) → `POST /api/send-email` (Vercel serverless function, [api/send-email.js](api/send-email.js)) → **Nodemailer SMTP** ([api/email-service.js](api/email-service.js)) → delivered to **info@clouddigify.com** (CC **chirag@clouddigify.com**). ⚠️ Config drift: code defaults to Zoho (`smtppro.zoho.in`) while `.env.production` shows SendGrid values — the actually-active SMTP provider must be confirmed by the owner (§5).

### 4.7 Website analytics/cookies
Website pages load **Google Analytics 4** (`G-ZRMKN7K7BB`) and **Google Tag Manager** (`GTM-NZ8LCJ2J`) from [index.html](index.html), with SPA pageview tracking ([src/utils/useGtagPageview.js](src/utils/useGtagPageview.js)). A consent banner ([src/components/common/CookieConsentBanner.jsx](src/components/common/CookieConsentBanner.jsx)) records acceptance in localStorage but **loads analytics regardless of consent and offers no reject/granular option** — counsel review item. The **platform itself has no third-party analytics or tracking scripts**; its only "analytics" call is an internal Cloudflare GraphQL API query for the platform's own usage monitoring (platform `src/lib/services/usage-watch.ts`).

---

## 5. Third-Party Service Inventory

Labelled as **"Potential legal subprocessor review item"** where personal/tenant data may be involved — no legal classification is made here.

| Provider | Purpose | Data categories potentially involved | Verified evidence | Review label |
|---|---|---|---|---|
| **Cloudflare, Inc.** | Entire platform runtime: Workers (compute), D1 (database), R2 (file storage), Workers AI (invoice extraction), cron | All tenant business data, uploaded files, portal user data, invoice documents sent to AI | Platform `wrangler.jsonc` (D1/R2/AI bindings), deployed worker `clouddigify-platform` | Potential legal subprocessor review item |
| **Microsoft Corporation** | Staff authentication (Entra ID); platform email sending (Graph API) | Staff identity (name/email), full content of platform-sent emails (invoices, quotes, portal links) | Platform app registration in `wrangler.jsonc`; `src/lib/services/graph.ts` | Potential legal subprocessor review item |
| **Vercel, Inc.** | Hosting of clouddigify.com + the form-to-email serverless function | Website visitor IPs/requests; contact & demo form contents in transit | [vercel.json](vercel.json), [DEPLOYMENT.md](DEPLOYMENT.md) | Potential legal subprocessor review item |
| **Google LLC** | GA4 + GTM analytics on the website | Visitor device/usage data, IP-derived data, cookies | [index.html](index.html) (`G-ZRMKN7K7BB`, `GTM-NZ8LCJ2J`) | Potential legal subprocessor review item |
| **Zoho Corporation** (Zoho Mail) | SMTP transport for website form emails (per code defaults + [EMAIL_SETUP.md](EMAIL_SETUP.md)) | Form contents, sender mailbox | [api/email-service.js](api/email-service.js) default `smtppro.zoho.in` | Potential legal subprocessor review item — **OWNER MUST CONFIRM** which of Zoho/SendGrid is live |
| **Twilio SendGrid** | Alternative SMTP config present in `.env.production` (placeholder API key) | Same as above, if active | `.env.production` (`smtp.sendgrid.net`) | Potential legal subprocessor review item — likely inactive placeholder; confirm |
| **Hostinger** | DNS for clouddigify.com | None beyond DNS metadata | [DEPLOYMENT.md](DEPLOYMENT.md) | Informational |
| **Unsplash / logos-world / via.placeholder** | Image CDNs allowed by CSP | Visitor IPs on image fetch | [vercel.json](vercel.json) CSP `img-src` | Informational |

**Named in the current Privacy Policy but NOT verified as platform processors:** "AWS, Google, Zoho (+ others)" — AWS appears nowhere in either codebase as a CloudDigify processor (tenants' own cloud businesses concern AWS/Azure/GCP *data about* accounts, not processing *by* those vendors on CloudDigify's behalf). The published partner list should be corrected by counsel to match §5.

---

## 6. Current SaaS Commercial Facts (verified)

Verified against [src/components/pages/platform/PlatformPricing.jsx](src/components/pages/platform/PlatformPricing.jsx) and platform documentation/code:

- Plans: **Starter ₹2,999/month · Professional ₹6,999/month (marked Recommended) · Enterprise ₹14,999/month.** ✔ matches pricing page.
- **14-day trial**, described on-site as "14-day free trial. Onboarding is guided by our team" (i.e., supervised). ✔ Platform default `platform.trialDays = 14`. ✔
- **Annual model:** "Pay for 10 months, get 12 months — equivalent to 2 months free." ✔
- "Prices exclude applicable taxes. Final pricing may vary based on selected add-ons, usage and commercial terms." ✔
- "Usage allowances are subject to fair-use and plan policy." ✔ — consistent with the platform fact that only **team-member count and export row limits are technically enforced today**; other advertised limits are fair-use (documented in platform CHANGELOG 1.0.0-alpha.17).
- **No self-service checkout and no automatic public signup** — verified: CTAs are "Request Demo" / "Contact Sales" only; the platform has no public registration route; organizations are created and plans/entitlements assigned exclusively through CloudDigify's internal Platform Control Center. ✔
- **Tenant Organization Admins** manage their own employees, roles, and module access strictly within purchased entitlements (server-enforced ceiling; verified in platform `src/lib/entitlements.ts` + org admin services). ✔
- Plan boundaries as enforced in code: Starter = CRM + GST Billing + AI extraction; Professional adds Cloud Billing + License & Renewal Management; Enterprise adds Customer Portal + API access + unlimited limits. ✔ matches the pricing page feature lists.

---

## 7. Current Support Facts (verified)

- Official support/contact channel: **info@clouddigify.com** (all website forms deliver there; also the contact point on every legal page).
- Published business hours ([src/components/pages/Contact.jsx](src/components/pages/Contact.jsx)): **Monday–Friday, 9:00 AM–6:00 PM IST; weekends closed.**
- **No SLA is promised anywhere** on the website or in the platform.
- **No Support Desk / ticketing module is shipped** — `support_desk` exists only as an inactive configuration key in the platform's plan data and exposes no functionality.
- No response-time commitments exist and none are proposed here.
- Note for counsel: **support@clouddigify.com and sales@clouddigify.com appear as placeholders only and are not active mailboxes**; the Security page lists security@clouddigify.com — the owner should confirm which addresses actually receive mail before any are put in legal documents.

---

## 8. Terms — Missing/Partial Areas (consolidated)

Everything a SaaS Terms of Service (or a separate Platform Subscription Agreement) must add, per the matrix in §2:

1. Platform scope & definitions (tenant, organization, Organization Admin, authorized users, portal users).
2. Eligibility (business use only) and account/credential responsibility.
3. Subscription plans, plan entitlements, and CloudDigify's right to control provisioning.
4. Trial terms (14-day supervised; what happens at expiry; data at trial end).
5. Fees, invoicing, payment terms, GST, monthly vs annual model, price-change mechanism.
6. Late/non-payment consequences, suspension, grace periods.
7. Upgrades/downgrades effect and timing.
8. Cancellation and termination (both directions) + post-termination data handling.
9. SaaS acceptable-use policy.
10. Customer data ownership + narrowing of the existing "User Submissions" license grant.
11. Platform IP / license grant to tenants.
12. Confidentiality.
13. Third-party dependencies (Cloudflare, Microsoft) and pass-through limitations.
14. AI functionality disclaimer (see §10).
15. Availability/maintenance statement consistent with the no-SLA position; backup position.
16. Support description consistent with §7.
17. SaaS-scoped warranty disclaimer, liability cap, mutual/one-way indemnity scope.
18. Governing law/dispute-resolution decision for SaaS contracts.
19. Amendment/notice mechanism.
20. Beta customer treatment (see §14).

## 9. Privacy — Missing/Partial Areas (consolidated)

1. Controller vs processor roles: CloudDigify's role for website/account data vs data tenants upload about *their* customers (including Customer Portal end users).
2. Full platform data inventory: CRM records, billing/GST data, cloud account identifiers, subscription/license data, uploaded files, distributor invoices, audit/security logs.
3. AI processing disclosure (§10).
4. Customer Portal user privacy (§11).
5. Accurate subprocessor/vendor list (§5) replacing the unverified "AWS, Google, Zoho" sentence.
6. Retention schedule and deletion process (owner decisions, §13).
7. Data residency / international transfer position for Cloudflare-hosted data (owner decision).
8. Legal basis framework, including whether India's DPDP Act 2023 should be referenced (currently absent; IT Act 2000/GDPR/CCPA are named).
9. Breach/incident notification wording (and reconciliation with the `/security` page promises).
10. Rights-request process and a working contact address (privacy@ is currently not active).
11. Cookie-consent mechanics: analytics load before/regardless of consent; no reject option; consent stored in localStorage only.
12. Policy-change notice mechanism.
13. Website-specific facts: forms are emailed via SMTP to info@ (CC chirag@); GA4/GTM IDs.

---

## 10. AI Disclosure Review (facts for counsel)

All verified from platform code (`src/lib/services/billing/extraction.ts`, `src/lib/ai.ts`, distributor-invoice UI):

- **What AI is used for:** extracting line items (descriptions, quantities, amounts, USD/FX values) from distributor invoices that tenants upload, to save manual data entry. That is the platform's only AI feature today.
- **Automatic or user-triggered:** **user-triggered only** — a staff member clicks an extract action on a specific distributor invoice. Nothing runs AI in the background.
- **Processor/model:** Cloudflare **Workers AI**, model `@cf/meta/llama-3.3-70b-instruct-fp8-fast`, invoked via the Worker's AI binding (data stays within the Cloudflare service used to run the platform; no separate AI vendor account).
- **Data categories processed:** the uploaded distributor invoice document content — supplier/distributor commercial data: product/SKU descriptions, quantities, prices, account identifiers appearing on the invoice. Gated to tenants with the Cloud Billing module and AI entitlement.
- **Review/editability:** extracted values enter a review & reconciliation workflow; staff link lines to catalog items and customer accounts, and can edit/reject before anything is used.
- **Can output be incorrect:** yes — extraction is best-effort; failed extractions are recorded and surfaced (the platform even has an operator "failed AI extractions" panel). No accuracy is guaranteed anywhere in code.
- **Automatic financial actions:** **none.** Converting extracted lines into a customer invoice is a separate explicit user action, and resulting invoices are drafts requiring a further issue step.
- Counsel review items (not conclusions): whether the Terms need an AI-accuracy disclaimer and human-review expectation; whether Privacy must disclose AI processing of uploaded documents; whether any statement about (not) training models on customer data is needed (owner decision, §13).

---

## 11. Customer Portal Considerations

Facts (verified in platform `src/lib/services/portal/*`, `src/lib/portal-auth.ts`):

- Portal users are the **tenant's end customers** — external individuals invited by the tenant, with a **separate identity system** (no roles, no staff privileges, own session versioning).
- Access is **double-scoped** to one organization AND one customer; portal users can only ever see their own customer's data.
- **Passwordless authentication:** single-use, expiring email links for activation (7 days) and login (15 minutes); no passwords collected or stored.
- Data exposed (read, via whitelist projections that strip cost/margin/distributor internals): invoices + payment history, quotes, account statement, subscriptions/licenses and renewal dates, cloud spend billed to them, profile/contact details.
- Writes are limited to: quote accept/reject, renewal request, and **profile change requests** (the customer master is never edited directly from the portal).
- Enterprise-plan tenants only.

Language counsel may need to review (not drafted here):

1. Who is responsible to the portal user — the tenant invited them and controls their data; CloudDigify operates the system. The privacy policy currently says nothing about these individuals.
2. Portal users receive emails (invites/login links) from CloudDigify's configured sender via Microsoft Graph — disclosure/consent basis.
3. Whether portal users need their own short terms-of-use/privacy notice at portal login (pages exist and already link the placeholder /terms and /privacy).
4. Retention/deletion of portal user records when the tenant disables them or the tenant relationship ends.
5. Rights requests arriving from a portal user directly to CloudDigify vs routing through the tenant.

---

## 12. OWNER DECISIONS REQUIRED (Terms/business)

Questions only — deliberately unanswered:

1. Is there a minimum subscription commitment (e.g., minimum months on monthly plans)?
2. Can monthly plans cancel effective at the end of the current paid month?
3. Are annual subscriptions refundable at all?
4. What happens to prepaid annual fees on cancellation (pro-rata refund, credit, forfeit)?
5. How long after non-payment before suspension?
6. Is there a grace period, and does the platform's existing GRACE subscription status reflect the intended policy?
7. How long is tenant data retained after termination before deletion?
8. How does a tenant request a data export (format, who performs it, any fee)?
9. When is data permanently deleted (including backups)?
10. Are beta customers subject to different terms (see §14)?
11. Are plan upgrades immediate?
12. When do downgrades take effect (immediately, at renewal)? Note: entitlement changes technically take effect within ~1 minute of assignment.
13. Can CloudDigify change pricing at renewal, and with how much notice?
14. What support commitment (if any) do we want to make beyond §7's factual position?
15. Governing law/jurisdiction preference for SaaS contracts (current website terms say Uttar Pradesh courts; offices exist in Greater Noida and Bengaluru)?
16. Liability cap preference (e.g., fees paid in trailing 12 months, or another formula)?

## 13. OWNER PRIVACY DECISIONS REQUIRED

1. Intended data retention period after tenant termination.
2. Data deletion process (who executes, how confirmed, backup handling).
3. Data export process offered to tenants.
4. Is customer data used for product improvement, and in what form (aggregated/anonymized or not)?
5. Is customer data ever used to train AI/models? (Nothing in code trains models; a public position is still needed.)
6. Analytics/cookie consent policy for the website — keep load-before-consent GA4/GTM, or move to consent-gated loading with a reject option?
7. Marketing email policy (form submissions currently produce operational email only; is marketing use intended?).
8. International processing position (Cloudflare/Microsoft/Google/Vercel are global providers; is a specific region/residency commitment desired and feasible?).
9. Privacy request contact address — activate privacy@clouddigify.com or designate info@?
10. Will a DPA be offered to tenants (and required from CloudDigify's providers)?
11. Minimum age / business-only-use statement (current policy says under-18s not targeted; platform is B2B).

---

## 14. Beta Agreement Review Items

**Legal-review recommendation (not a draft):** given the current operating model — supervised onboarding, early tenants on a young platform, no SLA, support via one mailbox — a short **Beta Addendum** referenced from onboarding appears advisable so early commercial arrangements are not governed solely by website terms that don't cover the SaaS. Sections counsel should consider:

1. Beta status of the platform and what that means for the customer.
2. The actual commercial arrangement (discounted/free/standard pricing) if any beta pricing applies.
3. Feedback: CloudDigify's right to use product feedback.
4. Feature changes: features may change or be withdrawn during beta.
5. Availability: no uptime commitment; maintenance may occur without notice.
6. Support: exactly the §7 factual position.
7. Data handling: production data is real and retained per the (to-be-decided) retention policy; export/deletion on exit.
8. Confidentiality (mutual, covering non-public features and customer data).
9. No production SLA — if that is the chosen business position (owner decision 14).
10. Termination: either party's exit rights during beta and data return.

---

## 15. Exact Questions for Legal Counsel

1. Should SaaS terms be added to `/terms` or issued as a separate CloudDigify Platform Subscription Agreement (with the website terms staying website-scoped)? Which document should demo/onboarding customers actually sign?
2. The `/security` page claims **ISO 27001, SOC 2 Type II, GDPR and HIPAA compliance** with no supporting certification. Must these claims be removed/qualified immediately, and is there exposure for the period they have been live?
3. Does the "User Submissions" license in the current Terms need to be re-scoped so it cannot be read to cover tenant business data uploaded to the platform?
4. For a multi-tenant CRM: how should the Privacy Policy structure CloudDigify's role for (a) website visitors, (b) tenant staff, (c) data tenants upload about their customers, (d) Customer Portal end users? Is a separate tenant-facing DPA required or advisable?
5. Should India's DPDP Act 2023 be the primary stated framework (policy currently cites IT Act 2000, GDPR, CCPA)? What does DPDP require of us as-is (consent notices, grievance officer, breach reporting)?
6. Is the current cookie banner (accept-only, analytics loaded pre-consent, localStorage record) adequate for our stated GDPR/CCPA posture, or must consent-gated loading be implemented?
7. What breach-notification wording is appropriate given no formal incident-response certification exists, and how do we reconcile it with the `/security` page's transparency promise?
8. Given Uttar Pradesh courts in current terms and operations partly in Bengaluru: recommended governing law, jurisdiction, and whether arbitration should be added for SaaS disputes?
9. What liability cap and warranty structure is market-standard and defensible for an early-stage Indian B2B SaaS at these price points?
10. Annual prepay ("10 months for 12"): what refund/forfeiture structures are enforceable and what must be disclosed at purchase?
11. Do AI-extraction outputs require specific disclaimers/consents under Indian law or GDPR (automated processing) given they are user-triggered and human-reviewed?
12. Do Customer Portal end users need their own terms-of-use/privacy notice at login, and who bears notification duties toward them?
13. Is a Beta Addendum (per §14) the right instrument for current early customers, and can it be executed by email acceptance during supervised onboarding?
14. The published "trusted partners: AWS, Google, Zoho" sentence doesn't match the verified provider list (§5) — confirm the corrected disclosure once the owner confirms the live SMTP provider.
15. Any required company-identity corrections (LLP registration details, GSTIN display, grievance officer designation) on the legal pages?

## 16. Recommended Next Steps

1. **Owner:** answer §12 and §13; confirm live SMTP provider (Zoho vs SendGrid) and which mailboxes are real; confirm certification status behind the `/security` claims.
2. **Immediate risk triage with counsel:** the ISO/SOC 2/HIPAA claims on `/security` (question 2) — this is independent of the SaaS work and likely the fastest required change.
3. **Counsel:** decide document architecture (question 1); then draft the SaaS Terms/Subscription Agreement, revised Privacy Policy, and (if advised) the Beta Addendum using §4–§11 as the factual base.
4. **After counsel drafts return:** implement page updates on the website (a separate task — no `/terms`, `/privacy`, `/cookies`, `/security` changes were made in this review), including consent-gated analytics if counsel requires it, and align the platform's placeholder /terms + /privacy pages with the approved documents.
5. **Keep this pack current:** regenerate §5 and §6 whenever providers, plans, or prices change before counsel sign-off.

---
*End of review pack. No website or platform files were modified. No legal language herein is approved for publication.*
