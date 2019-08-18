import React from 'react';
// import AppRegister from './AppRegister'
import { MyButton, MyInput } from '../../styles/Styles'
import { login } from '../Data/AuthData';

const AppLogin: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] =React.useState('');
    return (
        <React.Fragment>
            <MyInput type="email" name="email" placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <MyInput type="password" name="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <MyButton onClick={()=>login(email,password)}>Login</MyButton>
        </React.Fragment>
    )
};

export default AppLogin;