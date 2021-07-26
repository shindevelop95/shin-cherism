import styled from 'styled-components/macro'

export const Container = styled.div`
    margin:50px 0;

`;

export const Frame = styled.div`
    width:86%;
    margin:0 auto;
`;

export const Image = styled.img`
    width:${({width}) => width? width:'100%'};
    height:auto;
`;

export const Inner = styled.div`
    display:flex;
    align-items:center;
    margin:30px 0;
`;

export const Group = styled.div`
    flex:1;

`;


export const Button = styled.button`
    font-size:30px;
    display:${({display}) => display? display :null};
    margin:0 auto;
    color:#eee;
    background-color:#91B9AE;
    padding:10px 60px;
    border:none;
    @media (max-width: 768px) {
        display:block;
        margin:0 auto;
    }
`;

export const Title = styled.h1`
    font-size:30px;
    text-transform:uppercase;
    text-align:center;
`;

export const Text = styled.p`
    font-size:20px;
    text-align:center;
    width:${({width}) => width?width:'initial'};
    margin:0 auto;
`;

