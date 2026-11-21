# M.S.S. Enterprises — Industrial Machinery B2B Website

Production-ready Next.js (App Router) + TypeScript + Tailwind CSS website for **M.S.S. Enterprises**, Lucknow, Uttar Pradesh, India.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **SEO:** Dynamic Metadata, Open Graph, JSON-LD (`LocalBusiness` & `Product`), XML Sitemap, `robots.txt`

## Project Structure

```text
mss-enterprises-website/
├── public/
│   └── images/
│       ├── hero/
│       ├── paper-plate-machines/
│       ├── thermocol-machines/
│       ├── paper-cup-machines/
│       ├── lamination-machines/
│       ├── laser-machines/
│       ├── cnc-machines/
│       ├── plotter-machines/
│       ├── ro-plants/
│       ├── gallery/
│       ├── brand/
│       └── placeholder-machine.svg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── api/enquiry/route.ts
│   │   ├── contact/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── EnquiryForm.tsx
│   │   ├── EnquiryModal.tsx
│   │   ├── FloatingActions.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryClient.tsx
│   │   ├── MotionWrapper.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   └── ProductsClient.tsx
│   ├── data/
│   │   ├── company.ts
│   │   └── products.ts
│   └── lib/
│       └── utils.ts
├── .env.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Local Setup

1. Extract the ZIP archive and open the folder in your terminal:
   ```bash
   cd mss-enterprises-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and configure values:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Verify production build locally:
   ```bash
   npm run build
   npm start
   ```

## Updating Products, Specs & Images

- **Add/Update Machines:** Edit `src/data/products.ts`. All technical specifications are configurable in the `specifications` array so only verified data is displayed.
- **Add New Images:** Place `.webp` or `.jpg` images inside the matching folder under `public/images/` and reference their path in `src/data/products.ts`.
- **Company Info:** Update contact details or WhatsApp number in `src/data/company.ts`.

## Deploying to GitHub & Vercel

1. Initialize Git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: M.S.S. Enterprises website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mss-enterprises-website.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), click **Add New Project**, and import your GitHub repository.
3. Add environment variables from `.env.example` (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, and optionally `RESEND_API_KEY` + `ENQUIRY_RECEIVER_EMAIL`).
4. Click **Deploy**.
# mss-enterprises-website
