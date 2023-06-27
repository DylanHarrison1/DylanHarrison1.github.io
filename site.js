$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var bannerHeight = $('.banner').outerHeight();

    if (scrollTop === 0) {
      $('.banner').removeClass('hidden');
    } else if (scrollTop < bannerHeight) {
      var opacity = 1 - (scrollTop / bannerHeight);
      $('.banner img').css('opacity', opacity);
    } else {
      $('.banner').addClass('hidden');
    }
  });
});


// Add smooth scrolling to nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}