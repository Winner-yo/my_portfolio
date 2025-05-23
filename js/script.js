function runTypingEffect() {
  const text = 'I am Ashenafi Damena.';
  const typingElement = document.getElementById('typing-text');

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
