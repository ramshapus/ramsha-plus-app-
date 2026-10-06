/* =====================================================
   رمشة بلس - الأدوات والخدمات المساعدة
===================================================== */

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "حسب الطلب";
  }

  return `${Number(price).toFixed(2)} ريال`;
}


/* =====================================================
   التنبيهات
===================================================== */

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


/* =====================================================
   رقم الطلب
===================================================== */

function generateOrderNumber() {
  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `RM-${random}`;
}


/* =====================================================
   حماية النصوص
===================================================== */

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* =====================================================
   التنقل داخل الصفحة
===================================================== */

function scrollToElement(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =====================================================
   واتساب رمشة بلس
===================================================== */

function openWhatsApp(message = "") {

  const phone = "966501286453";

  const defaultMessage =
    "السلام عليكم، أحتاج مساعدة من رمشة بلس";

  const text =
    message && message.trim()
      ? message.trim()
      : defaultMessage;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}


/* =====================================================
   صفحة عن رمشة بلس
===================================================== */

function showAbout() {

  const main =
    document.getElementById("main-content");

  if (!main) return;

  main.innerHTML = `

    <section class="account-page">

      <button
        type="button"
        class="page-back-button"
        onclick="goToHome()"
      >
        ← الرئيسية
      </button>

      <div class="section-heading">

        <span>من نحن</span>

        <h2>عن رمشة بلس</h2>

        <p>
          اشتراكاتك وخدماتك الرقمية بمكان واحد
        </p>

      </div>

      <div class="account-card">

        <div class="account-avatar">
          👁️
        </div>

        <h3>
          رمشة بلس
        </h3>

        <p>
          رمشة بلس منصة تقدم الاشتراكات الرقمية
          والخدمات الإلكترونية في مكان واحد،
          بهدف توفير تجربة سهلة وسريعة للعميل
          من اختيار الخدمة حتى تنفيذ الطلب.
        </p>

        <p>
          نقدم خدمات رقمية متنوعة تشمل الاشتراكات
          والخدمات الإلكترونية وبرامج السوشل ميديا
          وخدمات القيمنق.
        </p>

        <p>
          نحرص على تقديم خدمة واضحة وسريعة
          مع توفير الدعم للعملاء عند الحاجة.
        </p>

        <div class="account-options">

          <button
            type="button"
            onclick="openWhatsApp()"
          >

            <span>💬</span>

            <div>

              <strong>
                تواصل معنا
              </strong>

              <small>
                تواصل مباشرة مع رمشة بلس
              </small>

            </div>

            <b>‹</b>

          </button>

        </div>

      </div>

    </section>

  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   الشروط والأحكام
===================================================== */

function showTerms() {

  const main =
    document.getElementById("main-content");

  if (!main) return;

  main.innerHTML = `

    <section class="account-page">

      <button
        type="button"
        class="page-back-button"
        onclick="goToHome()"
      >
        ← الرئيسية
      </button>

      <div class="section-heading">

        <span>الأنظمة</span>

        <h2>الشروط والأحكام</h2>

        <p>
          يرجى قراءة الشروط قبل إتمام الطلب
        </p>

      </div>

      <div class="account-card">

        <div class="account-options">

          <button type="button">

            <span>📋</span>

            <div>

              <strong>
                الطلبات
              </strong>

              <small>
                عند إتمام الطلب يلتزم العميل بتقديم
                البيانات الصحيحة المطلوبة لتنفيذ الخدمة.
              </small>

            </div>

          </button>


          <button type="button">

            <span>💳</span>

            <div>

              <strong>
                الدفع
              </strong>

              <small>
                يتم تنفيذ الطلب بعد استكمال عملية الدفع
                بالطريقة المعتمدة للطلب.
              </small>

            </div>

          </button>


          <button type="button">

            <span>⚡</span>

            <div>

              <strong>
                تنفيذ الخدمة
              </strong>

              <small>
                تختلف مدة تنفيذ الطلب حسب نوع الخدمة
                والمنتج المطلوب.
              </small>

            </div>

          </button>


          <button type="button">

            <span>🔐</span>

            <div>

              <strong>
                بيانات العميل
              </strong>

              <small>
                يتحمل العميل مسؤولية صحة البيانات
                التي يقدمها أثناء الطلب.
              </small>

            </div>

          </button>


          <button type="button">

            <span>📞</span>

            <div>

              <strong>
                الدعم
              </strong>

              <small>
                في حال وجود استفسار أو مشكلة في الطلب
                يمكن التواصل مع الدعم عبر واتساب.
              </small>

            </div>

          </button>


          <button
            type="button"
            onclick="openWhatsApp()"
          >

            <span>💬</span>

            <div>

              <strong>
                تواصل مع الدعم
              </strong>

              <small>
                اضغط هنا للتواصل مباشرة
              </small>

            </div>

            <b>‹</b>

          </button>

        </div>

      </div>

    </section>

  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   سياسة الاسترجاع
===================================================== */

function showRefund() {

  const main =
    document.getElementById("main-content");

  if (!main) return;

  main.innerHTML = `

    <section class="account-page">

      <button
        type="button"
        class="page-back-button"
        onclick="goToHome()"
      >
        ← الرئيسية
      </button>

      <div class="section-heading">

        <span>الاسترجاع</span>

        <h2>سياسة الاسترجاع</h2>

        <p>
          سياسة الاسترجاع الخاصة بالخدمات الرقمية
        </p>

      </div>

      <div class="account-card">

        <div class="account-options">

          <button type="button">

            <span>💡</span>

            <div>

              <strong>
                قبل التنفيذ
              </strong>

              <small>
                يمكن التواصل مع الدعم في حال وجود
                استفسار قبل تنفيذ الطلب.
              </small>

            </div>

          </button>


          <button type="button">

            <span>⚠️</span>

            <div>

              <strong>
                بعد تنفيذ الخدمة
              </strong>

              <small>
                الخدمات الرقمية التي تم تنفيذها أو
                تفعيلها لا يمكن استرجاع قيمتها بعد التنفيذ.
              </small>

            </div>

          </button>


          <button type="button">

            <span>🛠️</span>

            <div>

              <strong>
                وجود مشكلة
              </strong>

              <small>
                في حال وجود مشكلة في الخدمة بعد استلامها،
                يرجى التواصل مع الدعم ليتم التحقق منها
                ومعالجتها حسب الحالة.
              </small>

            </div>

          </button>


          <button type="button">

            <span>📱</span>

            <div>

              <strong>
                التواصل مع الدعم
              </strong>

              <small>
                يجب إرسال تفاصيل الطلب عند التواصل
                لمساعدتك بشكل أسرع.
              </small>

            </div>

          </button>


          <button
            type="button"
            onclick="openWhatsApp()"
          >

            <span>💬</span>

            <div>

              <strong>
                تواصل معنا
              </strong>

              <small>
                عند وجود مشكلة في طلبك تواصل معنا مباشرة
              </small>

            </div>

            <b>‹</b>

          </button>

        </div>

      </div>

    </section>

  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
