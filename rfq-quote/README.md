# RFQ to Excel — VERTICAL SLICE

Original demonstration by Severian Roth, using synthetic electrical-parts data. One text-based PDF layout is extracted, matched against two supplied CSV files and exported as an Excel draft with review reasons. This is a local PDF/catalogue/Excel example; n8n orchestration has not been built or tested.

## Upstream reuse decision

- pypdf6.18.0, BSD-3-Clause, published7September2026; maintained official py-pdf/pypdf project. Use its PDF text extraction; the small project adapter recognizes the single sample table layout. Source: https://github.com/py-pdf/pypdf .
- openpyxl3.1.5, MIT, stable release28June2024; established Excel library with maintained documentation. Use its workbook writer and reader, with et-xmlfile2.0.0. Source: https://foss.heptapod.net/openpyxl/openpyxl . No custom PDF or XLSX serializer.
- Python standard-library csv and Decimal provide CSV parsing and decimal arithmetic. Project-owned logic applies exact catalogue/price matching and review status.
- For a later paid n8n integration, the official Extract From File and Convert To File nodes already provide PDF/CSV/XLSX adapters. Use those when the agreed runtime covers the layout, or call this small helper from the client-controlled environment. No n8n runtime/version has been selected or claimed tested for this sample.

## Run

Python3.10+; install the exact requirements into a virtual environment, then run `python quote.py` and `python verify.py` from this folder. The default run uses only the files alongside the script. It makes no network requests or remote changes.

## Demonstration assumptions

The sample PDF contains one numbered table with code, description, quantity and unit. Codes/units use exact uppercase matches. Quantities are positive whole numbers; fractional or unreadable quantities go to review. Each code must identify one catalogue row and one approved price row. Prices are non-negative USD amounts with at most two decimal places. Units must match exactly. No substitutions, fuzzy matches, price inference, currency conversion, tax or discount logic. Duplicate RFQ lines are retained individually.

Every extracted row appears in the workbook. Unexpected table lines stop the run; a draft with review rows has no full quotation total. The workbook includes a matched-lines subtotal, clearly labelled incomplete, and a separate Review sheet. Even a fully matched draft requires human approval.

OCR/scans, arbitrary PDF layouts, n8n orchestration, ERP, automatic email and production hosting are outside this demonstration. Those are project scope assumptions, not claims about a client's requirements.

Original adapter code and synthetic fixtures use GPL-3.0-or-later, matching this repository. Dependencies are installed separately; their source is not bundled.
