import {createContext} from 'react';

interface ImgData {
    imgs: string[],
    setImgs: any
}

export const ImgData = createContext({
    imgs:[],
    setImgs: (value: any)=>{}
} as ImgData
)


;