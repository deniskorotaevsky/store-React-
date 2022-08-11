import s from './Login.module.css';
import { useEffect, useState } from 'react';

const Login = (props) => {
    const { setPage } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный адрес электронной почты');
        } else {
            setEmailError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value.trim());
        const re =
            /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (!re.test(String(e.target.value))) {
            console.log(e.target.value.length);
            setPasswordError('Пароль должен содержать не менее 8 символов');
        } else {
            setPasswordError('');
        }
    };

    return (
        <div className={s.registration}>
            <div className={s.registration_pole}>
                <h1>Авторизация</h1>

                <form onSubmit={() => setPage('home')}>
                    <div>
                        <label>
                            <p>Адрес электронной почты</p>
                            <input
                                value={email}
                                onChange={(e) => emailHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                type='text'
                                name='email'
                            />
                            {emailDirty && emailError && (
                                <div style={{ color: 'red' }}>{emailError}</div>
                            )}
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Пароль</p>
                            <input
                                onChange={(e) => passwordHandler(e)}
                                value={password}
                                onBlur={(e) => blurHandler(e)}
                                type='password'
                                name='password'
                            />
                            {passwordError && passwordDirty && (
                                <div style={{ color: 'black' }}>
                                    {passwordError}
                                </div>
                            )}
                        </label>
                    </div>
                    <button
                        disabled={!formValid}
                        className={s.comeInBtn}
                        type='submit'
                    >
                        Авторизация
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;