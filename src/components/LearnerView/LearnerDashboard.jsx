import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Calendar from '../../containers/Calendar';
import LearnerForm from '../LearnerView/LearnerForm';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
}));

export default function LearnerDashboard() {
    const classes = useStyles();
    const [subject, setSubject] = React.useState('');
    const [grade, setGrade] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [event, setEvent] = React.useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    let dates = [{
        start: moment().toDate(),
        end: moment()
            .add(1, "hours").toDate(),
        title: 'Science'
    }, {
        start: moment(moment().add(2, 'days')).toDate(),
        end: moment(moment().add(2, 'days'))
            .add(2, "hours").toDate(),
        title: 'History'
    }];

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);

    };

    const handleGradeChange = (event) => {
        setGrade(event.target.value);
    };

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const dataSelected = (event) => {
        setOpen(true);
        setEvent(event);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <LearnerForm subject={subject} grade={grade} topic={topic} event={event} />
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subject}
                            onChange={handleSubjectChange}
                        >
                            <MenuItem value='Maths'>Mathematics</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={grade}
                            onChange={handleGradeChange}
                        >
                            <MenuItem value='1st grade'>1st</MenuItem>
                            <MenuItem value='2nd grade'>2nd</MenuItem>
                            <MenuItem value='3rd grade'>3rd</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={topic}
                            onChange={handleTopicChange}
                        >
                            <MenuItem value='Algebra'>Algebra</MenuItem>
                            <MenuItem value='Calculus and Analysis'>Calculus and Analysis</MenuItem>
                            <MenuItem value='Number Theory'>Number Theory</MenuItem>
                            <MenuItem value='Geometry and topology'>Geometry and topology</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
            </List>
            <Divider light />
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <Calendar
                    slot={false}
                    dates={dates}
                    onSelect={dataSelected}
                />
            </List>
        </React.Fragment>
    );
}
