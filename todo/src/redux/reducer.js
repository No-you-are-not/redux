import {ADD_CARD, CHANGE_TYPE, DELETE_CARD} from './constants'

const initialState = {data:[]};

export const cardReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CARD:
            return { ...state, data:[ ...state.data, state.data[state.data.length] = action.item]};
        case DELETE_CARD:
            return { ...state, data:[ ...state.data.filter((item) => item.id !== action.item.id)]};
        case CHANGE_TYPE:
            return { ...state, data: [...state.data.filter((item) => item.id !== action.item.id), state.data[state.data.length] = action.item]}
        default:
            return state;
    }
}