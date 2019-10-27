import { db } from './Firebase';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js'
import { Order } from './Types';

export interface  format {
    value: string,
    label: string,
    id: string
}

export const formats: format[] = [
    {
        value: 'Vinyl',
        label: 'Vinyl',
        id: 'Vinyl'
    },
    {
        value: 'CD',
        label: 'CD',
        id: 'CD'
    },
    {
        value: 'Tape',
        label: 'Tape',
        id: 'Tape'
    },
    {
        value: 'Digital',
        label: 'Digital',
        id: 'Digital'
    }
];

export interface Product {
        id: string;
        title: string;
        author: string;
        imgs: string[];
        desc: any;
        releaseDate: string;
        price: number;
        quantity: number;
        maxCopies4OneCustomer: number;
        format: string;
        formatDetails: string;
    }
    export class Product {
        constructor(id: string, title: string, author: string, imgs: string[], desc: any, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, format: string, formatDetails: string){
            this.id = id;
            this.title = title;
            this.author = author;
            this.imgs = imgs;
            this.desc = desc;
            this.releaseDate = releaseDate;
            this.price = price;
            this.quantity= quantity;
            this.maxCopies4OneCustomer = maxCopies4OneCustomer;
            this.format = format;
            this.formatDetails = formatDetails;
        }
    }

//Add Product
export const addProduct = (id: string, title: string, author: string, description: any, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, imgs: string[], format: string, formatDetails: string) => {

    const desc = JSON.stringify(convertToRaw(description.getCurrentContent()));

    const new_product = new Product (id, title, author, imgs, desc, releaseDate, price, quantity, maxCopies4OneCustomer, format, formatDetails);

    const new_obj: object = {};
    const expected_output = Object.assign(new_obj, new_product);

    db.collection("products").add(expected_output)
    .then((docRef: any) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
        console.error("Error adding document: ", error);
    });
}

//Read Data
export async function  getData() {
    const outputArray: Product[] = [];
    let desc: any = [];

    await db.collection('products')
    .get()
    .then((querySnapshot) => {
        querySnapshot
        .forEach((doc) => {
            desc = EditorState.createWithContent(convertFromRaw(JSON.parse(doc.data().desc)))
            const obj = new Product(
                doc.id,
                doc.data().author,
                doc.data().title,
                doc.data().imgs,
                desc,
                doc.data().releaseDate,
                doc.data().price,
                doc.data().quantity,
                doc.data().maxCopies4OneCustomer,
                doc.data().format,
                doc.data().formatDetails
                );
            outputArray.push(obj);
            })
        })
        return outputArray;
    }

    // delete 
    export const deleteData = (collection: string, id: string) => {
    db.collection(collection).doc(id).delete()
    .then(() => console.log("Document successfully deleted!"))
    .catch((error) => console.error("Error removing document: ", error))
    }

    // edit update
    export const updateData = (collection: string, id: string, title: string, author: string, description: any, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, imgs: string[], format: string, formatDetails: string ) => {
        const new_desc = JSON.stringify(convertToRaw(description.getCurrentContent()));
        console.log(new_desc);
        db.collection(collection).doc(id).update({
            id: id,
            title:title,
            author: author,
            desc: new_desc,
            releaseDate: releaseDate,
            price: price,
            maxCopies4OneCustomer,
            quantity: quantity,
            format: format,
            formatDetails: formatDetails,
            imgs: imgs
        })
        .then(()=>console.log(`Document ${id} from collection: ${collection} successfully updated!`))
        .catch((error)=>console.log(`Document ${id} error: ${error.message}`))
    };

    // ORDERS


        // FIND PRODUCTS

        export async function findProducts(arr: any, id: string) {
            return await arr.filter((elm: Product) => elm.id === id);
        }

