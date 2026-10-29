(() => {
  const source = document.querySelector('.schedule-table');
  if (!source) return;
  const stages = [
    { id: 'briefing', title: '說明會', match: /說明會/, tip: '先確認場次、對象與報名方式。' },
    { id: 'brochure', title: '看簡章', match: /簡章/, tip: '和國中特教老師確認孩子適用哪一份簡章。' },
    { id: 'registration', title: '報名', match: /報名|送審/, tip: '向國中特教老師確認文件與校內繳交期限。' },
    { id: 'assessment', title: '評估', match: /評估/, tip: '先和老師確認是否需要參加評估，以及當天要帶什麼。' },
    { id: 'results', title: '結果', match: /結果/, tip: '確認安置結果後，再依通知辦理後續事項。' },
    { id: 'check-in', title: '報到', match: /報到/, tip: '依分區或學校通知，確認報到地點與應帶文件。' }
  ];
  const rows = [...source.querySelectorAll('tbody tr')];
  if (!rows.length || rows.some(row => row.cells.length !== 3)) return;
  const groups = stages.map(stage => ({ ...stage, rows: [] }));
  const other = { id: 'other', title: '其他日期', rows: [] };
  rows.forEach(row => {
    const label = row.cells[0].textContent;
    const group = groups.find(stage => stage.match.test(label)) || other;
    group.rows.push(row);
  });
  if (other.rows.length) groups.push(other);

  const timeline = document.createElement('ol');
  timeline.className = 'placement-timeline';
  timeline.setAttribute('aria-label', '升學安置時間軸');
  const caption = document.createElement('p');
  caption.className = 'timeline-caption';
  caption.textContent = source.caption?.textContent || '重要日期';
  let number = 0;

  groups.filter(group => group.rows.length).forEach(group => {
    number += 1;
    const waiting = group.rows.filter(row => row.cells[1].textContent.trim() === '未公告');
    const scheduled = group.rows.every(row => row.cells[2].textContent.trim() === '查看日程');
    const planned = group.rows.every(row => row.cells[0].textContent.includes('預定'));
    const lecture = group.rows.every(row => row.cells[0].textContent.includes('講義'));
    const ended = group.rows.every(row => row.cells[1].textContent.includes('已結束'));
    let status = '日期已公告';
    if (waiting.length === group.rows.length) status = '未公告';
    else if (waiting.length) status = '部分日期已公告';
    else if (ended) status = '已結束';
    else if (lecture) status = '講義已公告';
    else if (planned) status = '預定公告';
    else if (scheduled) status = '日程已公告';

    const item = document.createElement('li');
    const details = document.createElement('details');
    details.className = 'placement-phase';
    details.id = `schedule-${group.id}`;
    details.setAttribute('name', 'placement-phases');
    const summary = document.createElement('summary');
    const marker = document.createElement('span');
    marker.className = 'phase-number';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = number;
    const title = document.createElement('span');
    title.className = 'phase-title';
    title.textContent = group.title;
    const badge = document.createElement('span');
    badge.className = 'phase-status';
    if (status === '未公告') badge.classList.add('is-waiting');
    if (status === '已結束') badge.classList.add('is-ended');
    badge.textContent = status;
    const indicator = document.createElement('span');
    indicator.className = 'phase-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    summary.append(marker, title, badge, indicator);

    const content = document.createElement('div');
    content.className = 'phase-content';
    group.rows.forEach(row => {
      const event = document.createElement('section');
      event.className = 'phase-event';
      const heading = document.createElement('h3');
      const date = document.createElement('p');
      date.className = 'phase-date';
      // Read the existing table so dates, placement types and sources stay together.
      row.cells[0].childNodes.forEach(node => heading.append(node.cloneNode(true)));
      row.cells[1].childNodes.forEach(node => date.append(node.cloneNode(true)));
      event.append(heading, date);
      if (row.cells[1].textContent.trim() !== '未公告') {
        row.cells[2].querySelectorAll('a').forEach(link => event.append(link.cloneNode(true)));
      }
      content.append(event);
    });
    if (group.tip) {
      const tip = document.createElement('p');
      tip.className = 'phase-tip';
      tip.textContent = group.tip;
      content.append(tip);
    }
    details.append(summary, content);
    item.append(details);
    timeline.append(item);
    // Also support browsers that do not implement exclusive native details groups.
    details.addEventListener('toggle', () => {
      if (details.open) timeline.querySelectorAll('details[open]').forEach(other => {
        if (other !== details) other.open = false;
      });
    });
  });

  source.before(caption, timeline);
  source.hidden = true;
  function openLinkedStage() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const phase = document.getElementById(id);
    if (!phase || !timeline.contains(phase) || !phase.classList.contains('placement-phase')) return;
    phase.open = true;
    requestAnimationFrame(() => {
      phase.querySelector('summary').focus({ preventScroll: true });
      phase.scrollIntoView({ block: 'start' });
    });
  }
  window.addEventListener('hashchange', openLinkedStage);
  openLinkedStage();
})();
