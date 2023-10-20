import cl from 'classnames'
import React from 'react'
import { SearchBar } from '../../../widgets/SearchBar'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props

    return (
        <div className={cl(className, s.container)}>
            <div className={s.searchWrapper}>
                <div className={s.search}>
                    <SearchBar onSearch={() => {}} />
                </div>
            </div>
        </div>
    )
})

export default SearchPage
