import s from "./PopupItem.module.css";
import React, {ChangeEvent, useState} from "react";

type PopupItemType = {
    placeholderName: string,
    nameInput: string,
    inputValues: string,
    idInput: number,
    onChangeCallBack: (value:string, idInput:number)=> void,
}

export const PopupItem:React.FC<PopupItemType>=(props)=> {

    let [currentValue, setCurrentValue] = useState(props.inputValues)

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=> {
        setCurrentValue(event.currentTarget.value)
        console.log(event.currentTarget.value, props.idInput);
    }

    return (
        <div className={s.popup__item}>
            <span>{props.placeholderName}</span>
            <input className={s.popup__input} placeholder={props.nameInput} onChange={onChangeHandler} value={currentValue}/>
        </div>
    )
}