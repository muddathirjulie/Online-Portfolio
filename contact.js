document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector(".contact-form");

  contactForm.onsubmit = function(event) {
    // Allow the form submission to proceed to Formspree
    // Remove event.preventDefault() since Formspree is handling the submission

    // Optionally, handle resetting the form and redirecting after submission
    setTimeout(function() {
      // Reset the form fields after submission
      contactForm.reset();
      // Redirect to a confirmation page after submission
      window.location.href = "thank-you.html"; // Change to your confirmation page URL
    }, 500); // Delay can be adjusted if needed
  };
});
