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

const About = styled.section`
  display: block;
  width: 100%;
  padding: 30px 0 10px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 40px;
  margin: 50px;
  background-color: white;

  &:after,
  :before {
    box-sizing: inherit;
  }
`
const AboutContainer = styled.div`
  @media only screen and (max-width: 991px) and (min-width: 768px) .ui.container {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.container {
    display: block:
    max-width: 100%!important;
  }

  .container{
    width: 1200px
  }

  @media screen and (max-width: 1024px){
    .container{
      width: auto!important;
    }
    .container {
      width: 100px;
      margin: 0 auto;
      padding: 0 10px
      position: relative;
    } 

    & :after, :before {
      box-sizing: inherit;
    }

    div{
      display: block
    }
  }
`
const About2Col = styled.div`
  .ui.grid {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 0;
    margin: -1rem;
  }

  &:after,
  :before {
    box-sizing: inherit;
  }
  user agent stylesheet div {
    display: block;
  }
`
const AboutCol = styled.div`
  .ui[class*='two column'].grid > .column:not(.row),
  .ui[class*='two column'].grid > .row > .column {
    width: 50%;
  }
  .ui.grid > .column:not(.row) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .ui.grid > .column:not(.row),
  .ui.grid > .row > .column {
    position: relative;
    display: inline-block;
    width: 6.25%;
    padding-left: 1rem;
    padding-right: 1rem;
    vertical-align: top;
  }
  .ui.grid > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  & :after,
  :before {
    box-sizing: inherit;
  }
  user agent stylesheet div {
    display: block;
  }
`
const AboutHeader = styled.h4`
  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  p:first-child {
    margin-top: 0;
  }
  h1 {
    color: #00b3df;
    font-size: 40px;
  }
  h1 {
    color: #000;
    font-family: 'Swatchit', Arial, Helvetica, sans-serif;
    font-weight: normal;
    margin: 0 0 15px;
    padding: 5px 0;
  }
  h1 {
    min-height: 1rem;
    font-size: 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    line-height: 1.2857em;
    margin: calc(2rem - 0.14285em) 0 1rem;
    font-weight: 700;
    padding: 0;
  }
  & :after,
  :before {
    box-sizing: inherit;
  }
  user agent stylesheet :-webkit-any(article, aside, nav, section) h1 {
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
  }
  user agent stylesheet h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }
`

const AboutParagraph = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 2vm;
  float: right;
  .home-page p {
    font-size: 18px;
    line-height: 1.16em;
  }
  > p {
    margin: 0 0 1em;
    line-height: 1.4285em;
  }
  &:after,
  :before {
    box-sizing: inherit;
  }
  > user agent stylesheet p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
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
  <About className="home-page withpadding blogteaser ui">
    <AboutContainer className="container ui">
      <About2Col className="row ui two column stackable grid">
        <AboutCol className="col 6 column ui">
          <Paper style={style} zDepth={5} children={calPic(Calvin)} />
        </AboutCol>
        <AboutCol className="col 6 column ui">
          <AboutHeader className="ui">About Calvin Jackson</AboutHeader>
          <AboutParagraph className="ui">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </AboutParagraph>
          <div className="ui">
            <RaisedButton
              onClick={paths.login}
              label={<Link to={paths.login}>Learn More</Link>}
              labelPosition="before"
              secondary
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </AboutCol>
      </About2Col>
    </AboutContainer>
  </About>
)

export default HomeAbout
