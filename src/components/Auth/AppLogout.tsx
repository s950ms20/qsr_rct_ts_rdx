import React from 'react';
// import { Data, UserDeliveryAddress } from '../Data/AuthDataFldr/AuthData';
import { MyButton } from '../../styles/Styles';
// import {ContextData} from '../tools/ContextData';
import AppEditUserData from './AppEditUserData';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps } from '../Data/AuthDataFldr/AuthDataMap';
import { Data, UserDeliveryAddress } from '../Data/AuthDataFldr/AuthDataTypes';

type Props = {
    userData: Data,
    onLOGOUT: any,
    userDeliveryAddress: UserDeliveryAddress
}

const AppLogout: React.FC<Props>=({userData, onLOGOUT, userDeliveryAddress})=>{
    // const [actualUserData, setActualUserData] = React.useState(userData.email)
    // const ctx =  React.useContext(ContextData);
    // ctx.setUserName(actualUserData);

    return (
        <React.Fragment>
            <> Hello
            { userDeliveryAddress.fisrtName !== '' ? (
                    <>{userDeliveryAddress.fisrtName} {userDeliveryAddress.lastName}</>
                    ) : <> {userData.email} </> } , what's up? <MyButton onClick={
                ()=>onLOGOUT()
                }>Logout</MyButton> </>
                <br/>
                <AppEditUserData/>
        </React.Fragment>
    )
}

export default connect(authDataMapStateToProps, authDataMapDispatchToProps)(AppLogout);