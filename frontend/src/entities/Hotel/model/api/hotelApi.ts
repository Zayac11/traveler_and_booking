import { rtkApi } from '../../../../shared/config/api/api'
import { Hotel } from '../types/Hotel'

export const hotelApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCurrentHotel: build.query<Hotel, string>({
            query: (id) => ({
                url: 'api/hotel/' + id,
                method: 'GET',
            }),
        }),
    }),
})

export const useGetCurrentHotel = hotelApi.useFetchCurrentHotelQuery
