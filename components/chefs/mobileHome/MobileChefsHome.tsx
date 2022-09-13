import React from 'react'
import { useSelector } from 'react-redux'
import { Box , Card , NameChef, Name , Chef } from './style'

export default function MobileChefsHome() {

  const chefs = useSelector((state:any) => state.chefs.value);

  return (
    <Box>
    {chefs.map((chef:any) => (
        <Card>
                {/* <img className='img' src={chefs.picURL} alt=""></img> */}
                {/* <NameChef> */}
            <Name> {chef.name} </Name>
            
            
        </Card>
    ))}
</Box>
  )
}
