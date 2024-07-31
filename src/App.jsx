import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CreateWorkspace, Workspace }from './Screens/index.js'
import { MOOK } from './data.js'
import { saveMook } from './localStorageFns.js'

function App() {
    saveMook(MOOK)
  return (
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Home/>} path='/Home'></Route>
        <Route element={<CreateWorkspace/>} path='/CreateWorkspace'></Route>
        <Route element={<Workspace />} path="Workspace/:workspace_id/:channel_id/*"/>
        <Route element={<Workspace />} path="/*"/>
    </Routes>
  )
}

export default App