import React from "react";
import nitjmainbuilding from "./nitjmainbuilding.jpg";

export default function Home() {
  return (
    <>
      <div className="home" id="homejs">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> WELCOME TO DEVELOPERS CONFERENCE 2024</h3>
            </div>
          </div>
        </div>
        <div className="nitjmainbuildingdiv">
          <img src={nitjmainbuilding} alt=""id="nitjmainbuildingimg" />
        </div>
        </div>
        <div className="button"><button id="buttonimg">Register</button></div>
      
    </>
  );
}
