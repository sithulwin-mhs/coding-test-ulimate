import React from 'react'

/**
 * Images
 */
import Logo from '../../‌assets/Logo(2).png'
import Notification from '../../‌assets/Notifications.png'
import Profile from '../../‌assets/profile.png'

const Navigation = () => {
  return (
    <div className="bg-navigation">
        <div class="flex justify-between px-4 py-1">
            <div class="w-20 h-auto cursor-pointer">
                <img src={Logo} className="" alt="Logo" />
            </div>
            <div class="flex-grow">
            </div>
            <div class="nav-style">
                <img src={Notification} className="" alt="Notification" />
            </div>
            <div class="nav-style">
                <img src={Profile} className="" alt="User Profile" />
            </div>
            <div class="nav-style">
                <p className='font-default-white'>Lisa <br></br> Operator</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation