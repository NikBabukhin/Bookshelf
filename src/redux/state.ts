import {v1} from "uuid";

export const state = {
    bookData: [
        {
            id: v1(),
            imageSrc: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
            nameBook: 'Clean Code',
            authorName: 'Robert Cecil Martin',
            yearOfIssue: 2014,
        },
        {
            id: v1(),
            imageSrc: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
            nameBook: 'Some dirty Code',
            authorName: 'Robert Cecil Martin',
            yearOfIssue: 2012,
        },
    ]

}