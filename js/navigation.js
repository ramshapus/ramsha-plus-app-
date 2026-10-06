// رمشة بلس - التنقل السفلي

function renderNavigation() {
  const container = document.getElementById("navigation-container");

  if (!container) return;

  container.innerHTML = `
    <nav class="bottom-navigation">

      <button type="button" class="nav-item active" onclick="goToHome()">
        <span>⌂</span>
        <small>الرئيسية</small>
      </button>

      <button type="button" class="nav-item" onclick="goToServices()">
        <span>▦</span>
        <small>الخدمات</small>
      </button>

      <button type="button" class="nav-item" onclick="goToOrders()">
        <span>▤</span>
        <small>الطلبات</small>
      </button>

      <button type="button" class="nav-item" onclick="goToAccount()">
        <span>♙</span>
        <small>حسابي</small>
      </button>

    </nav>
  `;
}


function setActiveNavigation(buttonIndex) {
  const items = document.querySelectorAll(".nav-item");

  items.forEach((item, index) => {
    item.classList.toggle("active", index === buttonIndex);
  });
}


function goToHome() {
  setActiveNavigation(0);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function goToServices() {
  setActiveNavigation(1);
  scrollToElement("services");
}


function goToOrders() {
  setActiveNavigation(2);

  const main = document.getElementById("main-content");
  if (!main) return;

  main.innerHTML = `
    <section class="orders-page">
      <div class="section-heading">
        <span>طلباتي</span>
        <h2>تابع طلباتك</h2>
        <p>هنا بتظهر طلباتك وحالتها بعد إتمام الطلب</p>
      </div>

      <div class="empty-orders">
        <div class="empty-orders-icon">📦</div>

        <h3>ما عندك طلبات حالياً</h3>

        <p>
          إذا طلبت خدمة أو اشتراك، بتظهر تفاصيل طلبك هنا.
        </p>

        <button
          type="button"
          class="primary-button"
          onclick="goToServices()"
        >
          استعرض الخدمات
        </button>
      </div>
    </section>
  `;
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goToAccount() {
  setActiveNavigation(3);

  showToast(
    "الحساب الشخصي بنجهزه لك قريب 🔥",
    "success"
  );
}
