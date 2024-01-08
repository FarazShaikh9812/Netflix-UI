import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolled(false);
  } else {
      setIsScrolled(true);
  }
    return() => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://imgs.search.brave.com/wgBHIIfgssVBtfwYC227BBTnm530qhqvzVGm1YSiFgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw" alt="img not available" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                    <Search className="icon"/>
                    <span>
                      KID  
                    </span>
                    <Notifications className="icon"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS776aVixNv0JtxaRx_NnngzvvoAg88vVawKA&usqp=CAU" alt="img not available" />
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div> 
                  </div>                       
                </div>        
        </div>
    </div>
  )
}

export default Navbar