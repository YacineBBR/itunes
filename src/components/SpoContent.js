import React from 'react'


function SpoContent(props) {
  return (
    <div>
               <div> {props.albume.photo} </div>        
                <h2> {props.albume.title}</h2>
                <h3> {props.albume.albumename} </h3>
    



    </div>
  )
}

export default SpoContent