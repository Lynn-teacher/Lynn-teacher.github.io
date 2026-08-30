(() => {
  const measurementId = 'G-L23943G997';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(tag);

  const event = (name, parameters) => window.gtag('event', name, parameters);
  const label = (element, selector) => element.querySelector(selector)?.textContent.trim() || element.textContent.trim();

  document.addEventListener('click', (click) => {
    const target = click.target instanceof Element ? click.target : null;
    if (!target) return;

      const portalCard = target.closest('.parent-portal-card');
      if (portalCard) {
        const destination = portalCard.getAttribute('href');
        const entryEvents = {
          'cards/': 'open_parent_guides',
          '#school-support': 'open_school_support',
          'placement/': 'open_placement_lookup',
        };
        event(entryEvents[destination] || 'select_parent_entry', {
          entry_name: label(portalCard, 'strong'),
          destination,
        });
        return;
      }

    const contact = target.closest('.contact-email');
    if (contact) {
      event('contact_teacher', { method: 'email' });
      return;
    }

    const placement = target.closest('.placement-callout a');
    if (placement) event('open_placement_lookup', { destination: placement.getAttribute('href') });

    const control = target.closest('.card-control');
    if (control) {
      const collection = control.closest('.card-collection');
      event('navigate_guide_card', {
        guide_name: label(collection, 'h2'),
        direction: control.dataset.direction,
        card_number: collection.querySelector('.card-page-number')?.textContent.trim(),
      });
    }
  });

  document.querySelectorAll('.card-collection').forEach((collection) => {
    collection.addEventListener('toggle', () => {
      if (collection.open) event('open_parent_guide', { guide_name: label(collection, 'h2') });
    });
  });
})();
