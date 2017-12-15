import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

import { CONTACT_PATH, SERVICES_PATH, MERCHANDISE_PATH } from 'constants'

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #c63430;
  text-align: center;
`

const buttonStyle = {
  color: 'white',
  textDecoration: 'none',
  alignSelf: 'center'
}

const HomeSubNav = () => (
  <SubNav>
    <div>
      <Link to={CONTACT_PATH}>
        <FlatButton label="Contact" style={buttonStyle} />
      </Link>
      <Link to={SERVICES_PATH}>
        <FlatButton label="Services" style={buttonStyle} />
      </Link>
      <Link to={MERCHANDISE_PATH}>
        <FlatButton label="Merchandise" style={buttonStyle} />
      </Link>
    </div>
  </SubNav>
)

export default HomeSubNav
