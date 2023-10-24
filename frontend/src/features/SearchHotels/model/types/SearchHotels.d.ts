export interface SearchHotelsSchema {
    place: string
    price?: number
    types?: string[]
    facilities?: string[]
    activities?: string[]
    rate?: number
}

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