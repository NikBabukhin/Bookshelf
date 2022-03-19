import s from "./PopupItem.module.css";

export const PopupItem=(props:any)=> {
    return (
        <div className={s.popup__item}>
            <span>{props.placeholderName}</span>
            <input className={s.popup__input} placeholder={props.nameInput}/>
        </div>
    )
}