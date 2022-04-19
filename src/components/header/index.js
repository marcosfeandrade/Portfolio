import React , {useState} from 'react';
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";

function Header() {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        Portfolio
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web/>
        </div>
        <div className="mobile-menu">
          
          <div onClick = {()=> setIsOpen(!isOpen)}>
          <p className="menu-icon">V</p>
          </div>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
      </div>
    </div>
  );
}

export default Header;