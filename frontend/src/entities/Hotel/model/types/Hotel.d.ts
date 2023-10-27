export interface Hotel {
    _id: string
    name: string
    country: string
    city: string
    coordinates: string
    description: string
    address: string
    coordinates: string
    overview: string
    image: string[]
    reviews_number: number
    rate: number
    lowestPrice: number
    activities: string[]
    rooms: any[]
    facilities: FacilityVariants[]
    attractions: string[]
    types: string[]
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
