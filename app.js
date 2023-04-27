// Select the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent the default link behavior
    e.preventDefault();
    
    // Get the target section from the link's href attribute
    const targetSection = document.querySelector(link.getAttribute('href'));
    
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Select the "Learn More" button
const learnMoreBtn = document.querySelector('.learn-more-btn');

// Add a click event listener to the button
learnMoreBtn.addEventListener('click', () => {
  // Display a message to the user
  alert('Sorry, this feature is not available yet.');
});
