import '../assets/css/app0806-1.css';

const App = () => {
  // 資料抽離
  const photos = {
    photo1: {
      imgUrl:
        'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
      title: 'Cozy Forest Cabin',
      desc: 'Enjoy peace and tranquility surrounded by nature.',
      btnName: 'Book Now',
      btnUrl: '#'
    },
    photo2: {
      imgUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
      title: 'Urban Life',
      desc: 'Explore the vibrant energy and rhythm of city life.',
      btnName: 'Explore',
      btnUrl: '#'
    },
    photo3: {
      imgUrl: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
      title: 'Tech Workspace',
      desc: 'Modern tools and workspace ideas to boost productivity.',
      btnName: 'Learn More',
      btnUrl: '#'
    }
  };

  return (
    <div className="container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {Object.values(photos).map((item, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={item.imgUrl} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <a href={item.btnUrl} className="btn">
              {item.btnName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
