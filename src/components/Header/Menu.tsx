import React from 'react';
import styled from 'styled-components';
import {MenuItem, MenuListClass} from '../../styles/Styles'
import { menuList } from './MenuList'
import { Link } from 'react-router-dom'
const uuidv1 = require('uuid/v1');

const MenuButtonStripe = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;`

const NewMenuButton = styled.button`
background-color: transparent;
border: 0px;
transition-duration: 1000ms;
position: absolute;
top: 20px;
right: 20px;

&:hover {
    transform: rotate(90deg);
}

@media only screen and (min-width: 750px) {
  display: none;
}`

const Menu: React.FC = (props) => {
    const [showMenu, setShowMenu] = React.useState(false);
    const innerWidth = window.innerWidth;

    const MenuButton = () => {
        const button = [];
    for (let i = 0; i < 3; i++) {
        button.push(<MenuButtonStripe key={uuidv1()}/>)
    }
    return button;
  }

    return(
        <React.Fragment>
        <NewMenuButton
        onClick={
            ()=>setShowMenu(!showMenu)
            }>
            {MenuButton()}
        </NewMenuButton>
            <MenuListClass>
                {
                    (innerWidth > 750) || (innerWidth < 750 && showMenu)
                    ? menuList.map((it) => {return <MenuItem key={it.id}>
                    <Link to={it.link}>{it.name}</Link>
                </MenuItem>})
                : null
            }
            </MenuListClass>
        </React.Fragment>
    )
}

export default Menu;