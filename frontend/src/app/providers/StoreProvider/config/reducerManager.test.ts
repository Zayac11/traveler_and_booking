import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { createReducerManager } from './reducerManager'

describe('reducerManager test', () => {
    test('reducerManager create', () => {
        const manager = createReducerManager({} as ReducersMapObject<StateSchema>)
        expect(manager.getReducerMap()).toStrictEqual({})
    })

    test('reducerManager add reducer', () => {
        const manager = createReducerManager({} as ReducersMapObject<StateSchema>)
        manager.add('profile', profileReducer)
        expect(manager.getReducerMap()).toHaveProperty('profile')
    })

    test('reducerManager remove reducer after add', () => {
        const manager = createReducerManager({} as ReducersMapObject<StateSchema>)
        manager.add('profile', profileReducer)
        expect(manager.getReducerMap()).toHaveProperty('profile')
        manager.remove('profile')
        expect(manager.getReducerMap()).toStrictEqual({})
    })

    test('reducerManager add a lot of same reducers', () => {
        const manager = createReducerManager({} as ReducersMapObject<StateSchema>)
        manager.add('profile', profileReducer)
        manager.add('profile', profileReducer)
        manager.add('profile', profileReducer)
        expect(manager.getReducerMap()).toHaveProperty('profile')
    })

    test('reducerManager remove not existed reducer', () => {
        const manager = createReducerManager({} as ReducersMapObject<StateSchema>)
        manager.add('profile', profileReducer)
        // @ts-ignore
        manager.remove('some reducer')
        expect(manager.getReducerMap()).toHaveProperty('profile')
    })

    test('reducerManager reduce', () => {
        const manager = createReducerManager({ profile: profileReducer } as ReducersMapObject<StateSchema>)
        expect(
            manager.reduce({ profile: { _init: true, isLoading: false } } as StateSchema, {
                type: 'action_example',
                payload: { test: 123 },
            })
        ).toHaveProperty('profile')
    })
})
