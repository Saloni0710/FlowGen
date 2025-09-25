import React, { useState } from 'react'
// Outlet is a react component used in nested routing to render child routes inside a parent route
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
// X is the cross symbol to cut the sidebar and menu is the three line symbol to open the sidebar
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  
  // here navigate is to redirect back to home page on clicking of icon 
  const navigate = useNavigate()
  // by default sidebar will be closed on small screen
  const [sidebar, setSidebar] = useState(false)
  // used to verify if user present / logged in
  const {user} = useUser()
  
   // if user is present then only sidebar will be displayed 
  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>

      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="" onClick={()=>navigate('/')} />
        {
          // In this object if the sidebar is true (means it is open ) so on clicking X it gets close and set the sidebar to false using setSidebar function 
          sidebar ? <X onClick={()=> setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
          // if the sidebar is false i.e. we can seethe menu icon then on click the setSidebar function will be true and sidebar will be displayed
          : <Menu onClick={()=> setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className='flex-1 bg-[#F4F7FB]'>
            <Outlet />
          </div>
      </div>
      
      
    </div>
  // if user is not present then he will need to sign in first
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout


/*

const [sidebar, setSidebar] = useState(false);

It is using Reacts useState hook to create state in a functional component
1) useState(false) - Initializes the state variable with a value of false (i.e., sidebar is initially hidden or closed).
2) sidebar - 	A state variable that stores the current value of the sidebar (open or closed).
3) setSidebar - A function used to update the value of sidebar.

You want to show or hide it based on a button click. You’ll need to store that toggle state — this is what sidebar does.
The menu icon will be hidden on small screen
*/