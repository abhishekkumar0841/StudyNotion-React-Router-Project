import React from 'react'
import logo from "../assets/Logo.svg";

const Dashboard = () => {
  return (
    <div  className='flex gap-4 flex-col justify-center items-center w-full h-5/6 text-white'>
      <div className='text-4xl font-bold tracking-widest'>Welcome to ...</div>
      <img src={logo} alt="" />
    </div>
  )
}

export default Dashboard
