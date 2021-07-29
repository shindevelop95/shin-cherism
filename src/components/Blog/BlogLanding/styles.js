import styled from 'styled-components/macro';

export const Container = styled.div`
 
    
`;

export const Frame = styled.div`
       width:90%;
       margin:0 auto;
`;

export const Inner = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

export const Image = styled.img`
    height:360px;
    min-width:550px;
    @media (max-width: 768px) {
        min-width:initial;
        width:100%;
    }
`;

export const Text = styled.p`
    font-size:30px;
    @media (max-width: 768px) {
        text-align:center;
        font-size:25px;
    }
`;

export const Input = styled.input`
    width:400px;
    padding:18px 20px;
    border:2px solid #2b8068;

    @media (max-width: 768px) {
       width:90%;
       margin-bottom:20px;
    }
`;
