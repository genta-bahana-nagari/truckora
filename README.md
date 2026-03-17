# Truckora

## 🚀 About the Project

This is my personal portfolio website built using **NextJS 16** along with **Tailwind CSS**. It showcases my skills, projects, and experiences in an interactive and modern UI.

---

## 🛠️ Tech Stack

- **Frontend:** NextJS 16, Tailwind
- **Deployment:** Vercel, Docker (do it with your config)

---

## ✨ Features

- Fully responsive design with Tailwind CSS
- Smooth animations and transitions
- Dynamic project showcase with images and descriptions
- Contact form integrated with EmailJS for email submissions

---

## 📁 Project Structure

```sh
truckora/
├── public
│   ├── images
│   │   ├── carousel
│   │   │   ├── truck1.png
│   │   │   ├── truck2.png
│   │   │   └── truck3.png
│   │   ├── trucks
│   │   │   ├── isuzu
│   │   │   │   └── isuzu-elf-box.jpg
│   │   │   ├── kamaz
│   │   │   │   └── kamaz-6520-dump.jpg
│   │   │   └── volvo
│   │   │       └── volvo-fh16.jpg
│   │   └── og-image.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── icon-circle-16.png
│   └── icon-circle.png
├── src
│   ├── app
│   │   ├── company
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── careers
│   │   │   │   └── page.tsx
│   │   │   ├── contact
│   │   │   │   └── page.tsx
│   │   │   ├── faq
│   │   │   │   └── page.tsx
│   │   │   ├── help
│   │   │   │   └── page.tsx
│   │   │   ├── partners
│   │   │   │   └── page.tsx
│   │   │   ├── privacy
│   │   │   │   └── page.tsx
│   │   │   └── terms
│   │   │       └── page.tsx
│   │   ├── compare
│   │   │   └── page.tsx
│   │   ├── map
│   │   │   └── page.tsx
│   │   ├── trucks
│   │   │   ├── [id].tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── reserve
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections
│   │   │   ├── booking
│   │   │   │   ├── EmailReservation.tsx
│   │   │   │   ├── ReservationForm.tsx
│   │   │   │   └── WhatsappReservation.tsx
│   │   │   ├── home
│   │   │   │   ├── About.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   ├── Featured.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── TruckCategories.tsx
│   │   │   │   └── WhyChooseUs.tsx
│   │   │   └── trucks
│   │   │       ├── TruckCard.tsx
│   │   │       ├── TruckGrid.tsx
│   │   │       ├── TruckRating.tsx
│   │   │       ├── TruckReviews.tsx
│   │   │       ├── TruckSidebar.tsx
│   │   │       └── TruckSpecs.tsx
│   │   └── ui
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── data
│   │   ├── misc
│   │   │   ├── features.ts
│   │   │   ├── links.ts
│   │   │   └── stats.ts
│   │   └── truck
│   │       ├── category.ts
│   │       ├── reviews.ts
│   │       └── trucks.ts
│   ├── lib
│   │   └── site.ts
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   ├── categoryType.ts
│   │   ├── reviewType.ts
│   │   └── truckType.ts
│   └── utils
│       ├── distance.ts
│       ├── priceCalculator.ts
│       └── whatsapp.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/genta-bahana-nagari/truckora.git
   cd truckora
   ```

2. **Set environment:**

   ```sh
   cp .env.example .env
   ```

   You will see this configuration and adjust them with your keys and links:

   ```sh
    NEXT_PUBLIC_SITE_URL=your_site_url
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

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
