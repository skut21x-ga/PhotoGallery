import React from "react";
import Photo from "./photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoGallery(props) {
  return (
    <div>
      <Link className="add-icon" to="/AddPhoto" />

      <div className="photo-gallery">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              post={post}
              key={index}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

PhotoGallery.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoGallery;
