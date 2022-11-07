import React, {useState} from "react";

export default function AxiosGet(props){
  console.log(props.data)
  return(
    <>
    {
      props.data?.map(
        (data, i)=>{
          return (
            <div key={i}>
            <h1>{props.data[i].title}</h1>
            <p>{props.data[i].content}</p>
            <span>{props.data[i].price}</span>
            </div>
          )
        }
      )
    }
    </>
  )
}