import {Card, Button} from 'react-bootstrap'
import Cookie from 'js-cookie'
import Header from '../../Components/Header/Header'
import {AccountContainer, AccountHeading} from './AccountElements'
import {MovieDate} from '../MovieDetailedView/MovieElements'

export default function Account(props) {
  const {history} = props
  const Logout = () => {
    Cookie.remove('jwtToken')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <AccountContainer>
        <AccountHeading>Account Details</AccountHeading>
        <Card
          className="AccountCard bg-transparent text-white mt-5"
          style={{border: '1px solid gray'}}
        >
          <Card.Body>
            <h6>Username : Balaji511</h6>
            <hr />
            <h6>Password : *********</h6>
            <hr />
            <h6 className="d-flex align-items-center">
              Plan : Premium <MovieDate className="p-1 m-2">ULTRA HD</MovieDate>
            </h6>
          </Card.Body>
        </Card>
        <Button
          onClick={Logout}
          className="bg-danger align-self-center m-2"
          style={{borderWidth: 0}}
        >
          Lagout
        </Button>
      </AccountContainer>
    </>
  )
}
