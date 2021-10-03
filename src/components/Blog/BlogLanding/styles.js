import styled from 'styled-components/macro';

export const Container = styled.div`
 
    
`;

export const Frame = styled.div`
       width:90%;
       margin:0 auto;
`;

export const Inner = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: space-between;
`;

export const Text = styled.p`
    padding-right:1rem;
    flex:0 0 65%;
    font-size:2.8rem;
    @media (max-width: 768px) {
        text-align:center;
        font-size:25px;
    }
`;

export const Input = styled.input`
    flex:1;
    padding:1.8rem 5rem;
    border:2px solid #2b8068;
    ::placeholder{
        font-size:2rem;
    }
    @media (max-width: 768px) {
       margin:2rem 0;
    }
`;

export const Grid =  styled.div`
    margin:2rem 0;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Image = styled.img`
    height:30rem;
    width:100%;
`;