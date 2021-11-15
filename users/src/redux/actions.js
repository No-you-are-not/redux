import {GET_USERS} from "./constants";

export const getUser = (data) => ({
    type: GET_USERS,
    users: data
})