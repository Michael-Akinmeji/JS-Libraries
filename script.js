

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Glide === 'undefined') {
    console.error('Glide.js is not loaded.');
    return;
  }

  const glide = new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
  });

  glide.mount();
});