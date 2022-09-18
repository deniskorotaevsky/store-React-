import s from './Store.module.css';
import Phone from './Phone/Phone';
// import Layout from '../layout/layout';

const Store = () => {
    return (
        <>
            {/* <Layout /> */}
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

export default Store;
