import React from 'react';
import {MenuItem, MenuListClass} from '../../../styles/Styles';
import { Link } from 'react-router-dom';
const uuidv1 = require('uuid/v1');

const AdminMenu: React.FC = () => {


interface adminMenuListItem {
    name: string;
    link: string;
    id: string;
};
const adminMenuList : adminMenuListItem[] = [
    {name: 'ADD PRODUCT', link: '/AddProduct', id: uuidv1()},
    {name: 'EDIT PRODUCTS', link: '/EditProducts', id: uuidv1()},
    {name: 'ADD NEWS', link: '/AddNews', id: uuidv1()},
    {name: 'EDIT NEWS', link: '/EditNews', id: uuidv1()},
    {name: 'CRATE NEWSLETTER', link: '/CreateNewsletter', id: uuidv1()},
    {name: 'MENAGE USERS', link: '/MenageUsers', id: uuidv1()},
];

    return (
        <React.Fragment>
                        {/* <MenuListClass>
                { adminMenuList.map((it) => {return <MenuItem key={it.id}>
                    <Link to={it.link}>{it.name}</Link>
                </MenuItem>})}
            </MenuListClass> */}

        </React.Fragment>
    )
}

export default AdminMenu;