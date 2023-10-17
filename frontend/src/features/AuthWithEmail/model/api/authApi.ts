import { LoginSchema } from '../..'
import { Profile } from '../../../../entities/Profile'
import { rtkApi } from '../../../../shared/config/api/api'

export const authAPi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        doAuth: build.mutation<Profile, LoginSchema>({
            query: (args) => ({
                url: 'api/login',
                method: 'POST',
                body: {
                    email: args.email,
                    password: args.email
                }
            }),
        }),
    }),
})

export const useDoAuth = authAPi.useDoAuthMutation
