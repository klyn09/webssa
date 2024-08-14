// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
  
    alert('Thank you for your message!');
    form.reset(); // Clear form fields
  });
    