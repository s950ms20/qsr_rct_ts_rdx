import React from 'react';
import {Product, getData} from '../../Data/ShopData';
import {ContextData} from '../../tools/ContextData';
import SingleProduct from './SingleProduct';

const EditProducts: React.FC = () => {
const globalUpdateHelper = React.useContext(ContextData);
const [products, setProducts] = React.useState<Product[]>([]);

React.useEffect(
    ()=>{
            getData().then(
                (result) => {
                    setProducts(result);
                    console.log(result)
                }
            )
    }, [globalUpdateHelper.updateHelper]
)


    return (
        <React.Fragment>
                {products.map((prd: Product, idx: number) => { return  <SingleProduct key={prd.id} prd={prd} /> } ) }

            
        </React.Fragment>
    )
}

export default EditProducts;