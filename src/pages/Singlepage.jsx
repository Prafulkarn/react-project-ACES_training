 import { useState,useEffect } from "react"
import About from "./Components/About"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"




function Singlepage(){
    const data=useParams()
    const[blog,setBlog]=useState({})
    async function fetchSingleBlog(){
      const response= await axios.get("https://687af35babb83744b7ee46ca.mockapi.io/blogs/"+ data.id)
      console.log(response)
      if(response.status==200){
             setBlog(response.data)
      }else{
        alert("An error occured")
      }
    }
    useEffect(()=>{  /*callback function */
            fetchSingleBlog()
        },[])
     const navigate=useNavigate()
     async function deleteBlog(){
        const response= await axios.delete("https://687af35babb83744b7ee46ca.mockapi.io/blogs/"+ data.id)
      if(response.status==200){
             navigate("/")
      }else{
        alert("An error occured")
      }
    }

       
    
    return(
        <>
        <Navbar/>
        <div>
            <img src={blog.image} alt=""/>
            <h1>{blog.title}</h1>
            <h1>{blog.subtitle}</h1>
            <h1>{blog.description}</h1>
             <Link to={'/edit/'+ blog.id}>
             <button className="bg-blue-500 text-white">Edit me</button>
             </Link>
            <button onClick={deleteBlog} className="bg-red-500 text-white">Delete me</button>
        </div>
        {/* <Card/>  */}
        {/* <About/> */}
        </>

    
    )
}
 export default  Singlepage