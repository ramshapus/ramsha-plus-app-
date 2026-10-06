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

  showToast(
    "قسم الطلبات بنجهزه لك قريب 🔥",
    "success"
  );
}


function goToAccount() {
  setActiveNavigation(3);

  showToast(
    "الحساب الشخصي بنجهزه لك قريب 🔥",
    "success"
  );
}
