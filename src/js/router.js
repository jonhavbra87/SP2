//import * as templates from "./templates/index.js";
//import * as listeners from "./listeners/index.js";
//import * as utilities from "./utilities/index.js";

import { API_FULL_URL } from './api/constants.js'
import { displayModal } from './utilities/displayModal.js'

export default function router() {
  const path = window.location.pathname

  switch (path) {
    case '/':
      console.log('router is working')
      console.log(API_FULL_URL)
      displayModal()
      break
    case '/profile/':
      break
    case '/profile/login/':
      break
    case '/profile/register/':
      break
    case '/profile/edit/':
      break
    case '/post/create/':
      break
    case '/post/edit/':
      break
    case '/post/delete/':
      break
    case '/posts/':
      break
    case '/post/':
      break
    default:
      console.log('404 error. Page not found.')
  }
}
