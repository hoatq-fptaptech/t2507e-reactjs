import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Category from './pages/Category'
import Register from './pages/Register'
import Detail from './pages/Detail'

function App() {

  return (
    <>
      <NavMenu/>
      <main>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/category' Component={Category} />
          <Route path='/product/:id' Component={Detail} />
          <Route path='/register' Component={Register} />
        </Routes>
      </main>
    </>
  )
}

export default App
