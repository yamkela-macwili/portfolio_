document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.falling-letters');
  const letters = ['C++', 'Java', 'R'];

  letters.forEach((letter) => {
    const fallingLetter = document.createElement('span');
    fallingLetter.classList.add('falling-letter');
    fallingLetter.textContent = letter;
    container.appendChild(fallingLetter);
  });
});
