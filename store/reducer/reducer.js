const INITIAL_STATE = {
    loginInfo : {} ,
    signupInfo : {}
    
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGININFO' :
            return ({
                ...state,
                 loginInfo : action.payload 
            })
            case 'SIGNUPINFO':
            return ({
                ...state,
                 signupInfo : action.payload
                })

            default:
                return state;
}}



   