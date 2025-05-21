# 🧠 Persian Proverb App

A full-stack web application to browse, search, manage, and explore **Persian proverbs** with English and German translations and contextual meanings.

> "Rome wasn’t built in a day — neither was this app." 💬🔥

---

## 🌟 Features

- 🔎 Full-text **search** by language or category
- 🗃️ Filter proverbs by **categories**
- ➕ **Add**, ✏️ **edit**, 🗑️ **delete** proverbs dynamically
- 🎯 Get a **random proverb**
- 🧠 Meanings and cultural context
- ✅ Success/error snackbars for all actions
- 📋 Form validation (Formik + Yup)
- 💅 Fully responsive UI with Material UI

---

## 🛠️ Tech Stack

### Frontend:

- **React.js + TypeScript**
- **Axios** – for API calls
- **React Query** – for data fetching and cache
- **Formik + Yup** – form handling & validation
- **Material UI** – component library
- **Vite** – for fast dev/build

### Backend:

- **Node.js + Express**
- **JSON File** – for persistent data storage

---

## 📁 Folder Structure

```
src/
│
├── assets/                # Images and static files
│
├── components/
│   ├── common/            # Reusable UI components (buttons, cards, tooltips)
│   ├── context/           # Global context (if any)
│   ├── controllers/       # Logic to handle UI flows
│   ├── layouts/           # Layout components (wrappers, templates)
│   ├── others/            # Misc components
│   └── pages/             # Main pages (Home, Detail, Random, etc.)
│
├── constants/             # Static values (e.g., colors, spacing)
├── helpers/               # Utility functions (e.g., string slicing, formatting)
├── styleObjects/          # MUI sx styles as objects
├── types/                 # TypeScript type definitions
├── utils/                 # Custom hooks and functions
│
├── services/
│   ├── api.ts             # CRUD API functions
│   ├── apiClient.ts       # Axios instance
│   └── hooks.ts           # Custom React Query hooks
│
├── main.tsx               # App entry point
├── routes.tsx             # Route configurations
└── vite.config.ts         # Vite config
```

---

## 🚀 Getting Started

### 🔧 Frontend Setup

```bash
git clone https://github.com/your-username/persian-proverb-app.git
cd frontend
npm install
npm run dev
```

### 🧪 Backend Setup

```bash
cd backend
npm install
npm run start
```

---

## 🌐 Live Demo

\_Comming soon

---

---

## 📄 License

This project is licensed under the MIT License.
