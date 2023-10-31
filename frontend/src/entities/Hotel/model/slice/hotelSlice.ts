import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HotelSchema } from '../..'

const initialState: HotelSchema = {
    place: '',
}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setPlace: (state, action: PayloadAction<string>) => {
            state.place = action.payload
        },
        setRate: (state, action: PayloadAction<number>) => {
            state.rate = action.payload
        },
        setRooms: (state, action: PayloadAction<number>) => {
            state.rooms = action.payload
        },
        setDaysCount: (state, action: PayloadAction<number>) => {
            state.daysCount = action.payload
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
        setCheckInDate: (state, action: PayloadAction<string>) => {
            state.checkInDate = action.payload
        },
        setCheckOutDate: (state, action: PayloadAction<string>) => {
            state.checkOutDate = action.payload
        },
        clearFilters: (state) => {
            state.place = ''
            state.facilities = undefined
            state.rooms = undefined
            state.activities = undefined
            state.checkInDate = undefined
            state.checkOutDate = undefined
            state.daysCount = undefined
            state.price = undefined
            state.rate = undefined
        },
    },
})

export const { actions: hotelActions } = hotelSlice
export const { reducer: hotelReducer } = hotelSlice
