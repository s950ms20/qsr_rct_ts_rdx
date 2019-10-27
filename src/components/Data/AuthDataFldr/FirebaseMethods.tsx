import { auth } from '../Firebase';
import { db } from '../Firebase';
import { UserDeliveryAddress, Data } from './AuthDataTypes';
const history = require("history").createBrowserHistory();

     // ad user to fb db
 export const addUserToDb = (fireBase_UID: string, fisrtName: string, lastName: string, address: string, phoneNumber: string, email: string) => {
        const newUser = new  UserDeliveryAddress (
            fireBase_UID,
              fisrtName ,
              lastName ,
              address ,
              phoneNumber ,
              email 
            ) ;

        const new_obj: object = {};
        const newUserFb: object  = Object.assign(new_obj, newUser);

            db.collection('users')
            .doc(fireBase_UID).
            set({newUserFb})
            .catch((error: any) => {
                console.error("Error adding document: ", error);
            });

        return newUser;
    };

    //Read Data
export async function  getUsers() {
    const outputArray: UserDeliveryAddress[] = [];

    await db.collection('users')
    .get()
    .then((querySnapshot) => {
        querySnapshot
        .forEach((doc) => {
            const obj = new UserDeliveryAddress(
                doc.id,
                doc.data().fisrtName,
                doc.data().lastName,
                doc.data().address,
                doc.data().phoneNumber,
                doc.data().email
                );
            outputArray.push(obj);
            })
        })
        return outputArray;
}

// check if user exist

export const checkIfUserExist = (
    id: string,
    firstName: string, 
    lastName: string, 
    address: string, 
    phoneNumber: string, 
    email: string
    ) => {
    let users: UserDeliveryAddress[] = [];

    getUsers().then((result) => 
        users = result
    );

    const findUser: number = users.findIndex((elm: UserDeliveryAddress) => elm.fireBase_UID === id );

    (findUser !== -1) 
    ? updateUserData(
        id,
        firstName, 
        lastName, 
        address, 
        phoneNumber, 
        email
        )
        : addUserToDb(
            id,
            firstName, 
            lastName, 
            address, 
            phoneNumber, 
            email
        )
};

    // edit update users
export const updateUserData = 
        (id: string, 
            firstName: string, 
            lastName: string, 
            address: string, 
            phoneNumber: string, 
            email: string
            ) => {
            db.collection('users').doc(id).update({
                id: id,
                firstName: firstName ,
                lastName: lastName,
                address: address,
                phoneNumber: phoneNumber,
                email: email
            })
            .then(()=>console.log(`Document ${id} from collection Users: successfully updated!`))
            .catch((error)=>console.log(`Document ${id} error: ${error.message}`))
    };

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

  if (user != null) {
      // User is signed in.
      let displayName: string = user.displayName;
      let email: string = user.email;
      let emailVerified: boolean = user.emailVerified;
      let photoURL: string = user.photoURL;
      let uid: string = user.uid;

      const userData: Data = new Data(displayName, email, emailVerified, photoURL, uid);

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