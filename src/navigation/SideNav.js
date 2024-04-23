import"./SideNav.css"; 

import React from 'react'
//importing icons 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';  
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

function SideNav() {
  return (
    <div className="sidenav"> 
        <FaInstagram className = "sidenav__logo" />
         {/*Icons */}

        <div className="sidenav__buttons">
            <button className="sidenav__button">     
                <HomeIcon />
            </button>   

            <button className="sidenav__button">     
                <SearchIcon />
            </button>   

            <button className="sidenav__button">        
                <ExploreIcon />
            </button> 
        
            <button className="sidenav__button">     
                <SlideshowIcon />
            </button>   
            
            <button className="sidenav__button">        
                <ChatIcon />
            </button>   
            
            <button className="sidenav__button">     
                <FavoriteBorderIcon /> 
            </button>   
            
            <button className="sidenav__button">                     
                <AddCircleOutlineIcon />
            </button>   

        </div>

        <div className="sidenav__more">
            <button className="sidenav__button">     
                    
                    <MenuIcon />
                    </button>   
        </div>
        <div className="sidenav__thread">
            <button className="sidenav__button">     
                    
                    <FaThreads />
                    </button>   
        </div>
        
    </div>
  )
}

export default SideNav