// import { auth } from '../Firebase';
// import { db } from '../Firebase';
import { Data, UserDeliveryAddress } from './AuthDataTypes';
import { AuthDataActionTypes } from './AuthDataActions';
import { createUser, loggedUserData, login, loggOut, getUsers } from './FirebaseMethods'
// const history = require("history").createBrowserHistory();

// reducer
export interface authDataMyDefaultState {
    userData: Data;
    userDeliveryAddress: UserDeliveryAddress;
    }

const authDataMyDefaultState = {
    userData: {
        displayName: '',
        email: '',
        emailVerified: false,
        photoURL: '',
        uid: ''
    },
    userDeliveryAddress: {
        fireBase_UID:'',
        fisrtName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
    }
        };

export const authDataReducer = (state: authDataMyDefaultState = authDataMyDefaultState, action: AuthDataActionTypes) => {
    switch(action.type) {
        case 'CREATE_USER' :{
            createUser(action.email, action.password);
              const empty_obj: any = [];
              const userData: Data = Object.assign(empty_obj, loggedUserData());

            return {
                ...state,
                userData: userData
            };
        };
        case 'LOGIN' :{
            login(action.email, action.password);

            const empty_obj: any = [];
            const userData: Data = Object.assign(empty_obj, loggedUserData());
            console.log(userData);

            let logged_user_dev_address: UserDeliveryAddress;
            getUsers().then(
                result => {
                    const findUser: number = result.findIndex((elm: UserDeliveryAddress) => elm.fireBase_UID === userData.uid );
                    logged_user_dev_address = result[findUser];
                    console.log(logged_user_dev_address);
                }
            );

          return {
              ...state,
              userData: userData,
            //   userDeliveryAddress: logged_user_dev_address
          };
        };
        case 'GET_USER_DATA' :{

            const empty_obj: any = [];
            const userData: Data = Object.assign(empty_obj, loggedUserData());
            return {
                ...state,
                userData: userData
            };
        };
        case 'LOGOUT' :{
            loggOut();
            const userData: Data = new Data('','', false, '','')
            return {
                ...state,
                userData: userData
            };
        };
        case 'EDIT_USER_DATA' :{
            //
            return {
                ...state,
            };
        };
        default:{
            console.log('def')
            return {
                ...state
            };
        }
    }
}