import { Suspense } from 'react'
import Preloader from '../shared/ui/Preloader/ui/Preloader'
import './App.module.scss'

export const App = () => (
    <>
        <h1>Куку</h1>
        <Suspense fallback={<Preloader stroke='#1d0e0b' />}>
            <div>Hello world</div>
        </Suspense>
    </>
)