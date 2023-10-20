import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPi } from '../../../../features/AuthWithEmail/model/api/authApi'
import { Profile, ProfileSchema } from '../types/Profile'

const initialState: ProfileSchema = {
    _init: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.profileData = action.payload
        },
        initData: (state) => {
            state._init = true
        },
        logout: (state) => {
            state.profileData = undefined
            authAPi.util.resetApiState()
            localStorage.removeItem('accessToken')
        },
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
