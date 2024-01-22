"use client"

import { useState } from "react"
import Header from '@/app/Components/Header'
import React from 'react'
import Swal from 'sweetalert2'
// import 'ldrs/ring'
// import 'ldrs/pulsar'

const page = () => {

  var [age, setage] = useState(20)
  var [name,setName] =useState("mandar")
  const user="Xenon";
  return (
    <>

    <div>
        {/* <Header user={user}></Header> */}
    <h1 className='font-bold text-xl text-red-400'> {name}   {age}
    </h1>
    
    <button onClick={()=>{
      setage(age++);
      Swal.fire({
        title: `Age Updated to ${age}`,
        // text: "You clicked the button!",
        icon: "success"
      });
    }}  className='border-2 px-5 py-2 rounded mt-5 rounded-sm bg-gray-400'>
      Update
    </button>


    <label >Name</label>
    <input type="text" class="form-control p-3 border" id="inputAddress" placeholder="enter  name"
   onChange={(e)=> setName(e.target.value)}></input>
    
   </div>
    </>
    
  )
}

export default page