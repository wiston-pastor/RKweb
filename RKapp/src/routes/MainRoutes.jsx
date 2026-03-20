import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import {Public} from '@/layout/Public'
import {NotFoun} from '@/pages/NotFoun'
import {Home} from '@/pages/Home'

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Public/>}>
                <Route index element={<Home/>}/>
                <Route path='*' element={<NotFoun/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
