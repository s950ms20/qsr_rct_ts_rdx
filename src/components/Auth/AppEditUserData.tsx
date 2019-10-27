import React from 'react';
// import { Data, UserDeliveryAddress, checkIfUserExist} from '../Data/AuthDataFldr/AuthData';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps   } from '../Data/AuthDataFldr/AuthDataMap';
import { Flex, Row, InfoField, MyInput, MyButton } from '../../styles/Styles';
import AppUserDeliveryDataEditField from './AppUserDeliveryDataEditField';
import { UserDeliveryAddress, Data } from '../Data/AuthDataFldr/AuthDataTypes';
import { checkIfUserExist } from '../Data/AuthDataFldr/FirebaseMethods';

type Props = {
    userData: Data;
    userDeliveryAddress: UserDeliveryAddress;
}

const AppEditUserData: React.FC<Props> = ({userData, userDeliveryAddress}) => {
    const [ firstName, setFirstName ] = React.useState(userDeliveryAddress.fisrtName);
    const [ lastName, setLastName ] = React.useState(userDeliveryAddress.lastName);
    const [ address, setAddress ] = React.useState(userDeliveryAddress.address);
    const [ phone, setPhone ]= React.useState(userDeliveryAddress.phoneNumber);
    const email: string = userData.email;
    const id: string = userData.uid;

    return (
        <React.Fragment>

            <Flex>
                <AppUserDeliveryDataEditField
                fieldName = "First Name"
                value = {firstName}
                method = {setFirstName}
                />
                <AppUserDeliveryDataEditField
                fieldName = "Last Name"
                value = {lastName}
                method = {setLastName}
                />
                <AppUserDeliveryDataEditField
                fieldName = "Address"
                value = {address}
                method = {setAddress}
                />
                <AppUserDeliveryDataEditField
                fieldName = "Phone Number"
                value = {phone}
                method = {setPhone}
                />
                {email}<br/>
                {id}<br/>
            </Flex>

            <MyButton onClick={()=>{
                checkIfUserExist(id, firstName, lastName, address, phone, email);
                console.log(id)
                }}>Update</MyButton>

        </React.Fragment>
    )
}

export default connect(authDataMapStateToProps, authDataMapDispatchToProps) (AppEditUserData);