import { db } from './Firebase';


//Add User
export const addProduct = (title: string, author: string, description: string, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, img1: string, img2: string, img3: string) => {

    interface Product {
        title: string;
        author: string;
        imgs: string[];
        description: string;
        releaseDate: string;
        price: number;
        quantity: number;
        maxCopies4OneCustomer: number
    }
    class Product {
        constructor(title: string, author: string, imgs: string[], description: string, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number){
            this.title = title;
            this.author = author;
            this.imgs = imgs;
            this.description = description;
            this.releaseDate = releaseDate;
            this.price = price;
            this.quantity= quantity;
            this.maxCopies4OneCustomer = maxCopies4OneCustomer
        }
    }

    const new_imgs: string[] = [];
    new_imgs.push(img1,img2,img3);
    const new_product = new Product ( title, author, new_imgs, description, releaseDate, price, quantity, maxCopies4OneCustomer);

   
    const new_obj: object = {};
    const expected_output = Object.assign(new_obj, new_product);
    console.log(expected_output);
    


    db.collection("products").add(expected_output)
    .then((docRef: any) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
        console.error("Error adding document: ", error);
    });

}


// //Read Data
// db.collection("users").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(`${doc.id} => ${doc.data()}`);
//             });
//         });
