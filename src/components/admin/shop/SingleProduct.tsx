import React from 'react';
import {Product} from '../../Data/ShopData';
import { Link } from 'react-router-dom'
import {  Flex, InfoField, ImgSmall }from '../../../styles/Styles';
import {ContextData} from '../../tools/ContextData';

interface Props {
    prd: Product
}

const SIngleProduct: React.FC<Props> = ({prd}) => {
    const PrdData = React.useContext(ContextData);
    return (
        <React.Fragment>
            <Link to='/EditProduct' onClick={()=>PrdData.setPrd(prd)}>
            <Flex>
                    <InfoField>
                    {prd.author} - {prd.title} ({prd.releaseDate}) {prd.format} ({prd.formatDetails}) <br/>
                    </InfoField>
                        <ImgSmall src={prd.imgs[0]} title="cover art"/>
            </Flex>
            </Link>
        </React.Fragment>
    )
}

export default SIngleProduct