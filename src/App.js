import React from "react";
import PhotoGallery from "./PhotoGallery";
import "./App.css";

function App() {
  const photos = [
    { id: 1, url: "/images/dog1.jpg", title: "Julie's Rabbit Ears" },
    { id: 2, url: "/images/dog2.jpg", title: "The Innocent Look" },
    { id: 3, url: "/images/dog3.jpg", title: "Big Eyed Buggy" },
    { id: 4, url: "/images/dog4.jpg", title: "The Saint Doggo" },
    { id: 5, url: "/images/dog3.jpg", title: "Big Eyed Buggy" },
    { id: 6, url: "/images/dog2.jpg", title: "The Innocent Look" },
    { id: 7, url: "/images/dog4.jpg", title: "The Saint Doggo" },
    { id: 8, url: "/images/dog1.jpg", title: "Julie's Rabbit Ears" },
  ];

  return (
    <div className="App">
      <h1>🐶 Dog Photo Gallery</h1>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <p><b>{index + 1}. {photo.title}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



