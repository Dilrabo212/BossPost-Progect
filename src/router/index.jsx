import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import SinglePost from '../modules/SinglePost/SinglePost'
import Body from '../modules/Body/Body'
import UserInfo from '../modules/UserInfo/UserInfo'
import Createpost from '../modules/Createpost/Createpost'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' element={<Body />} />
        <Route path=':postId' element={<SinglePost />} />
        <Route path='userInfo/:userId' element={<UserInfo />} /> 
        <Route path='createpost' element={<Createpost />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router
