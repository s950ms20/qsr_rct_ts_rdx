import {createContext} from 'react';
import { EditorState } from 'draft-js';
import {Product}  from '../Data/ShopData';

interface ContextData {
    updateHelper: number,
    setHelperData: any,
    imgs: string[],
    setImgs: any,
    text: any,
    setText: any,
    prd: any,
    setPrd: any,
    editMode: boolean,
    setEditMode: any,
    loadDataToEdit: boolean,
    setLoadDataToEdit: any,
    userName: string,
    setUserName: any
}

export const ContextData = createContext({
    updateHelper: 1,
    setHelperData: (value: number) => {},
    imgs:[],
    setImgs: (value: string[])=>{},
    text: {},
    setText: (value: EditorState) => {},
    prd: {},
    setPrd: (value: Product)=>{},
    editMode: false,
    setEditMode: (value: boolean) => {},
    loadDataToEdit: false,
    setLoadDataToEdit: (value: boolean) => {},
    userName: '',
    setUserName: (value: string)=>{}
} as ContextData
)