import { initHeader } from './components/header.js';
import { initVideoPlayer } from './components/video-player.js';
import { initProductCatalog } from './components/product-catalog.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Header (Scroll handling & mobile drawer)
  initHeader();

  // Initialize Factory Video Player
  initVideoPlayer();

  // Initialize Product Catalog Filter Tabs
  initProductCatalog();

  // Lightweight Interactive Google Maps Loader
  const mapContainer = document.getElementById('map-container');
  const mapPlaceholder = document.getElementById('map-placeholder');
  let mapLoaded = false;

  const loadMap = () => {
    if (mapLoaded || !mapContainer) return;
    mapLoaded = true;

    const iframe = document.createElement('iframe');
    iframe.title = 'Peta Lokasi Pabrik PT Bayu Bagus Bakery di Baron, Nganjuk';
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4!2d112.0735154!3d-7.5669809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784722817720c9%3A0x3e38723c61e85a20!2sPT%20Bayu%20Bagus%20Bakery!5e0!3m2!1sid!2sid!4v1';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.style.display = 'block';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';

    if (mapPlaceholder) mapPlaceholder.style.opacity = '0';
    setTimeout(() => {
      if (mapPlaceholder) mapPlaceholder.remove();
      mapContainer.appendChild(iframe);
    }, 200);
  };

  if (mapContainer) {
    mapContainer.addEventListener('mouseenter', loadMap, { once: true });
    mapContainer.addEventListener('touchstart', loadMap, { once: true, passive: true });
    mapContainer.addEventListener('click', loadMap, { once: true });
    mapContainer.addEventListener('focus', loadMap, { once: true });
  }
});
