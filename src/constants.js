export const LIST_PATH = '/projects'
export const ACCOUNT_PATH = '/account'
export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const CONTACT_PATH = '/contact'
export const SERVICES_PATH = '/services'
export const STORE_PATH = '/store'

export const ACCOUNT_FORM_NAME = 'account'
export const LOGIN_FORM_NAME = 'login'
export const SIGNUP_FORM_NAME = 'signup'
export const NEW_PROJECT_FORM_NAME = 'newProject'
export const CONTACT_FORM_NAME = 'contact'

export const formNames = {
  account: ACCOUNT_FORM_NAME,
  signup: SIGNUP_FORM_NAME,
  login: LOGIN_FORM_NAME,
  contact: CONTACT_FORM_NAME
}

export const paths = {
  list: LIST_PATH,
  account: ACCOUNT_PATH,
  login: LOGIN_PATH,
  signup: SIGNUP_PATH,
  contact: CONTACT_PATH,
  services: SERVICES_PATH,
  store: STORE_PATH
}

export default { ...paths, ...formNames }
