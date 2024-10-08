// toggle icon bar
let menuIcon = document.querySelector('#menu=icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

    }
    // scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {

                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');

                });
            }
        })
        // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}'

    // Select elements
const contactForm = document.getElementById('contact-form');

// Add event listener to form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!name || !email || !message) {
    displayMessage('Please fill in all fields.', 'error');
    return;
  }

  // Simulate form submission (e.g., send data to server)
  displayMessage('Thank you for your message! I will get back to you soon.', 'success');

  // Reset form fields
  contactForm.reset();
});

// Function to display messages
function displayMessage(msg, type) {
  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = msg;
  responseMessage.className = type; // Add class for styling
}
