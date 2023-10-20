import { RouteProps } from 'react-router-dom'
import { LoginPage } from '../../../pages/LoginPage'
import { MainPage } from '../../../pages/MainPage'
import RegisterPage from '../../../pages/RegisterPage/ui/RegisterPage'

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
        element: <MainPage />,
    },
    login: {
        path: RoutePath.login,
        element: <LoginPage />,
        unAuthOnly: true,
    },
    register: {
        path: RoutePath.register,
        element: <RegisterPage />,
        unAuthOnly: true,
    },
}
