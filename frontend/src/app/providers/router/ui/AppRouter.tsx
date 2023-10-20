import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from '../../../../shared/config/routeConfig/routeConfig'
import Preloader from '../../../../shared/ui/Preloader/ui/Preloader'
import { RequireAuth } from './RequireAuth'
import { RequireUnAuth } from './RequireUnAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<Preloader stroke='#000' />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : route.unAuthOnly ? (
                        <RequireUnAuth>{element}</RequireUnAuth>
                    ) : (
                        element
                    )
                }
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
