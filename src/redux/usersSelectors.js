import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersBlock.users;
}

// Сложный селектор. Анализирует зависимости (getUsersSelector),
// при их имзенении вызывает внутреннюю ф-цию со сложной логикой.
// Параметры ф-ции:
// 1) зависимости (скаляр или массив),
// 2) вычисляемое значение - ф-ция, параметры в которую передаются
//    из соответствующих зависимостей.
export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(() => true);
})

export const getPageSize = (state) => {
    return state.usersBlock.pageSize;
}

export const getTotalUserCount = (state) => {
    return state.usersBlock.totUsers;
}

export const getCurrentPage = (state) => {
    return state.usersBlock.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersBlock.isFetching;
}

export const getFollowButtonFetching = (state) => {
    return state.usersBlock.followButtonFetching;
}