import { LoginSchema, RegisterSchema } from '../..'
import { Profile } from '../../../../entities/Profile'
import { rtkApi } from '../../../../shared/config/api/api'

export const authAPi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        doAuth: build.mutation<Profile, LoginSchema>({
            query: (args) => ({
                url: 'api/auth/login',
                method: 'POST',
                body: {
                    email: args.email,
                    password: args.email,
                },
            }),
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
