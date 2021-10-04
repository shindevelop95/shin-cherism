import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Container = styled.div`
    margin:8rem 0;
`;


export const Wrapper = styled.div`
    display:flex;
    width:90%;
    margin:5rem auto;
    @media (max-width: 1000px) {
      flex-direction:column-reverse;
}
`;

export const Header = styled(motion.h1)`
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size:6.5rem;
    position:relative;
    color:#2b8068;
    z-index:12;
    line-height:0.8;
    text-align: start;
    margin-bottom:3rem;
    @media (max-width: 768px) {
  
  }
`;

export const ItemLeftInner = styled.div`
  margin-top: 10rem;
  transform: translateX(20%);
  position:relative;
  z-index: 20;
  @media (max-width: 768px) {
    transform:initial;
    text-align: center;
}
`;
export const Button = styled.button`
    border:none;
    background-color: #906E2b;
    color:#eee;
    font-size:2rem;
    padding:1rem 2.5rem;
    border-radius:10px;
    display:flex;
    align-items: center;
    cursor:pointer;
    transition:.5s;
    .MuiSvgIcon-root{
        font-size:3rem;
        margin-left: 2rem;
    }

    &:hover{
      transform:scale(1.1);
    }

    @media (max-width: 768px) {
        
  }
`;

export const ItemLeft = styled(motion.div)`
    flex:0 0 30%;
    position:relative;
    background-color:#eee;
    padding:2.5rem;

    @media (max-width: 768px) {
      flex:0 0 100%;
  }
`;

export const ItemRight = styled(motion.div)`
    flex:0 0 70%;
    transform: translate(0%, -5%);
    border:none;
    @media (max-width:768px) {
      display:none;
  }
`;

export const Slider = styled.div`
`;

export const Banner = styled.div`
    display:flex;
    width:90%;
    margin:auto;
    flex-wrap:wrap;
    justify-content:space-between;
    @media (max-width: 768px) {
        flex-direction:column;  
  }
 
`;

export const BannerWrap = styled(motion.div)`
    position:relative;
    height:24rem;
    flex:0 0 30%;

    &:after{
      content:'';
      position:absolute;
      top:0;
      left:0;
      background-color:rgba(255,255,255,.5);
      height:100%;
      width:100%;
    }

    @media (max-width: 768px) {
        flex-direction:column;
        width:100%;
        margin-bottom:10px;
  }
`;

export const Image = styled(motion.img)`
    height:100%;
    width:100%;
`;

export const ImageBanner = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:2;
    color:#2b8068;
    padding:4rem;
   
    span{
        font-family: 'Herr Von Muellerhoff', cursive;
        border:2px solid #2b8068;
        padding:2rem 8rem;
        font-size:80px;
        font-weight:800;
    }
`;