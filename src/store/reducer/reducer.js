const INITIAL_STATE = {
  user: {},
  halls: [],
  allHalls: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER':
      return ({
        ...state,
        user: action.user
      })
    case 'UID':
      return ({
        ...state,
        uid: action.uid
      })
    case 'HALLS':
      return ({
        ...state,
        halls: action.halls
      })
    case 'ALL_HALLS':
      return ({
        ...state,
        allHalls: action.allHalls
      })
    default:
      return state;
  }
}



