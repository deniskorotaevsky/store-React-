import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
});

const Layout = () => {
    return (
        <>
            <div
                style={{
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'black',
                }}
            >
                <NavLink style={setActive} to='/home'>
                    Главная страница
                </NavLink>
                <NavLink style={setActive} to='/'>
                    Авторизация
                </NavLink>
                <NavLink style={setActive} to='/store'>
                    Магазин
                </NavLink>
            </div>

            <Outlet />
        </>
    );
};

export { Layout };
