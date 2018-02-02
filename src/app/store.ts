//IMPORT ACTIONS
import {INCREMENT,DECREMENT} from './actions'

//is the interface wich the store will map it
export interface IAppStore {
    counter?: number
}

// initial state for the store
export const INIT_STATE: IAppStore = {
    counter: 0
}

//create reducer 
export const RootReducer = (state: IAppStore = INIT_STATE, action): IAppStore => {
    switch (action.type) {
        case INCREMENT :
            return { counter: state.counter + 1 };
        case DECREMENT :
            return { counter: state.counter - 1 }
        default:
        return state
    }
}