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

   @media (max-width: 768px) {
       flex-direction:column;
       justify-content: center;
       align-items:center;
       width:100%;
  }
`;

export const WrapperFirst = styled.div`
     width:90%;
    margin:auto;
`;

export const Title = styled.h1`
    font-size:50px;
    color:#2b8068;
    text-align:${({align}) => align ? align : null};
    @media (max-width: 768px) {
        font-size:30px;
        text-align:center;
  }
`;

export const Text = styled.p`
    font-size:25px;
    @media (max-width: 768px) {
       font-size:15px;
       text-align:center;
  }
    
`;

export const Group = styled.div`
    background-color:#E3F8F2;
    width:450px;
    height:600px;
    position:relative;
    box-shadow: 5px 10px rgba(0,0,0,.4);

    @media (max-width: 768px) {
        width:100%;
        height:400px;
        margin-bottom:15px;
        box-shadow:initial;
  }
`;

export const Image = styled.img`
  position:absolute;
  height:900px;
  right:-200px;
  bottom:${({bottom}) => bottom ? bottom : '-150px'};

  @media (max-width: 768px) {
        width:100%;
        position:initial;
        height:400px;
  }
   

`;


export const GalleryContainer = styled.div`
    padding: 300px 0;
    @media (max-width: 768px) {
       display:none;
  }
`;

export const GalleryFrame = styled.div`
    display:flex;
    justify-content:space-between;
   transform: translate(-10%,15%);

   .disabled{
       display:block!important;
   }

   .owl-prev,
   .owl-next{
      font-size: 100px!important;
      color:#2b8068!important;
        transition:.5s;
      :hover{
          background-color:transparent!important;
          transform:scale(1.2);
      }

   }

   .owl-prev{
       position:absolute;
       top:-33.5%;
       left:20%;
   }

   .owl-next{
    position:absolute;
       top:-33.5%;
       right:2%;
   }
`;

export const GalleryGroup = styled.div`
    width:400px;
`;

export const GalleryWrapper = styled.div`
    background-color:#C0E9DE;
    width:70%;
    margin-left:auto;
    padding:100px 100px 10px 100px;
    position:relative;
`;
export const GalleryImage = styled.img`
    height:700px;
    width:300px;
`;
