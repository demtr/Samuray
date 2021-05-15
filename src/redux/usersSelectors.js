export const getUsers = (state) => {
    return state.usersBlock.users;
}

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