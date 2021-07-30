import styled from 'styled-components/macro'

export const Container = styled.div`
    margin:200px 0;
`;

export const Frame = styled.div`
    display:flex;
    justify-content:space-between;

    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

export const Wrapper = styled.div`
    height:600px;
    overflow:hidden;
    @media (max-width: 768px) {
        height:400px;
}
   
`;

export const Image = styled.img`
    width:600px;
    min-height:600px;
    @media (max-width: 768px) {
        min-height:400px;
}
    

`;

export const Title = styled.h1`

    font-size:40px;
    width:1000px;
    color:#2B8068;
    text-align:center;
    margin:30px auto;
    text-transform:uppercase;

    @media (max-width: 768px) {
        font-size:40px;
        width:initial;
    }
`;

