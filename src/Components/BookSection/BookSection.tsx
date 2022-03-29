import React from "react";
import s from './BookSection.module.css'
import {BookDataType, BookInfo} from "../BookInfo/BookInfo";
import {BookImg} from "../BookImg/BookImg";


type SpecialTypeForProps = {
    bookData: BookDataType,
    bookImage: string,
    deleteBookSection: ()=>void
    openPopupForEditCallBack: ()=>void
}

export const BookSection = (props: SpecialTypeForProps) => {

    const onClickDeleteHandler =()=> {
        props.deleteBookSection();
    }

    const openPopupForEdit=()=> {
        props.openPopupForEditCallBack();
    }


    return (
        <div className={s.book__section}>
            <BookImg imageSrc={props.bookImage}/>
            <BookInfo bookData={props.bookData}/>
            <div className={s.btns__block}>
                <button onClick={openPopupForEdit}>Edit</button>
                <button onClick={onClickDeleteHandler}>Delete</button>
            </div>
        </div>

    )
}
