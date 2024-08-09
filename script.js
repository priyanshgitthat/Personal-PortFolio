
function menubtn() {
    // Toggle the active class on the side menu
    document.getElementById("panel").classList.toggle("active");
  
    // Add click event listeners to individual menu links (optional)
    const menuLinks = document.querySelectorAll("#panel a");
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById("panel").classList.remove("active");
      });
    });
  }
  

// ============== typing effect===========

var typed = new Typed('#element', {
  strings: ['coder','web developer','web designer','photo editor','coding enthusiast','video editor'],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});



