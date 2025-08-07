/* import React from 'react' */
import '../css/app0806-1.css'

const App = () => {
  // 資料抽離
  const photos = {
    photo1: {
      imgURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '奔跑的狗狗',
      desc: "狗狗在草地上快樂奔跑，畫面生動可愛！",
      btnName: '看大圖',
      btnURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688'
    },
    photo2: {
      imgURL: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '笑笑的阿金',
      desc: '開心的黃金獵犬坐在草地上，笑容超療癒！',
      btnName: '前往連結',
      btnURL: '#'
    },
    photo3: {
      imgURL: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '咬花花的狗狗',
      desc: '狗狗叼著花，表情無辜，畫面超萌！',
      btnName: '看更多',
      btnURL: '#'
    }
  }

  return (
    <>
      <div className="container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {Object.values(photos).map((item, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <img src={item.imgURL} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <a href={item.btnURL} className="btn btn-primary">{item.btnName}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
