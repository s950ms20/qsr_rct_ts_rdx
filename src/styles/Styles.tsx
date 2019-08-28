import styled from 'styled-components';

export const MenuListClass = styled.div`
display: flex;

 @media only screen and (max-width: 750px) {
    flex-direction: column;
}
@media only screen and (min-width: 750px) {
    flex-direction: row;
}
`

export const MenuItem = styled.div`
background-color: transparent;
color: black;
flex: 1;
margin: 5px;
padding: 5px;

&:hover {
    background: gray;
}
`

export const MyButton = styled.button`
margin: 5px;
padding: 5px;
border: 1px solid black;
background-color: white;
border-radius: 5px;
flex-direction: row;
align-self: flex-end;
text-align: right;
`
export const MyInput = styled.input`
margin: 5px;
padding: 5px;
border: 1px solid black;
background-color: white;
border-radius: 5px;
align-self: stretch;
flex: 4;
`
export const Flex = styled.div`
text-align: justify;
justify-content: space-evenly;
display: flex;
flex-direction: column;
width: 100%;
`
export const Row = styled.div`
flex-direction: row;
`
export const Col = styled.div`
flex-direction: column;
`
export const GoToTheRight = styled.div`
text-align: right;
align-items: flex-end;
`

export const InfoField = styled.span`
/* border: 1px dashed black; */
padding: 5px;
margin: 5px;
flex: 1;
align-self: flex-start;
`
export const Box = styled.div`
border: 1px solid black;
padding: 5px;
margin: 5px;
min-height: 300px;
box-sizing: border-box;
text-align: justify;
background-color: white;
border-radius: 5px;
`
export const ButtonsPanel = styled.div`
box-sizing: border-box;
align-content: flex-end;
flex-direction: row;
`

export const ProductBox = styled.div `
display: flex;
/* border: 1px solid black; */
padding: 5px;
margin: 5px;
box-sizing: border-box;
text-align: justify;
border-radius: 5px;
`

export const ProductImg = styled.img`
    width: 200px;
    flex: 1;
    /* background-color: lightgray; */
    padding: 5px;
    margin: 5px;
`

export const ProductBasicInfo = styled.div`
    flex: 3;
    /* background-color: lightgray; */
    padding: 5px;
    margin: 5px;
    flex-wrap: wrap;
    line-height: 30px;
`
export const Bold = styled.span`
    font-weight: 600;
`

export const ProductDetailInfo = styled.div`
    /* background-color: lightgray; */
    padding: 20px;
    margin: 5px;
    display: flex;
    /* border: 1px solid black; */
    box-sizing: border-box;
    text-align: justify;
    border-radius: 5px;
`