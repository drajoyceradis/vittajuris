document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const scrollThreshold = 50; 

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});