import React, { Component } from "react";
import { connect } from "react-redux";
import instance from "../redux/actions/instance";
class Profile extends Component {
  async componentDidMount() {
    if (!this.state.profile) {
      const res = await instance.get(
        `/profile/${parseInt(this.props.match.params.id)}/`
      );
      console.log(res.data);
      this.setState({ profile: res.data });
    }
  }
  state = {
    profile: null
  };
  render() {
    if (this.state.profile) {
      return (
        <div>
          <h1>Name:{this.state.profile.username}</h1>
          <h1>Points:{this.state.profile.points}</h1>
          <h1>
            List of Videos:{" "}
            {this.state.profile.videos.map(video => (
              <iframe width="420" height="345" src={video}></iframe>
            ))}
          </h1>
          <h1>Rank:{this.state.profile.ranking}</h1>
        </div>
      );
    } else return <></>;
  }
}
const mapStateToProps = state => ({ user: state.rootAuth });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
