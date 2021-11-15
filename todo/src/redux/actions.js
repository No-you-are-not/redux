import {ADD_CARD, CHANGE_TYPE, DELETE_CARD} from './constants'

export const addCard = (data) =>({
    type: ADD_CARD,
    item: data
})

export const deleteCard = (data) => ({
    type: DELETE_CARD,
    item: data
})

export const changeType = (data) => ({
    type: CHANGE_TYPE,
    item: data
})