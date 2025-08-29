// Dynamically loads all images from gallery-images.json and displays in a modern collage
// Modal for fullscreen view

document.addEventListener('DOMContentLoaded', function() {
  const collage = document.getElementById('gallery-collage');
  fetch('gallery-images.json')
    .then(res => res.json())
    .then(data => {
      const allImages = [];
      for (const [folder, images] of Object.entries(data)) {
        images.forEach(img => {
          allImages.push({
            src: `assets/photos/${folder}/${img}`,
            alt: folder.replace(/_/g, ' ') + ' image'
          });
        });
      }
      // Shuffle for collage effect
      for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
      }
      // Build collage
      collage.innerHTML = allImages.map(img =>
        `<div class="collage-img-wrap"><img src="${img.src}" alt="${img.alt}" loading="lazy"/></div>`
      ).join('');
      // Modal logic
      let modal = document.getElementById('collage-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'collage-modal';
        modal.style.display = 'none';
        modal.innerHTML = `
          <div class="collage-modal-overlay"></div>
          <div class="collage-modal-content">
            <img class="collage-modal-img" src="" alt="" />
            <button class="collage-modal-close" aria-label="Close">&times;</button>
          </div>
        `;
        document.body.appendChild(modal);
      }
      const overlay = modal.querySelector('.collage-modal-overlay');
      const content = modal.querySelector('.collage-modal-content');
      const imgEl = modal.querySelector('.collage-modal-img');
      const closeBtn = modal.querySelector('.collage-modal-close');
      function openModal(src, alt) {
        imgEl.src = src;
        imgEl.alt = alt || '';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        modal.style.display = 'none';
        imgEl.src = '';
        document.body.style.overflow = '';
      }
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);
      document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block' && e.key === 'Escape') closeModal();
      });
      document.querySelectorAll('.collage-img-wrap img').forEach(img => {
        img.addEventListener('click', function() {
          openModal(img.src, img.alt);
        });
      });
    });
});
