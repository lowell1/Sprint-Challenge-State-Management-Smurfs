import React from "react";
import {connect} from "react-redux";
import {addSmurf} from "../actions";

class AddSmurf extends React.Component {
    constructor() {
        super();
        this.state = {
            age: "",
            name: "",
            height: ""
        };
    }

    handleChange = e => {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
            // id: Date.now()
        });

        this.setState({
            age: "",
            name: "",
            height: ""
        });
    }

    render() {
        return (
            <div className="add-smurf">
                {this.props.isPosting && <p>Posting...</p>}
                {this.props.postError && <p>Error adding smurf: {this.props.postError}</p>}
                <h2>Add smurf: </h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input onChange={e => this.handleChange(e)} name="age" 
                            value={this.state.age}/>
                    </label><br/>
                    <label>
                        Name:&nbsp;&nbsp;
                        <input onChange={e => this.handleChange(e)} name="name" 
                            value={this.state.name}/>
                    </label><br/>
                    <label>
                        Height:&nbsp;
                        <input onChange={e => this.handleChange(e)} name="height" 
                            value={this.state.height}/>
                    </label><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        postError: state.postError,
    }
}

export default connect(mapStateToProps, {addSmurf})(AddSmurf);