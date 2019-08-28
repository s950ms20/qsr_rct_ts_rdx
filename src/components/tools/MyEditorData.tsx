import {createContext} from 'react';
import { EditorState } from 'draft-js';

interface TextData {
    text: EditorState,
    setText: any
}

export const TextData = createContext({
text: {},
setText: (value: any) => {}
} as TextData
)


;