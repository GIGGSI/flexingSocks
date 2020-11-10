import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom'


import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ContactPage from "./pages/ContactPage";
import DefaultPage from "./pages/DefaultPage";
import CartPage from "./pages/CartPage";
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import CashDesk from "./pages/CashDesk";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ScrollToTop />
                <Sidebar />
                <SideCart />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/products" exact component={ProductsPage} />
                    <Route path="/products/:id" component={SingleProductPage} />
                    <Route path="/cart" component={CartPage} />

                    <Route path='/cashdesk' component={CashDesk} />
                    <Route component={DefaultPage} />
                </Switch>


                <Footer />
            </>
        );
    }
}

export default App;
