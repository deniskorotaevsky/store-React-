import React from 'react';
import './Home.module.css';
import moment from 'moment';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items2: []
        }
    }

    componentDidMount() {
        fetch('https://test.relabs.ru/api/users/list')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items2: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { setPage } = this.props;
        const { error, isLoaded, items2 } = this.state;
        if (error) {
            return <p>Error{error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <header>
                        <nav>
                            <button onClick={() => setPage('home')}>Главная страница</button>
                            <button onClick={() => setPage('login')}>Авторизация</button>
                            <button onClick={() => setPage('store')}>Магазин</button>
                        </nav>
                    </header>

                    <ul>
                        {items2.map(item => (
                            <li key={item.name}>
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.role}</div>
                                <div>{`${moment().format('DD.MM.YYYY HH:mm')}`}</div>
                            </li>
                        ))}
                    </ul>
                </>
            )
        }
    }
}

export default Home;