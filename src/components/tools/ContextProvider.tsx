import React  from 'react';
import {ContextData} from './ContextData';
import {EditorState } from 'draft-js';
import {Product} from '../Data/ShopData' ;

const ContextProdiver: React.FC = (props) => {
    const [imgs, setImgs] = React.useState<string[]>([]);
    const [text, setText] = React.useState<EditorState>();
    const [updateHelper, setHelperData] = React.useState(Math.random());
    const [prd, setPrd] = React.useState<Product>();
    const [editMode, setEditMode] = React.useState(false);
    const [loadDataToEdit, setLoadDataToEdit] = React.useState(false);
    const [userName, setUserName] = React.useState('');

    return (
        <React.Fragment>
            <ContextData.Provider value={{
                updateHelper: updateHelper,
                setHelperData: setHelperData,
                text: text,
                setText:setText,
                imgs: imgs,
                setImgs: setImgs,
                prd: prd,
                setPrd: setPrd,
                editMode: editMode,
                setEditMode: setEditMode,
                loadDataToEdit: loadDataToEdit,
                setLoadDataToEdit: setLoadDataToEdit,
                userName: userName,
                setUserName: setUserName
                }}
                >
                    {props.children}
            </ContextData.Provider>
        </React.Fragment>
    )
}

export default ContextProdiver;