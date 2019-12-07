import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./TableListItem";
export class TasteList extends Component {
  nav = () => {
    this.props.history.replace("/vote");
  };
  render() {
    console.log(this.props.categories);
    let list = this.props.categories.map(category => {
      return <Item category={category} nav={this.nav} />;
    });
    return (
      <>
        <div>
          <h2>Choose A</h2>
          <h1>Category</h1>
        </div>
        <div class="container h-100 " style={{ marginTop: "300px" }}>
          <div class="row  my-auto ml-auto">{list}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};
const mapDispatchToProps = { vote };

export default connect(mapStateToProps, mapDispatchToProps)(TasteList);
