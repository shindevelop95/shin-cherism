import styled from 'styled-components/macro'

export const Container = styled.div`
    margin-top:200px;
    background-color:#eee;
`;

export const Group = styled.div`
    width:800px;
  
    .video-js{
        margin-left:auto;
    }
`;

export const Frame = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    padding:80px 0;
    width:90%;
    margin:auto;
`;

export const Title = styled.h1`
    font-size:50px;
    color:#2b8068;
`;

export const Text = styled.p`
    font-size:25px;
`;