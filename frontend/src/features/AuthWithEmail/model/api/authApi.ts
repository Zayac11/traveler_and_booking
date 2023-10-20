import { LoginSchema, RegisterSchema } from '../..'
import { Profile } from '../../../../entities/Profile'
import { rtkApi } from '../../../../shared/config/api/api'

export const authAPi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        doAuth: build.mutation<{ token: string }, LoginSchema>({
            query: (args) => ({
                url: 'api/auth/login',
                method: 'POST',
                body: {
                    email: args.email,
                    password: args.password,
                },
            }),
            invalidatesTags: (result) => {
                if (result?.token) {
                    return ['Profile']
                }
                return []
            },
            async onQueryStarted(arg: LoginSchema, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    localStorage.setItem('accessToken', data.token)
                } catch (err) {
                    console.error(err)
                }
            },
        }),
        doRegister: build.mutation<Profile, RegisterSchema>({
            query: (args) => ({
                url: 'api/auth/register',
                method: 'POST',
                body: {
                    username: args.username,
                    email: args.email,
                    password: args.password,
                },
            }),
        }),
    }),
})

export const useDoAuth = authAPi.useDoAuthMutation
export const useDoRegister = authAPi.useDoRegisterMutation
