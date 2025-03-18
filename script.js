document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.index-back .image-text');
    const mainContent = document.querySelector('.main-stack');
    
    window.addEventListener('scroll', function() {
      const mainBottom = mainContent.getBoundingClientRect().bottom;
      if (mainBottom < 0) {
        backButton.textContent = '↑';
      } else {
        backButton.textContent = '↓';
      }
    });
  });