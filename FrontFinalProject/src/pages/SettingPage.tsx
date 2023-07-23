// pages/SettingPage.tsx

// @ts-ignore
import React from 'react';
import '../styles/settingPage.css';
import { Checkbox } from 'semantic-ui-react';

const SettingPage = () => {
    // Kullanıcının notifikasyon ayarlarını yönetin
    // 

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
            <h1>Settings</h1>
            <label className="labels">How do you want to receive your notifications? </label>
            <br/>
            <br/>
            
            <div className="checkbox-container">
                <div className="checkbox-item">
                    <Checkbox label="With E-Mail" toggle />
                </div>
                <br/>
                <div className="checkbox-item">
                    <Checkbox label="In-App Notification" toggle />
                </div>
                <br/>
                <div className="checkbox-item">
                    <Checkbox label="None" toggle />
                </div>
                <br/>
            </div>
        </div>
    );
};

export default SettingPage;
