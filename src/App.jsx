import React from 'react';
import './App.css';
import { Login } from './component/Login/Login';
import { Home } from './component/Home/Home';
import { Store } from './component/Store/Store';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route index element={<Login />} />
                <Route path='store' element={<Store />} />
            </Routes>
        </>
    );
}

export default App;
