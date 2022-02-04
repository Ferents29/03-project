const ADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE';
const TEXT_MESSAGE_CHANGE = 'TEXT-MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Vladimir', surname: 'Ferents', photo: '', location: {country: 'Ukraine', city: 'Uzgorod'}},
        {id: 2, name: 'Ivan', surname: 'Kirilenko', photo: '', location: {country: 'USA', city: 'Vashington'}},
        {id: 3, name: 'Serg', surname: 'Fedinets', photo: '', location: {country: 'Spain', city: 'Madrid'}},
        {id: 4, name: 'Olga', surname: 'Ambarova', photo: '', location: {country: 'Balarus', city: 'Minsk'}},
        {id: 5, name: 'Stepan', surname: 'Dolgosh', photo: '', location: {country: 'Germany', city: 'Munich'}},
    ],
    messageData: [
        {id: 1, messageBody: 'Hi, I am Vladimir'},
        {id: 2, messageBody: 'Hi, I am Ivan'},
        {id: 3, messageBody: 'Hi, I am Serg'},
        {id: 4, messageBody: 'Hi, I am Olga'},
        {id: 5, messageBody: 'Hi, I am Stepan'},
    ],
    newTextMessage: "",
};
let dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TEXT_MESSAGE: {
            let newTextMessage = {
                id:6,
                messageBody:state.newTextMessage,
            }
            return {
                ...state,
                messageData: [...state.messageData, newTextMessage],
                newTextMessage: '',
            }
        }
        case TEXT_MESSAGE_CHANGE: {
            return {
                ...state,
                newTextMessage: action.textMessageChange,
            }
        }
        default: return state;
    }
}
export const addTextMessageAC = () => {
    return {
        type:'ADD-TEXT-MESSAGE',
    }
}
export const onTextMessageChangeAC = (textMessageChange) => {
    debugger
    return {
        type:'TEXT-MESSAGE-CHANGE',
        textMessageChange:textMessageChange,
    }
}

export default dialogsReducer;