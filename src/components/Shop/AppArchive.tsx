import React from 'react';
import {getData, Product} from '../Data/ShopData';
import { Row, Col, Flex, MyButton, Bold } from '../../styles/Styles';
import styled from 'styled-components';
import {ContextData} from '../tools/ContextData';

const ImgDiv = styled.div`
background-image: url( ${props => props.title ? props.title : null});
background-repeat: no-repeat;
height: 60vh;
border: 1px solid black;
margin: 5px;
padding: 5px;
display: flex;
`

const Info = styled.div`
display: flex;
opacity: 0;
color: white;
padding: 15px;
align-self: flex-end;
height:40%;
width: 100%;
background-color: rgba(41,41,41, .5);
&:hover{
    opacity: 1;
}
`

const AppArchive: React.FC = () => {
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
)

    return (
        <React.Fragment>
            <Flex>
                <Row>
                    {products.map((p)=>{
                        return <React.Fragment key={p.id}>
                            <ImgDiv title={p.imgs[0]}>
                                <Info>
                                    <Col>
                                    <h2>{p.author} - {p.title}</h2>
                                    Released: {p.releaseDate}<br/>
                                        Format: {p.format}<br/>
                                        Format Details: {p.formatDetails}<br/>
                                        {p.quantity > 0
                                            ? <>Copies Left: {p.quantity}<br/></>
                                            : <>Not Available<br/></>}
                                        <Bold>
                                            Price: {p.price}PLN<br/>
                                        </Bold>
                                        <MyButton>More</MyButton>
                                            </Col>
                                </Info>
                            </ImgDiv>
                        </React.Fragment>
                    })}
                </Row>
            </Flex>


        </React.Fragment>
    )
}

export default AppArchive;