import React from 'react';
import { Row, InfoField, MyInput, MyButton } from '../../styles/Styles';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps   } from '../Data/AuthDataFldr/AuthDataMap';

type Props = {
    value: string;
    fieldName: string;
    method: any;
}

const AppUserDeliveryDataEditField: React.FC<Props> = ({value, fieldName, method}) => {
    const [ editMode, setEditMode ] = React.useState(false);

    return (
        <Row>
        <InfoField>{fieldName}</InfoField>
        {( value === '' || editMode)
        ? (
        <>
            <MyInput type="text" value={value} onChange={(event: any)=>method(event.target.value)}/>
       </>
            ) : (
                <>
                <InfoField>{value}</InfoField>
                </>
            )
        }
        <MyButton onClick={()=>{setEditMode(!editMode)}}>Edit</MyButton>
        <MyButton onClick={()=>{setEditMode(false)}}>Done</MyButton>
   </Row>
    )
} 

export default connect(authDataMapStateToProps, authDataMapDispatchToProps) (AppUserDeliveryDataEditField);