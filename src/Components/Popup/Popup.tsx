import s from './Popup.module.css'
import {PopupItem} from "../PopupItem/PopupItem";
import {useState} from "react";

export const Popup = (props: any) => {

    const onClickHandler = () => {
        props.closePopup();
    }
    const onClickHandlerSaveButton = () => {
        props.saveChangesButton(props.inputValues.imageSrc, props.inputValues.nameBook, props.inputValues.authorName, props.inputValues.description)
    }
    const onChangeInputCallBack = (value: string, idInput: number) => {
        console.log(value, idInput);
    }

    return (
        <div className={`${s.popup} ${props.isOpen ? s.open : ""} closedPopup`}>
            <div className={s.popup__body}>
                <h3>Please, edit Book</h3>
                <button className={s.popup__btn} onClick={onClickHandler}>x</button>
                <PopupItem
                    idInput={1}
                    nameInput={'Enter image book URL...'}
                    placeholderName={'Image URL:'}
                    inputValues={props.inputValues.imageSrc}
                    onChangeCallBack={onChangeInputCallBack}
                />
                <PopupItem
                    idInput={2}
                    nameInput={'Enter name book...'}
                    placeholderName={'Book Name:'}
                    inputValues={props.inputValues.nameBook}
                    onChangeCallBack={onChangeInputCallBack}/>
                <PopupItem
                    idInput={3}
                    nameInput={"Enter author's book name..."}
                    placeholderName={'Author name:'}
                    inputValues={props.inputValues.authorName}
                    onChangeCallBack={onChangeInputCallBack}/>
                <PopupItem
                    idInput={4}
                    nameInput={'Enter description of book...'}
                    placeholderName={'Description:'}
                    inputValues={props.inputValues.description}
                    onChangeCallBack={onChangeInputCallBack}/>
                <button onClick={onClickHandlerSaveButton}>{props.buttonName}</button>
                <button onClick={onClickHandler}>Cancel</button>
            </div>
        </div>
    )
}