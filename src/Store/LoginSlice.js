import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {loginApi} from '../Services/apis'

export const verifyUser = createAsyncThunk(
  'verifyUser/jwt',
  async userDetails => {
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const res = fetch(loginApi, options)
    return (await res).json()
  },
)

const loginSlice = createSlice({
  name: 'login',
  initialState: {errMsg: ''},
  extraReducers: {
    [verifyUser.pending]: () => {},
    [verifyUser.fulfilled]: (state, action) => {
      if (action.payload.jwt_token !== undefined) {
        Cookies.set('jwtToken', action.payload.jwt_token)
      } // eslint-disable-next-line no-param-reassign
      state.errMsg = action.payload.error_msg
    },
    [verifyUser.rejected]: () => {
      console.log('loginApi Rejected')
    },
  },
})
export default loginSlice
