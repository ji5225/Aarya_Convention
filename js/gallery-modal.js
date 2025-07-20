// Minimal, non-intrusive fullscreen modal for gallery images
// Only for main gallery cards with .gallery-view-btn

document.addEventListener('DOMContentLoaded', function() {
  // Create modal only once
  let modal = document.getElementById('gallery-fullscreen-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gallery-fullscreen-modal';
    modal.style.display = 'none';
    modal.innerHTML = `
      <div class="gallery-modal-overlay" style="position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(24,20,28,0.82);z-index:9999;"></div>
      <div class="gallery-modal-content" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:#181818;border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,0.22);padding:0;max-width:96vw;max-height:92vh;z-index:10000;display:flex;flex-direction:column;align-items:center;">
        <img class="gallery-modal-img" src="" alt="" style="max-width:90vw;max-height:80vh;border-radius:20px;margin:0;box-shadow:0 4px 16px rgba(0,0,0,0.18);background:#222;" />
        <button class="gallery-modal-close" aria-label="Close image viewer" style="position:absolute;top:10px;right:18px;font-size:2.1rem;background:none;border:none;color:#fff;opacity:0.85;cursor:pointer;z-index:10001;">&times;</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  const overlay = modal.querySelector('.gallery-modal-overlay');
  const content = modal.querySelector('.gallery-modal-content');
  const img = modal.querySelector('.gallery-modal-img');
  const closeBtn = modal.querySelector('.gallery-modal-close');

  function openModal(src, alt) {
    img.src = src;
    img.alt = alt || '';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    img.src = '';
    document.body.style.overflow = '';
  }
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block' && e.key === 'Escape') closeModal();
  });

  // Attach to all .gallery-view-btn buttons
  document.querySelectorAll('.gallery-view-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const card = btn.closest('.gallery-card');
      if (!card) return;
      const imgEl = card.querySelector('.gallery-img-wrap img');
      if (!imgEl) return;
      openModal(imgEl.src, imgEl.alt);
    });
  });
});
