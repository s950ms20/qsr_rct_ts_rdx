import { auth } from './Firebase';
const history = require("history").createBrowserHistory();


// createuser
export const createUser = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(()=>alert('Account successfully created!'))
        .catch((error) => {
        let errorCode = error.code;
        console.log(`errorCode -> ${errorCode}`)
        let errorMessage = error.message;
        alert(`${errorMessage}`)
      });
}

// login users
export const login = (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(()=>loggedUserData())
    .finally(()=>alert(`Welcome ${email}`))
    .catch((error) => {
        let errorCode = error.code;
        console.log(`errorCode -> ${errorCode}`)
        let errorMessage = error.message;
        alert(`${errorMessage}`)
      });
}

// // is user logged in?



export const loggedUserData =  () => {
    const user:any = auth.currentUser;

  interface Data {
        displayName: string;
        email: string,
        emailVerified: boolean,
        photoURL: string,
        uid: string
    }
   class Data {
          constructor (displayName: string, email: string, emailVerified: boolean, photoURL: string, uid: string) {
              this.displayName = displayName;
              this.email = email;
              this.emailVerified= emailVerified;
              this.photoURL = photoURL;
              this.uid = uid
          }
      }
      if (user != null) {
          // User is signed in.
          let displayName: string = user.displayName;
          let email: string = user.email;
          let emailVerified: boolean = user.emailVerified;
          let photoURL: string = user.photoURL;
          let uid: string = user.uid;

          const userData: any = new Data(displayName, email, emailVerified, photoURL, uid);

      console.log(userData.email);
      console.log(userData);
        return userData;
} else {
    console.log('No USER')
}
}

// user loggin out
export const loggOut = () => auth.signOut()
.then(()=>alert('user logged out'))
.then(()=>history.push("/About"))
.catch((error: any)=>console.log(error.message));

