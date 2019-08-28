import React from 'react';
import {getData, newObject} from '../Data/ShopData';
// import { MyButton, MyInput, Flex, InfoField, Row, Col }from '../../styles/Styles';
import Product from './Product';


const AppShop = () => {
const [products, setProducts] = React.useState<newObject[]>([]);
const [updateHelper, setUpdateHelper] = React.useState(1);

React.useEffect(
    ()=>{
            getData().then(
                (result) => {
                    setProducts(result);
                    console.log(result)
                }
            )
    }, [updateHelper]
)

    return (
        <React.Fragment>
    {products.map((prd: newObject, idx: number) => { return  <Product key={prd.id} product={prd} /> } ) }
        </React.Fragment>
    )
}

export default AppShop;