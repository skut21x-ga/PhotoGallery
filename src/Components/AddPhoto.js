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
