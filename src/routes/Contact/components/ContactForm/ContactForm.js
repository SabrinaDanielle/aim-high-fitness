import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { CONTACT_FORM_NAME } from 'constants'
import { required, validateEmail } from 'utils/form'
import classes from './ContactForm.scss'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ironHouse from '../../../../assets/IMG_26881.jpg'
import styled from 'styled-components'

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

const FindMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
`

const ContactForm = ({ pristine, submitting, handleSubmit }) => (
  <div>
    <FindMe>
      <h1>Contact</h1>
      <img src={ironHouse} height="300px" width="300px"/>
      <p>
        You can find me at the <b>Iron House</b> gym Monday-Sunday from 12:00 am
        - 11:59 pm; or send me a message...
      </p>
    </FindMe>

    <form className={classes.container} onSubmit={handleSubmit}>
      <Field
        name="Name"
        component={TextField}
        floatingLabelText="Name"
        validate={required}
      />
      <Field
        name="email"
        component={TextField}
        floatingLabelText="Email"
        validate={[required, validateEmail]}
      />
      <div>
        <Field name="Subject" component={renderSelectField} label="Subject">
          <MenuItem
            value="Online Subscription"
            primaryText="Online Subscription"
          />
          <MenuItem value="Personal Training" primaryText="Personal Training" />
          <MenuItem value="Merchandise" primaryText="Merchandise" />
          <MenuItem value="Events" primaryText="Events" />
        </Field>
      </div>
      <Field
        name="notes"
        component={TextField}
        label="Message"
        multiLine
        rows={5}
      />
      <div className={classes.submit}>
        <RaisedButton
          label="Submit"
          primary
          type="submit"
          disabled={pristine || submitting}
        />
      </div>
    </form>
  </div>
)

ContactForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired, // added by redux-form
  label: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
  children:PropTypes.any.isRequired
}

export default reduxForm({
  form: CONTACT_FORM_NAME
})(ContactForm)
