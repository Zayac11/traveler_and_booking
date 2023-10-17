import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getInitData, ProfileSchema } from 'entities/Profile'

describe('getInitData test', () => {
    test('should return _init', () => {
        const data: ProfileSchema = {
            _init: true,
            isLoading: true,
        }
        const state: DeepPartial<StateSchema> = {
            profile: data,
        }
        expect(getInitData(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getInitData(state as StateSchema)).toEqual(undefined)
    })
})
