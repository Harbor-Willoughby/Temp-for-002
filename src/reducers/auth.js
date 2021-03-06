const DEFAULT_STATE = {
  name: '',
  email: '',
  profileImageUrl: '',
  isLoggingIn: false, // 로그인 진행중일 떄 진행중 표시를 하기 위한 Flag
  errorState: '', // 로그인 중에 문제가 생겼습니다 라고 알리기 위한 Flag
}

const authReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === 'LOGIN_USER_REQUEST') {
    return {
      ...state,
      isLoggingIn: true,
      errorState: false,
    }
  }

  /*
  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      isLoggingIn: false,
      name: action.payload.additionalUserInfo.profile.name,
      profileImageUrl: action.payload.additionalUserInfo.profile.picture,
      email: action.payload.additionalUserInfo.profile.email,
    }
  }
  */

  if (action.type === 'LOGIN_USER_FAILED') {
    return {
      ...state,
      isLoggingIn: false,
      errorState: true,
    }
  }

  if (action.type === 'LOGIN_USER') {
    return {
      ...state,
      name: action.payload.displayName,
      email: action.payload.email,
      profileImageUrl: action.payload.photoURL,
      isLoggingIn: false,
    }

  }
  
  if (action.type === 'LOGOUT_USER') {
    return {
      ...state,
      name: '',
      profileImageUrl: '',
      email: '',
    }
  }
  return {
    ...state,
  }
}

export default authReducer;
