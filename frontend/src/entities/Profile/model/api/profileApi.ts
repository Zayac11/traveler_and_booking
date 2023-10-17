import { rtkApi } from '../../../../shared/config/api/api'
import { profileActions } from '../slice/profileSlice'
import { Profile } from '../types/Profile'

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
    }),
})

export const useGetProfile = profileApi.useFetchProfileDataQuery
