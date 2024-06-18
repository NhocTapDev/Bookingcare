import React, { Component } from "react";
import { connect } from "react-redux";

class ManagePatient extends Component {
  render() {

    return (
      <React.Fragment>
        <diV>aaaaaaaaaaaaaaaaaaaaaa</diV>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
