const officialSources = {
  taipeiService:
    "https://www.doe.gov.taipei/News_Content.aspx?n=FD0F0E4B643626CB&s=D3441D597AE8F8EF&sms=78D644F2755ACCAA",
  taipeiPastTests: "https://proper.tp.edu.tw/Outer/NewsInfo/102",
  newTaipeiGuide: "https://sec.ntpc.edu.tw/p/405-1004-12330%2Cc969.php",
  newTaipeiPlacement: "https://seapc.ntpc.edu.tw/",
  newTaipeiServiceSeats: "https://sec.ntpc.edu.tw/p/406-1004-12671%2Cr43.php",
  newTaipeiGeneralSeats: "https://sec.ntpc.edu.tw/p/406-1004-12516%2Cr272.php",
  taoyuanHighSchoolGuide:
    "https://tyshse.special.tyc.edu.tw/%E7%B0%A1%E7%AB%A0/115/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E6%A1%83%E5%9C%92%E5%B8%82%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E7%B0%A1%E7%AB%A0.pdf",
  taoyuanHighSchoolSeats:
    "https://tyshse.special.tyc.edu.tw/%E7%B0%A1%E7%AB%A0/115/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E6%A1%83%E5%9C%92%E5%B8%82%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E7%B0%A1%E7%AB%A0%28%E5%90%AB%E7%BC%BA%E9%A1%8D%29.pdf",
  taoyuanServiceGuide:
    "https://tyshse.special.tyc.edu.tw/%E7%B0%A1%E7%AB%A0/115/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E6%A1%83%E5%9C%92%E5%B8%82%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E9%9B%86%E4%B8%AD%E5%BC%8F%E7%89%B9%E6%95%99%E7%8F%AD%E7%B0%A1%E7%AB%A0.pdf",
  taoyuanServiceSeats:
    "https://tyshse.special.tyc.edu.tw/%E7%B0%A1%E7%AB%A0/115/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E6%A1%83%E5%9C%92%E5%B8%82%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E9%9B%86%E4%B8%AD%E5%BC%8F%E7%89%B9%E6%95%99%E7%8F%AD%E7%B0%A1%E7%AB%A0%28%E5%90%AB%E7%BC%BA%E9%A1%8D%29.pdf",
  taoyuanSpecialGuide:
    "https://tyshse.special.tyc.edu.tw/%E7%B0%A1%E7%AB%A0/115/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E6%A1%83%E5%9C%92%E5%B8%82%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E7%89%B9%E6%AE%8A%E6%95%99%E8%82%B2%E5%AD%B8%E6%A0%A1%E7%B0%A1%E7%AB%A0.pdf",
  taichungPortal: "https://www.tc.edu.tw/page/e1fe6e53-ebe1-4c8e-8218-9dc4414dc3f5",
  taichungHighSchool: "https://www.tc.edu.tw/cms-file/6a17ad6efba5194ece0cc98f.pdf",
  taichungService: "https://www.tc.edu.tw/cms-file/6a17ad6efba5194ece0cc997.pdf",
  taichungSpecialSchool: "https://www.tc.edu.tw/cms-file/6a17ad6efba5194ece0cc994.pdf",
  kaohsiungPortal: "http://adapt.spec.kh.edu.tw/",
  kaohsiungHighSchool: "https://www.dam.kh.edu.tw/upload/68/101_6879/115%E6%99%AE%E9%80%9A%E7%8F%AD%E5%AF%A6%E7%94%A8%E6%8A%80%E8%83%BD%E7%B0%A1%E7%AB%A0.pdf",
  kaohsiungHighSchoolSeats: "https://www.mhjh.kh.edu.tw/upload/331/101_56590/45139125_11440430000_ATT1.pdf",
  kaohsiungService: "https://www.dam.kh.edu.tw/upload/68/101_6879/115%E9%9B%86%E4%B8%AD%E5%BC%8F%E7%89%B9%E6%95%99%E7%8F%AD.pdf",
  kaohsiungSpecialSchool: "https://www.mhjh.kh.edu.tw/upload/331/101_56590/45082993_11440105900_ATT1.pdf",
  tainanPortal: "https://serc.tn.edu.tw/115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E5%B7%A5%E4%BD%9C%E7%9B%B8%E9%97%9C%E8%A1%A8%E4%BB%B6/",
  tainanGuide: "https://serc.tn.edu.tw/wp-content/uploads/2025/12/%E8%87%BA%E5%8D%97%E5%B8%82115%E5%AD%B8%E5%B9%B4%E5%BA%A6%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%94%9F%E9%81%A9%E6%80%A7%E8%BC%94%E5%B0%8E%E5%AE%89%E7%BD%AE%E5%B7%A5%E4%BD%9C%E8%AA%AA%E6%98%8E%E6%9C%83%E6%89%8B%E5%86%8A.pdf",
  tainanVacancies: "https://www.tnmr.tn.edu.tw/wp-content/uploads/sites/119/2025/12/115%E9%81%A9%E6%80%A7%E5%AE%89%E7%BD%AE%E9%96%8B%E7%BC%BA%E5%90%8D%E9%A1%8D%E5%85%AC%E5%91%8A%E7%89%88.pdf"
};

function sourceNote(text, url, label = "115 學年度官方簡章") {
  return `
    <aside class="source-note">
      <div><span>資料來源</span><strong>${label}</strong><p>${text}</p></div>
      <a href="${url}" target="_blank" rel="noreferrer">前往官方公告頁</a>
    </aside>
  `;
}

function faqBasis(text, url) {
  return `<p class="faq-basis"><span>依據</span><a href="${url}" target="_blank" rel="noreferrer">${text}</a></p>`;
}

function schoolFinderTemplate({ source, type, title, description, officialUrl, officialLabel, note, placeholder = "例如：三重商工、餐飲、普通科" }) {
  return `
    <section class="school-finder guide-school-finder" data-school-finder-source="${source}" data-school-finder-type="${type}" aria-labelledby="schoolFinderTitle">
      <div class="finder-heading">
        <div><h3 id="schoolFinderTitle">${title}</h3><p>${description}</p></div>
        <a class="text-link" href="${officialUrl}" target="_blank" rel="noreferrer">${officialLabel}</a>
      </div>
      <div class="finder-controls" aria-label="校科篩選條件">
        <label class="search-box"><span>搜尋學校或科別</span><input data-school-search type="search" placeholder="${placeholder}" /></label>
        <label class="search-box" data-school-filter="district"><span>分區</span><select data-school-district><option value="all">全部分區</option></select></label>
        <label class="search-box" data-school-filter="kind"><span>學校類型</span><select data-school-kind><option value="all">全部類型</option></select></label>
        <label class="search-box" data-school-filter="group"><span>群別／技能領域</span><select data-school-group><option value="all">全部群別</option></select></label>
      </div>
      <div class="finder-summary" data-school-summary aria-live="polite"></div>
      <div class="school-results" data-school-results></div>
      <button class="button secondary load-more" data-school-more type="button" hidden>顯示更多校科</button>
      <p class="empty-state" data-school-empty hidden>找不到符合條件的學校或校科，可以減少篩選條件或換個關鍵字。</p>
      <p class="finder-note">${note}</p>
    </section>
  `;
}

function newTaipeiSchoolFinderTemplate(type) {
  const isGeneral = type === "general";
  return schoolFinderTemplate({
    source: "newTaipei",
    type,
    title: isGeneral ? "可選學校與校科" : "可選學校與安置名額",
    description: isGeneral
      ? "輸入校名或科別，再依分區、學校類型或群別縮小範圍。"
      : "輸入校名，再依學校類型縮小範圍。名額分為第一、第二階段，請依能力評估結果與簡章規定選填。",
    officialUrl: isGeneral ? officialSources.newTaipeiGeneralSeats : officialSources.newTaipeiServiceSeats,
    officialLabel: isGeneral ? "查看官方一般類科名額" : "查看官方服務群科名額",
    note: "名額不等於保證安置；實際結果仍依鑑輔小組審核與新北市最新公告為準。"
  });
}

function taoyuanSchoolFinderTemplate(type) {
  const isHighSchool = type === "highSchool";
  return schoolFinderTemplate({
    source: "taoyuan",
    type,
    title: isHighSchool ? "可選學校、校科與名額" : "可選學校與安置名額",
    description: isHighSchool
      ? "輸入校名或科別，再依學程、群別或學校縮小範圍。"
      : "輸入校名、科別或技能領域，查看各開缺學校與安置名額。",
    officialUrl: isHighSchool ? officialSources.taoyuanHighSchoolSeats : officialSources.taoyuanServiceSeats,
    officialLabel: isHighSchool ? "查看官方含缺額簡章" : "查看官方含缺額簡章",
    note: "名額不等於保證安置；實際結果仍依鑑定安置工作小組與桃園市最新公告為準。",
    placeholder: isHighSchool ? "例如：中壢高商、餐飲、普通科" : "例如：龍潭高中、餐飲、門市"
  });
}

function taipeiServiceSchoolFinderTemplate() {
  return schoolFinderTemplate({
    source: "taipeiService",
    type: "service",
    title: "可選學校與科別",
    description: "輸入校名或科別，再依安置學校類型縮小範圍。",
    officialUrl: officialSources.taipeiService,
    officialLabel: "查看正式簡章",
    note: "高級中等學校服務群科與特殊教育學校的評估、安置方式不同，請一併參考本頁說明。",
    placeholder: "例如：大安高工、餐飲、門市"
  });
}

function citySchoolFinderTemplate(city, type) {
  const isTaichung = city === "taichung";
  const isTainan = city === "tainan";
  const isHighSchool = type === "highSchool";
  const isService = type === "service";
  const sourceKey = `${city}-${type}`;
  const labels = isHighSchool
    ? { title: "可選學校、校科與名額", description: "輸入校名或科別，再依學校類型或群別縮小範圍。" }
    : { title: "可選學校與安置名額", description: "輸入校名、科別或技能領域，查看官方列出的安置資料。" };
  const urls = isTainan
    ? { highSchool: officialSources.tainanVacancies, service: officialSources.tainanVacancies, specialSchool: officialSources.tainanVacancies }
    : isTaichung
    ? { highSchool: officialSources.taichungHighSchool, service: officialSources.taichungService, specialSchool: officialSources.taichungSpecialSchool }
    : { highSchool: officialSources.kaohsiungHighSchoolSeats, service: officialSources.kaohsiungService, specialSchool: officialSources.kaohsiungSpecialSchool };
  const note = isTainan
    ? "臺南市參與國教署聯合安置的臺南區作業；名額不等於保證安置，實際結果以國教署與臺南市最新公告為準。"
    : isTaichung
    ? "名額不等於保證安置；實際結果仍以鑑輔會工作小組與臺中市最新公告為準。"
    : "名額不等於保證安置；實際結果仍以高雄市身障生安置審議小組與最新公告為準。";
  return schoolFinderTemplate({
    source: city,
    type: sourceKey,
    title: labels.title,
    description: labels.description,
    officialUrl: urls[type],
    officialLabel: isTainan || (isHighSchool && !isTaichung) ? "查看官方開缺名單" : "查看官方簡章",
    note,
    placeholder: "例如：臺中高工、餐飲、綜合職能科"
  });
}

const taipeiServiceSchoolData = [
  { school: "士林高商", program: "門市服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "大安高工", program: "餐飲服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "木柵高工", program: "餐飲服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "內湖高工", program: "門市服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "松山工農", program: "餐飲服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "松山家商", program: "餐飲服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "南港高工", program: "門市服務科", kind: "高級中等學校", group: "服務群科", seats: null },
  { school: "文山特殊教育學校", program: "餐飲服務科、居家生活服務科", kind: "特殊教育學校", group: "服務群科", seats: null },
  { school: "臺北特殊教育學校", program: "餐飲服務科、居家生活服務科", kind: "特殊教育學校", group: "服務群科", seats: null }
];

function getSchoolFinderRows(finder) {
  const source = finder.dataset.schoolFinderSource;
  const type = finder.dataset.schoolFinderType;
  if (source === "newTaipei" && typeof newTaipeiSchoolData !== "undefined") return newTaipeiSchoolData[type] || [];
  if (source === "taoyuan" && typeof taoyuanSchoolData !== "undefined") return taoyuanSchoolData[type] || [];
  if (source === "taichung" && typeof taichungSchoolData !== "undefined") return taichungSchoolData[type.replace("taichung-", "")] || [];
  if (source === "kaohsiung" && typeof kaohsiungSchoolData !== "undefined") return kaohsiungSchoolData[type.replace("kaohsiung-", "")] || [];
  if (source === "tainan" && typeof tainanSchoolData !== "undefined") return tainanSchoolData[type.replace("tainan-", "")] || [];
  if (source === "taipeiService") return taipeiServiceSchoolData;
  return [];
}

function bindSchoolFinder() {
  const finder = detail.querySelector("[data-school-finder-source]");
  if (!finder) return;

  const rows = getSchoolFinderRows(finder);
  if (!rows.length) return;
  const search = finder.querySelector("[data-school-search]");
  const district = finder.querySelector("[data-school-district]");
  const kind = finder.querySelector("[data-school-kind]");
  const group = finder.querySelector("[data-school-group]");
  const summary = finder.querySelector("[data-school-summary]");
  const results = finder.querySelector("[data-school-results]");
  const more = finder.querySelector("[data-school-more]");
  const empty = finder.querySelector("[data-school-empty]");
  let visibleCount = 20;

  const populate = (control, values, emptyLabel) => {
    if (values.length < 2) {
      control.closest("[data-school-filter]").hidden = true;
      return;
    }
    control.insertAdjacentHTML("beforeend", values.map((value) => `<option value="${value}">${value}</option>`).join(""));
    control.querySelector("option").textContent = emptyLabel;
  };

  populate(district, [...new Set(rows.map((row) => row.district).filter(Boolean))], "全部分區");
  populate(kind, [...new Set(rows.map((row) => row.kind).filter(Boolean))], "全部類型");
  populate(group, [...new Set(rows.map((row) => row.group).filter(Boolean))], "全部群別");

  const render = () => {
    const keyword = search.value.trim().toLowerCase();
    const filtered = rows.filter((row) => {
      const searchable = `${row.school} ${row.program} ${row.group} ${row.kind} ${row.district}`.toLowerCase();
      return searchable.includes(keyword)
        && (district.value === "all" || row.district === district.value)
        && (kind.value === "all" || row.kind === kind.value)
        && (group.value === "all" || row.group === group.value);
    });
    const visibleRows = filtered.slice(0, visibleCount);
    const schoolCount = new Set(filtered.map((row) => row.school)).size;
    const seatCount = filtered.reduce((total, row) => total + (Number.isFinite(row.seats) ? row.seats : 0), 0);
    const hasSeats = filtered.some((row) => Number.isFinite(row.seats));

    const recordLabel = finder.dataset.schoolFinderType === "service" ? "筆安置資料" : "筆校科資料";
    summary.textContent = hasSeats
      ? `115 學年度官方資料｜找到 ${schoolCount} 所學校、${filtered.length} ${recordLabel}，合計 ${seatCount} 名`
      : `115 學年度官方資料｜找到 ${schoolCount} 所學校`;
    results.innerHTML = visibleRows.map((row) => {
      const tags = [row.district, row.kind, row.group].filter(Boolean).map((tag) => `<span>${tag}</span>`).join("");
      const seats = Number.isFinite(row.seats) ? `總安置 ${row.seats} 名` : "名額請以官方公告為準";
      return `<article class="school-result guide-school-result"><div class="result-main"><div class="result-tags">${tags}</div><h3>${row.school}</h3><p>${row.program}</p></div><strong class="selected-seat">${seats}</strong></article>`;
    }).join("");
    empty.hidden = filtered.length > 0;
    more.hidden = filtered.length <= visibleCount;
  };

  [search, district, kind, group].forEach((control) => {
    control.addEventListener(control.tagName === "INPUT" ? "input" : "change", () => {
      visibleCount = 20;
      render();
    });
  });
  more.addEventListener("click", () => {
    visibleCount += 20;
    render();
  });
  render();
}

const guides = {
  "taipei-service": {
    title: "臺北市集中式特教班服務群科",
    shortTitle: "臺北市服務群科",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認資格與想就讀的學校類型",
        body: `
          <p class="detail-lead">報名學生須於 2025/12/31 前登錄於教育部特教通報網，並領有鑑輔會證明。高級中等學校服務群科與特殊教育學校的資格條件不完全相同。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">共同條件</span><h4>年齡與學歷</h4><ul><li>原則上須滿 21 足歲以下，應屆畢業生不受年齡限制。</li><li>須為國中畢業或具同等學力，且未曾完成本安置管道的畢業證書繳交報到。</li><li>設籍臺北市或新北市，非寄居身分並具居住事實。</li></ul></article>
            <article class="info-card"><span class="tag">高級中等學校</span><h4>服務群科資格</h4><ul><li>領有智能障礙鑑定證明。</li><li>自閉症、情緒行為障礙學生，須經鑑輔小組評估為智力臨界以下且適合就讀。</li><li>其他障礙類別亦須經本管道鑑輔小組評估。</li></ul></article>
            <article class="info-card"><span class="tag">特殊教育學校</span><h4>服務群科資格</h4><ul><li>智能障礙、多重障礙兼具智能障礙，或其他障礙類別伴隨智力低下。</li><li>新北市學生須能到臺北市區交通車接駁處，特教學校交通車不駛入新北市。</li></ul></article>
            <article class="info-card"><span class="tag">報名方式</span><h4>由國中協助</h4><ul><li>應屆生由原就讀國中辦理。</li><li>非應屆生由原就讀國中協助線上報名，再由學生或法定代理人繳交資料。</li></ul></article>
          </div>
          <p class="note-box">臺北市簡章未寫成兩類一開始只能擇一；但若已獲「十二年就學安置高級中等學校」錄取並完成報到，即視同放棄本服務群科管道。</p>
          ${sourceNote("依簡章第 1 至 3 頁的報名對象、日期與方式整理。", officialSources.taipeiService)}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2025/12/6</span><span class="timeline-date">2026/1/9</span></time><div><h3>國中上網填寫報名資料</h3><p>校內收件時間仍依各國中通知為準。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/1/13</span><span class="timeline-date">2026/1/14</span></time><div><h3>集體或個別報名</h3><p>依簡章分區、分時段至臺北特殊教育學校繳件。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/1 下旬</span><span class="timeline-date">至 2026/3</span></time><div><h3>資格審核與複審</h3><p>審核通過後，才進入後續能力評估或特殊教育學校安置程序。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/18</span><span class="timeline-date">2026/4/19</span></time><div><h3>學習能力及職業能力評估</h3><p>高級中等學校服務群科須參加；特殊教育學校服務群科免參加。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/5</span></time><div><h3>公告安置結果</h3><p>同日寄發安置結果暨報到通知單。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/13</span></time><div><h3>安置學生報到</h3><p>高級中等學校為 9:00 至 15:00；特殊教育學校依通知單時間。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/15 前</span></time><div><h3>繳交國中畢業或修結業證書正本</h3><p>未在期限內繳交者，視同放棄本管道安置。</p></div></article>
          </div>
          <aside class="official-action">
            <div>
              <strong>歷屆能力評估試題</strong>
              <p>官方提供 96 至 113 年學習能力及職業能力評估試題，可用來認識題型。歷屆試題僅供參考，當年度評估內容與方式仍以正式簡章及通知為準。</p>
            </div>
            <a class="button primary" href="${officialSources.taipeiPastTests}" target="_blank" rel="noreferrer">查看官方歷屆試題</a>
          </aside>
          ${sourceNote("依簡章重要時程表整理；個別通知時間仍以學校文件為準。", officialSources.taipeiService)}
        `
      },
      schools: {
        label: "學校與科別",
        title: "9 所學校，分成兩種安置方式",
        body: `
          <p class="detail-lead">簡章列出 7 所高級中等學校及 2 所特殊教育學校。高級中等學校須參加能力評估；特殊教育學校依學區安置，入學後再評估分科。</p>
          ${taipeiServiceSchoolFinderTemplate()}
          <p class="note-box">校名、科別與班級數可以先用來認識選項；實際安置人數及結果仍以鑑輔小組與教育局公告為準。</p>
          ${sourceNote("依簡章第 4 至 5 頁及各校服務群科簡介整理。", officialSources.taipeiService)}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>服務群科都要參加能力評估嗎？</summary><p>不是。報名 7 所高級中等學校服務群科者須參加學習能力及職業能力評估；報名文山特校或臺北特校者免參加。</p>${faqBasis("正式簡章 PDF 第 8 頁，「伍、評估」", officialSources.taipeiService)}</details>
            <details><summary>可以同時參加臺北市另一個十二年就學安置嗎？</summary><p>簡章未規定一開始只能二選一；但若已獲十二年就學安置高級中等學校錄取並完成報到，就視同放棄服務群科管道。</p>${faqBasis("正式簡章 PDF 第 11 頁，「壹拾、注意事項」第 3 點", officialSources.taipeiService)}</details>
            <details><summary>新北市學生也能報名嗎？</summary><p>符合簡章設籍、居住與鑑定資格者可以。高級中等學校服務群科對新北市學生的安置總名額至多 8 名；報名臺北市特殊教育學校者，須能至臺北市市區交通車接駁處。</p>${faqBasis("正式簡章 PDF 第 5、8 至 9 頁，「參、報名」及「陸、安置學校與安置原則」", officialSources.taipeiService)}</details>
            <details><summary>高級中等學校可以填幾個志願？</summary><p>報名表列有 7 個高級中等學校志願欄位。安置時會參酌能力評估結果與志願，並依簡章所列階段辦理。</p>${faqBasis("正式簡章 PDF 第 9、13 頁，「安置原則」及附表 2 報名表", officialSources.taipeiService)}</details>
            <details><summary>報到後還要注意什麼？</summary><p>須於 2026/6/15 前繳交國中畢業證書或修（結）業證書正本，未繳交者視同放棄。</p>${faqBasis("正式簡章 PDF 第 11 頁，「壹拾、注意事項」第 1 點", officialSources.taipeiService)}</details>
          </div>
          ${sourceNote("答案依簡章的評估、安置原則、報到與注意事項整理。", officialSources.taipeiService)}
        `
      }
    }
  },

  "new-taipei-general": {
    title: "新北市一般類科適性輔導安置",
    shortTitle: "新北市一般類科",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "應屆與非應屆學生分開確認",
        body: `
          <p class="detail-lead">一般類科包含普通科與職業類科。新北市一般類科與集中式特教班服務群科只能擇一報名。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">應屆畢業生</span><h4>須同時符合</h4><ul><li>持有適用於高級中等教育階段的特教學生資格或鑑定證明。</li><li>未曾參與教育部國教署或其他直轄市辦理的身障生適性輔導安置。</li><li>由就讀國中協助完成網路報名及資料上傳。</li></ul></article>
            <article class="info-card"><span class="tag">非應屆畢業生</span><h4>另有設籍與學籍限制</h4><ul><li>2025/12/31 前設籍且居住於新北市。</li><li>具國中畢業或同等學力，且無高中學籍或高中以上學歷。</li><li>具高中階段特教資格，且未曾參與其他適性輔導安置。</li></ul></article>
          </div>
          <p class="note-box">曾報名其他適性輔導安置，即使後來放棄、未獲安置或未報到，非應屆畢業生仍可能被視為曾參與，報名前務必請原國中協助確認。</p>
          ${sourceNote("依一般類科簡章報名資格與新北市兩類簡章公告整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2025/12/31 前</span></time><div><h3>公告開缺名額</h3><p>於新北特殊教育資訊網及適性輔導安置網公告。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/18</span><span class="timeline-date">2026/5/25</span></time><div><h3>網路報名與第一階段志願選填</h3><p>由國中協助辦理。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/26</span><span class="timeline-date">2026/6/2</span></time><div><h3>報名資料上傳</h3><p>系統鎖定後列印簽章，再完成上傳。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/8</span><span class="timeline-date">2026/6/10</span></time><div><h3>報名資料審查</h3><p>須補正者於 6/15 前完成。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/18</span><span class="timeline-date">2026/6/26</span></time><div><h3>第一階段安置</h3><p>依簡章規定及學生志願辦理。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/29</span><span class="timeline-date">2026/7/1</span></time><div><h3>第二階段名單與志願作業</h3><p>6/29 公告名單，6/30 至 7/1 辦理第二階段志願選填。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/7/7 前</span></time><div><h3>安置結果公告</h3><p>若有爭議，可依簡章期限提出申訴。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/7/9</span></time><div><h3>安置學校報到</h3><p>未依期限報到者視同放棄。</p></div></article>
          </div>
          ${sourceNote("依一般類科簡章辦理日程表整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      },
      schools: {
        label: "學校與名額",
        title: "1,115 個一般類科安置名額",
        body: `
          <p class="detail-lead">一般類科可填到科別。下方依官方公告整理 165 筆校科資料、共 1,115 名，並保留分區、學校類型與群別篩選。</p>
          ${newTaipeiSchoolFinderTemplate("general")}
          ${sourceNote("校科與實際開缺名額依新北市 115 學年度一般類科安置名額公告整理。", officialSources.newTaipeiGeneralSeats, "新北市官方一般類科名額公告")}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>一般類科與服務群科可以同時報名嗎？</summary><p>不可以。新北市 115 學年度公告明定兩類只能擇一，不得重複，違者取消安置資格。</p>${faqBasis("正式簡章 PDF 第 7 至 8 頁，「報名注意事項」及「其他注意事項」", officialSources.newTaipeiGuide)}</details>
            <details><summary>一般類科什麼時候報名？</summary><p>網路報名為 2026/5/18 至 5/25，資料上傳為 5/26 至 6/2，與服務群科的三月報名不同。</p>${faqBasis("正式簡章 PDF 第 3、5 頁，「辦理日程表」及「四、報名作業」", officialSources.newTaipeiGuide)}</details>
            <details><summary>一般類科要填幾個志願？</summary><p>簡章以 8 至 16 個志願為原則；未填滿 8 個志願須另附切結書，也可能因志願不足而未獲安置。</p>${faqBasis("正式簡章 PDF 第 6 至 7 頁，「報名應繳資料」及「志願選填方式」", officialSources.newTaipeiGuide)}</details>
            <details><summary>非應屆畢業生也可以申請嗎？</summary><p>可以，但設籍居住、學籍學歷、特教資格及過去是否參與適性輔導安置都有限制，須逐項符合。</p>${faqBasis("正式簡章 PDF 第 5 頁，「三、報名資格」第 2 項", officialSources.newTaipeiGuide)}</details>
            <details><summary>最新消息去哪裡看？</summary><p>以新北特殊教育資訊網的適性安置專區及新北市身心障礙學生適性輔導安置網為準。</p>${faqBasis("正式簡章 PDF 第 1、5 頁，簡章封面及「二、安置學校及名額」", officialSources.newTaipeiGuide)}</details>
          </div>
          ${sourceNote("依一般類科簡章與新北市兩類簡章公告整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      }
    }
  },

  "new-taipei-service": {
    title: "新北市集中式特教班服務群科",
    shortTitle: "新北市服務群科",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認鑑定資格與畢業身分",
        body: `
          <p class="detail-lead">服務群科主要對象為智能障礙，或鑑定證明註記伴隨智能障礙等符合簡章條件的學生。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">應屆畢業生</span><h4>須同時符合</h4><ul><li>持有適用於高中階段的特教資格或鑑定證明。</li><li>資格為智能障礙、其他障礙附註心智功能伴隨智能障礙，或自閉症且經鑑輔會安置就讀新北市國中集中式特教班。</li><li>未曾參與國教署或其他直轄市的適性輔導安置。</li></ul></article>
            <article class="info-card"><span class="tag">非應屆畢業生</span><h4>另有四項限制</h4><ul><li>2025/12/31 前設籍且居住於新北市。</li><li>21 歲以下，具國中學歷，但無高中學籍或高中以上學歷。</li><li>資格為智能障礙或其他障礙附註伴隨智能障礙。</li><li>未曾參與其他適性輔導安置。</li></ul></article>
          </div>
          <p class="note-box">報名本服務群科者不得再報名新北市一般類科，或其他縣市、國教署辦理的適性輔導安置。</p>
          ${sourceNote("依服務群科簡章第 5 至 6 頁的報名資格與注意事項整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2026/2/26 前</span></time><div><h3>公告安置名額</h3><p>於新北特殊教育資訊網及適性輔導安置網公告。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/3/2</span><span class="timeline-date">2026/3/5</span></time><div><h3>網路報名</h3><p>由就讀或原就讀國中協助辦理。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/3/6</span><span class="timeline-date">2026/3/12</span></time><div><h3>報名資料上傳</h3><p>系統鎖定後列印有浮水印的表件，簽章後上傳。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/11</span></time><div><h3>能力評估</h3><p>基本學習能力及職業能力；通過免評估申請者除外。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/28</span></time><div><h3>公告能力評估切截分數</h3><p>志願範圍會依 A、B 切截分數與免評估身分而不同。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/29</span><span class="timeline-date">2026/5/5</span></time><div><h3>網路志願選填</h3><p>志願單簽章後須在期限內上傳。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/25 前</span></time><div><h3>安置結果公告</h3><p>同時公告餘額安置名額。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/8</span><span class="timeline-date">2026/6/26</span></time><div><h3>安置學校報到</h3><p>實際日期依各安置學校書面通知。</p></div></article>
          </div>
          ${sourceNote("依服務群科簡章辦理日程表整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      },
      schools: {
        label: "學校與名額",
        title: "簡章列 12 校，名額另行公告",
        body: `
          <p class="detail-lead">簡章附錄列出 12 所學校、共 28 班；實際安置名額於 2026/2/26 前另行公告。志願範圍會依能力評估結果或免評估身分而不同。</p>
          ${newTaipeiSchoolFinderTemplate("service")}
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">參加能力評估</span><h4>依切截分數選填</h4><p>達 A、達 B 未達 A、未達 B 三種結果，可選填的學校序號及志願數不同。</p></article>
            <article class="info-card"><span class="tag">免參加能力評估</span><h4>依就近順位選填</h4><p>至多填 3 個志願，安置會依學籍、戶籍與簡章所列就近順位辦理。</p></article>
          </div>
          <aside class="official-action"><div><strong>查看 115 學年度服務群科安置名額</strong><p>實際校別名額以新北市官方附件為準。</p></div><a class="button primary" href="${officialSources.newTaipeiServiceSeats}" target="_blank" rel="noreferrer">查看官方名額</a></aside>
          ${sourceNote("學校、班級數與志願原則依簡章附錄及第 7 至 9 頁整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>服務群科與一般類科可以同時報名嗎？</summary><p>不可以。新北市兩類簡章只能擇一，重複報名會取消安置資格與結果。</p>${faqBasis("正式簡章 PDF 第 8、12 頁，「報名注意事項」及「其他注意事項」", officialSources.newTaipeiGuide)}</details>
            <details><summary>所有人都要參加能力評估嗎？</summary><p>原則上要。國中安置集中式特教班，或因其他特殊情形無法參加者，可以依簡章提出免參加能力評估申請，仍須經審查。</p>${faqBasis("正式簡章 PDF 第 9 頁，「免參加能力評估申請」", officialSources.newTaipeiGuide)}</details>
            <details><summary>能力評估在評估什麼？</summary><p>包含基本學習能力（語文、數學、社會適應等）與職業能力，兩項各 50 分。</p>${faqBasis("正式簡章 PDF 第 9 頁，「五、能力評估」第 4、7 項", officialSources.newTaipeiGuide)}</details>
            <details><summary>可以填幾個志願？</summary><p>依能力評估的 A、B 切截分數而不同；免評估者與未達 B 者至多 3 個，其他組別依簡章可選學校範圍辦理。</p>${faqBasis("正式簡章 PDF 第 9 至 10 頁，「六、志願選填方式」", officialSources.newTaipeiGuide)}</details>
            <details><summary>沒有在第一輪報名，還有機會嗎？</summary><p>若正式安置後仍有餘額，符合資格且未曾報名其他適性輔導安置者，可留意 5/26 至 6/2 的餘額安置報名。</p>${faqBasis("正式簡章 PDF 第 11 頁，「十、餘額安置」", officialSources.newTaipeiGuide)}</details>
            <details><summary>報到日期為什麼是一段期間？</summary><p>正式安置學生在 2026/6/8 至 6/26 期間，依各高中通知的日期與方式報到。</p>${faqBasis("正式簡章 PDF 第 11 頁，「九、報到入學」", officialSources.newTaipeiGuide)}</details>
          </div>
          ${sourceNote("依服務群科簡章的能力評估、志願、報到與餘額安置規定整理。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
        `
      }
    }
  },

  "taoyuan-high-school": {
    title: "桃園市高級中等學校適性輔導安置",
    shortTitle: "桃園市高級中等學校",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認是否適用這一類",
        body: `
          <p class="detail-lead">這一類適用於鑑定證明不含智能障礙類的學生。報名資格需要同時符合，應屆與非應屆學生的通報條件也不同。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">學歷身分</span><h4>應屆或未曾參加者</h4><ul><li>應屆國中畢業生可申請。</li><li>非應屆者須未曾參加本安置，並具國中畢（修）業或同等學力。</li></ul></article>
            <article class="info-card"><span class="tag">特教資格</span><h4>通報與類別都要符合</h4><ul><li>應屆生須在 2025/12/31 前完成特教通報網登錄。</li><li>非應屆者須曾於國中教育階段登錄，且障礙類別符合本簡章。</li></ul></article>
            <article class="info-card"><span class="tag">鑑定證明</span><h4>不含智能障礙類</h4><ul><li>須持有鑑輔會核發的特教學生鑑定證明。</li><li>鑑定證明不得包含智能障礙類。</li></ul></article>
            <article class="info-card"><span class="tag">報名方式</span><h4>由原國中協助</h4><ul><li>應屆生由原就讀國中辦理線上報名與資料繳交。</li><li>跨縣市或非應屆情形，請先請原國中依簡章確認。</li></ul></article>
          </div>
          <p class="note-box">桃園市的高級中等學校、集中式特教班與特殊教育學校三類簡章只能選擇一種；也不得重複參加其他直轄市或國教署辦理的適性安置。</p>
          ${sourceNote("依正式簡章第 5 至 7 頁的報名資格與注意事項整理。", officialSources.taoyuanHighSchoolGuide)}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2026/1/26</span><span class="timeline-date">2026/2/26</span></time><div><h3>線上報名</h3><p>由國中協助完成；校內收件時間請依原國中通知。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/3/2</span><span class="timeline-date">2026/3/6</span></time><div><h3>桃園市國中繳交報名資料</h3><p>完成報名表與應繳文件送件。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/30 前</span></time><div><h3>必要時進行面談</h3><p>依各安置學校通知辦理。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/1</span></time><div><h3>公告安置結果</h3><p>同時由主辦單位寄發安置結果通知給國中。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/7/8</span><span class="timeline-date">2026/7/9</span></time><div><h3>至安置學校報到</h3><p>請依分發學校通知的時間與方式完成報到。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/7/6</span><span class="timeline-date">2026/7/10</span></time><div><h3>餘額安置報名</h3><p>未獲安置且符合資格者，可留意後續餘額安置。</p></div></article>
          </div>
          ${sourceNote("依正式簡章辦理日程表整理；各國中與安置學校的校內作業時間仍以通知為準。", officialSources.taoyuanHighSchoolGuide)}
        `
      },
      schools: {
        label: "學校與名額",
        title: "1,075 個高級中等學校名額",
        body: `
          <p class="detail-lead">115 學年度官方名額表列出 149 個高級中等學校校科志願、共 1,075 名；另有實用技能學程 21 個校科志願、共 112 名。可直接從下方搜尋與篩選。</p>
          ${taoyuanSchoolFinderTemplate("highSchool")}
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">群別選擇</span><h4>最多選 3 個群別</h4><p>第 1 至第 3 志願必須填同一群別；從第 4 志願起，可填所選 3 個群別內的校科。</p></article>
            <article class="info-card"><span class="tag">志願數</span><h4>至少 15 個、至多 30 個</h4><p>志願太少可能影響安置機會；填寫時可和國中老師一起確認排序。</p></article>
          </div>
          ${sourceNote("名額、校科志願數與群別規則依官方含缺額簡章及正式簡章整理。", officialSources.taoyuanHighSchoolSeats, "115 學年度官方含缺額簡章")}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>可以同時報名桃園市其他兩類安置嗎？</summary><p>不可以。高級中等學校、集中式特教班與特殊教育學校三類只能選擇一種報名；也不得重複參加其他直轄市或國教署的適性安置。</p>${faqBasis("正式簡章 PDF 第 9 頁，「注意事項」", officialSources.taoyuanHighSchoolGuide)}</details>
            <details><summary>這一類適合哪些學生？</summary><p>申請者須持有不含智能障礙類的特教學生鑑定證明，並符合應屆或非應屆的通報、學歷等條件。</p>${faqBasis("正式簡章 PDF 第 5 頁，「參、報名」", officialSources.taoyuanHighSchoolGuide)}</details>
            <details><summary>志願要填幾個？</summary><p>至少填 15 個、至多 30 個志願；最多選擇 3 個群別，且前 3 個志願須屬於同一群別。</p>${faqBasis("正式簡章 PDF 第 7 頁，「志願選填」", officialSources.taoyuanHighSchoolGuide)}</details>
            <details><summary>沒有分到前面志願時怎麼辦？</summary><p>若因志願太少或熱門校科未獲安置，學生須依規定調整志願；調整後仍未獲安置者，會進行面談。</p>${faqBasis("正式簡章 PDF 第 8 頁，「安置原則」", officialSources.taoyuanHighSchoolGuide)}</details>
            <details><summary>還可以參加免試入學或特色招生嗎？</summary><p>可以同時報名其他入學管道；若同時錄取，最後只能選擇一個安置或入學結果完成報到。</p>${faqBasis("正式簡章 PDF 第 9 頁，「注意事項」", officialSources.taoyuanHighSchoolGuide)}</details>
            <details><summary>錯過第一輪還有機會嗎？</summary><p>未參加本安置、未透過其他入學管道錄取且符合資格者，可留意正式安置後的餘額安置公告。</p>${faqBasis("正式簡章 PDF 第 9 至 10 頁，「餘額安置」", officialSources.taoyuanHighSchoolGuide)}</details>
          </div>
          ${sourceNote("各題依正式簡章的報名、志願、安置、報到與餘額安置規定整理。", officialSources.taoyuanHighSchoolGuide)}
        `
      }
    }
  },
  "taoyuan-service": {
    title: "桃園市高級中等學校集中式特教班",
    shortTitle: "桃園市集中式特教班",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認是否適用集中式特教班",
        body: `
          <p class="detail-lead">這一類主要適用於持有智能障礙，或其他障礙伴隨智能障礙鑑定證明，且為輕、中度智能障礙的學生。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">共同條件</span><h4>學歷、年齡與通報</h4><ul><li>應屆畢業生可申請；非應屆者須未曾參加適性安置並具國中畢（修）業或同等學力。</li><li>非應屆者原則上須在 21 足歲以下；應屆畢業生不受此限。</li><li>應屆生須於 2025/12/31 前完成特教通報網確認個案登錄。</li></ul></article>
            <article class="info-card"><span class="tag">鑑定證明</span><h4>輕、中度智能障礙</h4><ul><li>須持有鑑輔會核發的智能障礙鑑定證明，或其他障礙伴隨智能障礙的鑑定證明。</li><li>簡章適用輕度或中度智能障礙學生。</li></ul></article>
            <article class="info-card"><span class="tag">報名方式</span><h4>由原國中協助</h4><ul><li>由原就讀國中完成網路報名與紙本送件。</li><li>跨縣市報名者亦由原國中辦理，並依期限郵寄資料。</li></ul></article>
            <article class="info-card"><span class="tag">只能選一類</span><h4>不可重複報名</h4><p>不得同時報名桃園市特殊教育學校或高級中等學校簡章，也不能重複參加其他縣市或國教署的適性安置。</p></article>
          </div>
          ${sourceNote("依集中式特教班簡章第 2-5 至 2-6 頁整理。", officialSources.taoyuanServiceGuide)}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2026/1/26</span><span class="timeline-date">2026/2/26</span></time><div><h3>完成網路報名</h3><p>學生向原國中報名，由國中完成平台作業。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/3/2</span><span class="timeline-date">2026/3/6</span></time><div><h3>桃園市國中送件</h3><p>國中彙整並送達紙本報名表件。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/11</span></time><div><h3>能力評估</h3><p>包含基本學習能力及職業能力評估。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/4/20</span></time><div><h3>查詢評估結果</h3><p>結果通知單寄至國中，並提供網路查詢。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/5/4</span><span class="timeline-date">2026/5/8</span></time><div><h3>唱名分發</h3><p>由桃園特教學校通知日期與地點；無法到場須依規定委託。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/10</span><span class="timeline-date">2026/6/15</span></time><div><h3>至安置學校報到</h3><p>依安置學校指定時間完成報到。</p></div></article>
          </div>
          ${sourceNote("依集中式特教班簡章第 2-3 至 2-4 頁辦理日程表整理。", officialSources.taoyuanServiceGuide)}
        `
      },
      schools: {
        label: "學校與名額",
        title: "開缺學校與安置方式",
        body: `
          <p class="detail-lead">115 學年度共有 7 所開缺學校、150 名。可依校名、科別或技能領域篩選；安置時仍以能力評估結果與現場唱名分發為核心。</p>
          ${taoyuanSchoolFinderTemplate("service")}
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">先看能力評估</span><h4>基本與職業能力</h4><p>所有報名學生都須參加能力評估；工作小組會依參與人數與結果訂定切截點安置標準。</p></article>
            <article class="info-card"><span class="tag">再參加分發</span><h4>現場唱名分發</h4><p>法定代理人、實際照顧者或符合規定的受委託人應到場；未到場且未完成委託者，不予安置。</p></article>
          </div>
          ${sourceNote("依集中式特教班簡章第 2-7 至 2-9 頁與官方含缺額簡章整理。", officialSources.taoyuanServiceSeats, "115 學年度官方含缺額簡章")}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>需要參加能力評估嗎？</summary><p>需要。集中式特教班所有報名學生都要參加基本學習能力及職業能力評估。</p>${faqBasis("集中式特教班簡章第 2-7 頁，「能力評估」", officialSources.taoyuanServiceGuide)}</details>
            <details><summary>能力評估結果可以複查嗎？</summary><p>可以。在 2026/4/27 中午 12 時前，檢附原結果通知單正本，以傳真向桃園特教學校申請；複查以一次為限。</p>${faqBasis("集中式特教班簡章第 2-7 頁，「結果複查」", officialSources.taoyuanServiceGuide)}</details>
            <details><summary>唱名分發一定要到嗎？</summary><p>原則上要。若法定代理人或實際照顧者無法到場，須依簡章規定委託原國中的相關人員；未到場且未完成委託者不予安置。</p>${faqBasis("集中式特教班簡章第 2-8 頁，「安置作業」", officialSources.taoyuanServiceGuide)}</details>
            <details><summary>可以同時報名其他安置類型嗎？</summary><p>不可以。三類簡章只能選一種，也不得重複參加其他直轄市或國教署適性安置。</p>${faqBasis("集中式特教班簡章第 2-8 頁，「安置作業」", officialSources.taoyuanServiceGuide)}</details>
          </div>
          ${sourceNote("各題依集中式特教班簡章的能力評估、安置與報到規定整理。", officialSources.taoyuanServiceGuide)}
        `
      }
    }
  },
  "taoyuan-special-school": {
    title: "桃園市特殊教育學校適性輔導安置",
    shortTitle: "桃園市特殊教育學校",
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認是否適用特殊教育學校",
        body: `
          <p class="detail-lead">這一類以中重度需求學生為主，115 學年度安置學校為桃園特教學校。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">共同條件</span><h4>學歷、年齡與通報</h4><ul><li>應屆畢業生可申請；非應屆者須未曾參加適性安置並具國中畢（修）業或同等學力。</li><li>非應屆者原則上須在 21 足歲以下；應屆畢業生不受此限。</li><li>應屆生須於 2025/12/31 前完成特教通報網確認個案登錄。</li></ul></article>
            <article class="info-card"><span class="tag">適用對象</span><h4>中重度需求為主</h4><ul><li>智能障礙中度、重度或極重度。</li><li>自閉症中度且伴隨智能障礙，或重度、極重度。</li><li>腦性麻痺中度以上且伴隨智能障礙，或其他障礙含中重度智能障礙。</li></ul></article>
            <article class="info-card"><span class="tag">報名方式</span><h4>由原國中協助</h4><p>由原就讀國中完成網路報名與紙本送件；跨縣市報名者亦由原國中依期限郵寄資料。</p></article>
            <article class="info-card"><span class="tag">在家教育</span><h4>另有前提</h4><p>申請在家教育者，國中階段須已安置在家教育巡迴輔導班，並於報名期間繳交相關表件。</p></article>
          </div>
          ${sourceNote("依特殊教育學校簡章第 1-5 至 1-7 頁整理。", officialSources.taoyuanSpecialGuide)}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            <article class="timeline-item"><time><span class="timeline-date">2026/1/26</span><span class="timeline-date">2026/2/26</span></time><div><h3>完成網路報名</h3><p>學生向原國中報名，由國中完成平台作業。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/3/2</span><span class="timeline-date">2026/3/6</span></time><div><h3>桃園市國中送件</h3><p>國中彙整並送達紙本報名表件。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/1</span></time><div><h3>公告安置結果</h3><p>結果公告於官方安置網站，通知單由國中轉發。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/6/10</span><span class="timeline-date">2026/6/15</span></time><div><h3>到桃園特教學校報到</h3><p>攜帶通知單、學歷證件及規定資料辦理。</p></div></article>
            <article class="timeline-item"><time><span class="timeline-date">2026/7/31</span></time><div><h3>餘額安置結果公告</h3><p>餘額安置結果公告後，須於 8/7 前完成報到。</p></div></article>
          </div>
          ${sourceNote("依特殊教育學校簡章第 1-3 至 1-4 頁辦理日程表整理。", officialSources.taoyuanSpecialGuide)}
        `
      },
      schools: {
        label: "學校與名額",
        title: "以桃園特教學校為限",
        body: `
          <p class="detail-lead">115 學年度循此簡章報名的學生，安置學校為桃園市立桃園特殊教育學校；錄取報到後，再由學校依期程完成分科安置。</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">安置方式</span><h4>書面審查綜合研判</h4><p>鑑定安置工作小組會依轉銜輔導及相關會議紀錄、學生需求與學校資源進行書面審查。</p></article>
            <article class="info-card"><span class="tag">分科安排</span><h4>報到後填選科志願</h4><p>完成報到當日填寫選科志願，由桃園特教學校在公告期程內完成分科安置。</p></article>
          </div>
          <aside class="official-action"><div><strong>查看官方開缺名額</strong><p>桃園特教學校實際安置名額以年度公告為準。</p></div><a class="button primary" href="${officialSources.taoyuanSpecialGuide}" target="_blank" rel="noreferrer">查看官方簡章</a></aside>
          ${sourceNote("依特殊教育學校簡章第 1-7 至 1-8 頁整理。", officialSources.taoyuanSpecialGuide)}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>會安置到哪些學校？</summary><p>115 學年度此簡章安置以桃園特教學校為限。</p>${faqBasis("特殊教育學校簡章第 1-7 頁，「安置作業」", officialSources.taoyuanSpecialGuide)}</details>
            <details><summary>需要能力評估嗎？</summary><p>此簡章的安置作業是書面審查與綜合研判，不是集中式特教班的能力評估與唱名分發流程。</p>${faqBasis("特殊教育學校簡章第 1-7 頁，「安置作業」", officialSources.taoyuanSpecialGuide)}</details>
            <details><summary>報到後可以選科嗎？</summary><p>可以。報到入學當日填寫選科志願，再由桃園特教學校完成分科安置。</p>${faqBasis("特殊教育學校簡章第 1-8 頁，「報到」", officialSources.taoyuanSpecialGuide)}</details>
            <details><summary>可以同時報名其他兩類嗎？</summary><p>不可以。特殊教育學校、集中式特教班與高級中等學校只能選擇一種，也不得重複參加其他縣市或國教署適性安置。</p>${faqBasis("特殊教育學校簡章第 1-7 頁，「安置作業」", officialSources.taoyuanSpecialGuide)}</details>
          </div>
          ${sourceNote("各題依特殊教育學校簡章的資格、安置與報到規定整理。", officialSources.taoyuanSpecialGuide)}
        `
      }
    }
  }
};

function cityGuide(config) {
  const source = config.sources[config.type];
  const typeTitle = config.typeTitle;
  const schoolTitle = config.type === "highSchool"
    ? "可選學校、校科與名額"
    : "可選學校與安置名額";
  const qualification = config.type === "highSchool"
    ? "持有鑑輔會核發、不含智能障礙類的鑑定證明，並符合國中畢業或同等學力、通報等規定。"
    : config.type === "service"
      ? "持有智能障礙或其他障礙伴隨智能障礙的鑑定證明，並符合年齡、學歷與通報等規定。"
      : "依簡章所列的障礙類別、程度、學歷與通報條件申請；特殊教育學校通常以較高支持需求學生為優先。";
  const process = config.type === "service"
    ? "本類通常包含能力評估與後續安置作業，請以承辦學校通知的評估與分發安排為準。"
    : "由鑑輔會工作小組依志願、學生資料與學校資源進行適性安置；必要時可能安排晤談。";
  return {
    title: `${config.city}${typeTitle}適性輔導安置`,
    shortTitle: `${config.city}${typeTitle}`,
    topics: {
      eligibility: {
        label: "申請資格",
        title: "先確認是否適用這一類",
        body: `
          <p class="detail-lead">${qualification}</p>
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">共同條件</span><h4>學歷與報名身分</h4><p>應屆國中畢業生可由原國中協助報名；非應屆者須符合簡章的學歷、年齡及未曾完成適性安置等規定。</p></article>
            <article class="info-card"><span class="tag">鑑定與通報</span><h4>以正式簡章為準</h4><p>請先確認鑑輔會鑑定證明的類別與適用教育階段，並由原國中協助核對通報資料。</p></article>
            <article class="info-card"><span class="tag">報名方式</span><h4>由國中協助辦理</h4><p>由原就讀國中完成網路報名與資料送件；跨區或非應屆情形，應先依簡章向原國中確認。</p></article>
            <article class="info-card"><span class="tag">只能選一類</span><h4>不可重複報名</h4><p>本市三類安置簡章只能擇一報名，也不得重複參加其他縣市或國教署辦理的適性安置。</p></article>
          </div>
          ${sourceNote("依 115 學年度官方簡章的報名資格與安置規定整理。", source)}
        `
      },
      timeline: {
        label: "重要時程",
        title: "重要時程",
        body: `
          <div class="timeline">
            ${config.timeline.map((item) => `<article class="timeline-item"><time>${item.date.map((date) => `<span class="timeline-date">${date}</span>`).join("")}</time><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join("")}
          </div>
          ${sourceNote("依 115 學年度官方簡章的重要日程表整理；校內收件與個別通知時間仍以原國中、承辦學校通知為準。", source)}
        `
      },
      schools: {
        label: "學校與名額",
        title: schoolTitle,
        body: `
          <p class="detail-lead">${config.schoolLead}</p>
          ${citySchoolFinderTemplate(config.cityKey, config.type)}
          <div class="detail-grid two">
            <article class="info-card"><span class="tag">安置不是保證錄取</span><h4>名額與結果不同</h4><p>公開名額是認識選項的起點，實際安置仍由工作小組依簡章規定、志願及學生資料綜合研判。</p></article>
            <article class="info-card"><span class="tag">填志願前</span><h4>先看通勤與支持需求</h4><p>建議與國中老師一起確認交通、課程與支持服務，並逐項核對當年度官方公告。</p></article>
          </div>
          ${sourceNote("學校、校科與名額依官方簡章及開缺資料整理。", source, "115 學年度官方資料")}
        `
      },
      faq: {
        label: "簡章重點問答",
        title: "簡章重點問答",
        body: `
          <div class="faq-list">
            <details><summary>三種類型可以同時報名嗎？</summary><p>不可以。高級中等學校、集中式特教班及特殊教育學校三類簡章只能擇一報名；也不得重複參加其他縣市或國教署的適性安置。</p>${faqBasis("115 學年度正式簡章的安置作業規定", source)}</details>
            <details><summary>需要由誰幫忙報名？</summary><p>原則上由原就讀國中完成網路報名與資料送件。跨區或非應屆生的程序與文件，請先請原國中依簡章協助核對。</p>${faqBasis("115 學年度正式簡章的報名方式", source)}</details>
            <details><summary>安置後還可以選其他入學管道嗎？</summary><p>可依簡章規定參加其他入學管道；若重複錄取，最後只能擇一完成報到。完成報到後欲放棄，須依期限及程序辦理。</p>${faqBasis("115 學年度正式簡章的報到與放棄規定", source)}</details>
            <details><summary>錯過第一輪，還有機會嗎？</summary><p>正式安置後若有餘額，符合資格者可留意官方公告的餘額安置作業與期限。</p>${faqBasis("115 學年度正式簡章的餘額安置規定", source)}</details>
          </div>
          ${sourceNote("答案依 115 學年度正式簡章整理。", source)}
        `
      }
    }
  };
}

const taichungTimeline = [
  { date: ["2026/1/2", "2026/1/16"], title: "志願試探與模擬選填", text: "由國中端依公告期程協助辦理。" },
  { date: ["2026/1/19", "2026/2/26"], title: "網路報名", text: "學生向原就讀國中報名，由國中完成作業。" },
  { date: ["2026/3/2", "2026/3/3"], title: "報名資料送件審查", text: "國中依排定時間送件。" },
  { date: ["2026/5/29"], title: "公告安置結果", text: "安置結果及通知單依官方公告辦理。" },
  { date: ["2026/7/9", "中午 12:00 前"], title: "完成報到", text: "依安置學校規定時間完成報到。" },
  { date: ["2026/7/31"], title: "公告餘額安置結果", text: "後續餘額安置依官方公告辦理。" }
];

const kaohsiungTimeline = [
  { date: ["2026/2/23", "2026/3/3"], title: "國中網路報名", text: "學生向原就讀國中辦理，由國中完成網路報名。" },
  { date: ["2026/4/11"], title: "能力評估", text: "集中式特教班適用，地點與細節依通知單。" },
  { date: ["2026/6/1"], title: "公告安置結果", text: "結果公告於高雄市身心障礙學生適性輔導安置網站。" },
  { date: ["2026/6/15 前"], title: "特教學校完成報到", text: "特殊教育學校依各校所訂時間辦理。" },
  { date: ["2026/7/8", "2026/7/9 中午 12:00 前"], title: "普通班與實用技能學程報到", text: "依安置學校所訂時間辦理。" },
  { date: ["2026/7/31"], title: "公告餘額安置結果", text: "後續餘額安置依官方公告辦理。" }
];

const tainanTimeline = [
  { date: ["2026/1/2", "2026/1/16"], title: "志願試探與模擬選填", text: "由原國中依國教署系統與公告期程協助辦理。" },
  { date: ["2026/2/23", "2026/3/3"], title: "網路報名", text: "學生向原就讀國中報名，由國中完成網路報名。" },
  { date: ["2026/3/4", "2026/3/9"], title: "資料審查與補件", text: "臺南區依公告安排收件、審查與補件。" },
  { date: ["2026/4/11"], title: "能力評估", text: "僅集中式特教班適用，地點為國立臺南特殊教育學校。" },
  { date: ["2026/6/1"], title: "公告安置結果", text: "結果依國教署適性輔導安置查詢網站公告。" },
  { date: ["2026/6/10", "2026/6/15"], title: "特教學校、集中式特教班報到", text: "依錄取學校規定完成報到。" },
  { date: ["2026/7/8", "2026/7/9 中午 12:00 前"], title: "高級中等學校報到", text: "依錄取學校規定時間完成報到。" },
  { date: ["2026/7/31"], title: "公告餘額安置結果", text: "餘額安置後續報到期限依官方公告辦理。" }
];

guides["taichung-high-school"] = cityGuide({ city: "臺中市", cityKey: "taichung", type: "highSchool", typeTitle: "高級中等學校", sources: { highSchool: officialSources.taichungHighSchool }, timeline: taichungTimeline, schoolLead: "115 學年度官方開缺資料共有 224 筆校科資料與 938 個名額，包含特殊教育學校的視覺、聽覺障礙類選項。可直接搜尋與篩選。" });
guides["taichung-service"] = cityGuide({ city: "臺中市", cityKey: "taichung", type: "service", typeTitle: "集中式特教班", sources: { service: officialSources.taichungService }, timeline: taichungTimeline, schoolLead: "115 學年度共有 8 所開缺學校、185 個安置名額；集中式特教班依能力評估結果，採現場依序唱名分發。" });
guides["taichung-special-school"] = cityGuide({ city: "臺中市", cityKey: "taichung", type: "specialSchool", typeTitle: "特殊教育學校", sources: { specialSchool: officialSources.taichungSpecialSchool }, timeline: taichungTimeline, schoolLead: "115 學年度特教學校資料包含視覺、聽覺與智能障礙類選項。智能障礙類以安置至學校為主，後續由安置學校完成分科。" });
guides["kaohsiung-high-school"] = cityGuide({ city: "高雄市", cityKey: "kaohsiung", type: "highSchool", typeTitle: "普通班、實用技能學程", sources: { highSchool: officialSources.kaohsiungHighSchoolSeats }, timeline: kaohsiungTimeline, schoolLead: "115 學年度官方名額表共有 195 筆校科資料、52 所學校與 882 個安置名額，包含普通班與實用技能學程。可直接依行政區、學校類型或群別篩選。" });
guides["kaohsiung-service"] = cityGuide({ city: "高雄市", cityKey: "kaohsiung", type: "service", typeTitle: "集中式特教班", sources: { service: officialSources.kaohsiungService }, timeline: kaohsiungTimeline, schoolLead: "115 學年度共有 9 所開缺學校、10 筆校科資料、140 個安置名額；未參加能力評估者不予安置。" });
guides["kaohsiung-special-school"] = cityGuide({ city: "高雄市", cityKey: "kaohsiung", type: "specialSchool", typeTitle: "特殊教育學校", sources: { specialSchool: officialSources.kaohsiungSpecialSchool }, timeline: kaohsiungTimeline, schoolLead: "115 學年度共有 4 所特殊教育學校、9 筆校科資料、129 個安置名額。部分學校入學後再依學生需求協助選擇科別。" });
guides["tainan-high-school"] = cityGuide({ city: "臺南區", cityKey: "tainan", type: "highSchool", typeTitle: "高級中等學校", sources: { highSchool: officialSources.tainanGuide }, timeline: tainanTimeline, schoolLead: "臺南市參與國教署聯合安置的臺南區作業。115 學年度官方開缺資料有 171 筆校科資料、46 所學校與 586 個名額，包含高級中等學校及實用技能學程，可直接搜尋與篩選。" });
guides["tainan-service"] = cityGuide({ city: "臺南區", cityKey: "tainan", type: "service", typeTitle: "集中式特教班", sources: { service: officialSources.tainanGuide }, timeline: tainanTimeline, schoolLead: "115 學年度共有 6 所開缺學校、6 筆校科資料與 98 個安置名額。學生須參加能力評估，再依作業安排安置。" });
guides["tainan-special-school"] = cityGuide({ city: "臺南區", cityKey: "tainan", type: "specialSchool", typeTitle: "國立特殊教育學校", sources: { specialSchool: officialSources.tainanGuide }, timeline: tainanTimeline, schoolLead: "115 學年度臺南區共有 2 所國立特殊教育學校、3 筆校科資料與 72 個安置名額。可依障礙類別、支持需求與簡章資格確認適用性。" });

const guide = guides[document.body.dataset.guide];
const detail = document.querySelector("#guideDetail");

function setGuideView(viewName) {
  document.querySelectorAll("[data-guide-view]").forEach((view) => {
    view.hidden = view.dataset.guideView !== viewName;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderGuideRoute() {
  const route = location.hash.slice(1);
  const topic = guide?.topics[route];

  if (!topic) {
    setGuideView("home");
    document.title = guide?.title || "菜菜老師｜特教資訊整理";
    return;
  }

  detail.innerHTML = `
    <div class="detail-header"><h2 id="guideDetailTitle" tabindex="-1">${topic.title}</h2></div>
    <div class="detail-body">${topic.body}</div>
    <div class="detail-footer-actions"><a class="button primary" href="#home">回到四個主題</a></div>
  `;
  bindSchoolFinder();
  document.querySelector("#guideNavLabel").textContent = topic.label;
  setGuideView("info");
  document.title = `${topic.label}｜${guide.shortTitle}`;
  document.querySelector("#guideDetailTitle").focus({ preventScroll: true });
}

document.querySelectorAll(".city-switcher-select").forEach((select) => {
  select.addEventListener("change", () => {
    location.href = select.value;
  });
});

renderGuideRoute();
window.addEventListener("hashchange", renderGuideRoute);
