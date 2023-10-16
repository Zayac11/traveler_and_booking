import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getProfileData } from 'entities/Profile'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const profileData = useSelector(getProfileData)
    const location = useLocation()

    if (!profileData) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children
}
