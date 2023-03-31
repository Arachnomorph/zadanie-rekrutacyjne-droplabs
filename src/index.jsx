import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header.jsx";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import LogIn from './pages/LogIn.jsx';
import Stores from './pages/Stores.jsx';
import Main from "./pages/Main.jsx";
import Products from "./pages/Products.jsx";

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