# instamart mern project

# 🛒 InstaMart - Blinkit Clone (MERN Stack)

InstaMart is a fully responsive and feature-rich grocery delivery web app inspired by Blinkit. Built with the MERN stack, it allows users to browse categories, view products, manage their cart, and place orders — all with a smooth and professional UI.

---

## 🚀 Features

- 🧾 User Authentication (Login/Signup)
- 🛍️ Category & Subcategory-based Product Listings
- 📦 Add to Cart, Remove from Cart, View Cart
- 🖼️ Image Upload for Products & Categories (Admin)
- 📑 Admin Dashboard to manage products, categories
- 🔍 Search Functionality
- 🧹 Clean and Scrollable UI for Mobile/Desktop
- ⚡ Fast and smooth performance using React + Redux
- 🔐 JWT based authentication
- ✅ Toast Notifications and Confirm Dialogs

---

## 🖥️ Tech Stack

| Frontend      | Backend       | Database    | Tools/Libs         |
|---------------|---------------|-------------|--------------------|
| React.js      | Node.js       | MongoDB     | Redux Toolkit      |
| Tailwind CSS  | Express.js    |             | Axios              |
| React Router  | JWT Auth      |             | Toastify           |
| Framer Motion |               |             | Multer (for files) |

---

## 📸 Screenshots

> _Add screenshots of your homepage, product page, cart page, admin dashboard, etc._

---

## 🛠️ Installation Steps

```bash
# Clone the project
git clone https://github.com/yourusername/InstaMart-Mern-Project.git
cd InstaMart-Mern-Project

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Add .env file in /server with MongoDB URI and JWT_SECRET
touch .env

# Run both frontend and backend (you can use concurrently)
npm run dev
