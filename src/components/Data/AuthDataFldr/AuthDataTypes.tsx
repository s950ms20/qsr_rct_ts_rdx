export interface Data {
    displayName: string,
    email: string,
    emailVerified: boolean,
    photoURL: string,
    uid: string
};
export class Data {
      constructor (displayName: string, email: string, emailVerified: boolean, photoURL: string, uid: string) {
          this.displayName = displayName;
          this.email = email;
          this.emailVerified= emailVerified;
          this.photoURL = photoURL;
          this.uid = uid
      }
  };

  export interface UserDeliveryAddress {
      fireBase_UID: string,
      fisrtName: string,
      lastName: string,
      address: string,
      phoneNumber: string,
      email: string
  };

  export class UserDeliveryAddress {
      constructor (
        fireBase_UID: string,
        fisrtName: string,
        lastName: string,
        address: string,
        phoneNumber: string,
        email: string
      ) {
        this.fireBase_UID =fireBase_UID;
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
      }
  };