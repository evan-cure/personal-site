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
  
    const contactText1 = document.getElementById('contact-text1');
    const contactText2 = document.getElementById('contact-text2');
    let isEmail1 = false;
    let isEmail2 = false;
    
    contactText1.addEventListener('click', function() {
      if (!isEmail1) {
        contactText1.textContent = 'ev.cureton@gmail.com';
        isEmail1 = true;
      }
    });
    contactText2.addEventListener('click', function() {
        if (!isEmail2) {
          contactText2.textContent = 'ev.cureton@gmail.com';
          isEmail2 = true;
        }
      });
  });