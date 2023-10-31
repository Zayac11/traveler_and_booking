import { Hotel } from '../../../Hotel'

export interface Room {
    _id: string
    name: string
    image: string[]
    sleeps: number
    description: string
    hotel: Hotel
    price: number
}
