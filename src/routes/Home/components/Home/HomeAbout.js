import React from 'react'
// import styled from 'styled-components'
import Calvin from '../../../../assets/calvinshirtoffingym.jpg'
import Paper from 'material-ui/Paper'

const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const pic = { borderRadius: 85 }

const calPic = () => {
  return <img style={pic} width={200} height={200} src={Calvin} />
}

export const HomeAbout = () => (
  <div className="row">
    <div className="col s4">
      <Paper style={style} zDepth={5} rounded={false} Children={calPic} />
      <image src={Calvin} />
    </div>
    <div className="col s8">
      <h5>The Real Calvin Jackson</h5>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </div>
  </div>
)

export default HomeAbout
