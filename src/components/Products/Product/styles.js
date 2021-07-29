  
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components/macro';

export default makeStyles(() => ({
  root: {
    flexGrow:1,
    height:'auto',
    position:'relative',
  },
  media: {
    height: 170,
    paddingTop: '59.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    opacity:.5,
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
}));

export const TopWrapper = styled.div`
  position:absolute;
  top:0;
  display:flex;
  width:90%;
  left:50%;
  transform:translateX(-50%);
  justify-content: space-between;
  align-items:center;
  .MuiSvgIcon-root{
    height:40px;
    width:40px;
    color:#2B8068;
    cursor:pointer;
    transition:.5s;
  }

  .MuiSvgIcon-root:hover{
    transform:scale(1.2);
  }
`;

export const SubHeader = styled.h3`
  font-size:25px;
  font-weight:normal;
  color:${({color}) => color? color : '#2B8068'};
  width:300px;
  @media (max-width: 768px) {
       font-size:20px;
       
  }  
`;

export const BottomWrapper = styled.div`
  position:absolute;
  background-color: rgba(43,128,104,.65);
  height:20%;
  bottom:0;
  width:100%;
  @media (max-width: 768px) {
    height:40%；
  }
`;


export const BottomInner = styled.div`
  display:flex;
  justify-content: space-between;
  width:90%;
  height:100%;
  margin: auto;
  align-items:center;
  .MuiSvgIcon-root{
    font-size:40px;
    color:#eee;
    cursor:pointer;
    transition:.5s;
  }

  .MuiSvgIcon-root:hover{
    transform:scale(1.2);
  }

  @media (max-width: 768px) {
    .MuiSvgIcon-root{
      font-size:30px!important;
  }
  }  

`;