(() => {
  const panel = document.querySelector('#home-guide');
  if (!panel) return;
  const entries = [...document.querySelectorAll('[data-home-entry]')];
  const heading = panel.querySelector('h2');
  const options = panel.querySelector('.home-guide-options');
  const result = panel.querySelector('.home-guide-result');
  const allLink = panel.querySelector('.home-guide-all');
  let activeEntry = null;

  // These short suggestions lead to the existing guides; no answers are stored.
  const paths = {
    concern: {
      title: '最近遇到什麼事？',
      allText: '看全部家長指南 →', allHref: 'cards/',
      choices: [
        { label: '作業一直拖，寫到很晚', title: '先把作業分成小段', text: '一起看聯絡簿，挑一小段作業開始；完成後，再安排下一段和休息。', link: '看看作業怎麼安排 →', href: 'cards/#homework-load-start' },
        { label: '一提醒，孩子就生氣', title: '先緩一緩，再聽孩子說', text: '等彼此平靜一點，再問：「你現在最煩的是哪一件事？」先聽完，再一起想下一步。', link: '看看怎麼和孩子說 →', href: 'cards/#communication-start' },
        { label: '快升國中了，想先準備', title: '從每天整理書包開始', text: '和孩子約好順序：看聯絡簿、收作業、準備明天的用品。先練熟一件，再慢慢增加。', link: '看看升國中可以先練什麼 →', href: 'cards/#transition-support-start' }
      ]
    },
    support: {
      title: '想和學校聊什麼？',
      allText: '看看學校可以怎麼幫 →', allHref: '#school-support',
      choices: [
        { label: '作業太吃力，跟不上上課', title: '先找導師聊聊', text: '帶一份最近的作業，說明孩子在哪一步最費力、通常花多久，和老師討論可以怎麼協助。', link: '下載討論準備單 →', href: 'assets/downloads/parent-meeting-sheet.pdf', download: true },
        { label: '和同學處不好，或不想上學', title: '和導師、輔導室一起想辦法', text: '先把最近發生的事告訴導師，也聽聽孩子的感受，再和學校討論是否需要輔導室協助。', link: '看看學校可以找誰 →', href: '#school-support' },
        { label: '想問特教服務或 IEP', title: '找特教組或承辦老師', text: '說明想了解的事情，例如鑑定流程、課堂協助，或 IEP 會議怎麼準備，請承辦老師協助說明。', link: '看特教服務常見問題 →', href: 'cards/#topics-faq' }
      ]
    },
    placement: {
      title: '孩子在哪裡讀國中？',
      allText: '看升學查詢總覽 →', allHref: 'placement/',
      choices: [
        { label: '臺北市', href: 'taipei/' },
        { label: '新北市', href: 'new-taipei/' },
        { label: '桃園市', href: 'taoyuan/' },
        { label: '臺中市', href: 'taichung/' },
        { label: '高雄市', href: 'kaohsiung/' },
        { label: '其他縣市（含臺南市）', href: 'other-counties/' }
      ]
    }
  };

  function collapse() {
    const opener = activeEntry;
    activeEntry = null;
    entries.forEach(entry => entry.setAttribute('aria-expanded', 'false'));
    panel.hidden = true;
    opener?.focus({ preventScroll: true });
    opener?.scrollIntoView({ block: 'nearest' });
  }

  function showSuggestion(choice, selected) {
    options.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button === selected));
    });
    const title = document.createElement('h3');
    title.textContent = choice.title;
    const description = document.createElement('p');
    description.textContent = choice.text;
    const link = document.createElement('a');
    link.href = choice.href;
    link.textContent = choice.link;
    if (choice.download) link.download = '和老師討論準備單.pdf';
    result.replaceChildren(title, description, link);
  }

  function expand(entry) {
    if (activeEntry === entry) { collapse(); return; }
    activeEntry = entry;
    const key = entry.dataset.homeEntry;
    const path = paths[key];
    entries.forEach(item => item.setAttribute('aria-expanded', String(item === entry)));
    panel.dataset.path = key;
    heading.textContent = path.title;
    options.setAttribute('role', 'group');
    options.setAttribute('aria-label', path.title);
    options.replaceChildren();
    result.replaceChildren();
    allLink.href = path.allHref;
    allLink.textContent = path.allText;
    path.choices.forEach(choice => {
      const control = document.createElement(key === 'placement' ? 'a' : 'button');
      control.textContent = choice.label;
      if (key === 'placement') control.href = choice.href;
      else {
        control.type = 'button';
        control.setAttribute('aria-pressed', 'false');
        control.addEventListener('click', () => showSuggestion(choice, control));
      }
      options.append(control);
    });
    panel.hidden = false;
    heading.focus({ preventScroll: true });
    panel.scrollIntoView({ block: 'nearest' });
  }

  entries.forEach(entry => {
    entry.setAttribute('role', 'button');
    entry.setAttribute('aria-controls', panel.id);
    entry.setAttribute('aria-expanded', 'false');
    entry.querySelector('b').textContent = entry.dataset.homeEntry === 'placement' ? '選擇縣市 ↓' : '選一個情境 ↓';
    entry.addEventListener('click', event => {
      // Keep the original destination available when opening a link in a new tab.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      expand(entry);
    });
    entry.addEventListener('keydown', event => {
      if (event.key === ' ') { event.preventDefault(); expand(entry); }
    });
  });
  panel.querySelector('.home-guide-close').addEventListener('click', collapse);
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); collapse(); }
  });
})();
