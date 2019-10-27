import React from 'react';
import AppLogin from './AppLogin';
import AppLogout from './AppLogout';
// import { loggedUserData }  from '../Data/AuthData';
import { MyButton } from '../../styles/Styles';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps   } from '../Data/AuthDataFldr/AuthDataMap';
import { Data } from '../Data/AuthDataFldr/AuthDataTypes';

type Props = {
    userData: Data
}

const AppAuth: React.FC<Props> = ({userData}) => {
// const actualUserData = loggedUserData();
    return (
        <React.Fragment>
            {userData.email === undefined ?
                <AppLogout/> :
               <>
                <AppLogin/><br/>
                Dont have account? Create one first.
                <Link to="/register">
                    <MyButton>Register</MyButton>
                </Link>
               </>
                }
        </React.Fragment>
    )
};

export default connect(authDataMapStateToProps, authDataMapDispatchToProps)(AppAuth);