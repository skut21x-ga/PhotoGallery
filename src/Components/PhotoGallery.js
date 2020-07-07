import React, { Component } from "react";
import Photo from "./Photo";

class PhotoGallery extends Component {
  render() {
    return (
      <div className="photo-gallery">
        {this.props.posts.map((post, index) => (
          <Photo post={post} key={index} />
        ))}
      </div>
    );
  }
}
export default PhotoGallery;
