import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  cardImage:{
    height: 400,

  }
}));

export default function GridItem(props){

const classes = useStyles();

  return(
    <Card>
       <CardHeader
           title={props.title}
           subheader={props.subheader}
       />

       <CardMedia
            className={classes.cardImage}

            image={props.image}
       />
       <CardContent>
        <Typography>
          {props.description}
        </Typography>
       </CardContent>
       <CardActions>
       <label for="male">Visit app</label>
            <IconButton aria-label="visit page" href={props.link}>
                <ArrowForward />
            </IconButton>
       </CardActions>
    </Card>
  );
}
