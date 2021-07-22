
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components/macro';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#E3EEB',
    padding: theme.spacing(3),
    width:'80%',
    margin:'auto',
  },
  root: {
    flexGrow: 1,
  },
}));

export const Header = styled.h1`
   font-family: 'Herr Von Muellerhoff', cursive;
    font-size:80px;
    color:#2b8068;
    z-index:12;
    line-height:0.8;
    width:440px;
    text-align: start;
    @media (max-width: 768px) {
        left:6%;
        font-size:50px;
        text-align: center;
  }
`;

