import '../assets/css/app0806-2css';

import Card from '../components/Card'
import '../css/app0806-1.css'

const App = () => {
  // 資料抽離
  const photos = {
    photo1: {
      imgURL: 'https://images.unsplash.com/photo-1600180758890-6f3bdb868c89',
      title: '狗狗',
      desc: '可愛狗狗在玩耍',
      btnName: '圖片來源',
      btnURL: 'https://images.unsplash.com/photo-1600180758890-6f3bdb868c89',
    },
    photo2: {
      imgURL: 'https://images.unsplash.com/photo-1605522512541-9736747bc70d',
      title: '建築物',
      desc: '現代建築設計欣賞',
      btnName: '圖片來源',
      btnURL: 'https://images.unsplash.com/photo-1605522512541-9736747bc70d',
    },
    photo3: {
      imgURL: 'https://images.unsplash.com/photo-1531327430560-66c29c7f302d',
      title: '咖啡店',
      desc: '溫馨咖啡角落',
      btnName: '圖片來源',
      btnURL: 'https://images.unsplash.com/photo-1531327430560-66c29c7f302d',
    }
  }
}
return (
  <>
    <div className="container">
      <Card
        imgURL={photos.photo1.imgURL}
        title={photos.photo1.title}
        desc={photos.photo1.desc}
        btnName={photos.photo1.btnName}
        btnURL={photos.photo1.btnURL}
      ></Card>

      <Card
        imgURL={photos.photo2.imgURL}
        title={photos.photo2.title}
        desc={photos.photo2.desc}
        btnName={photos.photo2.btnName}
        btnURL={photos.photo2.btnURL}
      ></Card>

      <Card
        imgURL={photos.photo3.imgURL}
        title={photos.photo3.title}
        desc={photos.photo3.desc}
        btnName={photos.photo3.btnName}
        btnURL={photos.photo3.btnURL}
      ></Card>
    </div>
  </>
)




export default App;
