import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
        width: '100%'
    },
    title: {
        margin: theme.spacing(4, 0, 0),
    },
}));
const LearnerForm = (props) => {
    const classes = useStyles();
    const [dense, ] = React.useState(false);

    const [secondary, ] = React.useState(false);

    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title">
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" gutterBottom>Grade: {props.grade}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" gutterBottom>Subject: {props.subject}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" gutterBottom>Topic: {props.topic}</Typography>
                    </Grid>
                </Grid>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" gutterBottom>Date: {new Date(props.event.start).getDate()}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" gutterBottom>Time: {new Date(props.event.start).getHours()}:{new Date(props.event.start).getMinutes()}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" gutterBottom>Duration: 1 hour</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h6" gutterBottom>Teacher Name: Distillery Hackathon</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" className={classes.title}>Topics to Cover:</Typography>
                            <div className={classes.demo}>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Math topics"
                                                secondary={secondary ? 'Secondary text' : null}
                                            />
                                        </ListItem>,
                                    )}
                                </List>
                            </div>
                        </Grid>

                    </Grid>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent >
            <Divider />
        </React.Fragment >
    );
}

export default LearnerForm;