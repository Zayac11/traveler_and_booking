import { RouteProps } from 'react-router-dom'
import { HotelPage } from '../../../pages/HotelPage'
import { LoginPage } from '../../../pages/LoginPage'
import { MainPage } from '../../../pages/MainPage'
import { RegisterPage } from '../../../pages/RegisterPage'
import { SearchPage } from '../../../pages/SearchPage'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    unAuthOnly?: boolean
}

export type AppRoutes = 'main_page' | 'login' | 'register' | 'notFound' | 'search' | 'hotel'

export const RoutePath: Record<AppRoutes, string> = {
    main_page: '/',
    login: '/login',
    register: '/register',
    search: '/search/', // + params
    hotel: '/hotel/', // + id
    notFound: '*',
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
    search: {
        path: RoutePath.search,
        element: <SearchPage />,
    },
    hotel: {
        path: `${RoutePath.hotel}:id`,
        element: <HotelPage />,
    },
    notFound: {
        path: RoutePath.notFound,
        element: <div>404 Page Not Found</div>,
    },
}
