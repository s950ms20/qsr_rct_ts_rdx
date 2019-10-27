import React from 'react';
import {getData, Product} from '../Data/ShopData';
import { Link } from 'react-router-dom'
import {Flex, ProductImg, ProductBasicInfo, ProductBox, Col, Bold} from '../../styles/Styles';
import {ContextData} from '../tools/ContextData';

const AppShop: React.FC = () => {
const [products, setProducts] = React.useState<Product[]>([]);
const cntx = React.useContext(ContextData);

React.useEffect(
    ()=>{
            getData().then(
                (result) => {
                    setProducts(result);
                    console.log(result)
                }
            )
    }, [cntx.updateHelper]
);

    return (
        <React.Fragment>
    {products.map((prd: Product, idx: number) => {
        return  (
            <React.Fragment key={prd.id}>
                <Link to='/Product' onClick={()=>cntx.setPrd(prd)}>
                <Flex>
                <ProductBox>
                            <Col>
                                    <ProductImg src={prd.imgs[0]} />
                            </Col>
                            <Col>
                                    <ProductBasicInfo>
                                        <Bold>
                                            {prd.author}<br/>
                                            '{prd.title}'<br/>
                                        </Bold>
                                        Released: {prd.releaseDate}<br/>
                                        Format: {prd.format}<br/>
                                        Format Details: {prd.formatDetails}<br/>
                                        {prd.quantity > 0
                                            ? <>Copies Left: {prd.quantity}<br/></>
                                            : <>Not Available<br/></>}
                                        <Bold>
                                            Price: {prd.price}PLN<br/>
                                        </Bold>
                                    </ProductBasicInfo>
                            </Col>
                    </ProductBox>
            </Flex>
                </Link>

            </React.Fragment>
        )
        
        } ) }
        </React.Fragment>
    )
}

export default AppShop;