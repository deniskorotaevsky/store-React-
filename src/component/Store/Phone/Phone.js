import s from './Phone.module.css';
import iPhone from '../../../iPhone.jpg';
import { ReactComponent as Star } from '../../../star.svg';
import { ReactComponent as Heart } from '../../../heart.svg';

const Phone = () => {

    return (
        <div className={s.container}>
            <div className={s.iPhone_wrap}>
                <div className={s.iPhoneImg}>
                    <img src={iPhone} alt='iPhone' />
                </div>

                <div className={s.iPhone_aside}>
                    <div className={s.prices}>
                        86 956&nbsp;<span className={s.rub}>Р</span>
                        <del className={s.startingPrice}>
                            99 990 <del className={s.rub}>Р</del>
                        </del>
                    </div>
                    <p className={s.totalPrice}>
                        85 251 <span className={s.rub}>Р</span>
                    </p>

                    <p className={s.characteristics}>
                        Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532x1170
                        / OLED / 128 ГБ
                    </p>

                    <div className={s.star_box}>
                        <div className={s.star_row}>
                            <Star className={s.star} />
                            <Star className={s.star} />
                            <Star className={s.star} />
                            <Star className={s.star} />
                            <Star className={s.star} />
                        </div>
                        <p className={s.star_grade}>87</p>
                    </div>

                    <p className={s.installmentPlan}>Рассрочка 0-0-6</p>
                    <div className={s.cart}>
                        <p>В корзину</p>
                        <div>
                            <Heart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;