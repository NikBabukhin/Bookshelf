import s from './BookImg.module.css'

export const BookImg = () => {
    return (
        <div className={s.book__wrapper}>
            <img
                className={s.book__image}
                src={"https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"}
                alt={'Your image should be here'}
            />
        </div>
    )
}