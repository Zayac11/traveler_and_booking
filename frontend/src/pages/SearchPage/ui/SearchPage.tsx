import cl from 'classnames'
import React from 'react'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props

    return (
        <div className={cl(className, s.container)}>
            <SearchWidget />
        </div>
    )
})

export default SearchPage
