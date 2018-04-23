let initState = {
  loading: false
}

export default function loading(state=initState, actions) {
  switch(actions.type) {
    case 'LOADING':
      return {loading: actions.loading}
    default:
      return state
  }
}