(function () {
  const STORAGE_KEY = 'enos-lang';
  const STRINGS = {
    en: {
      'meta.index.title': 'Enos Properti | Trusted Property Agent',
      'meta.index.description':
        'Trusted property agent helping clients buy, sell, and invest with confidence.',
      'meta.about.title': 'About Me | Enos Properti',
      'meta.about.description': 'Learn more about Enos and his property service approach.',
      'meta.testimony.title': 'Testimony | Enos Properti',
      'meta.testimony.description':
        'Proof of work, sold homes, and client satisfaction for Enos Properti.',
      'brand.tagline': 'Trusted Property Agent',
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.testimony': 'Testimony',
      'nav.contact': 'Contact',
      'a11y.openNav': 'Open navigation',
      'a11y.lang': 'Language',
      'a11y.langEn': 'English',
      'a11y.langId': 'Indonesian',
      'footer.rights': '© 2026 PT Nusa Bhumi Group. All rights reserved.',
      'index.hero.eyebrow': 'Jakarta • Tangsel • Depok • Bogor',
      'index.hero.h1': 'Helping people find the right home with confidence.',
      'index.hero.lead':
        'Enos helps clients buy, sell, and invest in property with clear guidance, responsive service, and a results-focused approach.',
      'index.btn.learnMore': 'Learn More',
      'index.btn.seeResults': 'See Results',
      'index.trust.1': 'Trusted local guidance',
      'index.trust.2': 'Property matching based on needs',
      'index.trust.3': 'Clear process from inquiry to closing',
      'index.stat.1.h': 'Trusted Service',
      'index.stat.1.p': 'Focused on honest communication and long-term client trust.',
      'index.stat.2.h': 'Strategic Matching',
      'index.stat.2.p': 'Helping clients choose homes that fit lifestyle, budget, and location.',
      'index.stat.3.h': 'Strong Follow-Up',
      'index.stat.3.p': 'Consistent assistance before, during, and after the transaction.',
      'index.section.eyebrow': 'Why clients choose Enos',
      'index.section.h2': 'Professional, approachable, and easy to work with.',
      'index.section.p1':
        'A property website should not only look elegant. It should also quickly answer the real questions visitors have: Can I trust this agent? What areas does he handle? What proof of results is there? And how can I contact him fast?',
      'index.section.p2':
        'That is why this website keeps the structure simple: a strong home page, a personal about page, and a proof-based testimony page.',
      'index.feature.1.h': 'Clear communication',
      'index.feature.1.p': 'Clients feel guided, not pressured.',
      'index.feature.2.h': 'Local market understanding',
      'index.feature.2.p': 'Suitable recommendations based on area and value.',
      'index.feature.3.h': 'Results with trust',
      'index.feature.3.p': 'Proof of sold homes and customer satisfaction.',
      'index.cta.eyebrow': 'Ready to talk?',
      'index.cta.h2': 'Let your visitors contact him quickly.',
      'index.cta.p':
        'Add WhatsApp, Instagram, and call buttons here so clients do not need to search for the next step.',
      'index.hero.imgAlt': 'Portrait of Enos, property agent',
      'index.hero.role': 'Property Agent',
      'about.pageEyebrow': 'About Me',
      'about.hero.h1': 'Meet the agent behind the service.',
      'about.hero.lead':
        'Enos is focused on helping clients make smart property decisions with confidence, clarity, and personal support.',
      'about.intro.h2': 'Short introduction',
      'about.intro.p1':
        'I help clients buy, sell, and explore property opportunities with a service approach that is professional, responsive, and relationship-driven. My goal is not only to close deals, but to make each client feel informed, comfortable, and well-guided throughout the process.',
      'about.intro.p2':
        'I understand that buying a home is emotional and financial at the same time. Because of that, I focus on listening first, then giving recommendations that match the client’s priorities.',
      'about.strengths.h3': 'Core strengths',
      'about.strengths.1': 'Good communication and follow-up',
      'about.strengths.2': 'Helpful property recommendations',
      'about.strengths.3': 'Professional and trustworthy presentation',
      'about.strengths.4': 'Client-first mindset',
      'about.value.1.h': 'Trust',
      'about.value.1.p': 'Clients should feel safe, respected, and clearly informed at every step.',
      'about.value.2.h': 'Clarity',
      'about.value.2.p':
        'Property decisions become easier when information is explained simply and honestly.',
      'about.value.3.h': 'Results',
      'about.value.3.p':
        'Real service should lead to real outcomes: sold homes, satisfied clients, and repeat referrals.',
      'about.improve.eyebrow': 'Suggested improvement',
      'about.improve.h2': 'What this page should do',
      'about.improve.p':
        'A lot of agent websites make the mistake of only talking about themselves. A better approach is to connect the personal story to client value. That is why this page explains not just who Enos is, but why his style of service matters to buyers and sellers.',
      'about.imgAlt': 'Enos sitting in a suit',
      'testimony.pageEyebrow': 'Proof & Results',
      'testimony.hero.h1': 'Homes sold, clients helped, and trust earned.',
      'testimony.hero.lead':
        'This page should be the proof page. Instead of only saying “trusted agent,” show real examples: sold listings, positive customer feedback, and clear signs of satisfaction.',
      'testimony.proof.1.label': 'Sold Home',
      'testimony.proof.1.placeholder': 'Add sold house photo',
      'testimony.proof.1.h3': 'Modern Townhouse',
      'testimony.proof.1.p':
        'Replace this text with the property name, area, and short result summary.',
      'testimony.proof.2.label': 'Sold Home',
      'testimony.proof.2.placeholder': 'Add sold house photo',
      'testimony.proof.2.h3': 'Family Residence',
      'testimony.proof.2.p': 'Use this card for another home that has been successfully sold.',
      'testimony.proof.3.label': 'Hot Listing',
      'testimony.proof.3.placeholder': 'Add sold house photo',
      'testimony.proof.3.h3': 'Investment Property',
      'testimony.proof.3.p':
        'Show different property categories so visitors see range and credibility.',
      'testimony.sat.eyebrow': 'Customer satisfaction',
      'testimony.sat.h2': 'What clients can say about the service',
      'testimony.quote.1':
        '“Enos was very responsive and helped us understand each step clearly. The process felt much easier.”',
      'testimony.quote.2':
        '“We felt comfortable asking questions, and the recommendations matched what we were looking for.”',
      'testimony.quote.3':
        '“Professional, friendly, and serious about helping us find the right property.”',
      'testimony.quote.by': '— Client Name',
      'testimony.cta.eyebrow': 'Final step',
      'testimony.cta.h2': 'Make contacting him simple.',
      'testimony.cta.p':
        'A proof page works best when it ends with one clear next action. Add WhatsApp, Instagram, and direct call buttons here.',
      'testimony.btn.contact': 'Contact Now',
      'testimony.btn.home': 'Back to Home',
    },
    id: {
      'meta.index.title': 'Enos Properti | Agen Properti Terpercaya',
      'meta.index.description':
        'Agen properti terpercaya yang membantu klien membeli, menjual, dan berinvestasi dengan percaya diri.',
      'meta.about.title': 'Tentang Saya | Enos Properti',
      'meta.about.description': 'Kenali lebih dekat Enos dan pendekatan layanan propertinya.',
      'meta.testimony.title': 'Testimoni | Enos Properti',
      'meta.testimony.description':
        'Bukti kerja, rumah terjual, dan kepuasan klien untuk Enos Properti.',
      'brand.tagline': 'Agen Properti Terpercaya',
      'nav.home': 'Beranda',
      'nav.about': 'Tentang Saya',
      'nav.testimony': 'Testimoni',
      'nav.contact': 'Kontak',
      'a11y.openNav': 'Buka navigasi',
      'a11y.lang': 'Bahasa',
      'a11y.langEn': 'Bahasa Inggris',
      'a11y.langId': 'Bahasa Indonesia',
      'footer.rights': '© 2026 PT Nusa Bhumi Group. Hak cipta dilindungi.',
      'index.hero.eyebrow': 'Jakarta • Tangsel • Depok • Bogor',
      'index.hero.h1': 'Membantu orang menemukan rumah yang tepat dengan percaya diri.',
      'index.hero.lead':
        'Enos membantu klien membeli, menjual, dan berinvestasi properti dengan panduan yang jelas, layanan responsif, dan fokus pada hasil.',
      'index.btn.learnMore': 'Pelajari Lebih Lanjut',
      'index.btn.seeResults': 'Lihat Hasil',
      'index.trust.1': 'Panduan lokal yang terpercaya',
      'index.trust.2': 'Pencocokan properti sesuai kebutuhan',
      'index.trust.3': 'Proses jelas dari pertanyaan hingga penutupan',
      'index.stat.1.h': 'Layanan Terpercaya',
      'index.stat.1.p': 'Berfokus pada komunikasi jujur dan kepercayaan jangka panjang.',
      'index.stat.2.h': 'Pencocokan Strategis',
      'index.stat.2.p':
        'Membantu klien memilih rumah yang sesuai gaya hidup, anggaran, dan lokasi.',
      'index.stat.3.h': 'Tindak Lanjut Kuat',
      'index.stat.3.p': 'Pendampingan konsisten sebelum, selama, dan setelah transaksi.',
      'index.section.eyebrow': 'Mengapa klien memilih Enos',
      'index.section.h2': 'Profesional, ramah, dan mudah diajak bekerja sama.',
      'index.section.p1':
        'Situs properti tidak hanya harus tampil elegan, tetapi juga menjawab pertanyaan pengunjung: Apakah saya bisa percaya pada agen ini? Area mana yang ditangani? Bukti hasil apa yang ada? Dan bagaimana menghubunginya dengan cepat?',
      'index.section.p2':
        'Karena itu struktur situs ini dibuat sederhana: beranda yang kuat, halaman tentang yang personal, dan halaman testimoni berbasis bukti.',
      'index.feature.1.h': 'Komunikasi jelas',
      'index.feature.1.p': 'Klien merasa dipandu, bukan ditekan.',
      'index.feature.2.h': 'Pemahaman pasar lokal',
      'index.feature.2.p': 'Rekomendasi yang sesuai berdasarkan area dan nilai.',
      'index.feature.3.h': 'Hasil dengan kepercayaan',
      'index.feature.3.p': 'Bukti rumah terjual dan kepuasan pelanggan.',
      'index.cta.eyebrow': 'Siap berdiskusi?',
      'index.cta.h2': 'Biarkan pengunjung menghubungi dengan cepat.',
      'index.cta.p':
        'Tambahkan tombol WhatsApp, Instagram, dan telepon agar klien tidak perlu mencari langkah berikutnya.',
      'index.hero.imgAlt': 'Potret Enos, agen properti',
      'index.hero.role': 'Agen Properti',
      'about.pageEyebrow': 'Tentang Saya',
      'about.hero.h1': 'Kenali agen di balik layanan ini.',
      'about.hero.lead':
        'Enos berfokus membantu klien mengambil keputusan properti yang cerdas dengan percaya diri, kejelasan, dan dukungan personal.',
      'about.intro.h2': 'Perkenalan singkat',
      'about.intro.p1':
        'Saya membantu klien membeli, menjual, dan mengeksplorasi peluang properti dengan pendekatan profesional, responsif, dan berorientasi hubungan. Tujuan saya tidak hanya menutup transaksi, tetapi membuat setiap klien merasa terinformasi, nyaman, dan terpandu selama proses berlangsung.',
      'about.intro.p2':
        'Saya memahami membeli rumah bersifat emosional sekaligus finansial. Karena itu saya mendengarkan dulu, lalu memberi rekomendasi yang sesuai prioritas klien.',
      'about.strengths.h3': 'Kekuatan utama',
      'about.strengths.1': 'Komunikasi dan tindak lanjut yang baik',
      'about.strengths.2': 'Rekomendasi properti yang membantu',
      'about.strengths.3': 'Presentasi profesional dan terpercaya',
      'about.strengths.4': 'Pikiran mengutamakan klien',
      'about.value.1.h': 'Kepercayaan',
      'about.value.1.p': 'Klien harus merasa aman, dihormati, dan jelas informasinya di setiap langkah.',
      'about.value.2.h': 'Kejelasan',
      'about.value.2.p':
        'Keputusan properti lebih mudah ketika informasi dijelaskan dengan sederhana dan jujur.',
      'about.value.3.h': 'Hasil',
      'about.value.3.p':
        'Layanan nyata menghasilkan rumah terjual, klien puas, dan rujukan berulang.',
      'about.improve.eyebrow': 'Saran perbaikan',
      'about.improve.h2': 'Fungsi halaman ini',
      'about.improve.p':
        'Banyak situs agen hanya membicarakan diri sendiri. Pendekatan yang lebih baik menghubungkan cerita personal dengan nilai bagi klien. Halaman ini menjelaskan bukan hanya siapa Enos, tetapi mengapa gaya layanannya penting bagi pembeli dan penjual.',
      'about.imgAlt': 'Enos berjas duduk',
      'testimony.pageEyebrow': 'Bukti & Hasil',
      'testimony.hero.h1': 'Rumah terjual, klien terbantu, kepercayaan terbangun.',
      'testimony.hero.lead':
        'Halaman ini adalah halaman bukti. Selain mengatakan “agen terpercaya,” tunjukkan contoh nyata: listing terjual, ulasan positif, dan tanda kepuasan.',
      'testimony.proof.1.label': 'Rumah Terjual',
      'testimony.proof.1.placeholder': 'Tambah foto rumah terjual',
      'testimony.proof.1.h3': 'Rumah Townhouse Modern',
      'testimony.proof.1.p':
        'Ganti teks ini dengan nama properti, area, dan ringkasan hasil singkat.',
      'testimony.proof.2.label': 'Rumah Terjual',
      'testimony.proof.2.placeholder': 'Tambah foto rumah terjual',
      'testimony.proof.2.h3': 'Rumah Keluarga',
      'testimony.proof.2.p': 'Gunakan kartu ini untuk rumah lain yang berhasil terjual.',
      'testimony.proof.3.label': 'Listing Hangat',
      'testimony.proof.3.placeholder': 'Tambah foto rumah terjual',
      'testimony.proof.3.h3': 'Properti Investasi',
      'testimony.proof.3.p':
        'Tampilkan berbagai kategori agar pengunjung melihat jangkauan dan kredibilitas.',
      'testimony.sat.eyebrow': 'Kepuasan pelanggan',
      'testimony.sat.h2': 'Apa yang bisa dikatakan klien tentang layanan',
      'testimony.quote.1':
        '“Enos sangat responsif dan membantu kami memahami setiap langkah. Prosesnya terasa jauh lebih mudah.”',
      'testimony.quote.2':
        '“Kami nyaman bertanya, dan rekomendasinya sesuai dengan yang kami cari.”',
      'testimony.quote.3':
        '“Profesional, ramah, dan serius membantu kami menemukan properti yang tepat.”',
      'testimony.quote.by': '— Nama Klien',
      'testimony.cta.eyebrow': 'Langkah akhir',
      'testimony.cta.h2': 'Buat menghubungi menjadi mudah.',
      'testimony.cta.p':
        'Halaman bukti paling efektif jika diakhiri dengan satu tindakan jelas. Tambahkan WhatsApp, Instagram, dan tombol telepon.',
      'testimony.btn.contact': 'Hubungi Sekarang',
      'testimony.btn.home': 'Kembali ke Beranda',
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'id' || stored === 'en') return stored;
    return 'en';
  }

  function setLang(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function apply(lang) {
    const dict = STRINGS[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      const parts = spec.split('|');
      parts.forEach((part) => {
        const [attr, key] = part.split(':');
        if (!attr || !key) return;
        const val = dict[key.trim()];
        if (val !== undefined) el.setAttribute(attr.trim(), val);
      });
    });

    const page = document.body && document.body.getAttribute('data-page');
    if (page) {
      const titleKey = `meta.${page}.title`;
      const descKey = `meta.${page}.description`;
      if (dict[titleKey]) document.title = dict[titleKey];
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict[descKey]) metaDesc.setAttribute('content', dict[descKey]);
    }

    document.querySelectorAll('.lang-switcher [data-set-lang]').forEach((btn) => {
      const isActive = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
      const openKey = 'a11y.openNav';
      if (dict[openKey]) navToggle.setAttribute('aria-label', dict[openKey]);
    }

    const langGroup = document.querySelector('.lang-switcher');
    if (langGroup) {
      const gKey = 'a11y.lang';
      if (dict[gKey]) langGroup.setAttribute('aria-label', dict[gKey]);
    }

    document.querySelectorAll('.lang-switcher [data-set-lang]').forEach((btn) => {
      const code = btn.getAttribute('data-set-lang');
      const labelKey = code === 'id' ? 'a11y.langId' : 'a11y.langEn';
      if (dict[labelKey]) btn.setAttribute('title', dict[labelKey]);
    });
  }

  function init() {
    const lang = getLang();
    apply(lang);

    document.querySelectorAll('.lang-switcher [data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-set-lang');
        if (next === 'en' || next === 'id') setLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
