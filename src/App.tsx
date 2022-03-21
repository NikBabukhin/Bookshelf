import React, {useState} from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";
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
    const [buttonPopupName, setButtonPopupName] = useState<'Add' | 'Save Changes'>('Add');
    const [valueInput, setValuesInput] = useState({
        imageSrc: '',
        nameBook: '',
        authorName: '',
        description: '',
    })
    let filteredBooks = bookData;
    console.log(valueInput,'valueInput');
    const deleteBookSectionCallBack = (id: string) => {
        filteredBooks = bookData.filter(element => element.id !== id);
        setBooksData(filteredBooks);
    }

    const closePopup = () => {
        setIsPopupOpened(false);
    }

    const openPopupForEditCallBack = (idInitiator: string) => {
        filteredBooks.map(bookEl => {
            if (bookEl.id === idInitiator) {
                setValuesInput(() => ({
                    imageSrc: bookEl.imageSrc,
                    nameBook: bookEl.nameBook,
                    authorName: bookEl.authorName,
                    description: bookEl.description,
                }))
            }
        })
        setButtonPopupName('Save Changes');
        setIsPopupOpened(true);
    }

// useEffect(()=>{
//     const openPopupForEditCallBack1 = (idInitiator: string) => {
//         filteredBooks.map(bookEl => {
//         if (bookEl.id === idInitiator) {
//             setValuesInput({
//                 imageSrc: bookEl.imageSrc,
//                 nameBook: bookEl.nameBook,
//                 authorName: bookEl.authorName,
//                 description: bookEl.description,
//             })
//         }
//     },[])
//     setIsPopupOpened(true);
// },[])

    const popupOpenCallBack = (buttonName: 'Add' | 'Save Changes', idInitiator: string) => {
        if (idInitiator !== '0') {
          openPopupForEditCallBack(idInitiator)
        } else {
            setValuesInput({
                imageSrc: '',
                nameBook: '',
                authorName: '',
                description: '',
            })
            setIsPopupOpened(true);
        }
        console.log(idInitiator);
        setButtonPopupName(buttonName);
        setIsPopupOpened(!isPopupOpened);
    }

    const onClickMainHandler = (event: any) => {
        if (event.target.className.includes('closedPopup')) {
            setIsPopupOpened(false);
        }
    }

    const saveChanges = (id: string) => {
        setIsPopupOpened(false);
    }

    return (
        <div className={'App'} onClick={onClickMainHandler}>
            <h1 className={'Head'}>Welcome to the
                <span className={'Head__span'}> bookshelf</span>
            </h1>
            <button onClick={() => popupOpenCallBack('Add', '0')}>Add new book</button>
            {filteredBooks.map(el => <BookSection
                bookData={el}
                bookImage={el.imageSrc}
                key={el.id}
                deleteBookSection={() => deleteBookSectionCallBack(el.id)}
                openPopupForEditCallBack={() => popupOpenCallBack('Save Changes', el.id)}
            />)}
            {isPopupOpened && <Popup buttonName={buttonPopupName}
                                           inputValues={valueInput}
                                           isOpen={isPopupOpened}
                                           saveChangesButton={saveChanges}
                                           closePopup={closePopup}
            />}
        </div>
    );
}

/*let currentValues = {
    imageSrc: bookEl.imageSrc,
    nameBook: bookEl.nameBook,
    authorName: bookEl.authorName,
    description: bookEl.description
}*/
/*Сделать модальное окно для добавления новых книг*/
