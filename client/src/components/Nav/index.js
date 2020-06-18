import React from "react";

function Nav(){
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Trackster</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/moods">Moods</a></li>
            <li><a href="/today">Today</a></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav