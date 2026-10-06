// رمشة بلس - تشغيل واجهة التطبيق

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHome();
  renderFooter();
  renderRamash();
  renderNavigation();
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
        <button type="button" class="nav-button" onclick="scrollToElement('services')">
          الخدمات
        </button>

        <button type="button" class="nav-button" onclick="scrollToElement('contact')">
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
    <!-- الرئيسية -->
    <section class="hero">
      <div class="hero-logo">
        <img src="assets/images/IMG_2359.jpeg" alt="رمشة بلس">
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

    <!-- الثقة -->
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

    <!-- الخدمات -->
    <section id="services" class="services-section">
      <div class="section-heading">
        <span>الخدمات</span>
        <h2>وش تحتاج اليوم؟</h2>
        <p>اختر القسم واستعرض الخدمات المتوفرة</p>
      </div>

      <div id="categories-container" class="categories-grid"></div>
    </section>

    <!-- الدفع -->
    <section class="payment-section">
      <div class="section-heading">
        <span>الدفع</span>
        <h2>دفع آمن وسهل</h2>
        <p>نوفر لك خيارات دفع إلكترونية آمنة</p>
      </div>

      <div class="payment-card">
        <div class="payment-icon">💳</div>
        <h3>دفع آمن عبر هلا</h3>
        <p>
          بعد تأكيد طلبك يتم تجهيز الفاتورة وإرسالها لك
          بطريقة آمنة.
        </p>

        <div class="payment-badge">
          دفع إلكتروني آمن
        </div>
      </div>
    </section>

    <!-- التقييمات -->
    <section id="reviews" class="reviews-section">
      <div class="section-heading">
        <span>آراء العملاء</span>
        <h2>تجارب عملائنا</h2>
        <p>وش قالوا عن تجربتهم مع رمشة بلس</p>
      </div>

      <div id="reviews-container"></div>
    </section>

    <!-- الشهادة -->
    <section class="certificate-section">
      <div class="section-heading">
        <span>الثقة</span>
        <h2>موثق لدى مركز الأعمال التنافسية السعودي</h2>
        <p>رمشة بلس موثق رسميًا</p>
      </div>

      <div class="certificate-card">
        <img
          src="assets/images/IMG_1893.jpeg"
          alt="وثيقة رمشة بلس"
        >

        <a
          href="https://business.sa/ar/eservices/details/3fd371e5-11de-4078-08cf-08dbf015747a"
          target="_blank"
          rel="noopener noreferrer"
          class="primary-button"
        >
          التحقق من الوثيقة
        </a>
      </div>
    </section>

    <!-- خطوات الطلب -->
    <section class="steps-section">
      <div class="section-heading">
        <span>طريقة الطلب</span>
        <h2>كيف تطلب؟</h2>
        <p>أربع خطوات بسيطة وتكون خدمتك عندك</p>
      </div>

      <div class="steps-grid">

        <div class="step-card">
          <span>1</span>
          <h3>اختر القسم</h3>
          <p>حدد الخدمة التي تحتاجها</p>
        </div>

        <div class="step-card">
          <span>2</span>
          <h3>اختر المنتج</h3>
          <p>اختر المنتج أو الباقة المناسبة</p>
        </div>

        <div class="step-card">
          <span>3</span>
          <h3>أكد طلبك</h3>
          <p>أدخل بياناتك وأرسل الطلب</p>
        </div>

        <div class="step-card">
          <span>4</span>
          <h3>استلم خدمتك</h3>
          <p>يتم تنفيذ طلبك بأسرع وقت</p>
        </div>

      </div>
    </section>

    <!-- تقييمنا -->
    <section class="review-cta-section">
      <div class="review-cta-card">
        <span>⭐</span>
        <h2>جربتنا؟ عطنا رأيك</h2>
        <p>
          تقييمك يساعدنا نطور رمشة بلس ونقدم لك تجربة أفضل.
        </p>

        <button
          type="button"
          class="primary-button"
          onclick="openReviewForm()"
        >
          قيّم تجربتك
        </button>
      </div>
    </section>

    <!-- التواصل -->
    <section id="contact" class="contact-section">
      <div class="section-heading">
        <span>تواصل معنا</span>
        <h2>نحن قريبين منك</h2>
        <p>إذا عندك أي استفسار تواصل معنا مباشرة</p>
      </div>

      <div class="contact-card">
        <div class="contact-icon">💬</div>

        <h3>تواصل عبر واتساب</h3>

        <p>
          للاستفسارات والطلبات والخدمات الخاصة
        </p>

        <button
          type="button"
          class="primary-button"
          onclick="openWhatsApp()"
        >
          تواصل عبر واتساب
        </button>
      </div>
    </section>
  `;

  renderCategories();
  renderReviews();
}

function renderCategories() {
  const container =
    document.getElementById("categories-container");

  if (!container || typeof products === "undefined") return;

  container.innerHTML = "";

  Object.entries(products).forEach(([key, category]) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "category-card";

    card.innerHTML = `
      <span class="category-icon">
        ${category.icon}
      </span>

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

  const modal =
    document.getElementById("modal-container");

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
  const modal =
    document.getElementById("modal-container");

  if (!modal) return;

  modal.classList.remove("active");
  modal.innerHTML = "";
}

function renderReviews() {
  const container =
    document.getElementById("reviews-container");

  if (!container || typeof reviews === "undefined") return;

  if (!reviews.length) {
    container.innerHTML = "";
    return;
  }

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

    const text =
      document.getElementById("review-text");

    if (text) {
      text.textContent = reviews[index];
    }
  }, 3000);
}

function openReviewForm() {
  window.open(
    "https://forms.google.com/",
    "_blank",
    "noopener,noreferrer"
  );
}

function renderFooter() {
  const footer =
    document.getElementById("footer");

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
