import React, { Component } from "react";
import { SetVideos } from "../redux/actions";
import { connect } from "react-redux";
class TableListItem extends Component {
  handleClick = () => {
    let videos = [...this.props.category.videos];
    let x = Math.floor(Math.random() * videos.length);
    let video1 = videos[x];
    videos.splice(x, 1);

    x = Math.floor(Math.random() * videos.length);
    let video2 = videos[x];
    this.props.set(video1, video2, this.props.category.videos);
    this.props.nav();
  };
  render() {
    return (
      <div
        onClick={() => this.handleClick()}
        class="ItemHover"
        style={{
          width: "150PX",
          border: "3px solid darkred",
          marginLeft: "30px",
          marginTop: "20px",
          marginRight: "30px"
        }}
      >
        <img
          src={this.props.category.image}
          class="card-img-top"
          alt="..."
          style={{
            borderRadius: "50px",
            marginTop: "10px",
            marginBottom: "5px"
          }}
        />
        <div class="card-body " style={{ borderTop: "1px solid darkred" }}>
          <p class="card-text">{this.props.category.name}</p>
        </div>
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
    set: (video1, video2, videos) => dispatch(SetVideos(video1, video2, videos))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableListItem);
