import React from 'react';
import { MyButton, MyInput, Flex }from '../../../styles/Styles';
import { addProduct } from '../../Data/ShopData';

const AddProductComponent: React.FC = ()=> {
    const [title, setTitle]  = React.useState('new title')
    const [author, setAuthor] = React.useState('new artist')
   const  [img1, setImg1] = React.useState('img url 1')
   const  [img2, setImg2] = React.useState('img url 2')
   const  [img3, setImg3] = React.useState('img url 3')
   const  [description, setDescription] = React.useState('some description')
   const  [releaseDate, setReleaseDate] = React.useState('release date')
    const [price, setPrice] = React.useState(999)
    const [quantity, setQuantity] = React.useState(1)
   const  [maxCopies4OneCustomer, setMaxCopies4OneCustomer] = React.useState(1)
    return (
        <React.Fragment>
            <Flex>
                <MyInput type="text" name="title" placeholder="title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <MyInput type="text" name="author" placeholder="author" value={author} onChange={(event)=>setAuthor(event.target.value)}/>
                <MyInput type="text" name="img" placeholder="img" value={img1} onChange={(event)=>setImg1(event.target.value)}/>
                <MyInput type="text" name="img" placeholder="img" value={img2} onChange={(event)=>setImg2(event.target.value)}/>
                <MyInput type="text" name="img" placeholder="img" value={img3} onChange={(event)=>setImg3(event.target.value)}/>
                <MyInput type="text" name="description" placeholder="description" value={description} onChange={(event)=>setDescription(event.target.value)}/>
                <MyInput type="text" name="releaseDate" placeholder="releaseDate" value={releaseDate} onChange={(event)=>setReleaseDate(event.target.value)}/>
                <MyInput type="number" name="price" placeholder="price" value={price} onChange={(event)=>setPrice(Number(event.target.value))}/>
                <MyInput type="number" name="email" placeholder="quantity" value={quantity} onChange={(event)=>setQuantity(Number(event.target.value))}/>
                <MyInput type="number" name="maxCopies4OneCustomer" placeholder="maxCopies4OneCustomer" value={maxCopies4OneCustomer} onChange={(event)=>setMaxCopies4OneCustomer(Number(event.target.value))}/>
            </Flex>
            <MyButton onClick={()=>addProduct(title, author, description, releaseDate, price, quantity, maxCopies4OneCustomer, img1, img2, img3)}>Add New Product</MyButton>
        </React.Fragment>
    )
}

export default AddProductComponent;