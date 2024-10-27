const submit = document.getElementById("contact");

const resetForm = function () {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
};

submit.addEventListener("submit", function (e) {
  e.preventDefault();

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send email using EmailJS
  emailjs.send("service_hp2t9pl", "template_k0jl9fi", templateParams).then(
    function (response) {
      alert("Message sent successfully!");
      resetForm();
    },
    function (error) {
      alert("Failed to send the message. Please try again later.");
      console.error("Error:", error);
    }
  );
});
