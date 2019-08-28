import React from 'react';
import {MyButton, Row, Col, Flex, ProductBox, ProductImg, ProductBasicInfo, Bold, ProductDetailInfo, GoToTheRight} from '.././../styles/Styles'
import { Editor, EditorState} from "draft-js";
import { newObject} from '../Data/ShopData';

interface Props {
    product: newObject
}


const Product: React.FC<Props> = ({product}) => {

    const desc_data = EditorState.createWithContent(product.desc);
    const [showMore, setShowMore] = React.useState(false);

    return (
        <React.Fragment>
            <Flex>
                <Row>
                    <ProductBox>
                            <Col>
                                    <ProductImg src={product.imgs[0]} />
                            </Col>
                            <Col>
                                    <ProductBasicInfo>
                                        <Bold>
                                            {product.author}<br/>
                                            '{product.title}'<br/>
                                        </Bold>
                                        Released: {product.releaseDate}<br/>
                                        Format: {product.format}<br/>
                                        Format Details: {product.formatDetails}<br/>
                                        {product.quantity > 0
                                            ? <>Copies Left: {product.quantity}<br/></>
                                            : <>Not Available<br/></>}
                                        <Bold>
                                            Price: {product.price}PLN<br/>
                                        </Bold>
                                    </ProductBasicInfo>
                                    <GoToTheRight>
                                        <MyButton onClick={()=>setShowMore(!showMore)}>More</MyButton>
                                    </GoToTheRight>
                            </Col>
                    </ProductBox>
                </Row>
                <Row>
                    {showMore ?
                        ( <>
                            <ProductDetailInfo>
                                <Editor editorState={desc_data} readOnly={true} onChange={()=>{}}/>
                            </ProductDetailInfo>
                        </> ) : null }
                </Row>
            </Flex>
        </React.Fragment>
    )
}

export default Product;