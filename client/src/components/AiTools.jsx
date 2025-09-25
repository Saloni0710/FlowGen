import React from 'react'
// we already have the Ai tools data written in assets.js file 
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
   // here navigate is used to redirect to particular page depending upon which tool it is 
    const navigate = useNavigate()
    const {user} = useUser()

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
        <p className='text-gray-500 max-w-lg mx-auto'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
      </div>

      <div className='flex flex-wrap mt-10 justify-center'>
        {/* You're looping over the array of tool : .map() on AiToolsData */}
        {AiToolsData.map((tool, index)=>(
            //  If the user is logged in (i.e. user exists), then navigate to the tool's path i.e. onClick prorperty ( && used becoz if and only if user exists then only)
            <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' onClick={()=> user && navigate(tool.path)}>
                {/* then we have tools icon taken from assets.js file for each card */}
                <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
                {/* then we display the title for each card */}
                <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                {/* then we display the description for each card */}
                <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools


/*

1) AiToolsData.map((tool, index) => ( ... ))
   .map((tool, index) => (...))

   Loops over AiToolsData array.
   For each item (tool), it returns a React element (a card).
   index is the current position (0, 1, 2, ...), used as the React key.
  
2. key={index}
React requires a unique key for elements inside a list

3. onClick={() => user && navigate(tool.path)}
Only runs navigate(tool.path) if user exists (i.e. user is logged in).

4. Dynamic component rendering: <tool.Icon />
tool.Icon is not a string—it's a React component 
So <tool.Icon /> renders that icon

5. Using template literals in style
   style={{
  background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`
}}
  Allows dynamic values like ${tool.bg.from} inside the string
  This creates a dynamic linear gradient background

6. JSX curly braces: {...}
   {tool.title} → show the title
   {tool.description} → show the description
   {tool.bg.from} → access color value from object
   {tool.Icon} → render a dynamic React component
   {...} inside style → dynamic inline styles
   {AiToolsData.map(...)} → loop and return JSX
   
*/