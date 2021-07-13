import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Frame = styled.div`
   
`;

export const Wrapper = styled.div`
    width:80%;
    margin:auto;
`;

export const Logo = styled.img`
     height:150px;
    display:block;
    margin:50px auto;
`;
export const Header = styled.h1`    font-family: 'Herr Von Muellerhoff', cursive;
font-size:80px;
color:#2b8068;
line-height:0.8;
text-align: start;

@media (max-width: 768px) {
    left:6%;
    font-size:50px;
    text-align: center;
}`;

export const Title = styled.h1`
    margin-right:150px;
    &:nth-child(2){
        margin-left:160px;
    }

    &:nth-child(3){
        margin-left:40px;
    }

    &:nth-child(4){
        margin-left:20px;
    }
 `

export const TextFrame = styled.div`
    width:80%;
    display:flex;
    color:#2b8068;
   
`;

