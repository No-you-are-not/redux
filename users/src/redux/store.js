import { createStore } from 'redux';

import { getUsersReducer } from './reducer';

export const store = createStore(getUsersReducer);