import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import moment from 'moment';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Calendar from '../../containers/Calendar';
import TeacherForm from './TeacherForm';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(6, 0, 0),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
}));

export default function TeacherDashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [, setEvent] = React.useState('');
    const [dates, setDates] = React.useState([{
        start: moment().toDate(),
        end: moment()
            .add(1, "hours").toDate(),
        title: 'Science'
    }, {
        start: moment(moment().add(2, 'days')).toDate(),
        end: moment(moment().add(2, 'days'))
            .add(2, "hours").toDate(),
        title: 'History'
    }]);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const dataSelected = (event) => {
        setOpen(true);
        setEvent(event);
    }

    const slotSelected = ({ start, end }) => {
        //setOpen(true);
        let title = 'Maths';
        setDates([...dates, {
            start,
            end,
            title,
          }])
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
            <TeacherForm event={dates}/>
            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                    Subscribe
          </Button>
            </DialogActions>
        </Dialog>
            
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <Calendar
                    slot={true}
                    dates={dates}
                    onSelect={dataSelected}
                    onSlot={slotSelected}
                />
            </List>
        </React.Fragment>
    );
}
