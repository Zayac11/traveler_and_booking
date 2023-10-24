import { rtkApi } from '../../../../shared/config/api/api'
import { Filters } from '../types/Filter'

export const filterApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchFiltersList: build.query<Filters, void>({
            query: () => ({
                url: 'api/filters',
                method: 'GET',
            }),
        }),
    }),
})

export const useGetFiltersList = filterApi.useFetchFiltersListQuery
