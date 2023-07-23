// src/App.tsx

// @ts-ignore
import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import SettingPage from './pages/SettingPage';
import UserPage from './pages/UserPage';

// function AppContextProvider(props: { children: ReactNode }) {
//     return null;
// }

const App = () => {
    return (
       <>
            <Router>
                <Routes>
                    {/*<Route path="/" element={<LoginPage />} />*/}
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/settings" element={<SettingPage />} />
                    <Route path="/users" element={<UserPage />} />
                </Routes>
            </Router>
          
       </>
    );
};

export default App;
