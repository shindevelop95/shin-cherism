import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Frame = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top:60px;
    @media(max-width:768px){
        flex-direction:column;
    } 
`;

export const Title = styled.h1`
     font-size:30px;
     text-transform:uppercase;
     width:${({width}) => width? width:null};
     line-height:1.5;
     text-align:start;

     @media(max-width:768px){
        text-align:center;
    } 
`;

export const Text = styled.h3`
  width:350px;
  color:rgba(0,0,0,.7);
  font-size:20px;
  text-align:start;
  @media(max-width:768px){
        text-align:center;
    } 
`;

export const Image = styled.img`
    width:400px;
    height:300px;
  
`;

export const Group = styled.div`
    .MuiSvgIcon-root{
        color:#2b8068;
       font-size:50px;
        transition:.5s;
        &:hover{
            transform: scale(1.1);
        }
    }
    @media(max-width:768px){
        &:nth-child(3){
            display:flex;
            align-items:center;
        }
    } 
`;

export const TextInput = styled.h3`
    text-align:center;
    border:2px solid #2b8068;
    padding:25px 15px;
 
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

    @media(max-width:768px){
     
        font-size:20px;
        padding:28px 0;
    } 
`;

