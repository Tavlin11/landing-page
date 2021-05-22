
import {
    Container,
    Typography,
    Link
  } from '@material-ui/core';
  
  import { makeStyles } from '@material-ui/core/styles';
  
  function Copyright() {
    
    return (
    
      <Typography>
      
        {"Copyright "}
      
        {" " + new Date().getFullYear()}
      
      </Typography>
      
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    
    footer: {
      padding: theme.spacing(6) 
    } 
    
  }));
  
  export default function Footer() {
    
    const classes = useStyles();
    
    return (
    
      <footer className={classes.footer}>
      
        <Container>
      
          <Typography variant="h6">
            Tavlin Sekhon
          </Typography>
      
          <Typography variant="subtitle1" color="textSecondary">
           tavlin23@gmail.com / 416-721-5373
          </Typography>
      
          <Copyright />
      
        </Container> 
      
      </footer>
      
    );
    
  }