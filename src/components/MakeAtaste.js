import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authorization } from "../redux/actions";
import { SetVideos, AddVideo } from "../redux/actions";
//Implement errors n shit

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

class RegistationForm extends Component {
  state = {
    url: "",
    name: "",
    category: -1
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.add(this.state.name, this.state.url, this.state.category);
  };
  render() {
    return (
      <div class="form-style-5">
        <form onSubmit={e => this.submitHandler(e)}>
          <legend>
            <span class="number">1</span> Add Taste
          </legend>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            name="url"
            placeholder="Link"
            onChange={e => this.setState({ url: e.target.value })}
          />
          <label for="job">Category:</label>
          <select
            id="job"
            name="test"
            onChange={e =>
              this.setState({ category: parseInt(e.target.value) })
            }
          >
            <optgroup label="Categories">
              <option value="3">Comedy</option>
              <option value="5">Music</option>
              <option value="7">Nature</option>
              <option value="6">Science</option>
              <option value="4">Horror </option>
              <option value="2">Dog</option>
              <option value="1">Cat </option>
            </optgroup>
          </select>

          <input type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorization: (userData, type, history) =>
      dispatch(authorization(userData, type, history)),

    add: (name, url, category) => dispatch(AddVideo(name, url, category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistationForm);
