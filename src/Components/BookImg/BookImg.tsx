import s from './BookImg.module.css'

type BookImgPropsType = {
    imageSrc: string
}

export const BookImg = ({imageSrc}: BookImgPropsType) => {
    return (
        <div className={s.book__wrapper}>
            <img
                className={s.book__image}
                src={imageSrc}
                alt={imageSrc ? imageSrc : 'Your image should be here'}
            />
        </div>
    )
}