import React, {useState} from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";
import {Popup} from "./Components/Popup/Popup";
import {v1} from "uuid";


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

    const emptyValues = {
        imageSrc: '',
        nameBook: '',
        authorName: '',
        description: '',
    };
    const [idForPopup, setIdForPopup] = useState('')
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [bookData, setBooksData] = useState(props.state.bookData);
    const [buttonPopupName, setButtonPopupName] = useState<'Add' | 'Save Changes'>('Add');
    const [valueInput, setValuesInput] = useState(emptyValues)

    let filteredBooks = bookData;

    const deleteBookSectionCallBack = (id: string) => {
        filteredBooks = bookData.filter(element => element.id !== id);
        setBooksData(filteredBooks);
    }

    const closePopup = () => {
        setIsPopupOpened(false);
        setValuesInput({...emptyValues})
    }

    const openPopupForEditCallBack = (idInitiator: string | null) => {
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

    const popupOpenCallBack = (buttonName: 'Add' | 'Save Changes', idInitiator: string) => {
        setIdForPopup(idInitiator);
        if (idInitiator) {
            openPopupForEditCallBack(idInitiator)
        } else {

            setValuesInput(emptyValues)
            setIsPopupOpened(true);
        }
        setButtonPopupName(buttonName);
        setIsPopupOpened(!isPopupOpened);
    }

    const onClickMainHandler = (event: any) => {
        if (event.target.className.includes('closedPopup')) {
            setIsPopupOpened(false);
            setValuesInput(emptyValues);
        }
    }

    const inputsValueReader=(idInput:number, value:string)=> {
        if (idInput===1) {
            valueInput.imageSrc=value
        } else if(idInput===2) {
            valueInput.nameBook=value
        } else if(idInput===3){
            valueInput.authorName=value
        }else if(idInput===4) {
            valueInput.description = value
        }
    }

    const saveChanges = (id: string, buttonName: 'Add' | 'Save Changes') => {
        if (buttonName==='Save Changes') {
            filteredBooks.map(bookEl => {
                if (bookEl.id === id) {
                    bookEl.imageSrc = valueInput.imageSrc;
                    bookEl.nameBook = valueInput.nameBook;
                    bookEl.authorName = valueInput.authorName;
                    bookEl.description = valueInput.description;
                    console.log(valueInput.nameBook);
                    setBooksData([...filteredBooks]);
                }
            })
        } else {
            const newBook = {
                id: v1(),
                imageSrc: valueInput.imageSrc,
                nameBook: valueInput.nameBook,
                authorName: valueInput.authorName,
                description: valueInput.description,
            }
            setBooksData([newBook, ...filteredBooks])
        }

        setValuesInput(emptyValues);
        setIsPopupOpened(false);
    }

    console.log(valueInput);

    return (
        <div className={'App'} onClick={onClickMainHandler}>
            <h1 className={'Head'}>Welcome to the
                <span className={'Head__span'}> bookshelf</span>
            </h1>
            <button onClick={() => popupOpenCallBack('Add', '')}>Add new book</button>
            {filteredBooks.map(el => <BookSection
                bookData={el}
                bookImage={el.imageSrc}
                key={el.id}
                deleteBookSection={() => deleteBookSectionCallBack(el.id)}
                openPopupForEditCallBack={() => popupOpenCallBack('Save Changes', el.id)}
            />)}
            {isPopupOpened && <Popup buttonName={buttonPopupName}
                                     inputsValueReader={inputsValueReader}
                                     inputValues={valueInput}
                                     isOpen={isPopupOpened}
                                     saveChangesButton={saveChanges}
                                     closePopup={closePopup}
                                     idInitiator={idForPopup}

            />}
        </div>
    );
}

