document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
  
      const name = form.querySelector('input[placeholder="Name"]').value.trim();
      const email = form.querySelector('input[placeholder="Email"]').value.trim();
      const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
      const message = form.querySelector('textarea').value.trim();
  
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields!');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
      }
  
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    });
  
    function validateEmail(email) {
      // Simple email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });

