import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoGallery(props) {
  return (
    <div className="photo-gallery">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

PhotoGallery.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoGallery;
