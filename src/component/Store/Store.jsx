import s from './Store.module.css';
import Phone from './Phone/Phone';

export const Store = (props) => {
    const { setPage } = props;

    return (
        <div className={s.store}>
            <header>
                <nav>
                    <button
                        className={s.nav_botton}
                        onClick={() => setPage('home')}
                    >
                        Главная страница
                    </button>
                    <button
                        className={s.nav_botton}
                        onClick={() => setPage('login')}
                    >
                        Авторизация
                    </button>
                    <button
                        className={s.nav_botton}
                        onClick={() => setPage('store')}
                    >
                        Магазин
                    </button>
                </nav>
            </header>
            <div className={s.store_row}>
                <Phone />
                <Phone />
                <Phone />
                <Phone />
            </div>
        </div>
    );
};

export default Store;
