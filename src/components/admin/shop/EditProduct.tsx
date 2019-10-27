import React from 'react';
import { MyButton, MyInput, Flex, InfoField, Row }from '../../../styles/Styles';
import {deleteData, updateData, formats, format} from '../../Data/ShopData';
import Select from 'react-select';
import ImgUploader from '../../tools/ImgUploader';
import MyEditor from '../../tools/MyEditorComponent';
import styled from 'styled-components';
import {ContextData} from '../../tools/ContextData';
import {Editor} from 'draft-js';

const ImgSmall = styled.img`
width: 100px;
margin: 5px;
padding: 5px;
`

const EditProduct: React.FC = () => {
    const ctx = React.useContext(ContextData);
    const imgs = ctx.imgs;
    const prd = ctx.prd;
    const [titleEdit, setTitleEdit]  = React.useState(prd.title);
    const [authorEdit, setAuthorEdit] = React.useState(prd.author);
    const [releaseDateEdit, setReleaseDateEdit] = React.useState(prd.releaseDate);
    const [priceEdit, setPriceEdit] = React.useState(prd.price);
    const [quantityEdit, setQuantityEdit] = React.useState(prd.quantity);
    const [maxCopies4OneCustomerEdit, setMaxCopies4OneCustomerEdit] = React.useState(prd.maxCopies4OneCustomer);
    const [formatDetailsEdit, setFormatDetailsEdit] = React.useState(prd.formatDetails);
    const [chosenFormatEdit, setChosenFormatEdit] = React.useState<format>(prd.format)
 
    React.useEffect(
        ()=>{
            ctx.setImgs(prd.imgs);
            ctx.setText(prd.desc)
        }, []
    )

    return (
        <React.Fragment>
            <Flex>
                    <InfoField>
                    {prd.author} - {prd.title} ({prd.releaseDate}) {prd.format} ({prd.formatDetails}) <br/>
                    </InfoField>
                        <ImgSmall src={prd.imgs[0]} title="cover art"/>
                    <MyButton onClick={()=>{
                        ctx.setEditMode(!ctx.editMode);
                        ctx.setLoadDataToEdit(!ctx.loadDataToEdit);
                    }}>Edit</MyButton>
                    <MyButton onClick={()=>{
                        deleteData('products', prd.id);
                        ctx.setHelperData(Math.random());
                        }}>Delete</MyButton>
            </Flex>
            <Flex>
                {ctx.editMode && prd  ?
                    <React.Fragment>
                        <Flex>
                            <Row>
                                <InfoField>TITLE:</InfoField>
                                <MyInput type="text" name="title" placeholder="title" value={titleEdit} onChange={(event: any)=>setTitleEdit(event.target.value)}/>
                            </Row>
                            <Row>
                                <InfoField>AUTHOR:</InfoField>
                                <MyInput type="text" name="author" placeholder="author" value={authorEdit} onChange={(event: any)=>setAuthorEdit(event.target.value)}/>
                            </Row>
                                <InfoField>IMAGES:</InfoField>
                                <ImgUploader/>
                                <InfoField>DESCRIPTION:</InfoField>
                                <InfoField>
                                    <Editor editorState={prd.desc} readOnly={true} onChange={()=>{}}/>
                                </InfoField>
                                {/* <MyButton onClick={()=>{}}>Copy Description</MyButton> */}
                                <MyEditor />
                            <Row>
                                <InfoField>RELEASED:</InfoField>
                                <MyInput type="date" name="releaseDate" placeholder="releaseDate" value={releaseDateEdit} onChange={(event: any)=>setReleaseDateEdit(event.target.value)}/>
                                <InfoField>PRICE:</InfoField>
                            <MyInput type="number" name="price" placeholder="price" value={priceEdit} onChange={(event: any)=>setPriceEdit(Number(event.target.value))}/>
                                <InfoField>QUANTITY:</InfoField>
                            <MyInput type="number" name="quantity" placeholder="quantity" value={quantityEdit} onChange={(event: any)=>setQuantityEdit(Number(event.target.value))}/>
                            </Row>
                            <Row>
                            <InfoField>{prd.format}</InfoField>
                                <Select
                                defaultValue={chosenFormatEdit}
                                options={formats}
                                onChange={(chosenFormatEdit: any)=>setChosenFormatEdit(chosenFormatEdit)}
                                value={chosenFormatEdit}
                                />
                            </Row>
                            <Row>
                                <InfoField>FORMAT DETAILS:</InfoField>
                                <MyInput type="string" name="formatDetails" placeholder="Format Details" value={formatDetailsEdit} onChange={(event: any)=>setFormatDetailsEdit(event.target.value)}/>
                            </Row>
                            <Row>
                                <InfoField>MAXIMUM NUMBER OF COPIES FOR ONE CUSTOMER:</InfoField>
                            <MyInput type="number" name="maxCopies4OneCustomer" placeholder="maxCopies4OneCustomer" value={maxCopies4OneCustomerEdit} onChange={(event: any)=>setMaxCopies4OneCustomerEdit(Number(event.target.value))}/>
                            </Row>
                        </Flex>
                        {chosenFormatEdit ?
                        <React.Fragment>
                        <MyButton onClick={()=>{
                            updateData('products', prd.id, titleEdit, authorEdit, ctx.text, releaseDateEdit, priceEdit, quantityEdit, maxCopies4OneCustomerEdit, imgs, chosenFormatEdit.value, formatDetailsEdit);
                            ctx.setHelperData(Math.random())
                            }}>Update</MyButton>
                        <MyButton onClick={()=>console.log(ctx.text)}>TEXT</MyButton>
                        </React.Fragment>
                        : null
                        }
                        <Row>
                        </Row>
                    </React.Fragment>  : null  }
            </Flex>
        </React.Fragment>
    )
}

export default EditProduct;