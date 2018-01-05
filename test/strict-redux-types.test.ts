import { makeActionCreator, TypedAction, EMPTY } from '../src/strict-redux-types'

enum ActionType {
    increment = 'increment',
    incrementBy = 'incrementBy'
}

type IncrementAction = TypedAction<ActionType.increment>
type IncrementByAction = TypedAction<ActionType.incrementBy, number>

const increment = makeActionCreator<IncrementAction>(ActionType.increment)
const incrementBy = makeActionCreator<IncrementByAction>(ActionType.incrementBy)

describe('makeActionCreator', () => {
    test('can generate actions with no payload', () => {
        expect(increment(EMPTY)).toEqual({ type: ActionType.increment })
    })

    test('can generate actions that NEED payloads', () => {
        expect(incrementBy(2)).toEqual({ type: ActionType.incrementBy, payload: 2 })
        expect(incrementBy(3)).toEqual({ type: ActionType.incrementBy, payload: 3 })
        expect(incrementBy(42)).toEqual({ type: ActionType.incrementBy, payload: 42 })
    })
})
