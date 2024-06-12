import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./BookingModal.scss";
import { Modal } from "reactstrap";
import ProfileDoctor from "../ProfileDoctor";
import _ from "lodash";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() { }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  toggle = () => {
    this.props.toggle();
  };

  render() {
    let { isOpenModal, closeBookingClose, dataTime } = this.props;

    let doctorId = dataTime && !_.isEmpty(dataTime) ? dataTime.doctorId : "";

    return (
      <Modal isOpen={isOpenModal} toggle={() => this.toggle()} className={"booking-modal-container"} size="lg" centered      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span className="left">
              <FormattedMessage id="patient.booking-modal.title" />
            </span>
            <span className="right" onClick={closeBookingClose}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="booking-modal-body">
            {/* {JSON.stringify(dataTime)} */}
            <div className="doctor-infor">
              <ProfileDoctor
                doctorId={doctorId}
                isShowDescriptionDoctor={false}
                dataTime={dataTime}
                isShowLinkDetail={false}
                isShowPrice={true}
              />
            </div>
            <div className="row patient-infor">
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.patientName" />
                </label>
                <input
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.phoneNumber" />
                </label>
                <input
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.email" />
                </label>
                <input
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.address" />
                </label>
                <input
                  className="form-control"
                />
              </div>
              <div className="col-12 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.reason" />
                </label>
                <input
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.birthday" />
                </label>
              </div>
              <div className="col-6 form-group">
                <label>
                  <FormattedMessage id="patient.booking-modal.gender" />
                </label>
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button
              className="btn-booking-confirm"
            >
              <FormattedMessage id="patient.booking-modal.btnConfirm" />
            </button>
            <button
              className="btn-booking-cancel"
              onClick={closeBookingClose}
            >
              <FormattedMessage id="patient.booking-modal.btnCancel" />
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
