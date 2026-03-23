document.addEventListener("DOMContentLoaded", () => {
  console.log("Background image is disabled for interaction.");
});
(function(){
   emailjs.init("SzxlHRy5_sMUejOLM"); 
})();
document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_rtu5a8u", "template_ggh66xc", this) 
	    .then(function(response) {
        alert("Form submitted successfully! Check your email.");
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        alert("Failed to send form. Please try again.");
        console.log("FAILED...", error);
    });
});