// ========================================
// ATHAR — أثر | Main Script
// Handles: i18n, rendering, cart, search,
// filter, product details, checkout, invoice, WhatsApp
// ========================================

(function() {
  'use strict';

  // ---- WhatsApp number (international format) ----
  const WHATSAPP_NUMBER = '201014007217';

  // ---- localStorage keys ----
  const CART_KEY = 'athar_cart';
  const ORDER_KEY = 'athar_order_counter';
  const LANG_KEY = 'athar_lang';

  // ---- i18n translations ----
  const translations = {
    en: {
      'lang.toggle': 'العربية',
      'nav.home': 'Home',
      'nav.newArrivals': 'New Arrivals',
      'nav.offers': 'Offers',
      'nav.shopAll': 'Shop All',
      'hero.title': 'Style that leaves an <span>أثر</span>',
      'hero.subtitle': 'More than clothes.<br>A presence that stays.',
      'hero.subtitleAr': 'مش مجرد لبس.<br>حضور بيفضل.',
      'hero.discover': 'Discover ATHAR',
      'section.justIn': 'Just In',
      'section.newArrivals': 'New Arrivals',
      'section.saveNow': 'Save Now',
      'section.offers': 'Offers',
      'section.shopAll': 'Shop All',
      'section.allProducts': 'All Products',
      'search.placeholder': 'Search products...',
      'filter.all': 'All',
      'filter.tshirts': 'T-Shirts',
      'filter.shirts': 'Shirts',
      'filter.pants': 'Pants',
      'filter.hoodies': 'Hoodies',
      'filter.jackets': 'Jackets',
      'filter.newArrivals': 'New Arrivals',
      'filter.offers': 'Offers',
      'noResults': 'No products found.',
      'footer.tagline': 'Style that leaves an أثر.',
      'footer.taglineAr': 'ستايل يسيب أثر.',
      'footer.whatsapp': 'WhatsApp: 01014007217',
      'footer.copyright': '\u00A9 2026 ATHAR — أثر. All rights reserved.',
      'cart.title': 'Your Order',
      'cart.empty': 'Your order is empty.',
      'cart.originalSubtotal': 'Original Subtotal',
      'cart.totalDiscount': 'Total Discount',
      'cart.finalTotal': 'Final Total',
      'cart.checkout': 'Proceed to Checkout',
      'cart.clear': 'Clear Cart',
      'cart.clearConfirm': 'Are you sure you want to clear your cart?',
      'cart.remove': 'Remove',
      'product.view': 'View',
      'product.add': 'Add',
      'product.unavailable': 'Unavailable',
      'product.unavailableMsg': 'Out of stock',
      'product.size': 'Size',
      'product.color': 'Color',
      'product.quantity': 'Quantity',
      'product.addToOrder': 'Add to Order',
      'product.save': 'Save',
      'checkout.title': 'Customer Information',
      'checkout.desc': 'Fill in your details to complete the order.',
      'checkout.name': 'Full Name',
      'checkout.phone': 'Phone Number',
      'checkout.city': 'City',
      'checkout.address': 'Address',
      'checkout.notes': 'Notes',
      'checkout.review': 'Review Invoice',
      'checkout.invoiceTitle': 'Order Invoice',
      'checkout.invoiceDesc': 'Review your order before sending via WhatsApp.',
      'checkout.back': 'Back',
      'checkout.confirm': 'Confirm & Send via WhatsApp',
      'checkout.orderNum': 'Order #',
      'checkout.date': 'Date',
      'checkout.originalSubtotal': 'Original Subtotal',
      'checkout.totalDiscount': 'Total Discount',
      'checkout.finalTotal': 'Final Total',
      'checkout.original': 'Original',
      'checkout.discount': 'Discount',
      'checkout.final': 'Final',
      'checkout.size': 'Size',
      'checkout.color': 'Color',
      'checkout.qty': 'Qty',
      'error.name': 'Please enter your name.',
      'error.phone': 'Please enter a valid phone number.',
      'error.address': 'Please enter your address.'
    },
    ar: {
      'lang.toggle': 'English',
      'nav.home': 'الرئيسية',
      'nav.newArrivals': 'وصل حديثاً',
      'nav.offers': 'العروض',
      'nav.shopAll': 'تسوق الكل',
      'hero.title': 'ستايل يسيب <span>أثر</span>',
      'hero.subtitle': 'مش مجرد لبس.<br>حضور بيفضل.',
      'hero.subtitleAr': 'More than clothes.<br>A presence that stays.',
      'hero.discover': 'اكتشف أثر',
      'section.justIn': 'وصل حديثاً',
      'section.newArrivals': 'وصل حديثاً',
      'section.saveNow': 'العروض',
      'section.offers': 'العروض',
      'section.shopAll': 'تسوق الكل',
      'section.allProducts': 'كل المنتجات',
      'search.placeholder': 'ابحث عن منتج...',
      'filter.all': 'الكل',
      'filter.tshirts': 'تيشيرتات',
      'filter.shirts': 'قمصان',
      'filter.pants': 'بناطيل',
      'filter.hoodies': 'هوديز',
      'filter.jackets': 'جاكيتات',
      'filter.newArrivals': 'وصل حديثاً',
      'filter.offers': 'العروض',
      'noResults': 'لا توجد منتجات.',
      'footer.tagline': 'ستايل يسيب أثر.',
      'footer.taglineAr': 'Style that leaves an أثر.',
      'footer.whatsapp': 'واتس اب: 01014007217',
      'footer.copyright': '\u00A9 2026 ATHAR — أثر. جميع الحقوق محفوظة.',
      'cart.title': 'طلبك',
      'cart.empty': 'سلة الطلب فارغة.',
      'cart.originalSubtotal': 'الإجمالي الأصلي',
      'cart.totalDiscount': 'إجمالي الخصم',
      'cart.finalTotal': 'الإجمالي النهائي',
      'cart.checkout': 'إتمام الطلب',
      'cart.clear': 'مسح السلة',
      'cart.clearConfirm': 'هل أنت متأكد من مسح السلة؟',
      'cart.remove': 'حذف',
      'product.view': 'عرض',
      'product.add': 'أضف',
      'product.unavailable': 'غير متوفر',
      'product.unavailableMsg': 'غير متوفر حالياً',
      'product.size': 'المقاس',
      'product.color': 'اللون',
      'product.quantity': 'الكمية',
      'product.addToOrder': 'أضف للطلب',
      'product.save': 'وفّر',
      'checkout.title': 'بيانات العميل',
      'checkout.desc': 'املأ بياناتك لإتمام الطلب.',
      'checkout.name': 'الاسم',
      'checkout.phone': 'رقم الهاتف',
      'checkout.city': 'المدينة',
      'checkout.address': 'العنوان',
      'checkout.notes': 'ملاحظات',
      'checkout.review': 'مراجعة الفاتورة',
      'checkout.invoiceTitle': 'فاتورة الطلب',
      'checkout.invoiceDesc': 'راجع طلبك قبل الإرسال عبر واتس اب.',
      'checkout.back': 'رجوع',
      'checkout.confirm': 'تأكيد وإرسال عبر واتس اب',
      'checkout.orderNum': 'طلب رقم',
      'checkout.date': 'التاريخ',
      'checkout.originalSubtotal': 'الإجمالي الأصلي',
      'checkout.totalDiscount': 'إجمالي الخصم',
      'checkout.finalTotal': 'الإجمالي النهائي',
      'checkout.original': 'الأصلي',
      'checkout.discount': 'الخصم',
      'checkout.final': 'النهائي',
      'checkout.size': 'المقاس',
      'checkout.color': 'اللون',
      'checkout.qty': 'الكمية',
      'error.name': 'من فضلك أدخل اسمك.',
      'error.phone': 'من فضلك أدخل رقم هاتف صحيح.',
      'error.address': 'من فضلك أدخل عنوانك.'
    }
  };

  // ---- Language state ----
  let currentLang = 'en';
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ar' || saved === 'en') currentLang = saved;
  } catch (e) {}

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    // HTML content (with spans etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    // Re-render dynamic content
    renderAll();
    renderCart();
  }

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) {}
    applyLanguage();
  }

  // ---- State ----
  let cart = loadCart();
  let currentFilter = 'All';
  let currentSearch = '';
  let selectedProduct = null;
  let selectedSize = null;
  let selectedColor = null;
  let selectedQty = 1;
  let checkoutStep = 'info';
  let customerInfo = {};

  // ---- DOM helpers ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ---- Price calculation ----
  function calcFinalPrice(price, discount) {
    return price - (price * discount / 100);
  }

  function formatPrice(amount) {
    return Math.round(amount) + ' EGP';
  }

  // ---- Cart persistence ----
  function loadCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) { return []; }
  }

  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }

  // ---- Order number ----
  function getNextOrderNumber() {
    let counter = 0;
    try { counter = parseInt(localStorage.getItem(ORDER_KEY)) || 0; } catch (e) {}
    counter++;
    try { localStorage.setItem(ORDER_KEY, String(counter)); } catch (e) {}
    return 'ATH-' + String(counter).padStart(4, '0');
  }

  function getProductById(id) {
    return products.find(p => p.id === id);
  }

  // ---- Render product card ----
  function productCardHTML(product) {
    const final = calcFinalPrice(product.price, product.discount);
    const hasDiscount = product.discount > 0;
    const unavailable = !product.available;
    const img1 = product.images[0] || '';
    const img2 = product.images[1] || product.images[0] || '';

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card-image" data-action="view" data-id="${product.id}">
          ${hasDiscount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
          ${unavailable ? `<span class="unavailable-badge">${t('product.unavailable')}</span>` : ''}
          <img src="${img1}" alt="${product.name}" loading="lazy" />
          ${img2 ? `<img class="img-alt" src="${img2}" alt="${product.name} alternate view" loading="lazy" />` : ''}
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${product.category}</span>
          <h3 class="product-card-name">${product.name}</h3>
          <div class="product-card-prices">
            ${hasDiscount ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
            <span class="price-final">${formatPrice(final)}</span>
          </div>
          <div class="product-card-actions">
            <button class="btn-view" data-action="view" data-id="${product.id}">${t('product.view')}</button>
            <button class="btn-add" data-action="add" data-id="${product.id}" ${unavailable ? 'disabled' : ''}>
              ${unavailable ? t('product.unavailable') : t('product.add')}
            </button>
          </div>
        </div>
      </article>`;
  }

  // ---- Render sections ----
  function renderArrivals() {
    const grid = $('#arrivals-grid');
    if (!grid) return;
    const arrivals = products.filter(p => p.newArrival && p.available);
    grid.innerHTML = arrivals.map(p => productCardHTML(p)).join('');
  }

  function renderOffers() {
    const grid = $('#offers-grid');
    if (!grid) return;
    const offers = products.filter(p => p.discount > 0 && p.available);
    grid.innerHTML = offers.map(p => productCardHTML(p)).join('');
  }

  function renderAllProducts() {
    const grid = $('#products-grid');
    if (!grid) return;
    const noResults = $('#no-results');

    let filtered = products.filter(p => {
      if (currentFilter === 'New Arrivals') {
        if (!p.newArrival) return false;
      } else if (currentFilter === 'Offers') {
        if (p.discount <= 0) return false;
      } else if (currentFilter !== 'All') {
        if (p.category !== currentFilter) return false;
      }
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        if (!matchName && !matchCat) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
    }
  }

  function renderAll() {
    renderArrivals();
    renderOffers();
    renderAllProducts();
  }

  // ---- Cart ----
  function addToCart(productId, size, color, qty) {
    const product = getProductById(productId);
    if (!product || !product.available) return;
    const existing = cart.find(item => item.id === productId && item.size === size && item.color === color);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, name: product.name, size, color, qty, price: product.price, discount: product.discount, image: product.images[0] || '' });
    }
    saveCart();
    updateCartCount();
    renderCart();
    openCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
  }

  function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty < 1) cart[index].qty = 1;
    saveCart();
    renderCart();
  }

  function changeVariant(index, type, value) {
    cart[index][type] = value;
    saveCart();
    renderCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
  }

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const el = $('#cart-count');
    el.textContent = count;
    el.setAttribute('data-count', count);
  }

  function calcCartTotals() {
    let originalSubtotal = 0, totalDiscount = 0;
    cart.forEach(item => {
      const itemOriginal = item.price * item.qty;
      const itemFinal = calcFinalPrice(item.price, item.discount) * item.qty;
      originalSubtotal += itemOriginal;
      totalDiscount += (itemOriginal - itemFinal);
    });
    return { originalSubtotal, totalDiscount, finalTotal: originalSubtotal - totalDiscount };
  }

  function renderCart() {
    const container = $('#cart-items');
    const empty = $('#cart-empty');
    const summary = $('#cart-summary');

    if (cart.length === 0) {
      container.innerHTML = '';
      empty.style.display = 'flex';
      summary.style.display = 'none';
      return;
    }

    empty.style.display = 'none';
    summary.style.display = 'block';

    container.innerHTML = cart.map((item, index) => {
      const final = calcFinalPrice(item.price, item.discount);
      const product = getProductById(item.id);
      const sizes = product ? product.sizes : [item.size];
      const colors = product ? product.colors : [item.color];
      return `
        <div class="cart-item">
          <img class="cart-item-image" src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <div class="cart-item-variant">
              <select class="cart-variant-select" data-index="${index}" data-type="size">
                ${sizes.map(s => `<option ${s === item.size ? 'selected' : ''}>${s}</option>`).join('')}
              </select>
              <select class="cart-variant-select" data-index="${index}" data-type="color">
                ${colors.map(c => `<option ${c === item.color ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>
            <div class="cart-item-controls">
              <button class="qty-btn" data-action="qty-down" data-index="${index}">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" data-action="qty-up" data-index="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(final * item.qty)}</span>
            <button class="cart-item-remove" data-action="remove" data-index="${index}">${t('cart.remove')}</button>
          </div>
        </div>`;
    }).join('');

    const totals = calcCartTotals();
    $('#cart-subtotal').textContent = formatPrice(totals.originalSubtotal);
    $('#cart-discount').textContent = '-' + formatPrice(totals.totalDiscount);
    $('#cart-total').textContent = formatPrice(totals.finalTotal);
  }

  // ---- Cart open/close ----
  function openCart() {
    $('#cart-drawer').classList.add('open');
    $('#cart-drawer').setAttribute('aria-hidden', 'false');
    $('#cart-overlay').classList.add('show');
    $('#cart-overlay').setAttribute('aria-hidden', 'false');
  }

  function closeCart() {
    $('#cart-drawer').classList.remove('open');
    $('#cart-drawer').setAttribute('aria-hidden', 'true');
    $('#cart-overlay').classList.remove('show');
    $('#cart-overlay').setAttribute('aria-hidden', 'true');
  }

  // ---- Product modal ----
  function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    selectedProduct = product;
    selectedSize = product.sizes[0] || null;
    selectedColor = product.colors[0] || null;
    selectedQty = 1;

    const final = calcFinalPrice(product.price, product.discount);
    const hasDiscount = product.discount > 0;
    const unavailable = !product.available;

    const galleryHTML = product.images.map((img, i) =>
      `<img class="product-detail-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name} view ${i+1}" data-index="${i}" loading="lazy" />`
    ).join('');

    const sizesHTML = product.sizes.map(s =>
      `<button class="size-option ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>`
    ).join('');

    const colorsHTML = product.colors.map(c =>
      `<button class="color-option ${c === selectedColor ? 'active' : ''}" data-color="${c}">${c}</button>`
    ).join('');

    const content = `
      <div class="product-detail">
        <div class="product-detail-gallery">
          <div class="product-detail-main-image">
            <img id="gallery-main" src="${product.images[0]}" alt="${product.name}" />
          </div>
          ${product.images.length > 1 ? `<div class="product-detail-thumbs">${galleryHTML}</div>` : ''}
        </div>
        <div class="product-detail-info">
          <span class="product-detail-category">${product.category}</span>
          <h2 class="product-detail-name">${product.name}</h2>
          <p class="product-detail-description">${product.description}</p>
          <div class="product-detail-prices">
            ${hasDiscount ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
            <span class="price-final">${formatPrice(final)}</span>
            ${hasDiscount ? `<span style="font-size:0.8rem;color:#8a6d3b;">${t('product.save')} ${product.discount}%</span>` : ''}
          </div>
          <div class="product-detail-section">
            <span class="product-detail-label">${t('product.size')}</span>
            <div class="size-options">${sizesHTML}</div>
          </div>
          <div class="product-detail-section">
            <span class="product-detail-label">${t('product.color')}</span>
            <div class="color-options">${colorsHTML}</div>
          </div>
          <div class="product-detail-section">
            <span class="product-detail-label">${t('product.quantity')}</span>
            <div class="qty-selector">
              <button class="qty-btn" id="detail-qty-down">-</button>
              <span class="qty-value" id="detail-qty">1</span>
              <button class="qty-btn" id="detail-qty-up">+</button>
            </div>
          </div>
          ${unavailable
            ? `<p class="unavailable-text">${t('product.unavailableMsg')}</p>`
            : `<div class="product-detail-actions">
                <button class="btn-add" id="detail-add-to-cart">${t('product.addToOrder')}</button>
              </div>`}
        </div>
      </div>`;

    $('#product-modal-content').innerHTML = content;
    $('#product-modal').classList.add('open');
    $('#product-modal').setAttribute('aria-hidden', 'false');
    $('#product-overlay').classList.add('show');
    $('#product-overlay').setAttribute('aria-hidden', 'false');
  }

  function closeProductModal() {
    $('#product-modal').classList.remove('open');
    $('#product-modal').setAttribute('aria-hidden', 'true');
    $('#product-overlay').classList.remove('show');
    $('#product-overlay').setAttribute('aria-hidden', 'true');
  }

  // ---- Checkout ----
  function openCheckout() {
    if (cart.length === 0) return;
    checkoutStep = 'info';
    renderCheckout();
    $('#checkout-modal').classList.add('open');
    $('#checkout-modal').setAttribute('aria-hidden', 'false');
    $('#checkout-overlay').classList.add('show');
    $('#checkout-overlay').setAttribute('aria-hidden', 'false');
    closeCart();
  }

  function closeCheckout() {
    $('#checkout-modal').classList.remove('open');
    $('#checkout-modal').setAttribute('aria-hidden', 'true');
    $('#checkout-overlay').classList.remove('show');
    $('#checkout-overlay').setAttribute('aria-hidden', 'true');
  }

  function renderCheckout() {
    const content = $('#checkout-content');

    if (checkoutStep === 'info') {
      content.innerHTML = `
        <div class="checkout-content-inner">
          <h2 class="checkout-step-title">${t('checkout.title')}</h2>
          <p class="checkout-step-desc">${t('checkout.desc')}</p>
          <form id="checkout-form" novalidate>
            <div class="form-group">
              <label for="cust-name">${t('checkout.name')} <span class="required">*</span></label>
              <input type="text" id="cust-name" name="name" value="${customerInfo.name || ''}" required />
              <span class="form-error" data-error="name">${t('error.name')}</span>
            </div>
            <div class="form-group">
              <label for="cust-phone">${t('checkout.phone')} <span class="required">*</span></label>
              <input type="tel" id="cust-phone" name="phone" value="${customerInfo.phone || ''}" required />
              <span class="form-error" data-error="phone">${t('error.phone')}</span>
            </div>
            <div class="form-group">
              <label for="cust-city">${t('checkout.city')}</label>
              <input type="text" id="cust-city" name="city" value="${customerInfo.city || ''}" />
            </div>
            <div class="form-group">
              <label for="cust-address">${t('checkout.address')} <span class="required">*</span></label>
              <textarea id="cust-address" name="address" required>${customerInfo.address || ''}</textarea>
              <span class="form-error" data-error="address">${t('error.address')}</span>
            </div>
            <div class="form-group">
              <label for="cust-notes">${t('checkout.notes')}</label>
              <textarea id="cust-notes" name="notes">${customerInfo.notes || ''}</textarea>
            </div>
            <button type="submit" class="btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ${t('checkout.review')}
            </button>
          </form>
        </div>`;
      $('#checkout-form').addEventListener('submit', handleCheckoutSubmit);
    } else if (checkoutStep === 'invoice') {
      const orderNumber = getNextOrderNumber();
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const totals = calcCartTotals();

      const itemsHTML = cart.map(item => {
        const final = calcFinalPrice(item.price, item.discount);
        const discountAmount = (item.price - final) * item.qty;
        const itemFinal = final * item.qty;
        return `
          <div class="invoice-item">
            <div class="invoice-item-name">${item.name}</div>
            <div class="invoice-item-variant">${t('checkout.size')}: ${item.size} | ${t('checkout.color')}: ${item.color} | ${t('checkout.qty')}: ${item.qty}</div>
            <div class="invoice-item-prices">
              <span>${t('checkout.original')}: ${formatPrice(item.price * item.qty)}</span>
              ${item.discount > 0 ? `<span style="color:#8a6d3b;">${t('checkout.discount')}: ${item.discount}% (-${formatPrice(discountAmount)})</span>` : ''}
              <span style="font-weight:600;">${t('checkout.final')}: ${formatPrice(itemFinal)}</span>
            </div>
          </div>`;
      }).join('');

      content.innerHTML = `
        <div class="checkout-content-inner">
          <h2 class="checkout-step-title">${t('checkout.invoiceTitle')}</h2>
          <p class="checkout-step-desc">${t('checkout.invoiceDesc')}</p>
          <div class="invoice">
            <div class="invoice-header">
              <span class="logo-ar">أثر</span>
              <span class="logo-en">ATHAR</span>
              <div class="invoice-meta">
                <span>${t('checkout.orderNum')}: ${orderNumber}</span>
                <span>${t('checkout.date')}: ${dateStr}</span>
              </div>
            </div>
            <div class="invoice-items">${itemsHTML}</div>
            <div class="invoice-totals">
              <div class="summary-row"><span>${t('checkout.originalSubtotal')}</span><span>${formatPrice(totals.originalSubtotal)}</span></div>
              <div class="summary-row discount"><span>${t('checkout.totalDiscount')}</span><span>-${formatPrice(totals.totalDiscount)}</span></div>
              <div class="summary-row total"><span>${t('checkout.finalTotal')}</span><span>${formatPrice(totals.finalTotal)}</span></div>
            </div>
          </div>
          <div class="checkout-actions">
            <button class="btn-secondary" id="checkout-back">${t('checkout.back')}</button>
            <button class="btn-whatsapp" id="confirm-order">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ${t('checkout.confirm')}
            </button>
          </div>
        </div>`;

      $('#checkout-back').addEventListener('click', () => { checkoutStep = 'info'; renderCheckout(); });
      $('#confirm-order').addEventListener('click', () => { sendWhatsAppOrder(orderNumber, dateStr, totals); });
    }
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const name = $('#cust-name').value.trim();
    const phone = $('#cust-phone').value.trim();
    const city = $('#cust-city').value.trim();
    const address = $('#cust-address').value.trim();
    const notes = $('#cust-notes').value.trim();

    $$('.form-error').forEach(el => el.classList.remove('show'));
    let valid = true;
    if (!name) { document.querySelector('[data-error="name"]').classList.add('show'); valid = false; }
    if (!phone || phone.length < 6) { document.querySelector('[data-error="phone"]').classList.add('show'); valid = false; }
    if (!address) { document.querySelector('[data-error="address"]').classList.add('show'); valid = false; }
    if (!valid) return;

    customerInfo = { name, phone, city, address, notes };
    checkoutStep = 'invoice';
    renderCheckout();
  }

  // ---- WhatsApp ----
  function sendWhatsAppOrder(orderNumber, dateStr, totals) {
    let message = '';
    message += 'طلب جديد — ATHAR\n\n';
    message += `Order #: ${orderNumber}\n`;
    message += `Date: ${dateStr}\n`;
    message += '━━━━━━━━━━━━━━\n\n';
    message += 'المنتجات:\n\n';

    cart.forEach((item, i) => {
      const final = calcFinalPrice(item.price, item.discount);
      const discountAmount = (item.price - final) * item.qty;
      const itemFinal = final * item.qty;
      message += `${i + 1}. ${item.name}\n`;
      message += `المقاس: ${item.size}\n`;
      message += `اللون: ${item.color}\n`;
      message += `الكمية: ${item.qty}\n\n`;
      if (item.discount > 0) {
        message += `السعر الأصلي: ${formatPrice(item.price * item.qty)}\n`;
        message += `الخصم: ${item.discount}%\n`;
        message += `قيمة الخصم: ${formatPrice(discountAmount)}\n`;
        message += `السعر بعد الخصم: ${formatPrice(itemFinal)}\n\n`;
      } else {
        message += `السعر: ${formatPrice(itemFinal)}\n\n`;
      }
    });

    message += '━━━━━━━━━━━━━━\n\n';
    message += `الإجمالي الأصلي: ${formatPrice(totals.originalSubtotal)}\n`;
    message += `إجمالي الخصم: ${formatPrice(totals.totalDiscount)}\n`;
    message += `الإجمالي النهائي: ${formatPrice(totals.finalTotal)}\n\n`;
    message += '━━━━━━━━━━━━━━\n\n';
    message += 'بيانات العميل:\n\n';
    message += `الاسم: ${customerInfo.name}\n`;
    message += `رقم الهاتف: ${customerInfo.phone}\n`;
    message += `المدينة: ${customerInfo.city || '-'}\n`;
    message += `العنوان: ${customerInfo.address}\n`;
    message += `ملاحظات: ${customerInfo.notes || '-'}\n`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // ---- Event delegation ----
  function handleProductClick(e) {
    const action = e.target.closest('[data-action]');
    if (!action) return;
    const id = parseInt(action.dataset.id);
    const act = action.dataset.action;
    if (act === 'view') openProductModal(id);
    else if (act === 'add') {
      const product = getProductById(id);
      if (product && product.available) addToCart(id, product.sizes[0], product.colors[0], 1);
    }
  }

  // ---- Initialize ----
  function init() {
    applyLanguage();
    updateCartCount();
    renderCart();

    // Language toggle
    $('#lang-btn').addEventListener('click', toggleLanguage);

    // Header scroll
    window.addEventListener('scroll', () => {
      $('#header').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    const menuBtn = $('#menu-btn');
    const mobileNav = $('#mobile-nav');
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open);
    });
    $$('#mobile-nav a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));

    // Cart
    $('#cart-btn').addEventListener('click', openCart);
    $('#cart-close').addEventListener('click', closeCart);
    $('#cart-overlay').addEventListener('click', closeCart);
    $('#clear-cart-btn').addEventListener('click', () => {
      if (confirm(t('cart.clearConfirm'))) clearCart();
    });

    // Checkout
    $('#checkout-btn').addEventListener('click', openCheckout);
    $('#checkout-close').addEventListener('click', closeCheckout);
    $('#checkout-overlay').addEventListener('click', closeCheckout);

    // Product modal
    $('#product-close').addEventListener('click', closeProductModal);
    $('#product-overlay').addEventListener('click', closeProductModal);

    // Product grid clicks
    document.body.addEventListener('click', handleProductClick);

    // Cart item actions
    $('#cart-items').addEventListener('click', (e) => {
      const action = e.target.closest('[data-action]');
      if (!action) return;
      const index = parseInt(action.dataset.index);
      const act = action.dataset.action;
      if (act === 'qty-up') changeQty(index, 1);
      else if (act === 'qty-down') changeQty(index, -1);
      else if (act === 'remove') removeFromCart(index);
    });

    $('#cart-items').addEventListener('change', (e) => {
      if (e.target.classList.contains('cart-variant-select')) {
        changeVariant(parseInt(e.target.dataset.index), e.target.dataset.type, e.target.value);
      }
    });

    // Product modal interactions
    $('#product-modal-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('size-option')) {
        $$('.size-option').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedSize = e.target.dataset.size;
      }
      if (e.target.classList.contains('color-option')) {
        $$('.color-option').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedColor = e.target.dataset.color;
      }
      if (e.target.classList.contains('product-detail-thumb')) {
        $$('.product-detail-thumb').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        const idx = parseInt(e.target.dataset.index);
        const mainImg = $('#gallery-main');
        if (mainImg && selectedProduct) mainImg.src = selectedProduct.images[idx];
      }
      if (e.target.id === 'detail-qty-down' && selectedQty > 1) {
        selectedQty--; $('#detail-qty').textContent = selectedQty;
      }
      if (e.target.id === 'detail-qty-up') {
        selectedQty++; $('#detail-qty').textContent = selectedQty;
      }
      if (e.target.id === 'detail-add-to-cart' && selectedProduct) {
        addToCart(selectedProduct.id, selectedSize, selectedColor, selectedQty);
        closeProductModal();
      }
    });

    // Search
    $('#search-input').addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderAllProducts();
    });

    // Filter chips
    $$('#filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        $$('#filter-chips .chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        currentFilter = chip.dataset.filter;
        renderAllProducts();
      });
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeCart(); closeProductModal(); closeCheckout(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
