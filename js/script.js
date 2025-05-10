function runTypingEffect() {
  const text = 'I am Ashenafi Damena.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;
  const cursorElement = document.getElementById('cursor');
  const cursorBlinkDelay = 500;
  const cursorBlinkDuration = 500;
  const cursorBlinkInterval = setInterval(() => {
    cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
  }, cursorBlinkDelay);
  setTimeout(() => {
    clearInterval(cursorBlinkInterval);
    cursorElement.style.opacity = '1';
    cursorElement.style.transition = `opacity ${cursorBlinkDuration}ms`;
    cursorElement.style.opacity = '0';
  }, typingDelay * text.length + cursorBlinkDelay);
  typingElement.textContent = '';
  cursorElement.style.opacity = '1';
  cursorElement.style.transition = `opacity ${cursorBlinkDuration}ms`;
  cursorElement.style.opacity = '0';

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
