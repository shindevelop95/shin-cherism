import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Button = styled.button`
    font-size:30px;
    color:#eee;
    background-color:#91B9AE;
    padding:10px 60px;
    border:none;
    cursor:pointer;
    transition:.5s;
    &:hover{
       background-color:#2B8068;
       color:#eee;
    }
    @media (max-width: 768px) {
        display:block;
        margin:0 auto;
    }
`;