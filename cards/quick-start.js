// Each guide has its own choices; switching these never changes the image reader.
document.querySelectorAll('.guide-start').forEach(start => {
  const controls = start.querySelector('.guide-quick-switch');
  const buttons = [...controls.querySelectorAll('button')];
  const answers = [...start.querySelectorAll('.guide-quick-answer')];
  const select = selected => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
    answers.forEach(answer => { answer.hidden = answer.id !== selected.getAttribute('aria-controls'); });
  };
  buttons.forEach(button => button.addEventListener('click', () => select(button)));
  answers.forEach(answer => { answer.querySelector('h5').hidden = true; });
  controls.hidden = false;
  select(buttons[0]);
});
