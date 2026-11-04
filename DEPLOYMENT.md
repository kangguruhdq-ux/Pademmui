# VERCEL DEPLOYMENT GUIDE — PADEMMUI BARBERSCHOOL

This document provides step-by-step instructions for deploying and maintaining the **Pademmui Barberschool** web application on **Vercel**.

---

## 1. Quick Deployment Steps

### Option A: Import via Vercel Dashboard (Recommended)

1. Open [Vercel Dashboard](https://vercel.com/new).
2. Connect your GitHub account and import repository:
   ```
   https://github.com/kangguruhdq-ux/Pademmui
   ```
3. In the **Configure Project** screen:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Add **Environment Variables** (see Section 2).
5. Click **Deploy**.

---

### Option B: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy preview
vercel

# 4. Deploy directly to production
vercel --prod
```

---

## 2. Environment Variables Configuration

Configure the following environment variables in **Project Settings > Environment Variables** on Vercel:

| Variable Name | Production Value | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://pademmui.id` | Canonical base URL used for metadata, Open Graph, and sitemap |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | `6282134060584` | Official Pademmui WhatsApp hotline number without `+` or spaces |

*Note: The application includes safe production defaults in code so it will build and run cleanly even if environment variables are not immediately configured.*

---

## 3. Node.js & Build Specifications

- **Node.js Version**: 20.x (recommended) or 18.x
- **Package Manager**: npm (`package-lock.json` included in repository)
- **Edge / Serverless**: Next.js App Router static optimization by default.

---

## 4. Production Verification Checklist

### Pre-Deployment Checks (Completed)
- [x] TypeScript validation passed (`npx tsc --noEmit` — 0 errors)
- [x] Static build export compiled 11/11 routes successfully (`npm run build`)
- [x] All `.env` secrets excluded from version control (`.gitignore`)
- [x] Strict Content Security Policy (CSP) and HSTS configured in `next.config.mjs`
- [x] Zero-database WhatsApp booking wizard verified with URL encoding
- [x] FAQ accordion defaults to closed state with zero initial DOM bloat

### Post-Deployment Checks
After Vercel finishes deploying:

1. **Test Booking Flow**:
   - Navigate to `https://pademmui.id/booking` (or your preview URL).
   - Select service, pick date & time, fill customer name & WhatsApp.
   - Review summary and click **Lanjut ke WhatsApp**.
   - Verify that WhatsApp Web or app opens with the exact unformatted plain text template.
2. **Verify Security Headers**:
   Run in terminal:
   ```bash
   curl -I https://pademmui.id
   ```
   Confirm presence of:
   - `Content-Security-Policy`
   - `Strict-Transport-Security`
   - `X-Frame-Options: SAMEORIGIN`
   - `X-Content-Type-Options: nosniff`
   - Absence of `X-Powered-By`
3. **Verify SEO & Discovery**:
   - Open `/robots.txt`
   - Open `/sitemap.xml`
4. **Mobile Responsiveness**:
   - Open Chrome DevTools Device Mode (e.g., iPhone 14 Pro, Pixel 7).
   - Verify hamburger menu opens smoothly and closes cleanly without layout shifts.
   - Verify photo gallery lightbox opens directly in viewport.

---

## 5. Maintenance & Support

- **Repository**: [github.com/kangguruhdq-ux/Pademmui](https://github.com/kangguruhdq-ux/Pademmui)
- **Domain Management**: In Vercel Project Settings > Domains, map `pademmui.id` and `www.pademmui.id` with automatic SSL provisioning.
