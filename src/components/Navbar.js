import React from 'react';


export default function Navbar(){
    return(
        <>
        <div className="nav">
            <div className="devconf">
                DEVELOPERS CONFERENCE
            </div>
            <div className="menu">
                <a href="#homejs"><h4>Home</h4></a>
                <a href="#aboutjs"><h4>About</h4></a>
                <a href="#sponsorsjs"><h4>Sponsors</h4></a>
                <a href="#locationjs"><h4>Location</h4></a>
                <a href="#registrationjs"><h4>Registration Fees</h4></a>
                <i class="ri-menu-3-line"></i>
            </div>
        </div>
        </>
    );
}