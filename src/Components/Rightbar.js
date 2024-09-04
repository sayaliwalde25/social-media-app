import React from 'react'
import '../all css/Rightbar.css'
import {user} from '../pages/dummydata'

import img from '../Images/gift.jpg'
import img1 from '../Images/party.jpg'
import Online from './Online'

import img2 from "../Images/Persons/girls.jpg"
import img3 from "../Images/Persons/girls1.jpg"
import img4 from "../Images/Persons/girls2.jpg"
import img5 from "../Images/Persons/girls3.jpg"

function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
        <>
           <div className='birthdayContainer'>
          <img className='birthdayImg' src={img} alt=''/>
          <span className='birthdayText'>
             <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src={img1} alt=''/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {user.map(u=> (
           <Online key={u.id} user={u}/>
          ))}
         
        </ul>
        </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>City:</span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>From:</span>
            <span className='rightbarInfoValue'>Madrid</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
       </div>
       <h4 className='rightbarTitle'>User information</h4>
         <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img src={img2} alt='' className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={img3} alt='' className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={img4} alt='' className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={img5} alt='' className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          </div>
      </>
    )

  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
       {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar