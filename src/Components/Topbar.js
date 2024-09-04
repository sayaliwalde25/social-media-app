import React from 'react'
import '../all css/Topbar.css'
import { CiSearch } from "react-icons/ci";

import { IoPersonAddOutline } from "react-icons/io5";
import { BsChatHeart } from "react-icons/bs";
import { MdCircleNotifications } from "react-icons/md";

import img from '../Images/girl1.jpg'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Lamasocial</span>
        </div>          
         <div className='topbarCenter'>
           <div className='searchbar'>
           <CiSearch  className='searchIcon'/>

           <input placeholder='Serach for friend, post or video' className='searchInput'/>
           </div>
         </div>
         <div className='topbarRight'>
            <div className='topbarLinks'>
               <span className='topbarLink'>Homepage</span>
               <span className='topbarLink'>Timeline</span>
             </div>
             <div className='topbarIcons'>
               <div className='topbarIconItem'>
               <IoPersonAddOutline />
               <span className='topbarIconBadge'>1</span>
              </div>
              <div className='topbarIconItem'>
               <BsChatHeart /> 
               <span className='topbarIconBadge'>2</span>
              </div> 
              <div className='topbarIconItem'>
              <MdCircleNotifications />
              <span className='topbarIconBadge'>3</span>
              </div>
             </div>
             <img src={img} alt='' className='topbarImg' />
         </div>
    </div>
  )
}

export default Topbar