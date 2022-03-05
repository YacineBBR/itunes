import React from 'react'
import SpoContent from './SpecOne'

function SpecOne() {

    const albume = [
      {photo:'/our-tunes/public/photos/President_Loki_Official.jpg' , title:'test1' , albumename:'test3'},
    ]

     const description = albume.map( member => 
     <SpoContent
       photo={member.photo}
       title={member.title}
       name={member.name}
       albumename={albume.albumename}
     /> 
     );

  return (
    <div>
      {description}
    </div>
  )
}

export default SpecOne