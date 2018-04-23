let initState = {
  loginInfo: {
    userName: '',
    password: ''
  }
}

export default function login (state=initState, action) {
  switch(action.type) {
    case 'LOGIN_SUCESS':
      return {loginInfo: action.res}
    default:
      return state
  }
}