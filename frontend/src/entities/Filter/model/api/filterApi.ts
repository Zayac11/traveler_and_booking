import { rtkApi } from '../../../../shared/config/api/api'
import { Filters } from '../types/Filter'

export const filterApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchFiltersList: build.query<Filters, void>({
            query: () => ({
                url: 'api/filters',
                method: 'GET',
            }),
            async onQueryStarted(arg: void, { queryFulfilled }) {
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

export const useGetFiltersList = filterApi.useFetchFiltersListQuery
