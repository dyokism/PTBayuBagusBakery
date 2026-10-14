/**
 * Factory Video Player Component
 * Mounts the YouTube iframe lazily upon user interaction to maintain high performance.
 */
export const initVideoPlayer = () => {
  const container = document.getElementById('factory-video-container');
  const poster = document.getElementById('factory-video-poster');

  if (!container || !poster) return;

  const mountVideo = () => {
    // Ruang Tamu Creative - Company Profile PT. Bayu Bagus Bakery 2022
    const videoId = '2bEgLboJyPY';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
    iframe.title = 'Company Profile PT. Bayu Bagus Bakery - Pabrik Roti Nganjuk';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.setAttribute('playsinline', '1');
    iframe.loading = 'eager';

    container.appendChild(iframe);
    poster.style.opacity = '0';
    setTimeout(() => {
      poster.remove();
    }, 200);
  };

  poster.addEventListener('click', mountVideo, { once: true });
  poster.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mountVideo();
    }
  }, { once: true });
};
