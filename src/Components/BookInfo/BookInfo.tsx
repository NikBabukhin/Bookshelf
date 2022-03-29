import s from "./BookInfo.module.css"

export type BookDataType = {
    id: string,
    nameBook: string,
    authorName: string,
    yearOfIssue: number,
}

type BookInfoProps = {
    bookData: BookDataType,
}

export const BookInfo = (props: BookInfoProps) => {
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
                <h3>Year of issue:</h3>
                <span>{props.bookData.yearOfIssue}</span>
            </div>
        </div>
    )
}