import styled from 'styled-components/macro'

export const Container = styled.div`

`;

export const Title = styled.h1`
    font-size:40px;
    width:1000px;
    color:#2B8068;
    text-align:center;
    margin:0 auto;

    @media (max-width: 768px) {
        font-size:40px;
        width:initial;
    }

`;

export const SubTitle = styled.h3`
    font-size:30px;
    text-transform:uppercase;
    text-align:${({textAlign}) => textAlign? textAlign:'start'};
    color:#2B8068;
    @media (max-width: 768px) {
        font-size:30px;
        text-align:center;
    }
`;

export const Text = styled.p`
    font-weight:${({fontWeight}) => fontWeight? fontWeight:null};
    font-size:20px;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
`;

export const Group = styled.div`
    display:flex;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;
export const Frame = styled.div``;

export const LeftGroup = styled.div`
    flex-basis:70%;
    padding:0 40px;
    hr{
        border:1px solid #eee;
    }

    @media (max-width: 768px) {
        flex-basis:100%;
        margin-bottom:20px;
    }
`;

export const RightGroup = styled.div`
    flex-basis:25%;
    padding:0 40px;
    hr{
        border:1xp solid black !important;
    }
    .MuiSvgIcon-root{
        font-size:40px;
    }
`;

export const Image = styled.img`
    width:100%;
    object-fit:contain;
`;

export const InstaFrame = styled.div``;

export const InstaFrameInner = styled.div``;

export const InstaText = styled.h3``;

export const InstaButton = styled.button`
   
`;

export const InstaInput = styled.input`
    padding:10px 20px;
    border:none;
    font-size:15px;
`;




