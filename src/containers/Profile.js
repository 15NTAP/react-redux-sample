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
import { getMoreDetails } from "../actions/action";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
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
        const { classes, lease_more_info } = this.props;
        console.log(lease_more_info)
        return (
            <div className="App">

                <center>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                    </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                    </Typography>

                        <br />
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat (g)</TableCell>
                                    <TableCell align="right">Carbs (g)</TableCell>
                                    <TableCell align="right">Protein (g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {lease_more_info.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
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
