import s from './DescriptionButton.module.css'
import {useState} from "react";

export const DescriptionButton = (props: any) => {
    let [activeIsOpened, setActiveIsOpened] = useState(false)


    const onClickHandler = () => {
        setActiveIsOpened(!activeIsOpened)
        props.openDescription();
    }

    return (
        <button className={`${s.button} ${activeIsOpened ? s.active : ''}`} onClick={onClickHandler}>
            <span>Description</span>
            <p> &gt; </p>
        </button>
    )
}