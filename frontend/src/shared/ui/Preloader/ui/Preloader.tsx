import { FC } from 'react'
import s from './Preloader.module.scss'
import FetchLoader from './loader.svg'

interface PreloaderProps {
    stroke?: string
}

const Preloader: FC<PreloaderProps> = ({ stroke = '#1d0e0b' }) => (
    <div className={s.preloaderContainer}>
        <FetchLoader stroke={stroke} />
    </div>
)

export default Preloader
