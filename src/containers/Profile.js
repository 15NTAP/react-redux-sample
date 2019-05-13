import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MainList from '../components/MainList';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getMoreDetails } from "../actions/Action";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        padding: theme.spacing.unit * 10,
        margin: theme.spacing.unit * 10
    },
    table: {
        minWidth: 700,
    },
});


class Profile extends React.Component {

    componentDidMount() {
        const { getMoreDetails } = this.props;
        const { id } = this.props.match.params
        getMoreDetails(id)
    }

    render() {
        const { classes, lease_more_info = [] } = this.props;
        console.log(lease_more_info)
        return (
            <div className="App">

                <center>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            Lease information of {lease_more_info.id}
                        </Typography>
                        {/* <Typography component="p">
                        Paper can be used to build surface or other elements for your application. 
                        </Typography> */}

                        <br />
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Lease Id</TableCell>
                                    <TableCell align="right">start_date</TableCell>
                                    <TableCell align="right">end_date</TableCell>
                                    <TableCell align="right">rent</TableCell>
                                    <TableCell align="right">frequency</TableCell>
                                    <TableCell align="right">payment_day</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {lease_more_info.map(row => ( */}
                                <TableRow key={lease_more_info.id}>
                                    <TableCell component="th" scope="lease_more_info">
                                        {lease_more_info.id}
                                    </TableCell>
                                    <TableCell align="right">{lease_more_info.start_date}</TableCell>
                                    <TableCell align="right">{lease_more_info.end_date}</TableCell>
                                    <TableCell align="right">{lease_more_info.rent}</TableCell>
                                    <TableCell align="right">{lease_more_info.frequency}</TableCell>
                                    <TableCell align="right">{lease_more_info.payment_day}</TableCell>
                                </TableRow>
                                {/* ))} */}
                            </TableBody>
                        </Table>
                    </Paper>

                </center>


            </div >
        );
    }
}
const mapStateToProps = ({ lease_more_info }) => {


    return { lease_more_info };
};

const mapActionsToProps = {
    getMoreDetails
};


export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(Profile))

// export default 
