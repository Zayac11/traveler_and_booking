import { Col } from 'antd'
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
        element: (
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                <MainPage />
            </Col>
        ),
    },
    login: {
        path: RoutePath.login,
        element: (
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                <LoginPage />
            </Col>
        ),
        unAuthOnly: true,
    },
    register: {
        path: RoutePath.register,
        element: (
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                <RegisterPage />
            </Col>
        ),
        unAuthOnly: true,
    },
    search: {
        path: RoutePath.search,
        element: (
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                <SearchPage />
            </Col>
        ),
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
