import React from 'react'
// import Theme from 'theme'
// import { Link } from 'react-router'
// import { paths } from 'constants'
// import classes from './Home.scss'
import HomeSlider from './HomeSlider'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import HomeFooter from './HomeFooter'
import HomeCTA from './HomeCTA'
// const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
// const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

export const Home = () => (
  <div>
    <HomeSlider />
    <HomeCTA />
    <HomeAbout />
    <HomeServices />
    <HomeFooter />
  </div>
)

export default Home
