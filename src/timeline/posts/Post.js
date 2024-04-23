import React, { useState } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FiMessageCircle } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function post({user,postImage,likes,timeStamp,profilePic}) {
  return (
<div className="post">
  <div className="post__header">
    <div className="postHeader__Author">
   <Avatar sx={{ height: '25px', width: '25px'}} >{user.charAt(0).toUpperCase()}</Avatar>  {user} • <span> {timeStamp}</span>
    </div>
    <MoreHorizIcon />
  </div>
  <div className="post__image">
    <img src={postImage} alt="" />
  </div>

  <div className="post__footer">
    <div className="postFooterIcon">
      <div className="post__iconMain">
        <FaRegHeart className='postIcon' />
        <FiMessageCircle className='postIcon'/> 
        <FaTelegramPlane className='postIcon'/>
      </div>
      <div className="post_iconSave">
        <FaRegBookmark className='postIcon'/>
      </div>
    </div>
    <div className='postFooterIcon'>Liked by {likes} people
      </div>
  </div>
</div>
  )
}

export default post