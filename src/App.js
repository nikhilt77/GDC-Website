import image1 from "./image-1.png";
import React from "react";
import "./style.css";
function App (){
  return(
    <div className="Main">
      <div className="About">
        <h2>About</h2>
        <p>This is the about page</p>
      </div>
      <div className="Nav">
        <img src={image1}></img>
        <div className="QuickLinks">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="Contact">
        <h5>CONTACT US</h5>
          <ul>
            <li>Model Engineering College</li>
            <li>Thrikkakara,Kochi</li>
            <li>Kerala,PIN:682021</li>
            <li>Contact Id: principal@mec.ac.in</li>
            <li>Phone/Fax: +91-484-2577379</li>
          </ul>
        </div>
      </div>
      <p>@ 2024 GDC MEC All rights reserved. <a href="#">Terms & Conditions</a><a href="#">|Privacy Policy</a></p>
    </div>
  )
}
export default App;