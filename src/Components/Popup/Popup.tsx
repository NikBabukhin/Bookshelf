import s from './Popup.module.css'
import {PopupItem} from "../PopupItem/PopupItem";

export const Popup = (props: any) => {

    const onClickHandler = () => {
        props.isPopupOpen()
    }
    const onClickHandlerSaveButton=()=> {
        props.saveChangesButton()
    }

    return (
        <div className={`${s.popup} ${props.isOpen ? s.open: ""} closedPopup`}>
            <div className={s.popup__body}>
                <h3>Please, edit Book</h3>
                <button className={s.popup__btn} onClick={onClickHandler}>x</button>
                <PopupItem nameInput={'Enter image book URL...'} placeholderName={'Image URL:'}/>
                <PopupItem nameInput={'Enter name book...'}  placeholderName={'Book Name:'}/>
                <PopupItem nameInput={"Enter author's book name..."}  placeholderName={'Author name:'}/>
                <PopupItem nameInput={'Enter description of book...'}  placeholderName={'Description:'}/>
                <button onClick={onClickHandlerSaveButton}>{props.buttonName}</button>
                <button onClick={onClickHandler}>Cancel</button>
            </div>
        </div>
    )
}