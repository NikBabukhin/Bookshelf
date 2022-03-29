import s from "./PopupItem.module.css";
import React, {ChangeEvent, useState} from "react";

type PopupItemType = {
    type?: string,
    placeholderName: string,
    nameInput: string,
    inputValues: string,
    idInput: number,
    onChangeCallBack: (idInput: number, value: string) => void,
}

export const PopupItem: React.FC<PopupItemType> = (props) => {

    let [currentValue, setCurrentValue] = useState<string>(props.inputValues)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.currentTarget.value)
        props.onChangeCallBack(props.idInput, event.currentTarget.value)
    }


    return (
        <div className={s.popup__item}>
            <span>{props.placeholderName}</span>
            <input
                type={props.type}
                className={`${s.popup__input}`}
                placeholder={props.nameInput}
                onChange={onChangeHandler}
                value={currentValue}/>
        </div>
    )
}