const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function filterImages(category) {
  galleryImages.forEach(img => {
    if (category === 'all') {
      img.style.display = 'block';
    } else {
      img.style.display = img.classList.contains(category) ? 'block' : 'none';
    }
  });
}
