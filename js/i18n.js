(function () {
  const STORAGE_KEY = 'enos-lang';
  const STRINGS = {
    en: {
      'meta.index.title': 'Enos Properti | Trusted Property Agent',
      'meta.index.description':
        'Trusted property agent helping clients choose new homes from developers across Indonesia.',
      'meta.about.title': 'About Me | Enos Properti',
      'meta.about.description': 'Learn more about Enos and his property service approach.',
      'meta.testimony.title': 'Testimonials | Enos Properti',
      'meta.testimony.description':
        'Read client testimonials and success stories from buyers and investors choosing developer homes with Enos Properti.',
      'brand.tagline': 'Trusted Property Agent',
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.testimony': 'Testimonials',
      'nav.contact': 'Contact',
      'a11y.openNav': 'Open navigation',
      'a11y.lang': 'Language',
      'a11y.langEn': 'English',
      'a11y.langId': 'Indonesian',
      'footer.rights': '© 2026 PT Nusa Bhumi Group. All rights reserved.',
      'index.hero.eyebrow': 'Jakarta • Tangsel • Depok • Bogor',
      'index.hero.h1': 'Find the right property with clarity and confidence.',
      'index.hero.lead':
        'Whether you are buying your first home in a housing complex or planning your next property investment, you get strategic guidance and responsive support at every step.',
      'index.btn.learnMore': 'Learn More',
      'index.btn.seeResults': 'See Results',
      'index.trust.1': 'Trusted local guidance',
      'index.trust.2': 'Property matching based on needs',
      'index.trust.3': 'A clear process from our first chat until you get the home you have been dreaming of.',
      'index.stat.1.h': 'Trusted Service',
      'index.stat.1.p': 'Focused on honest communication and long-term client trust.',
      'index.stat.2.h': 'Strategic Matching',
      'index.stat.2.p': 'Helping clients choose homes that fit lifestyle, budget, and location.',
      'index.stat.3.h': 'Strong Follow-Up',
      'index.stat.3.p': 'Consistent assistance before, during, and after the transaction.',
      'index.section.eyebrow': 'Why people choose to work with Enos',
      'index.section.h2': 'Professional, approachable, and easy to work with.',
      'index.section.p1':
        'You should be able to get answers quickly: Which areas are the right fit for your goals? What budget strategy makes sense for your situation? How do you move forward without confusion?',
      'index.section.p2':
        'This website is designed to help you decide confidently with clear guidance, personal background, and real client stories you can review before taking action.',
      'index.feature.1.h': 'Clear communication',
      'index.feature.1.p': 'Clients feel guided, not pressured.',
      'index.feature.2.h': 'Local market understanding',
      'index.feature.2.p': 'Suitable recommendations based on area and value.',
      'index.feature.3.h': 'Results with trust',
      'index.feature.3.p': 'Proof of sold homes and customer satisfaction.',
      'index.cta.eyebrow': 'Ready to talk?',
      'index.cta.h2': 'Ready to talk about your property goals?',
      'index.cta.p':
        'Reach out directly through WhatsApp or Instagram for listings, viewings, and personalized recommendations.',
      'index.hero.imgAlt': 'Portrait of Enos, property agent',
      'index.hero.role': 'Property Agent',
      'about.pageEyebrow': 'About Me',
      'about.hello': "Hello world, I'm Enos Budiman Pribawa.",
      'about.hero.h1': 'Get to know the person guiding your journey.',
      'about.hero.lead':
        'You deserve a property advisor who listens, explains clearly, and helps you make confident decisions without pressure.',
      'about.profile.license': 'Licensed real estate agent',
      'about.profile.area': 'Based in Jakarta, Tangsel, Depok, and Bogor',
      'about.profile.instagram': 'Instagram: @enosproperti',
      'about.intro.h2': 'Short introduction',
      'about.intro.p1':
        'When we work together, you can expect professional guidance, fast communication, and clear next steps. The focus is not just reaching booking and handover, but helping you feel informed and in control from start to finish.',
      'about.intro.p2':
        "I understand that choosing a home from a developer is both emotional and financial. My approach is to listen carefully first, then provide recommendations that align with each client's goals, timeline, and budget.",
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
      'about.fun.eyebrow': 'Real Talk',
      'about.fun.h2': 'No confusing property jargon here.',
      'about.fun.p1':
        'Think of this as working with a trusted friend who also understands the market. You can ask anything, get honest answers, and move at your own pace.',
      'about.fun.p2':
        'Your goals lead the process. I help simplify the options, compare what matters, and keep every step clear so you always know what comes next.',
      'about.qa.h3': 'Quick Q&A',
      'about.qa.q1': '"Can I start even if I am still just exploring?"',
      'about.qa.a1':
        'Absolutely. We can map your options first, then decide the right timing.',
      'about.qa.q2': '"Will you guide me through the paperwork?"',
      'about.qa.a2':
        'Yes. You will get clear step-by-step guidance from booking to handover.',
      'about.qa.q3': '"I am busy. Can this process stay efficient?"',
      'about.qa.a3':
        'Yes. I keep communication concise, practical, and aligned with your schedule.',
      'about.improve.eyebrow': 'How I work',
      'about.improve.h2': 'A service approach built on trust and results',
      'about.improve.p':
        'Every client has a unique story. I focus on clear communication, honest guidance, and strong follow-through so each step from consultation to handover feels organized, transparent, and comfortable.',
      'about.imgAlt': 'Enos sitting in a suit',
      'testimony.pageEyebrow': 'Client Stories',
      'testimony.hero.h1': 'See what your property journey can look like.',
      'testimony.hero.lead':
        'These testimonials show how homebuyers and investors were guided with clear strategy, responsive communication, and confident decision-making from first chat to handover.',
      'testimony.proof.1.label': 'Buyer Success',
      'testimony.proof.1.placeholder': 'South Jakarta townhouse match',
      'testimony.proof.1.h3': 'First Home in South Jakarta',
      'testimony.proof.1.p':
        'A young couple found a move-in-ready townhouse in 3 weeks after refining budget, location, and commute priorities together.',
      'testimony.proof.2.label': 'New Launch Success',
      'testimony.proof.2.placeholder': 'Depok family home campaign',
      'testimony.proof.2.h3': 'Best Unit Secured in 21 Days',
      'testimony.proof.2.p':
        'With project comparison, payment simulation, and booking strategy, the client secured a prime unit with a clear timeline.',
      'testimony.proof.3.label': 'Investor Success',
      'testimony.proof.3.placeholder': 'Tangsel rental opportunity',
      'testimony.proof.3.h3': 'Rental-Focused Investment Pick',
      'testimony.proof.3.p':
        'An investor selected a high-demand unit after comparing yield potential, neighborhood growth, and tenant profile fit.',
      'testimony.sat.eyebrow': 'What Clients Say',
      'testimony.sat.h2': 'Real feedback from real client journeys',
      'testimony.quote.1':
        '“We felt supported from day one. Every option was explained clearly, so we could choose confidently without pressure.”',
      'testimony.quote.2':
        '“The unit selection process was organized and transparent. We always knew the next step and booked the right house quickly.”',
      'testimony.quote.3':
        '“Market insights were practical and easy to act on. It helped us invest with a clear return strategy, not guesswork.”',
      'testimony.quote.4':
        '“Very responsive and easy to talk to. We viewed only relevant properties, so no time was wasted.”',
      'testimony.quote.5':
        '“The pricing and promo advice was spot on. We got a better deal from the developer than we expected.”',
      'testimony.quote.6':
        '“Every document step was explained in simple language. We felt calm even as first-time buyers.”',
      'testimony.quote.7':
        '“Great local insight around Tangsel and Depok. The recommendations matched our real lifestyle needs.”',
      'testimony.quote.8':
        '“The negotiation support was excellent. We got a fair deal and a timeline that worked for our move.”',
      'testimony.quote.9':
        '“Professional, friendly, and very practical. We always had clear options before making decisions.”',
      'testimony.quote.10':
        '“From market analysis to final handover, everything felt structured and trustworthy.”',
      'testimony.quote.by1': '— Dina & Rafi, First-time Buyers',
      'testimony.quote.by2': '— Michael T., Homebuyer',
      'testimony.quote.by3': '— Arvin L., Property Investor',
      'testimony.quote.by4': '— Kevin & Sarah, Busy Professionals',
      'testimony.quote.by5': '— Fajar H., Homebuyer',
      'testimony.quote.by6': '— Alya & Reza, New Homeowners',
      'testimony.quote.by7': '— Nadia P., Relocating Family',
      'testimony.quote.by8': '— Jonathan K., Buyer',
      'testimony.quote.by9': '— Livia M., Homebuyer',
      'testimony.quote.by10': '— Rendy T., Investor',
      'testimony.cta.eyebrow': 'Your Next Step',
      'testimony.cta.h2': 'Start your property conversation today.',
      'testimony.cta.p':
        'Ready to discuss your next move? Start a conversation and get a personalized recommendation for your property goals.',
      'testimony.btn.contact': 'Contact Now',
      'testimony.btn.home': 'Back to Home',
    },
    id: {
      'meta.index.title': 'Enos Properti | Agen Properti Terpercaya',
      'meta.index.description':
        'Partner properti tepercaya yang bantu kamu pilih rumah baru dari developer/perumahan di Indonesia.',
      'meta.about.title': 'Tentang Saya | Enos Properti',
      'meta.about.description': 'Kenali lebih dekat Enos dan pendekatan layanan propertinya.',
      'meta.testimony.title': 'Testimoni | Enos Properti',
      'meta.testimony.description':
        'Baca testimoni klien dan cerita keberhasilan pembeli serta investor yang memilih rumah dari developer bersama Enos Properti.',
      'brand.tagline': 'Partner Properti Tepercaya',
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
      'index.hero.h1': 'Yuk temukan properti yang pas buat kamu.',
      'index.hero.lead':
        'Mau beli rumah pertama di perumahan atau siapin investasi di masa depan? Kamu bakal dapet arahan yang jelas dan support yang cepat di setiap tahap.',
      'index.btn.learnMore': 'Pelajari Lebih Lanjut',
      'index.btn.seeResults': 'Lihat Hasil',
      'index.trust.1': 'Panduan lokal yang bisa kamu andalkan',
      'index.trust.2': 'Rekomendasi properti sesuai kebutuhan kamu',
      'index.trust.3': 'Proses jelas dari awal ngobrol sampai kamu mendapatkan rumah idaman sesuai keinginan',
      'index.stat.1.h': 'Layanan yang Bisa Diandalkan',
      'index.stat.1.p': 'Komunikasi jujur, update jelas, dan hubungan jangka panjang.',
      'index.stat.2.h': 'Pencocokan yang Tepat',
      'index.stat.2.p':
        'Bantu kamu pilih properti yang cocok dengan gaya hidup, budget, dan lokasi incaran.',
      'index.stat.3.h': 'Follow-up Rapi',
      'index.stat.3.p': 'Pendampingan konsisten sebelum, saat, dan setelah transaksi.',
      'index.section.eyebrow': 'Kenapa banyak orang pilih Enos',
      'index.section.h2': 'Profesional tapi tetap santai dan enak diajak diskusi.',
      'index.section.p1':
        'Kamu butuh jawaban yang cepat dan jelas: area mana yang paling cocok, budget strategy seperti apa yang masuk akal, dan gimana langkahnya biar nggak bingung.',
      'index.section.p2':
        'Website ini dibuat supaya kamu bisa ambil keputusan dengan lebih tenang lewat arahan yang jelas, profil personal, dan cerita klien nyata.',
      'index.feature.1.h': 'Komunikasi Jelas',
      'index.feature.1.p': 'Kamu bakal merasa dipandu, bukan didorong-dorong.',
      'index.feature.2.h': 'Paham Pasar Lokal',
      'index.feature.2.p': 'Rekomendasi sesuai area, potensi, dan value properti.',
      'index.feature.3.h': 'Hasil Nyata',
      'index.feature.3.p': 'Ada bukti rumah terjual dan klien yang puas.',
      'index.cta.eyebrow': 'Siap ngobrol?',
      'index.cta.h2': 'Yuk bahas tujuan properti kamu.',
      'index.cta.p':
        'Chat langsung via WhatsApp atau Instagram buat dapetin listing, jadwal survey, dan rekomendasi yang cocok buat kamu.',
      'index.hero.imgAlt': 'Potret Enos, agen properti',
      'index.hero.role': 'Agen Properti',
      'about.pageEyebrow': 'Tentang Saya',
      'about.hello': 'Halo semuanya, saya Enos Budiman Pribawa.',
      'about.hero.h1': 'Kenalan dulu sama partner properti kamu.',
      'about.hero.lead':
        'Kamu berhak punya advisor properti yang mau dengerin, jelasin dengan simpel, dan bantu kamu ambil keputusan tanpa tekanan.',
      'about.profile.license': 'Agen properti berlisensi resmi',
      'about.profile.area': 'Berbasis di Jakarta, Tangsel, Depok, dan Bogor',
      'about.profile.instagram': 'Instagram: @enosproperti',
      'about.intro.h2': 'Perkenalan singkat',
      'about.intro.p1':
        'Pas kita kerja bareng, kamu dapet arahan profesional, komunikasi cepat, dan langkah yang jelas. Fokusnya bukan cuma booking dan serah terima, tapi bikin kamu tetap paham dan pegang kendali dari awal sampai akhir.',
      'about.intro.p2':
        'Pilih rumah dari developer itu urusan hati sekaligus angka. Makanya saya mulai dari dengerin kebutuhan kamu, lalu kasih opsi yang sesuai tujuan, waktu, dan budget.',
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
      'about.fun.eyebrow': 'Ngobrol Santai',
      'about.fun.h2': 'Nggak ada istilah properti yang bikin pusing.',
      'about.fun.p1':
        'Anggap saja seperti bekerja dengan teman terpercaya yang paham pasar. Anda bebas bertanya apa saja, mendapat jawaban jujur, dan melangkah dengan ritme Anda sendiri.',
      'about.fun.p2':
        'Tujuan kamu yang jadi arah proses. Saya bantu sederhanain pilihan, bandingin yang penting, dan pastiin tiap langkah tetap jelas.',
      'about.qa.h3': 'Q&A Singkat',
      'about.qa.q1': '"Bisa mulai walau saya masih tahap lihat-lihat?"',
      'about.qa.a1':
        'Tentu. Kita bisa petakan opsi terlebih dulu, lalu tentukan timing yang paling pas.',
      'about.qa.q2': '"Akan dibantu juga untuk urusan dokumen?"',
      'about.qa.a2':
        'Yes. Kamu bakal dapet panduan langkah demi langkah dari booking sampai serah terima.',
      'about.qa.q3': '"Saya sibuk. Bisa tetap efisien?"',
      'about.qa.a3':
        'Bisa banget. Komunikasi saya ringkas, praktis, dan ngikutin jadwal kamu.',
      'about.improve.eyebrow': 'Cara kerja saya',
      'about.improve.h2': 'Pendekatan yang fokus ke trust dan hasil',
      'about.improve.p':
        'Setiap klien punya cerita yang beda. Saya fokus ke komunikasi yang jelas, arahan yang jujur, dan follow-up yang rapi biar proses dari konsultasi sampai serah terima terasa nyaman.',
      'about.imgAlt': 'Enos berjas duduk',
      'testimony.pageEyebrow': 'Cerita Klien',
      'testimony.hero.h1': 'Lihat gimana perjalanan properti kamu nantinya.',
      'testimony.hero.lead':
        'Di sini kamu bisa lihat gimana pembeli dan investor didampingi dengan strategi yang jelas, komunikasi responsif, dan keputusan yang lebih pede dari awal ngobrol sampai serah terima.',
      'testimony.proof.1.label': 'Sukses Pembeli',
      'testimony.proof.1.placeholder': 'Pencocokan townhouse Jakarta Selatan',
      'testimony.proof.1.h3': 'Rumah Pertama di Jakarta Selatan',
      'testimony.proof.1.p':
        'Pasangan muda menemukan townhouse siap huni dalam 3 minggu setelah prioritas anggaran, lokasi, dan akses kerja disusun bersama.',
      'testimony.proof.2.label': 'Sukses Unit Baru',
      'testimony.proof.2.placeholder': 'Kampanye rumah keluarga Depok',
      'testimony.proof.2.h3': 'Unit Favorit Dapat dalam 21 Hari',
      'testimony.proof.2.p':
        'Dengan perbandingan proyek, simulasi pembayaran, dan strategi booking, klien berhasil dapat unit terbaik dengan timeline yang jelas.',
      'testimony.proof.3.label': 'Sukses Investor',
      'testimony.proof.3.placeholder': 'Peluang sewa di Tangsel',
      'testimony.proof.3.h3': 'Pilihan Investasi Fokus Sewa',
      'testimony.proof.3.p':
        'Seorang investor memilih unit dengan permintaan tinggi setelah membandingkan potensi yield, pertumbuhan area, dan profil penyewa.',
      'testimony.sat.eyebrow': 'Kata Klien',
      'testimony.sat.h2': 'Feedback jujur dari perjalanan klien nyata',
      'testimony.quote.1':
        '“Sejak awal kami merasa didampingi. Setiap opsi dijelaskan dengan jelas, jadi kami bisa memutuskan dengan yakin tanpa tekanan.”',
      'testimony.quote.2':
        '“Proses pilih unitnya rapi dan transparan. Kami selalu tahu langkah berikutnya dan cepat booking rumah yang paling cocok.”',
      'testimony.quote.3':
        '“Insight pasarnya praktis dan mudah dijalankan. Itu membantu kami berinvestasi dengan strategi hasil yang jelas, bukan sekadar tebakan.”',
      'testimony.quote.4':
        '“Responsnya cepat dan enak diajak ngobrol. Properti yang ditunjukkan relevan semua, jadi waktu kami nggak kebuang.”',
      'testimony.quote.5':
        '“Saran pricing dan promo-nya tepat banget. Kami dapat deal developer yang lebih bagus dari ekspektasi.”',
      'testimony.quote.6':
        '“Setiap langkah dokumen dijelaskan dengan bahasa simpel. Kami jadi tenang meski baru pertama beli rumah.”',
      'testimony.quote.7':
        '“Insight lokal untuk area Tangsel dan Depok sangat membantu. Rekomendasinya bener-bener sesuai kebutuhan keluarga kami.”',
      'testimony.quote.8':
        '“Dukungan negosiasinya keren. Kami dapat deal yang fair dan timeline yang pas buat rencana pindah.”',
      'testimony.quote.9':
        '“Profesional, ramah, dan praktis. Sebelum ambil keputusan, kami selalu dikasih opsi yang jelas.”',
      'testimony.quote.10':
        '“Dari analisa pasar sampai serah terima akhir, semuanya terasa rapi dan bisa dipercaya.”',
      'testimony.quote.by1': '— Dina & Rafi, Pembeli Rumah Pertama',
      'testimony.quote.by2': '— Michael T., Pembeli Rumah',
      'testimony.quote.by3': '— Arvin L., Investor Properti',
      'testimony.quote.by4': '— Kevin & Sarah, Profesional Sibuk',
      'testimony.quote.by5': '— Fajar H., Pembeli Rumah',
      'testimony.quote.by6': '— Alya & Reza, Pemilik Rumah Baru',
      'testimony.quote.by7': '— Nadia P., Keluarga Relokasi',
      'testimony.quote.by8': '— Jonathan K., Pembeli',
      'testimony.quote.by9': '— Livia M., Pembeli Rumah',
      'testimony.quote.by10': '— Rendy T., Investor',
      'testimony.cta.eyebrow': 'Langkah Kamu Berikutnya',
      'testimony.cta.h2': 'Mulai obrolan properti kamu hari ini.',
      'testimony.cta.p':
        'Siap lanjut ke langkah berikutnya? Mulai obrolan dan dapetin rekomendasi properti yang sesuai tujuan kamu.',
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
