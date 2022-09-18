import React from 'react';
import './App.css';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Store from './component/Store/Store';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './component/Layout/Layout';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    <Route index path='/' element={<Login />} />
                    <Route path='store' element={<Store />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
