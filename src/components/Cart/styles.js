import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Frame = styled.div`
   border-top:2px solid #2b8068;
   margin-top:30px;
`;

export const Wrapper = styled.div`
    width:80%;
    margin:80px auto;
 
`;

export const Title = styled.h1`
    margin-right:150px;
    text-transform: uppercase;
    font-size:30px;
    &:nth-child(2){
        margin-left:245px;
    }

    &:nth-child(3){
        margin-left:110px;
    }

    &:nth-child(4){
       
    }
 `

export const TextFrame = styled.div`width:80%;
    display:flex;
    color:#2b8068;
    margin-top:30px;

    @media(max-width:768px){
        display:none;
    } 
`;

export const Button = styled.button`
    font-size:30px;
    display:block;
    margin:auto;
    text-decoration:none;
    background:none;
    border:2px solid #2b8068;
    padding:30px;
    border-radius:10px;
    color:#2b8068;
    cursor:pointer;
    transition:.5s;
    &:hover{
        color:#eee;
        background-color:#2b8068;
        transform:scale(1.1);
    }
`;

export const Image = styled.img`
      display: block;
      margin:auto;
      height:600px;
      object-fit: contain;
`;

export const SubTitle = styled.h1`
    display:block;
    text-align:center;
    margin-bottom:30px;
`;

export const PriceGroup = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

export const Text = styled.h3`
    text-align: end;
    font-size:30px;
`;

export const PriceWrapper = styled.div`
    width:20%;
    margin-left:auto;
    font-size:30px;
    border-top:2px solid #2b8068;
    @media(max-width:768px){
        margin-right:auto;
        width:initial;
        font-size:20px;
    } 
    
`;

export const ButtonGroup = styled.div`
    display:flex;
    width:43%;
    margin-left:auto;
    margin-top:50px;
    justify-content: space-between;
    @media(max-width:768px){
        margin-right:auto;
        width:initial;
    } 
`;

export const CartButton = styled.button`
    font-size:30px;
    text-decoration:none;
    background:none;
    border:2px solid #2b8068;
    padding:20px;
    border-radius:10px;
    width:300px;
    color:#2b8068;
    cursor:pointer;
    transition:.5s;
    &:hover{
        color:#eee;
        background-color:#2b8068;
        transform:scale(1.1);
    }

    @media(max-width:768px){
        font-size:20px;
        width:initial;
    } 
`;