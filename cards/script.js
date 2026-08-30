document.querySelectorAll('.card-collection').forEach((collection) => {
  const pages = collection.querySelector('.card-pages');
  const images = [...pages.querySelectorAll('img')];
  const title = collection.querySelector('h2').textContent.trim();
  let current = 0;

  const controls = document.createElement('div');
  controls.className = 'card-controls';
  controls.innerHTML = `
    <button class="card-control" type="button" data-direction="previous" aria-label="${title}上一張">← 上一張</button>
    <span class="card-page-number" aria-live="polite"></span>
    <button class="card-control" type="button" data-direction="next" aria-label="${title}下一張">下一張 →</button>`;
  pages.append(controls);

  const previous = controls.querySelector('[data-direction="previous"]');
  const next = controls.querySelector('[data-direction="next"]');
  const pageNumber = controls.querySelector('.card-page-number');

  function showPage(index) {
    current = index;
    images.forEach((image, imageIndex) => {
      const active = imageIndex === current;
      image.classList.toggle('is-active', active);
      image.setAttribute('aria-hidden', String(!active));
    });
    previous.disabled = current === 0;
    next.disabled = current === images.length - 1;
    pageNumber.textContent = `${current + 1} / ${images.length}`;
  }

  previous.addEventListener('click', () => showPage(current - 1));
  next.addEventListener('click', () => showPage(current + 1));
  showPage(0);

  collection.addEventListener('toggle', () => {
    if (!collection.open) return;
    document.querySelectorAll('.card-collection[open]').forEach((other) => {
      if (other !== collection) other.open = false;
    });
  });
});
