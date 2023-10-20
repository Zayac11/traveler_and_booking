import { LogoutOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProfileData, profileActions } from '../../../../entities/Profile'
import { useAppDispatch } from '../../../../shared/lib/hooks/redux'
import s from './ProfieHeader.module.scss'

export const ProfileHeader = () => {
    const profileData = useSelector(getProfileData)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(profileActions.logout())
    }

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
                <Space style={{ height: '100%' }}>
                    <NavLink className={s.name} to={'/profile'}>
                        {profileData.username}
                    </NavLink>
                    <Button onClick={handleClick} type='default' shape='circle' size='small'>
                        <LogoutOutlined style={{ color: '#1B1F2D' }} />
                    </Button>
                </Space>
            )}
        </>
    )
}
