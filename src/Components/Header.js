import { Link } from "react-router-dom"
import React from 'react'

const Header = () => {
    return (
        <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container" style={{marginLeft: -15, fontSize: 20, fontWeight: "bold"}}> 
            <Link className="navbar-brand" to={"#"}>Medical Report System</Link>
            
          </div>
        </nav>
      </div>
    )
}

export default Header;
