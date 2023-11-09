document.addEventListener("DOMContentLoaded", function () {
    // Execute when the page is loaded
    displayMessage("Support: Welcome to our fake support chat!");
    displayMessage("Support: Please click the 'Send' button to start the conversation.");
});

var messages = [
    "Support: Thank you for contacting us!",
    "Support: Our team is working to resolve the technical issues.",
    "Support: In the meantime, feel free to ask any questions.",
    // Add more messages as needed
];

var messageIndex = 0;

function sendMessage() {
    if (messageIndex < messages.length) {
        // Display the next message in the array
        displayMessage(messages[messageIndex]);
        messageIndex++;
    } else {
        // If all messages are displayed, show a default response
        displayMessage("Support: Thank you for your messages. Our team will get back to you shortly.");
    }

    // Clear the input field
    document.getElementById("userInput").value = "";
}

function displayMessage(message) {
    var chatBody = document.getElementById("chatBody");
    var newMessage = document.createElement("div");
    newMessage.className = "fake-message";
    newMessage.textContent = message;
    chatBody.appendChild(newMessage);
}
