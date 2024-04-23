import Suggesitons from "./Suggesitons";
import "./Timeline.css";
import React, { useState } from 'react'
import Post from "./posts/Post"
import { Avatar } from "@mui/material";


function Timeline() {

  const  [posts,setPosts] = useState([


    

    {
      user:"Sajafri",
      postImage: "https://i.pinimg.com/736x/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg",
      profilePic: "https://scontent.cdninstagram.com/v/t51.2885-19/434675155_398113013147466_5005636856433586392_n.jpg?stp=dst-jpg_s160x160&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=Fp46EssGHgYAb6Bqk3_&_nc_ht=scontent.cdninstagram.com&oh=00_AfCMayinZgU5CBmYQ9tPL7k-OxeXxJQLxFjdcodgxaFRkw&oe=662D163C",
      likes: 118,
      timeStamp: "2 days ago"
    },

    {
      user:"taruGoswami",
      postImage: "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
      profilePic:"",
      likes: 128,
      timeStamp: "7 days ago"
    },
    {
      user:"Kashaffali",
      postImage: "https://rukminim2.flixcart.com/image/850/1000/ky90scw0/poster/3/v/s/medium-anime-girls-original-characters-women-brunette-long-hair-original-imagagtrzcmedmrg.jpeg?q=20&crop=false",
      profilePic:"",
      likes: 256,
      timeStamp: "4 days ago"
    },
    {
      user:"saminaamajad",
      postImage: "https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035179.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=ais",
      profilePic:"",
      likes: 123,
      timeStamp: "12 April"
    },
    {
      user:"aleenaxxsyed",
      postImage: "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
      profilePic:"",
      likes:100,
      timeStamp: "3 days ago"
    }

  ])

  return (
    <div>
       <div className="timeline__storiesHeader">
            <span><Avatar className="avtar">S</Avatar> Sajafr..</span>
            <span><Avatar className="avtar">T</Avatar>taruGo..</span>
            <span><Avatar className="avtar">K</Avatar>Kashaf..</span>
          </div>


    <div className="timeline">

        <div className="timeline_Left">
          <div className="timeline__posts">
            {posts.map(posts => (
              <Post user = {posts.user} postImage = {posts.postImage} likes = {posts.likes} timeStamp={posts.timeStamp} profilePic={posts.profilePic}/>
              )
            )}
 </div>
        </div>

        <div className="timeline_Right">
            <Suggesitons />
        </div>
        </div>
      </div>
  )
}

export default Timeline