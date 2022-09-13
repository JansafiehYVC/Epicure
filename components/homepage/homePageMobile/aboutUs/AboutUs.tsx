import { About, Box, Logof, Logos } from './Style';

export default function AboutUs() {
  return (
    <Box>
      <Logof>
        <img src="EpicureLogo.svg" alt="EpicureLogo" />
      </Logof>
      <Logos>
      <img src="GooglePlay.svg" alt="GooglePlay" />
      </Logos>
      <Logos>
      <img src="AppStore.svg" alt="AppStore" />
      </Logos>
      <About>
        <h3>About Us : </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
          eu ipsum. Cras porta malesuada eros, eget blandit
          turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
          dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
          eu ipsum. Cras porta malesuada eros.</p>
      </About>
    </Box>
  )
}
