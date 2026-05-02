# Truckora

## 🚀 About the Project

Truckora is a modern truck reservation platform designed for logistics, transportation, and moving services. It allows businesses and individuals to quickly browse available trucks, compare options, and reserve the right vehicle in minutes.

Built with **Next.js** 16 and **Tailwind CSS**, Truckora showcases a smooth business flow mockup, highlighting how users can efficiently manage transportation needs. The platform emphasizes a clean, responsive UI and scalable architecture, making it ideal for logistics operations of any size.

---

## ✨ Features

- Fully responsive design with Tailwind CSS
- Smooth animations and optimized transitions
- Dynamic product showcase with images, descriptions, and reviews
- Contact form as mock up interaction

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS

### Backend

- **Runtime**: Node.js
- **Database**: None (static data)

### Deployment Options

- **Vercel**: Integrate your GitHub repo with Vercel
- **Docker**: Docker deployment is supported for this project with your own configs

### Development Tools

- **Version Control**: Git with GitHub
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint, TypeScript
- **Build Tool**: Next.js built-in bundler

---

## 📁 Project Structure

```sh
truckora/
├── public
│   ├── images
│   │   ├── carousel
│   │   │   ├── truck1.png
│   │   │   ├── truck2.png
│   │   │   └── truck3.png
│   │   ├── trucks
│   │   │   ├── isuzu
│   │   │   │   └── isuzu-elf-box.jpg
│   │   │   ├── kamaz
│   │   │   │   └── kamaz-6520-dump.jpg
│   │   │   └── volvo
│   │   │       └── volvo-fh16.jpg
│   │   └── og-image.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── icon-circle-16.png
│   ├── icon-circle.png
│   └── manifest.json
├── src
│   ├── app
│   │   ├── company
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── careers
│   │   │   │   ├── [slug]
│   │   │   │   │   ├── JobMotion.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── contact
│   │   │   │   └── page.tsx
│   │   │   ├── faq
│   │   │   │   └── page.tsx
│   │   │   ├── help
│   │   │   │   └── page.tsx
│   │   │   ├── partners
│   │   │   │   └── page.tsx
│   │   │   ├── privacy-policy
│   │   │   │   └── page.tsx
│   │   │   └── terms
│   │   │       └── page.tsx
│   │   │
│   │   ├── reservation
│   │   │   └── page.tsx
│   │   │
│   │   ├── trucks
│   │   │   ├── [slug]
│   │   │   │   ├── TruckMotion.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │   
│   ├── components
│   │   ├── global
│   │   │   └── ProjectInfo.tsx
│   │   │
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   └── sections
│   │       ├── about
│   │       │   ├── CTA.tsx
│   │       │   ├── Hero.tsx
│   │       │   ├── Impact.tsx
│   │       │   ├── MissionVision.tsx
│   │       │   ├── OurValues.tsx
│   │       │   ├── Team.tsx
│   │       │   └── WhatWeDo.tsx
│   │       │
│   │       ├── career
│   │       │   ├── CTA.tsx
│   │       │   ├── CultureValue.tsx
│   │       │   ├── Hero.tsx
│   │       │   ├── OpenPositions.tsx
│   │       │   └── WhyWorkWithUs.tsx
│   │       │
│   │       ├── contact
│   │       │   ├── CTA.tsx
│   │       │   ├── Form.tsx
│   │       │   ├── Header.tsx
│   │       │   └── Info.tsx
│   │       │
│   │       ├── home
│   │       │   ├── About.tsx
│   │       │   ├── CTA.tsx
│   │       │   ├── Featured.tsx
│   │       │   ├── Hero.tsx
│   │       │   ├── Testimonials.tsx
│   │       │   ├── TruckCategories.tsx
│   │       │   └── WhyChooseUs.tsx
│   │       │
│   │       ├── partner
│   │       │   ├── Benefit.tsx
│   │       │   ├── CTA.tsx
│   │       │   ├── Hero.tsx
│   │       │   ├── HowItWorks.tsx
│   │       │   ├── PartnerTypes.tsx
│   │       │   └── WhoCanPartner.tsx
│   │       │
│   │       ├── reservation
│   │       │   ├── ReservationForm.tsx
│   │       │   └── TruckListing.tsx
│   │       │
│   │       └── trucks
│   │           ├── TruckCard.tsx
│   │           ├── TruckGrid.tsx
│   │           ├── TruckRating.tsx
│   │           ├── TruckReviews.tsx
│   │           ├── TruckSidebar.tsx
│   │           └── TruckSpecs.tsx
│   │
│   ├── data
│   │   ├── career
│   │   │   └── positions.ts
│   │   │   
│   │   ├── misc
│   │   │   ├── features.ts
│   │   │   ├── links.ts
│   │   │   └── stats.ts
│   │   │   
│   │   └── truck
│   │       ├── category.ts
│   │       ├── reviews.ts
│   │       └── trucks.ts
│   │   
│   ├── lib
│   │   └── site.ts
│   │   
│   ├── styles
│   │   └── globals.css
│   │   
│   └── types
│       ├── categoryType.ts
│       ├── positionType.ts
│       ├── reviewType.ts
│       └── truckType.ts
│
├── .env.example
├── .gitignore
├── LICENSE
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/genta-bahana-nagari/truckora.git
   cd truckora
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.

---

## 🚀 Deployment

To deploy the project, use one of these services:

- **Vercel:** `vercel --prod`, or you can connect your repo and deploy.
- **Docker:** config your own Dockerfile along with other related configurations.

---

## 👤 Author

- **Genta Bahana Nagari** – [LinkedIn](https://www.linkedin.com/in/genta-bahana-nagari/) | [GitHub](https://github.com/genta-bahana-nagari)

---

## 🌟 Show Your Support

If you find this script helpful, feel free to ⭐ the repository and share it with others!

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
