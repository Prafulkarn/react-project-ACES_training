import { useState } from "react";


 function LearningUseState()
 {
//    console.log(useState())
//    const[name,setName]=useState("Praful")
//    const[age,setAge]=useState(22)
   const[counter,setCounter]=useState(0)
   
    // let counter=0
    function increaseCounter()
    {
    //    counter++;
          setCounter(counter+1)
    }
    function decreaseCounter()
    {
        // setCounter(counter-1)
        if (counter > 0) {
      setCounter(counter - 1);
    }
    }
    return (
        <>
         <h1>{counter}</h1>
         <button onClick={increaseCounter}>+</button>
         <button onClick={decreaseCounter}>-</button>
         </>
    )
 }
       
 
 
 export default LearningUseState