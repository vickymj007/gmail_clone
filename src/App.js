import Inbox from './layouts/Inbox';
import Main from './layouts/Main';
import Starred from './layouts/Starred';
import Sent from './layouts/Sent';
import Drafts from './layouts/Drafts';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Trash from './layouts/Trash';
import Important from './layouts/Important';
import Login from './layouts/Login';
import AuthRequired from './helpers/AuthRequired';
import CheckIfUserExist from './helpers/CheckIfUserExist';
import {Toaster} from 'react-hot-toast'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { signInUser } from './redux/userSlice';
import FullEmail from './layouts/FullEmail';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<AuthRequired/>}>
      <Route path='/' element={<Main/>}>
        <Route index element={<Inbox/>}/>
        <Route path='full-email/:id' element={<FullEmail/>}/>
        <Route path='starred' element={<Starred/>}/>
        <Route path='drafts' element={<Drafts/>}/>
        <Route path='important' element={<Important/>}/>
        <Route path='trash' element={<Trash/>}/>
        <Route path='sent' element={<Sent/>}/>
      </Route>
    </Route>
      <Route element={<CheckIfUserExist/>}>
        <Route path='login' element={<Login/>}/>
      </Route>
  </Route>
))


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    
    if(user){
      dispatch(signInUser(user))
    }

  },[dispatch])

  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  );
}

export default App;
