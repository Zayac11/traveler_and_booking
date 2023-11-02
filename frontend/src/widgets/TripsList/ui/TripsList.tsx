import { Empty } from 'antd'
import cl from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../../entities/Profile'
import { TripCard } from './TripCard/TripCard'
import s from './TripsList.module.scss'

interface TripsListProps {
    className?: string
}

export const TripsList = React.memo((props: TripsListProps) => {
    const { className } = props
    const profileData = useSelector(getProfileData)

    return (
        <div className={cl(className, s.container)}>
            {profileData?.trips && profileData.trips.length > 0 ? (
                profileData.trips.map((item) => <TripCard trip={item} key={item._id} />)
            ) : (
                <Empty description='There are no trips yet...' />
            )}
        </div>
    )
})
