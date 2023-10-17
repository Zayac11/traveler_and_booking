import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getInitData, useGetProfile } from '../entities/Profile'
import Preloader from '../shared/ui/Preloader/ui/Preloader'
import './App.module.scss'
import { AppRouter } from './providers/router'

export const App = () => {
    const init = useSelector(getInitData)
    useGetProfile()

    return (
        <>
            <h1>Куку</h1>
            <Suspense fallback={<Preloader stroke='#1d0e0b' />}>
                {init && <AppRouter />}
            </Suspense>
        </>
    )
}