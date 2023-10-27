export interface Hotel {
    _id: string
    name: string
    place: string
    country: string
    description: string
    address: string
    coordinates: string
    overview: string
    image: string[]
    reviews_number: number
    rate: number
    lowestPrice: number
}

export interface HotelSchema {
    place: string
    rate?: number
    price?: number
    daysCount?: number
    rooms?: number
    activities?: string[]
    facilities?: string[]
}
