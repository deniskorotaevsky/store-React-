import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => ({
    color: isActive ? 'blue' : 'black',
    borderBottom: isActive ? '1px solid rgb(0, 34, 128)' : '',
    paddingBottom: isActive ? '10px' : '',
});

const Layout = () => {
    return (
        <>
            <div
                style={{
                    width: '320px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'black',
                    padding: '10px ',
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
