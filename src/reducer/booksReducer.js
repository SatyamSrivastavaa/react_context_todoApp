import { v1 as uuid } from 'uuid';

export const booksReducer = (state, {type, payload}) => {
    switch(type) {
        case 'ADD_BOOK': 
            return [
                ...state,
                {
                    title: payload.title,
                    author: payload.author,
                    id: uuid()
                }
            ]
        case 'DELETE_BOOK':
            return [
                ...state.filter(book => book.id !== payload)
            ]
        default: 
            return [
                ...state
            ]
    }
}