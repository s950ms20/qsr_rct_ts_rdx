import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Box, ButtonsPanel, MyButton} from './../../styles/Styles';
import {TextData} from './MyEditorData'; 

const MyEditor = () =>  {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const globalText = React.useContext(TextData);

  React.useEffect(
    ()=>{
      globalText.setText(editorState);
      console.log(editorState)
    },
    [editorState]
  );

  const blockTypes = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];

const inlineStyles = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
  ];

function  handleKeyCommand(command: string, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState)
      return 'handled';
    }
    return 'not-handled';
  }

  return (
      <React.Fragment>
    <Box>
        <ButtonsPanel>
            {blockTypes
            .map((btn, idx) => {
                return <MyButton onClick={()=>setEditorState(RichUtils.toggleBlockType(editorState, btn.style))} key={idx}>
                    {btn.label}
                </MyButton>
            })
            }
        </ButtonsPanel>
        <ButtonsPanel>
            {inlineStyles
            .map((btn, idx) => {
                return <MyButton onClick={()=>setEditorState(RichUtils.toggleInlineStyle(editorState, btn.style))} key={idx}>
                    {btn.label}
                </MyButton>
            })
            }
        </ButtonsPanel>
        <Editor
        editorState={editorState}
        onChange={(event)=>setEditorState(event)}
        handleKeyCommand={(event: any)=>handleKeyCommand(event.key, editorState)}
        placeholder="Say me something..."
        />
    </Box>
        </React.Fragment>
  );
}

export default MyEditor;