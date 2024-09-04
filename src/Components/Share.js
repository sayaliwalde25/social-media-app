import React from 'react'
import "../all css/Share.css"
import img from '../Images/girl1.jpg'
import img1 from '../Images/img.jpg.png'
import { MdPermMedia } from "react-icons/md";
import { BiSolidTag } from "react-icons/bi";

import { CiLocationOn } from "react-icons/ci";



function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className='shareProfileImg' src={img} alt=''/>
                <input placeholder='Whats in your mind Safak?' className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                    <MdPermMedia style={{color:"tomato"}} className='shareIcon' />
                      <span className='shareOptionText'>Photo or Videos</span>
                    </div>
                    <div className='shareOption'>
                    <BiSolidTag style={{color:"blue"}} className='shareIcon' />
                      <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                    <CiLocationOn style={{color:"green"}} className='shareIcon' />
                      <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                      😍
                      <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
              <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share