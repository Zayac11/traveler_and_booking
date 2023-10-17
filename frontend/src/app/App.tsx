import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getInitData, useGetProfile } from '../entities/Profile'
import Preloader from '../shared/ui/Preloader/ui/Preloader'
import { Header } from '../widgets/Header'
import './App.module.scss'
import { AppRouter } from './providers/router'

export const App = () => {
    const init = useSelector(getInitData)
    useGetProfile()

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#2F80ED',
                    },
                }}
            >
                <Header />
                <Suspense fallback={<Preloader stroke='#1d0e0b' />}>{init && <AppRouter />}</Suspense>
            </ConfigProvider>
        </>
    )
}
