import {Box , Para , Text , Chef, Words} from './Style' 
export default function Week() {
  return (
    <Box>
      <Text>Chef Of The Week :</Text>
             <Chef>
                  <img src = "Card.png" alt="ChefCard"/>
            </Chef>
        <Para> Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades
            , including running the kitchen in his first restaurant, the fondly-remembered Violet
            , located in Moshav  Udim. Shitrit's creativity and culinary  
            acumen born of long experience  are expressed in the every detail of each and every dish.</Para>
    </Box>
  )
}