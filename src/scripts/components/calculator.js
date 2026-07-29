export const initCalculator = (products, showToast) => {
  const calcSelect = document.getElementById('calc-product-select');
  const qtyInput = document.getElementById('calc-qty-input');
  const btnMinus = document.getElementById('calc-qty-minus');
  const btnPlus = document.getElementById('calc-qty-plus');
  const btnAdd = document.getElementById('btn-add-item');
  const cartBody = document.getElementById('cart-body');
  
  const txtTotalItems = document.getElementById('calc-total-items');
  const txtTotalWeight = document.getElementById('calc-total-weight');
  const txtTotalPrice = document.getElementById('calc-total-price');
  const b2bForm = document.getElementById('b2b-form');

  if (!calcSelect || !cartBody) return { addToCart: () => {} };

  const cart = [];

  calcSelect.innerHTML = products.map(p => 
    `<option value="${p.id}">${p.name} (Rp ${p.price.toLocaleString('id-ID')})</option>`
  ).join('');

  if (btnMinus) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 100;
      if (val > 10) qtyInput.value = val - 10;
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 100;
      qtyInput.value = val + 10;
    });
  }

  const addToCart = (product, qty = 100) => {
    const existing = cart.find(item => item.productId === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ productId: product.id, qty });
    }
    renderCart();
    showToast(`Berhasil menambahkan ${qty} pcs ${product.name}`);
  };

  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      const prodId = calcSelect.value;
      const qty = parseInt(qtyInput.value, 10);
      if (isNaN(qty) || qty < 10) {
        alert('Minimal pemesanan grosir adalah 10 pcs!');
        return;
      }
      const prod = products.find(p => p.id === prodId);
      if (prod) addToCart(prod, qty);
    });
  }

  const renderCart = () => {
    cartBody.innerHTML = '';
    
    if (cart.length === 0) {
      cartBody.innerHTML = `
        <tr class="empty-cart-row">
          <td colspan="5" class="text-center text-muted">Belum ada produk. Silakan tambah item di atas.</td>
        </tr>
      `;
      updateSummary();
      return;
    }

    cart.forEach((item, index) => {
      const p = products.find(prod => prod.id === item.productId);
      const subtotal = p.price * item.qty;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <strong class="cart-item-title">${p.name}</strong>
          <span class="cart-item-sub">${p.weight} / pcs</span>
        </td>
        <td class="text-right">Rp ${p.price.toLocaleString('id-ID')}</td>
        <td class="text-center">
          <div class="cart-qty-group">
            <button type="button" class="btn-qty-mini btn-qty-dec">-</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button type="button" class="btn-qty-mini btn-qty-inc">+</button>
          </div>
        </td>
        <td class="text-right" style="font-weight:700;">Rp ${subtotal.toLocaleString('id-ID')}</td>
        <td class="text-center">
          <button type="button" class="btn-remove-item" aria-label="Hapus item">&times;</button>
        </td>
      `;

      tr.querySelector('.btn-qty-dec').addEventListener('click', () => {
        if (item.qty > 10) {
          item.qty -= 10;
          renderCart();
        }
      });

      tr.querySelector('.btn-qty-inc').addEventListener('click', () => {
        item.qty += 10;
        renderCart();
      });

      tr.querySelector('.btn-remove-item').addEventListener('click', () => {
        cart.splice(index, 1);
        renderCart();
      });

      cartBody.appendChild(tr);
    });

    updateSummary();
  };

  const updateSummary = () => {
    let totalItems = 0;
    let totalWeightGr = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      const p = products.find(prod => prod.id === item.productId);
      totalItems += item.qty;
      totalWeightGr += (p.weight_val * item.qty);
      totalPrice += (p.price * item.qty);
    });

    if (txtTotalItems) txtTotalItems.textContent = `${totalItems.toLocaleString('id-ID')} pcs`;
    if (txtTotalWeight) txtTotalWeight.textContent = `${(totalWeightGr / 1000).toFixed(2)} kg`;
    if (txtTotalPrice) txtTotalPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
  };

  if (b2bForm) {
    b2bForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        alert('Silakan pilih produk dan jumlah sebelum mengirim permintaan penawaran!');
        return;
      }

      const name = document.getElementById('form-name').value;
      const business = document.getElementById('form-business').value;
      const region = document.getElementById('form-region').value;
      const isSample = document.getElementById('form-request-sample')?.checked;
      const notes = document.getElementById('form-notes')?.value || '';

      let itemsText = '';
      let totalItems = 0;
      let totalWeightGr = 0;
      let totalPrice = 0;

      cart.forEach((item, idx) => {
        const p = products.find(prod => prod.id === item.productId);
        const subtotal = p.price * item.qty;
        totalItems += item.qty;
        totalWeightGr += (p.weight_val * item.qty);
        totalPrice += subtotal;

        itemsText += `${idx + 1}. ${p.name} (${item.qty} pcs - Rp ${subtotal.toLocaleString('id-ID')})\n`;
      });

      let message = `Halo PT Bayu Bagus Bakery Nganjuk,\n`;
      message += `Saya ingin mengajukan penawaran/sampel roti grosir:\n\n`;
      message += `*ESTIMASI PESANAN:*\n${itemsText}\n`;
      message += `*Total Volume:* ${totalItems.toLocaleString('id-ID')} pcs (${(totalWeightGr/1000).toFixed(2)} kg)\n`;
      message += `*Total Estimasi:* Rp ${totalPrice.toLocaleString('id-ID')}\n\n`;
      message += `*DATA MITRA:*\n`;
      message += `*Nama:* ${name}\n`;
      message += `*Usaha:* ${business}\n`;
      message += `*Lokasi:* ${region}\n`;
      message += `*Permintaan Sampel:* ${isSample ? 'Ya' : 'Tidak'}\n`;
      if (notes.trim()) message += `*Catatan:* ${notes}\n`;

      const waUrl = `https://wa.me/6281234714911?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  return { addToCart };
};
