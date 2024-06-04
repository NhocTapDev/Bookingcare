import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";
import OutStandingDoctor from "./Section/OutStandingDoctor";
import HandBook from "./Section/HandBook";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

  render() {

    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <HomeHeader />
        <Specialty settings={settings} />
        <MedicalFacility settings={settings} />
        <OutStandingDoctor settings={settings} />
        <HandBook settings={settings} />
        <About />
        <HomeFooter />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
