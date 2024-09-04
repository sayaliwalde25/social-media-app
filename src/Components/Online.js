import React from 'react'
import '../all css/Online.css'


function Online({user}) {


  // const { profilePicture = defaultImage, username  } = user;

  return (
    <div>
         <li className='rightbarFriend'>
              <div className='rightbarProfileImgContainer'>
                <img className='rightbarProfileImg'src={user.profilePicture}/>
               <span className='rightbarOnline'></span>
              </div>
              <span className='rightbarUsername'>{user.username}</span>         
            </li>
    </div>
  )
}

export default Online