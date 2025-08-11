// src/pages/App0811-weather.jsx

// src/pages/App0811-weather.jsx
import '../css/App0811-weather.css';;

export default function App() {
  const weatherData = [
    {
      date: '11日',
      time: '上午6:00 ~ 下午6:00',
      icon: '🌤',
      desc: '晴午後短暫雷陣雨',
      rain: '80%'
    },
    {
      date: '11日',
      time: '下午6:00 ~ 上午6:00',
      icon: '🌧',
      desc: '多雲短暫陣雨',
      rain: '40%'
    },
    {
      date: '12日',
      time: '上午6:00 ~ 下午6:00',
      icon: '🌦',
      desc: '多雲午後短暫雷陣雨',
      rain: '40%'
    }
  ];

  return (
    <div className="weather-container">
      <h2 className="city">臺北市</h2>
      <div className="cards">
        {weatherData.map((item, index) => (
          <div className="card" key={index}>
            <div className="date">{item.date}</div>
            <div className="time">{item.time}</div>
            <div className="icon">{item.icon}</div>
            <div className="desc">{item.desc}</div>
            <div className="rain">☔ {item.rain}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
