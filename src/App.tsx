import React, {useState} from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";
import {v1} from 'uuid'
import {Popup} from "./Components/Popup/Popup";

type BookDataType = {
    id: string,
    imageSrc: string,
    nameBook: string,
    authorName: string,
    description: string,
}

type AppStateType = {
    bookData: Array<BookDataType>
}

type AppPropsType = {
    state: AppStateType,
}

export const App: React.FC<AppPropsType> = (props) => {

    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [bookData, setBooksData] = useState(props.state.bookData);
    let [buttonPopupName, setButtonPopupName] = useState('')
    let filteredBooks = bookData;


    const deleteBookSectionCallBack = (id: string) => {
        filteredBooks = bookData.filter(element => element.id !== id);
        setBooksData(filteredBooks);
    }

    const openPopupForEditCallBack = (id: string) => {
        setButtonPopupName('Save Changes');
        setIsPopupOpened(true);
    }


    const isPopupOpenCallBack = (buttonName: string) => {
        setButtonPopupName(buttonName);
        setIsPopupOpened(!isPopupOpened);
    }

    const onClickMainHandler = (event: any) => {
        if (event.target.className.includes('closedPopup')) {
            setIsPopupOpened(false);
        }
    }

    const saveChangesButtonHandler = (src: string, name: string, authorName: string, description: string, id?: string) => {
        if (buttonPopupName === 'Add') {
            let newBook = {
                id: v1(),
                imageSrc: src,
                nameBook: name,
                authorName: authorName,
                description: description,
            }
            setBooksData([newBook, ...bookData]);
        } else if (buttonPopupName === 'Save changes') {
            bookData.map(bookEl => {
                if (bookEl.id === id) {
                    bookEl.imageSrc = src;
                    bookEl.nameBook = name;
                    bookEl.authorName = authorName;
                    bookEl.description = description;
                }
                return bookEl;
            })
        }
        setIsPopupOpened(false);
    }

    console.log(bookData);


    return (
        <div className={'App'} onClick={onClickMainHandler}>
            <h1 className={'Head'}>Welcome to the
                <span className={'Head__span'}> bookshelf</span>
            </h1>
            <button onClick={() => isPopupOpenCallBack('Add')}>Add new book</button>
            {filteredBooks.map(el => <BookSection
                bookData={el}
                bookImage={el.imageSrc}
                key={el.id}
                deleteBookSection={() => deleteBookSectionCallBack(el.id)}
                openPopupForEditCallBack={() => openPopupForEditCallBack(el.id)}
            />)}
            <Popup buttonName={buttonPopupName}
                   isPopupOpen={() => isPopupOpenCallBack(buttonPopupName)}
                   isOpen={isPopupOpened}
                   saveChangesButton={saveChangesButtonHandler}
            />
        </div>
    );
}


/*Сделать модальное окно для добавления новых книг*/
