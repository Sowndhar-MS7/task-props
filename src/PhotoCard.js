import React from "react";

function PhotoCard({ url, title }) {
  return (
    <div className="photo-card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default PhotoCard;
