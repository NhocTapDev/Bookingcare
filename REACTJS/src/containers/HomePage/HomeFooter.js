import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {

  render() {

    return (
      <div className="home-footer">
        <div className="footer-container">
          <div className="footer-content container">
            <div className="content-left">
              <h3>Công ty Cổ phần Công nghệ BookingCare</h3>
              <div className="content-info">
                <i className="icon fa fa-map-marker"></i>
                <span> 1A, Ngõ 17, Lê Thanh Nghi,Hai Bà Trưng, Hà Nội, Việt Nam</span>
              </div>
              <div className="content-info">
                <i className="icon fa fa-phone"></i>
                <span> +84 123 456 789 (8h - 17h, T2 - T6) </span>
              </div>
              <div className="content-info">
                <i className="icon fa fa-envelope"></i>
                <span> support@bookingcare.vn </span>
              </div>
              <p></p>
            </div>
            <div className="content-center">
              <div className="footer-logo"></div>
              <div className="content-info">
                <a>Tuyển dụng</a>
              </div>
              <div className="content-info">
                <a>Chính sách bảo mật</a>
              </div>
              <div className="content-info">
                <a>Quy chế hoạt động</a>
              </div>
              <div className="content-info">
                <a>Liên hệ hợp tác</a>
              </div>
              <div className="content-info">
                <a>Điều khoản sử dụng</a>
              </div>
              <div className="content-info">
                <a>Câu hỏi thường gặp</a>
              </div>
            </div>
            <div className="content-right">
              <h3>Đối tác bảo trợ nội dung</h3>
              <a href="#" className="content-info">
                <h4>Hello Doctor</h4>
                <p>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"</p>
              </a>
              <a href="#" className="content-info">
                <h4>Hệ thống y khoa chuyên sâu quốc tế Bernard</h4>
                <p>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</p>
              </a>
              <a href="#" className="content-info">
                <h4>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</h4>
                <p>Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-info">
        <div className="footer-info-content container">
          <div className="copy-right">© 2024 BookingCare</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
