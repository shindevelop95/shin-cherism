import styled from 'styled-components/macro'

export const NewContainer = styled.div`
    margin-top:30rem;
    width:90%;
    margin:auto;
    @media (max-width:1300px){
        width:100%;
     }
`;

export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    @media (max-width:768px){
        flex-direction:column;
     }
`;

export const ImageFrame = styled.div`
    min-height:55rem;
    min-width:55rem;
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
        width:100%!important;
        height:400px!important;
     }
`;

export const Frame = styled.div`
    width:50%;
    margin-left:auto;
    display:grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width:768px){
        grid-template-columns: repeat(1,1fr);
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
    @media (max-width:768px){
         height:250px;
         width:250px;
         .MuiSvgIcon-root{
            margin-top:30px;
         }
     }
    `;

export const SlideShow = styled.div`
    flex-basis:50%;
    display:block;
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
    width:100%;
    height:100%;

    @media(max-width:768px){
        height:250px;
        width:250px;
    }
`;
