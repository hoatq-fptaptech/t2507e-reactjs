import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Category from './pages/Category'

function App() {

  return (
    <>
      <NavMenu/>
      <main>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/category' Component={Category} />
        </Routes>
      </main>
    </>
  )
}

export default App
