import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Category from './pages/Category'
import Register from './pages/Register'
import Detail from './pages/Detail'
import { initState, StoreProvider } from './store/StoreContext'
import { useState } from 'react'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  const [store,setStore] = useState(initState);
  return (
    <StoreProvider value={{store,setStore}}>
      <NavMenu/>
      <main>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/category' Component={Category} />
          <Route path='/product/:id' Component={Detail} />
          <Route path='/register' Component={Register} />
          <Route path='/cart' Component={Cart} />
          <Route path='/checkout' Component={Checkout} />
        </Routes>
      </main>
    </StoreProvider>
  )
}

export default App
