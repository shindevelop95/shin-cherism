import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Button = styled.button`
    font-size:30px;
    color:#91B9AE;
    background-color:transparent;
    padding:10px 60px;
    border:3px solid #91B9AE;
    cursor:pointer;
    transition:1s;
    &:hover{
       background-color:#91B9AE;
       color:#eee;
    }
    @media (max-width: 768px) {
        display:block;
        margin:0 auto;
    }
`;