import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Service from '../pages/Service'
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';
import Promotions from '../pages/Promotions';
import FAQ from '../pages/FAQ';
import '../index.css'
import Policy from '../pages/Policy';



function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="flex flex-col align-center">
                    {/* <AddNewBtn /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="promotions" element={<Promotions />} />
                        <Route path="services" element={<Service />} />
                        <Route path="products" element={<Products />} />
                        <Route path="about" element={<About />} />
                        <Route path="testimonials" element={<Testimonials />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="policy" element={<Policy />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>


        </>
    );
}

export default App;