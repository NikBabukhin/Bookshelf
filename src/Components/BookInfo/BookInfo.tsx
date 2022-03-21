import s from "./BookInfo.module.css"
import {DescriptionButton} from "../DescriptionButton/DescriptionButton";

export type BookDataType = {
    id: string,
    nameBook: string,
    authorName: string,
    description: string,
    imageSrc: string,
}

type BookInfoProps = {
    bookData: BookDataType,
    isDescriptionOpen: boolean,
    openDescriptionCallBack: ()=>void
}

export const BookInfo = (props:BookInfoProps) => {
    return (
        <div className={s.info__wrapper}>
            <div>
                <h3>Book name:</h3>
                <span>{props.bookData.nameBook}</span>
            </div>
            <div>
                <h3>Author name:</h3>
                <span>{props.bookData.authorName}</span>
            </div>
            <div>
                <DescriptionButton openDescription={props.openDescriptionCallBack} isOpened={props.isDescriptionOpen}/>
            </div>
        </div>
    )
}