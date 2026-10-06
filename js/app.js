// رمشة بلس - تشغيل واجهة التطبيق
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHome();
  renderFooter();
  renderRamash();
});



function renderHeader() {
  const header = document.getElementById("header");

  if (!header) return;

  header.innerHTML = `
    <nav class="app-header">

      <div class="brand">
        <span class="brand-name">رمشة بلس</span>
      </div>

      <div class="header-actions">

        <button
          type="button"
          class="nav-button"
          onclick="scrollToElement('services')"
        >
          الخدمات
        </button>

        <button
          type="button"
          class="nav-button"
          onclick="scrollToElement('contact')"
        >
          تواصل معنا
        </button>

      </div>

    </nav>
  `;
}


function renderHome() {
  const main = document.getElementById("main-content");

  if (!main) return;

  main.innerHTML = `

    <section class="hero">

      <div class="hero-logo">
        <img
          src="assets/images/logo.jpeg"
          alt="رمشة بلس"
        >
      </div>

      <div class="online-badge">
        <span></span>
        رَمّاش متواجد لخدمتك
      </div>

      <h1>
        خدماتك الرقمية
        <strong>في مكان واحد</strong>
      </h1>

      <p>
        اشتراكات وخدمات رقمية وتجربة سهلة وسريعة
        من رمشة بلس
      </p>

      <div class="hero-actions">

        <button
          type="button"
          class="primary-button"
          onclick="scrollToElement('services')"
        >
          استعرض الخدمات
        </button>

        <button
          type="button"
          class="secondary-button"
          onclick="openRamash()"
        >
          اسأل رَمّاش 🤖
        </button>

      </div>

    </section>


    <section class="trust-section">

      <div class="trust-card">
        <span>🛡️</span>
        <h3>ضمان على الخدمات</h3>
        <p>خدمات موثوقة ودعم مستمر</p>
      </div>

      <div class="trust-card">
        <span>⚡</span>
        <h3>تفعيل سريع</h3>
        <p>إنجاز طلبك بأسرع وقت ممكن</p>
      </div>

      <div class="trust-card">
        <span>💬</span>
        <h3>دعم مباشر</h3>
        <p>رَمّاش وفريق الدعم لخدمتك</p>
      </div>

    </section>


    <section id="services" class="services-section">

      <div class="section-heading">
        <span>الخدمات</span>
        <h2>وش تحتاج اليوم؟</h2>
        <p>اختر القسم واستعرض الخدمات المتوفرة</p>
      </div>

      <div id="categories-container" class="categories-grid"></div>

    </section>


    <section id="reviews" class="reviews-section">

      <div class="section-heading">
        <span>آراء العملاء</span>
        <h2>تجارب عملائنا</h2>
      </div>

      <div id="reviews-container"></div>

    </section>


    <section id="contact" class="contact-section">

      <div class="section-heading">
        <span>تواصل معنا</span>
        <h2>نحن قريبين منك</h2>
        <p>إذا عندك أي استفسار تواصل معنا مباشرة</p>
      </div>

      <button
        type="button"
        class="primary-button"
        onclick="openWhatsApp()"
      >
        تواصل عبر واتساب
      </button>

    </section>

  `;

  renderCategories();
  renderReviews();
}


function renderCategories() {
  const container = document.getElementById("categories-container");

  if (!container) return;

  container.innerHTML = "";

  Object.entries(products).forEach(([key, category]) => {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "category-card";

    card.innerHTML = `
      <span class="category-icon">${category.icon}</span>

      <h3>${category.title}</h3>

      <p>
        استعرض المنتجات والخدمات
      </p>

      <span class="category-arrow">←</span>
    `;

    card.addEventListener("click", () => {
      openCategory(key);
    });

    container.appendChild(card);
  });
}


function openCategory(categoryKey) {
  const category = products[categoryKey];

  if (!category) return;

  const modal = document.getElementById("modal-container");

  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-overlay">

      <div class="modal">

        <button
          type="button"
          class="modal-close"
          onclick="closeModal()"
        >
          ×
        </button>

        <div class="modal-title">
          <span>${category.icon}</span>
          <h2>${category.title}</h2>
        </div>

        <div class="products-list">

          ${category.products.map(product => `

            <button
              type="button"
              class="product-card"
              onclick="selectProduct('${categoryKey}', '${product.id}')"
            >

              <div>
                <h3>${product.name}</h3>

                <p>
                  ${product.description || "اختر الخدمة المناسبة لك"}
                </p>
              </div>

              <span>›</span>

            </button>

          `).join("")}

        </div>

      </div>

    </div>
  `;

  modal.classList.add("active");
}


function closeModal() {
  const modal = document.getElementById("modal-container");

  if (!modal) return;

  modal.classList.remove("active");
  modal.innerHTML = "";
}


function renderReviews() {
  const container = document.getElementById("reviews-container");

  if (!container) return;

  container.innerHTML = `
    <div class="review-card">

      <div class="review-stars">
        ★★★★★
      </div>

      <p id="review-text">
        ${reviews[0]}
      </p>

      <span>
        عميل رمشة بلس
      </span>

    </div>
  `;

  let index = 0;

  setInterval(() => {

    index = (index + 1) % reviews.length;

    const text = document.getElementById("review-text");

    if (text) {
      text.textContent = reviews[index];
    }

  }, 3000);
}


function renderFooter() {
  const footer = document.getElementById("footer");

  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-content">

      <h3>رمشة بلس</h3>

      <p>
        اشتراكاتك وخدماتك الرقمية بمكان واحد
      </p>

      <div class="footer-links">

        <button type="button" onclick="showAbout()">
          عن رمشة بلس
        </button>

        <button type="button" onclick="showTerms()">
          الشروط والأحكام
        </button>

        <button type="button" onclick="showRefund()">
          سياسة الاسترجاع
        </button>

      </div>

      <p class="copyright">
        جميع الحقوق محفوظة لرمشة بلس 2026
      </p>

    </div>
  `;
}
