// One reusable native dialog keeps focus inside the enlarged card until closed.
const zoomDialog = document.querySelector('.card-zoom-dialog');
const zoomImage = zoomDialog.querySelector('.zoom-image-area img');
const zoomSize = zoomDialog.querySelector('.zoom-size');
let zoomOpener;
function openZoom(image, opener) {
  zoomOpener = opener;
  zoomImage.src = image.currentSrc || image.src;
  zoomImage.alt = image.alt;
  const images = [...image.closest('.card-pages').querySelectorAll('img')];
  zoomDialog.querySelector('#zoom-title').textContent = `第 ${images.indexOf(image) + 1} 張，共 ${images.length} 張`;
  zoomDialog.classList.remove('is-zoomed');
  zoomSize.setAttribute('aria-pressed', 'false');
  zoomSize.textContent = '看原尺寸';
  zoomDialog.showModal();
}
zoomDialog.querySelector('.zoom-close').addEventListener('click', () => zoomDialog.close());
zoomDialog.addEventListener('click', (event) => { if (event.target === zoomDialog) zoomDialog.close(); });
zoomDialog.addEventListener('close', () => { if (zoomOpener?.isConnected) zoomOpener.focus({ preventScroll: true }); });
zoomSize.addEventListener('click', () => {
  const enlarged = zoomDialog.classList.toggle('is-zoomed');
  zoomSize.setAttribute('aria-pressed', String(enlarged));
  zoomSize.textContent = enlarged ? '符合畫面寬度' : '看原尺寸';
});

// This accordion is independent of the image-card collections.
const faqItems = [...document.querySelectorAll('.parent-faq .faq-item')];
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

document.querySelectorAll('.card-collection').forEach((collection) => {
  const pages = collection.querySelector('.card-pages');
  const images = [...pages.querySelectorAll('img')];
  const title = collection.querySelector('.guide-title').textContent.trim();
  let current = 0;
  const text = collection.querySelector('.card-text');
  const modes = document.createElement('div');
  modes.className = 'reading-modes';
  modes.setAttribute('role', 'group');
  modes.setAttribute('aria-label', `${title}閱讀方式`);
  modes.innerHTML = '<button type="button" data-mode="cards" aria-pressed="true">看圖卡</button><button type="button" data-mode="text" aria-pressed="false">讀文字</button>';
  text.before(modes);
  text.id = `${collection.id}-text`;
  pages.id = `${collection.id}-cards`;
  text.classList.add('has-reader');
  text.open = true;
  const buttons = [...modes.querySelectorAll('button')];
  buttons[0].setAttribute('aria-controls', pages.id);
  buttons[1].setAttribute('aria-controls', text.id);
  function setMode(mode) {
    text.hidden = mode !== 'text';
    pages.hidden = mode !== 'cards';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
  }
  modes.addEventListener('click', event => {
    const button = event.target.closest('button[data-mode]');
    if (button) setMode(button.dataset.mode);
  });
  setMode('cards');

  const close = collection.querySelector('.close-guide');
  close.hidden = false;
  close.addEventListener('click', () => {
    collection.open = false;
    collection.querySelector('summary').focus({ preventScroll: true });
    collection.scrollIntoView({ block: 'start' });
  });


  const controls = document.createElement('div');
  controls.className = 'card-controls';
  controls.innerHTML = `
    <button class="card-control" type="button" data-direction="previous" aria-label="${title}上一張">← 上一張</button>
    <span class="card-page-number" aria-live="polite"></span>
    <button class="card-control" type="button" data-direction="next" aria-label="${title}下一張">下一張 →</button>`;
  const zoom = document.createElement('button');
  zoom.type = 'button';
  zoom.className = 'zoom-card';
  zoom.textContent = '放大這張圖卡';
  zoom.addEventListener('click', () => openZoom(images[current], zoom));
  pages.append(zoom, controls);
  images.forEach(image => {
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `放大：${image.alt}`);
    image.addEventListener('click', () => openZoom(image, image));
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openZoom(image, image);
      }
    });
  });
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
      image.tabIndex = active ? 0 : -1;
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
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const collection = document.getElementById(id);
  if (collection?.classList.contains('guide-topic-group')) {
    document.querySelectorAll('.card-collection').forEach((item) => { item.open = false; });
    requestAnimationFrame(() => {
      const focusTarget = collection.querySelector('h2');
      if (focusTarget) { focusTarget.tabIndex = -1; focusTarget.focus({ preventScroll: true }); }
      collection.scrollIntoView({ block: 'start' });
    });
    return;
  }
  if (!collection?.classList.contains('card-collection')) return;
  document.querySelectorAll('.card-collection').forEach((item) => {
    item.open = item === collection;
  });
  requestAnimationFrame(() => {
      const focusTarget = collection.querySelector('.guide-title')?.closest('summary') || collection.querySelector('h2');
      if (focusTarget) { focusTarget.focus({ preventScroll: true }); }
      collection.scrollIntoView({ block: 'start' });
    });
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

document.querySelectorAll('.guide-topics a, .guide-actions a, .guide-related a').forEach((link) => {
  link.addEventListener('click', () => {
    if (link.hash === location.hash) openLinkedCollection();
  });
});
