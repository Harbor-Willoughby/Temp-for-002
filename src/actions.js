import firebase from './firebase';

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export const loginGoogleUser = () => ({
  type: 'LOGIN_USER_REQUEST',
})

export const logout = () => {
  return (dispatch) => {
    auth.signOut()
      .then(() => {
        dispatch({
          type: 'LOGOUT',
        })
      })
      .catch(() => {
        // auth.signOut 이 reject되는 경우가 있는지는 모르겠지만 일단 추가함
        console.log('LOGIN FAILED')
      })
  }
}
