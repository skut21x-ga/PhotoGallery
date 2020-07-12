import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("New Photo Submitted from:");
    const imageURL = event.target.elements.URL.value;
    const description = event.target.elements.Caption.value;
    const post = {
      id: 0,
      description: description,
      imageLink: imageURL,
    };
    if (!description) {
      console.log("WHAT!");
    }
    if (description && imageURL) {
      this.props.onAddPhoto(post);
    }
  }

  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <div className="add-form">
          <form onSubmit={this.handleSubmit}>
            <input name="URL" type="text" placeholder="Photo URL" />
            <input
              name="Caption"
              type="text"
              placeholder="Caption/Description"
            />
            <button> Post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
