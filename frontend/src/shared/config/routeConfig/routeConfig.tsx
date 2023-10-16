import { RouteProps } from 'react-router-dom'


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export type AppRoutes = 'main_page'

export const RoutePath: Record<AppRoutes, string> = {
    main_page: '/',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    main_page: {
        path: RoutePath.main_page,
        element: <></>,
    },
}
