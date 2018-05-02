let initState = {
  idList: {

  }
}
export default function oneList (state=initState, action) {
  switch(action.type) {
    case 'ONE_LIST':
      return {idList: action.idList}
    default:
      return state
  }
}