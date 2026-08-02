const timelineItems = [
  {
    date: "2025/10/29、2025/10/31",
    title: "教育人員說明會",
    type: "briefing",
    description: "提供國中端承辦人員理解年度安置作業與簡章重點。"
  },
  {
    date: "2025/11/15、2025/11/22",
    title: "家長說明會與群科簡介",
    type: "briefing",
    description: "依障礙類組分場辦理家長說明會，下午安排技術型高中類群科及專業技能班簡介。"
  },
  {
    date: "2025/12/8 - 2026/1/9",
    title: "國中端線上填報報名資料",
    type: "registration",
    description: "國中端於臺北市身心障礙學生高級中等學校適性安置系統填報學生資料。"
  },
  {
    date: "2026/1/13 - 2026/1/14",
    title: "本安置管道現場報名",
    type: "registration",
    description: "應屆畢業生由國中辦理現場集體報名；非應屆畢業生於 1/14 現場個別報名。"
  },
  {
    date: "2026/1/19",
    time: "12:00",
    title: "補正資料截止",
    type: "registration",
    description: "資料審查未通過者，須於期限前補正；逾時視同放棄本安置管道。"
  },
  {
    date: "2026/1/28 - 2026/2/26",
    title: "資格及志願審核會議",
    type: "review",
    description: "各障礙類組進行資格與志願適切性審核。"
  },
  {
    date: "2026/3/2 - 2026/3/18",
    title: "晤談、志願安置與逕予安置",
    type: "review",
    description: "有疑義、競額或非應屆畢業生依規定參與晤談，並進行志願安置與逕予安置作業。"
  },
  {
    date: "2026/4/1",
    time: "12:00",
    title: "安置結果公告",
    type: "result",
    description: "公告於臺北市政府教育局、適性安置系統與臺北市北區特教資源中心網站。"
  },
  {
    date: "2026/4/2 - 2026/4/21",
    title: "安置結果申復期間",
    type: "result",
    description: "對安置結果有疑義者，於期限內填具申復書並備妥佐證資料，以書面限時掛號提出。"
  },
  {
    date: "2026/4/13",
    time: "09:00-15:00",
    title: "新生報到",
    type: "result",
    description: "持安置結果暨報到通知單至安置學校報到，未報到者視同放棄本安置。"
  },
  {
    date: "2026/5/16 - 2026/5/17",
    title: "國中教育會考",
    type: "other",
    description: "其他升學管道相關日程，可作整體升學規劃參考。"
  },
  {
    date: "2026/7/7、2026/7/9",
    title: "免試入學放榜與報到",
    type: "other",
    description: "若同時獲本安置及其他入學管道錄取，僅能擇一繳交畢業證書正本完成報到。"
  }
];

const resources = [
  {
    title: "臺北市政府教育局",
    category: "official",
    label: "主辦單位",
    description: "安置結果與相關公告的官方來源之一。",
    contact: "(02)27208889 轉 6344",
    url: "https://www.doe.gov.taipei/"
  },
  {
    title: "臺北市身心障礙學生高級中等學校適性安置系統",
    category: "system",
    label: "報名系統",
    description: "國中端填報、安置作業與結果查詢的重要系統。",
    contact: "https://proper.tp.edu.tw",
    url: "https://proper.tp.edu.tw"
  },
  {
    title: "臺北市北區特教資源中心",
    category: "official",
    label: "承辦單位",
    description: "簡章承辦單位，網站提供本安置相關最新訊息。",
    contact: "(02)28749117 轉 1601、1600",
    url: "https://tnsrc.tp.edu.tw"
  },
  {
    title: "臺北市立啟明學校",
    category: "group",
    label: "視覺障礙組",
    description: "視覺障礙組協辦學校，亦為臺北市視障教育資源中心。",
    contact: "(02)28740670 轉 1603",
    keywords: ["視障", "視覺障礙", "啟明"],
    url: "https://www.tmsb.tp.edu.tw/nss/s/trcvi/index/"
  },
  {
    title: "臺北市立啟聰學校",
    category: "group",
    label: "聽語障礙組",
    description: "聽語障礙組協辦學校，亦為臺北市聽障教育資源中心。",
    contact: "(02)25924446 轉 601、600",
    keywords: ["聽障", "語障", "聽語障礙", "啟聰"],
    url: "https://www.tmd.tp.edu.tw/nss/s/rchi/index/"
  },
  {
    title: "臺北市立中山女子高級中學",
    category: "group",
    label: "肢障腦麻病弱組",
    description: "肢障腦麻病弱組協辦學校。",
    contact: "(02)25073148 轉 240",
    keywords: ["肢障", "腦麻", "病弱", "肢體障礙"],
    url: "https://www.csghs.tp.edu.tw/"
  },
  {
    title: "臺北市立復興高級中學",
    category: "group",
    label: "情緒行為障礙組",
    description: "情緒行為障礙組協辦學校。",
    contact: "(02)28914131 轉 513",
    keywords: ["情障", "情緒", "行為", "情緒行為障礙"],
    url: "https://www.fhsh.tp.edu.tw/"
  },
  {
    title: "臺北市立大安高級工業職業學校",
    category: "group",
    label: "學習障礙組",
    description: "學習障礙組協辦學校。",
    contact: "(02)27091630 轉 1140",
    keywords: ["學障", "學習障礙", "大安高工"],
    url: "https://www.taivs.tp.edu.tw/"
  },
  {
    title: "臺北市立成淵高級中學",
    category: "group",
    label: "自閉症組",
    description: "自閉症組協辦學校。",
    contact: "(02)25531969 轉 163",
    keywords: ["自閉", "自閉症", "成淵"],
    url: "https://www.cyhs.tp.edu.tw/nss/p/index/"
  }
];

const infoRouteLabels = {
  eligibility: "申請資格",
  timeline: "重要時程",
  faq: "簡章重點問答"
};

const officialGuideUrl =
  "https://www.doe.gov.taipei/News_Content.aspx?n=8E040C375C754678&s=3704E79DFD73ECE4";
const officialSchoolDataUrl =
  "https://www.doe.gov.taipei/News_Content.aspx?n=8E040C375C754678&s=6C3280C2165C7246";

function sourceNote(section, url = officialGuideUrl, label = "115 學年度正式簡章") {
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

function faqBasis(text, url = officialGuideUrl) {
  return `<p class="faq-basis"><span>依據</span><a href="${url}" target="_blank" rel="noreferrer">${text}</a></p>`;
}

const detailTemplates = {
  eligibility: {
    eyebrow: "",
    title: "申請資格",
    body: `
      <p class="detail-lead">先確認學生身分、特教資格與設籍居住條件。</p>
      <div class="detail-grid two">
        <article class="info-card">
          <h4>學生身分條件</h4>
          <ul>
            <li>臺北市國民中學 114 學年度應屆畢業生。</li>
            <li>臺北市國民中學 113 學年度以前畢、修、結業，且目前未具高級中等教育階段學籍者。</li>
            <li>非臺北市國中畢業或具同等學力，設籍臺北市並有居住事實者。</li>
          </ul>
        </article>
        <article class="info-card">
          <h4>特教資格條件</h4>
          <ul>
            <li>114 年 12 月 31 日前已至教育部特殊教育通報網登錄。</li>
            <li>領有特殊教育學生鑑定及就學輔導會證明。</li>
            <li>報名障礙類組以學生主障礙為主要依據。</li>
          </ul>
        </article>
      </div>
      <p class="note-box">非臺北市國中畢業學生若要以設籍與居住事實報名，簡章要求檢附 114 年 7 月至 12 月任一月份的戶籍資料與居住地水費或電費收據證明。</p>
      ${sourceNote("對照簡章「申請資格」及「報名」段落。")}
    `
  },
  timeline: {
    eyebrow: "",
    title: "重要時程",
    body: `
      <label class="search-box compact-control">
        <span>篩選時程</span>
        <select id="timelineFilter" aria-label="篩選時程類型">
          <option value="all">全部</option>
          <option value="briefing">說明會</option>
          <option value="registration">報名</option>
          <option value="review">審查與晤談</option>
          <option value="result">結果與報到</option>
          <option value="other">其他升學管道</option>
        </select>
      </label>
      <div class="timeline" id="timelineList"></div>
      ${sourceNote("對照簡章「重要日程表」。日期均為 115 學年度作業期程。")}
    `
  },
  documents: {
    eyebrow: "報名資料",
    title: "先分清楚應屆與非應屆",
    body: `
      <div class="detail-grid two">
        <article class="info-card">
          <span class="tag">114 學年度應屆畢業生</span>
          <h4>由國中端協助集體報名</h4>
          <ul>
            <li>報名表與 3 個月內照片電子檔。</li>
            <li>鑑輔會鑑定證明影本，臺北市核發者由系統帶出。</li>
            <li>生涯轉銜建議表與佐證資料。</li>
            <li>學生學習情形表家長版，無則免附。</li>
            <li>非臺北市國中畢業學生需附居住事實佐證資料。</li>
          </ul>
        </article>
        <article class="info-card">
          <span class="tag">非應屆畢業生</span>
          <h4>需依簡章準備個別報名資料</h4>
          <ul>
            <li>報名資料檢核表。</li>
            <li>報名表與 2 張 2 吋照片。</li>
            <li>鑑輔會鑑定證明影本。</li>
            <li>生涯轉銜建議表與佐證資料。</li>
            <li>學生學習情形表家長版，無則免附。</li>
            <li>非臺北市國中畢業學生需附居住事實佐證資料。</li>
          </ul>
        </article>
      </div>
      <article class="source-panel">
        <h4>生涯轉銜建議表常見佐證</h4>
        <div class="pill-list">
          <span>性向與興趣測驗</span>
          <span>最近一學年 IEP</span>
          <span>擇優三學期成績</span>
          <span>校排名百分比</span>
          <span>技能檢定證照</span>
          <span>技藝教育表現</span>
          <span>其他學習優勢資料</span>
        </div>
      </article>
      <p class="note-box">115 學年度：國中端線上填報為 2025/12/8 至 2026/1/9，現場報名為 2026/1/13 至 1/14，補正資料截止為 2026/1/19 中午 12 時。</p>
      ${sourceNote("對照簡章「報名」及生涯轉銜建議表相關附件。")}
    `
  },
  placement: {
    eyebrow: "志願與安置",
    title: "先志願安置，再視情況逕予安置",
    body: `
      <div class="detail-grid four">
        <article class="rule-card">
          <span>志願規則</span>
          <h4>至多選填 3 個志願</h4>
          <p>第 1 志願、第 2 志願須為同一相關群，第 3 志願得跨其他相關群。志願需經審核通過，原則上優先安置第 1 志願。</p>
        </article>
        <article class="rule-card">
          <span>志願安置</span>
          <h4>審核通過後進行</h4>
          <p>若志願人數未超過預估安置名額，以全數安置為原則；若超過名額，依學生性向、優勢能力、在校表現及特殊教育需求等綜合研判。</p>
        </article>
        <article class="rule-card">
          <span>逕予安置</span>
          <h4>需同意才進入</h4>
          <p>未獲志願安置，且同意接受逕予安置者，由鑑輔小組就該障礙類組內尚餘名額綜合研判是否有合適校科。</p>
        </article>
        <article class="rule-card">
          <span>限制提醒</span>
          <h4>名額不流用</h4>
          <p>各校科各障礙類組預估安置名額額滿時不再安置；如尚有餘額，亦不流用至其他障礙類組。已獲安置者不得要求重新安置。</p>
        </article>
      </div>
      <p class="note-box">115 學年度資格及志願審核期間為 2026/1/28 至 2/26。</p>
      ${sourceNote("對照簡章「安置方式」及志願選填規定。")}
    `
  },
  interview: {
    eyebrow: "審查與晤談",
    title: "不是每位應屆生都一定要晤談",
    body: `
      <div class="detail-grid two">
        <article class="info-card">
          <h4>哪些情況需要晤談</h4>
          <ul>
            <li>對學生未來適應或志願適切性有疑義。</li>
            <li>因競額關係需要進一步評估。</li>
            <li>非應屆畢業生均須參與晤談。</li>
          </ul>
        </article>
        <article class="info-card">
          <h4>晤談時要注意</h4>
          <ul>
            <li>學生及法定代理人均須參加，若共同監護均須出席。</li>
            <li>可參考晤談教師建議與預估安置餘額表，評估維持或調整志願。</li>
            <li>須參加晤談但未參加者，視同放棄安置。</li>
          </ul>
        </article>
      </div>
      <p class="note-box">115 學年度晤談、志願安置與逕予安置期間為 2026/3/2 至 3/18。國中特教個案管理教師或認輔老師是否參加，由各障礙類組鑑輔小組視需要另行通知。</p>
      ${sourceNote("對照簡章「晤談」「志願安置」及「逕予安置」規定。")}
    `
  },
  result: {
    eyebrow: "結果、報到與申復",
    title: "結果公布後仍有幾個期限要注意",
    body: `
      <div class="detail-grid three">
        <article class="info-card">
          <h4>安置結果公告</h4>
          <p>115 學年度預定於 2026/4/1 中午 12 時公告於臺北市政府教育局、臺北市適性安置系統及臺北市北區特教資源中心網站。</p>
        </article>
        <article class="info-card">
          <h4>新生報到</h4>
          <p>經公告安置者須於 2026/4/13 上午 9 時至下午 3 時，持安置結果暨報到通知單至安置學校報到，逾期視同放棄。</p>
        </article>
        <article class="info-card">
          <h4>申復</h4>
          <p>對安置結果有疑義者，需於 2026/4/2 起至 2026/4/21 截止前，填具申復書並備妥佐證資料，以書面限時掛號寄至臺北市政府教育局。</p>
        </article>
      </div>
      ${sourceNote("對照簡章「安置結果公告」「報到」「申復及申訴」段落。")}
    `
  },
  resources: {
    eyebrow: "官方連結與聯絡資訊",
    title: "以官方公告與簡章為準",
    body: `
      <label class="search-box compact-control">
        <span>搜尋</span>
        <input id="resourceSearch" type="search" placeholder="輸入 教育局、系統、視障、學障..." />
      </label>
      <div class="resource-grid" id="resourceGrid"></div>
      <p class="empty-state" id="emptyState" hidden>目前沒有符合的項目，可以換個關鍵字試試。</p>
      ${sourceNote("主辦、承辦及各障礙類組協辦學校聯絡資訊。")}
    `
  },
  faq: {
    eyebrow: "",
    title: "簡章重點問答",
    body: `
      <div class="faq-list">
        <details>
          <summary>這個管道是不是一定會安置？</summary>
          <p>不是。學生資格與志願適切性需經審核，且各校科各障礙類組有預估名額限制。經志願安置與逕予安置仍未獲安置者，需參加其他入學管道。</p>
          ${faqBasis("正式簡章 PDF 第 11 至 12 頁，「晤談」及「陸、安置原則及作業方式」")}
        </details>
        <details>
          <summary>第 1、第 2 志願為什麼要同一相關群？</summary>
          <p>簡章規定第 1、第 2 志願須為同一相關群，第 3 志願得跨其他相關群。</p>
          ${faqBasis("正式簡章 PDF 第 8 至 9 頁，「報名資料」")}
        </details>
        <details>
          <summary>可以同時報其他直轄市或教育部適性安置嗎？</summary>
          <p>簡章提醒，學生僅能於教育部國教署轄屬高級中等學校適性輔導安置或其他直轄市辦理之適性輔導安置擇一報名參加，違者取消入學資格。</p>
          ${faqBasis("正式簡章 PDF 第 15 頁，「拾、其他注意事項」第 1 點")}
        </details>
        <details>
          <summary>安置後可以重新安置嗎？</summary>
          <p>簡章明定學生已獲安置者，不得要求重新安置。</p>
          ${faqBasis("正式簡章 PDF 第 12 頁，「陸、安置原則及作業方式」第 1 項第 4 點")}
        </details>
        <details>
          <summary>沒有完成報到會怎樣？</summary>
          <p>經公告安置者若未於指定時間完成報到，視同放棄本就學安置入學資格。已報到者也需依安置學校時程繳交畢業證書或修結業證書正本。</p>
          ${faqBasis("正式簡章 PDF 第 14 頁，「捌、報到」")}
        </details>
      </div>
      ${sourceNote("依簡章報名限制、志願規則、安置結果及報到規定整理。")}
    `
  }
};

const detailSection = document.querySelector("#topicDetail");
const disabilityLabels = {
  visual: "視覺障礙類",
  hearing: "聽語障礙類",
  physical: "肢障腦麻病弱類",
  emotional: "情緒行為障礙類",
  learning: "學習障礙類",
  autism: "自閉症類",
  other: "其他障礙類"
};
const schoolBatchSize = 8;
let visibleSchoolCount = schoolBatchSize;

function showTopic(topicId, shouldScroll = false) {
  const topic = detailTemplates[topicId];
  if (!topic) {
    return;
  }

  detailSection.hidden = false;
  detailSection.innerHTML = `
    <div class="detail-header">
      <div>
        ${topic.eyebrow ? `<p class="eyebrow">${topic.eyebrow}</p>` : ""}
        <h2 id="detailTitle" tabindex="-1">${topic.title}</h2>
      </div>
    </div>
    <div class="detail-body">${topic.body}</div>
    <div class="detail-footer-actions">
      <a class="button primary" href="#home">回到臺北市</a>
    </div>
  `;
  document.querySelector("#infoNavLabel").textContent =
    infoRouteLabels[topicId] || topic.eyebrow;

  if (topicId === "timeline") {
    bindTimeline();
  }

  if (topicId === "resources") {
    bindResources();
  }

  if (shouldScroll) {
    document.querySelector("#detailTitle").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function bindTimeline() {
  const timelineList = document.querySelector("#timelineList");
  const timelineFilter = document.querySelector("#timelineFilter");

  function renderTimeline() {
    const activeType = timelineFilter.value;
    const filtered = timelineItems.filter((item) => activeType === "all" || item.type === activeType);
    timelineList.innerHTML = filtered.map((item) => `
      <article class="timeline-item">
        <time>
          ${item.date
            .split("、")
            .map((date) => `<span class="timeline-date">${date}</span>`)
            .join("")}
          ${item.time ? `<span class="timeline-time">${item.time}</span>` : ""}
        </time>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `).join("");
  }

  timelineFilter.addEventListener("change", renderTimeline);
  renderTimeline();
}

function bindResources() {
  const resourceGrid = document.querySelector("#resourceGrid");
  const resourceSearch = document.querySelector("#resourceSearch");
  const emptyState = document.querySelector("#emptyState");

  function renderResources() {
    const keyword = resourceSearch.value.trim().toLowerCase();
    const filtered = resources.filter((resource) => {
      const content = [
        resource.title,
        resource.category,
        resource.label,
        resource.description,
        resource.contact,
        ...(resource.keywords || [])
      ].join(" ").toLowerCase();
      return content.includes(keyword);
    });

    resourceGrid.innerHTML = filtered.map((resource) => `
      <article class="resource-card">
        <span class="resource-type">${resource.label}</span>
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
        <p class="contact-line">${resource.contact}</p>
        <a href="${resource.url}" target="_blank" rel="noreferrer">開啟官方頁面</a>
      </article>
    `).join("");

    emptyState.hidden = filtered.length > 0;
  }

  resourceSearch.addEventListener("input", renderResources);
  renderResources();
}

function setupSchoolFinder() {
  const districtFilter = document.querySelector("#districtFilter");
  const kindFilter = document.querySelector("#kindFilter");
  const controls = [
    document.querySelector("#schoolSearch"),
    districtFilter,
    kindFilter,
    document.querySelector("#disabilityFilter")
  ];
  const districtOrder = [
    "松山區", "信義區", "大安區", "中山區", "中正區", "大同區",
    "萬華區", "文山區", "南港區", "內湖區", "士林區", "北投區"
  ];
  const districts = [...new Set(placementPrograms.map((row) => row.district))]
    .sort((a, b) => districtOrder.indexOf(a) - districtOrder.indexOf(b));
  const kinds = [...new Set(placementPrograms.map((row) => row.kind))];

  districtFilter.insertAdjacentHTML(
    "beforeend",
    districts.map((district) => `<option value="${district}">${district}</option>`).join("")
  );
  kindFilter.insertAdjacentHTML(
    "beforeend",
    kinds.map((kind) => `<option value="${kind}">${kind}</option>`).join("")
  );

  controls.forEach((control) => {
    control.addEventListener(control.tagName === "INPUT" ? "input" : "change", () => {
      visibleSchoolCount = schoolBatchSize;
      renderSchoolResults();
    });
  });

  document.querySelector("#loadMoreSchools").addEventListener("click", () => {
    visibleSchoolCount += schoolBatchSize;
    renderSchoolResults();
  });

  renderSchoolResults();
}

function getFilteredSchoolPrograms() {
  const keyword = document.querySelector("#schoolSearch").value.trim().toLowerCase();
  const district = document.querySelector("#districtFilter").value;
  const kind = document.querySelector("#kindFilter").value;
  const disability = document.querySelector("#disabilityFilter").value;

  return placementPrograms.filter((row) => {
    const matchesKeyword = `${row.school} ${row.program} ${row.code}`.toLowerCase().includes(keyword);
    const matchesDistrict = district === "all" || row.district === district;
    const matchesKind = kind === "all" || row.kind === kind;
    const matchesDisability = disability === "all" || row[disability] > 0;
    return matchesKeyword && matchesDistrict && matchesKind && matchesDisability;
  });
}

function renderSchoolResults() {
  const results = getFilteredSchoolPrograms();
  const disability = document.querySelector("#disabilityFilter").value;
  const visibleRows = results.slice(0, visibleSchoolCount);
  const schoolCount = new Set(results.map((row) => row.school)).size;
  const resultContainer = document.querySelector("#schoolResults");
  const loadMoreButton = document.querySelector("#loadMoreSchools");
  const emptyState = document.querySelector("#schoolEmptyState");

  document.querySelector("#finderSummary").textContent =
    `115 學年度官方資料｜找到 ${schoolCount} 所學校、${results.length} 筆校科資料`;

  resultContainer.innerHTML = visibleRows.map((row) => {
    const selectedSeat = disability === "all"
      ? `總預估名額 ${row.total} 名`
      : `${disabilityLabels[disability]} ${row[disability]} 名`;
    const schoolLink = row.url
      ? `<a href="${row.url}" target="_blank" rel="noreferrer">前往學校網站</a>`
      : "";

    return `
      <article class="school-result">
        <div class="result-main">
          <div class="result-tags">
            <span>${row.district}</span>
            <span>${row.kind}</span>
            <span>${row.code}</span>
          </div>
          <h3>${row.school}</h3>
          <p>${row.program}</p>
        </div>
        <strong class="selected-seat">${selectedSeat}</strong>
        <details>
          <summary>查看各類組預估名額</summary>
          <div class="seat-grid">
            ${Object.entries(disabilityLabels).map(([key, label]) => `
              <span><small>${label}</small><strong>${row[key]}</strong></span>
            `).join("")}
          </div>
          ${schoolLink}
        </details>
      </article>
    `;
  }).join("");

  emptyState.hidden = results.length > 0;
  loadMoreButton.hidden = results.length <= visibleSchoolCount;
}

function setupConsultation() {
  const stage = document.querySelector("#consultationStage");
  const topic = document.querySelector("#consultationTopic");
  const question = document.querySelector("#consultationQuestion");
  const preview = document.querySelector("#consultationPreview");
  const copyButton = document.querySelector("#copyConsultation");

  function updatePreview() {
    const questionText = question.value.trim() || "（請補上目前最想詢問的事情）";
    preview.textContent = `學生目前階段：${stage.value}\n想了解的主題：${topic.value}\n問題：${questionText}`;
  }

  [stage, topic, question].forEach((control) => {
    control.addEventListener(control.tagName === "TEXTAREA" ? "input" : "change", updatePreview);
  });

  copyButton.addEventListener("click", async () => {
    updatePreview();
    try {
      await navigator.clipboard.writeText(preview.textContent);
      copyButton.textContent = "已複製";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(preview);
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = "請使用複製指令";
    }

    window.setTimeout(() => {
      copyButton.textContent = "複製問題摘要";
    }, 1800);
  });

  updatePreview();
}

function setupCitySwitcher() {
  document.querySelectorAll(".city-switcher-select").forEach((select) => {
    select.addEventListener("change", () => {
      window.location.href = select.value;
    });
  });
}

function setActiveView(viewName, resetScroll = true) {
  document.querySelectorAll("[data-view]").forEach((view) => {
    view.hidden = view.dataset.view !== viewName;
  });
  document.body.dataset.currentView = viewName;

  const titles = {
    home: "臺北市十二年適性安置",
    info: "臺北市十二年適性安置",
    schools: "學校與名額｜臺北市十二年適性安置",
    consultation: "整理諮詢問題｜臺北市十二年適性安置"
  };
  document.title = titles[viewName] || titles.home;

  if (resetScroll) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function renderRoute() {
  const route = location.hash.replace("#", "") || "home";
  const infoRoute = Object.prototype.hasOwnProperty.call(infoRouteLabels, route);

  if (infoRoute) {
    setActiveView("info");
    showTopic(route, true);
    return;
  }

  if (route === "schools" || route === "schoolFinder") {
    setActiveView("schools");
    return;
  }

  if (route === "consultation") {
    setActiveView("consultation");
    return;
  }

  setActiveView("home");
}

setupSchoolFinder();
setupConsultation();
setupCitySwitcher();
renderRoute();

window.addEventListener("hashchange", renderRoute);
window.addEventListener("popstate", renderRoute);
