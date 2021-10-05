import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #eee;
    padding:80px 0;
    padding-bottom:200px;
`;


export const Frame = styled.div`
   display:flex;
   justify-content: space-between;
   margin-top: 120px;
   flex-wrap:wrap;
   @media (max-width: 768px) {
    flex-direction:column;
  }
`;

export const Group = styled.div`
    background-color:#E3F8F2;
    flex:0 0 30%;
    min-height:50rem;
    position:relative;
    box-shadow: 5px 10px rgba(0,0,0,.4);

    @media (max-width: 768px) {
        &:not(:last-child){
            margin-bottom:1rem;
            display:flex;
            align-items: center;
        }
  }
`;

export const Image = styled.img`
  position:absolute;
  width:100%;
  right:-40%;
  bottom:-13%;
  @media (max-width: 768px) {
      position:initial;
  }
`;


export const WrapperFirst = styled.div`
     width:90%;
    margin:auto;
`;

export const Title = styled.h1`
    font-size:3rem;
    color:#2b8068;
    text-align:${({align}) => align ? align : null};
    @media (max-width: 768px) {
        text-align:center;
  }
`;

export const Text = styled.p`
    font-size:1.8rem;
    margin:3rem 0;
    color:rgba(0,0,0,.85);
    @media (max-width: 768px) {
       text-align:center;
  } 
`;

export const GalleryContainer = styled.div`
    padding: 22rem 0;
    @media (max-width: 768px) {
       display:none;
  }
`;

export const GalleryFrame = styled.div`
    display:flex;
    justify-content:space-between;
    transform: translate(-20%,10%);
    position:relative;

   .disabled{
       display:block!important;
   }

   .owl-prev,
   .owl-next{
      top:-20.5%;
      position:absolute;
      font-size: 7rem!important;
      color:#2b8068!important;
      transition:.5s;
      :hover{
          background-color:transparent!important;
          transform:scale(1.2);
      }

   }

   .owl-prev{ 
       left:40%;
   }

   .owl-next{
       right:0%;
   }
`;

export const GalleryGroup = styled.div`
  
`;

export const GalleryWrapper = styled.div`
    background-color:#C0E9DE;
    width:80%;
    margin-left:auto;
    padding:100px 100px 0 100px;
    position:relative;
`;
export const GalleryImage = styled.img`
    height:65rem;
    width:50rem;
`;
