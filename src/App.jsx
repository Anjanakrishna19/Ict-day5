import './App.css'

import ViewStudent from './components/ViewStudent'
import { Route, Routes } from 'react-router-dom'
import AddStudent from './components/AddStudent'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/at' element={<AddStudent/>}/>
        <Route path='/vt' element={<ViewStudent/>}/>
          <Route path='/' element={<ViewStudent/>}/>    
      </Routes>
    </>
  )
}

export default App;