import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AppAbout from './Info/AppAbout';
import AppArchive from './Shop/AppArchive';
import AppContact from './Info/AppContact';
import AppNews from './Info/AppNews';
import AppNewsletter from './Info/AppNewsletter';
import AppArtists from './Info/AppArtists';
import AppShop from './Shop/AppShop';
import AppAuth from './Auth/AppAuth';
import styled from 'styled-components';
import AppRegister from './Auth/AppRegister';
import AppLogin from './Auth/AppLogin';
import HiddenDoor from './admin/HiddenDoor';
import EditProduct from './admin/shop/EditProduct';
import AddProductComponent from './admin/shop/AddProductComponent';
import EditProducts from './admin/shop/EditProducts';
import ContextProvider from './tools/ContextProvider';
import AppProduct from './Shop/Product';
import ShoppingCart from './Shop/ShoppingCart';
import AppCart from './admin/shop/orders/AppCart'

const Margin = styled.div`
margin: 10px;
padding: 10px;
`

const View: React.FC = () => {
    return (
        <React.Fragment>
            <ContextProvider>
                <Margin>
                    <Switch>
                        {/* <Route exact path='/' component={AppNews} /> */}
                        <Route exact path='/Artists' component={AppArtists} />
                        <Route exact path='/About' component={AppAbout} />
                        <Route exact path='/Archive' component={AppArchive} />
                        <Route exact path='/' component={AppShop} />
                        <Route exact path='/ShoppingCart' component={ShoppingCart} />
                        <Route exact path='/Contact' component={AppContact} />
                        <Route exact path='/Newsletter' component={AppNewsletter} />
                        <Route exact path='/User' component={AppAuth} />
                        <Route exact path='/Register' component={AppRegister} />
                        <Route exact path='/Login' component={AppLogin} />
                        <Route exact path='/HiddenDoor' component={HiddenDoor} />
                        <Route exact path='/EditProduct' component={EditProduct} />
                        <Route exact path='/EditProducts' component={EditProducts} />
                        <Route exact path='/AddProduct' component={AddProductComponent} />
                        <Route exact path='/Product' component={AppProduct} />
                        <Route exact path='/Cart' component={AppCart} />
                        </Switch>
                    </Margin>
            </ContextProvider>
        </React.Fragment>
    )
}

export default View;