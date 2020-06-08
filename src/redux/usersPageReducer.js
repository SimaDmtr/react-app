import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOW_IS_FETCHING = "TOGGLE_FOLLOW_IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 16,
    currentPage: 1,
    isFetching: true,
    isFollowFetching: []
};

//Редюсер

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOW_IS_FETCHING:

            return {
                ...state,
                isFollowFetching: action.isFollowFetching
                    ? [...state.isFollowFetching, action.userId]
                    : state.isFollowFetching.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

//Экшн креэйторы

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page
});
export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: count
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowIsFetching = (isFollowFetching, userId) => ({
    type: TOGGLE_FOLLOW_IS_FETCHING,
    isFollowFetching,
    userId,
});

//Санки(ThunkCreator => return Thunk) В ThunkCreator передаём нужные параметры и возвращаем санку с помощью замыкания

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        //При вызове функции сразу показываем прелоадер страницы
        dispatch(toggleIsFetching(true));
        //Из санок вызываем функцию DAL, в которую передаём страницу и размер страницы (по умолчанию 1 и 16), после успеха срабатывает then
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            //Сразу убираем крутилку, сетаем массив юзеров и обновляем их количество(пока делим на 15, т.к. юзеров много)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount / 15));
        })
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowIsFetching(true, id))
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowIsFetching(false, id))
            })
    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowIsFetching(true, id))
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowIsFetching(false, id))
            })
    }
}

export default usersPageReducer;