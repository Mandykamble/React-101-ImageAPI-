"use client"
import axios from 'axios'
// import React from 'react'
import React from 'react'
import {useState} from 'react'




const page = () => {
  const [Images, setImage] = useState([])
  const getImages = async () =>{
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
        const data=response.data;
        console.log(data);
        setImage(data)
      } catch (error) {
        console.error("error");
      }
  }
  return (
<>
    <button onClick={getImages}  >
    GetImages
    </button>


    <div>
      {Images.map((elem,i)=>{
       return <>
       
        <img 
       key={i}
        src={elem.download_url}
        width={400}
        className=' border-double border-4 border-indigo-600 m-2 inline-block  aline-center justify-center p-3'
        />
        </>
      })}
    </div>
</>
  )
}

export default page