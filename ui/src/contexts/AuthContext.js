import { auth } from '../firebase';
import config from '../config';

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const apiUrl = config[process.env.NODE_ENV || "development"].apiUrl;
  const [firebaseUser, setFirebaseUser] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [apiPosted, setApiPosted] = React.useState(true);

  function signup(email, password) {
    setApiPosted(false);

    return (
      auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
          axios.post(`${apiUrl}/users`, {
            fb_uid: res.user.uid
          })
          .then(() =>{
            setApiPosted(true);
        })
      })
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
    apiPosted,
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