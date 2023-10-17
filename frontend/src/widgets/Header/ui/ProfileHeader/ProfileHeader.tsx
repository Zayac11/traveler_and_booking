import { Button, Space } from 'antd'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProfileData } from '../../../../entities/Profile'

export const ProfileHeader = () => {
    const profileData = useSelector(getProfileData)

    return (
        <>
            {!profileData ? (
                <Space>
                    <NavLink to='/register'>
                        <Button type='default'>Sign Up</Button>
                    </NavLink>
                    <NavLink to='/login'>
                        <Button type='primary'>Sign In</Button>
                    </NavLink>
                </Space>
            ) : (
                <div>{profileData.email}</div>
            )}
        </>
    )
}
