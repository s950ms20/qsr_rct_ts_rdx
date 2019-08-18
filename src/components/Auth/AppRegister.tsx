import React from 'react';
import { createUser } from '../Data/AuthData';
import { MyButton, MyInput } from '../../styles/Styles'
import { Link} from 'react-router-dom';


const AppRegister: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] =React.useState('');

    return (
        <React.Fragment>
            <MyInput type="email" name="email" placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <MyInput type="password" name="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <MyButton onClick={()=>createUser(email,password)}>Register</MyButton>
            <Link to="/"><MyButton>Go Back</MyButton></Link>
        </React.Fragment>
    )
};

export default AppRegister;