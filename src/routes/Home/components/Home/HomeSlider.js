import React from 'react'
import AHLogo from '../../../../assets/AHLogo_2.png'
import BA2 from '../../../../assets/BA2.png'
import BA1 from '../../../../assets/Asset 2.png'
import { Slider, Slide } from 'react-materialize'
import styled from 'styled-components'

const Bungee = styled.div`
  font-family: 'Sirin Stencil', cursive;
  text-shadow: 2px 2px #000000;
`

export const HomeSlider = () => (
  <Bungee>
    <Slider indicators={false}>
      <Slide src={AHLogo} />>
      <Slide src={BA2} title="TRANSFORM INTO YOUR BEST SELF">
        Lose Weight. Get Fit. Live Long
      </Slide>
      <Slide src={BA1} title="CUSTOM SERVICES">
        Programs Created Just for you! Get Fit Your Way.
      </Slide>
    </Slider>
  </Bungee>
)

export default HomeSlider
