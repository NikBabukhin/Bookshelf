import React from "react";
import s from './BookSection.module.css'
import {BookInfo} from "../BookInfo/BookInfo";
import {BookImg} from "../BookImg/BookImg";

export const BookSection = () => {
    return (
        <div className={s.book__section}>
            <BookImg/>
            <BookInfo/>
        </div>

    )
}