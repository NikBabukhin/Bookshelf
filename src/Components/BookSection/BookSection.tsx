import React from "react";
import s from './BookSection.module.css'
import {BookDataType, BookInfo} from "../BookInfo/BookInfo";
import {BookImg} from "../BookImg/BookImg";
import {DescriptionBlock} from "../DescriptionBlock/DescriptionBlock";

type SpecialTypeForProps = {
    bookData: BookDataType,
    bookImage: string,
    openDescriptionCallBack: ()=>void
    deleteBookSection: ()=>void
    openPopupForEditCallBack: ()=>void
}

export const BookSection = (props: SpecialTypeForProps) => {

    const deleteOnClickHandler =()=> {
        props.deleteBookSection();
    }

    const openPopupForEdit=()=> {
        props.openPopupForEditCallBack();
    }

    return (
        <div className={s.book__section}>
            <BookImg imageSrc={props.bookImage}/>
            <BookInfo bookData={props.bookData}
                      openDescriptionCallBack={props.openDescriptionCallBack}/>
            <DescriptionBlock
                description={props.bookData.description}
                isOpened={props.bookData.isOpened}
                idBlocks={props.bookData.id}/>
            <div className={s.btns__block}>
                <button onClick={openPopupForEdit}>Edit</button>
                <button onClick={deleteOnClickHandler}>Delete</button>
            </div>
        </div>

    )
}