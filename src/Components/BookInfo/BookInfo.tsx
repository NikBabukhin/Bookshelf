import s from "./BookInfo.module.css"
import {DescriptionButton} from "../DescriptionButton/DescriptionButton";

export const BookInfo = () => {
    return (
        <div className={s.info__wrapper}>
            <div>
                <h3>Book name:</h3>
                <span>Clean Code</span>
            </div>
            <div>
                <h3>Author name:</h3>
                <span>Robert Cecil Martin</span>
            </div>
            <div>
                <DescriptionButton/>
            </div>
        </div>
    )
}