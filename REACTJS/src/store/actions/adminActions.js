import actionTypes from './actionTypes';
import { toast } from "react-toastify";
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctor,
    getAllSpecialty,
    getAllClinic,
} from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            });
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    };
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
});

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
        }
    };
};

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
});

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    };
};

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
});

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                const language = getState().app.language;
                if (language && language === "vi") {
                    toast.success("Thêm mới người dùng thành công!");
                } else {
                    toast.success("Add new user succeed!");
                }
                dispatch(createUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(createUserFailed());
            }
        } catch (e) {
            dispatch(createUserFailed());
        }
    };
};

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
});

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            const language = getState().app.language;
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                if (language && language === "vi") {
                    toast.error("Không lấy được thông tin người dùng!");
                } else {
                    toast.error("Fetch all users error!");
                }
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed());
        }
    };
};

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data,
});

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
});

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            const language = getState().app.language;

            if (res && res.errCode === 0) {
                if (language && language === "vi") {
                    toast.success("Xóa người dùng thành công!");
                } else {
                    toast.success("Delete the user succeed!");
                }

                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                if (language && language === "vi") {
                    toast.error("Không xóa được người dùng!");
                } else {
                    toast.error("Delete the user error!");
                }

                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
        }
    };
};

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
});

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            const language = getState().app.language;
            let res = await editUserService(data);
            if (res && res.errCode === 0) {

                if (language && language === "vi") {
                    toast.success("Cập nhật người dùng thành công!");
                } else {
                    toast.success("Update user succeed!");
                }

                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                if (language && language === "vi") {
                    toast.error("Cập nhật người dùng thất bại!");
                } else {
                    toast.error("Update user failed!");
                }

                dispatch(editUserFailed());
            }
        } catch (e) {

            const language = getState().app.language;
            if (language && language === "vi") {
                toast.error("Cập nhật người dùng thất bại!");
            } else {
                toast.error("Update user failed!");
            }
            dispatch(editUserFailed());
        }
    };
};

// export const editOnlyOneUser = (data) => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await editUserService(data);
//             if (res) return res;
//         } catch (e) {
//             console.log("EditUserFailed error", e);
//         }
//     };
// };

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
});