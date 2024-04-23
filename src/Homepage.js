import "./Homepage.css";
import React from 'react';
import SideNav from "./navigation/SideNav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className='homepage'>
       <div className="homepage__nav">
       <SideNav />
       </div>
       <div className="homepage__timline">
      <Timeline />
       </div>


    
    </div>
  )
}

export default Homepage