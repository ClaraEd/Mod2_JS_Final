const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Greeting message
const greetingMessage = "Hello! How can I assist you today?";

// Initial greeting from AI
appendMessage("A", greetingMessage);

// Send message when Enter key is pressed
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== "") {
    appendMessage("You", message);
    userInput.value = "";
    setTimeout(() => respondToUser(message), 1000);
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(message) {
  const response = generateResponse(message);
  appendMessage("AI", response);
}

function generateResponse(message) {
  // Define different responses based on user input
  if (message.toLowerCase().includes("help")) {
    return "Sure, I'm here to help. What do you need assistance with?";
  } else if (message.toLowerCase().includes("hello")) {
    return "Hello, How can I assist you today?";
  } else if (message.toLowerCase().includes("booking")) {
    return "Absolutely! I can assist you with booking. Please provide me with the details.";
  } else if (message.toLowerCase().includes("menu")) {
    return "Great choice! Our menu offers a variety of delicious options. Would you like me to provide more details?";
  } else if (message.toLowerCase().includes("agent")) {
    return "Sure! I will connect you to our agent as soon as possible!";
  } else if (message.toLowerCase().includes("thank")) return "You are welcome!";
  else {
    // For other inquiries, provide a general response
    return "Thank you for reaching out. If you need further assistance, feel free to ask!";
  }
}

function toggleChatOverlay() {
  const chatOverlay = document.getElementById("chat-overlay");
  chatOverlay.style.display =
    chatOverlay.style.display === "none" || chatOverlay.style.display === ""
      ? "block"
      : "none";
}
