export const Store = (props) => {
    const { setPage } = props;

    return (
        <header>
            <nav className='nav'>
                <button onClick={() => setPage('home')}>Super страница</button>
                <button onClick={() => setPage('login')}>Авторизация</button>
                <button onClick={() => setPage('store')}>Магазин</button>
            </nav>
        </header>
    );
};

export default Store;
