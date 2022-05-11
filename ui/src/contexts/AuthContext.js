import { auth } from '../firebase';

import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  function signup(email, password) {
    return (
      auth.createUserWithEmailAndPassword(email, password)
        // .then((res) => {
        //   axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        //     fb_uid: res.user.uid
        //   })
        // })
    )
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email);
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email);
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }

  // function updatePhoto(url) {
  //   return currentUser.updateProfile({photoURL: url});
  // }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setFirebaseUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])

  const value = {
    firebaseUser,
    login,
    signup,
    logout,
    // resetPassword,
    // updateEmail,
    // updatePassword,
    // updatePhoto,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};