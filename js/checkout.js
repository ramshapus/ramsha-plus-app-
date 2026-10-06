// رمشة بلس - الطلبات

let selectedProduct = null;
let selectedCategory = null;


function selectProduct(categoryKey, productId) {

  const category = products[categoryKey];

  if (!category) return;

  const product = category.products.find(
    item => item.id === productId
  );

  if (!product) return;

  selectedCategory = category;
  selectedProduct = product;

  closeModal();

  openCheckout();
}


function openCheckout() {

  const modal = document.getElementById("modal-container");

  if (!modal || !selectedProduct) return;

  const hasPlans =
    Array.isArray(selectedProduct.plans) &&
    selectedProduct.plans.length > 0;

  modal.innerHTML = `
    <div class="modal-overlay">

      <div class="modal checkout-modal">

        <button
          type="button"
          class="modal-close"
          onclick="closeModal()"
        >
          ×
        </button>

        <h2>${selectedProduct.name}</h2>

        ${
          hasPlans
            ? `
              <div class="plans-list">

                ${selectedProduct.plans.map((plan, index) => `
                  
                  <button
                    type="button"
                    class="plan-button"
                    onclick="choosePlan(${index})"
                  >
                    <span>${plan.name}</span>
                    <strong>${formatPrice(plan.price)}</strong>
                  </button>

                `).join("")}

              </div>
            `
            : `
              <div class="order-form">

                <p>
                  ${
                    selectedProduct.price === null
                      ? "هذه الخدمة حسب الطلب، تواصل معنا لمعرفة التفاصيل."
                      : `السعر: ${formatPrice(selectedProduct.price)}`
                  }
                </p>

                <button
                  type="button"
                  class="primary-button"
                  onclick="startOrder()"
                >
                  متابعة الطلب
                </button>

              </div>
            `
        }

      </div>

    </div>
  `;

  modal.classList.add("active");
}


function choosePlan(planIndex) {

  if (!selectedProduct || !selectedProduct.plans) return;

  const plan = selectedProduct.plans[planIndex];

  if (!plan) return;

  selectedProduct.selectedPlan = plan;

  openCustomerForm();
}


function startOrder() {

  if (!selectedProduct) return;

  if (selectedProduct.price === null) {
    openWhatsApp(
      `السلام عليكم، أريد الاستفسار عن خدمة ${selectedProduct.name}`
    );

    return;
  }

  openCustomerForm();
}


function openCustomerForm() {

  const modal = document.getElementById("modal-container");

  if (!modal || !selectedProduct) return;

  const selectedPlan = selectedProduct.selectedPlan;

  const price =
    selectedPlan
      ? selectedPlan.price
      : selectedProduct.price;

  modal.innerHTML = `
    <div class="modal-overlay">

      <div class="modal checkout-modal">

        <button
          type="button"
          class="modal-close"
          onclick="closeModal()"
        >
          ×
        </button>

        <h2>تأكيد الطلب</h2>

        <div class="order-summary">

          <strong>
            ${selectedProduct.name}
          </strong>

          ${
            selectedPlan
              ? `<span>${selectedPlan.name}</span>`
              : ""
          }

          <strong>
            ${formatPrice(price)}
          </strong>

        </div>

        <form onsubmit="confirmOrder(event)">

          <input
            id="customer-name"
            type="text"
            placeholder="الاسم"
            autocomplete="name"
            required
          >

          <input
            id="customer-phone"
            type="tel"
            placeholder="رقم الجوال"
            inputmode="tel"
            autocomplete="tel"
            required
          >

          <button
            type="submit"
            class="primary-button"
          >
            تأكيد الطلب
          </button>

        </form>

      </div>

    </div>
  `;

  modal.classList.add("active");
}


function confirmOrder(event) {

  event.preventDefault();

  const name =
    document.getElementById("customer-name")?.value.trim();

  const phone =
    document.getElementById("customer-phone")?.value.trim();

  if (!name || !phone) {
    showToast("فضلاً أكمل البيانات", "error");
    return;
  }

  const orderNumber = generateOrderNumber();

  const selectedPlan = selectedProduct.selectedPlan;

  const price =
    selectedPlan
      ? selectedPlan.price
      : selectedProduct.price;

  const planText =
    selectedPlan
      ? `\nالخطة: ${selectedPlan.name}`
      : "";

  const message = `
طلب جديد من رمشة بلس

رقم الطلب: ${orderNumber}

الاسم: ${name}
الجوال: ${phone}

الخدمة: ${selectedProduct.name}${planText}

السعر: ${formatPrice(price)}
  `.trim();

  openWhatsApp(message);

  closeModal();

  showToast(
    `تم تجهيز طلبك ${orderNumber}`,
    "success"
  );
}
