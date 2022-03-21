import s from './DescriptionButton.module.css'
import {useState} from "react";

export const DescriptionButton = (props: any) => {

    const onClickHandler = () => {
        props.openDescription();
    }

    return (
        <button className={`${s.button} ${props.isOpened ? s.active : ''}`} onClick={onClickHandler}>
            <span>Description</span>
            <p> &gt; </p>
        </button>
    )
}