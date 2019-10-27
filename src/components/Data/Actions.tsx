// ACTIONS
const ADD_PRODUCT_TO_CART =  'ADD_PRODUCT_TO_CART';
const INC_NMBR_OF_ITEM =  'INC_NMBR_OF_ITEM' ;
const DEC_NMBR_OF_ITEM = 'DEC_NMBR_OF_ITEM' ;
const DELETE_PRODUCT_FROM_ORDER = 'DELETE_PRODUCT_FROM_ORDER';
const UPDATE_PRODUCT_LIST ='UPDATE_PRODUCT_LIST';
const CONFIRM_ORDER = 'CONFIRM_ORDER';

interface ADD_PRODUCT_TO_CART_Action {
    type: typeof ADD_PRODUCT_TO_CART;
    product_id: string;
    userId: string;
    price: number;
}

interface INC_NMBR_OF_ITEM_Action {
    type: typeof INC_NMBR_OF_ITEM;
    product_id: string;
}
interface DEC_NMBR_OF_ITEM_Action {
    type: typeof DEC_NMBR_OF_ITEM;
    product_id: string;
}
interface DELETE_PRODUCT_FROM_ORDER_Action {
    type: typeof DELETE_PRODUCT_FROM_ORDER;
    product_id: string;
}
interface UPDATE_PRODUCT_LIST_Action {
    type: typeof UPDATE_PRODUCT_LIST;
}
interface CONFIRM_ORDER_Action {
    type: typeof CONFIRM_ORDER;
}

export type ActionTypes =  ADD_PRODUCT_TO_CART_Action | INC_NMBR_OF_ITEM_Action | DEC_NMBR_OF_ITEM_Action | DELETE_PRODUCT_FROM_ORDER_Action | UPDATE_PRODUCT_LIST_Action | CONFIRM_ORDER_Action;