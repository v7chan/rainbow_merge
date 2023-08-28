setTimeout(() => {
  const mergeButtons = document.getElementsByClassName('merge-box-button');

  if (mergeButtons) {
    Array.from(mergeButtons).forEach((button) => button.style.animation = 'merge-colors 5s infinite');
  }
}, 500);
