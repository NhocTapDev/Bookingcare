import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class Specialty extends Component {

  render() {

    return (
      <div className="section-share section-specialty">
        <div className="section-container container">
          <div className="section-header">
            <div className="section-header-title">
              <span>
                <FormattedMessage id="homepage.specialty-popular" />
              </span>
            </div>
            <div className="section-header-option">
              <button>
                <span>
                  <FormattedMessage id="homepage.more-infor" />
                </span>
              </button>
            </div>
          </div>
          <div className="section-content">
            <Slider {...this.props.settings}>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
              <div className="slider-customize">
                <div className="slider-img">
                  <div className="img"></div>
                </div>
                <div className="slider-title">
                  <span>Cơ xương khớp</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
