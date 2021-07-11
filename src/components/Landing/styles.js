import styled from 'styled-components'

export const Container = styled.div`
  
    
`;

export const Logo = styled.img`
    height:150px;
    display:block;
    margin:50px auto;
`;

export const Wrapper = styled.div`
    display:flex;
    width:90%;
    margin:auto;

    
`;

export const Header = styled.h1`
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size:80px;
    color:#2b8068;
    z-index:12;
    line-height:0.8;
    position:absolute;
    width:440px;
    text-align: start;
    top:10%;
    left:15%
`;

export const Button = styled.button`
    border:none;
    background-color: #906E2b;
    color:#eee;
    font-size:30px;
    padding:15px 25px;
    border-radius:10px;
    display:flex;
    align-items: center;
    margin-top: 250px;
    cursor:pointer;

    .MuiSvgIcon-root{
        font-size:50px;
        margin-left: 20px;
    }
`;

export const ItemLeft = styled.div`
    position:relative;
    background-color:#eee;
    padding:120px;
    min-width:500px;
    min-height:500px;
`;

export const ItemRight = styled.div`
    transform: translate(-20%, -5%);
    border:none;

    @media (max-width: 768px) {
    display:none;
  }
`;

export const Slider = styled.div`
`;

export const Banner = styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
    margin:0 auto;
    margin-top:80px;
 
`;

export const Image = styled.img`
    height:350px;
    width:550px;
`;

export const BannerText = styled.h1``;

export const BannerWrap = styled.div`
    position:relative;
    
    &:after{
        content:'';
        position:absolute;
        height: 100%;
        width:100%;
        top:0;
        left:0;
        background-color:rgba(0,0,0,.3);
    }
`;

export const ImageBanner = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:2;
    font-size:80px;
    font-weight:800;
    font-family: 'Herr Von Muellerhoff', cursive;
    color:#2b8068;
    padding:60px 60px;
    background-color:rgba(255,255,255,.7);

    span{
        border:2px solid #2b8068;
        padding:20px 80px;
    }
`;