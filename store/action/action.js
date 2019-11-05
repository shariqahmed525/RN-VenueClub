export function LoginDetail(linfo) {
    return dispatch => {
        dispatch({ type: 'LOGININFO', payload: linfo  })
    }
}


export function SignupDetail(sinfo) {
    return dispatch => {
        dispatch({ type: 'SIGNUPINFO', payload: sinfo  })
    }
}