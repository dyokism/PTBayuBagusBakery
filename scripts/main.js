const products = [
  {
    id: "bbb-pia-basah",
    name: "Roti Pia Basah Kacang Hijau",
    category: "manis-pia",
    weight: "50 gr",
    weight_val: 50,
    price: 1900,
    img: "assets/roti_pia_basah.webp",
    desc: "Roti pia basah khas dengan isian kacang hijau premium yang lembut, legit, dan dipanggang sempurna setiap subuh.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 130,
      energi_dari_lemak_kkal: 20,
      lemak_total_gr: 2.5,
      lemak_total_akg_persen: 4,
      lemak_jenuh_gr: 1.5,
      lemak_jenuh_akg_persen: 9,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 24.0,
      karbohidrat_total_akg_persen: 7,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 9.0,
      garam_natrium_mg: 100,
      garam_natrium_akg_persen: 7
    }
  },
  {
    id: "bbb-roti-manis-isi",
    name: "Roti Manis Isi (Cokelat & Stroberi)",
    category: "manis-pia",
    weight: "50 gr",
    weight_val: 50,
    price: 1900,
    img: "assets/roti_manis_isi.webp",
    desc: "Roti manis bertekstur empuk dengan pilihan selai cokelat pekat atau selai stroberi segar yang melimpah di dalamnya.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 130,
      energi_dari_lemak_kkal: 25,
      lemak_total_gr: 3.0,
      lemak_total_akg_persen: 4,
      lemak_jenuh_gr: 1.5,
      lemak_jenuh_akg_persen: 8,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 24.0,
      karbohidrat_total_akg_persen: 7,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 7.0,
      garam_natrium_mg: 125,
      garam_natrium_akg_persen: 8
    }
  },
  {
    id: "bbb-mooncake-original",
    name: "Kue Mooncake Rasa Original",
    category: "mooncake",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/mooncake-cokelat.webp",
    desc: "Kue bulan legendaris bertekstur lembut dengan isian pasta kacang hijau original yang manis alami khas kue tradisi.",
    nutrition: {
      takaran_saji_gr: 45,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 220,
      energi_dari_lemak_kkal: 35,
      lemak_total_gr: 4.0,
      lemak_total_akg_persen: 6,
      lemak_jenuh_gr: 2.0,
      lemak_jenuh_akg_persen: 9,
      protein_gr: 4.0,
      protein_akg_persen: 7,
      karbohidrat_total_gr: 41.0,
      karbohidrat_total_akg_persen: 13,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 20.0,
      garam_natrium_mg: 100,
      garam_natrium_akg_persen: 7
    }
  },
  {
    id: "bbb-mooncake-pandan",
    name: "Kue Mooncake Rasa Pandan",
    category: "mooncake",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/mooncake-pandan.webp",
    desc: "Kue bulan dengan keharuman daun pandan suji segar dalam pasta kacang hijau, memberikan aroma wangi yang khas.",
    nutrition: {
      takaran_saji_gr: 45,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 210,
      energi_dari_lemak_kkal: 35,
      lemak_total_gr: 4.0,
      lemak_total_akg_persen: 6,
      lemak_jenuh_gr: 2.0,
      lemak_jenuh_akg_persen: 9,
      protein_gr: 4.0,
      protein_akg_persen: 7,
      karbohidrat_total_gr: 41.0,
      karbohidrat_total_akg_persen: 12,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 19.0,
      garam_natrium_mg: 95,
      garam_natrium_akg_persen: 6
    }
  },
  {
    id: "bbb-mooncake-cokelat",
    name: "Kue Mooncake Rasa Cokelat",
    category: "mooncake",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/mooncake-cokelat.webp",
    desc: "Kue bulan eksklusif dengan paduan pasta cokelat pekat berkualitas tinggi, favorit semua kalangan anak-anak hingga dewasa.",
    nutrition: {
      takaran_saji_gr: 45,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 220,
      energi_dari_lemak_kkal: 45,
      lemak_total_gr: 5.0,
      lemak_total_akg_persen: 8,
      lemak_jenuh_gr: 2.5,
      lemak_jenuh_akg_persen: 11,
      protein_gr: 4.0,
      protein_akg_persen: 7,
      karbohidrat_total_gr: 41.0,
      karbohidrat_total_akg_persen: 13,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 29.0,
      garam_natrium_mg: 100,
      garam_natrium_akg_persen: 7
    }
  },
  {
    id: "bbb-roti-panjang-isi",
    name: "Roti Panjang Isi Aneka Rasa",
    category: "tawar-polos",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/roti_panjang_isi.webp",
    desc: "Roti hotdog panjang empuk dengan variasi pilihan isi Cokelat, Vanilla, Stroberi, Blueberry, atau Keju gurih.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 130,
      energi_dari_lemak_kkal: 25,
      lemak_total_gr: 3.0,
      lemak_total_akg_persen: 4,
      lemak_jenuh_gr: 1.5,
      lemak_jenuh_akg_persen: 8,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 24.0,
      karbohidrat_total_akg_persen: 7,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 7.0,
      garam_natrium_mg: 125,
      garam_natrium_akg_persen: 8
    }
  },
  {
    id: "bbb-roti-panjang-polos",
    name: "Roti Panjang Polos Belah",
    category: "tawar-polos",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/roti_panjang_polos.webp",
    desc: "Roti hotdog polos bertekstur empuk yang sudah dibelah di tengah, memudahkan penyedia katering berkreasi sosis/daging.",
    nutrition: {
      takaran_saji_gr: 40,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 130,
      energi_dari_lemak_kkal: 25,
      lemak_total_gr: 3.0,
      lemak_total_akg_persen: 4,
      lemak_jenuh_gr: 1.5,
      lemak_jenuh_akg_persen: 8,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 24.0,
      karbohidrat_total_akg_persen: 7,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 7.0,
      garam_natrium_mg: 125,
      garam_natrium_akg_persen: 8
    }
  },
  {
    id: "ibn-roti-sisir-75",
    name: "Roti Sisir Mentega Jumbo (75g)",
    category: "sisir-sandwich",
    weight: "75 gr",
    weight_val: 75,
    price: 3000,
    img: "assets/roti_sisir.webp",
    desc: "Roti sisir oles mentega tradisional ukuran jumbo dengan taburan gula pasir halus yang gurih manis dan sangat mengenyangkan.",
    nutrition: {
      takaran_saji_gr: 75,
      sajian_per_kemasan: 1.5,
      energi_total_kkal: 180,
      energi_dari_lemak_kkal: 60,
      lemak_total_gr: 7.0,
      lemak_total_akg_persen: 10,
      lemak_jenuh_gr: 4.0,
      lemak_jenuh_akg_persen: 20,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 26.0,
      karbohidrat_total_akg_persen: 8,
      serat_pangan_gr: 1.0,
      serat_pangan_akg_persen: 3,
      gula_gr: 9.0,
      garam_natrium_mg: 180,
      garam_natrium_akg_persen: 12
    }
  },
  {
    id: "ibn-roti-sisir-55",
    name: "Roti Sisir Mentega Standard (55g)",
    category: "sisir-sandwich",
    weight: "55 gr",
    weight_val: 55,
    price: 1900,
    img: "assets/roti_sisir.webp",
    desc: "Roti sisir margarin manis ukuran ekonomis harian, sangat laku untuk pasokan kantin sekolah dan warung ritel tradisional.",
    nutrition: {
      takaran_saji_gr: 55,
      sajian_per_kemasan: 1.5,
      energi_total_kkal: 200,
      energi_dari_lemak_kkal: 80,
      lemak_total_gr: 8.0,
      lemak_total_akg_persen: 13,
      lemak_jenuh_gr: 5.0,
      lemak_jenuh_akg_persen: 25,
      protein_gr: 3.0,
      protein_akg_persen: 5,
      karbohidrat_total_gr: 29.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: null,
      serat_pangan_akg_persen: null,
      gula_gr: 10.0,
      garam_natrium_mg: 180,
      garam_natrium_akg_persen: 12
    }
  },
  {
    id: "ibn-sandwich-cokelat",
    name: "Roti Sandwich Selai Cokelat",
    category: "sisir-sandwich",
    weight: "50 gr",
    weight_val: 50,
    price: 1900,
    img: "assets/sandwich_cokelat.webp",
    desc: "Sandwich roti tawar tanpa kulit bertekstur ultra lembut dengan olesan krim cokelat manis yang padat dan nikmat.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 150,
      energi_dari_lemak_kkal: 15,
      lemak_total_gr: 1.5,
      lemak_total_akg_persen: 2,
      lemak_jenuh_gr: 0.5,
      lemak_jenuh_akg_persen: 3,
      protein_gr: 4.0,
      protein_akg_persen: 6,
      karbohidrat_total_gr: 30.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: 0.0,
      serat_pangan_akg_persen: 0,
      gula_gr: 9.0,
      garam_natrium_mg: 110,
      garam_natrium_akg_persen: 7
    }
  },
  {
    id: "ibn-sandwich-strawberry",
    name: "Roti Sandwich Selai Stroberi",
    category: "sisir-sandwich",
    weight: "50 gr",
    weight_val: 50,
    price: 1900,
    img: "assets/sandwich_stroberi.webp",
    desc: "Roti sandwich praktis siap makan dengan isi selai buah stroberi merah asam manis segar berkualitas BPOM.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 140,
      energi_dari_lemak_kkal: 10,
      lemak_total_gr: 1.0,
      lemak_total_akg_persen: 1,
      lemak_jenuh_gr: 0.0,
      lemak_jenuh_akg_persen: 0,
      protein_gr: 3.0,
      protein_akg_persen: 6,
      karbohidrat_total_gr: 30.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: 1.0,
      serat_pangan_akg_persen: 3,
      gula_gr: 7.0,
      garam_natrium_mg: 125,
      garam_natrium_akg_persen: 8
    }
  },
  {
    id: "ibn-sandwich-blueberry",
    name: "Roti Sandwich Selai Blueberry",
    category: "sisir-sandwich",
    weight: "50 gr",
    weight_val: 50,
    price: 1900,
    img: "assets/sandwich_blueberry.webp",
    desc: "Sandwich roti tawar lembut berisikan selai buah blueberry ungu lezat yang kaya cita rasa khas buah berry.",
    nutrition: {
      takaran_saji_gr: 50,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 140,
      energi_dari_lemak_kkal: 10,
      lemak_total_gr: 1.0,
      lemak_total_akg_persen: 2,
      lemak_jenuh_gr: 0.0,
      lemak_jenuh_akg_persen: 0,
      protein_gr: 3.0,
      protein_akg_persen: 6,
      karbohidrat_total_gr: 30.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: 2.0,
      serat_pangan_akg_persen: 7,
      gula_gr: 8.0,
      garam_natrium_mg: 135,
      garam_natrium_akg_persen: 9
    }
  },
  {
    id: "ibn-roti-tawar-pack",
    name: "Roti Tawar Pack Premium (6 pcs)",
    category: "tawar-polos",
    weight: "270 gr",
    weight_val: 270,
    price: 10800,
    img: "assets/roti_tawar_pack.webp",
    desc: "Roti tawar iris tebal bertekstur ultra lembut dikemas dalam pack isi 6 lembar. Sangat cocok untuk katering industri, sarapan, dan pembuat roti bakar.",
    nutrition: {
      takaran_saji_gr: 45,
      sajian_per_kemasan: 6.0,
      energi_total_kkal: 150,
      energi_dari_lemak_kkal: 15,
      lemak_total_gr: 1.5,
      lemak_total_akg_persen: 2,
      lemak_jenuh_gr: 0.5,
      lemak_jenuh_akg_persen: 3,
      protein_gr: 4.0,
      protein_akg_persen: 6,
      karbohidrat_total_gr: 30.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: 0.0,
      serat_pangan_akg_persen: 0,
      gula_gr: 9.0,
      garam_natrium_mg: 110,
      garam_natrium_akg_persen: 7
    }
  },
  {
    id: "ibn-roti-burger",
    name: "Roti Burger Wijen Bulat (45g)",
    category: "tawar-polos",
    weight: "45 gr",
    weight_val: 45,
    price: 1900,
    img: "assets/roti_burger.webp",
    desc: "Bun burger bulat dengan taburan wijen melimpah yang wangi. Sangat empuk dan tahan lama, andalan katering burger anak sekolah.",
    nutrition: {
      takaran_saji_gr: 45,
      sajian_per_kemasan: 1.0,
      energi_total_kkal: 150,
      energi_dari_lemak_kkal: 15,
      lemak_total_gr: 1.5,
      lemak_total_akg_persen: 2,
      lemak_jenuh_gr: 0.5,
      lemak_jenuh_akg_persen: 3,
      protein_gr: 4.0,
      protein_akg_persen: 6,
      karbohidrat_total_gr: 30.0,
      karbohidrat_total_akg_persen: 9,
      serat_pangan_gr: 0.0,
      serat_pangan_akg_persen: 0,
      gula_gr: 9.0,
      garam_natrium_mg: 110,
      garam_natrium_akg_persen: 7
    }
  }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.getElementById('site-header');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const logoLink = document.getElementById('logo-link');
  const mobileBtnCta = document.querySelector('.mobile-btn-cta');
  
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogSearch = document.getElementById('catalog-search');
  const catalogFilters = document.getElementById('catalog-filters');
  
  const calcProductSelect = document.getElementById('calc-product-select');
  const calcQtyInput = document.getElementById('calc-qty-input');
  const btnQtyMinus = document.getElementById('calc-qty-minus');
  const btnQtyPlus = document.getElementById('calc-qty-plus');
  const btnAddItem = document.getElementById('btn-add-item');
  const cartBody = document.getElementById('cart-body');
  
  const calcTotalItems = document.getElementById('calc-total-items');
  const calcTotalWeight = document.getElementById('calc-total-weight');
  const calcTotalPrice = document.getElementById('calc-total-price');
  
  const b2bForm = document.getElementById('b2b-form');
  
  const nutritionModal = document.getElementById('nutrition-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalProductImg = document.getElementById('modal-product-img');
  const modalProductName = document.getElementById('modal-product-name');
  const modalProductDesc = document.getElementById('modal-product-desc');
  const modalProductPrice = document.getElementById('modal-product-price');
  
  const lblTakaranSaji = document.getElementById('lbl-takaran-saji');
  const lblSajianPerKemasan = document.getElementById('lbl-sajian-per-kemasan');
  const lblEnergiTotal = document.getElementById('lbl-energi-total');
  const lblEnergiDariLemak = document.getElementById('lbl-energi-dari-lemak');
  const lblLemakTotal = document.getElementById('lbl-lemak-total');
  const lblLemakTotalAkg = document.getElementById('lbl-lemak-total-akg');
  const lblLemakJenuh = document.getElementById('lbl-lemak-jenuh');
  const lblLemakJenuhAkg = document.getElementById('lbl-lemak-jenuh-akg');
  const lblProtein = document.getElementById('lbl-protein');
  const lblProteinAkg = document.getElementById('lbl-protein-akg');
  const lblKarbohidrat = document.getElementById('lbl-karbohidrat');
  const lblKarbohidratAkg = document.getElementById('lbl-karbohidrat-akg');
  const rowSeratPangan = document.getElementById('row-serat-pangan');
  const lblSeratPangan = document.getElementById('lbl-serat-pangan');
  const lblSeratPanganAkg = document.getElementById('lbl-serat-pangan-akg');
  const lblGula = document.getElementById('lbl-gula');
  const lblGaram = document.getElementById('lbl-garam');
  const lblGaramAkg = document.getElementById('lbl-garam-akg');

  let isHeaderScrolled = false;
  window.addEventListener('scroll', () => {
    const shouldScroll = window.scrollY > 50;
    if (shouldScroll !== isHeaderScrolled) {
      isHeaderScrolled = shouldScroll;
      if (isHeaderScrolled) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  const toggleMobileMenu = () => {
    const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
    menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
    menuToggleBtn.classList.toggle('active');
    mobileNavDrawer.classList.toggle('active');
    siteHeader.classList.toggle('mobile-menu-active');
    
    if (!isExpanded) {
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      document.documentElement.classList.remove('mobile-menu-open');
    }
  };

  menuToggleBtn.addEventListener('click', toggleMobileMenu);
  
  const closeMobileMenu = () => {
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    menuToggleBtn.classList.remove('active');
    mobileNavDrawer.classList.remove('active');
    siteHeader.classList.remove('mobile-menu-active');
    document.documentElement.classList.remove('mobile-menu-open');
  };

  mobileNavItems.forEach(item => item.addEventListener('click', closeMobileMenu));
  if (logoLink) logoLink.addEventListener('click', closeMobileMenu);
  if (mobileBtnCta) mobileBtnCta.addEventListener('click', closeMobileMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && mobileNavDrawer.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer.classList.contains('active')) {
      toggleMobileMenu();
      menuToggleBtn.focus();
    }
  });

  let currentCategory = 'all';
  let searchQuery = '';

  const renderCatalog = () => {
    catalogGrid.innerHTML = '';
    
    const filteredProducts = products.filter(product => {
      const matchCategory = currentCategory === 'all' || product.category === currentCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (filteredProducts.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-catalog text-center text-muted" style="grid-column: 1 / -1; padding: 60px 0;">
          <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px;">Roti tidak ditemukan</p>
          <p>Silakan gunakan kata kunci pencarian yang lain.</p>
        </div>
      `;
      return;
    }

    filteredProducts.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Detail gizi untuk ${product.name}`);
      
      const isTerlaris = product.id.includes('mooncake') || product.id.includes('burger');
      const isKatering = product.id.includes('polos') || product.id.includes('tawar');
      
      let badgeHtml = '';
      if (isTerlaris) {
        badgeHtml = `<span class="card-badge">Terlaris <svg class="icon-inline" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-left: 2px; vertical-align: text-bottom;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg></span>`;
      } else if (isKatering) {
        badgeHtml = `<span class="card-badge badge-producer">B2B Katering</span>`;
      }

      card.innerHTML = `
        <div class="product-image-container">
          <div class="product-badge-list">
            <span class="card-badge badge-producer">${product.id.startsWith('bbb') ? 'BBB' : 'IBN'}</span>
            ${badgeHtml}
          </div>
          <img src="${product.img}" alt="${product.name}" loading="lazy" width="280" height="220">
          <span class="product-price-tag">Rp ${product.price.toLocaleString('id-ID')}</span>
        </div>
        <div class="product-details-body">
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.desc}</p>
          <div class="product-card-footer">
            <span class="product-weight">
              <svg class="icon-inline" viewBox="0 0 24 24" aria-hidden="true" style="margin-right: 4px;">
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>${product.weight}
            </span>
            <span class="product-action-link">
              Lihat Nilai Gizi
              <svg class="icon-inline" viewBox="0 0 24 24" aria-hidden="true" style="margin-left: 4px;">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
                <line x1="9" y1="8" x2="10" y2="8"></line>
              </svg>
            </span>
          </div>
        </div>
      `;

      const openModalHandler = () => {
        openNutritionModal(product);
      };
      
      card.addEventListener('click', openModalHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModalHandler();
        }
      });

      catalogGrid.appendChild(card);
    });
  };

  catalogSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCatalog();
  });

  catalogFilters.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    document.querySelectorAll('.filter-tab').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    currentCategory = tab.dataset.category;
    renderCatalog();
  });

  // WCAG 2.4.3 focus restoration.
  let lastActiveElement = null;

  const openNutritionModal = (product) => {
    lastActiveElement = document.activeElement;
    
    modalProductImg.src = product.img;
    modalProductImg.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductDesc.textContent = product.desc;
    modalProductPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;

    const nut = product.nutrition;
    lblTakaranSaji.textContent = `Takaran Saji: ${nut.takaran_saji_gr} g`;
    lblSajianPerKemasan.textContent = `Sajian per Kemasan: ${nut.sajian_per_kemasan.toFixed(1)}`;
    lblEnergiTotal.textContent = `${nut.energi_total_kkal} kkal`;
    lblEnergiDariLemak.textContent = `${nut.energi_dari_lemak_kkal} kkal`;
    
    lblLemakTotal.textContent = `${nut.lemak_total_gr} g`;
    lblLemakTotalAkg.textContent = `${nut.lemak_total_akg_persen}%`;
    
    lblLemakJenuh.textContent = `${nut.lemak_jenuh_gr} g`;
    lblLemakJenuhAkg.textContent = `${nut.lemak_jenuh_akg_persen}%`;
    
    lblProtein.textContent = `${nut.protein_gr} g`;
    lblProteinAkg.textContent = `${nut.protein_akg_persen}%`;
    
    lblKarbohidrat.textContent = `${nut.karbohidrat_total_gr} g`;
    lblKarbohidratAkg.textContent = `${nut.karbohidrat_total_akg_persen}%`;

    // Fiber is omitted from nutrition table when null.
    if (nut.serat_pangan_gr !== null) {
      rowSeratPangan.style.display = 'flex';
      lblSeratPangan.textContent = `${nut.serat_pangan_gr} g`;
      lblSeratPanganAkg.textContent = `${nut.serat_pangan_akg_persen}%`;
    } else {
      rowSeratPangan.style.display = 'none';
    }

    lblGula.textContent = `${nut.gula_gr} g`;
    lblGaram.textContent = `${nut.garam_natrium_mg} mg`;
    lblGaramAkg.textContent = `${nut.garam_natrium_akg_persen}%`;

    nutritionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  const closeNutritionModal = () => {
    nutritionModal.classList.remove('active');
    document.body.style.overflow = '';
    
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  modalCloseBtn.addEventListener('click', closeNutritionModal);
  
  nutritionModal.addEventListener('click', (e) => {
    if (e.target === nutritionModal) {
      closeNutritionModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nutritionModal.classList.contains('active')) {
      closeNutritionModal();
    }
  });

  const populateProductSelect = () => {
    calcProductSelect.innerHTML = '';
    products.forEach(p => {
      const option = document.createElement('option');
      option.value = p.id;
      option.textContent = `${p.name} (Rp ${p.price.toLocaleString('id-ID')})`;
      calcProductSelect.appendChild(option);
    });
  };

  btnQtyMinus.addEventListener('click', () => {
    let val = parseInt(calcQtyInput.value, 10);
    if (isNaN(val)) val = 100;
    if (val > 10) {
      calcQtyInput.value = val - 10;
    }
  });

  btnQtyPlus.addEventListener('click', () => {
    let val = parseInt(calcQtyInput.value, 10);
    if (isNaN(val)) val = 100;
    calcQtyInput.value = val + 10;
  });

  btnAddItem.addEventListener('click', () => {
    const prodId = calcProductSelect.value;
    const qty = parseInt(calcQtyInput.value, 10);
    
    if (isNaN(qty) || qty < 10) {
      alert("Minimal pemesanan grosir untuk tiap item adalah 10 pcs!");
      return;
    }

    const product = products.find(p => p.id === prodId);
    if (!product) return;

    const existingItem = cart.find(item => item.productId === prodId);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cart.push({
        productId: prodId,
        qty: qty
      });
    }

    renderCart();
    showToast(`Berhasil menambahkan ${qty} pcs ${product.name}`);
  });

  const showToast = (message) => {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `
      <span><span class="toast-success-icon">✓</span> ${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 50);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  const renderCart = () => {
    cartBody.innerHTML = '';

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <tr class="empty-cart-row">
          <td colspan="5" class="text-center text-muted">Belum ada produk yang ditambahkan. Silakan pilih di atas.</td>
        </tr>
      `;
      updateCartSummary();
      return;
    }

    cart.forEach((item, index) => {
      const p = products.find(prod => prod.id === item.productId);
      const subtotal = p.price * item.qty;
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-desc">Berat/pcs: ${p.weight}</div>
        </td>
        <td class="text-right">Rp ${p.price.toLocaleString('id-ID')}</td>
        <td class="text-center">
          <input type="number" class="cart-qty-edit-input" data-index="${index}" value="${item.qty}" min="10" step="10" style="width: 70px; padding: 4px; text-align: center; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
        </td>
        <td class="text-right">Rp ${subtotal.toLocaleString('id-ID')}</td>
        <td class="text-center">
          <button class="btn-remove-item" data-index="${index}" aria-label="Hapus ${p.name}">&times;</button>
        </td>
      `;

      const qtyEditInput = row.querySelector('.cart-qty-edit-input');
      qtyEditInput.addEventListener('change', (e) => {
        let newQty = parseInt(e.target.value, 10);
        if (isNaN(newQty) || newQty < 1) newQty = 10;
        cart[index].qty = newQty;
        renderCart();
      });

      const removeBtn = row.querySelector('.btn-remove-item');
      removeBtn.addEventListener('click', () => {
        cart.splice(index, 1);
        renderCart();
      });

      cartBody.appendChild(row);
    });

    updateCartSummary();
  };

  const updateCartSummary = () => {
    let totalItems = 0;
    let totalWeightGr = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      const p = products.find(prod => prod.id === item.productId);
      totalItems += item.qty;
      totalWeightGr += (p.weight_val * item.qty);
      totalPrice += (p.price * item.qty);
    });

    const totalWeightKg = totalWeightGr / 1000;

    calcTotalItems.textContent = `${totalItems.toLocaleString('id-ID')} pcs`;
    calcTotalWeight.textContent = `${totalWeightKg.toFixed(2)} kg`;
    calcTotalPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
  };

  b2bForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      // Auto-add selected item if user bypasses "Tambah Item" button.
      const prodId = calcProductSelect.value;
      const qty = parseInt(calcQtyInput.value, 10);
      
      if (prodId && !isNaN(qty) && qty >= 10) {
        const product = products.find(p => p.id === prodId);
        if (product) {
          cart.push({ productId: prodId, qty: qty });
          renderCart();
          showToast(`Otomatis menambahkan ${qty} pcs ${product.name}`);
        }
      } else {
        alert("Silakan pilih produk dan jumlah (minimal 10 pcs) sebelum mengirim penawaran!");
        return;
      }
    }

    const name = document.getElementById('form-name').value;
    const business = document.getElementById('form-business').value;
    const region = document.getElementById('form-region').value;
    const isSample = document.getElementById('form-request-sample').checked;
    const notes = document.getElementById('form-notes').value;

    let totalItems = 0;
    let totalWeightGr = 0;
    let totalPrice = 0;
    let itemsText = '';

    cart.forEach((item, idx) => {
      const p = products.find(prod => prod.id === item.productId);
      const subtotal = p.price * item.qty;
      totalItems += item.qty;
      totalWeightGr += (p.weight_val * item.qty);
      totalPrice += subtotal;

      itemsText += `${idx + 1}. ${p.name} (Qty: ${item.qty} pcs, Subtotal: Rp ${subtotal.toLocaleString('id-ID')})\n`;
    });

    const totalWeightKg = totalWeightGr / 1000;

    let message = `Halo PT Bayu Bagus Bakery Nganjuk,\n`;
    message += `Saya tertarik untuk menjalin kemitraan / memesan roti grosir. Berikut adalah rincian estimasi kebutuhan kami:\n\n`;
    message += `*RINCIAN ESTIMASI ORDER:*\n`;
    message += `${itemsText}\n`;
    message += `*Total Item:* ${totalItems.toLocaleString('id-ID')} pcs\n`;
    message += `*Total Berat:* ${totalWeightKg.toFixed(2)} kg\n`;
    message += `*Total Estimasi Harga:* Rp ${totalPrice.toLocaleString('id-ID')}\n\n`;
    message += `*INFORMASI MITRA / USAHA:*\n`;
    message += `*Nama Lengkap:* ${name}\n`;
    message += `*Nama Usaha/Toko/Katering:* ${business}\n`;
    message += `*Wilayah Pengiriman:* ${region}\n`;
    message += `*Kebutuhan Sampel Gratis:* ${isSample ? 'Ya, Mohon dikirimkan sampel gratis' : 'Tidak'}\n`;
    if (notes.trim()) {
      message += `*Catatan Tambahan:* ${notes}\n`;
    }

    const waNumber = "6281234714911";
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

    window.open(waUrl, '_blank');
  });

  populateProductSelect();
  renderCatalog();
});
