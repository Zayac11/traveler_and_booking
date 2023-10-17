import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData, Profile, ProfileSchema } from 'entities/Profile'

const profileData = {
    id: 1,
    display_name_raw: 'vino_costa',
}

describe('getProfileData test', () => {
    test('should return profileData', () => {
        const data: ProfileSchema = {
            _init: true,
            isLoading: true,
            profileData: profileData as Profile,
        }
        const state: DeepPartial<StateSchema> = {
            profile: data,
        }
        expect(getProfileData(state as StateSchema)).toEqual(profileData)
    })

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
