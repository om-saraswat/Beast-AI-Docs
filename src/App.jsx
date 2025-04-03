
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Lside from './Components/Leftsidebar/Lside'

function App() {
  return (
    <div className="parent">
      <Lside className='sidebar'/>
      <div className="main-content">
        <Header className='header'/>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App;