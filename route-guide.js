const officialSources = {
  taipeiService:
    "https://www.doe.gov.taipei/News_Content.aspx?n=FD0F0E4B643626CB&s=D3441D597AE8F8EF&sms=78D644F2755ACCAA",
  newTaipeiGuide: "https://sec.ntpc.edu.tw/p/405-1004-12330%2Cc969.php",
  newTaipeiPlacement: "https://seapc.ntpc.edu.tw/",
  newTaipeiServiceSeats: "https://sec.ntpc.edu.tw/p/406-1004-12671%2Cr43.php"
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
          ${sourceNote("依簡章重要時程表整理；個別通知時間仍以學校文件為準。", officialSources.taipeiService)}
        `
      },
      schools: {
        label: "學校與科別",
        title: "9 所學校，分成兩種安置方式",
        body: `
          <p class="detail-lead">簡章列出 7 所高級中等學校及 2 所特殊教育學校。高級中等學校須參加能力評估；特殊教育學校依學區安置，入學後再評估分科。</p>
          <div class="school-list-columns">
            <section><h3>高級中等學校服務群科</h3><ul><li>士林高商｜門市服務科</li><li>大安高工｜餐飲服務科</li><li>木柵高工｜餐飲服務科</li><li>內湖高工｜門市服務科</li><li>松山工農｜餐飲服務科</li><li>松山家商｜餐飲服務科</li><li>南港高工｜門市服務科</li></ul><p>共 7 班，每班安置名額以 8 至 15 名為原則，由鑑輔小組依當年度評估情形決定。</p></section>
            <section><h3>特殊教育學校服務群科</h3><ul><li>文山特殊教育學校｜餐飲服務科、居家生活服務科</li><li>臺北特殊教育學校｜餐飲服務科、居家生活服務科</li></ul><p>共 11 班，每班以 12 人為原則；臺北市學生依學區安置，新北市學生以就近安置為原則。</p></section>
          </div>
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
        title: "學校與名額要看年度開缺公告",
        body: `
          <p class="detail-lead">一般類科的校科與名額會另外公告。查詢時請先確認檔名與頁面都標示「一般類科」，不要誤用服務群科名額。</p>
          <div class="detail-grid two">
            <article class="info-card source-card"><span class="tag">官方公告</span><h4>新北特殊教育資訊網</h4><p>查看簡章、開缺名額、安置結果與最新修正。</p><a href="${officialSources.newTaipeiGuide}" target="_blank" rel="noreferrer">開啟官方簡章頁</a></article>
            <article class="info-card source-card"><span class="tag">作業系統</span><h4>適性輔導安置網</h4><p>報名、志願選填與結果查詢的官方系統。</p><a href="${officialSources.newTaipeiPlacement}" target="_blank" rel="noreferrer">前往官方系統</a></article>
          </div>
          <p class="note-box">名額是年度資料，可能在作業期間修正；家長最後仍應以國中承辦教師下載的當次官方檔案為準。</p>
          ${sourceNote("校科與名額以新北市年度公告及系統資料為準。", officialSources.newTaipeiGuide, "新北市官方簡章頁")}
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
          <div class="school-name-grid"><span>三重商工</span><span>石碇高中</span><span>光復高中</span><span>泰山高中</span><span>淡水商工</span><span>新北特殊教育學校</span><span>新北高工</span><span>瑞芳高工</span><span>鶯歌工商</span><span>安康高中</span><span>清水高中</span><span>樹林高中</span></div>
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
  }
};

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
