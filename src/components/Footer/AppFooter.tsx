import React from 'react';
import styled from 'styled-components';

const FooterPanel = styled.div`
background-color: transparent;
color: black;
padding: 20px;
font-size: 12px;
/* border: 1px solid black; */

`

const AppFooter: React.FC = () => {
    return(
        <React.Fragment>
            <FooterPanel>
                Created after hours by s950ms20 mostly on late evenings or early nights.
            </FooterPanel>
        </React.Fragment>
    )
}

export default AppFooter;