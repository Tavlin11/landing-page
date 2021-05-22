import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  mainContainer:{
    height: 400,
    backgroundImage: "url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)",
     color: theme.palette.common.white,
     backgroundSize: 'cover'

  },
  mainItem:{
    padding: theme.spacing(6),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));
 export default function MainGridItem(){

  const classes = useStyles();

  return(
    <Grid container className={classes.mainContainer}>

     <Grid Item className={classes.mainItem} md={6}>

    <Typography component='h2' variant="h4">
      Tavlin Sekhon <br/>
      Jr. Developer
    </Typography>

    <Typography variant='body1'>
       Web Developer from Toronto, Canada.<br/>
       416-721-5374<br/>
       tavlin23@gmail.com
    </Typography>
    </Grid>
  </Grid>
  );
}
