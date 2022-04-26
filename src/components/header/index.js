import React , {useState} from 'react';
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import { BiMenu } from "react-icons/bi";

function Header() {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"><a href="#header" id="mfa-logo">MFA 👨‍💻</a></div>
      <div className="menu">
        <div className="web-menu">
          <Web/>
        </div>
        <div className="mobile-menu">
          
          <div onClick = {()=> setIsOpen(!isOpen)}>
          <p className="menu-icon"><BiMenu/></p>
          </div>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
      </div>
    </div>
  );
}

export default Header;