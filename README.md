# AI Resume Builder

An AI-powered resume builder designed to help users create professional, ATS-friendly resumes with modern templates and intelligent career assistance.

## 🚀 Project Overview

AI Resume Builder is a web-based application that aims to simplify the resume creation process.

Users will be able to create resumes using professional templates, manage their resume information, analyze their resumes with AI, and eventually tailor their resumes according to specific job descriptions.

The project is being developed as part of my M.Tech Web Technology project.

## ✨ Features

### Resume Builder
- Create and edit resume information
- Structured resume sections
- Professional resume layouts

### Professional Templates
- Modern resume template
- Professional resume template
- Creative resume template
- Template selection from the landing page

### AI-Powered Features
- AI resume content generation
- ATS resume analysis
- Job matching
- Skill gap analysis

### Resume Management
- Manage multiple resumes
- Resume preview
- PDF export

> AI-powered features, backend integration, authentication, and PDF generation are planned as part of the upcoming development stages.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hook Form
- Framer Motion
- Lucide React

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- MySQL / PostgreSQL

### Development Tools
- Git
- GitHub
- VS Code
- Postman

## 📁 Project Structure

```text
ai-resume-builder/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── landing/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── AIFeatures.jsx
│   │       ├── Templates.jsx
│   │       ├── Pricing.jsx
│   │       ├── FAQ.jsx
│   │       ├── Contact.jsx
│   │       └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── resumeBuilder/
│   │   ├── resumePreview/
│   │   └── templates/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md