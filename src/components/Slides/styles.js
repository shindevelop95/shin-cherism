import styled from 'styled-components/macro'

export const NewContainer = styled.div`
    margin-top:20rem;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    @media (max-width:768px){
        flex-direction:column;
     }
`;

export const ImageFrame = styled.div`
    min-height:50rem;
    min-width:50rem;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  
`;
export const Image = styled.img`
    height:100%;
    width:100%;
    @media (max-width:768px){
     }
`;

export const Frame = styled.div`
    width:50%;
    margin-left:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr));

    @media (max-width:768px){
        margin-left:initial;
        width:100%;
     }
   
`;

export const Title = styled.h3`
    font-size: 3.5rem;
    text-align:start;
    padding-left:5.6rem;
    display:block;
    color:#2b8068;
    text-transform:uppercase;
    margin-top:12rem;

    @media (max-width:768px){
         font-size:30px;
         margin-top:80px;
         padding-left: initial;
         text-align:center;
     }
   
`;

export const Text = styled.p`
    font-size:2rem;
    width:30rem;
    padding-left:6rem;
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
    height:33rem;
    .MuiSvgIcon-root{
        height:18rem;
        width:18rem;
        display:block;
        border:3px solid black;
        border-radius:50%;
        margin:0 auto;
        margin-top:8rem;
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
    `;

export const SlideShow = styled.div`
    flex-basis:50%;
    display:block;
     @media (max-width:768px){
        display:none;
     }
`;

export const ItemImage = styled.img`
    width:100%;
    height:100%;

    @media(max-width:768px){

    }
`;
