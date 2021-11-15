import { GET_USERS } from './constants';

const initialState = [];

export const getUsersReducer = (state = initialState, action) => {
switch (action.type){
    case GET_USERS:
        return{...state,  users: action.users};
    default:
        return state;
}
}