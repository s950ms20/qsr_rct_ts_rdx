import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../Data/mapTools';
import {MyButton, Row, Col, Flex, ProductBox, ProductImg, ProductBasicInfo, Bold, ProductDetailInfo, GoToTheRight} from '.././../styles/Styles'
import { Editor} from "draft-js";
import { Product } from '../Data/ShopData';
import {ContextData} from '../tools/ContextData';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

type Props = {
    onADD_PRODUCT_TO_CART: any
}

const AppProduct: React.FC<Props> = ({onADD_PRODUCT_TO_CART}) => {
    const [showMore, setShowMore] = React.useState(false);
    const ctx = React.useContext(ContextData);
    const prd: Product = ctx.prd;
    const userName = ctx.userName;

    return (
        <React.Fragment>
        { prd !== undefined ? (
            <React.Fragment>
            <Flex>
                <Row>
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
                                        {prd.id}<br/>
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
                                    <GoToTheRight>
                                        <MyButton onClick={()=>setShowMore(!showMore)}>More Info</MyButton>
                                        <MyButton onClick={()=>onADD_PRODUCT_TO_CART(prd.id, userName, prd.price)}>Add To Cart</MyButton>
                                        <Link to='/'><MyButton>Go Back</MyButton></Link>
                                    </GoToTheRight>
                            </Col>
                    </ProductBox>
                </Row>
                <Row>
                    {showMore ?
                        ( <>
                            <ProductDetailInfo>
                                <Editor editorState={prd.desc} readOnly={true} onChange={()=>{}}/>
                            </ProductDetailInfo>
                        </> ) : null }
                </Row>
            </Flex>
        </React.Fragment>
            ) : null }
                    </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppProduct);