import s from './Popup.module.css'
import {PopupItem} from "../PopupItem/PopupItem";

export const Popup = (props: any) => {

    const onClickHandler = () => {
        props.closePopup();
    }
    const onClickHandlerSaveButton = () => {
        props.saveChangesButton(props.idInitiator, props.buttonName);
    }
    const onChangeCallBack=(idInput:number, value:string)=> {
        props.inputsValueReader(idInput, value)
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
                    onChangeCallBack={onChangeCallBack}
                />
                <PopupItem
                    idInput={2}
                    nameInput={'Enter name book...'}
                    placeholderName={'Book Name:'}
                    inputValues={props.inputValues.nameBook}
                    onChangeCallBack={onChangeCallBack}
                />
                <PopupItem
                    idInput={3}
                    nameInput={"Enter author's book name..."}
                    placeholderName={'Author name:'}
                    inputValues={props.inputValues.authorName}
                    onChangeCallBack={onChangeCallBack}
                />
                <PopupItem
                    type={'number'}
                    idInput={4}
                    nameInput={'Enter description of book...'}
                    placeholderName={'Year of issue'}
                    inputValues={props.inputValues.yearOfIssue}
                    onChangeCallBack={onChangeCallBack}
                />
                { props.buttonName==='Save Changes'? <button onClick={onClickHandlerSaveButton}>{props.buttonName}</button>: false}
                { props.buttonName==='Add'? <button onClick={onClickHandlerSaveButton}>{props.buttonName}</button>: false}
                <button onClick={onClickHandler}>Cancel</button>
            </div>
        </div>
    )
}