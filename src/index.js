import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header.js";
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import LogIn from './pages/LogIn.js';
import Stores from './pages/Stores.js';
import Main from "./pages/Main.js";
import Products from "./pages/Products.js";

export default function App() {


    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/stores' element={<Stores />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);