// رمشة بلس - رَمّاش 🤖

function renderRamash() {
  const container = document.getElementById("ramash-container");

  if (!container) return;

  container.innerHTML = `
    <button
      type="button"
      class="ramash-button"
      onclick="openRamash()"
      aria-label="فتح رَمّاش"
    >
      🤖
    </button>

    <div id="ramash-window" class="ramash-window">

      <div class="ramash-header">
        <div>
          <strong>رَمّاش 🤖</strong>
          <span>مساعد رمشة بلس</span>
        </div>

        <button
          type="button"
          onclick="closeRamash()"
        >
          ×
        </button>
      </div>

      <div
        id="ramash-messages"
        class="ramash-messages"
      >
        <div class="ramash-message bot">
          هلا والله 👋
          <br>
          أنا رَمّاش، وش تبي تعرف عن رمشة بلس؟
        </div>
      </div>

      <form
        class="ramash-form"
        onsubmit="sendRamashMessage(event)"
      >

        <input
          id="ramash-input"
          type="text"
          placeholder="اكتب سؤالك..."
          autocomplete="off"
        >

        <button type="submit">
          إرسال
        </button>

      </form>

    </div>
  `;
}


function openRamash() {

  const windowElement =
    document.getElementById("ramash-window");

  if (!windowElement) return;

  windowElement.classList.add("active");

  setTimeout(() => {
    document
      .getElementById("ramash-input")
      ?.focus();
  }, 100);
}


function closeRamash() {

  const windowElement =
    document.getElementById("ramash-window");

  if (!windowElement) return;

  windowElement.classList.remove("active");
}


function sendRamashMessage(event) {

  event.preventDefault();

  const input =
    document.getElementById("ramash-input");

  const messages =
    document.getElementById("ramash-messages");

  if (!input || !messages) return;

  const question = input.value.trim();

  if (!question) return;

  addRamashMessage(question, "user");

  input.value = "";

  setTimeout(() => {

    const answer = getRamashAnswer(question);

    addRamashMessage(answer, "bot");

  }, 400);
}


function addRamashMessage(message, type) {

  const messages =
    document.getElementById("ramash-messages");

  if (!messages) return;

  const element = document.createElement("div");

  element.className =
    `ramash-message ${type}`;

  element.textContent = message;

  messages.appendChild(element);

  messages.scrollTop = messages.scrollHeight;
}


function getRamashAnswer(question) {

  const text = normalizeArabic(question);

  if (
    text.includes("هلا") ||
    text.includes("السلام") ||
    text.includes("مرحبا") ||
    text.includes("اهلا")
  ) {
    return "هلا وغلا 👋 أنا رَمّاش، اسألني عن الخدمات أو طريقة الطلب.";
  }


  if (
    text.includes("كيف اطلب") ||
    text.includes("طريقة الطلب") ||
    text.includes("اطلب")
  ) {
    return "اختر القسم ثم الخدمة، وبعدها عبّ بياناتك وكمّل الطلب. وإذا احتجت مساعدة أنا حاضر 🤖";
  }


  if (
    text.includes("الاسعار") ||
    text.includes("الاسعار؟") ||
    text.includes("كم السعر") ||
    text.includes("سعر")
  ) {
    return "الأسعار موجودة داخل الخدمات. اختر القسم والمنتج عشان تشوف الخيارات المتوفرة.";
  }


  if (
    text.includes("نتفلكس") ||
    text.includes("نتفليكس")
  ) {
    return "Netflix متوفر ضمن الاشتراكات الرقمية. ادخل قسم الاشتراكات واختر Netflix.";
  }


  if (text.includes("شاهد")) {
    return "Shahid VIP وشاهد مباريات متوفرين ضمن قسم الاشتراكات الرقمية.";
  }


  if (
    text.includes("يوتيوب") ||
    text.includes("youtube")
  ) {
    return "YouTube Premium متوفر ضمن الاشتراكات الرقمية.";
  }


  if (
    text.includes("سناب") ||
    text.includes("snapchat")
  ) {
    return "Snapchat Plus متوفر ضمن برامج السوشل ميديا.";
  }


  if (
    text.includes("بلايستيشن") ||
    text.includes("playstation")
  ) {
    return "PlayStation Plus متوفر ضمن قسم القيمنق.";
  }


  if (
    text.includes("تيك") ||
    text.includes("تيكتوك")
  ) {
    return "خدمات TikTok متوفرة حسب الطلب.";
  }


  if (
    text.includes("انستقرام") ||
    text.includes("انستا")
  ) {
    return "خدمات Instagram متوفرة حسب الطلب.";
  }


  if (
    text.includes("خدمات") ||
    text.includes("وش عندكم") ||
    text.includes("وش تقدمون")
  ) {
    return "عندنا خدمات إلكترونية واشتراكات رقمية وبرامج للسوشل ميديا وخدمات قيمنق 🎮";
  }


  if (
    text.includes("دعم") ||
    text.includes("تواصل")
  ) {
    return "تقدر تتواصل معنا مباشرة من قسم تواصل معنا.";
  }


  return "ما فهمت عليك بالكامل 😅 جرّب تسألني عن الأسعار أو الاشتراكات أو الخدمات أو طريقة الطلب.";
}


function normalizeArabic(text) {

  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();
}
