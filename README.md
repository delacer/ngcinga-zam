# Ngcinga Zam (Pty) Ltd — Digital Platform & Client Portal

A modern, high-contrast digital platform built for **Ngcinga Zam (Pty) Ltd**, a premier structural carpentry, custom gate, and housing services provider operating out of Cape Town, South Africa. This repository hosts the lightweight, mobile-first frontend implementation featuring a premium dark-mode glassmorphic interface, interactive quote pipelines, dynamic client testimonials tracking, and secure direct-to-WhatsApp messaging integration.

## 🚀 Key Architectural Features

- **Premium UI Experience:** Implements an advanced structural design configuration token system utilizing deep slates, high-contrast whites, and vibrant brand orange highlights.
- **Glassmorphic Components:** Leverages blurred backdrop layers (`backdrop-filter`) and thin micro-borders to deliver a high-end industrial visual layout.
- **Interactive Review Engine:** Includes a modern dark-mode feedback portal containing an interactive star-rating selector framework and material-style floating label inputs.
- **Automated WhatsApp Pipeline:** Standardizes input data attributes from the free quote module into clean, highly-legible markdown blocks, mapping characters through an encoded URL structure directly to core operations management.
- **Comprehensive Legal Framework:** Incorporates complete production-ready, fully responsive paths for both the corporate Privacy Policy and Terms of Service agreements.
- **Fluid Layout Layering:** Built entirely around mobile-first CSS grids and flexible breakpoint compression strategies to ensure zero-clipping displays across modern viewport sizes.

## 🛠️ Technology Stack & Dependencies

- **Core Framework:** React (with functional components and structural state hooks)
- **Routing Engine:** React Router DOM (`BrowserRouter`, `Link`)
- **Icon Assets Library:** React Icons (Font Awesome framework)
- **Styling Architecture:** Plain CSS3 with native `:root` variable design tokens

## 📦 Project Directory Structure

cinga
├── public/
│   └── home.jpeg                  # all images
├── src/
│   ├── components/
│   │   ├── ContactPage.jsx        # Quote form pipeline with WhatsApp redirect logic
│   │   ├── ContactPage.css        # Layout mapping for communication panels
│   │   ├── PrivacyPolicyPage.jsx  # Personal metadata processing rules module
│   │   ├── TermsOfServicePage.jsx # General usage rules & liability limitations
│   │   └── LegalPages.css         # Shared glassmorphic stylesheet for legal views
│   ├── App.js                   # Core route switching configuration engine
│   ├── index.css                  # Core entry styles and global variable token layer
│   └── index.js                 # React application entry target point
├── package.json                   # Dependency configuration matrix
└── README.md                      # This project documentation roadmap