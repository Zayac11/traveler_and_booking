import {
    BellOutlined,
    CarOutlined,
    CoffeeOutlined,
    DotChartOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    RocketOutlined,
    SmileOutlined,
    WifiOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import s from './FacilityItem.module.scss'

export type FacilityVariants =
    | 'Room service'
    | 'Air conditioning'
    | 'Parking available'
    | 'Business service'
    | 'Wi-Fi'
    | "Children's playroom"
    | 'Laundry'
    | 'Free breakfast'

interface FacilityItemProps {
    name: FacilityVariants
}

const icons: Record<FacilityVariants, any> = {
    ['Room service']: <BellOutlined />,
    ['Air conditioning']: <RocketOutlined />,
    ['Parking available']: <CarOutlined />,
    ['Business service']: <PhoneOutlined />,
    ['Wi-Fi']: <WifiOutlined />,
    ["Children's playroom"]: <SmileOutlined />,
    ['Laundry']: <DotChartOutlined />,
    ['Free breakfast']: <CoffeeOutlined />,
}

export const FacilityItem = React.memo((props: FacilityItemProps) => {
    const { name } = props

    return (
        <Space size={6} align='start' data-testid='FacilityItem' className={s.container}>
            {icons[name] ?? <InfoCircleOutlined />} {name}
        </Space>
    )
})
