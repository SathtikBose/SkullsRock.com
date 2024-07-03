// Example of simple animation
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  header.style.opacity = 0;
  
  setTimeout(() => {
      fadeIn(header);
  }, 500);
  
  function fadeIn(element) {
      let op = 0.1;  // initial opacity
      const timer = setInterval(function () {
          if (op >= 1){
              clearInterval(timer);
          }
          element.style.opacity = op;
          op += 0.1;
      }, 50);
  }
});
