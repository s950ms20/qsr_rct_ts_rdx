import { db } from './Firebase';
import { Order, OrderedProduct } from './Types';
import { ActionTypes } from './Actions';

// TYPES
// export type AppStateShop = ReturnType<typeof shoppingCartReducer>;

// REDUCER

const order_number: string = `${new Date().getTime()}_ORDER_${Math.floor(Math.random()*123456)}`;

export interface shopReducerState {
    orderedProduct: OrderedProduct,
    orderedProducts: OrderedProduct[],
    order: Order,
    status: string
    }

export const shopReducerState: shopReducerState = {
        orderedProduct: {
            product_id: '',
            ordered_quantity: 0,
            price: 0
        },
        orderedProducts: [],
        order: {
            orderedProducts: [],
            user_id: '',
            status: '',
            order_number: '',
        },
        status: 'ORDER IN PROGRESS'
        }

export const shoppingCartReducer = (state: shopReducerState = shopReducerState, action: ActionTypes): shopReducerState => {
switch(action.type) {
    case 'ADD_PRODUCT_TO_CART': {
        const order: Order = state.order;
        const product_id: string = action.product_id;
        const user_id: string = action.userId;
        const price: number =  action.price;
        const ordered_quantity: number = 1;
        const new_OrderedProduct = new OrderedProduct(product_id, ordered_quantity, price);
        const orderedProducts = state.orderedProducts;

        const checkIfIsAlreadyThereOrAddNewOne = () => {
            if ( (order.orderedProducts !== undefined) && (order.orderedProducts.findIndex((ord: OrderedProduct)=>ord.product_id === action.product_id) > -1) ) {
            const selectedProductNumber: number = order.orderedProducts.findIndex((ord: OrderedProduct)=>ord.product_id === action.product_id);
            const quantity: number = order.orderedProducts[selectedProductNumber].ordered_quantity;
            order.orderedProducts[selectedProductNumber].ordered_quantity = quantity + 1;
            const new_order = order;
            return new_order;

        } else {
            orderedProducts.push(new_OrderedProduct);
            const status: string = state.status;
            const new_order: Order = new Order(orderedProducts, user_id, status, order_number);
            return new_order;
        }
        }
            const empty_obj: any = [];
            const newOrder: Order = Object.assign(empty_obj, checkIfIsAlreadyThereOrAddNewOne());

        console.log(newOrder);
        return {
            ...state,
            order: newOrder
        };
    }
        case 'INC_NMBR_OF_ITEM': {
            const order: Order = state.order;
            const selectedProductNumber: number = order.orderedProducts.findIndex((ord: OrderedProduct)=>ord.product_id === action.product_id);
            const quantity: number = order.orderedProducts[selectedProductNumber].ordered_quantity;
            order.orderedProducts[selectedProductNumber].ordered_quantity = quantity + 1;

            const empty_obj: any = [];
            const newOrder: Order = Object.assign(empty_obj, order);

            console.log(quantity);
                    return {
                ...state,
                order: newOrder
            };
        }
    case 'DEC_NMBR_OF_ITEM': {
        const selectedProductNumber: number = state.order.orderedProducts.findIndex((ord: OrderedProduct)=>ord.product_id === action.product_id);
        const quantity: number = state.order.orderedProducts[selectedProductNumber].ordered_quantity;
        const order: Order = state.order;
        order.orderedProducts[selectedProductNumber].ordered_quantity = quantity - 1;;

        const empty_obj: any = [];
        const newOrder: Order = Object.assign(empty_obj, order);

        console.log(quantity);
            return {
            ...state,
            order: newOrder
            };
    }
    case 'DELETE_PRODUCT_FROM_ORDER':{
        const order: Order = state.order;
        const updatedOrderedProducts: OrderedProduct[] = order.orderedProducts.filter((ord: OrderedProduct)=> ord.product_id !== action.product_id);
        order.orderedProducts = updatedOrderedProducts;

        const empty_obj: any = [];
        const newOrder: Order = Object.assign(empty_obj, order);

        console.log(order);
        return {
            ...state,
            order: newOrder
        };
    }
    case 'UPDATE_PRODUCT_LIST':{
        const order: Order = state.order;
        const empty_obj: any = [];
        const newOrder: Order = Object.assign(empty_obj, order);
        return {
            ...state,
            order: newOrder
        };
    }
    case 'CONFIRM_ORDER':{
        const order: Order = state.order;
        order.status = 'ORDERED';
        const empty_obj: object = {};
        const orderedProductsArray: object[] = [];

        const new_order_with_classes: Order = Object.assign(empty_obj, order);

        order.orderedProducts.forEach((prd)=>{
            orderedProductsArray.push({ordered_quantity: prd.ordered_quantity, product_id: prd.product_id, price: prd.price})});
        const user_id: string = order.user_id;
        const status: string = order.status;
        const order_number: string = order.order_number;

        const orderWithoutCustomClasses: object = new Object({orderedProductsArray, user_id, status, order_number});
        const newOrder: object = Object.assign(empty_obj, orderWithoutCustomClasses);

        db.collection("orders").add({orderWithoutCustomClasses})
        .then((docRef: any) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error: any) => {
            console.error("Error adding document: ", error);
        });

        return {
            ...state,
            order: new_order_with_classes
        };
    }
    default:{
        console.log('log')
        return {
            ...state
        };
    }
}
};