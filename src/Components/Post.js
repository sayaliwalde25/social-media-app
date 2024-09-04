import React, { useState } from 'react'
import '../all css/Post.css'
import { user } from "../pages/dummydata";

import img2 from '../Images/like.jpg'
import img3 from '../Images/heart.jpg'

import { MdMoreVert } from "react-icons/md";


function Post({post}) {

   const[like,setLike] = useState(post.like)
   const[IsLike,setIsLike] = useState(false)
  
   const likeHandler = ()=>{
    setLike(IsLike ? like-1 : like+1)
    setIsLike(!IsLike)
   } 
  return (
    <div className='Post'>
        <div className='postWrapper'>
          <div className='PostTop'> 
             <div className='postTopLeft'>
             <img className='postProfileImg' 
             src={user.filter(u=>u.id === post?.userId)[0].profilePicture} 
             alt=''/>
             <span className='postUsername'>{user.filter(u => u.id === post?.userId)[0].username}</span>
             <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
          <MdMoreVert />
       </div>
    </div>
    <div className='postCenter'>
        <span className='postText'>{post?.desc}</span>
        <img className='postImg' src={post.photo} alt='' />
    </div>
    <div className='postBottom'>
        <div className='postBottomLeft'>
            <img className='likeIcon'   src={img2} onClick={likeHandler}alt=''/>
            <img className='likeIcon'  src={img3} onClick={likeHandler} alt=''/>
            <span className='postLikeConuter'>{like} people like it </span>
        </div>
        <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
        </div>
    </div>
  </div>
</div>
  )
}

export default Post