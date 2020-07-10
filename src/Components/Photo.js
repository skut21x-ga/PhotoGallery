import React from "react";
// import PropTypes from "prop-types";

function Photo(props) {
  // Photo.propTypes = {
  //   posts: PropTypes.object.isRequired,
  //   onRemovePhoto: PropTypes.func.isRequired,
  // };

  const post = props.post;
  return (
    <figure className="figure">
      <div className="photo-container">
        <img
          className="photo"
          src={post.imageLink}
          alt={post.description}
        ></img>
      </div>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="remove-button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.onRemovePhoto(post);
          }}
        >
          Remove Photo
        </button>
      </div>
    </figure>
  );
}

export default Photo;
