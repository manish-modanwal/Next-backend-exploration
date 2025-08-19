"use client"
import axios from "axios"
import { useEffect } from "react"

export default function Reload(){
    
    useEffect(()=>{
         axios.get("https:123.com")
    },[])
    


    return <div>
        <button onClick={()=>{
            console.log("hi i'm client side rendered")
        }}> manish </button>
        <br />
        hi im server side rendered
    </div>
}