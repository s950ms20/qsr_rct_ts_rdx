import React from 'react';
import { MyButton, MyInput } from '../../styles/Styles'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { authDataMapStateToProps, authDataMapDispatchToProps   } from '../Data/AuthDataFldr/AuthDataMap';

type Props = {
    onCREATE_USER: any;
}

const AppRegister: React.FC<Props> = (
    {
        onCREATE_USER
    }
) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] =React.useState('');

    return (
        <React.Fragment>
            <MyInput type="email" name="email" placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <MyInput type="password" name="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <MyButton onClick={()=>onCREATE_USER(email,password)}>Register</MyButton>
            <Link to="/"><MyButton>Go Back</MyButton></Link>
        </React.Fragment>
    )
};

export default connect(authDataMapStateToProps, authDataMapDispatchToProps)(AppRegister);