import styled from 'styled-components/macro'

export const NewContainer = styled.div`
    margin-top:300px;
    @media (max-width:768px){
        width:100%;
    }
`;

export const Wrapper = styled.div`
    display:flex;
    width:100%;
    flex-basis:50%;
    align-items:center;
    justify-content: space-evenly;
    margin:0 auto;
    @media (max-width:768px){
        flex-direction:column;
     }
`;

export const Image = styled.img`
    height:100%;
    width:100%;

    @media (max-width:768px){
        width:100%!important;
        height:400px!important;
     }

`;

export const Frame = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap:10px;

    @media (max-width:768px){
        grid-template-columns: repeat(1,1fr);
     }
   
`;

export const Title = styled.h3`
    font-size: 40px;
    text-align:start;
    padding-left:60px;
    display:block;
    color:#2b8068;
    text-transform:uppercase;
    margin-top:120px;

    @media (max-width:768px){
         font-size:30px;
         margin-top:80px;
         padding-left: initial;
         text-align:center;
     }
   
`;

export const Text = styled.p`
    font-size:20px;
    width:300px;
    padding-left:60px;
    text-align:start;
    font-weight:800;

     @media (max-width:768px){
         padding-left: initial;
         font-size:20px;
         text-align:center;
         width:initial;

     }
`;


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
    &:first-child,
    &:last-child{
        background-color: #eee;
    }
    @media (max-width:768px){
         height:250px;
         width:250px;
         .MuiSvgIcon-root{
            margin-top:30px;
         }
     }
    `;

export const SlideShow = styled.div`
     @media (max-width:768px){
         img{
            height:500px;
            width:500px;
         }
         height:500px;
         width:500px;
         margin-bottom:50px;
     }
`;

export const ItemImage = styled.img`
    height:400px;
    width:400px;

    @media(max-width:768px){
        height:250px;
        width:250px;
    }
`;
