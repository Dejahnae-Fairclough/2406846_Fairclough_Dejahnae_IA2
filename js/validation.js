/* Dejahnae Fairclough - Coding Conf Registration Validation */

// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Listen for the form submission
registrationForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const github = document.getElementById("github").value.trim();
    const avatar = document.getElementById("avatar").files[0];

    // Get the error message areas
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const githubError = document.getElementById("githubError");
    const avatarError = document.getElementById("avatarError");
    const generalError = document.getElementById("generalError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    githubError.textContent = "";
    avatarError.textContent = "";
    generalError.textContent = "";

    // Keep track of whether the form is valid
    let valid = true;

    // Check that the full name is not empty
    if (fullName === "") {
        nameError.textContent = "Please enter your full name.";
        valid = false;
    }

    // Check the email address format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Check the GitHub username
    const githubPattern = /^@[a-zA-Z0-9-]+$/;

    if (!githubPattern.test(github)) {
        githubError.textContent =
            "Your GitHub username must begin with @ and contain valid characters.";
        valid = false;
    }

    // Check that a profile picture was selected
    if (!avatar) {

        avatarError.textContent = "Please upload a profile picture.";
        valid = false;

    } else {

        // Check the image file type
        if (avatar.type !== "image/jpeg" && avatar.type !== "image/png") {
            avatarError.textContent = "Only JPG and PNG images are accepted.";
            valid = false;
        }

        // Check that the image is smaller than 500KB
        if (avatar.size >= 500 * 1024) {
            avatarError.textContent = "Your image must be smaller than 500KB.";
            valid = false;
        }
    }

    // Stop if any information is invalid
    if (!valid) {
        return;
    }

    // Read the selected profile picture
    const reader = new FileReader();

    reader.onload = function () {

        try {

            // Save the registration information in localStorage
            localStorage.setItem("confName", fullName);
            localStorage.setItem("confEmail", email);
            localStorage.setItem("confGithub", github);
            localStorage.setItem("confAvatar", reader.result);
            localStorage.setItem("confTicket", "#01609");

            // Move to the ticket confirmation page
            window.location.href = "ticket.html";

        } catch (error) {

            generalError.textContent =
                "Your details could not be saved. Please try another image.";

        }
    };

    // Show an error if the image cannot be read
    reader.onerror = function () {

        generalError.textContent =
            "There was a problem reading your image. Please try again.";

    };

    // Convert the image into a format that can be stored
    reader.readAsDataURL(avatar);

});
