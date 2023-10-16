import { Button } from 'antd'
import cl from 'classnames'
import s from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={cl(s.PageError, {}, [className])}>
            <p>Что-то пошло не так...</p>
            <Button onClick={reloadPage}>Перезагрузить</Button>
        </div>
    )
}
