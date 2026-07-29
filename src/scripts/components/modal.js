export const initNutritionModal = () => {
  const dialog = document.getElementById('nutrition-dialog');
  const closeBtn = document.getElementById('dialog-close-btn');

  if (!dialog) return { openModal: () => {} };

  // Native <dialog> backdrop click dismiss pattern
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isClickInside = (
      rect.top <= event.clientY && event.clientY <= rect.bottom &&
      rect.left <= event.clientX && event.clientX <= rect.right
    );
    if (!isClickInside) {
      dialog.close();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  const openModal = (product) => {
    const img = document.getElementById('modal-img');
    const name = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const price = document.getElementById('modal-price');

    if (img) img.src = product.img;
    if (name) name.textContent = product.name;
    if (desc) desc.textContent = product.desc;
    if (price) price.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;

    const nut = product.nutrition;
    const saji = document.getElementById('lbl-saji');
    const energi = document.getElementById('lbl-energi');
    const lemak = document.getElementById('lbl-lemak');
    const protein = document.getElementById('lbl-protein');
    const karbo = document.getElementById('lbl-karbo');

    if (saji) saji.textContent = `Takaran Saji: ${nut.takaran_saji_gr}g`;
    if (energi) energi.textContent = `${nut.energi_total_kkal} kkal`;
    if (lemak) lemak.textContent = `${nut.lemak_total_gr}g (${nut.lemak_total_akg_persen}% AKG)`;
    if (protein) protein.textContent = `${nut.protein_gr}g (${nut.protein_akg_persen}% AKG)`;
    if (karbo) karbo.textContent = `${nut.karbohidrat_total_gr}g (${nut.karbohidrat_total_akg_persen}% AKG)`;

    dialog.showModal();
  };

  return { openModal };
};
