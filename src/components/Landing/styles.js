import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Container = styled.div`
  width:100%;
`;


export const Wrapper = styled.div`
    display:flex;
    width:90%;
    margin:auto;
    @media (max-width: 768px) {
        width:100%;
  }  
`;

export const Header = styled(motion.h1)`
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size:80px;
    color:#2b8068;
    z-index:12;
    line-height:0.8;
    position:absolute;
    width:440px;
    text-align: start;
    top:10%;
    left:15%;
    @media (max-width: 768px) {
       position:initial;
        font-size:50px;
        text-align: center;
        width:initial;
  }
`;

export const Button = styled.button`
    border:none;
    background-color: #906E2b;
    color:#eee;
    font-size:30px;
    padding:10px 25px;
    border-radius:10px;
    display:flex;
    align-items: center;
    margin-top: 250px;
    cursor:pointer;
    transition:.5s;
    .MuiSvgIcon-root{
        font-size:50px;
        margin-left: 20px;
    }

    &:hover{
      transform:scale(1.1);
    }

    @media (max-width: 768px) {
        margin:0 auto;
        margin-top:initial;
        font-size:20px;
        padding:10px 20px;
        
  }
`;

export const ItemLeft = styled(motion.div)`
    position:relative;
    background-color:#eee;
    padding:120px;
    min-width:500px;
    min-height:500px;

    @media (max-width: 768px) {
       width:100%;
       height:100%;
       padding:0;
       min-width:initial;
       min-height:initial;
       margin:auto;
  }
`;

export const ItemRight = styled(motion.div)`
    transform: translate(0%, -5%);
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
    @media (max-width: 768px) {
        flex-direction:column;
        width:100%;
        
  }
 
`;

export const Image = styled(motion.img)`
    height:350px;
    width:550px;

    &:after{
        content:'';
        position:absolute;
        height: 100%;
        width:100%;
        top:0;
        left:0;
        background-color:rgba(0,0,0,.3);
    }
    @media (max-width: 768px) {
       height:330px;
       width:100%;  
  }
`;

export const BannerText = styled.h1``;

export const BannerWrap = styled(motion.div)`
    position:relative;
    @media (max-width: 768px) {
        flex-direction:column;
        width:100%;
        margin-bottom:10px;
        
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
    @media (max-width: 768px) {
       padding:40px 40px;

        span{
        border:2px solid #2b8068;
        padding:10px 50px;
    }
        
  }
    
`;