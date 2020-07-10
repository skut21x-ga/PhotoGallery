import React, { Component } from "react";

class AddPhoto extends Component {
  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <div className="add-form">
          <form>
            <input type="text" placeholder="Photo URL" />
            <input type="text" placeholder="Caption/Description" />
            <button> post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
