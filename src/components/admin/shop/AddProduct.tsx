import React from 'react';
import { MyButton, MyInput, Flex }from '../../../styles/Styles';
import { addProduct } from '../../Data/ShopData';
import ImgUploader from './../../tools/ImgUploader';
import {ImgData} from '../../tools/ImgData';

const AddProductComponent: React.FC = ()=> {
   const [title, setTitle]  = React.useState('new title');
   const [author, setAuthor] = React.useState('new artist');
   const  [description, setDescription] = React.useState('some description');
   const  [releaseDate, setReleaseDate] = React.useState('release date');
   const [price, setPrice] = React.useState(999);
   const [quantity, setQuantity] = React.useState(1);
   const  [maxCopies4OneCustomer, setMaxCopies4OneCustomer] = React.useState(1);
   const globalImgs = React.useContext(ImgData);
   const imgs = globalImgs.imgs;
   console.log(imgs);

    return (
        <React.Fragment>
            <Flex>
                <MyInput type="text" name="title" placeholder="title" value={title} onChange={(event: any)=>setTitle(event.target.value)}/>
                <MyInput type="text" name="author" placeholder="author" value={author} onChange={(event: any)=>setAuthor(event.target.value)}/>
                    <ImgUploader/>
                <MyInput type="text" name="description" placeholder="description" value={description} onChange={(event: any)=>setDescription(event.target.value)}/>
                <MyInput type="text" name="releaseDate" placeholder="releaseDate" value={releaseDate} onChange={(event: any)=>setReleaseDate(event.target.value)}/>
                <MyInput type="number" name="price" placeholder="price" value={price} onChange={(event: any)=>setPrice(Number(event.target.value))}/>
                <MyInput type="number" name="email" placeholder="quantity" value={quantity} onChange={(event: any)=>setQuantity(Number(event.target.value))}/>
                <MyInput type="number" name="maxCopies4OneCustomer" placeholder="maxCopies4OneCustomer" value={maxCopies4OneCustomer} onChange={(event: any)=>setMaxCopies4OneCustomer(Number(event.target.value))}/>
            </Flex>
            <MyButton onClick={()=>addProduct(title, author, description, releaseDate, price, quantity, maxCopies4OneCustomer, imgs)}>Add New Product</MyButton>
        </React.Fragment>
    )
}

export default AddProductComponent;