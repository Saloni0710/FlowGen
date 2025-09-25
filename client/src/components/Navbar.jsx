import React from 'react'
import { assets } from '../assets/assets'
// whenever user clicks on logo it has to navigate back to home page so we need this 
import { useNavigate } from 'react-router-dom'
// we require the ArrowRight icon from lucide react for get started in navbar
import { ArrowRight } from 'lucide-react'
// build in methods provided by clerk-react
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'


const Navbar = () => {
    
   // useNavigate() is a react router hook that lets you go to another page (route) used here to go back to home page on clicking the logo symbol in the navbar
    const navigate = useNavigate()
    // Hey Clerk, give me the information of the person who is currently logged in.
    const {user} = useUser()
    // Hey Clerk, I want a button that opens the Sign In popup when clicked.
    const { openSignIn } = useClerk()


  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      {/* Onclick property is added to this image i.e. on clicking on this img we will be navigated/redirected to home page ('/') */}
      <img src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' onClick={()=> navigate('/')}/>

      { 
        // if user is logged in display the userButton ( its a ternary operator)
        user ? <UserButton /> 
        :
        // if user is not logged in display the button get started  
        (  
          // button tag , ArrowRight from lucide-react that gives us logo images , onclick property for button to openSignIn , button name - get started
          <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/> </button>
        )
      }

      
    </div>
  )
}

export default Navbar

/* 

useClerk() - It is a React hook(a built in function) to access Clerk tools . From this we can get methods like 
openSignIn() - opens sign in Modal
openSignUp() → opens sign-up modal
signOut() → logs the user out
navigate() → navigate using Clerk logic */

/* 

user gives us the current logged in users info
like if some user is signed in then user contains ( for example ) :
{
  id: 'user_abc123',
  firstName: 'Summeet',
  lastName: 'Sharma',
  emailAddresses: [{ emailAddress: 'summeet@example.com' }],
  imageUrl: 'https://clerk.dev/avatar.png'
}

*/

/*

 UserButton is a prebuilt UI component from clerk that :
  Displays the user's profile photo or initials
  Opens a dropdown menu when clicked
  That menu includes options like:
1)View profile
2)Manage account
3)Sign out

*/
