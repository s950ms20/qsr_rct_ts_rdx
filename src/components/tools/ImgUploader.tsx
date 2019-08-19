import { storage } from '../Data/Firebase';
import React from 'react';
import { Flex, MyInput, MyButton } from '../../styles/Styles';
import styled from 'styled-components';
import { ImgData } from './ImgData';

const uuidv1 = require('uuid/v1');

const ImgUpload: React.FC = () => {
    const [precentage, setPrecentage] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<any>('');
    const [ uploadedImgs, setUploadedImgs ] = React.useState<string[]>([]);
    const globalImg = React.useContext(ImgData);

    const fileSelectedHandler = (event: any)  => {
        setSelectedFile(event.target.files[0]);
     }

    const fileUploadHandler = () => {
        const randomFIlename = `${uuidv1()}.jpg`
        const storageRef = storage
        .ref(`images/${randomFIlename}`)
        const task = storageRef.put(selectedFile);
       setTimeout(
        () => {
            storageRef.getDownloadURL()
               .then(url => {
                   const imgs: string[] = [];
                    imgs.push(...uploadedImgs, url);
                    setUploadedImgs(imgs);
                    console.log(imgs);
                    // console.log(precentage);
                    globalImg.setImgs(imgs)
                })
               .catch((error: any) => console.log(error.message));
           }
        , 1500);
        task.on('state_changed', (snapshot: any)=>{
            let actualProcentage = ( snapshot.bytesTransfered / snapshot.totalBytes) * 100;
            setPrecentage(actualProcentage);
        },
        (error: any) => console.log(error.message)
        )
    }

    const Filter = styled.div`
    background-color: black;
    height: 100%;
    width: ${precentage}%;
    transition: width .2s ease-in`
    
    const MyProgressBar = styled.div`
    margin: 5px;
    padding: 5px;
    height: 20px;
    border: 1px solid black;
    color: white;
    `
    const UploadedImg = styled.img`
    flex: 1;
    padding: 5px;
    margin: 5px;
    width: 350px;
    border-radius: 45px;
    `
    const Images = styled.div`
    flex-direction: row;
    `
    return (
        <React.Fragment>
            <Flex>
            <Images>
                {uploadedImgs.map(img=> {
                    return <UploadedImg src={img} key={uuidv1()} alt='uploaded file looks like this'/>
                })}
            </Images>
            <MyInput type="file" onChange={fileSelectedHandler}/>
            <MyProgressBar>
            <Filter>
            {precentage === 0 ? null : <> Upload Progres: ${Number(precentage)}% </>}
            </Filter>
                </MyProgressBar>
            <MyButton onClick={fileUploadHandler}>Upload Image</MyButton>
                </Flex>
        </React.Fragment>
    )
}

export default ImgUpload;

