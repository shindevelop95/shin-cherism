import styled from 'styled-components/macro'

export const NewContainer = styled.div`
margin-top:300px;

`;

export const Wrapper = styled.div`
    display:flex;
    width:100%;
    flex-basis:50%;
    align-items:center;
    justify-content: space-evenly;
    margin:0 auto;
`;

export const Image = styled.img`
    height:800px;
    width:800px
`;

export const Frame = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap:10px;
   
`;

export const Title = styled.h3`
    font-size: 40px;
    text-align:start;
    padding-left:60px;
    display:block;
    color:#2b8068;
    text-transform:uppercase;
    margin-top:120px;
   
`;

export const Text = styled.p`
    font-size:20px;
    width:300px;
    padding-left:60px;
    text-align:start;
    font-weight:800;
`;

export const Button = styled.button``;

export const Item = styled.div`
    .MuiSvgIcon-root{
        height:200px;
        width:200px;
        display:block;
        border:3px solid black;
        border-radius:50%;
        margin:0 auto;
        margin-top:100px;
        cursor:pointer;
        transition:.5s;

        &:hover{
            color:#2b8068;
            border:3px solid #2b8068;
            transform:scale(1.1);
        }
        
    }
    &:first-child{
        background-color: #eee;
    }`;

export const ItemImage = styled.img`
    height:400px;
    width:400px;
`;
