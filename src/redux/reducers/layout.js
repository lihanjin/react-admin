let initState = {

}

export default function setTitle(state = initState, action) {
  switch(action.type) {
    case 'SET_TITLE':
      return {title: action.title}
    default: 
      return state
  }
}