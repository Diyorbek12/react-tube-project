import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Channel, Main, Navbar } from '../'

export default function app() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel:id' element={<Channel />} />
      </Routes>
    </Box>
  )
}