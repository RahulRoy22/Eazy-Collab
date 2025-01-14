
//   const menuBtn = document.getElementById('menu-btn');
//   const navbar = document.getElementById('navbar');

//   menuBtn.addEventListener('click', () => {
//     const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
//     menuBtn.setAttribute('aria-expanded', !isExpanded);
//     navbar.classList.toggle('hidden');
//   });
  
 

//   document.getElementById('contact-form').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const formData = { name, email, message };

//     try {
//         const response = await fetch('http://localhost:5500/formPost', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         alert(result.message);
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('Error submitting form. Please try again later.');
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');
  
    if (menuBtn && navbar) {
      menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        navbar.classList.toggle('hidden');
      });
    } else {
      console.error('Menu button or navbar not found.');
    }
  
    const contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        const formData = { name, email, message };
  
        try {
          console.log('Form data being sent:', formData);
  
          const response = await fetch('http://localhost:5500/formPost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          console.log('Response received:', response);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log('Result:', result);
  
          alert(result.message);
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again later.');
        }
      });
    } else {
      console.error('Contact form not found.');
    }
  });
  