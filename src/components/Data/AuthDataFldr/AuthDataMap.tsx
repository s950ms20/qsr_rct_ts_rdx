import { MainState } from '../../../index';
import { Dispatch } from 'redux';

export const authDataMapStateToProps = (state: MainState) => {
    return {
        userData: state.authDataReducer.userData,
        userDeliveryAddress: state.authDataReducer.userDeliveryAddress
    }
};

//   CREATE_USER; LOGIN; GET_USER_DATA; LOGOUT; EDIT_USER_DATA;

export const authDataMapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCREATE_USER: (email: string, password: string) => dispatch({type: 'CREATE_USER', email: email, password: password}),
        onLOGIN: (email: string, password: string) => dispatch({type: 'LOGIN', email: email, password: password}),
        onGET_USER_DATA: () => dispatch({type: 'GET_USER_DATA'}),
        onLOGOUT: () => dispatch({type: 'LOGOUT'}),
        onEDIT_USER_DATA: () => dispatch({type: 'EDIT_USER_DATA'}),
    }
};