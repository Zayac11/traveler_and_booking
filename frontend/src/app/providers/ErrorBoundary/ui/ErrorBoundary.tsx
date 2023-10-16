import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from '../../../../shared/ui/PageError'
import Preloader from '../../../../shared/ui/Preloader/ui/Preloader'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.error(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback={<Preloader stroke='1d0e0b' />}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
