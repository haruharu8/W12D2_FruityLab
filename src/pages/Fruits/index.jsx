import React, { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'

const Fruits = () => {
    const [fruits,setFruits] = useState([])

    useEffect(()=>{
      axios({
          method: "GET",
          url: "/fruits",
      }).then((res)=>{
        console.log(res.data);
          setFruits(res.data);
      })

  },[])

console.log(fruits);


  return (
    <div>Show all fruits here:
        <ul>
        {fruits.map((fruit)=>{
            return (
                <li key={fruit.name}>
                <p>{fruit.name}</p>
                <p>{fruit.color}</p>
                <p>{fruit.age}</p>
                <p>{fruit.readyToEat}</p>
            </li>
        )})}
        </ul>
    </div>
  )
}

export default Fruits