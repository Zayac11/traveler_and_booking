import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { Loader } from 'shared/ui/Loader/ui/Loader'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<Loader height='calc(100vh - 140px)' />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        )
        return <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} />
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
