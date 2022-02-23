export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getSizePage = (state) => {
    return state.usersPage.sizePage;
}
export const getUsersData = (state) => {
    return state.usersPage.usersData;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}