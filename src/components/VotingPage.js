import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./TableListItem";
import { vote } from "../redux/actions";
import { SetVideos, AddVideo } from "../redux/actions";

export class TasteList extends Component {
  state = {
    voted: false
  };

  handleClick = () => {
    console.log("oh", this.props.category);
    let videos = [...this.props.category.videos];
    let x = Math.floor(Math.random() * videos.length);
    let video1 = videos[x];
    videos.splice(x, 1);

    x = Math.floor(Math.random() * videos.length);
    let video2 = videos[x];
    this.props.set(video1, video2, this.props.category.videos);
    this.setState({ voted: false });
  };
  render() {
    if (!this.props.video1 || !this.props.video2) return <></>;
    else console.log("hello", this.props.video1.owner.username);
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm mt-5">
              <iframe
                width="420"
                height="345"
                src={this.props.video1.youtube_url}
              ></iframe>
              {this.state.voted == false ? (
                <button
                  type="button"
                  class="m-5 btn btn-warning"
                  onClick={() => {
                    this.props.vote(this.props.video1.id);
                    this.setState({ voted: true });
                  }}
                >
                  Vote
                </button>
              ) : (
                <>
                  <h2>votes: {this.props.video1.votes}</h2>
                  <button
                    onClick={() => {
                      this.props.history.replace(
                        `/profile/${this.props.video1.owner.id}`
                      );
                    }}
                  >
                    <h3>Owner: {this.props.video1.owner.username}</h3>
                  </button>
                </>
              )}
            </div>
            <div class="col-sm  mt-5">
              <iframe
                width="420"
                height="345"
                src={this.props.video2.youtube_url}
              ></iframe>
              {this.state.voted == false ? (
                <button
                  type="button"
                  class="m-5 btn btn-warning"
                  onClick={() => {
                    this.props.vote(this.props.video2.id);
                    this.setState({ voted: true });
                  }}
                >
                  Vote
                </button>
              ) : (
                <>
                  <h2>votes: {this.props.video2.votes}</h2>
                  <button
                    onClick={() => {
                      this.props.history.replace(
                        `/profile/${this.props.video2.owner.id}`
                      );
                    }}
                  >
                    <h3>Owner: {this.props.video2.owner.username}</h3>
                  </button>
                </>
              )}
            </div>
          </div>
          {this.state.voted ? (
            <>
              <button onClick={() => this.handleClick()}>Play Again</button>
              <button
                onClick={() => {
                  this.props.history.replace("/taste");
                }}
              >
                Change Category
              </button>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  video1: state.categories.video1,
  video2: state.categories.video2,
  category: state.categories
});

const mapDispatchToProps = dispatch => {
  return {
    vote: id => dispatch(vote(id)),
    set: (video1, video2, videos) => dispatch(SetVideos(video1, video2, videos))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasteList);
