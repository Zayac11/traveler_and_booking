import { Hotel } from '../../../Hotel'

export interface Room {
    name: string
    image: string[]
    sleeps: number
    description: string
    hotel: Hotel
    price: number
}
