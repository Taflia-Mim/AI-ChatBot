function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
  
    const userMessage = input.value.trim();
    if (!userMessage) return;
  
    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = '';
  
    // Basic AI reply (you can improve this later)
    setTimeout(() => {
      let reply = generateBotReply(userMessage);
      chatBox.innerHTML += `<p><strong>AI ChatBot:</strong> ${reply}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }
  
  function generateBotReply(message) {
    message = message.toLowerCase();
    if (message.includes("hello")) return "Hi there! How can I help you today?";
    if (message.includes("your name")) return "I'm AI ChatBot, your virtual assistant!";
    if (message.includes("how are you")) return "I'm doing great! Thanks for asking.";
    return "I'm not sure how to respond to that. Try asking something else.";
  }
  