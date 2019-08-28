import { db } from './Firebase';
import {convertToRaw, convertFromRaw} from 'draft-js'


//Add User
export const addProduct = (title: string, author: string, description: any, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, imgs: string[], format: string, formatDetails: string) => {

    const desc = convertToRaw(description.getCurrentContent())

    interface Product {
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
    class Product {
        constructor(title: string, author: string, imgs: string[], desc: any, releaseDate: string, price: number, quantity: number , maxCopies4OneCustomer: number, format: string, formatDetails: string){
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

    const new_product = new Product ( title, author, imgs, desc, releaseDate, price, quantity, maxCopies4OneCustomer, format, formatDetails);

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

//Read Data
export interface newObject {
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
                };
export class newObject {
                    constructor(id: string, author: string, title: string, desc: any, imgs: string[], maxCopies4OneCustomer: number, price: number, quantity: number,  releaseDate: string, format: string, formatDetails: string) {
                        this.id = id;
                        this.author = author;
                        this.title = title;
                        this.desc = desc;
                        this.imgs = imgs;
                        this.maxCopies4OneCustomer = maxCopies4OneCustomer;
                        this.releaseDate = releaseDate;
                        this.price = price;
                        this.quantity = quantity;
                        this.format = format;
                        this.formatDetails = formatDetails;
                    }
                };
export async function  getData() {

    const outputArray: newObject[] = [];
    let descConverted: any = {};
    let id: string = '';
    let title: string = '';
    let author: string = '';
    let imgs: string[] = [];
    let desc: any = [];
    let releaseDate: string = '';
    let price: number = 999;
    let quantity: number = 1;
    let maxCopies4OneCustomer: number = 1;
    let format: string = '';
    let fromatDetails: string = '';
    await db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            id = doc.id;
            author = doc.data().author;
            title = doc.data().title;
            descConverted = convertFromRaw(doc.data().desc);
            imgs = doc.data().imgs;
            maxCopies4OneCustomer = doc.data().maxCopies4OneCustomer;
            price = doc.data().price;
            quantity = doc.data().quantity;
            releaseDate = doc.data().releaseDate;
            format = doc.data().format;
            fromatDetails = doc.data().formatDetails

            const obj = new newObject(
                id,
                author,
                title,
                descConverted,
                imgs,
                maxCopies4OneCustomer,
                price,
                quantity,
                releaseDate,
                format,
                fromatDetails
                );
            outputArray.push(obj);
            console.log(`${doc.id} added`);
            });
        });
        console.log(outputArray);
        return outputArray;
    }
