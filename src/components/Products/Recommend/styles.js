import styled from 'styled-components/macro'

export const Container = styled.div`
    margin:20rem 0;
`;

export const Frame = styled.div`
    display:flex;
    flex-wrap:wrap;
    @media (max-width: 768px) {
       flex-direction:column;
}
`;

export const Wrapper = styled.div`
    flex:1;
    max-height:40rem;
    @media (max-width: 768px) {
        height:50rem;
}
`;

export const Image = styled.img`
    width:100%;
    height:100%;
`;

export const Title = styled.h1`
    font-size:4rem;
    color:#2B8068;
    margin:2rem 0%;
    text-align:center;
    text-transform:uppercase;
`;

