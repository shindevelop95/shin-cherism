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

export const TextGroup = styled.div`
    width:80%;
    margin:auto;
`;

export const Title = styled.h3`
    font-size: 3rem;
    display:block;
    color:#2b8068;
    margin-bottom:1rem;
    text-transform:uppercase;   
`;

export const Text = styled.p`
    font-size:1.8rem;
    font-weight:800;
`;


export const Item = styled.div`
    height:33rem;
    &:nth-child(1){
        display:flex;
        align-items:center;
    }
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
