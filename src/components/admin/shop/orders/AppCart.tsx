import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../../Data/mapTools';
import { connect } from 'react-redux';
import { Order, OrderedProduct } from '../../../Data/Types';
import { MyButton, Bold } from '../../../../styles/Styles';
import  AppOrderedProduct from './AppOrderedProduct';
const uuidv1 = require('uuid/v1');

type Props = {
    order: Order;
    onUPDATE_PRODUCT_LIST: any;
    onCONFIRM_ORDER: any;
}

const AppCart: React.FC<Props>=(
    {
        order, 
        onUPDATE_PRODUCT_LIST,
        onCONFIRM_ORDER
    })=>{

const pages: string[] =  ['PRODUCTS', 'ADRESS','SHIPPING', 'CONFIRM'];
const [currentPage, setCurrentPage] = React.useState(pages[0]);
const [shipping, setShipping] = React.useState<number>(15);

const totalCostProducts = () => {
    let total: number = 0
    order.orderedProducts.forEach((ord: OrderedProduct)=> total += (ord.price * ord.ordered_quantity));
    return total;
};

const pagesChanger = (param: string) => {
    switch (param) {
        case 'PRODUCTS' :
            return <React.Fragment>
            <ol>
                {order.orderedProducts.map((ord: OrderedProduct)=>{
                    return <li key={ord.product_id}>
                        <AppOrderedProduct ordPrd={ord} />
                    </li>
                })}
            </ol>
            <br/>
                <Bold>
                    For all products: {totalCostProducts()} GBP
                </Bold>
            <br/>
                </React.Fragment>
        case 'SHIPPING' :
           return  <>
                <h1>SHIPPING</h1>
                <select value={shipping} onChange={(event: any)=>setShipping(Number(event.target.value))}>
                    <option value="15">Shipping: 15</option>
                    <option  value="25">Shipping: 25</option>
                    <option value="30">Shipping: 30</option>
                    <option  value="50">Shipping: 50</option>
                </select><br/>
                <Bold>
                    TOTAL: {totalCostProducts() + shipping}<br/>
                </Bold>
            </>
        case 'ADRESS' :
           return  <>
                <h1>Adress</h1>
            </>
        case 'CONFIRM' :
           return  <>
           <Bold>
                Products: {totalCostProducts()}<br/>
                Shipping: {shipping}<br/>
                Total: {totalCostProducts() + shipping}<br/>
           </Bold>
            </>
        default:
            console.log('def')
            break;
    }
}

const changePage = (goNext: boolean) => {
    const actualPosition = pages.findIndex((pos)=> pos === currentPage);

    if (actualPosition > -1 && actualPosition < 3 && goNext) {
        setCurrentPage(pages[actualPosition + 1])
    } else if (actualPosition > 0 && actualPosition < 4 && !goNext)
        { setCurrentPage(pages[actualPosition - 1]) }
    }

    return (
        <React.Fragment>
            {order.orderedProducts !== undefined ? (
                <React.Fragment>
                    <Bold>{order.order_number}</Bold>
                <br/>
            {order.status}<br/>

            {pagesChanger(currentPage)}

            {(currentPage !== 'PRODUCTS' ) ? <MyButton onClick={()=>changePage(false)}>Previous</MyButton>  : null}
            {(currentPage !== 'CONFIRM' ) ? <MyButton onClick={()=>changePage(true)}>Next</MyButton>  : null}
            <br/>

            {order.status === 'ORDER IN PROGRESS' ? 
                ( <>
                <MyButton onClick={()=>onUPDATE_PRODUCT_LIST()}>UPDATE</MyButton>
                <MyButton onClick={()=>onCONFIRM_ORDER()}>CONFIRM ORDER</MyButton>
            </>) : null }
                </React.Fragment>
            ) : null
        }
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCart);