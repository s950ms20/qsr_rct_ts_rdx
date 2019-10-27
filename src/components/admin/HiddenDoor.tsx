import React from 'react';
// import AddProductComponent from './shop/AddProductComponent';
// import AdminMenu from '../admin/menu/AdminMenu';
// import {Switch, Route} from 'react-router-dom';
// import EditProducts from './shop/EditProducts';

const HiddenDoor: React.FC = ()=> {
    return (
        <React.Fragment>
            <h2>ADD PRODUCT</h2>
            {/* <AddProductComponent/> */}
            <h2>EDIT PRODUCTS</h2>
            {/* <EditProducts/> */}
            {/* <AdminMenu/>
            <Switch>
                <Route exact path='AddProduct' component={AddProductComponent} />
                <Route exact path='EditProducts' component={EditProducts} />
                <Route exact path='AddNews' component={AddProductComponent} />
                <Route exact path='AddNews' component={AddProductComponent} />
                <Route exact path='EditNews' component={AddProductComponent} />
                <Route exact path='MenageUsers' component={AddProductComponent} />
                <Route exact path='CreateNewsletter' component={AddProductComponent} />
            </Switch> */}
          </React.Fragment>
    )
}

export default HiddenDoor;