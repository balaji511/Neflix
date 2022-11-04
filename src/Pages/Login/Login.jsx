import './Login.css'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Card, Form, Col, Image, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {verifyUser} from '../../Store/LoginSlice'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const login = useSelector(state => state.login)
  const {errMsg} = login
  const handleSubmit = e => {
    e.preventDefault()
    console.log('k')

    dispatch(verifyUser({username: userName, password}))
  }
  const cookie = Cookies.get('jwtToken')
  if (cookie !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="LoginContainer">
      <Col md={5} sm={9} xs={10} lg={4} xl={4}>
        <Card className="loginCard shadow-lg">
          <Image
            className="loginLogo m-0"
            src="https://res.cloudinary.com/dllshtsed/image/upload/v1666854691/Netflix_Logo_Digital-Video_ax9x1f.png"
          />
          <Card.Body>
            <Form
              className="d-flex flex-column text-white"
              onSubmit={handleSubmit}
            >
              <Form.Group className="p-1">
                <Form.Label className="inputLabel"> Username</Form.Label>
                <Form.Control
                  type="text"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  className="inputForm  bg-secondary text-white"
                />
              </Form.Group>
              <Form.Group className="p-1">
                <Form.Label className="inputLabel">Password</Form.Label>
                <Form.Control
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="inputForm bg-secondary text-white"
                />
              </Form.Group>
              <div className="d-flex m-1 align-items-center">
                <input
                  type="checkbox"
                  onChange={() => setShow(prev => !prev)}
                />
                <p className="m-1">Show password</p>
              </div>
              {login.errMsg && <p className="m-1 text-danger">{errMsg}</p>}
              <div className="d-flex m-1 ">
                <Button
                  type="submit"
                  className="bg-danger bgButton  align-self-center"
                >
                  Login
                </Button>
                <Button
                  style={{textDecoration: 'underLine'}}
                  className="bg-transparent bgButton  align-self-center"
                >
                  Sign up
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}
