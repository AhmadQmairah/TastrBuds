import React, { Component } from "react";
import { connect } from "react-redux";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => this.props.history.replace("/Taste")}
        >
          Taste
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => this.props.history.replace("/make")}
        >
          Make
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.rootAuth });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
