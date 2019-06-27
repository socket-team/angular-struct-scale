import { AppState, INIT_STATE_VALUE } from "./state";
import * as merge from "deepmerge";
import { INIT_STATE,UPDATE_STATE } from "./action";
export function rootReducer(state: AppState = INIT_STATE_VALUE, action: any) {
    console.log("ACTION: ", action.type);
    switch (action.type) {
        case INIT_STATE: return INIT_STATE_VALUE;
        case UPDATE_STATE: return merge({},{ ...state, ...action.payload }, { clone: true });
        default: return state;
    }
}