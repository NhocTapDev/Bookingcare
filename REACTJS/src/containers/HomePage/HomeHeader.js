import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions/appActions";
import { withRouter } from "react-router";

class HomeHeader extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  }

  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };

  render() {
    let language = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="container home-header-content">
            <div className="left-content col-3 col-lg-2 col-xl-1 col-sm-3">
              <div
                className="header-logo"
                onClick={() => { this.returnToHome(); }}
              ></div>
            </div>
            <div className="center-content col-lg-5 col-xl-6">
              <div className="child-content">
                <b>
                  <FormattedMessage id="homeheader.speciality" />
                </b>

                <div className="subs-title">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <b>
                  <FormattedMessage id="homeheader.health-facility" />
                </b>

                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>
              <div className="child-content">
                <b>
                  <FormattedMessage id="homeheader.doctor" />
                </b>

                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <b>
                  <FormattedMessage id="homeheader.handbook" />
                </b>

                <div className="subs-title">
                  <FormattedMessage id="homeheader.follow-posts" />
                </div>
              </div>
            </div>
            <div className="right-content col-9 col-lg-5 col-xl-5 col-sm-9">
              <div
                className="search"
              // onClick={() => this.handleClickShowHomeMenuSearchSpecialty()}
              >
                <i className="fas fa-search"></i>
                <FormattedMessage id="banner.search">
                  {(placeholder) => (
                    <input type="text" placeholder={placeholder} />
                  )}
                </FormattedMessage>

                {/* {this.state.showMenuSearchSpecialty && (
                  <HomeMenuSearchSpecialty
                    showMenuSearchSpecialty={this.state.showMenuSearchSpecialty}
                  />
                )} */}
              </div>
              <div className="support">
                <i className="fas fa-question-circle"></i>
                {/* <span className='support-text'><FormattedMessage id="homeheader.support" /></span> */}
              </div>
              <div className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}>
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
              </div>
              <div className={language === LANGUAGES.EN ? "language-en active" : "language-en"}>
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
              </div>
              <div
                className="avatar-profile"
              // style={{
              //   backgroundImage: `url(${this.state.previewImgURL ? this.state.previewImgURL : ""})`
              // }}
              >
              </div>
              <div className="menu-home-header">
                <i className="fas fa-bars menu-home"></i>
                {/* <MenuHomeHeader /> */}
              </div>
            </div>
          </div>
          <div className="container center-content-mobile">
            <div className="child-content">
              <b>
                <FormattedMessage id="homeheader.speciality" />
              </b>
              <div className="subs-title">
                <FormattedMessage id="homeheader.searchdoctor" />
              </div>
            </div>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeheader.health-facility" />
              </b>
              <div className="subs-title">
                <FormattedMessage id="homeheader.select-room" />
              </div>
            </div>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeheader.doctor" />
              </b>
              <div className="subs-title">
                <FormattedMessage id="homeheader.select-doctor" />
              </div>
            </div>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeheader.handbook" />
              </b>
              <div className="subs-title">
                <FormattedMessage id="homeheader.follow-posts" />
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title-banner">
                <p className='title-banner-up'>
                  <FormattedMessage id="banner.title-banner-up" />
                </p>
                <p className='title-banner-down'>
                  <FormattedMessage id="banner.title-banner-down" />
                </p>
              </div>
            </div>
            <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-hospital-alt"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child1" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child2" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-procedures"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child3" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-flask"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child4" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child5" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-briefcase-medical"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
