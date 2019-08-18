import React from 'react';
import AppLogin from './AppLogin';
import AppLogout from './AppLogout';
import { loggedUserData }  from '../Data/AuthData';
import { MyButton } from '../../styles/Styles';
import { Link} from 'react-router-dom';


const AppAuth: React.FC = () => {

const actualUserData = loggedUserData();

    return (
        <React.Fragment>
            {actualUserData != null ?
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

export default AppAuth;