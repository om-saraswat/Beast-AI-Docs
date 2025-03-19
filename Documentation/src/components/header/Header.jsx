import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";


function Header() {
  return (
    <header class="header">
        <div class="top-header">
            <div class="logo">
            {/* <img src="" alt="" /> */}
            <Link to="/"><h2>Recallr AI</h2></Link>
            </div>
            <div class="search_bar">
              make search component differently with diff specs
            </div>
            <div>
              
              <div class="play_logo">
                {/* <img src="" alt="" /> */}
                <Link to="/playground">Playground</Link>
              </div>
              <div class="discord">
                {/* <img src="" alt="" /> */}
                <a href="milega">Discord</a>
              </div> 
              <div class="git">
                {/* <img src="" alt="" /> */}
                <a href='milega'>RecallrAi/Graphiti</a>
              </div> 
              <div class="dashboard-header">
              <Link to = "/dashboard">
                <button>Dashboard</button>
              </Link>
              </div>
            </div>
        </div>
        <div class="bottom-header">
           <Link to="/documentation" id = "header_link">Documentation</Link>
           <Link to="/SDK-Reference" id = "header_link">SDK-Reference</Link>
           <Link to="/Graphiti" id = "header_link">Graphiti</Link>
        </div>
    </header>
  )
}

export default Header