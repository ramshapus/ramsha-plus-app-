// رمشة بلس - بيانات المنتجات

const products = {

  digital: {
    title: "الخدمات الإلكترونية",
    icon: "💻",
    products: [

      {
        id: "website",
        name: "إنشاء موقع إلكتروني",
        description: "إنشاء موقع احترافي حسب طلبك",
        price: 45.99
      },

      {
        id: "store",
        name: "إنشاء متجر إلكتروني",
        description: "إنشاء متجر إلكتروني وتجهيزه",
        price: 22.99
      },

      {
        id: "store-development",
        name: "تطوير وتعديل متجر",
        description: "تطوير وتعديل المتاجر حسب الطلب",
        price: null
      },

      {
        id: "website-edit",
        name: "تعديل موقع",
        description: "تعديل وتحسين المواقع الإلكترونية",
        price: 14.99
      },

      {
        id: "add-products",
        name: "إضافة المنتجات",
        description: "إضافة وترتيب المنتجات داخل المتجر",
        price: 8.99
      },

      {
        id: "custom-service",
        name: "خدمة إلكترونية مخصصة",
        description: "خدمة خاصة حسب احتياجك",
        price: null
      }

    ]
  },


  subscriptions: {
    title: "الاشتراكات الرقمية",
    icon: "📺",
    products: [

      {
        id: "netflix",
        name: "Netflix",
        plans: [
          {
            name: "شهري",
            price: 9.99
          },
          {
            name: "سنوي",
            price: 59.99
          }
        ]
      },

      {
        id: "shahid",
        name: "Shahid VIP",
        plans: [
          {
            name: "شهري",
            price: 9.99
          },
          {
            name: "سنوي",
            price: 49.99
          }
        ]
      },

      {
        id: "shahid-sports",
        name: "Shahid مباريات",
        plans: [
          {
            name: "شهري",
            price: 62.99
          },
          {
            name: "سنوي",
            price: 94.99
          }
        ]
      },

      {
        id: "youtube",
        name: "YouTube Premium",
        plans: [
          {
            name: "شهري",
            price: 15.99
          },
          {
            name: "سنوي",
            price: 29.99
          }
        ]
      }

    ]
  },


  social: {
    title: "برامج السوشل ميديا",
    icon: "📱",
    products: [

      {
        id: "snapchat-plus",
        name: "Snapchat Plus",
        plans: [
          {
            name: "3 أشهر",
            price: 32.99
          },
          {
            name: "6 أشهر",
            price: 45.99
          },
          {
            name: "12 شهر",
            price: 89.99
          }
        ]
      },

      {
        id: "tiktok",
        name: "TikTok",
        description: "خدمات TikTok حسب الطلب",
        plans: null
      },

      {
        id: "instagram",
        name: "Instagram",
        description: "خدمات Instagram حسب الطلب",
        plans: null
      },

      {
        id: "x",
        name: "X",
        description: "خدمات X حسب الطلب",
        plans: null
      }

    ]
  },


  gaming: {
    title: "القيمنق",
    icon: "🎮",
    products: [

      {
        id: "playstation-plus",
        name: "PlayStation Plus",
        plans: [
          {
            name: "شهري",
            price: 24.99
          },
          {
            name: "3 أشهر",
            price: 39.99
          },
          {
            name: "سنوي",
            price: 57.99
          }
        ]
      },

      {
        id: "fortnite-accounts",
        name: "حسابات Fortnite",
        description: "حسابات Fortnite حسب الطلب",
        plans: null
      },

      {
        id: "vbucks",
        name: "V-Bucks",
        description: "V-Bucks حسب الطلب",
        plans: null
      },

      {
        id: "random-accounts",
        name: "حسابات عشوائية",
        description: "حسابات متنوعة حسب الطلب",
        plans: null
      }

    ]
  }

};
