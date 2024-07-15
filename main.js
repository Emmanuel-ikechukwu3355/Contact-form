// Form validation
// const form= document.querySelector('#contactForm');
// const nameInput= document.querySelector('#first-name');
// const emailInput= document.querySelector('#email');
// const messageInput= document.querySelector('#message');

// const form = document.getElementById('contactForm');
// const responseMessage = document.getElementById('response-message');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//         e.preventDefault();
//         sendFormData();
//     } else {
//         alert('please fill out all required fields.');
//     }

//     responseMessage.textContent = 'Your response has been recorded. Edit another response?;'
//     responseMessage.style.display = "block";
// });

// function validateForm() {
//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const message = messageInput.value.trim();

//     if (nameInput && emailInput && messageInput) {
//         return true;
//     } else {
//         return false;
//     }
//     }

//     function sendFormData() {
//         const formData = new FormData(form);
//         fetch('/contact',{
//             method: 'POST',
//             body: formData,
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.success) {

//               showSuccess('Message sent successfully!');
//             } else {
//                 showError("Error sending message.");
//             }
//         })
//         .catch((error) => showError('Error sending message.'));
//     }

//     nameInput.addEventListener('input', () => {
//         const name = nameInput.ariaValueMax.trim();
//         if (name.length < 2) {
//             nameInput.setCustomValidity('Name must be at least 2 characters long.');
//         } else {
//             nameInput.setCustomValidity("");
//         }
//     });

//     emailInput.addEventListener('input', () => {
//         const name = emailInput.ariaValueMax.trim();
//         if (!email.includes('@')) {
//             emailInput.setCustomValidity('invalid email address.');
//         }
//     });

//     const successMessage = document.querySelector('#success-message');
//     const errorMessage = document.querySelector('#error-message');

//     function showSuccess(message) {
//         successMessage.textContent = message;
//         successMessage.style.display ="block";
//         errorMessage.style.display ="none";
//     }

//     function showError(message) {
//         successMessage.textContent = message;
//         successMessage.style.display ="block";
//         errorMessage.style.display ="none";
//     } 


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks for completing the form. We will be in touch soon!');
    });
    
    
    
