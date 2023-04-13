document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('nav');
    var main = document.getElementById('main');
    if(navbar){
    var navbarHeight = navbar.offsetHeight;
    var mainTop = main.offsetTop;
    
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset;
      var navbarTop = navbar.offsetTop;
      
      if (navbarTop > mainTop) {
        navbar.classList.add('sticky');
        main.style.paddingTop = navbarHeight + 'px';
      } else {
        navbar.classList.remove('sticky');
        main.style.paddingTop = 0;
      }
    });
}
  });
  