const config = {

  development: {
    apiUrl: "http://localhost:8080",
    auth: (cb) => {
      return cb()
    }
  },

  production: {
    apiUrl: "https://rebels-asats-api.herokuapp.com/",
    auth: (cb) => {
      return cb()
    }
  },

  test: {
    apiUrl: '',
    auth: (cb) => {
      let mockAuth = cb;

      mockAuth = {
        uid: 'MPUrBAmJpWWjtsBlWa02h4cSI1H2',
        email: 'admin@mail.com',
        onAuthStateChanged: () => {},
        signInWithEmailAndPassword: () => {}
      };

      return mockAuth;
    }
  }
}

export default config;