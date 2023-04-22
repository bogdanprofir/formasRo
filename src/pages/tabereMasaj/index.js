document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropdownMenu = document.querySelector('.dropdown_menu');
  
    toggleBtn.onclick = function () {
      dropdownMenu.classList.toggle('open');
  
      const isOpen = dropdownMenu.classList.contains('open');
      toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  });

  
  const galleries = document.querySelectorAll('.gallery');

  galleries.forEach((gallery) => {
    const slider = gallery.querySelector('.slider');
    const slides = slider.querySelectorAll('img');
    const prevButton = gallery.querySelector('.prev');
    const nextButton = gallery.querySelector('.next');
  
    let currentSlide = 0;
  
    function updateSlider() {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      updateSlider();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      updateSlider();
    }
  
    updateSlider();
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  });
  
