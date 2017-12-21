import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { Link } from 'react-router'
import { paths } from '../../../../constants'
import styled from 'styled-components'

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

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
`

const HomeCTA = () => (
  <CTA style={styles.divTop}>
    <div className="Section" style={styles.div}>
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Sign-Up</Link>}
        labelPosition="before"
        secondary
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Login</Link>}
        labelPosition="before"
        primary
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Contact</Link>}
        labelPosition="before"
        backgroundColor="#D50000"
        secondary
        style={styles.button}
        pulse
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
    </div>
  </CTA>
)

export default HomeCTA
