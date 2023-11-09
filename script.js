function sendMessage() {
    var userInput = document.getElementById("userInput").value;

    // Display the input text in the chat body
    displayMessage("User: " + userInput);

    // Add a response from the fake support
    displayMessage("Support: Thank you for your message. Our team will get back to you shortly.");

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
