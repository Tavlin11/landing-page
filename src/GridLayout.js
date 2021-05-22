import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';
const useStyles = makeStyles(theme => ({

  mainGridItem: {
    backgroundColor: 'blue'
  },
  secondRowFirstItem: {
    backgroundColor: 'green'
  },
  secondRowSecondItem: {
    backgroundColor: 'orange'
  },
  thirdRow:{
    backgroundColor: 'pink'
  }

}));

export default function GridLayout() {

  const classes = useStyles();

  return (
    <Grid container spacing={3}>

      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item sm={6} xs={12}>
        <GridItem title="ToDo List" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6PaCMDrWJeldWafOGEozUpBUPsybGrbRQA&usqp=CAU"
          description=" This is a ToDo list application which allows you add, update, and delete items as you wish. React and mongo db on the backend. Bootstrap on the front."
          link="https://warm-mesa-31047.herokuapp.com/" subheader="Project"
        />

      </Grid>

      <Grid item  sm={6} xs={12}>
        <GridItem title="Mailchimp signup" image="https://i1.wp.com/www.huratips.com/wp-content/uploads/2018/10/how-to-add-a-mailchimp-signup-form-to-your-shopify-store.jpg?fit=620%2C300&ssl=1"
           description="This is a mailchimp sign up form using bootstap in the front end and express and mailchimp APi on the backend."
           link="https://rocky-chamber-53497.herokuapp.com/" subheader="Project"
        />
      </Grid>

      <Grid item sm={4} xs={12}>
         <GridItem title="GitHub" image="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
         description="Check out my other projects and source code on my Github page." 
         link="https://github.com/Tavlin11" subheader="Projects/code"
         />
      </Grid>
      <Grid item sm={4} xs={12}>
         <GridItem title="LinkedIn" image="https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg"
         description="Check out my LinkedIn page to view my skills and certifications"  subheader="Resume"
         link="https://www.linkedin.com/in/tavlin-sekhon-849839181/"
         />
      </Grid>
      <Grid item sm={4} xs={12}>
         <GridItem title="Coming Soon!" subheader="Projects"
         image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png"
         description="Coming soon more projects using React and MERN stack Framewor." 
        />
      </Grid>
    </Grid>
  );
}
