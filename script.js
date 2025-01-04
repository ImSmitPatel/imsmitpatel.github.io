// Toggle menu when clicked on Hamburger
// Toggle menu to inactive when clicked on menu links

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
}


// Toggle menu to inactive when clicked outside menu box
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');

    // If the click is outside the nav menu and the hamburger icon, close the menu
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active');  // Hide the menu
        hamburger.classList.remove('active'); // Reset hamburger icon to default state
    }
});
  