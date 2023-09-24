import Inbox from './layouts/Inbox';
import Main from './layouts/Main';
import Starred from './layouts/Starred';
import Sent from './layouts/Sent';
import Drafts from './layouts/Drafts';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Trash from './layouts/Trash';
import Important from './layouts/Important';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Main/>}>
    <Route index element={<Inbox/>}/>
    <Route path='starred' element={<Starred/>}/>
    <Route path='drafts' element={<Drafts/>}/>
    <Route path='important' element={<Important/>}/>
    <Route path='trash' element={<Trash/>}/>
    <Route path='sent' element={<Sent/>}/>
  </Route>
))


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
