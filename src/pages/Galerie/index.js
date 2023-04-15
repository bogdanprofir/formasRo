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

  // gallery

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
  

// select the modal and its content
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

// select all the tip images
const tipImages = document.querySelectorAll(".tip img");

// add click event listener to each tip image
tipImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    // set the modal content to the clicked image
    modalContent.src = e.target.src;

    // show the modal
    modal.style.display = "block";
  });
});

// select all the video thumbnails
const videoThumbnails = document.querySelectorAll(".video-thumbnail");

// add click event listener to each video thumbnail
videoThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    // set the modal content to the clicked video's source
    modalContent.src = e.target.dataset.src;

    // show the modal
    modal.style.display = "block";
  });
});

// add click event listener to the modal content
modal.addEventListener("click", (e) => {
  // check if the clicked element is the modal content or a child of it
  if (e.target === modalContent || modalContent.contains(e.target)) {
    return; // do nothing
  }

  // hide the modal when the user clicks outside the modal content
  modal.style.display = "none";
});

// add click event listener to the close button
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  // hide the modal when the close button is clicked
  modal.style.display = "none";
});

// add click event listener to the modal content to enable fullscreen mode
modalContent.addEventListener("click", () => {
  if (modalContent.requestFullscreen) {
    modalContent.requestFullscreen();
  } else if (modalContent.webkitRequestFullscreen) { /* Safari */
    modalContent.webkitRequestFullscreen();
  } else if (modalContent.msRequestFullscreen) { /* IE11 */
    modalContent.msRequestFullscreen();
  }
});

const videoIframe = document.querySelector(".video-iframe");
videoIframe.setAttribute("allowfullscreen", true);




    


// gallery end   