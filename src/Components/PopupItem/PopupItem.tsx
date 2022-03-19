import s from "./PopupItem.module.css";
import {ChangeEvent, useState} from "react";

export const PopupItem=(props:any)=> {
    let [value, setValue] = useState('')

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=> {
        setValue(event.currentTarget.value);
        console.log(value);
    }

    return (
        <div className={s.popup__item}>
            <span>{props.placeholderName}</span>
            <input className={s.popup__input} placeholder={props.nameInput} onChange={onChangeHandler}/>
        </div>
    )
}