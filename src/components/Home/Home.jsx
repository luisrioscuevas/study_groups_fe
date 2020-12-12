import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Welcome to the Learning portal
      </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Here we have professional and specialized teachers, we have a unique method to teach and it has make us successful
                    among our compettitors.
      </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Link to="/learner">
                            <Button variant="contained" color="primary">
                            
                                Learner
                            
            </Button>
            </Link>
                        </Grid>
                        <Grid item>
                        <Link to="/teacher">
                            <Button variant="contained" color="primary">
                                Teacher
            </Button>
            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Home;
