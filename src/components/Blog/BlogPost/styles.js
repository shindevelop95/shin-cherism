import styled from 'styled-components/macro'

export const Container = styled.div`
    margin: 5rem 0;
`;

export const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
`;

export const Title = styled.h1`
    width:80%;
    margin:0 auto;
    font-size:3rem;
    color:#2B8068;
    text-align:center;

    @media (max-width: 768px) {
        font-size:40px;
        width:initial;
    }

`;

export const SubTitle = styled.h3`
    font-size:2.4rem;
    text-transform:uppercase;
    text-align:${({textAlign}) => textAlign? textAlign:'start'};
    color:#2B8068;
    margin:1rem 0;
    @media (max-width: 768px) {
        font-size:30px;
        text-align:center;
    }
`;

export const Text = styled.p`
    font-weight:${({fontWeight}) => fontWeight? fontWeight:null};
    font-size:1.8rem;
    color:rgba(0,0,0,.85);

    span{
        color:#E96B99;
    }
`;



export const Group = styled.div`
    margin:5rem 0;
    display:flex;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

export const LeftGroup = styled.div`
    flex:0 0 70%;
    padding:0 40px;

    .MuiCardHeader-title{
        font-size:1.8rem;
    }

    .MuiCardHeader-subheader{
        font-size:1.4rem;
    }
    hr{
        border:1px solid #eee;
    }

    @media (max-width: 768px) {
        flex-basis:100%;
        margin-bottom:20px;
    }
`;

export const RightGroup = styled.div`
    flex:0 0 25%;
    padding:0 4rem;
    hr{
        border:1xp solid black !important;
    }
    .MuiSvgIcon-root{
        font-size:4rem;
    }
`;

export const Image = styled.img`
    width:100%;
    object-fit:contain;
`;

export const InstaInput = styled.input`
    padding:20px 20px;
    border:none;
    font-size:15px;

    &:focus{
        outline:none;
    }
`;




