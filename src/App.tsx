import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/constants/theme'
import Sidebar from './components/Sidebar'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </ChakraProvider>
  )
}
export default App
