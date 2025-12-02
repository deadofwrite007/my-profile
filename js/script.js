document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("formStatus").innerText = "Please fill out all fields.";
        document.getElementById("formStatus").style.color = "red";
    } else {
        document.getElementById("formStatus").innerText = "Message sent successfully!";
        document.getElementById("formStatus").style.color = "green";

        // Clear fields
        document.getElementById("contactForm").reset();
    }
});
