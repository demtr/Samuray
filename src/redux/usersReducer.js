const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_NUMBER_OF_USERS = "SET_NUMBER_OF_USERS";
const SET_FETCHING = "SET_FETCHING";
const SET_FOLLOW_FETCHING = "SET_FOLLOW_FETCHING";

let initialState = {
    users: [
        /*{id: 1, follower: false, mood:"Have a nice day!", name: "Mike", location:{city:"Pert", country:"Australia"},foto:"https://livelyplanet.ru/uploads/mini/gl/a3/4159c2d74c2156b913d3475a13309d.webp"},
        {id: 2, follower: true, mood:"I'm a cleaner!", name: "July", location:{city:"Turku", country:"Finland"},foto:"https://lh3.googleusercontent.com/proxy/qAuIqYFfqqx-jQzmxXm5mv7oaYQnGAF8TFiY7nCakF1v1x9ho-EKevvJqN0ekxAOn-1igOsqzX7Z1m0ta-u0_YxMaGWUVX48QQB16XUhDF31nfCkxlEKdw"},
        {id: 3, follower: false, mood:"Everything is OK!", name: "Tanya", location:{city:"Montreal", country:"Canada"},foto:"https://livelyplanet.ru/uploads/mini/gl/a3/4159c2d74c2156b913d3475a13309d.webp"},*/
    ],
    pageSize: 75,
    totUsers: undefined,
    currentPage: 1,
    numberOfPages: undefined,
    isFetching: false,
    followButtonFetching: [] // массив id пользователей, у кот.идёт обновление follow/unfollow
};

// В reducer передаются action и state. state, относящийся к данной ветке
const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                users: [/*...state.users,*/ ...action.users], // полностью заменяем массив контактов
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

export const followAC = (userId) => ({type:FOLLOW, userId});
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export const getUsersAC = (users) => ({type:GET_USERS, users});
export const setPageNumberAC = (page) => ({type:SET_PAGE_NUMBER, pageNumber:page});
export const setNumberOfUsersAC = (allUsers) => ({type:SET_NUMBER_OF_USERS, totUsers:allUsers});
export const toggleFetchingAC = (fetch) => ({type:SET_FETCHING, isFetching:fetch});
export const toggleFollowButton = (fetch, userId) => ({type:SET_FOLLOW_FETCHING, isFetching:fetch, userId});

export default usersReducer;