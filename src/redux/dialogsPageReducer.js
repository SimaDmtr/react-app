const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

let initialState = {
    messages: [
        {id: '1', message: 'Привет'},
        {id: '2', message: 'Как дела?'},
        {id: '2', message: 'У тебя волчанка'},
        {id: '2', message: 'Я бы с радостью послушал еще, но мне как-то пофиг'},
        {id: '2', message: 'У вас двоих много общего — вы оба идиоты.'},
        {id: '2', message: 'Если не хотите портить с человеком отношения – не мешайте ему врать.'},
        {id: '2', message: 'Все паршиво... но нужно иногда находить повод для улыбки!'},
        {id: '2', message: 'Не нравится ответ — не задавай вопрос.'},
        {id: '2', message: 'Я солгал'},
        {id: '2', message: 'Не нравится? Выходы есть на всех этажах.'},
        {id: '2', message: 'Другого меня у тебя не будет.'},
        {id: '2', message: 'Знаешь, почему ты черный?'},
        {id: '2', message: 'Это припадок или он так танцует?'},
        {id: '1', message: 'Привет'},
        {id: '2', message: 'Как дела?'},
        {id: '2', message: 'У тебя волчанка'},
        {id: '2', message: 'Я бы с радостью послушал еще, но мне как-то пофиг'},
        {id: '2', message: 'У вас двоих много общего — вы оба идиоты.'},
        {id: '2', message: 'Если не хотите портить с человеком отношения – не мешайте ему врать.'},
        {id: '2', message: 'Все паршиво... но нужно иногда находить повод для улыбки!'},
        {id: '2', message: 'Не нравится ответ — не задавай вопрос.'},
        {id: '2', message: 'Я солгал'},
        {id: '2', message: 'Не нравится? Выходы есть на всех этажах.'},
        {id: '2', message: 'Другого меня у тебя не будет.'},
        {id: '2', message: 'Знаешь, почему ты черный?'},
        {id: '2', message: 'Это припадок или он так танцует?'}
    ],
    newMessageText: "Write here...",
    dialogs: [
        {id: '1', name: 'Дима'},
        {id: '2', name: 'Сергей'},
        {id: '3', name: 'Иван'},
        {id: '4', name: 'Влад'},
        {id: '5', name: 'Ярык'},
        {id: '6', name: 'Марк'},
        {id: '7', name: 'Илья'},
        {id: '9', name: 'Хаус'}
    ]
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.updatedText;
            break;
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
    }

    return state;
};
export const sendMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};
export const updateMessageTextActionCreated = (updatedMessage) => {
    return {type: ADD_NEW_MESSAGE_TEXT, updatedText: updatedMessage}
};
export default dialogsPageReducer;