import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'

const MOOK = {
    "user_info": {
        "id": "1",
        "username": "pepe",
        "email": "pepe@gmail.com",
        "profile_img": "/pepe.webp",
        "active": true
    },
    
    "workspaces": [
        {
            "id": 1,
            "name": "UTN web development",
            "creation_date": "04/10/2023",
            "workspace_img": "/utn_logo.png",
            "chanels": [
                {
                    "id": 1,
                    "name": "general",
                    "messages": [
                        {
                            "id": 1,
                            "author": "pepe",
                            "author_img": "/pepe.webp",
                            "date": "20/07/24",
                            "text": "Buenas, este es el canal general, y es el primer mensaje"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "NASA web development",
            "creation_date": "04/10/2010",
            "workspace_img": "/nasa_logo_icon_181406.webp",
            "chanels": [
                {
                    "id": 1,
                    "name": "general",
                    "messages": [
                        {
                            "id": 1,
                            "author": "pepe",
                            "author_img": "/pepe.webp",
                            "date": "20/07/24",
                            "text": "que hago aca?"
                        }
                    ]
                }
            ]
        }
    ]
}

function App() {

    localStorage.setItem("MOOK", JSON.stringify(MOOK))
  return (
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Home/>} path='/Screens/Home'></Route>
    </Routes>
  )
}

export default App
