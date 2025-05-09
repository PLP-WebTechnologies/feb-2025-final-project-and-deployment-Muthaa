# 🛍️ E-store eCommerce Frontend

This is a lightweight eCommerce frontend built using vanilla JavaScript, HTML, and CSS. It supports product listing, category filtering, cart functionality with persistent state via `localStorage`, dark/light mode, and a user-friendly toast notification system.

---

## ✨ Features

- ✅ Product listing with category-based filtering
- 🛒 Add to Cart with quantity management
- 📦 Cart page showing dynamic totals and editable quantities
- 🌗 Dark/Light theme toggle with persistent preference
- 🔔 Toast notifications for cart actions
- 💾 Cart persists in `localStorage` across sessions
- ⚙️ Clean, modular code structure for easy scaling

---

## 📁 Folder Structure

```

.
├── index.html             # Main homepage with product listings
├── cart.html              # Cart page
├── product.html           # Product detail page (basic for now)
├── scripts/
│   └── app.js             # Main app logic: rendering, cart, filtering
│   └── cart.js            # Cart page
│   └── products.js        # Products array with { id, name, price, image, category }
├── styles/
│   └── main.css           # Global styles and toast styling
├── 
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/PLP-WebTechnologies/feb-2025-final-project-and-deployment-Muthaa.git
cd feb-2025-final-project-and-deployment-Muthaa
````

### 2. Open in Browser

Just open `index.html` in any modern browser.

---

## 🧪 Cart Functionality

* **Add to Cart:** Click "Add to Cart" on any product.
* **Cart Page:** Go to `cart.html` to see your selections.
* **Modify Quantity:** Use input box to increase/decrease.
* **Remove Item:** Click "Remove" button.
* **Persistence:** All cart data is saved to `localStorage`.

---

## 🌓 Theme Support

* Toggle theme using the button with ID `#dark-mode-toggle`.
* Theme preference is stored in `localStorage`.

---

## 🔧 Customization

To add or edit products, modify `data/products.js`:

```js
const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25.99,
    image: "images/tshirt.jpg",
    category: "clothing"
  },
  ...
];
```

---

## 📦 Deployment

This is a static frontend has been deployed to:
https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Muthaa/

---

## 🧠 Known Limitations

* No backend integration or payment processing (yet).
* Product details page (`product.html`) is a placeholder.
* No cart badge animations or network requests.


# Final Project and Deployment

## Objectives
Build a fully functional web application.
Apply HTML, CSS, and JavaScript concepts learned.
Deploy the project using GitHub Pages, Netlify, or Vercel.

## Instructions
Choose one of the following project ideas:
Blog Website: Implement a multi-page site with navigation.
Ecommerce Website: Implement a multi-page site with navigation.

>[!NOTE]
> - Include at least:
> - A responsive design.
> - JavaScript interactivity.
> - A deployment link.

## Tasks

Create a well-structured HTML5 document.
Use at least 5 different HTML elements.
Ensure semantic correctness.

Good luck and happy coding! 🚀💻
