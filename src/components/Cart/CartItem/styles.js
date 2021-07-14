import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Frame = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top:60px;
`;

export const Title = styled.h1``;

export const Image = styled.img`
    width:400px;
    height:400px;
  
`;

export const Group = styled.div`

    &:nth-child(3){
            padding:0 80px;
            margin-right:40px;
        }
    .MuiSvgIcon-root{
        color:#2b8068;
        height:100px;
        width:60px;
        transition:.5s;
        &:hover{
            transform: scale(1.1);
        }

    }
`;

export const Text = styled.h3`
   font-size:30px;
   width:380px;
   line-height:1.5;
   text-align:start;
   margin-left:40px;
`;

export const PriceText= styled.h3`
    padding:0 80px;
    font-size:30px;
    line-height:1.5;
   text-align:center;
`;

export const TextInput = styled.h3`
    text-align:center;
    border:2px solid #2b8068;
    padding:25px 15px;
 
`;

export const Button = styled.button`
    
`;

export const InputButton = styled.button`
    background-color: #2b8068;
    color:#eee;
    min-width:60px;
    padding:15px 15px;
    border:none;
    font-size:40px;
    text-align:center;
    cursor:pointer;
    transition:.5s;
    &:hover{
        transform:scale(1.1);
    }
`;

