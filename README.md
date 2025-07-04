# TasteTribe

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://taste-tribe-omega.vercel.app/)

TasteTribe is a modern food ordering web application built with React, Redux, and Vite. It provides a seamless experience for users to explore, filter, and order delicious food items.

## Features

- **Home Page:**
  - Browse a curated list of food items with images, prices, and categories.
  - Filter food by category using a dynamic category menu.
  - Add items to the cart with a single click.

- **Cart Functionality:**
  - View all selected items in the cart with quantity controls.
  - Increment or decrement item quantities, or remove items from the cart.
  - Real-time cart updates using Redux state management.

- **Protected Routes:**
  - Access the order success page only after a successful order (protected by route guard).

- **Responsive UI:**
  - Clean, modern, and responsive design using Tailwind CSS.
  - Smooth scrolling and user-friendly navigation.

- **Notifications:**
  - Toast notifications for cart actions (add, remove, etc.).

- **Tech Stack:**
  - React, Redux Toolkit, Vite, Tailwind CSS, React Router, React Icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components/` — Reusable UI components (Navbar, FoodCard, Cart, etc.)
- `src/pages/` — Main pages (Home, Success)
- `src/redux/` — Redux store and slices
- `src/data/` — Food data source
- `src/assets/` — Images and static assets

## Deployment

This project is ready to deploy on Netlify, Vercel, or any static hosting provider. Ensure all dependencies are installed and committed before deploying.

---

Enjoy exploring and ordering with TasteTribe!
