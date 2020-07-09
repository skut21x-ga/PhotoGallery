import React from "react";
import Photo from "./Photo";

function PhotoGallery(props) {
  return (
    <div className="photo-gallery">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

export default PhotoGallery;
