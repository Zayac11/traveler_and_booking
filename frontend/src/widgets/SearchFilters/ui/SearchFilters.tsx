import { Checkbox, Radio, RadioChangeEvent, Space } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import React from 'react'
import { useSelector } from 'react-redux'
import { Filter, useGetFiltersList } from '../../../entities/Filter'
import { getHotelFilters, hotelActions } from '../../../entities/Hotel'
import { useSearchHotel } from '../../../features/SearchHotels'
import Star from '../../../shared/assets/icons/star.svg'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import s from './SearchFilters.module.scss'
const CheckboxGroup = Checkbox.Group

export const SearchFilters = React.memo(() => {
    const dispatch = useAppDispatch()
    const filters = useSelector(getHotelFilters)
    const { data } = useGetFiltersList()
    const [searchHotels] = useSearchHotel()

    const handlePriceChange = (e: RadioChangeEvent) => {
        dispatch(hotelActions.setPrice(Number(e.target.value)))
        searchHotels({ ...filters, price: Number(e.target.value) })
    }
    const handlePopularFiltersChange = (values: CheckboxValueType[]) => {
        dispatch(hotelActions.setFacilities(values as string[]))
        searchHotels({ ...filters, facilities: values as string[] })
    }
    const handleActivitiesChange = (values: CheckboxValueType[]) => {
        dispatch(hotelActions.setActivities(values as string[]))
        searchHotels({ ...filters, activities: values as string[] })
    }
    const handleRatingChange = (e: RadioChangeEvent) => {
        dispatch(hotelActions.setRate(Number(e.target.value)))
        searchHotels({ ...filters, rate: Number(e.target.value) })
    }

    return (
        <div className={s.container}>
            <h2 className={s.title}>Filter by</h2>
            <Filter className={s.section} title='Your budget per day'>
                <Radio.Group style={{ width: '100%' }} onChange={handlePriceChange}>
                    <Space direction='vertical'>
                        <Radio value='200'>$0 - $200</Radio>
                        <Radio value='500'>$200 - $500</Radio>
                        <Radio value='1000'>$500 - $1,000</Radio>
                        <Radio value='2000'>$1,000 - $2,000</Radio>
                        <Radio value='5000'>$2,000 - $5,000</Radio>
                    </Space>
                </Radio.Group>
            </Filter>
            <Filter className={s.section} title='Rating'>
                <div className={s.text}>Show only ratings more than</div>
                <Radio.Group onChange={handleRatingChange}>
                    <Radio.Button className={s.radioButton} value='1'>
                        1 <Star />
                    </Radio.Button>
                    <Radio.Button className={s.radioButton} value='2'>
                        2 <Star />
                    </Radio.Button>
                    <Radio.Button className={s.radioButton} value='3'>
                        3 <Star />
                    </Radio.Button>
                    <Radio.Button className={s.radioButton} value='4'>
                        4 <Star />
                    </Radio.Button>
                    <Radio.Button className={s.radioButton} value='5'>
                        5 <Star />
                    </Radio.Button>
                </Radio.Group>
            </Filter>
            <Filter className={s.section} title='Popular Filters'>
                <CheckboxGroup options={data?.facilities} onChange={handlePopularFiltersChange} />
            </Filter>
            <Filter className={s.section} title='Activities'>
                <CheckboxGroup style={{ width: '100%' }} options={data?.activities} onChange={handleActivitiesChange} />
            </Filter>
        </div>
    )
})
