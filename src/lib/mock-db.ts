// ============================================================
// Belenay Mobilya - Demo Mock Database
// client-side veri yönetimi. Veriler localStorage üzerinde saklanır.
// ============================================================

const STORAGE_KEY = "belenay_demo_db_v1";

export interface MockCategory {
  id: string;
  slug: string;
  name_tr: string;
  name_ru: string;
  name_ky: string;
  image: string;
  showInHeader: boolean;
  order: number;
  products?: any[];
}

export interface MockProduct {
  id: string;
  slug: string;
  name_tr: string;
  name_ru: string;
  name_ky: string;
  shortDesc_tr?: string;
  shortDesc_ru?: string;
  shortDesc_ky?: string;
  description_tr?: string;
  description_ru?: string;
  description_ky?: string;
  price: number;
  discountPrice: number | null;
  discountStart?: string | null;
  discountEnd?: string | null;
  isDiscountPermanent?: boolean;
  stockCode: string;
  stockQty: number;
  isPublished: boolean;
  categoryId: string;
  categories?: any[];
  images: Array<{ path: string; isPrimary: boolean; order: number }>;
  averageRating: number;
  reviewCount: number;
}

// ---- SEED DATA ----

const defaultSliders = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    title_tr: "Yeni Sezon Koltuk Takımları",
    title_ru: "Диваны Нового Сезона",
    title_ky: "Жаңы Сезон Дивандары",
    subtitle_tr: "Evinize şıklık katan konforlu tasarımlar",
    subtitle_ru: "Комфортный дизайн, добавляющий элегантности вашему дому",
    subtitle_ky: "Үйүңүзгө көрк кошкон ыңгайлуу дизайндар",
    buttonText_tr: "Koleksiyonu İncele",
    buttonText_ru: "Смотреть Коллекцию",
    buttonText_ky: "Коллекцияны Көрүү",
    buttonLink: "/oturma-odasi",
    buttonColor: "#e75f0d",
    textColor: "#ffffff",
    isActive: true,
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
    title_tr: "Huzurlu Uykular İçin Yatak Odaları",
    title_ru: "Спальни для Спокойного Сна",
    title_ky: "Тынч Уйку үчүн Уктоочу Бөлмөлөр",
    subtitle_tr: "Estetik gardıroplar ve ergonomik karyolalar",
    subtitle_ru: "Эстетичные шкафы и эргономичные кровати",
    subtitle_ky: "Кооз шкафтар жана эргономикалык керебеттер",
    buttonText_tr: "Ürünleri Keşfet",
    buttonText_ru: "Исследовать Продукты",
    buttonText_ky: "Өнүмдөрдү Изилдөө",
    buttonLink: "/yatak-odasi",
    buttonColor: "#191833",
    textColor: "#ffffff",
    isActive: true,
  }
];

const defaultCategories: MockCategory[] = [
  {
    id: "cat-oturma",
    slug: "oturma-odasi",
    name_tr: "Oturma Odası",
    name_ru: "Гостиная",
    name_ky: "Конок Бөлмö",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 1,
  },
  {
    id: "cat-yatak",
    slug: "yatak-odasi",
    name_tr: "Yatak Odası",
    name_ru: "Спальня",
    name_ky: "Уктоочу Бөлмө",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 2,
  },
  {
    id: "cat-yemek",
    slug: "yemek-odasi",
    name_tr: "Yemek Odası",
    name_ru: "Столовая",
    name_ky: "Тамактануучу Бөлмө",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 3,
  },
  {
    id: "cat-calisma",
    slug: "calisma-odasi",
    name_tr: "Çalışma Odası",
    name_ru: "Кабинет",
    name_ky: "Иш Бөлмөсү",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 4,
  },
  {
    id: "cat-genc",
    slug: "genc-odasi",
    name_tr: "Genç Odası",
    name_ru: "Молодежная Комната",
    name_ky: "Өспүрүм Бөлмөсү",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 5,
  },
  {
    id: "cat-aksesuar",
    slug: "aksesuarlar",
    name_tr: "Aksesuarlar",
    name_ru: "Аксессуары",
    name_ky: "Аксессуарлар",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    showInHeader: true,
    order: 6,
  }
];

const defaultProducts: MockProduct[] = [
  // ---- 1. OTURMA ODASI (1-10) ----
  {
    id: "prod-1",
    slug: "belenay-avangard-koltuk-takimi",
    name_tr: "Belenay Avangard Koltuk Takımı",
    name_ru: "Авангардный Диванный Гарнитур Belenay",
    name_ky: "Belenay Авангард Диван Топтому",
    shortDesc_tr: "Lüks ve estetiğin mükemmel birleşimi.",
    shortDesc_ru: "Превосходное сочетание роскоши и эстетики.",
    shortDesc_ky: "Байлыктын жана кооздуктун эң сонун айкалышы.",
    description_tr: "Altın varak detayları ve birinci sınıf nubuk kumaşıyla salonunuza saray havası katacak özel tasarım avangard koltuk takımı.",
    description_ru: "Дизайнерский авангардный диванный гарнитур с золотыми деталями и первоклассной нубуковой тканью придаст вашей гостиной королевскую атмосферу.",
    description_ky: "Алтын жалатылган деталдары жана биринчи класстагы нубук кездемеси менен конок бөлмөңүзгə падышалык маанай тартуулай турган өзгөчə дизайн диван топтому.",
    price: 85000,
    discountPrice: 79000,
    isDiscountPermanent: true,
    stockCode: "BLN-AVN-01",
    stockQty: 5,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 5.0,
    reviewCount: 2
  },
  {
    id: "prod-2",
    slug: "loft-kose-koltuk",
    name_tr: "Loft Köşe Koltuk",
    name_ru: "Угловой Диван Loft",
    name_ky: "Loft Бурчтук Диваны",
    shortDesc_tr: "Modern salonlar için fonksiyonel köşe koltuk.",
    shortDesc_ru: "Функциональный угловой диван для современных гостиных.",
    shortDesc_ky: "Заманбап конок бөлмөлөр үчүн функционалдуу бурчтук диvan.",
    description_tr: "Geniş oturma alanı, modüler yapısı ve yatak olabilme özelliğiyle loft köşe koltuk konfor ve şıklığı bir arada sunar.",
    description_ru: "Угловой диван Loft предлагает комфорт и стиль благодаря просторной зоне отдыха, модульной структуре и возможности трансформации в кровать.",
    description_ky: "Кенен отургуч аянты, модулдук түзүлүшү жана керебетке айлануу өзгөчөлүгү менен Loft бурчтук диваны ыңгайлуулукту жана кооздукту сунуштайт.",
    price: 49000,
    discountPrice: null,
    stockCode: "BLN-LFT-KOS",
    stockQty: 8,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 3
  },
  {
    id: "prod-7",
    slug: "retro-ahsap-tv-unitesi",
    name_tr: "Retro Ahşap TV Ünitesi",
    name_ru: "Ретро Деревянная Тумба Под ТВ",
    name_ky: "Ретро Жыгач Сыналгы Тумбасы",
    shortDesc_tr: "Doğal meşe kaplama retro TV sehpası.",
    shortDesc_ru: "Тумба под ТВ в стиле ретро с отделкой из натурального дуба.",
    shortDesc_ky: "Табигый эмен каптамалуу ретро сыналгы тумбасы.",
    description_tr: "Geniş çekmeceleri ve şık ahşap ayakları ile salonunuza nostaljik bir hava katacak TV ünitesi.",
    description_ru: "Тумба под ТВ с вместительными ящиками и элегантными деревянными ножками придаст вашей гостиной ностальгическую атмосферу.",
    description_ky: "Кенен суурмалары жана кооз жыгач буттары менен конок бөлмөңүзгө ностальгиялык маанай тартуулай турган сыналгы тумбасы.",
    price: 18000,
    discountPrice: 15500,
    isDiscountPermanent: true,
    stockCode: "BLN-RTR-TV",
    stockQty: 10,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 4
  },
  {
    id: "prod-8",
    slug: "chester-deri-koltuk",
    name_tr: "Chester Suni Deri Koltuk",
    name_ru: "Кожаный Диван Честерфилд",
    name_ky: "Булгаары Честер Диваны",
    shortDesc_tr: "Klasik chesterfield tarzı lüks koltuk.",
    shortDesc_ru: "Классический роскошный диван в стиле Честерфилд.",
    shortDesc_ky: "Классикалык честерфилд стилиндеги люкс диван.",
    description_tr: "Kapitone işçiliği ve kaliteli deri dokusuyla ofis ve salonlar için ağırbaşlı bir şıklık.",
    description_ru: "Строгая элегантность для офиса и гостиной с капитоне и качественной кожаной текстурой.",
    description_ky: "Кеңсе жана конок бөлмөлөрү үчүн сапаттуу жасалган классикалык честерфилд диваны.",
    price: 65000,
    discountPrice: null,
    stockCode: "BLN-CHS-DR",
    stockQty: 4,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.9,
    reviewCount: 3
  },
  {
    id: "prod-9",
    slug: "modern-buklet-berjer",
    name_tr: "Modern Buklet Berjer",
    name_ru: "Современное Кресло Букле",
    name_ky: "Заманбап Буклет Бержери",
    shortDesc_tr: "Yumuşacık buklet kumaşlı tekli koltuk.",
    shortDesc_ru: "Кресло из мягкой ткани букле.",
    shortDesc_ky: "Жумшак buklet кездемесинен жасалган бир кишилик отургуч.",
    description_tr: "Okuma köşeleriniz için ergonomik sırt desteği ve modern yuvarlak hatlara sahip lüks berjer.",
    description_ru: "Эргономичная спинка и современные округлые линии для вашего уголка чтения.",
    description_ky: "Китеп окуу бурчуңуз үчүн эргономикалык арткы таянычы жана заманбап тегерек сызыктары бар кооз бержер.",
    price: 14500,
    discountPrice: 12900,
    isDiscountPermanent: true,
    stockCode: "BLN-BKL-BRJ",
    stockQty: 15,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 9
  },
  {
    id: "prod-10",
    slug: "kutuk-orta-sehpa",
    name_tr: "Kütük Doğal Orta Sehpa",
    name_ru: "Журнальный Столик из Натурального Спила",
    name_ky: "Табигый Жыгач Орто Сехпасы",
    shortDesc_tr: "Ceviz ağacından doğal kütük orta sehpa.",
    shortDesc_ru: "Журнальный столик из натурального спила грецкого ореха.",
    shortDesc_ky: "Жаңгак жыгачынан жасалган табигый орто үстөл.",
    description_tr: "Doğal ağaç formunun korunduğu, epoksi dolgulu ve endüstriyel metal ayaklı benzersiz bir tasarım.",
    description_ru: "Уникальный дизайн с сохранением натуральной формы дерева, эпоксидной смолой и индустриальными металлическими ножками.",
    description_ky: "Табигый жыгач формасы сакталган, эпоксиддик куюлган жана өнөр жай металл буттары бар өзгөчө дизайн.",
    price: 9800,
    discountPrice: null,
    stockCode: "BLN-KTK-SEH",
    stockQty: 6,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 5
  },
  {
    id: "prod-11",
    slug: "papatya-tekli-koltuk",
    name_tr: "Papatya Tekli Koltuk",
    name_ru: "Кресло Ромашка",
    name_ky: "Папатя Бир Кишилик Отургучу",
    shortDesc_tr: "İskandinav tasarımlı renkli tekli koltuk.",
    shortDesc_ru: "Кресло в скандинавском стиле.",
    shortDesc_ky: "Скандинавия дизайнындагы түркүн түстүү бир кишилик отургуч.",
    price: 11000,
    discountPrice: 9500,
    isDiscountPermanent: true,
    stockCode: "BLN-PAP-TK",
    stockQty: 18,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.4,
    reviewCount: 12
  },
  {
    id: "prod-12",
    slug: "venedik-luks-koltuk-takimi",
    name_tr: "Venedik Lüks Koltuk Takımı",
    name_ru: "Роскошный Диван Венеция",
    name_ky: "Венеция Люкс Диван Топтому",
    shortDesc_tr: "İtalyan kadife kumaşlı lüks oturma grubu.",
    shortDesc_ru: "Роскошная гостиная группа с итальянским бархатом.",
    shortDesc_ky: "Италия бархат кездемесинен жасалган люкс диван топтому.",
    description_tr: "Yüksek yoğunluklu sünger yapısı ve pirinç metal detayları ile konforu zirvede yaşayın.",
    description_ru: "Почувствуйте максимальный комфорт благодаря высокоплотному поролону и латунным металлическим деталям.",
    description_ky: "Жогорку тыгыздыктагы поролон жана латунь металл деталдары менен максималдуу ыңгайлуулукту сезиңиз.",
    price: 92000,
    discountPrice: 87000,
    isDiscountPermanent: true,
    stockCode: "BLN-VND-LK",
    stockQty: 3,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 5.0,
    reviewCount: 1
  },
  {
    id: "prod-41",
    slug: "modern-minimalist-tv-sehpasi",
    name_tr: "Modern Minimalist TV Sehpası",
    name_ru: "Минималистичная Тумба Под ТВ",
    name_ky: "Минималистикалык Сыналгы Тумбасы",
    shortDesc_tr: "Mat beyaz ve ahşap uyumlu TV ünitesi.",
    shortDesc_ru: "Тумба под ТВ в белом и деревянном цветах.",
    shortDesc_ky: "Ак жана жыгач түстөгү сыналгы тумбасы.",
    price: 13500,
    discountPrice: null,
    stockCode: "BLN-MNM-TV",
    stockQty: 14,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 3
  },
  {
    id: "prod-42",
    slug: "trend-orta-sehpa-seti",
    name_tr: "Trend Zigon Orta Sehpa Seti",
    name_ru: "Набор Журнальных Столиков",
    name_ky: "Үчтүү Орто Үстөл Топтому",
    shortDesc_tr: "3'lü iç içe geçebilen metal ayaklı sehpa.",
    shortDesc_ru: "Набор из 3 столов на металлических ножках.",
    shortDesc_ky: "Металл буттуу 3 даанадан турган орто үстөл топтому.",
    price: 4500,
    discountPrice: 3900,
    isDiscountPermanent: true,
    stockCode: "BLN-TRN-SEH",
    stockQty: 25,
    isPublished: true,
    categoryId: "cat-oturma",
    images: [{ path: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.3,
    reviewCount: 7
  },

  // ---- 2. YATAK ODASI (11-18) ----
  {
    id: "prod-3",
    slug: "mabel-yatak-odasi-takimi",
    name_tr: "Mabel Yatak Odası Takımı",
    name_ru: "Спальный Гарнитур Mabel",
    name_ky: "Mabel Уктоочу Бөлмө Топтому",
    shortDesc_tr: "Sade ve şık çizgilerle yatak odanızda huzur.",
    shortDesc_ru: "Покой в вашей спальне с простыми и элегантными линиями.",
    shortDesc_ky: "Уктоочу бөлмөңүздө жөнөкөй жана назик сызыктар менен тынчтык.",
    description_tr: "Gardırop (sürgülü kapak), bazalı karyola, iki adet komodin ve aynalı şifonyerden oluşan Mabel takımı, yatak odanıza ferahlık getirecek.",
    description_ru: "Гарнитур Mabel, состоящий из шкафа-купе, кровати с подъемным механизмом, двух прикроватных тумбочек и комода с зеркалом, принесет свежесть в вашу спальню.",
    description_ky: "Шкаф-kupe, көтөрүлүүчү kerebet, eki тумбочка жана күзгүлүү комоддон турган Mabel топтому уктоочу бөлмөңүзгө кенендик алып келет.",
    price: 95000,
    discountPrice: 89000,
    isDiscountPermanent: false,
    discountStart: "2026-06-01",
    discountEnd: "2026-08-31",
    stockCode: "BLN-MBL-YTK",
    stockQty: 3,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 4
  },
  {
    id: "prod-13",
    slug: "gardrop-sliding-door",
    name_tr: "Sürgülü Lüks Gardırop",
    name_ru: "Шкаф-Купе Лакшери",
    name_ky: "Шкаф-Kупе Люкс",
    shortDesc_tr: "Aynalı ve sürgülü kapaklı büyük gardırop.",
    shortDesc_ru: "Большой шкаф-купе с зеркалом.",
    shortDesc_ky: "Күзгүлүү жана жылма эшиктүү чоң гардероб.",
    description_tr: "Geniş iç hacim, LED aydınlatmalı askı boruları ve pantolonluk bölmeleriyle kıyafetleriniz için maksimum düzen.",
    description_ru: "Вместительный шкаф со встроенной светодиодной подсветкой вешалок и секциями для брюк.",
    description_ky: "Кенен ички көлөмү, жарыктандырылган илгичтери жана шым үчүн атайын бөлүмдөрү бар шкаф.",
    price: 42000,
    discountPrice: 38000,
    isDiscountPermanent: true,
    stockCode: "BLN-GRD-SLD",
    stockQty: 5,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 6
  },
  {
    id: "prod-14",
    slug: "ahsap-komodin-ikili",
    name_tr: "Ahşap Komodin Seti (İkili)",
    name_ru: "Комплект Прикроватных Тумбочек (2 шт.)",
    name_ky: "Жыгач Тумбочка Топтому (2 даана)",
    shortDesc_tr: "İki çekmeceli doğal ahşap komodin.",
    shortDesc_ru: "Прикроватные тумбочки из натурального дерева с двумя ящиками.",
    shortDesc_ky: "Эки суурмалуу табигый жыгач тумбочка топтому.",
    price: 8900,
    discountPrice: 7900,
    isDiscountPermanent: true,
    stockCode: "BLN-KOM-SET",
    stockQty: 12,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 8
  },
  {
    id: "prod-15",
    slug: "ortopedik-cift-kisilik-yatak",
    name_tr: "Premium Ortopedik Çift Kişilik Yatak",
    name_ru: "Ортопедический Двуспальный Матрас Premium",
    name_ky: "Premium Эки Кишилик Ортопедиялык Матрац",
    shortDesc_tr: "Pocket yay sistemli rahat çift kişilik yatak.",
    shortDesc_ru: "Двуспальный матрас с системой независимых пружин Pocket.",
    shortDesc_ky: "Pocket пружиналар системасы бар эки кишилик матрац.",
    price: 26000,
    discountPrice: 22000,
    isDiscountPermanent: true,
    stockCode: "BLN-MAT-DBL",
    stockQty: 10,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.9,
    reviewCount: 15
  },
  {
    id: "prod-16",
    slug: "kadife-yatak-basligi",
    name_tr: "Kadife Yatak Başlığı",
    name_ru: "Бархатное Изголовье Кровати",
    name_ky: "Бархат Керебет Баштыгы",
    shortDesc_tr: "Şık kapitone işlemeli kadife yatak başlığı.",
    shortDesc_ru: "Бархатное изголовье с классической стяжкой.",
    shortDesc_ky: "Классикалык каптамалуу бархат керебет баштыгы.",
    price: 7500,
    discountPrice: null,
    stockCode: "BLN-BAS-KDV",
    stockQty: 8,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 3
  },
  {
    id: "prod-17",
    slug: "aynali-sifonyer-mabel",
    name_tr: "Aynalı Şifonyer",
    name_ru: "Комод с Зеркалом",
    name_ky: "Күзгүлүү Комод",
    shortDesc_tr: "4 çekmeceli aynalı şifonyer ünitesi.",
    shortDesc_ru: "Комод с 4 ящиками и большим зеркалом.",
    shortDesc_ky: "4 суурмалуу жана чоң күзгүлүү комод.",
    price: 16500,
    discountPrice: 14900,
    isDiscountPermanent: true,
    stockCode: "BLN-SIF-AYN",
    stockQty: 7,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 5
  },
  {
    id: "prod-18",
    slug: "elbise-askiligi-ahsap",
    name_tr: "Ahşap Elbise Askılığı (Ayaklı)",
    name_ru: "Вешалка для Одежды Напольная",
    name_ky: "Жыгач Кийим Илгичи",
    shortDesc_tr: "Masif ahşap ayaklı elbise askılığı.",
    shortDesc_ru: "Напольная вешалка из массива дерева.",
    shortDesc_ky: "Табигый жыгачтан жасалган кийим илгичи.",
    price: 3400,
    discountPrice: 2900,
    isDiscountPermanent: true,
    stockCode: "BLN-ASK-AHS",
    stockQty: 20,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1582582621959-a0a27ff02428?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.3,
    reviewCount: 11
  },
  {
    id: "prod-43",
    slug: "modern-makyaj-masasi",
    name_tr: "Modern Led Işıklı Makyaj Masası",
    name_ru: "Туалетный Столик с Подсветкой",
    name_ky: "Жарыктандырылган Макияж Столу",
    shortDesc_tr: "Led aynalı ve çekmeceli makyaj masası.",
    shortDesc_ru: "Туалетный столик с LED подсветкой и ящиками.",
    shortDesc_ky: "LED күзгүсү жана суурмалары бар макияж столу.",
    price: 21000,
    discountPrice: 18900,
    isDiscountPermanent: true,
    stockCode: "BLN-MKY-LED",
    stockQty: 6,
    isPublished: true,
    categoryId: "cat-yatak",
    images: [{ path: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 4
  },

  // ---- 3. YEMEK ODASI (19-26) ----
  {
    id: "prod-4",
    slug: "hazel-ahsap-yemek-masasi",
    name_tr: "Hazel Ahşap Yemek Masası",
    name_ru: "Деревянный Обеденный Стол Hazel",
    name_ky: "Hazel Жыгач Тамактануучу Столу",
    shortDesc_tr: "Doğal ahşap dokusu ve metal ayakların uyumu.",
    shortDesc_ru: "Гармония текстуры натурального дерева и металлических ножек.",
    shortDesc_ky: "Табигый жыгач текстурасы менен metal буттардын шайкештиги.",
    description_tr: "Meşe kaplama dayanıklı üst tabla ve elektrostatik toz boyalı sağlam metal ayaklar ile tasarlanmış 6 kişilik lüks yemek masası.",
    description_ru: "Роскошный 6-местный обеденный стол с прочной дубовой столешницей и устойчивыми металлическими ножками с порошковым покрытием.",
    description_ky: "Эмен менен капталган бышык үстөл бети жана порошок менен сырдалgan металл буттары бар 6 кишилик люкс тамактануучу стол.",
    price: 24000,
    discountPrice: 19900,
    isDiscountPermanent: true,
    stockCode: "BLN-HZL-YMK",
    stockQty: 15,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 6
  },
  {
    id: "prod-19",
    slug: "mermer-yemek-masasi",
    name_tr: "Mermer Tablalı Yemek Masası",
    name_ru: "Обеденный Стол с Мраморной Столешницей",
    name_ky: "Мрамор Тамактануучу Столу",
    shortDesc_tr: "Gerçek mermer tablalı lüks yemek masası.",
    shortDesc_ru: "Роскошный обеденный стол из натурального мрамора.",
    shortDesc_ky: "Натуралдуу мрамордон жасалган люкс тамактануучу стол.",
    price: 48000,
    discountPrice: null,
    stockCode: "BLN-MRM-YMK",
    stockQty: 3,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.9,
    reviewCount: 2
  },
  {
    id: "prod-20",
    slug: "modern-sandalye-seti",
    name_tr: "Modern Sandalye Seti (4 Adet)",
    name_ru: "Комплект Модерн Стульев (4 шт.)",
    name_ky: "Заманбап Отургуч Топтому (4 даана)",
    shortDesc_tr: "Kumaş kaplı şık yemek masası sandalyeleri.",
    shortDesc_ru: "Стулья для столовой с тканевой обивкой.",
    shortDesc_ky: "Кездеме менен капталган кооз отургучтар.",
    price: 12000,
    discountPrice: 9900,
    isDiscountPermanent: true,
    stockCode: "BLN-SND-SET",
    stockQty: 20,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 14
  },
  {
    id: "prod-21",
    slug: "yemek-odasi-konsolu",
    name_tr: "Hazel Yemek Odası Konsolu",
    name_ru: "Буфет для Столовой Hazel",
    name_ky: "Hazel Тамактануучу Бөлмө Комоду",
    shortDesc_tr: "4 kapaklı şık ahşap konsol.",
    shortDesc_ru: "Элегантный деревянный буфет с 4 дверцами.",
    shortDesc_ky: "4 эшиктүү кооз жыгач комод.",
    price: 29000,
    discountPrice: 26500,
    isDiscountPermanent: true,
    stockCode: "BLN-HZL-KNS",
    stockQty: 8,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 5
  },
  {
    id: "prod-22",
    slug: "deri-bar-taburesi",
    name_tr: "Deri Ahşap Bar Taburesi",
    name_ru: "Барный Стул Кожаный",
    name_ky: "Булгаары Бар Отургучу",
    shortDesc_tr: "Ahşap ayaklı deri bar taburesi.",
    shortDesc_ru: "Барный стул на деревянных ножках с кожаным сиденьем.",
    shortDesc_ky: "Жыгач буттуу булгаары бар отургучу.",
    price: 4900,
    discountPrice: null,
    stockCode: "BLN-BAR-TAB",
    stockQty: 24,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.4,
    reviewCount: 8
  },
  {
    id: "prod-23",
    slug: "acilabilir-yemek-masasi",
    name_tr: "Açılabilir Ahşap Yemek Masası",
    name_ru: "Раздвижной Обеденный Стол",
    name_ky: "Ачылуучу Жыгач Столу",
    shortDesc_tr: "8 kişiye kadar açılabilen fonksiyonel masa.",
    shortDesc_ru: "Раздвижной стол, вмещающий до 8 человек.",
    shortDesc_ky: "8 кишиге чейин ачылуучу функционалдуу үстөл.",
    price: 32000,
    discountPrice: 28500,
    isDiscountPermanent: true,
    stockCode: "BLN-ACL-MAS",
    stockQty: 7,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 3
  },
  {
    id: "prod-44",
    slug: "kadife-sandalye-seti",
    name_tr: "Lüks Kadife Yemek Sandalyesi (2 Adet)",
    name_ru: "Бархатные Стулья для Столовой (2 шт.)",
    name_ky: "Бархат Тамактануучу Отургучтары (2 даана)",
    shortDesc_tr: "Gold metal ayaklı kadife sandalyeler.",
    shortDesc_ru: "Стулья с золотыми ножками и бархатной обивкой.",
    shortDesc_ky: "Алтын түстүү буттары бар бархат отургучтары.",
    price: 8500,
    discountPrice: 7500,
    isDiscountPermanent: true,
    stockCode: "BLN-SND-KDV",
    stockQty: 16,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 5
  },
  {
    id: "prod-45",
    slug: "rustik-ahsap-konsol",
    name_tr: "Rustik Masif Ahşap Konsol",
    name_ru: "Рустик Деревянный Буфет",
    name_ky: "Рустикалык Жыгач Комоду",
    shortDesc_tr: "Doğal eskitme ceviz ahşap konsol.",
    shortDesc_ru: "Буфет из массива дерева в деревенском стиле.",
    shortDesc_ky: "Табигый стилдеги жыгачтан жасалган комод.",
    price: 36000,
    discountPrice: null,
    stockCode: "BLN-RST-KNS",
    stockQty: 4,
    isPublished: true,
    categoryId: "cat-yemek",
    images: [{ path: "https://images.unsplash.com/photo-1603006905393-c91791e84d6b?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.9,
    reviewCount: 2
  },

  // ---- 4. CALISMA ODASI (27-31) ----
  {
    id: "prod-5",
    slug: "ergonomik-calisma-masasi",
    name_tr: "Ergonomik Çalışma Masası",
    name_ru: "Эргономичный Письменный Стол",
    name_ky: "Эргономикалык Жазуу Столу",
    shortDesc_tr: "Verimli çalışma alanları için tasarlandı.",
    shortDesc_ru: "Разработано для эффективных рабочих зон.",
    shortDesc_ky: "Натыйжалуу иш мейкиндиги үчүн иштелип чыккан.",
    description_tr: "Geniş masa tablası, entegre kablo kanalı ve üç çekmeceli kesonuyla evden çalışanlar ve öğrenciler için en konforlu deneyimi sunar.",
    description_ru: "Обеспечивает максимальный комфорт для удаленных работников и студентов благодаря просторной столешнице, кабель-каналу и тумбе с тремя ящиками.",
    description_ky: "Кенен үстөл бети, кабель өткөргүчү жана үч суурмалуу тумбочкасы менен үйдөн иштегендерге жана студенттерге эң ыңгайлуу шарт түзөт.",
    price: 15000,
    discountPrice: null,
    stockCode: "BLN-ERG-MAS",
    stockQty: 22,
    isPublished: true,
    categoryId: "cat-calisma",
    images: [{ path: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.2,
    reviewCount: 5
  },
  {
    id: "prod-24",
    slug: "metal-kitaplik-modern",
    name_tr: "Metal Kitaplık (Modern)",
    name_ru: "Металлический Книжный Шкаф",
    name_ky: "Металл Китеп Текчеси",
    shortDesc_tr: "Endüstriyel tasarımlı metal kitaplık.",
    shortDesc_ru: "Книжный шкаф в индустриальном стиле.",
    shortDesc_ky: "Индустриалдык дизайндагы металл китеп текчеси.",
    price: 8500,
    discountPrice: 7200,
    isDiscountPermanent: true,
    stockCode: "BLN-MET-KIT",
    stockQty: 15,
    isPublished: true,
    categoryId: "cat-calisma",
    images: [{ path: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 11
  },
  {
    id: "prod-25",
    slug: "ortopedik-ofis-koltugu",
    name_tr: "Ortopedik Ofis Çalışma Koltuğu",
    name_ru: "Ортопедическое Офисное Кресло",
    name_ky: "Ортопедиялык Кеңсе Отургучу",
    shortDesc_tr: "Bel destekli ayarlanabilir ofis koltuğu.",
    shortDesc_ru: "Регулируемое офисное кресло с поддержкой поясницы.",
    shortDesc_ky: "Белди таяган жөнгө салынуучу кеңсе отургучу.",
    price: 11500,
    discountPrice: 9800,
    isDiscountPermanent: true,
    stockCode: "BLN-OFS-KLT",
    stockQty: 18,
    isPublished: true,
    categoryId: "cat-calisma",
    images: [{ path: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 20
  },
  {
    id: "prod-26",
    slug: "kose-calisma-masasi",
    name_tr: "Köşe Çalışma Masası",
    name_ru: "Угловой Письменный Стол",
    name_ky: "Бурчтук Жазуу Столу",
    shortDesc_tr: "L şeklinde yer tasarrufu sağlayan çalışma masası.",
    shortDesc_ru: "L-образный угловой стол для экономии пространства.",
    shortDesc_ky: "Орун үнөмдөөчү L-формасындагы бурчтук жазуу столу.",
    price: 19800,
    discountPrice: null,
    stockCode: "BLN-KOS-MAS",
    stockQty: 10,
    isPublished: true,
    categoryId: "cat-calisma",
    images: [{ path: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.4,
    reviewCount: 4
  },
  {
    id: "prod-27",
    slug: "ahsap-duvar-rafi",
    name_tr: "Ahşap Duvar Rafı (3'lü Set)",
    name_ru: "Настенные Полки из Дерева (3 шт.)",
    name_ky: "Жыгач Дубал Текчеси (3 даана)",
    shortDesc_tr: "Gizli montajlı dekoratif ahşap raflar.",
    shortDesc_ru: "Декоративные настенные полки со скрытым крепежом.",
    shortDesc_ky: "Жашыруун бекитилүүчү декоративдүү жыгач текчелер.",
    price: 3200,
    discountPrice: 2500,
    isDiscountPermanent: true,
    stockCode: "BLN-DVR-RAF",
    stockQty: 30,
    isPublished: true,
    categoryId: "cat-calisma",
    images: [{ path: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 16
  },

  // ---- 5. GENC ODASI (32-36) ----
  {
    id: "prod-29",
    slug: "genc-calisma-masasi",
    name_tr: "Genç Odası Çalışma Masası",
    name_ru: "Письменный Стол для Подростка",
    name_ky: "Өспүрүм Иш Столу",
    shortDesc_tr: "Renkli ve fonksiyonel genç çalışma masası.",
    shortDesc_ru: "Яркий и функциональный стол для подростковой комнаты.",
    shortDesc_ky: "Түркүн түстүү жана функционалдуу өспүрүм иш столу.",
    price: 11000,
    discountPrice: 8900,
    isDiscountPermanent: true,
    stockCode: "BLN-GNC-MAS",
    stockQty: 12,
    isPublished: true,
    categoryId: "cat-genc",
    images: [{ path: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 7
  },
  {
    id: "prod-30",
    slug: "tek-kisilik-baza",
    name_tr: "Tek Kişilik Sandıklı Baza ve Başlık",
    name_ru: "Односпальная Кровать с Ящиком",
    name_ky: "Бир Кишилик Сандыктуу Керебет",
    shortDesc_tr: "Geniş sandıklı tek kişilik baza seti.",
    shortDesc_ru: "Односпальная кровать с вместительным подъемным ящиком.",
    shortDesc_ky: "Кенен сандыктуу бир кишилик керебет топтому.",
    price: 19500,
    discountPrice: 17500,
    isDiscountPermanent: true,
    stockCode: "BLN-GNC-BAZ",
    stockQty: 8,
    isPublished: true,
    categoryId: "cat-genc",
    images: [{ path: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 3
  },
  {
    id: "prod-31",
    slug: "genc-odasi-gardrop",
    name_tr: "Genç Odası 3 Kapaklı Gardırop",
    name_ru: "3-дверный Шкаф для Молодежи",
    name_ky: "Өспүрүмдөр үчүн 3 Эшиктүү Шкаф",
    shortDesc_tr: "Çekmeceli 3 kapaklı elbise dolabı.",
    shortDesc_ru: "3-дверный платяной шкаф с выдвижными ящиками.",
    shortDesc_ky: "Суурмалары бар 3 эшиктүү кийим шкафы.",
    price: 26000,
    discountPrice: null,
    stockCode: "BLN-GNC-GRD",
    stockQty: 6,
    isPublished: true,
    categoryId: "cat-genc",
    images: [{ path: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 2
  },
  {
    id: "prod-32",
    slug: "renkli-genc-kitaplik",
    name_tr: "Renkli Genç Kitaplık",
    name_ru: "Яркий Книжный Шкаф для Подростков",
    name_ky: "Түркүн Түстүү Китеп Текчеси",
    shortDesc_tr: "Genç odalarına uygun hareketli kitaplık.",
    shortDesc_ru: "Книжная полка для детских и молодежных комнат.",
    shortDesc_ky: "Өспүрүмдөрдүн бөлмөсүнө ылайыктуу китеп текчеси.",
    price: 6800,
    discountPrice: 5900,
    isDiscountPermanent: true,
    stockCode: "BLN-GNC-KIT",
    stockQty: 15,
    isPublished: true,
    categoryId: "cat-genc",
    images: [{ path: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.4,
    reviewCount: 8
  },
  {
    id: "prod-33",
    slug: "cocuk-oyun-masasi",
    name_tr: "Çocuk Oyun ve Çalışma Masası",
    name_ru: "Детский Игровой Стол",
    name_ky: "Балдардын Оюн жана Иш Столу",
    shortDesc_tr: "İki adet sandalyesiyle çocuk oyun masası.",
    shortDesc_ru: "Детский стол в комплекте с двумя стульями.",
    shortDesc_ky: "Эки отургучу менен балдардын оюн үстөлү.",
    price: 7500,
    discountPrice: null,
    stockCode: "BLN-COK-MAS",
    stockQty: 10,
    isPublished: true,
    categoryId: "cat-genc",
    images: [{ path: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 5
  },

  // ---- 6. AKSESUARLAR (37-40+) ----
  {
    id: "prod-6",
    slug: "dekoratif-bronz-ayna",
    name_tr: "Dekoratif Bronz Ayna",
    name_ru: "Декоративное Бронзовое Зеркало",
    name_ky: "Декоративдүү Бронза Күзгүсү",
    shortDesc_tr: "Salonunuzun havasını değiştirecek şık ayna.",
    shortDesc_ru: "Стильное зеркало, которое изменит атмосферу вашей гостиной.",
    shortDesc_ky: "Конок бөлмөңүздүн маанайын өзгөrtө турган стилдүү күзгү.",
    description_tr: "Asimetrik kesim bronz renkli ayna ve mat siyah boyalı çelik çerçeve tasarımı ile evinizin her köşesine zarafet katacak dekoratif parça.",
    description_ru: "Декоративное зеркало асимметричной формы бронзового оттенка в матовой черной стальной раме добавит изысканности любому уголку вашего дома.",
    description_ky: "Асимметриялык formaдагы бронза түстөгү күзгү жана күңүрт кара болот алкак дизайны менен үйүңүздүн каалаган бурчуна көрк кошо турган жасалга.",
    price: 8500,
    discountPrice: 6900,
    isDiscountPermanent: true,
    stockCode: "BLN-DKR-AYN",
    stockQty: 30,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.9,
    reviewCount: 8
  },
  {
    id: "prod-34",
    slug: "modern-metal-lambader",
    name_tr: "Modern Metal Lambader",
    name_ru: "Современный Металлический Торшер",
    name_ky: "Заманбап Металл Ламбадери",
    shortDesc_tr: "Gold detaylı şık ayaklı lamba.",
    shortDesc_ru: "Стильный напольный торшер с золотыми деталями.",
    shortDesc_ky: "Алтын деталдары бар кооз лампа.",
    price: 4500,
    discountPrice: null,
    stockCode: "BLN-MOD-LMB",
    stockQty: 25,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.6,
    reviewCount: 15
  },
  {
    id: "prod-35",
    slug: "seramik-abajur-seti",
    name_tr: "Seramik Abajur Seti (2 Adet)",
    name_ru: "Комплект Керамических Настольных Ламп (2 шт.)",
    name_ky: "Керамика Абажур Топтому (2 даана)",
    shortDesc_tr: "Yatak odası için şık seramik abajurlar.",
    shortDesc_ru: "Элегантные прикроватные лампы для спальни.",
    shortDesc_ky: "Уктоочу бөлмө үчүн кооз керамикалык абажурлар.",
    price: 5800,
    discountPrice: 4900,
    isDiscountPermanent: true,
    stockCode: "BLN-SRM-ABJ",
    stockQty: 14,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 5
  },
  {
    id: "prod-36",
    slug: "yumusak-pelus-hali",
    name_tr: "Yumuşak Peluş Halı",
    name_ru: "Мягкий Плюшевый Ковер",
    name_ky: "Жумшак Килем",
    shortDesc_tr: "160x230 cm yıkanabilir yumuşak halı.",
    shortDesc_ru: "Моющийся мягкий ковер размером 160x230 см.",
    shortDesc_ky: "Жуула турган жумшак килем 160x230 см.",
    price: 8200,
    discountPrice: 6900,
    isDiscountPermanent: true,
    stockCode: "BLN-PLS-HAL",
    stockQty: 10,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 9
  },
  {
    id: "prod-37",
    slug: "ahsap-duvar-saati",
    name_tr: "Ahşap Eskitme Duvar Saati",
    name_ru: "Настенные Часы из Состаренного Дерева",
    name_ky: "Жыгач Дубал Сааты",
    shortDesc_tr: "50 cm çapında sessiz akar mekanizmalı saat.",
    shortDesc_ru: "Часы диаметром 50 см с бесшумным механизмом.",
    shortDesc_ky: "Диаметри 50 см болгон тынч иштеген дубал сааты.",
    price: 3800,
    discountPrice: null,
    stockCode: "BLN-AHS-SAT",
    stockQty: 20,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.3,
    reviewCount: 6
  },
  {
    id: "prod-38",
    slug: "seramik-vazo-seti",
    name_tr: "İskandinav Seramik Vazo Seti (3'lü)",
    name_ru: "Набор Керамических Ваз (3 шт.)",
    name_ky: "Керамика Ваза Топтому (3 даана)",
    shortDesc_tr: "Mat kaplamalı modern vazo dekorasyonu.",
    shortDesc_ru: "Матовые современные вазы для интерьера.",
    shortDesc_ky: "Матовый заманбап вазалар топтому.",
    price: 2900,
    discountPrice: 2400,
    isDiscountPermanent: true,
    stockCode: "BLN-SRM-VAZ",
    stockQty: 40,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.8,
    reviewCount: 13
  },
  {
    id: "prod-39",
    slug: "dekoratif-minder-seti",
    name_tr: "Dekoratif Kadife Kırlent Minder Seti",
    name_ru: "Набор Декоративных Подушек (4 шт.)",
    name_ky: "Жумшак Декоративдүү Жаттыктар",
    shortDesc_tr: "4'lü fermuarlı yumuşak kadife minder kılıfı.",
    shortDesc_ru: "Комплект из 4 вельветовых чехлов на молнии.",
    shortDesc_ky: "Сыдырмалуу 4 даана жаттык каптары.",
    price: 1900,
    discountPrice: null,
    stockCode: "BLN-MND-KDV",
    stockQty: 50,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.5,
    reviewCount: 18
  },
  {
    id: "prod-40",
    slug: "metal-duvar-panosu",
    name_tr: "Metal Duvar Dekoru (Hayat Ağacı)",
    name_ru: "Металлическое Панно Древо Жизни",
    name_ky: "Металл Дубал Декору",
    shortDesc_tr: "70x70 cm boyutunda lazer kesim duvar dekoru.",
    shortDesc_ru: "Лазерная резка по металлу размером 70x70 см.",
    shortDesc_ky: "Лазер менен кесилген металл дубал жасалгасы.",
    price: 4900,
    discountPrice: 4200,
    isDiscountPermanent: true,
    stockCode: "BLN-MTL-PAN",
    stockQty: 15,
    isPublished: true,
    categoryId: "cat-aksesuar",
    images: [{ path: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800", isPrimary: true, order: 0 }],
    averageRating: 4.7,
    reviewCount: 11
  }
];

const defaultBlogPosts = [
  {
    id: "blog-1",
    slug: "2026-ev-dekorasyon-trendleri",
    title_tr: "2026 Ev Dekorasyon Trendleri: Doğallık ve Teknoloji Bir Arada",
    title_ru: "Тенденции Домашнего Декора 2026 года: Природа и Технологии",
    title_ky: "2026 Үй жасалгалоо тренддери: Табигыйлык жана Технология",
    excerpt_tr: "Bu yıl evlerimizde ahşap dokuların sıcaklığını akıllı mobilyalarla birleştiriyoruz.",
    excerpt_ru: "В этом году мы сочетаем тепло деревянных текстур с умной мебелью в наших домах.",
    excerpt_ky: "Бул жылы биз үйлөрүбүздө жыгач текстурасынын жылуулугун акылдуу эмеректер менен айкалыштырабыз.",
    content_tr: "Ev dekorasyonunda yeni bir çağ başlıyor. Sürdürülebilirlik odağında, doğal meşe ve ceviz kaplamalar, ev otomasyon sistemlerine entegre çalışma ve dinlenme köşeleriyle buluşuyor. Pastel tonların hakim olacağı 2026 sezonunda minimalizm ama aynı zamanda konfor en önemli önceliğimiz olacak...",
    content_ru: "Начинается новая эра в декоре дома. Особое внимание уделяется экологичности: натуральный шпон дуба и ореха сочетается с рабочими уголками и зонами отдыха, интегрированными в системы домашней автоматизации. В сезоне 2026 года, где будут преобладать пастельные тона, минимализм и в то же время комфорт станут нашими важнейшими приоритетами...",
    content_ky: "Үй жасалгасында жаңы доор башталууда. Табигый эмен жана жаңгак каптамалары үй автоматизация системаларына интеграцияланган жумуш жана эс алуу бурчтары менен айкалышат. Пастелдик тондор басымдуулук кыла турган 2026-жылдын сезонунда minimalizm жана ошоll ele учурда ыңгайлуулук эң негизги артыкчылык болуп калат...",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    publishedAt: "2026-06-15T12:00:00Z",
    createdAt: "2026-06-15T12:00:00Z",
    isPublished: true,
  },
  {
    id: "blog-2",
    slug: "ahsap-mobilya-bakimi-nasil-yapilir",
    title_tr: "Ahşap Mobilya Bakımı Nasıl Yapılır? Püf Noktaları",
    title_ru: "Как ухаживать за деревянной мебелью? Советы и хитрости",
    title_ky: "Жыгач эмеректи кантип күтүү керек? Маанилүү кеңештер",
    excerpt_tr: "Ahşap mobilyalarınızın ömrünü uzatacak doğal bakım tüyoları ve temizlik rehberi.",
    excerpt_ru: "Советы по натуральному уходу и руководство по очистке, которые продлят срок службы вашей деревянной мебели.",
    excerpt_ky: "Жыгач эмерегиңizдин өмүрүн узарта турган табигый күтүү кеңешteri ve тазалоо колдонмосу.",
    content_tr: "Ahşap mobilyalar yaşayan elementlerdir. Kimyasal temizleyiciler yerine nemli bez ve zeytinyağı karışımı kullanarak cilasını koruyabilir, doğrudan güneş ışığından uzak tutarak çatlamaların önüne geçebilirsiniz. Yılda bir kez yapacağınız doğal balmumu bakımı mobilyalarınızı ilk günkü parlaklığına kavuşturur...",
    content_ru: "Деревянная мебель — это живые элементы. Вместо химических чистящих средств можно использовать смесь влажной ткани и оливкового масла для защиты ее лака, а также держать ее вдали от прямых солнечных лучей для предотвращения растрескивания. Натуральный уход с воском раз в год вернет вашей мебели первоначальный блеск...",
    content_ky: "Жыгач эмеректер тирүү элементтер болуп саláт. Химиялык тазалоочу каражаттардин ордуна нымдуу чүпүрөк жана зайтун майынын аралашмасын колдонуп, анын боёgun сактап каla аласыз. Ошондой ele жарака ketпеshi үчүн күн нурунан алыс кармоо керек. Жылыna бир жолу табигый аары мому менен күтүү эмерегиңizди биринчи күнкүдөй жаркыратат...",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800",
    publishedAt: "2026-05-20T10:00:00Z",
    createdAt: "2026-05-20T10:00:00Z",
    isPublished: true,
  }
];

const defaultCoupons = [
  { id: "coup-1", code: "WELCOME10", type: "percentage", value: 10, isActive: true },
  { id: "coup-2", code: "SUMMER500", type: "fixed", value: 500, isActive: true },
  { id: "coup-3", code: "ADMIN100", type: "percentage", value: 100, isActive: false }
];

const defaultDiscounts = [
  { id: "disc-1", name: "Yaz Kampanyası", type: "percentage", value: 15, categoryId: "cat-oturma", isActive: true },
  { id: "disc-2", name: "Aksesuar Fırsatı", type: "fixed", value: 500, categoryId: "cat-aksesuar", isActive: true }
];

const defaultReviews = [
  { id: "rev-1", productId: "prod-1", userId: "user-cust", userName: "Aleksey Smirnov", rating: 5, comment: "Harika bir takım, kumaş kalitesi inanılmaz güzel! Çok teşekkürler.", isApproved: true, createdAt: "2026-06-10T14:30:00Z" },
  { id: "rev-2", productId: "prod-1", userId: "user-guest", userName: "Eliza K.", rating: 5, comment: "Очень довольна покупкой. Выглядит богато и стильно.", isApproved: true, createdAt: "2026-06-12T09:15:00Z" },
  { id: "rev-3", productId: "prod-2", userId: "user-cust", userName: "Ahmet Y.", rating: 4, comment: "Koltuk gayet rahat ve fonksiyonel. Kurulumu da kolay yapıldı.", isApproved: true, createdAt: "2026-06-18T16:00:00Z" },
  { id: "rev-4", productId: "prod-4", userId: "user-cust", userName: "Mariya P.", rating: 5, comment: "Замечательный деревянный стол. Очень прочный и красивый.", isApproved: false, createdAt: "2026-06-20T11:45:00Z" }
];

const defaultQuestions = [
  { id: "q-1", productId: "prod-1", userId: "user-cust", userName: "Dmitry N.", question: "Koltuk takımının başka renk seçenekleri var mı?", answer: "Evet, gri ve vizon renk seçenekleri de mevcuttur. Detaylar için whatsapp hattımızdan ulaşabilirsiniz.", createdAt: "2026-06-11T10:00:00Z" },
  { id: "q-2", productId: "prod-3", userId: "user-cust", userName: "Bünyamin T.", question: "Yatak odası bazalı mı yoksa normal karyola mı?", answer: "Takımımız standart olarak kendinden bazalı (sandıklı) yatak kasası ile gelmektedir.", createdAt: "2026-06-14T08:20:00Z" },
  { id: "q-3", productId: "prod-4", userId: "user-guest", userName: "Saltanat K.", question: "Стол раздвижной или нет?", answer: null, createdAt: "2026-06-21T13:10:00Z" }
];

const defaultSettings = [
  { key: "phone", value: "+996 555 123 456" },
  { key: "address", value: "Bishkek, Kyrgyzstan, Chuy Ave 123" },
  { key: "email", value: "info@belenaymobilya.com" },
  { key: "instagram", value: "https://instagram.com/belenaymobilya" },
  { key: "facebook", value: "https://facebook.com/belenaymobilya" },
  { key: "working_hours", value: "Pazartesi - Cumartesi: 09:00 - 19:00" },
  { key: "shipping_cost", value: "1500" },
  { key: "free_shipping_limit", value: "30000" }
];

const defaultUsers = [
  { id: "1", email: "admin@belenay.com", firstName: "Belenay", lastName: "Admin", role: "admin", phone: "+905555555555", gender: "other" },
  { id: "user-cust", email: "user@belenay.com", firstName: "Ali", lastName: "Veli", role: "customer", phone: "+996777111222", gender: "male" }
];

const defaultAccountingEmployees = [
  { id: "emp-1", name: "Murat Ustabaşı", role: "Ahşap Ustası", salary: 35000, phone: "+996 555 999 888", isActive: true },
  { id: "emp-2", name: "Gizem Yılmaz", role: "İç Mimar", salary: 40000, phone: "+996 555 777 666", isActive: true },
  { id: "emp-3", name: "Aslanbek K.", role: "Sevkiyat Sorumlusu", salary: 28000, phone: "+996 555 555 444", isActive: true }
];

const defaultAccounting = [
  { id: "acc-1", type: "income", category: "sales", amount: 120000, description: "Avangard Koltuk Takımı Satışı", date: "2026-06-18" },
  { id: "acc-2", type: "expense", category: "salary", amount: 40000, description: "Gizem Y. Maaş Ödemesi", date: "2026-06-15" },
  { id: "acc-3", type: "expense", category: "material", amount: 25000, description: "Ceviz Kereste Alımı", date: "2026-06-12" },
  { id: "acc-4", type: "income", category: "sales", amount: 49000, description: "Loft Köşe Koltuk Satışı", date: "2026-06-20" }
];

const defaultContactMessages = [
  { id: "msg-1", name: "Zuhra A.", email: "zuhra@mail.ru", subject: "Bayilik Hakkında", message: "Belenay Mobilya ürünlerini Oş şehrinde satmak istiyoruz. Bayilik şartlarınızı iletebilir misiniz?", createdAt: "2026-06-19T15:20:00Z" },
  { id: "msg-2", name: "Kamil Bey", email: "kamil@gmail.com", subject: "Özel Ölçü Sipariş", message: "Loft Köşe koltuğu 320x240 cm ölçülerinde yapabilir misiniz? Fiyat farkı ne kadar olur?", createdAt: "2026-06-21T09:40:00Z" }
];

const defaultSpecialPages = [
  { id: "sp-1", slug: "about-us", title_tr: "Hakkımızda", title_ru: "О нас", title_ky: "Биз жөнүндө", content_tr: "Belenay Mobilya uzun yıllardır yüksek kaliteli ahşap ve döşemeli mobilyalar üretmektedir...", content_ru: "Belenay Mobilya производит качественную деревянную и мягкую мебель на протяжении многих лет...", content_ky: "Belenay Mobilya көп жылдар бою жогорку сапаттагы жыгач жана жумшак эмеректерди чыгарып келет...", isActive: true },
  { id: "sp-2", slug: "privacy-policy", title_tr: "Gizlilik Politikası", title_ru: "Политика конфиденциальности", title_ky: "Купуялык саясаты", content_tr: "Kişisel verileriniz bizimle güvendedir...", content_ru: "Ваши персональные данные в безопасности с нами...", content_ky: "Сиздин купуя маалыматыңыз биз менен коопсуз...", isActive: true }
];

const defaultOrders = [
  {
    id: "ord-1",
    status: "COMPLETED",
    totalAmount: 85000,
    address: "Bishkek, Kievskaya Str. 45, App 12",
    phone: "+996 555 111 222",
    receiptPath: "",
    adminNote: "Müşteriye teslim edildi, kurulum tamamlandı.",
    couponCode: "WELCOME10",
    discountAmount: 8500,
    createdAt: "2026-06-10T14:30:00Z",
    updatedAt: "2026-06-11T12:00:00Z",
    userId: "user-cust",
    user: { name: "Ali Veli", email: "user@belenay.com" },
    orderItems: [
      { id: "oi-1", productId: "prod-1", qty: 1, price: 85000, productName_tr: "Belenay Avangard Koltuk Takımı", productName_ru: "Авангардный Диванный Гарнитур Belenay", productName_ky: "Belenay Авангард Диван Топтому" }
    ]
  },
  {
    id: "ord-2",
    status: "PENDING_APPROVAL",
    totalAmount: 24000,
    address: "Karakol, Lenin Str. 188",
    phone: "+996 700 888 999",
    receiptPath: "/uploads/receipt-placeholder.jpg",
    adminNote: "",
    couponCode: null,
    discountAmount: 0,
    createdAt: "2026-06-21T10:00:00Z",
    updatedAt: "2026-06-21T10:00:00Z",
    userId: "user-guest",
    user: { name: "Kanat B.", email: "kanat@gmail.com" },
    orderItems: [
      { id: "oi-2", productId: "prod-4", qty: 1, price: 24000, productName_tr: "Hazel Ahşap Yemek Masası", productName_ru: "Деревянный Обеденный Стол Hazel", productName_ky: "Hazel Жыгач Тамактануучу Столу" }
    ]
  }
];

// ---- INITIALIZE DATABASE ----

export function getDb(): MockDBData {
  if (typeof window === "undefined") {
    return getSeedData();
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const seed = getSeedData();
    saveDb(seed);
    return seed;
  }
  try {
    return JSON.parse(stored);
  } catch {
    const seed = getSeedData();
    saveDb(seed);
    return seed;
  }
}

export function saveDb(data: MockDBData): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

function getSeedData(): MockDBData {
  return {
    sliders: defaultSliders,
    categories: defaultCategories,
    products: defaultProducts,
    blogPosts: defaultBlogPosts,
    orders: defaultOrders,
    coupons: defaultCoupons,
    discounts: defaultDiscounts,
    reviews: defaultReviews,
    questions: defaultQuestions,
    settings: defaultSettings,
    users: defaultUsers,
    accounting: defaultAccounting,
    accountingEmployees: defaultAccountingEmployees,
    contact: defaultContactMessages,
    specialPages: defaultSpecialPages,
    favorites: [],
    cart: []
  };
}

export interface MockDBData {
  sliders: any[];
  categories: any[];
  products: any[];
  blogPosts: any[];
  orders: any[];
  coupons: any[];
  discounts: any[];
  reviews: any[];
  questions: any[];
  settings: any[];
  users: any[];
  accounting: any[];
  accountingEmployees: any[];
  contact: any[];
  specialPages: any[];
  favorites: any[];
  cart: any[];
}
