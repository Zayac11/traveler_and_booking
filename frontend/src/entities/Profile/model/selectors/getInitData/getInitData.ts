import { StateSchema } from 'app/providers/StoreProvider'

export const getInitData = (state: StateSchema) => state.profile?._init
