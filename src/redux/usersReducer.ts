import {userApi} from "../api/api";
import {userType} from "../types/types";

const PAGE_SIZE = 100;
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_NUMBER_OF_USERS = "SET_NUMBER_OF_USERS";
const SET_FETCHING = "SET_FETCHING";
const SET_FOLLOW_FETCHING = "SET_FOLLOW_FETCHING";

let initialState = {
    users: [
        /*{id: 1, follower: false, mood:"Have a nice day!", name: "Mike", location:{city:"Pert", country:"Australia"},foto:"https://livelyplanet.ru/uploads/mini/gl/a3/4159c2d74c2156b913d3475a13309d.webp"},
        {id: 2, follower: true, mood:"I'm a cleaner!", name: "July", location:{city:"Turku", country:"Finland"},foto:"https://lh3.googleusercontent.com/proxy/qAuIqYFfqqx-jQzmxXm5mv7oaYQnGAF8TFiY7nCakF1v1x9ho-EKevvJqN0ekxAOn-1igOsqzX7Z1m0ta-u0_YxMaGWUVX48QQB16XUhDF31nfCkxlEKdw"},
        {id: 3, follower: false, mood:"Everything is OK!", name: "Tanya", location:{city:"Montreal", country:"Canada"},foto:"https://livelyplanet.ru/uploads/mini/gl/a3/4159c2d74c2156b913d3475a13309d.webp"},*/
    ] as Array<userType>,
    pageSize: PAGE_SIZE as number,
    totUsers: undefined as number | undefined,
    currentPage: 1 as number,
    numberOfPages: undefined as number | undefined,
    isFetching: false as boolean,
    followButtonFetching: [] as Array<number>// массив id пользователей, у кот.идёт обновление follow/unfollow
};

type initialStateType = typeof initialState;

// В reducer передаются action и state. state, относящийся к данной ветке
const usersReducer = (state=initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                users: [...action.users], // полностью заменяем массив контактов
            };

        case FOLLOW: // добавить в друзья
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                users: state.users.map((el) => {
                    if (action.userId === el.id) return {...el, followed: true};
                    return el;
                }),
            };

        case UNFOLLOW: // удалить из друзей
            return {
                ...state,
                users: state.users.map((el) => {
                    if (action.userId === el.id) return {...el, followed: false};
                    return el;
                }),
            };

        case SET_NUMBER_OF_USERS:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                totUsers: action.totUsers,
            };

        case SET_PAGE_NUMBER:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                currentPage: action.pageNumber,
            };

        case SET_FETCHING:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                isFetching: action.isFetching,
            };

        case SET_FOLLOW_FETCHING:
        {
            let arr=[...state.followButtonFetching];
            if (action.isFetching) {
                arr.push(action.userId);
            } else {
                while (arr.includes(action.userId))
                    arr.splice(arr.indexOf(action.userId), 1);
            }
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                followButtonFetching: arr
            };
        }

        default:
            break;
    }
    return state;
}

type followACActionType = {type: typeof FOLLOW, userId: number}
export const followAC = (userId: number): followACActionType => ({type:FOLLOW, userId});
type unfollowACActionType = {type: typeof UNFOLLOW, userId: number}
export const unfollowAC = (userId: number):unfollowACActionType => ({type:UNFOLLOW, userId});
type setUsersACActionType = {type: typeof SET_USERS, users:  Array<userType>}
export const setUsersAC = (users: Array<userType>): setUsersACActionType => ({type:SET_USERS, users});
type setPageNumberACActionType = {type: typeof SET_PAGE_NUMBER, pageNumber:  number}
export const setPageNumberAC = (page:number):setPageNumberACActionType => ({type:SET_PAGE_NUMBER, pageNumber:page});
type setNumberOfUsersACActionType = {type: typeof SET_NUMBER_OF_USERS, totUsers:  number}
export const setNumberOfUsersAC = (allUsers:number):setNumberOfUsersACActionType =>
    ({type:SET_NUMBER_OF_USERS, totUsers:allUsers});
type toggleFetchingACActionType = {type: typeof SET_FETCHING, isFetching:  boolean}
export const toggleFetchingAC = (fetch:boolean):toggleFetchingACActionType => ({type:SET_FETCHING, isFetching:fetch});
type toggleFollowButtonActionType = {type: typeof SET_FOLLOW_FETCHING, isFetching: boolean, userId: number}
export const toggleFollowButton = (fetch:boolean, userId:number):toggleFollowButtonActionType =>
    ({type:SET_FOLLOW_FETCHING, isFetching:fetch, userId});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFetchingAC(true));
        let data = await userApi.getUsers(currentPage, pageSize)
        dispatch(toggleFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setNumberOfUsersAC(data.totalCount));
    }
}

// Вынесли дублирующую часть кода в отдельную функцию
const followUnfollow = async (userId:number, dispatch:any, apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowButton(true, userId));
    let data = await apiMethod(userId)
    dispatch(toggleFollowButton(false, userId));
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
}

// ThunkCreator для unfollow
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollow(userId, dispatch, userApi.unSubscribe.bind(userApi), unfollowAC)
    }
}

// ThunkCreator для follow
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollow(userId, dispatch, userApi.subscribe.bind(userApi), followAC)
    }
}

export default usersReducer;