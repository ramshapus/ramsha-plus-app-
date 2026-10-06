// رمشة بلس - أدوات عامة

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "حسب الطلب";
  }

  return `${Number(price).toFixed(2)} ريال`;
}


function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  if (!container) return;

  const toast = document.createElement("div");

  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 3000);
}


function generateOrderNumber() {
  const random = Math.floor(100000 + Math.random() * 900000);

  return `RM-${random}`;
}


function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


function scrollToElement(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
