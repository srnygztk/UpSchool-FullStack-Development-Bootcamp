import React, { useState } from 'react';
import '../styles/homePage.css';
import 'semantic-ui-css/semantic.min.css'
import {Input, Menu, Header, Icon, Dropdown, } from 'semantic-ui-react'

const HomePage = () => {
    // const [productType, setProductType] = useState<string>('');
    const [productAmount, setProductAmount] = useState<number>(0);

    // const handleProductTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setProductType(e.target.value);
    // };

    const handleProductAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductAmount(Number(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission and send the selected product type and amount to the backend
    };

    const options = [
        { key: 1, text: 'OnDiscount', value: 1 },
        { key: 2, text: 'NonDiscount', value: 2 },
        { key: 3, text: 'All', value: 3 },
    ]


    return (
        <div className="main-div">
            <div className="navbar">
                <div className="navbar-links">
                <a href="#">DashBoard</a>
                <a href="#">Login Page</a>
                <a href="#">Orders Page</a>
                <a href="#">Setting Page</a>
                <a href="#">User Page</a>
                </div>
                <div className="menu-sign">
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    
                </Menu.Menu>
                </div>
                <div className="signup-link">
                    <a href="#">Logout</a>
                </div>
            </div>
            <div className="header-div">
                <Header as='h2' icon textAlign='center'>
                    <Icon name='shopping basket' circular />
                    <Header.Content className="header-div">Welcome To UpStorage Shop</Header.Content>
                </Header>
                
            </div>
          
            <form className="option-form" onSubmit={handleSubmit}>
                <label>
                    <label className="labels"> What type of products do you want to crawl?</label>
                    <br/>
                    <Dropdown clearable options={options} selection />
                    {/*  value={productType} onChange={handleProductTypeChange}*/}
                    
                </label>
                <br />
                <label >
                    <label className="labels">How many items do you want to crawl?</label>
                    <br/>

                    <Input value={productAmount} onChange={handleProductAmountChange} labelPosition='right' type='text' placeholder='Amount'>
                        <input />
                    </Input>

                </label>
                <br/>
                <br/>
                <button type="submit"> Crawl </button>
            </form>
            {/* Link to Orders Page */}
            {/* Link to Settings Page */}
            {/* Link to Users Page */}

            <footer className="footer">
                <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
                </div>
            </footer>
         

        </div>
    );
};

export default HomePage;