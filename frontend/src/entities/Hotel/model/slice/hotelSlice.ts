import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HotelSchema } from '../..'

const initialState: HotelSchema = {}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setRate: (state, action: PayloadAction<number[]>) => {
            state.rate = action.payload
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        },
        setActivities: (state, action: PayloadAction<string[]>) => {
            state.activities = action.payload
        },
        setFacilities: (state, action: PayloadAction<string[]>) => {
            state.facilities = action.payload
        },
        clearFilters: (state) => {
            state.facilities = undefined
            state.activities = undefined
            state.price = undefined
            state.city = undefined
            state.rate = undefined
        },
    },
})

export const { actions: hotelActions } = hotelSlice
export const { reducer: hotelReducer } = hotelSlice
