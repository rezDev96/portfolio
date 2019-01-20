// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.info-column', {
  duration: 2000,
  origin: 'bottom',
  distance: '20px'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin: 'left',
  distance: '80px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin: 'right',
  distance: '80px'
});
sr.reveal('.showcase-top', {
  duration: 2000,
  origin: 'top',
  distance: '20px'
});