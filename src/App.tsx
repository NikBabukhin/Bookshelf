import React, {useState} from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";
import {v1} from 'uuid'
import {Popup} from "./Components/Popup/Popup";

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
    let [booksData, setBooksData] = useState(bookData)
    let filteredBooks = booksData;

    const openDescriptionCallBack = (id: string) => {
        booksData.map(element => {
            if (element.id === id) {
                element.isOpened = !element.isOpened
            }
        })
        setBooksData([...booksData])
    }

    const deleteBookSectionCallBack=(id: string) => {
        filteredBooks = booksData.filter(element => element.id !== id);
        setBooksData(filteredBooks);
    }


    return (
        <div className={'App'}>
            <h1 className={'Head'}>Welcome to the
                <span className={'Head__span'}>bookshelf</span>
            </h1>
            {filteredBooks.map(el => <BookSection
                bookData={el}
                bookImage={el.imageSrc}
                key={el.id}
                openDescriptionCallBack={() => openDescriptionCallBack(el.id)}
                deleteBookSection={()=>deleteBookSectionCallBack(el.id)}
            />)}
        <Popup/>
        </div>
    );
}

export default App;


/*Необходимо добавить кнопку РЕДАКТИРОВАТЬ,
а также, сделать модальное окно для добавления новых книг*/
