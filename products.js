// ========================================
// ATHAR PRODUCTS — أثر
// ========================================
// EDIT ALL PRODUCTS HERE
// ========================================
//
// HOW TO MANAGE PRODUCTS:
//
// 1. ADD A PRODUCT:
//    Copy the last object in the array, paste it before the closing ],
//    Change the id to the next number, and fill in the details.
//
// 2. DELETE A PRODUCT:
//    Remove the entire object (from { to }) including the comma.
//
// 3. CHANGE PRICE:
//    Edit the "price" value. Example: price: 1200
//
// 4. ADD DISCOUNT:
//    Edit the "discount" value. Example: discount: 20 means 20% off.
//    Use discount: 0 for no discount.
//
// 5. CHANGE IMAGES:
//    Edit the "images" array. Use relative paths like:
//    "./assets/images/products/your-image.jpg"
//    You can add multiple images for a gallery.
//
// 6. CHANGE SIZES:
//    Edit the "sizes" array. Example: ["S", "M", "L", "XL"]
//
// 7. CHANGE COLORS:
//    Edit the "colors" array. Example: ["Black", "White"]
//
// 8. MARK UNAVAILABLE:
//    Set "available" to false. The product will show "غير متوفر حالياً"
//    and ordering will be disabled.
//
// 9. MARK AS NEW ARRIVAL:
//    Set "newArrival" to true. It will appear in the New Arrivals section.
//
// ========================================

const products = [
  {
    id: 1,
    name: "Essential Black Tee",
    category: "T-Shirts",
    description: "Premium heavyweight cotton t-shirt with a structured fit. Designed for the man who values simplicity and quality. Breathable fabric that holds its shape wash after wash.",
    price: 900,
    discount: 20,
    images: [
      "public/001 (1).png",
  "public/001 (2).png"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    available: true,
    newArrival: false
  },
  {
    id: 2,
    name: "Oversized Cream Tee",
    category: "T-Shirts",
    description: "Oversized fit tee in warm cream tone. Soft brushed cotton with a relaxed drape. A statement piece for everyday wear.",
    price: 1000,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/3662357/pexels-photo-3662357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/14941588/pexels-photo-14941588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Cream", "Off-White"],
    available: true,
    newArrival: true
  },
  {
    id: 3,
    name: "Signature White Shirt",
    category: "Shirts",
    description: "Crisp white shirt cut from premium cotton poplin. Tailored fit with a clean collar. Versatile enough for formal and casual occasions.",
    price: 1400,
    discount: 15,
    images: [
      "https://images.pexels.com/photos/15870282/pexels-photo-15870282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/10106995/pexels-photo-10106995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    available: true,
    newArrival: false
  },
  {
    id: 4,
    name: "Relaxed Black Pants",
    category: "Pants",
    description: "Relaxed-fit black pants in a lightweight twill blend. Comfortable through the thigh with a tapered leg. Effortlessly sharp.",
    price: 1600,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/2897529/pexels-photo-2897529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Black", "Charcoal"],
    available: true,
    newArrival: true
  },
  {
    id: 5,
    name: "ATHAR Overshirt",
    category: "Jackets",
    description: "Layering overshirt in a structured weave. Wear it open over a tee or buttoned up as a light jacket. A versatile piece for transitional weather.",
    price: 2200,
    discount: 25,
    images: [
      "https://images.pexels.com/photos/18864127/pexels-photo-18864127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/31696312/pexels-photo-31696312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Stone", "Olive"],
    available: true,
    newArrival: false
  },
  {
    id: 6,
    name: "Essential Hoodie",
    category: "Hoodies",
    description: "Heavyweight fleece hoodie with a structured hood and clean lines. Brushed interior for warmth. The kind of piece you reach for every day.",
    price: 1800,
    discount: 10,
    images: [
      "https://images.pexels.com/photos/14241847/pexels-photo-14241847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/32321512/pexels-photo-32321512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Stone"],
    available: true,
    newArrival: false
  },
  {
    id: 7,
    name: "Stone Oversized Tee",
    category: "T-Shirts",
    description: "Oversized tee in a muted stone wash. Garment-dyed for depth of color. Relaxed body with dropped shoulders for a modern silhouette.",
    price: 950,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/13651272/pexels-photo-13651272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/19395490/pexels-photo-19395490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Stone", "Beige"],
    available: true,
    newArrival: true
  },
  {
    id: 8,
    name: "Classic Black Jacket",
    category: "Jackets",
    description: "Tailored black jacket with a clean front and structured shoulders. Cut from a premium blend with a matte finish. The piece that completes any wardrobe.",
    price: 2800,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/19801910/pexels-photo-19801910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7779079/pexels-photo-7779079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    available: true,
    newArrival: false
  }
];
