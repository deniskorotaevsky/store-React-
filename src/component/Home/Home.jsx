import React from 'react';
import s from './Home.module.css';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Home(props) {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const { setPage } = props;

    useEffect(() => {
        fetchRecords(1);
    }, []);

    const columns = [
        {
            id: 'id',
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            id: 'id',
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            id: 'id',
            title: 'Роль',
            dataIndex: 'role',
            key: 'role',
        },
        {
            id: 'id',
            title: 'Дата создания',
            dataIndex: 'time',
            render: () => `${moment().format('DD.MM.YYYY HH:mm')}`,
            key: 'time',
        },
        {
            id: 'id',
            title: 'Действия',
            key: 'button',

            render: (record) => {
                return (
                    <>
                        <button
                            onClick={() => {
                                onDeleteUsers(record);
                            }}
                            style={{
                                background: '#00FFFF',
                                borderRadius: '5px',
                                borderColor: '#00FFFF',
                            }}
                        >
                            Удаление
                        </button>
                    </>
                );
            },
        },
    ];

    const fetchRecords = (offset) => {
        setLoading(true);
        axios
            .get(
                `https://test.relabs.ru/api/users/list?limit=5&offset=${
                    (offset - 1) * 5
                }`
            )
            .then((res) => {
                setDataSource(res.data.items);
                setTotalPages(res.data.total);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    };

    const onDeleteUsers = (record) => {
        setDataSource((pre) => {
            return pre.filter((users) => users.id !== record.id);
        });
    };

    return (
        <>
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

            {!dataSource.length > 0 ? (
                <span
                    style={{
                        marginLeft: '5px',
                    }}
                >
                    loading...
                </span>
            ) : (
                <div
                    className={s.table}
                    style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        marginLeft: '50px',
                    }}
                >
                    <h1>Список пользователей</h1>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            pageSize: 5,
                            total: totalPages,
                            onChange: (offset) => {
                                fetchRecords(offset);
                            },
                        }}
                    ></Table>
                </div>
            )}
        </>
    );
}
export default Home;
