import React, { FC } from 'react'
import FetchLoader from './loader.svg'
import s from './Preloader.module.scss'

interface PreloaderProps {
    stroke?: string
}

const Preloader: FC<PreloaderProps> = ({ stroke = '#fff' }) => (
    <div className={s.preloaderContainer}>
        <FetchLoader stroke={stroke} />
    </div>
)

export default Preloader
