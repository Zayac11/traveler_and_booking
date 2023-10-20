import cl from 'classnames'
import React from 'react'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props

    return (
        <div className={cl(className, s.container)}>
            <div />
        </div>
    )
})

export default SearchPage
