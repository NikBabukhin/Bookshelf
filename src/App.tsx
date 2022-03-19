import React, {useState} from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";
import {v1} from 'uuid'
import {Popup} from "./Components/Popup/Popup";
import {log} from "util";

const imgSrc = "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg";
const descriptionBook = "Some simple text for test, not more";

const bookData = [
    {
        id: v1(),
        imageSrc: imgSrc,
        nameBook: 'Clean Code',
        authorName: 'Robert Cecil Martin',
        description: descriptionBook,
        isOpened: false
    },
    {
        id: v1(),
        imageSrc: imgSrc,
        nameBook: 'Some dirty Code',
        authorName: 'Robert Cecil Martin',
        description: descriptionBook,
        isOpened: false
    },
    {
        id: v1(),
        imageSrc: imgSrc,
        nameBook: 'Other book',
        authorName: 'Robert Cecil Martin',
        description: descriptionBook,
        isOpened: false
    },
    {
        id: v1(),
        imageSrc: imgSrc,
        nameBook: 'Some other book',
        authorName: 'Robert Cecil Martin',
        description: descriptionBook,
        isOpened: false
    },
]

function App() {

    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [booksData, setBooksData] = useState(bookData)
    let filteredBooks = booksData;

    const openDescriptionCallBack = (id: string) => {
        booksData.map(element => {
            if (element.id === id) {
                element.isOpened = !element.isOpened
            }
        })
        setBooksData([...booksData])
    }

    const deleteBookSectionCallBack = (id: string) => {
        filteredBooks = booksData.filter(element => element.id !== id);
        setBooksData(filteredBooks);
    }

    const openPopupForEditCallBack = (id: string) => {
        console.log(id);
        setIsPopupOpened(true);
    }


    const isPopupOpenCallBack = () => {
        setIsPopupOpened(!isPopupOpened);
    }

    const onClickMainHandler = (event: any) => {
        if (event.target.className.includes('closedPopup')) {
            setIsPopupOpened(false);
        }
    }

    const saveChangesButtonHandler = (src: string, name: string, authorName: string, description: string) => {
        let newBook = {
            id: v1(),
            imageSrc: src,
            nameBook: name,
            authorName: authorName,
            description: description,
            isOpened: false
        }
        setBooksData([newBook, ...booksData])
    };

    console.log(booksData);

    return (
        <div className={'App'} onClick={onClickMainHandler}>
            <h1 className={'Head'}>Welcome to the
                <span className={'Head__span'}> bookshelf</span>
            </h1>
            <button onClick={isPopupOpenCallBack}>Add new book</button>
            {filteredBooks.map(el => <BookSection
                bookData={el}
                bookImage={el.imageSrc}
                key={el.id}
                openDescriptionCallBack={() => openDescriptionCallBack(el.id)}
                deleteBookSection={() => deleteBookSectionCallBack(el.id)}
                openPopupForEditCallBack={() => openPopupForEditCallBack(el.id)}
            />)}
            <Popup isPopupOpen={isPopupOpenCallBack} isOpen={isPopupOpened}
                   saveChangesButton={saveChangesButtonHandler}/>
        </div>
    );
}

export default App;


/*Необходимо добавить кнопку РЕДАКТИРОВАТЬ,
а также, сделать модальное окно для добавления новых книг*/
