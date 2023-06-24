import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './components/introduction.js'
import Button from './components/button.js'
import SideBar from './layout/sideBar.js'
import About from './pages/about.js'
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './pages/home.js'
import Room from './pages/room/index.js'
import Users from './pages/users/index.js'

interface CountProps {
  [index: number]: number
}



function App() {
  const [count, setCount] = useState<CountProps>({})
  const handleClick = (index: number) => {
    const updateCount = { ...count }
    updateCount[index] = updateCount[index] ? updateCount[index] + 1 : 1
    setCount(updateCount)
  }

  return (
    <div className='App'>
        <Router>
          <SideBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/room' element={<Room/>}/>
            <Route path='/users' element={<Users/>}/>


          </Routes>
        </Router>
      {/* <Introduction/> */}
      {/* <Button
        type='create'
        value={count[1]}
        onClick={() => handleClick(1)}
      />
      <Button
        type='create'
        disabled
      />
       <Button
        type='delete'
        value={count[2]}
        onClick={() => handleClick(2)}
      /> */}
    </div>
  )
}




export default App
