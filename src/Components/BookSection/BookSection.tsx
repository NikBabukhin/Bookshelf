import React, {useState} from "react";
import s from './BookSection.module.css'
import {BookDataType, BookInfo} from "../BookInfo/BookInfo";
import {BookImg} from "../BookImg/BookImg";
import {DescriptionBlock} from "../DescriptionBlock/DescriptionBlock";

type SpecialTypeForProps = {
    bookData: BookDataType,
    bookImage: string,
    deleteBookSection: ()=>void
    openPopupForEditCallBack: ()=>void
}

export const BookSection = (props: SpecialTypeForProps) => {

    let [activeIsOpened, setActiveIsOpened] = useState(false);

    const onClickDeleteHandler =()=> {
        props.deleteBookSection();
    }

    const openPopupForEdit=()=> {
        props.openPopupForEditCallBack();
    }

    const openDescriptionHandler=()=> {
        setActiveIsOpened(!activeIsOpened);
    }

    return (
        <div className={s.book__section}>
            <BookImg imageSrc={props.bookImage}/>
            <BookInfo bookData={props.bookData}
                      openDescriptionCallBack={openDescriptionHandler}
                      isDescriptionOpen = {activeIsOpened}
            />
            <DescriptionBlock
                description={props.bookData.description}
                isOpened={activeIsOpened}
                idBlocks={props.bookData.id}/>
            <div className={s.btns__block}>
                <button onClick={openPopupForEdit}>Edit</button>
                <button onClick={onClickDeleteHandler}>Delete</button>
            </div>
        </div>

    )
}
