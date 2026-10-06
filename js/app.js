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

      <div class="footer-verification">
        <p>
          رقم الوثيقة: FL-620606100
        </p>

        <p>
          رقم التوثيق: 0000320650
        </p>
      </div>

      <p class="copyright">
        جميع الحقوق محفوظة لرمشة بلس 2026
      </p>

    </div>
  `;
}
