export interface Hotel {
    name: string
    city: string
    country: string
    description: string
    address: string
    coordinates: string
    overview: string
    image: string[]
    reviews_number: number
    rate: number
}

export interface HotelSchema {
    rate?: number[]
    price?: number
    activities?: string[]
    facilities?: string []
    city?: string
}
