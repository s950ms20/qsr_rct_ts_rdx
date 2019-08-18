import React from 'react';
import { loggedUserData, loggOut } from '../Data/AuthData';
import { MyButton } from '../../styles/Styles';

interface IProps {
}

interface IState {
    actualUserData: string;
}
class AppLogout extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            actualUserData: loggedUserData().email,
        }
    }

    render() {

    return (
        <React.Fragment>
            <> Hello {this.state.actualUserData}, what's up? <MyButton onClick={
                ()=>loggOut()
                }>Logout</MyButton> </>


        </React.Fragment>
    )
    }
}

export default AppLogout;