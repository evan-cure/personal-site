document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.index-back');
    const mainContent = document.querySelector('.main-stack');
    const arrowText = backButton.querySelector('.image-text');
    let hasScrolled = false;
    
    // Add click handler for the button
    backButton.addEventListener('click', function(e) {
        if (window.scrollY === 0) {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    window.addEventListener('scroll', function() {
        const mainBottom = mainContent.getBoundingClientRect().bottom;
        const scrollPosition = window.scrollY;
        
        // Move to right on first scroll and stay there
        if (scrollPosition > 0) {
            if (!hasScrolled) {
                hasScrolled = true;
                backButton.classList.add('scrolled');
            }
        } else {
            // Only return to center when at very top
            backButton.classList.remove('scrolled');
            hasScrolled = false;
        }
        
        // Update arrow direction
        if (scrollPosition === 0) {
            arrowText.textContent = '↓';
        } else if (mainBottom < 0) {
            arrowText.textContent = '↑';
        } else {
            arrowText.textContent = '↓';
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