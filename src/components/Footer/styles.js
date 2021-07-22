import styled from 'styled-components'

export const Container = styled.div`
    margin-top:250px;
`;

export const Title = styled.h1`
    margin-left:10%;
    font-size:30px;
    text-transform:uppercase;
    margin-top:52px;
    
`;

export const SubTitle = styled.h3`
    font-size: 25px;
    text-transform:uppercase;
`;

export const Text = styled.p`
    color:${({color}) => color? color : `#eee`};
    font-size:25px;
    margin-left:${({marginleft}) => marginleft? marginleft : null};
    margin-bottom:${({marginbottom}) => marginbottom? marginbottom : null};

`;

export const SubText = styled.p``;

export const Group = styled.div`
    margin-left:10%;
    padding:35px 0;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:auto;
`;

export const SocialGroup = styled.div`
    display:flex;
    .MuiSvgIcon-root{
        color:#2B8068;
        font-size:50px;
    }

`;

export const Frame = styled.div`
    background-color:#91B9Ae;
    position:relative;
`;

export const LetterGroup = styled.div`
    position:absolute;
    background-color: rgba(144,110,43,.4);
    height:700px;
    right:0;
    top:-90%;
    width:1200px;


`;

export const LetterTitle = styled.h1`
   font-size:30px;
   padding:30px 0;
   text-align: center;
   cursor:pointer;
   transition:.5s;
   &:hover{
       color:#eee;
       transform:scale(1.2);
   }
`;

export const LetterInput = styled.input`
    font-size:30px;
    background-color: transparent;
    border:none;
    text-align: center;
    font-style: italic;
    color:black;
    padding:60px 100px;
    &:focus{
        outline:none;
    }
`;

export const LetterFrame = styled.div`
    width:80%;
    margin:auto;
    min-height:160px;
    border:2px solid black;
    text-align: center;
  
  
`;

export const CopyGroup = styled.div`
margin-top:120px;
font-style:italic;
    display:inline-block;
    margin-left:320px;
    font-size:25px;
  
`;

