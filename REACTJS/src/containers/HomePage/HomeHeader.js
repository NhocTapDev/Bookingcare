import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="container home-header-content">
            <div className="left-content col-2 col-lg-2 col-xl-2 col-sm-2">
              <div
                className="header-logo"
                onClick={() => {
                  this.returnToHome();
                }}
              ></div>
            </div>
            <div className="center-content col-lg-4 col-xl-6">
              <div className="child-content">
                <b>
                  Chuyên khoa
                  {/* <FormattedMessage id="homeheader.speciality" /> */}
                </b>

                <div className="subs-title">
                  Tìm bác sĩ theo chuyên khoa
                  {/* <FormattedMessage id="homeheader.searchdoctor" /> */}
                </div>
              </div>
              <div className="child-content">
                <b>
                  Cơ sở y tế
                  {/* <FormattedMessage id="homeheader.health-facility" /> */}
                </b>

                <div className="subs-title">
                  Chọn bệnh viện phòng khám
                  {/* <FormattedMessage id="homeheader.select-room" /> */}
                </div>
              </div>
              <div className="child-content">
                <b>
                  Bác sĩ
                  {/* <FormattedMessage id="homeheader.doctor" /> */}
                </b>

                <div className="subs-title">
                  Chọn bác sĩ giỏi
                  {/* <FormattedMessage id="homeheader.select-doctor" /> */}
                </div>
              </div>
              <div className="child-content">
                <b>
                  Cẩm nang
                  {/* <FormattedMessage id="homeheader.fee" /> */}
                </b>

                <div className="subs-title">
                  Theo dõi bài viết bổ ích
                  {/* <FormattedMessage id="homeheader.check-health" /> */}
                </div>
              </div>
            </div>
            <div className="right-content col-10 col-lg-6 col-xl-4 col-sm-10">
              <div
                className="search"
              // onClick={() => this.handleClickShowHomeMenuSearchSpecialty()}
              >
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Key..." />
                {/* <FormattedMessage id="banner.search">
                  {(placeholder) => (
                  )}
                </FormattedMessage>

                {this.state.showMenuSearchSpecialty && (
                  <HomeMenuSearchSpecialty
                    showMenuSearchSpecialty={this.state.showMenuSearchSpecialty}
                  />
                )} */}
              </div>
              <div className="support">
                <i className="fas fa-question-circle"></i>
                {/* <FormattedMessage id="homeheader.support" /> */}
              </div>
              {/* <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN //bien language duoc khai bao ben tren
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div> */}

              <div
                class="avatar-profile"
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
                Chuyên khoa
                {/* <FormattedMessage id="homeheader.speciality" /> */}
              </b>
              <div className="subs-title">
                Tìm bác sĩ theo chuyên khoa
                {/* <FormattedMessage id="homeheader.searchdoctor" /> */}
              </div>
            </div>
            <div className="child-content">
              <b>
                Cơ sở y tế
                {/* <FormattedMessage id="homeheader.health-facility" /> */}
              </b>
              <div className="subs-title">
                Chọn bệnh viện phòng khám
                {/* <FormattedMessage id="homeheader.select-room" /> */}
              </div>
            </div>
            <div className="child-content">
              <b>
                Bác sĩ
                {/* <FormattedMessage id="homeheader.doctor" /> */}
              </b>
              <div className="subs-title">
                Chọn bác sĩ giỏi
                {/* <FormattedMessage id="homeheader.select-doctor" /> */}
              </div>
            </div>
            <div className="child-content">
              <b>
                Cẩm nang
                {/* <FormattedMessage id="homeheader.fee" /> */}
              </b>
              <div className="subs-title">
                Theo dõi bài viết bổ ích
                {/* <FormattedMessage id="homeheader.check-health" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* {this.props.isShowBanner === true && ( */}
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title-banner">
              <p>NỀN TẢNG Y TẾ</p>
              <p>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</p>
              {/* <FormattedMessage id="banner.title1" /> */}
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital-alt"></i>
                </div>
                <div className="text-child">
                  Khám chuyên khoa
                  {/* <FormattedMessage id="banner.child1" /> */}
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  Khám từ xa
                  {/* <FormattedMessage id="banner.child2" /> */}
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">
                  Khám tổng quát
                  {/* <FormattedMessage id="banner.child3" /> */}
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="text-child">
                  Xét nghiệm y học
                  {/* <FormattedMessage id="banner.child4" /> */}
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  Sức khỏe tinh thần
                  {/* <FormattedMessage id="banner.child5" /> */}
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <div className="text-child">
                  Khám nha khoa
                  {/* <FormattedMessage id="banner.child6" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
