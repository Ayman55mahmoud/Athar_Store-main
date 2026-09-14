# ATHAR — أثر | Premium Men's Fashion

A static website for the ATHAR men's clothing brand, built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no server required.

## Features

- Cinematic hero section with brand story
- Editorial collection layout
- New Arrivals section (auto-populated from `newArrival: true`)
- Offers section (auto-populated from `discount > 0`)
- Product grid with search and category filters
- Product detail modal with image gallery, size/color selection, quantity
- Full shopping cart with localStorage persistence
- Checkout flow: customer info → invoice preview → WhatsApp order
- Automatic order numbering (ATH-0001, ATH-0002, ...)
- Automatic discount calculations
- Fully responsive (desktop, tablet, mobile)
- Optimized for GitHub Pages

## How to Run Locally

Simply open `index.html` in your browser. That's it.

No `npm install`. No build command. No server needed.

## How to Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload all project files to the repository root.
3. Go to **Settings**.
4. Go to **Pages**.
5. Select **Deploy from a branch**.
6. Select **main**.
7. Select **/ (root)**.
8. Save.

The website will be available at:

```
https://USERNAME.github.io/REPOSITORY-NAME/
```

## How to Manage Products

All products are in `products.js`. Edit that one file to add, remove, or modify products.

### Add a product

Copy an existing product object inside the `products` array, paste it before the closing `]`, and change the details:

```javascript
{
    id: 9,
    name: "New Product",
    category: "T-Shirts",
    description: "Product description",
    price: 1000,
    discount: 10,
    images: [
        "./assets/images/products/new-product-1.jpg"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    available: true,
    newArrival: true
}
```

### Delete a product

Remove the entire object (from `{` to `}`) including the comma.

### Change price

Edit the `price` value.

### Add discount

Edit the `discount` value. `discount: 20` means 20% off. Use `discount: 0` for no discount.

### Change images

Edit the `images` array. Use relative paths like `./assets/images/products/your-image.jpg`.

### Change sizes

Edit the `sizes` array. Example: `["S", "M", "L", "XL"]`.

### Change colors

Edit the `colors` array. Example: `["Black", "White"]`.

### Mark unavailable

Set `available` to `false`. The product shows "غير متوفر حالياً" and ordering is disabled.

### Mark as new arrival

Set `newArrival` to `true`. The product appears in the New Arrivals section.

## WhatsApp Orders

Orders are sent via WhatsApp to: **201014007217**

The website generates a complete order message with products, totals, and customer info, then opens WhatsApp for the customer to press Send.

## File Structure

```
athar-store/
├── index.html
├── products.js
├── script.js
├── style.css
├── README.md
└── assets/
    ├── images/
    │   ├── hero/
    │   ├── products/
    │   └── brand/
    └── icons/
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Cormorant Garamond, Inter, Noto Naskh Arabic)
- No frameworks, no dependencies, no build process
