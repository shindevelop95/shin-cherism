import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Frame = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top:6rem;
    @media(max-width:768px){
        flex-direction:column;
    } 
`;

export const Title = styled.h1`
     font-size:2rem;
     text-transform:uppercase;
     text-align:start;

     @media(max-width:768px){
        text-align:center;
    } 
`;

export const Text = styled.h3`
  color:rgba(0,0,0,.6);
  font-size:1.6rem;
  margin-top:2rem;
  text-align:start;
  @media(max-width:768px){
        text-align:center;
    } 
`;

export const Image = styled.img`
    width:100%;
   max-height:18rem;
`;

export const Group = styled.div`
    flex:1;
    padding:2rem;
    &:nth-child(3),
    &:nth-child(4){
            display:flex;
            align-items:center;
            justify-content: center;
    }
    .MuiSvgIcon-root{
        color:#2b8068;
       font-size:50px;
        transition:.5s;
        &:hover{
            transform: scale(1.1);
        }
    }
`;

export const TextInput = styled.h3`
    text-align:center;
    border:2px solid #2b8068;
    display:inline-block;
    min-height:4rem;
    width:5rem;
    font-size:2.5rem;
`;

export const InputButton = styled.button`
    background-color: #2b8068;
    color:#eee;
    border:none;
    font-size:2.5rem;
    text-align:center;
    cursor:pointer;
    transition:.5s;
    min-height:4rem;
    width:5rem;
    &:hover{
        transform:scale(1.1);
    }
`;

