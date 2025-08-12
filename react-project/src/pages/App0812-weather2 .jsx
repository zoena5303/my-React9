import { useEffect } from 'react';
import '../css/app0811.css'
import { BsFillUmbrellaFill } from "react-icons/bs";
import axios from "axios";

const App = () => {
  // useEffect(() =>渲染後，只呼叫一次json
  useEffect(() => {
    // 非同步取資料
    (async () => {
      // 取得public中的json檔
      // const data = await axios.get('./json/F-C0032-001.json');
      // 檢查是否連上json
      // console.log(data.data.cwaopendata.dataset);

      // 取得src中的json檔案
      const data = await axios.get('./src/json/F-C0032-001.json');
      // 檢查是否連上json
      console.log(data.data.cwaopendata.dataset);
    })();
  }, []);


  return (
    <>
      {/* 36小時天氣預報的版型 */}
      {/* 主要欄位
            locationName(地點)、startTime(起始時間)、endTime(結束時間) */}
      {/* 台北市
        11日    上午6:00~下午6:00晴午後短暫雷陣雨 雨傘 80%
        11日    下午6:00~上午6:00多雲短暫陣雨 雨傘 40%
        12日    上午6:00~下午6:00多雲午後短暫雷陣雨 雨傘 40% */}
      <h2>36小時天氣預報</h2>

      <div className="cards">
        {/* 取得縣市陣列跑迴圈 */}
        <div className="card">
          {/* 卡片標題 */}
          <div className="card-hrader">
            台北市
          </div>
          {/* 卡片內容 */}
          <div className="card-body">
            {/* 取得陣列資料後跑迴圈 */}
            <div className="item">
              {/* 日期 */}
              <div className="date">
                {  /*11日*/}
                {/*日期*/}
              </div>
              {/* 時間 */}
              <div className="time">
                上午6:00<br />
                ~<br />
                下午6:00<br />
              </div>
              {/* 天氣圖 */}
              <div className="weatherPic">
                {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
              </div>
              {/* 天氣名稱 */}
              <div className="weatherName">
                晴午後短暫雷陣雨
              </div>
              {/* 降雨率PoP */}
              <div className='pop'>
                {/* icon */}
                <BsFillUmbrellaFill />80%
              </div>
            </div>
          </div>
        </div>



      </div>






    </>
  )
}

export default App

  <>
  {/* 36小時天氣預報的版型 */ }
{/* 主要欄位
            locationName(地點)、startTime(起始時間)、endTime(結束時間) */}
{/* 台北市
        11日    上午6:00~下午6:00晴午後短暫雷陣雨 雨傘 80%
        11日    下午6:00~上午6:00多雲短暫陣雨 雨傘 40%
        12日    上午6:00~下午6:00多雲午後短暫雷陣雨 雨傘 40% */}
            <h2>36小時天氣預報</h2>
 <div className="cards">
                {
                    citys.map((city) => {
                        return (
                            <div key={city.locationName}>
                                {/* 取得縣市陣列跑迴圈 */}
                                <div className="cards">
                                    {/* 取得縣市陣列跑迴圈 */}
                                    <div className="card">
                                        {/* 卡片標題 */}
                                        <div className="card-hrader">
                                            台北市
                                        </div>
                                        {/* 卡片內容 */}
                                        <div className="card-body">
                                            {/* 取得陣列資料後跑迴圈 */}
                                            <div className="item">
                                                {/* 日期 */}
                                                <div className="date">
                                                    11日
                                                </div>
                                                {/* 時間 */}
                                                <div className="time">
                                                    上午6:00<br />
                                                    ~<br />
                                                    下午6:00<br />
                                                </div>
                                                {/* 天氣圖 */}
                                                <div className="weatherPic">
                                                    {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                                    <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                                                </div>
                                                {/* 天氣名稱 */}
                                                <div className="weatherName">
                                                    晴午後短暫雷陣雨
                                                </div>
                                                {/* 降雨率PoP */}
                                                <div className='pop'>
                                                    {/* icon */}
                                                    <BsFillUmbrellaFill />80%
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        )
                    })
                }
</>
