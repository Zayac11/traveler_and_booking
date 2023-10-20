import { MainAppBanner } from '../../../widgets/MainAppBanner'
import { MainPlaces } from '../../../widgets/MainPlaces'
import { MainSearch } from '../../../widgets/MainSearch'

const MainPage = () => {
    console.log()
    return (
        <>
            <MainSearch />
            <MainPlaces />
            <MainAppBanner />
        </>
    )
}

export default MainPage
