import { useState } from "react"
import axios from "axios"
import Card from "./Components/Card"


function CreateBlog(){
    const [title,setTitle]=useState("")
    const [subtitle,setSubtitle]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")
    async function sentDataToBackend(e){
        e.preventDefault()
        await axios.post("https://687af35babb83744b7ee46ca.mockapi.io/blogs",{
            title: title,
            subtitle:subtitle,
            description: description, //same as mock api keys and in object format
            image: image
        })
        console.log(response)
    }
    return(
    <Form/>

    )
}
 export default CreateBlog