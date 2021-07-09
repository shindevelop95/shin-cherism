import styled from 'styled-components'

export const Container = styled.div`
    margin-top:250px;
`;

export const Title = styled.h1`
    margin-left:10%;
    font-size:50px;
    margin-top:10%;
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
    padding:100px 0;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:auto;
`;

export const SocialGroup = styled.div`
    display:flex;
    .MuiSvgIcon-root{
        margin-right:20px;
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
    height:1000px;
    right:0;
    top:-100%;
    width:1200px;


`;

export const LetterTitle = styled.h1`
    font-size:40px;

`;

export const LetterFrame = styled.div`
    width:80%;
    margin:auto;
    border:2px solid black;
    text-align: center;
    padding:50px 0;
`;

export const CopyGroup = styled.div`
font-style:italic;
    display:inline-block;
    margin-left:320px;
    font-size:25px;
    margin-top:200px;
`;

