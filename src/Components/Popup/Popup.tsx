import s from './Popup.module.css'
import {useState} from "react";

export const Popup = (props: any) => {
    const [isPopupOpened, setIsPopupOpened] = useState(true);

    const onClickHandler=()=> {
        setIsPopupOpened(!isPopupOpened);
    }

    return (
        <div className={`${s.popup} ${isPopupOpened? "" : s.closed}`}>
            <div className={s.popup__body}>
                <h3>Please, edit Book</h3>
                <button className={s.popup__btn} onClick={onClickHandler}>x</button>
                <div className={s.popup__item}>
                    <span>Image URL:</span>
                    <input className={s.popup__input} placeholder={'Enter image book URL...'}/>
                </div>
                <div className={s.popup__item}>
                    <span>Name Book:</span>
                    <input className={s.popup__input} placeholder={'Enter name book...'}/>
                </div>
                <div className={s.popup__item}>
                    <span>Book author:</span>
                    <input className={s.popup__input} placeholder={"Enter author's book name..."}/>
                </div>
                <div className={s.popup__item}>
                    <span>Description:</span>
                    <input className={s.popup__input} placeholder={'Enter description of book...'}/>
                </div>
            </div>
        </div>
    )
}