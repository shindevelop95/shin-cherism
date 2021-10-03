import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    margin-top:25rem;
`;

export const Title = styled.h1`
    font-size:2rem;
    text-transform:uppercase;
    margin-top:5rem;
`;

export const SubTitle = styled.h3`
    font-size: 2rem;
    text-transform:uppercase;
`;

export const Text = styled.p`
    margin:.8rem 0;
    color:${({color}) => color? color : `#eee`};
    font-size:1.8rem;

`;

export const SubText = styled.p``;

const fadeUp = keyframes`
    0%{
        transform:translateY(2rem);
    }
    100%{
        opacity:1;
        transform:translateY(0);
    }
`
export const Group = styled.div`
    width:90%;
    margin:auto;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:auto;
`;

export const Frame = styled.div`
    background-color:#91B9Ae;
    position:relative;
`;

export const FrameGroup = styled.div`
    height:20rem;
    width:90%;
    margin:auto;
    padding:2rem 0;

    .up{
        position:absolute;
        background-color:#91B9Ae;
        top:-20%;
        left:25%;
        border-radius:50%;
        height:100px;
        width:100px;
       
    }

    .arrow{
        font-size:5rem;
        color:#eee;
        display:block;
        margin:auto;
        padding-top:.1rem;
        animation: ${fadeUp} 2s linear infinite;
        cursor:pointer;
    }
`;
export const SocialGroup = styled.div`
    display:flex;
    .MuiSvgIcon-root{
        color:#2B8068;
        font-size:4.5rem;
    }

`;




export const LetterGroup = styled.div`
    position:absolute;
    right:0;
    bottom:0;
    width:50%;
    background-color: rgba(144,110,43,.4);
    height:40rem;

    @media (max-width: 768px) {
        display:none;
  }

`;

export const LetterInner = styled.div`
    width:80%;
    margin:auto;
    position:relative;
`;

export const LetterFrame = styled.div`
    border:2px solid black;
    text-align: center;
    padding:2rem 0;
    margin:1.5rem 0;
`;

export const LetterTitle = styled.h1`
   font-size:2rem;
   padding:2rem 0;
   text-align: center;
   cursor:pointer;
   transition:.5s;
   &:hover{
       color:#eee;
       transform:scale(1.2);
   }
`;

export const LetterInput = styled.input`
    font-size:2rem;
    background-color: transparent;
    border:none;
    text-align: center;
    font-style: italic;
    color:black;

    &:focus{
        outline:none;
    }
`;

export const CopyGroup = styled.div`
    font-style:italic;
    font-size:1.8rem;
    text-align:center;
`;

