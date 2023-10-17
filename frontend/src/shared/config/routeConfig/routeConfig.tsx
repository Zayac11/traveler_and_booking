import { RouteProps } from 'react-router-dom'


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    unAuthOnly?: boolean
}

export type AppRoutes = 'main_page' | 'login' | 'register'

export const RoutePath: Record<AppRoutes, string> = {
    main_page: '/',
    login: '/login',
    register: '/register',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    main_page: {
        path: RoutePath.main_page,
        element: <></>,
    },
    login: {
        path: RoutePath.login,
        element: <></>,
        unAuthOnly: true,
    },
    register: {
        path: RoutePath.register,
        element: <></>,
        unAuthOnly: true,
    },
}
