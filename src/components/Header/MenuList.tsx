const uuidv1 = require('uuid/v1');

export interface menuListItem {
    name: string;
    link: string;
    id: string;
};
export const menuList : menuListItem[] = [
    // {name: 'NEWS', link: '/', id: uuidv1()},
    // {name: 'ARTISTS', link: '/Artists', id: uuidv1()},
    // {name: 'ABOUT', link: '/About', id: uuidv1()},
    // {name: 'ARCHIVE', link: '/Archive', id: uuidv1()},
    {name: 'SHOP', link: '/', id: uuidv1()},
    {name: 'SHOPPING CART', link: '/ShoppingCart', id: uuidv1()},
    // {name: 'CONTACT', link: '/Contact', id: uuidv1()},
    // {name: 'NEWSLETTER', link: '/Newsletter', id: uuidv1()},
    {name: 'USER', link: '/User', id: uuidv1()},
    // {name: 'ADMIN', link: '/HiddenDoor', id: uuidv1()},
    {name: 'ADD PRODUCT', link: '/AddProduct', id: uuidv1()},
    {name: 'EDIT PRODUCTS', link: '/EditProducts', id: uuidv1()},
    // {name: 'ADD NEWS', link: '/AddNews', id: uuidv1()},
    // {name: 'EDIT NEWS', link: '/EditNews', id: uuidv1()},
    // {name: 'CREATE NEWSLETTER', link: '/CreateNewsletter', id: uuidv1()},
    // {name: 'MENAGE USERS', link: '/MenageUsers', id: uuidv1()}
    {name: 'CART', link: '/Cart', id: uuidv1()},
];