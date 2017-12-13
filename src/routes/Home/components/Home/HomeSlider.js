import React from 'react'
import BAHero from '../../../../assets/BAHero.png'
import BAHero2 from '../../../../assets/ba6-photo-grid.jpg'
import AHlogo from '../../../../assets/Asset 2.png'
import { Slider, Slide } from 'react-materialize'

export const HomeSlider = () => (
  <Slider indicators={false}>
    <Slide src={BAHero} title="This is our big Tagline!">
      Here's our small slogan.
    </Slide>
    <Slide src={BAHero2} title="Left aligned Caption" placement="left">
      Here's our small slogan.
    </Slide>
    <Slide src={AHlogo} title="Right aligned Caption" placement="right">
      Here's our small slogan.
    </Slide>
  </Slider>
)

export default HomeSlider
