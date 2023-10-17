import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App.tsx'
import { ErrorBoundary } from './app/providers/ErrorBoundary/index.ts'
import { StoreProvider } from './app/providers/StoreProvider/index.ts'
import './app/providers/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
