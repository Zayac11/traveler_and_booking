import { rtkApi } from '../../../../shared/config/api/api'
import { Hotel, SearchHotelsSchema } from '../types/SearchHotels'

export const searchHotelsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        searchHotel: build.mutation<Hotel[], SearchHotelsSchema>({
            query: (args) => ({
                url: 'api/search',
                method: 'POST',
                body: {
                    place: args.place,
                },
            }),
            async onQueryStarted(arg: SearchHotelsSchema, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                } catch (err) {
                    console.error(err)
                }
            },
        }),
    }),
})

export const useSearchHotel = searchHotelsApi.useSearchHotelMutation
