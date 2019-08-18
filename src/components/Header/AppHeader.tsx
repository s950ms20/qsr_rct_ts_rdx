import React from 'react';
import AppLogo from './AppLogo';
import Menu from './Menu';

const AppHeader: React.FC = () => {
    return(
        <React.Fragment>
            <AppLogo/>
            <Menu/>
        </React.Fragment>
    )
}

export default AppHeader;