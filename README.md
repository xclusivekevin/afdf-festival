# AFDF Festival site

Next.js 15 rebuild of festival.afrifoodnetwork.com (review build, faithful to the September 2026 live site) plus AFN-owned registration at `/register`.

- Design system: `Web Design/Design Guides/afdf/afdf-design-system.md`; tokens in `app/tokens.css`.
- Ticketing: `/register` → Supabase (`supabase/README.md`) → Resend ticket email with QR. Admin at `/admin` (password = `FESTIVAL_ADMIN_SECRET`): list, search, CSV export, door check-in, capacity and close date.
- Forms (sponsor, vendor, contact, newsletter, waitlist) relay to `FORMS_INBOX` via Resend.
- Env: copy `.env.example` to `.env.local`.
- Dev: `pnpm install && pnpm dev -p 3101`
