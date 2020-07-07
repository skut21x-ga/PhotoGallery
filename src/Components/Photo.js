import React, { Component } from "react";

class Photo extends Component {
  render() {
    const post = this.props.post;
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
          <button className="remove-button">Remove Photo</button>
        </div>
      </figure>
    );
  }
}

export default Photo;
