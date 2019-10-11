import React from "react";
import {getSmurfs} from "../actions";
import {connect} from "react-redux";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    constructor(props) {
        super();
        props.getSmurfs();
    }

    render() {
        console.log(this.props.smurfs)

        return (
            <div className="smurf-list">
                {this.props.fetchError && <p>Error fetching smurfs: {this.props.fetchError}</p>}
                {this.props.isFetching && <p>Loading smurfs...</p>}
                {
                    //!this.props.error && !this.props.isFetching &&
                    this.props.smurfs.map((smurf, idx) => {
                        console.log(smurf);
                        return <Smurf smurf={smurf} key={idx}/>;
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        fetchError: state.fetchError
    };
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);