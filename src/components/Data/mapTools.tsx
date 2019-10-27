import { MainState } from '../../index';
import { Dispatch } from 'redux';

export const mapStateToProps = (state: MainState) => {
    return {
        order: state.shoppingCartReducer.order,
        orderedProducts: state.shoppingCartReducer.orderedProducts,
        status: state.shoppingCartReducer.status
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onADD_PRODUCT_TO_CART: (product_id: string, userId: string, price: number) => dispatch({ type: 'ADD_PRODUCT_TO_CART', product_id: product_id, userId: userId, price: price }),
        onINC_NMBR_OF_ITEM: (product_id: string) => dispatch({ type: 'INC_NMBR_OF_ITEM', product_id: product_id }),
        onDEC_NMBR_OF_ITEM: (product_id: string) => dispatch({ type: 'DEC_NMBR_OF_ITEM', product_id: product_id }),
        onDELETE_PRODUCT_FROM_ORDER: (product_id: string) => dispatch({ type: 'DELETE_PRODUCT_FROM_ORDER', product_id: product_id }),
        onUPDATE_PRODUCT_LIST: ()=>dispatch({type: 'UPDATE_PRODUCT_LIST'}),
        onCONFIRM_ORDER: ()=>dispatch({type:'CONFIRM_ORDER'})

    }
}