import image1 from "./image-1.png";
import React from "react";
import "./style.css";

function App (){
  return(
    <div className="Main">
      <div className="About">
        <h2>About</h2>
        <p>The Game Development Club (GDC) at Govt. Model Engineering College<br></br>is an active community
          of students who are passionate about gaming and<br></br> game development.
          Through hands-on workshops, engaging discussions,<br></br> and innovative projects, 
          members enhance their skills in programming,<br></br> game design, and graphics. 
          The MAZE-X Esports Community within GDC<br></br> organizes exciting multiplayer competitions, 
          providing leadership and<br></br> event management opportunities.
          Our club welcomes diverse interests, 
          creating a space where members can connect with peers and explore the evolving world of gaming and esports.
        </p>
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