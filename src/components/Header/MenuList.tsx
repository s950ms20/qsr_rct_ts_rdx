const uuidv1 = require('uuid/v1');

export interface menuListItem {
    name: string;
    link: string;
    id: string;
};
export const menuList : menuListItem[] = [
    {name: 'NEWS', link: '/', id: uuidv1()},
    {name: 'ARTISTS', link: '/Artists', id: uuidv1()},
    {name: 'ABOUT', link: '/About', id: uuidv1()},
    {name: 'ARCHIVE', link: '/Archive', id: uuidv1()},
    {name: 'SHOP', link: '/Shop', id: uuidv1()},
    {name: 'CONTACT', link: '/Contact', id: uuidv1()},
    {name: 'NEWSLETTER', link: '/Newsletter', id: uuidv1()},
    {name: 'USER', link: '/User', id: uuidv1()},
    {name: 'ADMIN', link: '/HiddenDoor', id: uuidv1()}
];