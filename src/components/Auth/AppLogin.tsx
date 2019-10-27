import React from 'react';
import { MyButton, MyInput } from '../../styles/Styles'
// import { login } from '../Data/AuthData';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps   } from '../Data/AuthDataFldr/AuthDataMap';

type Props = {
    onLOGIN: any;
}

const AppLogin: React.FC<Props> = (
    {
        onLOGIN
    }
) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] =React.useState('');
    return (
        <React.Fragment>
            <MyInput type="email" name="email" placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <MyInput type="password" name="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <MyButton onClick={()=>onLOGIN(email,password)}>Login</MyButton>
        </React.Fragment>
    )
};

export default connect(authDataMapStateToProps, authDataMapDispatchToProps)(AppLogin);