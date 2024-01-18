import React from "react";
import xceedlogo from './xceed.png'

export default function Footer(){
    return(
        <>
        <div id="footerjs">
            <div className="footerphoto">
                <img src={xceedlogo} alt="" />
            </div>
            <div className="vl" id="verticalline"></div>
            <div className="footerdescription">
                    <h2>Contact Us</h2>
                    <p>Prof. S. Bajpai</p>
                    <p>Organizing Secretary, DEVCONF-2024</p>
                    <p>NIT Jalandhar</p>
                    <p>Phone:9888895253</p>
                    <p>Email: devconf2024@gmail.com</p>
            </div>
        </div>
        </>
    );
}