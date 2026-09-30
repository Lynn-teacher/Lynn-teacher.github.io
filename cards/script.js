document.querySelectorAll('.card-collection').forEach((collection) => {
  const pages = collection.querySelector('.card-pages');
  const images = [...pages.querySelectorAll('img')];
  const title = collection.querySelector('.guide-title').textContent.trim();
  let current = 0;

  const controls = document.createElement('div');
  controls.className = 'card-controls';
  controls.innerHTML = `
    <button class="card-control" type="button" data-direction="previous" aria-label="${title}上一張">← 上一張</button>
    <span class="card-page-number" aria-live="polite"></span>
    <button class="card-control" type="button" data-direction="next" aria-label="${title}下一張">下一張 →</button>`;
  pages.append(controls);
  pages.classList.add('has-controls');

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

// Share links identify a collection and open it on arrival or browser history changes.
function openLinkedCollection() {
  const id = location.hash.slice(1);
  const collection = document.getElementById(id);
  if (collection?.classList.contains('guide-topic-group')) {
    document.querySelectorAll('.card-collection').forEach((item) => { item.open = false; });
    requestAnimationFrame(() => collection.scrollIntoView({ block: 'start' }));
    return;
  }
  if (!collection?.classList.contains('card-collection')) return;
  document.querySelectorAll('.card-collection').forEach((item) => {
    item.open = item === collection;
  });
  requestAnimationFrame(() => collection.scrollIntoView({ block: 'start' }));
}
window.addEventListener('hashchange', openLinkedCollection);
openLinkedCollection();

document.querySelectorAll('.card-sharing').forEach((sharing) => {
  const button = sharing.querySelector('.copy-card-link');
  const link = sharing.querySelector('.card-share-link');
  const feedback = sharing.querySelector('.share-feedback');
  button.hidden = false;
  link.addEventListener('click', () => {
    if (link.hash === location.hash) openLinkedCollection();
  });
  button.addEventListener('click', async () => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.search = '';
    try {
      await navigator.clipboard.writeText(url.href);
      feedback.textContent = '已複製，可貼給家人或老師。';
    } catch {
      feedback.textContent = '無法自動複製，請複製下方網址：';
      let field = sharing.querySelector('input');
      if (!field) {
        field = document.createElement('input');
        field.type = 'text';
        field.readOnly = true;
        field.setAttribute('aria-label', '這組指南的分享網址');
        field.style.width = '100%';
        sharing.append(field);
      }
      field.value = url.href;
      field.focus();
      field.select();
    }
  });
});

document.querySelectorAll('.guide-topics a').forEach((link) => {
  link.addEventListener('click', () => {
    if (link.hash === location.hash) openLinkedCollection();
  });
});
