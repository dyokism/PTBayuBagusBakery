/**
 * Product Catalog Filter Tabs Component
 * Filters product category groups and wholesale tables on mobile & desktop.
 */
export const initProductCatalog = () => {
  const tabsContainer = document.querySelector('.catalog-category-tabs');
  if (!tabsContainer) return;

  const tabButtons = tabsContainer.querySelectorAll('.category-tab-btn');
  const categoryGroups = document.querySelectorAll('.category-group[data-category]');
  const wholesaleSection = document.querySelector('.wholesale-table-section[data-category]');

  const handleTabSwitch = (targetTab) => {
    tabButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-tab') === targetTab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    categoryGroups.forEach((group) => {
      const groupCategory = group.getAttribute('data-category');
      if (targetTab === 'all' || targetTab === groupCategory) {
        group.classList.remove('hidden-by-tab');
      } else {
        group.classList.add('hidden-by-tab');
      }
    });

    if (wholesaleSection) {
      if (targetTab === 'all' || targetTab === 'grosir') {
        wholesaleSection.classList.remove('hidden-by-tab');
      } else {
        wholesaleSection.classList.add('hidden-by-tab');
      }
    }
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      if (tabKey) handleTabSwitch(tabKey);
    });
  });
};
