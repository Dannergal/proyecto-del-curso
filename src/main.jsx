import React from 'react'
import ReactDOM from 'react-dom/client'
import Cuadricula from './components/Cuadricula.jsx'
//import Saludo from './components/Saludo.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './components/Pagina404.jsx'
import App from './components/App.jsx'
import Home from './Home.jsx'
import CriptoPage from './components/cripto/CriptoPage.jsx'
import Perfil from './components/usuarios/Perfil.jsx'
import { UserContextProvider } from './components/context/UserContext.jsx'
import Login from './components/usuarios/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />}/>
                    {/* <Route path='saludo' element={<Saludo />}/> */}
                    <Route path='perfil' element={<Perfil />}/>
                </Route>
                <Route path='/criptomonedas' element={<App />}>
                    <Route index element={<Cuadricula />} ></Route>
                    <Route path=':id' element={<CriptoPage />} ></Route>
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Pagina404 />}/>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
