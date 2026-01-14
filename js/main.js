/* ============================================================
   b_lit hairs — main.js
   Core interactivity: nav, animations, scroll, ripple, FAQ
   ============================================================ */

'use strict';

/* ── Page Loader ── */
function initLoader() {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1600);
  });

  document.body.style.overflow = 'hidden';
}

/* ── Scroll Progress Bar ── */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width    = pct + '%';
  }, { passive: true });
}

/* ── Sticky Nav ── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Hamburger ── */
function initHamburger() {
  const btn    = document.querySelector('.nav__hamburger');
  const drawer = document.querySelector('.nav__drawer');
  if (!btn || !drawer) return;

  const toggle = () => {
    const isOpen = btn.classList.toggle('open');
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    btn.setAttribute('aria-expanded', isOpen.toString());
  };

  btn.addEventListener('click', toggle);

  // Close drawer when a link is clicked
  drawer.querySelectorAll('.nav__link, .btn').forEach(el => {
    el.addEventListener('click', () => {
      btn.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.classList.contains('open')) toggle();
  });
}

/* ── Active Nav Link ── */
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__drawer .nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Button Ripple Effect ── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;

      const ripple       = document.createElement('span');
      ripple.className   = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      this.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

/* ── Hero Parallax ── */
function initHeroParallax() {
  const bg = document.querySelector('.hero__bg');
  if (!bg) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
  }, { passive: true });

  // Trigger loaded class for Ken Burns
  setTimeout(() => {
    document.querySelector('.hero')?.classList.add('loaded');
  }, 100);
}

/* ── Counter Animation ── */
function animateCounter(el, target, duration = 2000) {
  let start    = 0;
  const step   = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString() + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.counter, 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ── FAQ Accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function () {
      const item    = this.closest('.faq-item');
      const isOpen  = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Toast Notification ── */
function showToast(message, duration = 3000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast          = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;

/* ── Shop Filter ── */
function initShopFilter() {
  const filterBtns    = document.querySelectorAll('.filter-btn');
  const productsWrap  = document.getElementById('products-grid');
  if (!filterBtns.length || !productsWrap) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const cat = this.dataset.filter;
      renderProducts(cat, productsWrap);
    });
  });
}

/* ── Render Products (shop.html) ── */
function renderProducts(category = 'all', container) {
  if (!container) return;
  const list = getProductsByCategory(category);

  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<p class="text-center" style="grid-column:1/-1;color:var(--text-light);padding:3rem;">No products found in this category.</p>';
    return;
  }

  list.forEach((product, i) => {
    const card = document.createElement('article');
    card.className     = 'product-card';
    card.style.opacity = '0';
    card.setAttribute('data-reveal', 'up');
    card.setAttribute('data-delay', String((i % 4) * 100));

    card.innerHTML = `
      ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
      <div class="product-card__img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="300">
        <div class="product-card__overlay">
          <span style="color:white;font-family:var(--font-accent);font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">View Details</span>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__type">${product.hairType} · ${product.texture}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__footer">
          <div class="product-card__price">${formatPrice(product.price, product.currency)}</div>
          <button class="product-card__btn" aria-label="View ${product.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>`;

    card.addEventListener('click', () => {
      // Store selected product in sessionStorage for product page
      sessionStorage.setItem('selectedProduct', JSON.stringify(product));
      // Navigate with query param as fallback
      window.location.href = `product.html?id=${product.id}`;
    });

    container.appendChild(card);

    // Trigger reveal after small delay
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.opacity = '';
        card.classList.add('revealed');
      }, i * 80);
    });
  });

  // Re-init ripple for new buttons
  initRipple();
}

/* ── Product Detail Page ── */
function initProductPage() {
  const mainImg  = document.getElementById('product-main-img');
  const thumbs   = document.querySelectorAll('.product-detail__thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImg.src = this.querySelector('img').src.replace('?w=120', '?w=800');
      mainImg.style.opacity = '0';
      setTimeout(() => { mainImg.style.opacity = '1'; }, 50);
      mainImg.style.transition = 'opacity 0.35s ease';
    });
  });
}

/* ── Load Product from URL/Storage ── */
function loadProductDetail() {
  const params    = new URLSearchParams(window.location.search);
  const id        = params.get('id');
  let product     = null;

  if (id) {
    product = getProductById(id);
  }

  if (!product) {
    // Fallback to sessionStorage
    try {
      product = JSON.parse(sessionStorage.getItem('selectedProduct'));
    } catch (e) { /* ignore */ }
  }

  if (!product) {
    // Default to first product
    product = getAllProducts()[0];
  }

  if (!product) return;

  // Populate DOM
  const setEl = (sel, val, prop = 'textContent') => {
    const el = document.querySelector(sel);
    if (el) el[prop] = val;
  };

  setEl('#product-category',    product.hairType);
  setEl('#product-name',        product.name);
  setEl('#product-price',       formatPrice(product.price, product.currency));
  setEl('#product-description', product.description);
  setEl('#spec-type',           product.hairType);
  setEl('#spec-texture',        product.texture);
  setEl('#spec-length',         product.defaultLength);
  setEl('#spec-weight',         product.weight);
  setEl('#spec-color',          product.color);

  // Badge
  const badgeEl = document.querySelector('#product-badge');
  if (badgeEl) {
    if (product.badge) { badgeEl.textContent = product.badge; badgeEl.style.display = ''; }
    else badgeEl.style.display = 'none';
  }

  // Features list
  const featuresList = document.querySelector('#product-features');
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `
      <li style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;font-size:0.9rem;color:var(--text-mid)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        ${f}
      </li>`).join('');
  }

  // Images
  const mainImg = document.getElementById('product-main-img');
  if (mainImg && product.images) mainImg.src = product.images[0];

  const thumbsWrap = document.getElementById('product-thumbs');
  if (thumbsWrap && product.images) {
    thumbsWrap.innerHTML = product.images.map((img, i) => `
      <div class="product-detail__thumb ${i === 0 ? 'active' : ''}">
        <img src="${img}&w=120" alt="${product.name} view ${i+1}" loading="lazy" width="120" height="80">
      </div>`).join('');

    // Re-init thumb click
    thumbsWrap.querySelectorAll('.product-detail__thumb').forEach(thumb => {
      thumb.addEventListener('click', function () {
        thumbsWrap.querySelectorAll('.product-detail__thumb').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        if (mainImg) {
          mainImg.style.opacity = '0';
          mainImg.src = this.querySelector('img').src.replace('?w=120', '?w=800');
          setTimeout(() => {
            mainImg.style.opacity = '1';
            mainImg.style.transition = 'opacity 0.35s ease';
          }, 50);
        }
      });
    });
  }

  // WhatsApp buy button
  const waBtn = document.getElementById('whatsapp-buy-btn');
  if (waBtn) {
    waBtn.href = buildWhatsAppURL(product);
  }

  // Page title
  document.title = `${product.name} — b_lit hairs`;
}

/* ── WhatsApp Floating Button ── */
function initWhatsAppFloat() {
  const btn = document.querySelector('.whatsapp-float');
  if (!btn) return;
  btn.href = buildGenericWhatsAppURL();
}

/* ── Image Lazy Load Fallback ── */
function initLazyImages() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('error', function () {
      this.src = `https://via.placeholder.com/800x600/f2c4d4/b5436a?text=b_lit+hairs`;
    });
  });
}

/* ── Smooth Anchor Scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Featured Products on Home ── */
function initFeaturedProducts() {
  const grid = document.getElementById('featured-products');
  if (!grid) return;

  const featured = getFeaturedProducts();
  featured.forEach((product, i) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-reveal', 'up');
    card.setAttribute('data-delay', String(i * 150));

    card.innerHTML = `
      ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
      <div class="product-card__img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="300">
        <div class="product-card__overlay">
          <span style="color:white;font-family:var(--font-accent);font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Shop Now</span>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__type">${product.hairType} · ${product.texture}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__footer">
          <div class="product-card__price">${formatPrice(product.price, product.currency)}</div>
          <button class="product-card__btn" aria-label="View ${product.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>`;

    card.addEventListener('click', () => {
      sessionStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = `product.html?id=${product.id}`;
    });

    grid.appendChild(card);
  });
}

/* ── Gallery Lightbox (simple) ── */
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  items.forEach(item => {
    item.addEventListener('click', function () {
      const img  = this.querySelector('img');
      if (!img) return;

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;
        display:flex;align-items:center;justify-content:center;cursor:zoom-out;
        animation:fadeIn 0.3s ease;
      `;
      const bigImg       = document.createElement('img');
      bigImg.src         = img.src.replace('&w=400', '&w=1200').replace('w=400', 'w=1200');
      bigImg.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:12px;object-fit:contain;';
      bigImg.alt         = img.alt;

      overlay.appendChild(bigImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => overlay.remove());
      document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
      });
    });
  });
}

/* ── Main Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initScrollProgress();
  initNav();
  initHamburger();
  initActiveNav();
  initScrollReveal();
  initRipple();
  initHeroParallax();
  initCounters();
  initFAQ();
  initSmoothScroll();
  initWhatsAppFloat();
  initLazyImages();
  initGallery();

  // Page-specific
  const page = window.location.pathname.split('/').pop();

  if (page === 'index.html' || page === '' || page === '/') {
    initFeaturedProducts();
  }

  if (page === 'shop.html') {
    const grid = document.getElementById('products-grid');
    if (grid) renderProducts('all', grid);
    initShopFilter();
  }

  if (page === 'product.html') {
    loadProductDetail();
    initProductPage();
  }
});