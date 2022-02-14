import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  if (title.length > 25) {
    title = title.slice(0, 25);
  }

  return (
    <div className="card animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
