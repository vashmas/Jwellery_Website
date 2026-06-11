# VS Jwellers 💍✨
### Premium Fashion Jewellery & Accessories

A full-stack e-commerce web application built for **VS Jwellers**, 
a Pakistani fashion jewellery brand. Designed with a luxury Black & Gold 
aesthetic, this website allows customers to browse products, view details, 
and place orders directly via WhatsApp.

---


## 🖼️ Project Overview

VS Jwellers is a complete business website solution that includes:
- A beautiful customer-facing storefront
- A secure admin panel for product management
- WhatsApp-based ordering system
- Full database integration for dynamic product management

---

## 🛠️ Tech Stack

| Layer | Technology |
| Frontend | React.js, React Router DOM |
| Backend | PHP (REST API) |
| Database | MySQL (phpMyAdmin) |
| Styling | Custom CSS with CSS Variables |
| Server | XAMPP (Apache) |
| Version Control | Git & GitHub |

---

## ✨ Key Features

### 🛍️ Customer Side
- Elegant Black & Gold luxury UI design
- Hero section with call-to-action buttons
- Featured products on home page (one per category)
- Full product catalog with **category filter**
- Product detail page with image, description & price
- **WhatsApp Order Button** — customers order directly via WhatsApp
- Fully responsive navigation
- About page with brand story
- Contact page with social media links

### 🔐 Admin Panel
- Secure admin login with token authentication
- Dashboard to view all products
- Add new products with:
  - Product name, price, category
  - Description
  - Image upload
- Delete products (removes image file too)
- Real-time product count

### ⚙️ Backend API
- RESTful PHP API
- GET — fetch all products or single product by ID
- POST — add new product
- DELETE — remove product with image cleanup
- Image upload handler with unique filename generation
- CORS enabled for React frontend

---

## 📁 Project Structure
vs-jwellers/
├── public/
│   └── Logo.png
├── src/
│   ├── admin/
│   │   ├── AdminLogin.js
│   │   └── AdminDashboard.js
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   └── index.css
└── backend/ (XAMPP/htdocs/VS_Jwellers/)
├── config.php
├── products.php
├── upload.php
├── admin_login.php
└── uploads/

---

## 🗄️ Database Schema

```sql
Database: vs_jwellers

Table: products
- id          INT AUTO_INCREMENT PRIMARY KEY
- name        VARCHAR(255)
- price       DECIMAL(10,2)
- category    VARCHAR(100)
- description TEXT
- image       VARCHAR(255)
- created_at  TIMESTAMP
```

---

## 📱 Pages

| Page | Route | Description |
| Home | / | Hero + Featured Products |
| Products | /products | Full catalog with filter |
| Product Detail | /product/:id | Single product view |
| About | /about | Brand story & features |
| Contact | /contact | Social links & WhatsApp |
| Admin | /admin | Admin dashboard |

---

## 🚀 How to Run Locally

1. Clone the repository
```bash
git clone https://github.com/vashmas/Jwellery_Website.git
cd Jwellery_Website
```

2. Install dependencies
```bash
npm install
```

3. Setup XAMPP
   - Start Apache & MySQL
   - Copy backend files to `htdocs/VS_Jwellers/`
   - Import database from `vs_jwellers.sql`

4. Start React app
```bash
npm start
```

5. Open browser
   http://localhost:3000
---

## 👩‍💻 Developer

Vashma Shafiq — Developer  
React | PHP | MySQL 

---

⭐ **If you like this project, please give it a star!**
