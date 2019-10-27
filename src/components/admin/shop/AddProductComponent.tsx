import React from 'react';
import { MyButton, MyInput, Flex, InfoField, Row, GoToTheRight }from '../../../styles/Styles';
import { addProduct, formats, format } from '../../Data/ShopData';
import ImgUploader from '../../tools/ImgUploader';
import MyEditor from '../../tools/MyEditorComponent';
import {ContextData} from '../../tools/ContextData';
import Select from 'react-select';

const AddProductComponent: React.FC = ()=> {
   const [title, setTitle]  = React.useState('new title');
   const [author, setAuthor] = React.useState('new artist');
   const  [releaseDate, setReleaseDate] = React.useState('1880-11-12');
   const [price, setPrice] = React.useState(999);
   const [quantity, setQuantity] = React.useState(1);
   const  [maxCopies4OneCustomer, setMaxCopies4OneCustomer] = React.useState(1);
   const [formatDetails, setFormatDetails] = React.useState('');
   const [chosenFormat, setChosenFormat] = React.useState<format>()
   const ctx = React.useContext(ContextData);
   const imgs = ctx.imgs;
   const text = ctx.text;
   const description = text;
   const new_temporary_id = String(`new_temporary_id_${Math.random()*10004251}`);
   


   React.useEffect(
       ()=>{
           ctx.setEditMode(false);
           ctx.setLoadDataToEdit(false);
       }, []
   )

    const clearFields = () => {
        setTitle('');
        setAuthor('');
        setPrice(1);
        setQuantity(0);
        setFormatDetails('');
        setMaxCopies4OneCustomer(1);
        ctx.setImgs([]);
        ctx.setText('');
    }

    return (
        <React.Fragment>
            <Flex>
                <Row>
                    <InfoField>TITLE:</InfoField>
                    <MyInput type="text" name="title" placeholder="title" value={title} onChange={(event: any)=>setTitle(event.target.value)}/>
                </Row>
                <Row>
                     <InfoField>AUTHOR:</InfoField>
                     <MyInput type="text" name="author" placeholder="author" value={author} onChange={(event: any)=>setAuthor(event.target.value)}/>
                </Row>
                    <InfoField>IMAGES:</InfoField>
                    <ImgUploader/>
                    <InfoField>DESCRIPTION:</InfoField>
                    {/* <InfoField>
                        <Editor editorState={ctx.text} readOnly={true} onChange={()=>{}}/>
                    </InfoField> */}
                    <MyEditor />
                <Row>
                    <InfoField>RELEASED:</InfoField>
                    <MyInput type="date" name="releaseDate" placeholder="releaseDate" value={releaseDate} onChange={(event: any)=>setReleaseDate(event.target.value)}/>
                    <InfoField>PRICE:</InfoField>
                <MyInput type="number" name="price" placeholder="price" value={price} onChange={(event: any)=>setPrice(Number(event.target.value))}/>
                    <InfoField>QUANTITY:</InfoField>
                <MyInput type="number" name="quantity" placeholder="quantity" value={quantity} onChange={(event: any)=>setQuantity(Number(event.target.value))}/>
                </Row>
                <Row>
                    <Select
                    defaultValue={formats[0]}
                    options={formats}
                    onChange={(chosenFormat: any)=>setChosenFormat(chosenFormat)}
                    value={chosenFormat}
                    />
                </Row>
                <Row>
                    <InfoField>FORMAT DETAILS:</InfoField>
                    <MyInput type="string" name="formatDetails" placeholder="Format Details" value={formatDetails} onChange={(event: any)=>setFormatDetails(event.target.value)}/>
                </Row>
                <Row>
                    <InfoField>MAXIMUM NUMBER OF COPIES FOR ONE CUSTOMER:</InfoField>
                <MyInput type="number" name="maxCopies4OneCustomer" placeholder="maxCopies4OneCustomer" value={maxCopies4OneCustomer} onChange={(event: any)=>setMaxCopies4OneCustomer(Number(event.target.value))}/>
                </Row>
            </Flex>
            <Row>
                <GoToTheRight>
                    <MyButton onClick={()=>clearFields()}>Empty Project</MyButton>
                    {chosenFormat === undefined ? null :
                    <MyButton onClick={
                        ()=>{
                            addProduct(new_temporary_id, title, author, description, releaseDate, price, quantity, maxCopies4OneCustomer, imgs, chosenFormat.value, formatDetails);
                            ctx.setHelperData(Math.random())
                        }
                    }>Add New Product</MyButton>
                     }
                </GoToTheRight>
            </Row>
        </React.Fragment>
    )
}

export default AddProductComponent;