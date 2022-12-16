import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Announcements from '../pages/Announcements'
import App from '../App'
import Apps from '../pages/Apps'
import Calender from '../pages/Calender'
import Dashboard from '../pages/Dashboard'
import Directory from '../pages/Directory'
import OfficeMap from '../pages/OfficeMap'
import Settings from '../pages/Settings'
import Teams from '../pages/Teams'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/calender',
        element: <Calender />,
      },
      {
        path: '/teams',
        element: <Teams />,
      },
      {
        path: '/directory',
        element: <Directory />,
      },
      {
        path: '/announcements',
        element: <Announcements />,
      },
      {
        path: '/office',
        element: <OfficeMap />,
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])

export default router
