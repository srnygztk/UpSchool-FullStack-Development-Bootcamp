// pages/Orders.tsx

// @ts-ignore
import React from 'react';
import '../styles/ordersPage.css';
import 'semantic-ui-css/semantic.min.css'
import {Icon, Item} from 'semantic-ui-react';

const OrdersPage = () => {
    // Siparişleri ve sipariş eventlerini gösterin
    return (
        <div>
            <div className="main-div">
                <div className="navbar">
                    <div className="navbar-links">
                        <a href="#">DashBoard</a>
                        <a href="#">Login Page</a>
                        <a href="#">Orders Page</a>
                        <a href="#">Setting Page</a>
                        <a href="#">User Page</a>
                    </div>
                </div>
                </div>
            <h1>Orders</h1>
            <Item.Group>
                <Item>
                    <Icon name='shopping basket' circular />
                    <Item.Content>
                            <Item.Header> Product Name </Item.Header>
                            <Item.Meta> Description </Item.Meta>
                            <Item.Extra> Additional Details </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Icon name='shopping basket' circular />
                    <Item.Content>
                        <Item.Header as='a'>Product Name</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Icon name='shopping basket' circular />
                    <Item.Content>
                        <Item.Header as='a'>Product Name</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Icon name='shopping basket' circular />
                    <Item.Content>
                        <Item.Header as='a'>Product Name</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
                
            </Item.Group>
             
        </div>
    );
};

export default OrdersPage;
