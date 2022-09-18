import React from 'react'

import {Search ,Input ,Box } from './Style'

export default function Hero() {
  return (
    <Box>
       <Search>
        <Input>
         <input type="text" placeholder="Search.."></input>
         </Input>
        </Search>
    </Box>
   
  )
}
