import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import TableManageUser from "./TableManageUser";

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: "",
            isOpen: false,

            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: "",
            position: "",
            role: "",
            image: "",

            action: "",
            userEditId: "",
            //   listFilterUsers:[]
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render => didupdate
        //hien tai (this) va qua khu (previous)
        //[] [3]
        //[3] [3]
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                // gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ""
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                // position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : ""
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                // role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : ""
            });
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                gender: "",
                position: "",
                role: "",
                image: "",
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: "",
            });
        }
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                image: base64
            });
        }
    };

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true,
        });
    };

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        let { action } = this.state;

        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux create user
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                image: this.state.image
            });
        }
        if (action === CRUD_ACTIONS.EDIT) {
            //fire redux edit user
            this.props.editAUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                image: this.state.image
            });
        }
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = [
            "email",
            "password",
            "firstName",
            "lastName",
            "phoneNumber",
            "address",
        ];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert("This input is required: " + arrCheck[i]);
                break;
            }
        }
        return isValid;
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };

        copyState[id] = event.target.value;

        this.setState({
            ...copyState,
        });
    };

    handleEditUserFromParent = (user) => {
        let imageBase64 = "";
        if (user.image) {
            imageBase64 = new Buffer.from(user.image, "base64").toString("binary");
        }

        this.setState({
            email: user.email,
            password: "HARDCODE",
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            image: user.image,
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
        });
    };

    render() {

        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            position,
            role,
            image,
        } = this.state;

        return (
            <div className="user-redux-container">
                <div className='title'>User Redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>
                                <h3>Thêm mới người dùng</h3>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'> <FormattedMessage id="manage-user.email" /></label>
                                    <input
                                        value={email}
                                        onChange={(event) => this.onChangeInput(event, "email")}
                                        type="email"
                                        className="form-control"
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'> <FormattedMessage id="manage-user.password" /></label>
                                    <input
                                        value={password}
                                        onChange={(event) => this.onChangeInput(event, "password")}
                                        type="password"
                                        className="form-control"
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'> <FormattedMessage id="manage-user.first-name" /></label>
                                    <input value={firstName} onChange={(event) => this.onChangeInput(event, "firstName")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'> <FormattedMessage id="manage-user.last-name" /></label>
                                    <input value={lastName} onChange={(event) => this.onChangeInput(event, "lastName")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'> <FormattedMessage id="manage-user.phone-number" /></label>
                                    <input value={phoneNumber} onChange={(event) => this.onChangeInput(event, "phoneNumber")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1'><FormattedMessage id="manage-user.address" /></label>
                                    <input value={address} onChange={(event) => this.onChangeInput(event, "address")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="form-group">
                                    <label className='mb-1' for=""> <FormattedMessage id="manage-user.gender" /></label>
                                    <select
                                        className="form-control"
                                        onChange={(event) => {
                                            this.onChangeInput(event, "gender");
                                        }}
                                        value={gender}
                                    >
                                        <option value="">
                                            {language === LANGUAGES.VI
                                                ? "Chọn giới tính"
                                                : "Choose gender"}
                                        </option>
                                        {genders && genders.length > 0 && genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <label className='mb-1'>
                                    <FormattedMessage id="manage-user.position" />
                                </label>
                                <select
                                    className="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, "position");
                                    }}
                                    value={position}
                                >
                                    <option value="">
                                        {language === LANGUAGES.VI
                                            ? "Chọn chức danh"
                                            : "Choose positon"}
                                    </option>
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-4 mb-3">
                                <label className='mb-1'>
                                    <FormattedMessage id="manage-user.role" />
                                </label>
                                <select
                                    className="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, "role");
                                    }}
                                    value={role}
                                >
                                    <option value="">
                                        {language === LANGUAGES.VI
                                            ? "Chọn vai trò"
                                            : "Choose role"}
                                    </option>
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-2 mb-3">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="manage-user.image" />
                                    </label>
                                    <div className="preview-img-container">
                                        <input
                                            id="previewImg"
                                            type="file"
                                            hidden
                                            onChange={(event) => this.handleOnChangeImage(event)}
                                        />
                                        <label className="label-upload" htmlFor="previewImg">
                                            <FormattedMessage id="manage-user.upload" /> <i className="fas fa-upload"></i>
                                        </label>
                                        <div
                                            className="preview-image"
                                            style={{
                                                backgroundImage: `url(${this.state.previewImgURL})`,
                                            }}
                                            onClick={() => this.openPreviewImage()}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* <button type="button" className="btn btn-primary mr-5"><FormattedMessage id="medical-history.apply" /></button>
                                <button type="button" className="btn btn-primary"><FormattedMessage id="medical-history.reset" /></button> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-5 text-right">
                                <button type="submit" className="btn btn-primary pointer mr-5"
                                    onClick={(() => this.handleSaveUser())}
                                // onClick={() => { this.props.navigate(`/admin-dashboard/user/create`); }}
                                >
                                    {/* <i className="fas fa-plus-circle mr-2"></i> */}
                                    <i className="fas fa-check-circle mr-2"></i>
                                    {this.state.action === CRUD_ACTIONS.EDIT ?
                                        <FormattedMessage id="manage-user.edit" />
                                        :
                                        <FormattedMessage id="manage-user.save" />
                                    }
                                </button>
                            </div>
                            <div className="col-12 mb-5">
                                <TableManageUser
                                    // listFilterUsers={this.state.listFilterUsers}
                                    // handleReset={this.handleReset}
                                    handleEditUserFromParentKey={this.handleEditUserFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true && (
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        editAUserRedux: (data) => dispatch(actions.editAUser(data)),
        // changeLanguageAppRedux: (language) =>
        //   dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
