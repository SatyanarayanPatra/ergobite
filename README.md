# 💰 Responsive Pricing Table Component (Next.js + Tailwind CSS)

A fully responsive, accessible, and dynamic **Pricing Table UI** built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Headless UI**. This component supports **Monthly/Yearly billing toggle**, **dark mode**, and a clear **feature comparison matrix** across three pricing tiers: Free, Pro, and Enterprise.

---

## 🚀 Features

✅ 3 Pricing Plans (Free, Pro, Enterprise)  
✅ Monthly/Yearly billing toggle  
✅ Feature comparison table  
✅ Responsive layout (mobile ↔ desktop)  
✅ Dark Mode toggle (with persistence)  
✅ Framer Motion price animation  
✅ Headless UI accessibility  
✅ Tailwind-powered design system

---

## 📸 Preview

| 💡 Light Mode                        | 🌑 Dark Mode                       |
| ------------------------------------ | ---------------------------------- |
| ![Light UI](./screenshots/light.png) | ![Dark UI](./screenshots/Dark.png) |

> _(Add screenshots of your light and dark mode UI in a `screenshots/` folder for better presentation)_

---

## 🧱 Tech Stack

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Headless UI](https://headlessui.dev/)
-   [Lucide Icons](https://lucide.dev/) _(optional)_

---

## 🗂️ Project Structure

pricing-table/
├── components/
│ ├── PricingTable.jsx
│ ├── PlanCard.jsx
│ └── DarkModeToggle.jsx
├── data/
│ └── pricingData.js
├── pages/
│ └── index.js
├── styles/
│ └── globals.css
├── tailwind.config.js
├── postcss.config.js
└── README.md



## 📦 Installation & Running Locally

```bash
git clone https://github.com/SatyanarayanPatra/pricing-table.git
cd pricing-table

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit in your browser
http://localhost:3000
🌐 Live Demo (Optional)
🔗 View Live on Vercel

Deploy using Vercel or Netlify with a single click.

⚙️ Customization
You can easily:

Modify pricing plans in data/pricingData.js

Change colors via Tailwind or theme config

Add more features per plan

Extend with Stripe checkout or backend logic

✨ Accessibility & UX
Keyboard-accessible toggle switch (<Switch />)

ARIA labels on buttons

Dark mode theme saved in localStorage

Smooth transitions for prices and UI

📄 License
This project is licensed for personal, educational, or demo use. You may adapt and customize it freely.

👨‍💻 Author
Satyanarayan Patra
Frontend Developer
GitHub • LinkedIn
```
