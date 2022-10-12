import s from './Store.module.css';
import Phone from './Phone/Phone';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Store = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} />
            </Routes>
            <div className={s.store}>
                <div className={s.store_row}>
                    <Phone />
                    <Phone />
                    <Phone />
                    <Phone />
                </div>
            </div>
        </>
    );
};

export { Store };
