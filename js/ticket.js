/* Dejahnae Fairclough - Coding Conf Ticket Generation */

// Get the saved registration information
const savedName = localStorage.getItem("confName");
const savedEmail = localStorage.getItem("confEmail");
const savedGithub = localStorage.getItem("confGithub");
const savedAvatar = localStorage.getItem("confAvatar");
const savedTicket = localStorage.getItem("confTicket");

// Check whether the visitor has registered
if (!savedName || !savedEmail || !savedGithub || !savedAvatar || !savedTicket) {

    // Return the visitor to the homepage if information is missing
    window.location.replace("index.html");

} else {

    // Display the personalized confirmation message
    document.getElementById("message").textContent =
        "Congrats, " + savedName + "! Your ticket is ready.";

    // Display the attendee's name
    document.getElementById("ticketName").textContent = savedName;

    // Display the uploaded profile picture
    document.getElementById("ticketAvatar").src = savedAvatar;

    // Display the GitHub username
    const githubLink = document.getElementById("ticketGithub");

    githubLink.textContent = savedGithub;

    // Link the username to the attendee's GitHub profile
    githubLink.href =
        "https://github.com/" + savedGithub.substring(1);

    // Display the ticket number
    document.getElementById("ticketNumber").textContent = savedTicket;

}