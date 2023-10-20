import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getInitData, useGetProfile } from '../entities/Profile'
import Preloader from '../shared/ui/Preloader/ui/Preloader'
import { Footer } from '../widgets/Footer'
import { Header } from '../widgets/Header'
import './App.module.scss'
import { AppRouter } from './providers/router'

export const App = () => {
    const init = useSelector(getInitData)
    useGetProfile()
    const location = useLocation()

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#2F80ED',
                    },
                }}
            >
                {location.pathname === '/search/' ? <Header isSearch /> : <Header isSearch={false} />}
                <Suspense fallback={<Preloader stroke='#1d0e0b' />}>{init && <AppRouter />}</Suspense>
                <Footer />
            </ConfigProvider>
        </>
    )
}
