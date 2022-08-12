import React from 'react';
import './Home.module.css';

class Home extends React.Component {



    render() {
        const { setPage } = this.props;
        return (
            <>
                <header>
                    <nav>
                        <button onClick={() => setPage('home')}>Главная страница</button>
                        <button onClick={() => setPage('login')}>Авторизация</button>
                        <button onClick={() => setPage('store')}>Магазин</button>
                    </nav>
                </header>
                <p>Hello</p>
            </>
        )

    }

}

export default Home;