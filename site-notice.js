(function () {
  const isHistoric = document.querySelector('meta[name="academic-year"][content="115"]');
  const depth = location.pathname.split('/').filter(Boolean).length;
  const root = '../'.repeat(depth);
  const main = document.querySelector('main');

  if (isHistoric && main) {
    const notice = document.createElement('aside');
    notice.className = 'historic-notice';
    notice.setAttribute('role', 'note');
    notice.innerHTML = '<strong>這是 115 學年度歷年資料</strong><span>年度作業已結束；請勿以本頁日期、資格或名額作為 116 學年度申請依據。</span><a href="' + root + '">前往 116 學年度入口</a>';
    main.prepend(notice);
  }

  document.querySelectorAll('.site-disclaimer .footer-meta').forEach((meta) => {
    if (!meta.querySelector('a[href*="privacy/"]')) {
      const link = document.createElement('a');
      link.href = root + 'privacy/';
      link.textContent = '隱私說明';
      meta.append(link);
    }
  });

  if (isHistoric && !document.querySelector('.site-disclaimer')) {
    const footer = document.createElement('footer');
    footer.className = 'site-disclaimer portal-footer';
    footer.innerHTML = '<div class="site-disclaimer-inner"><p class="disclaimer-summary">此頁為 115 學年度歷年資料，不作為目前申請依據。</p><div class="footer-meta"><a href="' + root + '">回到 116 學年度入口</a><a href="' + root + 'privacy/">隱私說明</a></div></div>';
    document.body.append(footer);
  }
})();
