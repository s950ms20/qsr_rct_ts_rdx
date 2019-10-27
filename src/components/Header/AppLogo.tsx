import React from 'react';
import logo from '../../assets/img/qsr logo.png'
import styled from 'styled-components';

const LogoImg = styled.img`
height: 60vh;
margin: 50px;
`

const AppLogo: React.FC = () => {

    return(
        <React.Fragment>
            <LogoImg src={logo} alt="logo"/>
        </React.Fragment>
    )
}

export default AppLogo;