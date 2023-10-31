import { rtkApi } from '../../../../shared/config/api/api'
import { Room } from '../types/Room'

export const roomApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCurrentRoom: build.query<Room, string>({
            query: (id) => ({
                url: 'api/room/' + id,
                method: 'GET',
            }),
        }),
    }),
})

export const useGetCurrentRoom = roomApi.useFetchCurrentRoomQuery
