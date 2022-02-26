import {createSelector} from "reselect";

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getSizePage = (state) => {
    return state.usersPage.sizePage;
}
export const getUsersDataSelector = (state) => {
    return state.usersPage.usersData;
}

export const getUsersData = createSelector(getUsersDataSelector, (users) => {
    return users.filter(u => true);
});

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}