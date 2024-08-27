//import * as templates from "./templates/index.js";
//import * as listeners from "./listeners/index.js";
//import * as utilities from "./utilities/index.js";

import { setAuthListener } from './ui/listeners/auth.js'
import { getPosts } from './api/posts/getPosts.js'

export default function router() {
  const path = window.location.pathname

  switch (path) {
    case '/':
      console.log('router is working')
      //displayModal()
      getPosts()
      setAuthListener()
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
