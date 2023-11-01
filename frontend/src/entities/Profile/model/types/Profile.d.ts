export interface ProfileSchema {
    profileData?: Profile
    _init: boolean
}
export interface Profile {
    email: string
    username: string
}

export interface TripSchema {
    rooms: string[]
    check_in_date: string
    check_out_date: string
    price: number
    hotel: string
}