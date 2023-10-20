import React from 'react'
import s from './MainSearch.module.scss'
import { MainSearchBar } from './MainSearchBar/MainSearchBar'

export const MainSearch = React.memo(() => (
    <div className={s.container}>
        <h1 className={s.title}>Enjoy Your Dream Vacation</h1>
        <h2 className={s.subtitle}>
            Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us
        </h2>
        <div className={s.searchBar}>
            <MainSearchBar />
        </div>
    </div>
))
