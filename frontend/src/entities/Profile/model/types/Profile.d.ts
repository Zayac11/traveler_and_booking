import { Hotel } from '../../../Hotel'
import { Room } from '../../../Room'

export interface ProfileSchema {
    profileData?: Profile
    _init: boolean
}

export interface Trip {
    _id: string
    hotel: Hotel
    rooms: Room
    check_in_date: string
    check_out_date: string
    price: number
}

export interface Profile {
    email: string
    username: string
    trips: Trip[]
}

export interface TripSchema {
    rooms: string[]
    check_in_date: string
    check_out_date: string
    price: number
    hotel: string
}
