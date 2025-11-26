# Gadget Store - Next.js & Firebase Project

## Project Overview

Gadget Store is a modern, responsive web application built with **Next.js** and **Firebase Authentication**. It is a full-stack project designed to manage and showcase products with advanced features like user authentication, protected routes, and a polished UI. The app includes product management, user login/register, product details, contact form, blog, services, and more.

This project is perfect for e-commerce style web apps, learning React + Next.js with Firebase, and showcasing frontend/backend integration.

---

## Features

### Authentication

- Firebase Email/Password Authentication
- Google OAuth Login
- Protected routes (Dashboard, Add Product, Manage Product)
- Conditional UI elements based on user login state

### Product Management

- Add new products
- Manage existing products
- Product Cards with hover effects
- Product Details page with:
  - Image zoom on hover
  - Full description
  - Price, priority, added date
  - "Add to Cart" button

### Responsive Navigation

- Desktop Navbar with links and login/logout buttons
- Mobile Hamburger menu
- Conditional links based on authentication
- Smooth hover and transition effects

### Contact Page

- Responsive contact form
- Sections for address, phone, email
- Styled inputs and textarea
- Gradient send button

### Service Pages

- Service page with modern design
- Service review section with card components
- Fully responsive and colorful gradient designs

### Extra UI

- Smooth animations
- Modern gradients and color palette
- Fully responsive across all devices

---

## Tech Stack

- **Frontend:** Next.js 13 (App Router, Server & Client Components), React, Tailwind CSS
- **Authentication:** Firebase Auth (Email/Password & Google OAuth)
- **Styling & Icons:** Tailwind CSS, React Icons
- **Forms & Alerts:** SweetAlert2
- **Routing & State:** Next.js Router, React Context API
- **Deployment Ready:** Compatible with Vercel or Netlify

---

## Folder Structure

gadget_store_client/
│
├── src/
│ ├── app/
│ │ ├── layout.js # Root layout with AuthProvider wrapper
│ │ ├── page.js # Home page
│ │ ├── products/
│ │ │ ├── [id]/page.js # Product Details page
│ │ ├── manage-products/page.js # Protected Manage Products page
│ │ ├── add-product/page.js # Protected Add Product page
│ │ ├── contact/page.js # Contact page
│ │ ├── blog/page.js # Blog page
│ │ └── services/page.js # Services page
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ProductCard.jsx
│ │ └── others...
│ │
│ ├── AuthProvider/
│ │ ├── AuthProvider.jsx
│ │ └── AuthContext.jsx
│ │
│ └── firebase/
│ └── firebase.config.js
│
├── public/ # Images and static assets
├── styles/ # Tailwind configuration
└── package.json

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase Project

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gadget-store.git
cd gadget-store
```

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

npm install

# or

yarn install
