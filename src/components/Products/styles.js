
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#E3EEB',
    padding: theme.spacing(3),
    margin:'auto',
  },
  root: {
    flexGrow: 1,
  },
}));
