import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    width:90%;
    margin:80px auto;
`;

export const TextFrame = styled.div`
    display:flex;
    color:#2b8068;
    margin-top:3rem;
    justify-content: space-around;
    text-align:center;

    @media(max-width:768px){
        display:none;
    } 
`;

export const Frame = styled.div`
   border-top:2px solid #2b8068;
   margin-top:30px;
`;


export const Title = styled.h1`
    flex:1;
    font-size:3rem;
    padding:2rem;
 `
export const Button = styled.button`
    font-size:20px;
    display:block;
    margin:auto;
    text-decoration:none;
    background:none;
    padding:20px;
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
      height:300px;
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
`;


export const PriceWrapper = styled.div`
    width:20%;
    font-size:2rem;
    margin-left:auto;
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
    font-size:2rem;
    text-decoration:none;
    background:none;
    border:2px solid #2b8068;
    padding:1.8rem;
    border-radius:10px;
    width:23rem;
    color:#2b8068;
    cursor:pointer;
    transition:.5s;
    &:hover{
        color:#eee;
        background-color:#2b8068;
        transform:scale(1.1);
    }
`;