import { useEffect } from "react"
import {useState} from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import axios from "axios"

function Home(){
    const[blogs,setBlogs]=useState([])
    async function fetchblogs(){
    const response=await axios.get("https://687af35babb83744b7ee46ca.mockapi.io/blogs")
    console.log(response)
    if(response.status==200){

    
    setBlogs(response.data)
    }else{
        alert("Error occured")
    }
    }

    // useEffect(function(){

    // })

    useEffect(()=>{  /*callback function */
        fetchblogs()
    },[])
    console.log(blogs,"This is blogs")
    return(
     <>
     <Navbar/>
     <div className="flex flex-column gap-2 p-0.5 ">
        {blogs.map(function(blog){
                console.log(blog);

return(
                
                <Card key={blog.id} blog={blog}/>
            )
        })}
     
    
     </div>
     </>

    )
}
 export default  Home