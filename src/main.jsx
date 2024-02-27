import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import './index.css'
import Query from './component/Query.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Header from './component/Header.jsx'
import Footer  from './component/Fotter.jsx'

const router= createBrowserRouter([
{ 
  path:"/",
  element:<App/>,
  children:[

    {
      path:"",
      element:<Home/>
    },
    {
      path:"about/:username/:course",
      element:<About/>
    }]

},
{
  path:'/query',
  element:<><Header/><Query/><Footer/></>
}



])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
