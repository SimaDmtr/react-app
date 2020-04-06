const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

let initialState = {
    messages: [
        {
            id: '1',
            message: 'Привет'
        },
        {
            id: '2',
            message: 'Как дела?'
        },
        {
            id: '2',
            message: 'У тебя волчанка'
        },
        {
            id: '2',
            message: 'Я бы с радостью послушал еще, но мне как-то пофиг'
        },
        {
            id: '2',
            message: 'У вас двоих много общего — вы оба идиоты.'
        },
        {
            id: '2',
            message: 'Если не хотите портить с человеком отношения – не мешайте ему врать.'
        },
        {
            id: '2',
            message: 'Все паршиво... но нужно иногда находить повод для улыбки!'
        },
        {
            id: '2',
            message: 'Не нравится ответ — не задавай вопрос.'
        },
        {
            id: '2',
            message: 'Я солгал'
        },
        {
            id: '2',
            message: 'Не нравится? Выходы есть на всех этажах.'
        },
        {
            id: '2',
            message: 'Другого меня у тебя не будет.'
        },
        {
            id: '2',
            message: 'Знаешь, почему ты черный?'
        },
        {
            id: '2',
            message: 'Это припадок или он так танцует?'
        },
        {
            id: '1',
            message: 'Привет'
        },
        {
            id: '2',
            message: 'Как дела?'
        },
        {
            id: '2',
            message: 'У тебя волчанка'
        },
        {
            id: '2',
            message: 'Я бы с радостью послушал еще, но мне как-то пофиг'
        },
        {
            id: '2',
            message: 'У вас двоих много общего — вы оба идиоты.'
        },
        {
            id: '2',
            message: 'Если не хотите портить с человеком отношения – не мешайте ему врать.'
        },
        {
            id: '2',
            message: 'Все паршиво... но нужно иногда находить повод для улыбки!'
        },
        {
            id: '2',
            message: 'Не нравится ответ — не задавай вопрос.'
        },
        {
            id: '2',
            message: 'Я солгал'
        },
        {
            id: '2',
            message: 'Не нравится? Выходы есть на всех этажах.'
        },
        {
            id: '2',
            message: 'Другого меня у тебя не будет.'
        },
        {
            id: '2',
            message: 'Знаешь, почему ты черный?'
        },
        {
            id: '2',
            message: 'Это припадок или он так танцует?'
        }
    ],
    newMessageText: "Write here...",
    dialogs: [
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
            id: '1',
            name: 'Дима',
            status: 'Online'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
            id: '2',
            name: 'Сергей',
            status: 'Offline'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
            id: '3',
            name: 'Илья',
            status: 'Online'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg',
            id: '4',
            name: 'Влад',
            status: 'Offline'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg',
            id: '5',
            name: 'Ярык',
            status: 'Online'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg',
            id: '6',
            name: 'Марк',
            status: 'Offline'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg',
            id: '7',
            name: 'Иван',
            status: 'Offline'
        },
        {
            photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg',
            id: '8',
            name: 'Хаус',
            status: 'Online'
        }
    ]
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.updatedText
            };
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: state.newMessageText}]
            };
        default:
            return state;
    }
};
export const sendMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};
export const updateMessageTextActionCreated = (updatedMessage) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        updatedText: updatedMessage
    }
};
export default dialogsPageReducer;