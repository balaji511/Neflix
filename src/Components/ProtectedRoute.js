import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'
import Footer from './Footer/Footer'

export default function ProtectedRoute(props) {
  const cookie = Cookies.get('jwtToken')
  if (cookie === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Route {...props} />
      <Footer />
    </>
  )
}
