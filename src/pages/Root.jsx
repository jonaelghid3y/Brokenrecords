import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom'; // Updated import


const Root = () => {



    return (
        <div id="rootdiv">
            <Header />
            <Outlet />
            <Footer />
        </div>


    );
};

export default Root;
