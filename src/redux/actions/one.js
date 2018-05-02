
import api from '@/pages/one/api/home'
const setIdLIST = (res) => {
  return {
    type: 'ONE_LIST',
    idList: res
  }
}
const getIdList =  (res) => {
  return async dispatch => {
    let IdListresult = await api.idlist()
    dispatch(setIdLIST(IdListresult))
  }
}

export default getIdList