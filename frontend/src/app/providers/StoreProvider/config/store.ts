import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { hotelReducer } from '../../../../entities/Hotel'
import { profileReducer } from '../../../../entities/Profile'
import { $api, rtkApi } from '../../../../shared/config/api/api'
import { createReducerManager } from './reducerManager'
import { StateSchema, ThunkExtraArg } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [rtkApi.reducerPath]: rtkApi.reducer,
        profile: profileReducer,
        hotel: hotelReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: true,
        preloadedState: initialState,
        // prettier-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    })
    // Optional: Put the reducer manager on the store, so it is easily accessible
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
