# React Dashboard (Vite + Tailwind)

Scaffolded project with basic Layout, Sidebar, Header, and placeholder routes.

Commands:

```bash
npm install
npm run dev
```
# Modern React Dashboard Layout 🚀

A scalable, desktop-first administrative dashboard layout built as an internship project. This application provides a robust structural foundation with dynamic routing, a collapsible navigation sidebar, and a reusable component architecture.

## ✨ Features

* **Desktop-First Design:** Clean, modern interface optimized for desktop workflows.
* **Dynamic Routing:** Configured with React Router v6 for seamless client-side navigation between dashboard pages, clients, projects, and settings.
* **Collapsible Sidebar:** Interactive left navigation with active route highlighting and a user profile section.
* **Global Header:** Top navigation bar featuring dynamic page titles, a search input, notifications, and a user dropdown menu.
* **Modular Architecture:** Clean separation of concerns with isolated `Layout`, `Sidebar`, and `Header` components wrapping child routes via `<Outlet />`.
* **Fast Development:** Bootstrapped with Vite for instant server start and lightning-fast Hot Module Replacement (HMR).

## 🛠️ Tech Stack

* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Styling:** CSS/Tailwind CSS (or your chosen UI library)

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx       # Top navigation bar
│   └── Sidebar.jsx      # Collapsible left navigation
├── layout/
│   └── Layout.jsx       # Main wrapper utilizing <Outlet />
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx        # Standalone route (no layout)
│   ├── Clients.jsx
│   ├── Projects.jsx
│   └── Settings.jsx     # ...and other route views
├── App.jsx              # Router configuration
└── main.jsx             # React entry point
