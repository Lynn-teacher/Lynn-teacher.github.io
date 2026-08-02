const newTaipeiOfficialGuide =
  "https://sec.ntpc.edu.tw/p/406-1004-12330%2Cr43.php";
const newTaipeiPlacementSystem = "https://seapc.ntpc.edu.tw/";

function newTaipeiSourceNote(section, url = newTaipeiOfficialGuide, label = "新北市 115 學年度官方簡章頁") {
  return `
    <aside class="source-note">
      <div>
        <span>資料來源</span>
        <strong>${label}</strong>
        <p>${section}</p>
      </div>
      <a href="${url}" target="_blank" rel="noreferrer">前往官方公告頁</a>
    </aside>
  `;
}

const newTaipeiTopics = {
  eligibility: {
    label: "申請資格",
    title: "先確認要使用哪一種簡章",
    body: `
      <p class="detail-lead">新北市 115 學年度分為「一般類科」與「集中式特教班服務群科」，兩種只能擇一報名。</p>
      <div class="detail-grid two">
        <article class="info-card">
          <span class="tag">一般類科</span>
          <h4>應屆畢業生</h4>
          <ul>
            <li>持有適用於高級中等教育階段的特教資格或鑑定證明。</li>
            <li>未曾參與教育部國教署或其他直轄市辦理的身障生適性輔導安置。</li>
            <li>由就讀國中協助辦理網路報名與資料上傳。</li>
          </ul>
        </article>
        <article class="info-card">
          <span class="tag">一般類科</span>
          <h4>非應屆畢業生</h4>
          <ul>
            <li>須於 2025/12/31 前設籍且居住於新北市。</li>
            <li>具國中畢業或同等學力，且無高中學籍或高中以上學歷。</li>
            <li>須具高中階段特教資格，且未曾參與其他適性輔導安置。</li>
          </ul>
        </article>
      </div>
      <div class="route-choice">
        <article>
          <strong>一般類科</strong>
          <p>包含普通科及職業類科，志願選填與超額比序依一般類科簡章辦理。</p>
        </article>
        <article>
          <strong>集中式特教班服務群科</strong>
          <p>另有資格審查、能力評估與志願選填規定，應逐項核對服務群科簡章。</p>
        </article>
      </div>
      <p class="note-box">學生不得同時報名一般類科與服務群科，選擇前可先與國中特教個案管理教師討論學生目前安置型態、學習需求與未來方向。</p>
      ${newTaipeiSourceNote("對照官方公告及兩類簡章的報名資格與限制。")}
    `
  },
  timeline: {
    label: "重要時程",
    title: "兩種簡章有兩條時間線",
    body: `
      <section class="route-timeline" aria-labelledby="general-route-title">
        <div class="route-heading">
          <span class="tag">一般類科</span>
          <h3 id="general-route-title">5 月報名，7 月公告結果</h3>
        </div>
        <div class="timeline">
          <article class="timeline-item"><time><span class="timeline-date">2025/12/31 前</span></time><div><h3>公告開缺名額</h3><p>於新北市特殊教育資訊網及適性輔導安置網公告。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/5/18</span><span class="timeline-date">2026/5/25</span></time><div><h3>網路報名與第一階段志願選填</h3><p>由國中協助於新北市適性輔導安置網辦理。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/5/26</span><span class="timeline-date">2026/6/2</span></time><div><h3>報名資料上傳</h3><p>系統鎖定後列印簽章，再完成資料上傳。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/7/7 前</span></time><div><h3>安置結果公告</h3><p>若需申訴，自公告次日起 20 日內提出。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/7/9</span></time><div><h3>安置學校報到</h3><p>未依期限報到者視同放棄。</p></div></article>
        </div>
      </section>
      <section class="route-timeline" aria-labelledby="service-route-title">
        <div class="route-heading">
          <span class="tag">服務群科</span>
          <h3 id="service-route-title">3 月報名，依能力評估進行志願選填</h3>
        </div>
        <div class="timeline">
          <article class="timeline-item"><time><span class="timeline-date">2026/2/26 前</span></time><div><h3>公告開缺名額</h3><p>集中式特教班服務群科名額依官方公告為準。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/3/2</span><span class="timeline-date">2026/3/5</span></time><div><h3>網路報名</h3><p>由國中依服務群科簡章協助辦理。</p></div></article>
          <article class="timeline-item"><time><span class="timeline-date">2026/3/6</span><span class="timeline-date">2026/3/12</span></time><div><h3>報名資料上傳</h3><p>逾期或資料不齊可能影響後續審查。</p></div></article>
        </div>
        <p class="note-box">服務群科後續能力評估、志願選填、結果及報到日期，請直接查看該年度服務群科簡章與系統公告。</p>
      </section>
      ${newTaipeiSourceNote("一般類科完整日程依簡章辦理；服務群科先列官方公告已確認的開缺、報名與資料上傳期程。")}
    `
  },
  schools: {
    label: "學校與名額",
    title: "依安置類型查看官方名額",
    body: `
      <p class="detail-lead">新北市的學校與名額分開公告，先確認一般類科或服務群科，再進入對應資料。</p>
      <div class="detail-grid two">
        <article class="info-card source-card">
          <span class="tag">一般類科</span>
          <h4>一般類科安置學校與名額</h4>
          <p>開缺名額與後續安置公告集中在新北特殊教育資訊網的適性安置專區。</p>
          <a href="https://sec.ntpc.edu.tw/p/403-1004-272-1.php" target="_blank" rel="noreferrer">查看一般類科官方公告</a>
        </article>
        <article class="info-card source-card">
          <span class="tag">服務群科</span>
          <h4>集中式特教班服務群科名額</h4>
          <p>各校服務群科安置名額及餘額以新北市官方公告為準。</p>
          <a href="https://sec.ntpc.edu.tw/p/406-1004-12671%2Cr43.php" target="_blank" rel="noreferrer">查看服務群科官方名額</a>
        </article>
      </div>
      <aside class="official-action">
        <div><strong>新北市身心障礙學生適性輔導安置網</strong><p>報名、志願選填與結果查詢的官方系統。</p></div>
        <a class="button primary" href="${newTaipeiPlacementSystem}" target="_blank" rel="noreferrer">前往官方系統</a>
      </aside>
      <p class="note-box">本頁目前先提供官方名額入口；校科名額表仍以官方檔案為準，避免不同公告時間造成誤讀。</p>
      ${newTaipeiSourceNote("名額與結果可能在年度作業期間持續更新。", newTaipeiPlacementSystem, "新北市適性輔導安置網")}
    `
  },
  faq: {
    label: "常見問題",
    title: "先釐清最容易混淆的地方",
    body: `
      <div class="faq-list">
        <details>
          <summary>一般類科和服務群科可以同時報名嗎？</summary>
          <p>不可以。新北市 115 學年度官方公告明定兩種簡章只能擇一報名，不得重複，違者取消本安置資格。</p>
        </details>
        <details>
          <summary>兩種安置的報名日期一樣嗎？</summary>
          <p>不一樣。服務群科於 3 月辦理報名，一般類科於 5 月辦理報名，後續審查與志願作業也各自進行。</p>
        </details>
        <details>
          <summary>該怎麼判斷孩子適合哪一種？</summary>
          <p>應一起考量學生目前的特教安置型態、學習表現、支持需求、興趣與生涯方向，並分別閱讀兩種簡章。建議在報名前與國中特教個案管理教師討論。</p>
        </details>
        <details>
          <summary>一般類科需要填幾個志願？</summary>
          <p>簡章以 8 至 16 個志願為原則；未填滿 8 個志願者須另附切結書，且可能因志願不足而未獲安置。</p>
        </details>
        <details>
          <summary>最新公告應該去哪裡看？</summary>
          <p>以新北特殊教育資訊網的「適性安置」專區及新北市身心障礙學生適性輔導安置網為準。</p>
        </details>
      </div>
      ${newTaipeiSourceNote("依兩類簡章公告、一般類科報名規定與官方系統資訊整理。")}
    `
  }
};

const newTaipeiDetail = document.querySelector("#newTaipeiDetail");

function setNewTaipeiView(viewName) {
  document.querySelectorAll("[data-new-taipei-view]").forEach((view) => {
    view.hidden = view.dataset.newTaipeiView !== viewName;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderNewTaipeiTopic(topicId) {
  const topic = newTaipeiTopics[topicId];
  if (!topic) {
    setNewTaipeiView("home");
    document.title = "新北市身心障礙學生適性輔導安置家長導覽";
    return;
  }

  newTaipeiDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <h2 id="newTaipeiDetailTitle" tabindex="-1">${topic.title}</h2>
      </div>
    </div>
    <div class="detail-body">${topic.body}</div>
    <div class="detail-footer-actions">
      <a class="button primary" href="#home">回到新北市</a>
    </div>
  `;
  document.querySelector("#newTaipeiNavLabel").textContent = topic.label;
  setNewTaipeiView("info");
  document.title = `${topic.label}｜新北市身心障礙學生適性輔導安置`;
  document.querySelector("#newTaipeiDetailTitle").focus({ preventScroll: true });
}

function renderNewTaipeiRoute() {
  const route = location.hash.slice(1);
  if (!route || route === "home") {
    setNewTaipeiView("home");
    document.title = "新北市身心障礙學生適性輔導安置家長導覽";
    return;
  }
  renderNewTaipeiTopic(route);
}

document.querySelectorAll(".city-switcher-select").forEach((select) => {
  select.addEventListener("change", () => {
    window.location.href = select.value;
  });
});

renderNewTaipeiRoute();
window.addEventListener("hashchange", renderNewTaipeiRoute);
