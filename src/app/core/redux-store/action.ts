import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { AppState } from './state';
import * as merge from 'deepmerge';

export const INIT_STATE = 'INIT_STATE';
export const UPDATE_STATE = 'UPDATE_STATE';

@Injectable()
export class Action {
    constructor(private ngRedux: NgRedux<AppState>) { }
    init() {
        this.ngRedux.dispatch({ type: INIT_STATE });
    }

    update(newValue: AppState) {
        this.ngRedux.dispatch({ type: UPDATE_STATE, payload: newValue });
    }

    getState(): AppState {
        const state = this.ngRedux.getState();
        return merge({}, state, { clone: true });
    }

}
