import { useEffect, useState } from 'react';
import '../css/app0811.css';
import { BsFillUmbrellaFill } from "react-icons/bs";
import axios from "axios";

// ---- 小工具：把天氣文字映射到圖檔路徑（放在 public/weatherIcon 底下）----
const getIconSrc = (wxText) => {
  if (!wxText) return './weatherIcon/多雲.svg';
  // 你的圖檔如果是「完全對應文字」就用這行：
  // return `./weatherIcon/${wxText}.svg`;

  // 若檔名不是一模一樣，做一些關鍵字對應（可自行擴充）
  const map = [
    { k: '雷', f: '晴午後短暫雷陣雨' },
    { k: '陣雨', f: '多雲短暫陣雨' },
    { k: '雨', f: '小雨' },
    { k: '晴', f: '晴' },
    { k: '雲', f: '多雲' },
  ];
  const hit = map.find(m => wxText.includes(m.k));
  return `./weatherIcon/${hit ? hit.f : '多雲'}.svg`;
};

// ---- 單一時間區塊 ----
const PeriodItem = ({ dateStr, startStr, endStr, wx, pop }) => {
  return (
    <div className="item">
      {/* 日期 */}
      <div className="date">{dateStr}</div>

      {/* 時間 */}
      <div className="time">
        {startStr}<br />~<br />{endStr}
      </div>

      {/* 天氣圖 */}
      <div className="weatherPic">
        <img src={getIconSrc(wx)} alt={wx} />
      </div>

      {/* 天氣名稱 */}
      <div className="weatherName">{wx}</div>

      {/* 降雨率 */}
      <div className="pop">
        <BsFillUmbrellaFill /> {pop ?? '--'}%
      </div>
    </div>
  );
};

// ---- 卡片元件（縣市一張）----
const WeatherCard = ({ locationName, periods = [] }) => {
  return (
    <div className="card">
      {/* 卡片標題 */}
      <div className="card-header">{locationName}</div>

      {/* 卡片內容 */}
      <div className="card-body">
        {periods.slice(0, 3).map((p, i) => (
          <PeriodItem
            key={i}
            dateStr={p.dateStr}
            startStr={p.startStr}
            endStr={p.endStr}
            wx={p.wx}
            pop={p.pop}
          />
        ))}
      </div>
    </div>
  );
};

// ---- 解析 CWA F-C0032-001 結構成我們需要的資料 ----
const parseCWA = (raw) => {
  // 典型結構：data.cwaopendata.dataset.location[*].weatherElement (Wx/PoP/MaxT/MinT/CI)
  const locations = raw?.cwaopendata?.dataset?.location ?? [];

  return locations.map((loc) => {
    const name = loc.locationName;
    // 取出 Wx、PoP
    const Wx = loc.weatherElement?.find(el => el.elementName === 'Wx');
    const PoP = loc.weatherElement?.find(el => el.elementName === 'PoP');

    // 三個時段
    const periods = (Wx?.time ?? []).slice(0, 3).map((t, idx) => {
      const start = t.startTime ? new Date(t.startTime) : null;
      const end = t.endTime ? new Date(t.endTime) : null;

      // 顯示格式（你也可以用 dayjs 調得更漂亮）
      const dateStr = start ? `${start.getDate()}日` : '--';
      const hhmm = (d) =>
        d ? `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}` : '--';
      const startStr = start ? (start.getHours() < 12 ? `上午 ${hhmm(start)}` : `下午 ${hhmm(start)}`) : '--';
      const endStr = end ? (end.getHours() < 12 ? `上午 ${hhmm(end)}` : `下午 ${hhmm(end)}`) : '--';

      const wx = t.parameter?.parameterName ?? ''; // 天氣現象文字
      const pop = PoP?.time?.[idx]?.parameter?.parameterName ?? null; // 降雨率同 index 對齊

      return { dateStr, startStr, endStr, wx, pop };
    });

    return { locationName: name, periods };
  });
};

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // ✅ 建議把 JSON 放在 public/json 底下，路徑如下
        const res = await axios.get('/json/F-C0032-001.json');

        // 如果你目前是放 src/json，就改成：
        // const res = await axios.get('./src/json/F-C0032-001.json');

        const parsed = parseCWA(res.data);
        setCards(parsed);

        // 開發時可看一下結果
        // console.log(parsed);
      } catch (err) {
        console.error('讀取天氣 JSON 失敗：', err);

        // ⛑️ 退而求其次：給一份範例（至少頁面不會空白）
        setCards([
          {
            locationName: '台北市',
            periods: [
              { dateStr: '11日', startStr: '上午 06:00', endStr: '下午 06:00', wx: '晴午後短暫雷陣雨', pop: 80 },
              { dateStr: '11日', startStr: '下午 06:00', endStr: '上午 06:00', wx: '多雲短暫陣雨', pop: 40 },
              { dateStr: '12日', startStr: '上午 06:00', endStr: '下午 06:00', wx: '多雲午後短暫雷陣雨', pop: 40 },
            ],
          },
        ]);
      }
    })();
  }, []);

  return (
    <>
      {/* 36小時天氣預報的版型
          主要欄位：locationName(地點)、startTime(起始時間)、endTime(結束時間) */}
      <h2>36小時天氣預報</h2>

      {/* 外層容器：多張卡片 */}
      <div className="cards">
        {cards.map((c, i) => (
          <WeatherCard key={i} locationName={c.locationName} periods={c.periods} />
        ))}
      </div>
    </>
  );
};

export default App;
