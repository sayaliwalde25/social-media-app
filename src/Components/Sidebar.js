import React from 'react'
import '../all css/Sidebar.css'
import {user} from '../pages/dummydata'

import img from "../Images/girl2.jpg"
import img1 from '../Images/courses.jpg.png'
import img2 from '../Images/event (1).png'
import { MdRssFeed } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineGroup } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import CloseFriend from './CloseFriend'



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='siderbarList'>
          <li className='sidebarListItem'>
          <MdRssFeed className='siderbarIcon'/>
          <span className='sidebarListItemText'>Feed </span>
          </li>
          <li className='sidebarListItem'>
          <BsChatHeart className='siderbarIcon'/>
          <span className='sidebarListItemText'>Chat </span>
          </li>
          <li className='sidebarListItem'>
          <IoVideocamOutline className='siderbarIcon'/>
          <span className='sidebarListItemText'>Videos </span>
          </li>
          <li className='sidebarListItem'>
          <MdOutlineGroup className='siderbarIcon'/>
          <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
          <IoBookmarksSharp className='siderbarIcon'/>
          <span className='sidebarListItemText'>BookMarks</span>
          </li>
          <li className='sidebarListItem'>
          <FaRegQuestionCircle className='siderbarIcon'/>
          <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
          <IoBagRemoveOutline className='siderbarIcon'/>
          <span className='sidebarListItemText'>Jobs</span>
          </li> 
          <li className='sidebarListItem'>
          <img src={img2} alt='' className='siderbarIcon'/>
          <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
          <img src={img1} alt='' className='siderbarIcon'/>
          <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
         {user.map(u => (
          <CloseFriend key={u.id} user={u}/>
         ))}
          
          
        </ul>
      </div>
   </div>
  )
}

export default Sidebar