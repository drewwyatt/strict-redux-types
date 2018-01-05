import { Action } from 'redux'

export interface TypedAction<T extends string, P = undefined> extends Action {
    readonly type: T
    readonly payload: P
}

export interface OtherAction extends TypedAction<''> {}

export function makeActionCreator<T extends TypedAction<any, any>>(
    type: T['type']
): (p: T['payload']) => T {
    return payload => ({ type, payload } as T)
}

// Constant used to (hopefully temporarily) fix the undefined issue for payload-less actions
export const EMPTY = undefined as undefined
