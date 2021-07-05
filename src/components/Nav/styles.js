import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    background-color:#91b9ae;
    padding:15px 0;
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
`;

export const Group = styled.div`
    display: flex;
    align-items:center;
    width:10%;
    justify-content: space-evenly;
`;

export const TextGroup = styled.div`
    display:flex;
    justify-content: space-between;
    width:50%;
    color:#eee;
    align-items: center;
`;

export const Button = styled.button`
    background-color: transparent;
    color:#eee;
    font-size:20px;
    border:none;
    margin-right:10px;

    .MuiSvgIcon-root{
        height:40px;
        width:40px;
    }


`;

export const Text = styled.h3``;

export const Input = styled.input``;


