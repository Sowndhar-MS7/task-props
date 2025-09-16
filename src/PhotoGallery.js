import React from "react";
import PhotoCard from "./PhotoCard";

function PhotoGallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} url={photo.url} title={photo.title} />
      ))}
    </div>
  );
}

export default PhotoGallery;
