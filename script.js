
// JavaScript to show only the selected content section
document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    
    // Get all content sections
    const contentSections = document.querySelectorAll('.content');
    
    // Function to show the specified section and hide others
    function showSection(sectionId) {
        // Hide all content sections first
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show only the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }
    
    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the section ID from the href attribute
            const sectionId = this.getAttribute('href').substring(1);
            
            // Show the corresponding section
            showSection(sectionId);
            
            // Update active state in navbar
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Show the home section by default when page loads
    showSection('home');
    
    // Set the home link as active by default
    navLinks[0].classList.add('active');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}