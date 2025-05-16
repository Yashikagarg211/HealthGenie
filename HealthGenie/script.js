// Get all links with class 'nav-link'
const links = document.querySelectorAll('.nav');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the normal link behavior

    const targetId = this.getAttribute('href').substring(1); // Get 'services', 'about', etc.
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth' // Smooth scroll
    });
  });
});

  
