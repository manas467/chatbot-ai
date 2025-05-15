import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './routes/homepage/Homepage.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Chatpage from './routes/chatpage/Chatpage.jsx'
import Rootlayout from './layouts/rootlayout/Rootlayout.jsx'
import DashboardlayoutS from './layouts/dashboardlayout/DashboardlayoutS.jsx'
import SigninPage from './routes/signPage/SigninPage.jsx'
import SignoutPage from './routes/signoutpage/SignoutPage.jsx'





const router= createBrowserRouter([
  {
    element:<Rootlayout/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/sign-in/*',
        element:<SigninPage/>
      },
      {
        path:'/sign-out/*',
        element:<SignoutPage/>
      },
      {
        element:<DashboardlayoutS/>,
        children:[
          {
            path:'/dashboard',
            element:<Dashboard/>
          },
          {
            path:'/dashboard/chats/:id',
            element:<Chatpage/>
          }
        ]
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
