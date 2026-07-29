export const initCatalog = (products, openNutritionModal, onQuickAdd) => {
  const catalogGrid = document.getElementById('catalog-grid');
  const searchInput = document.getElementById('catalog-search');
  const filterTabsContainer = document.getElementById('catalog-filters');

  if (!catalogGrid) return;

  let currentCategory = 'all';
  let searchQuery = '';

  const render = () => {
    const fragment = document.createDocumentFragment();
    catalogGrid.innerHTML = '';

    const filtered = products.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      const emptyCard = document.createElement('div');
      emptyCard.className = 'text-center text-muted';
      emptyCard.style.cssText = 'grid-column: 1 / -1; padding: 48px 0; font-weight: 600;';
      emptyCard.textContent = 'Roti tidak ditemukan. Silakan gunakan kata kunci lain.';
      fragment.appendChild(emptyCard);
      catalogGrid.appendChild(fragment);
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';

      let badgeText = product.producer;
      if (product.isTerlaris) badgeText = 'Terlaris';
      else if (product.isKatering) badgeText = 'B2B Katering';

      card.innerHTML = `
        <div class="product-image-container">
          <span class="card-badge">${badgeText}</span>
          <img src="${product.img}" alt="${product.name}" loading="lazy" width="280" height="210">
          <span class="product-price-tag">Rp ${product.price.toLocaleString('id-ID')}</span>
        </div>
        <div class="product-details-body">
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.desc}</p>
          <div class="product-card-actions">
            <button class="btn-card-gizi" type="button">Nilai Gizi</button>
            <button class="btn-card-add" type="button">+ Kalkulator</button>
          </div>
        </div>
      `;

      const giziBtn = card.querySelector('.btn-card-gizi');
      const addBtn = card.querySelector('.btn-card-add');

      if (giziBtn) giziBtn.addEventListener('click', () => openNutritionModal(product));
      if (addBtn) addBtn.addEventListener('click', () => onQuickAdd(product));

      fragment.appendChild(card);
    });

    catalogGrid.appendChild(fragment);
  };

  // Debounced search input (150ms)
  let searchTimeout = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        render();
      }, 150);
    });
  }

  if (filterTabsContainer) {
    filterTabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;

      filterTabsContainer.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category || 'all';
      render();
    });
  }

  render();
};
