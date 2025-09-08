import React, { useEffect, useState } from "react";

const App0908b = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY")
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Unsplash 照片展示</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description || "Unsplash photo"}
              style={{ width: "100%", display: "block" }}
            />
            <p style={{ margin: "10px 0", fontSize: "14px", color: "#555" }}>
              {photo.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App0908b;
