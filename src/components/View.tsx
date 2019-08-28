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
import AddProductComponent from './admin/shop/AddProduct';
import EditProducts from './admin/shop/EditProducts';
import {ImgData} from './tools/ImgData';
import {TextData} from './tools/MyEditorData';

const Margin = styled.div`
margin: 10px;
padding: 10px;
`

const View: React.FC = () => {

    const [imgs, setImgs] = React.useState<string[]>([])
    const [text, setText] = React.useState<any>()

    return (
        <React.Fragment>
            <ImgData.Provider value={{imgs: imgs, setImgs: setImgs}}>
                <TextData.Provider value={{text: text, setText:setText}}>
                    <Margin>
                        <Switch>
                            <Route exact path='/' component={AppNews} />
                            <Route exact path='/Artists' component={AppArtists} />
                            <Route exact path='/About' component={AppAbout} />
                            <Route exact path='/Archive' component={AppArchive} />
                            <Route exact path='/Shop' component={AppShop} />
                            <Route exact path='/Contact' component={AppContact} />
                            <Route exact path='/Newsletter' component={AppNewsletter} />
                            <Route exact path='/User' component={AppAuth} />
                            <Route exact path='/Register' component={AppRegister} />
                            <Route exact path='/Login' component={AppLogin} />
                            <Route exact path='/HiddenDoor' component={HiddenDoor} />

                        </Switch>
                    </Margin>
                </TextData.Provider>
            </ImgData.Provider>
        </React.Fragment>
    )
}

export default View;