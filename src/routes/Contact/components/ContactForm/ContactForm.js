import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { CONTACT_FORM_NAME } from 'constants'
import { required, validateEmail } from 'utils/form'
import classes from './ContactForm.scss'

const ContactForm = ({ pristine, submitting, handleSubmit }) => (
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
    <Field
      name="notes"
      component={TextField}
      label="Message"
      multiLine
      rows={5}
    />
    <Field
      name="password"
      component={TextField}
      floatingLabelText="Password"
      type="password"
      validate={required}
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
)

ContactForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired // added by redux-form
}

export default reduxForm({
  form: CONTACT_FORM_NAME
})(ContactForm)
