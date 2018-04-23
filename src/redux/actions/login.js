import loading from './loading'

const loginSucess = (res) => {
  return {
    type: 'LOGIN_SUCESS',
    res
  }
}

// /**
//  * 登录界面
//  * @param {username} 用户名
//  * @param {password} 密码
//  * @return {登录信息}
//  */
// export const goLogin = (params) => {
//   return dispatch => {
//       dispatch(loading(true));

//       // TODO(simulating POST request)
//       let url  = "https://jsonplaceholder.typicode.com/posts";
//       let body = {
//           title: 'foo',
//           body: 'bar',
//           userId: 1
//       };
//       fetchService.post(url, body).then((res) => {
//           dispatch(loading(false));
//           // TODO(just save username and password)
//           dispatch(loginSuccess(params));
//           // 模拟登录成功返回的Token
//           methods.setLocalStorage(constants.localKey.userToken, (new Date()).getTime());
//           // 页面跳转到home
//           browserHistory.push('/home');
//       }, (error) => {
//           loggerService.log("error: " + error);
//       });
//   }
// };