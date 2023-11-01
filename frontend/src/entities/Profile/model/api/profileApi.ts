import { rtkApi } from '../../../../shared/config/api/api'
import { profileActions } from '../slice/profileSlice'
import { Profile, TripSchema } from '../types/Profile'

export const profileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchProfileData: build.query<Profile, void>({
            query: () => ({
                url: 'api/profile/',
                method: 'GET',
            }),
            providesTags: ['Profile'],
            async onQueryStarted(arg: void, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(profileActions.setProfileData(data))
                } catch (err) {
                    console.error(err)
                } finally {
                    dispatch(profileActions.initData())
                }
            },
        }),
        createTrip: build.mutation<null, TripSchema>({
            query: (schema) => ({
                url: 'api/trip',
                method: 'POST',
                body: {
                    price: schema.price,
                    rooms: JSON.stringify(schema.rooms),
                    check_in_date: schema.check_in_date,
                    check_out_date: schema.check_out_date,
                    hotel: schema.hotel,
                },
            }),
            invalidatesTags: ['Profile'],
        }),
    }),
})

export const useGetProfile = profileApi.useFetchProfileDataQuery
export const useCreateTrip = profileApi.useCreateTripMutation
