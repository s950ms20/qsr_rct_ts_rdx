import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../../Data/mapTools';
import { connect } from 'react-redux';
import { Order, OrderedProduct } from '../../../Data/Types';
import { MyButton, Flex, ProductImg, ProductBasicInfo, ProductBox, Col, Bold, Row } from '../../../../styles/Styles';
import { Product, getData, findProducts } from '../../../Data/ShopData';

type Props = {
    order: Order;
    onINC_NMBR_OF_ITEM: any;
    onDEC_NMBR_OF_ITEM: any;
    onDELETE_PRODUCT_FROM_ORDER: any;
    ordPrd: OrderedProduct
}

const AppOrderedProduct: React.FC<Props>= (
    {
        order,
        onINC_NMBR_OF_ITEM,
        onDEC_NMBR_OF_ITEM,
        onDELETE_PRODUCT_FROM_ORDER,
        ordPrd,
    }
)=>{

const [products, setProducts] = React.useState<Product[]>([]);
const [currentProduct, setCurrentProduct] = React.useState<Product>()

React.useEffect(
    ()=>{
            getData().then(
                (result) => {
                    setProducts(result);
                    const selectedProduct = result.filter((elm)=>elm.id === ordPrd.product_id);
                    setCurrentProduct(selectedProduct[0])
                }
            );
    }, []
);

    return(
        <React.Fragment>
            {currentProduct ? (
                <>
            <Flex>
                <Row>
                    <ProductBox>
                            <Col>
                                    <ProductImg src={currentProduct.imgs[0]} />
                            </Col>
                            <Col>
                                    <ProductBasicInfo>
                                        <Bold>
                                            {currentProduct.author}<br/>
                                            '{currentProduct.title}'<br/>
                                        </Bold>
                                        Format: {currentProduct.format}<br/>
                                        Format Details: {currentProduct.formatDetails}<br/>
                                        Released / Preorder : {currentProduct.releaseDate}<br/>
                                        <Bold>
                                            Price: {currentProduct.price}PLN x {ordPrd.ordered_quantity}<br/>
                                            {order.status === 'ORDER IN PROGRESS' ? 
                ( <>
                    <MyButton onClick={()=>onINC_NMBR_OF_ITEM(ordPrd.product_id)}>+</MyButton>
                    <MyButton onClick={()=>onDEC_NMBR_OF_ITEM(ordPrd.product_id)}>-</MyButton>
                    <MyButton onClick={()=>onDELETE_PRODUCT_FROM_ORDER(ordPrd.product_id)}>DEL</MyButton>
                    </> ) : null
            }
                                        </Bold>
                                    </ProductBasicInfo>
                            </Col>
                    </ProductBox>
                </Row>
            </Flex>
                </> ) : null
            } 

        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (AppOrderedProduct);

