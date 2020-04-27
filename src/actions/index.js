import { SIGN_IN, SIGN_OUT } from './types'
import history from '../history'

export const googleSignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const googleSignOut = () => {
  return { type: SIGN_OUT }
}