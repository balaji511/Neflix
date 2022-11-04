import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import Popular from './Pages/Popular/Popular'
import MovieDetailedView from './Pages/MovieDetailedView/MovieDetailedView'
import Account from './Pages/Account/Account'

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/movie/:id" component={MovieDetailedView} />
    </Switch>
  )
}

export default App
