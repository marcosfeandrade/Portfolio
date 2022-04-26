import React from 'react'
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="header-home">
          <section id="header">
            <Header/>
          </section>
        </div>

        <div className="container-body-footer">
          <div className="body-home">
            <Body/>
          </div>

          <div className="footer-home">
            <Footer/>
        </div>
        <a className="link-top" href="#header"><BsFillArrowUpCircleFill/></a>
        </div>
      </div>
    </div>
  )
}

export default Home;