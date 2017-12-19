import React from 'react'
import styled from 'styled-components'
import Calvin from '../../../../assets/calvinshirtoffingym.jpg'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { Link } from 'react-router'
import { paths } from '../../../../constants'

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  div: {
    margin: 'auto',
    width: '50%',
    padding: 10
  },
  divTop: {
    marginTop: 5
  }
}

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 40px;
  margin: 50px;
  background-color: white;
  flex-wrap: wrap;
  flex-flow: row-reverse wrap;
`
const AboutHeader = styled.h4``

const AboutParagraph = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 2vm;
  float: right;
`

const style = {
  height: 300,
  width: 300,
  margin: 25,
  textAlign: 'center',
  display: 'inline-block'
}

const calPic = img => {
  return <img width={'100%'} height={300} src={img} />
}

export const HomeAbout = () => (
  <About>
    <div className="row">
      <div className="col s1" />
      <div className="col s3 align: left">
        <Paper style={style} zDepth={5} children={calPic(Calvin)} />
      </div>
      <div className="col 3" />
      <div className="col s3">
        <AboutHeader>About Calvin Jackson</AboutHeader>
        <AboutParagraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </AboutParagraph>
        <RaisedButton
          onClick={paths.login}
          label={<Link to={paths.login}>Learn More</Link>}
          labelPosition="before"
          secondary
          style={styles.button}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
      </div>
      <div className="col s1" />
    </div>
  </About>
)

export default HomeAbout
