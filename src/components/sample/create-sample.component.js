import React, { Component } from 'react';
import axios from 'axios';

class CreateSample extends Component {

    constructor(props){
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.changeSampleName = this.changeSampleName.bind(this);
        this.state = {
            sampleName : ""
        }
    }

    changeSampleName(e){
        this.setState({
            sampleName : e.target.value
        });
    }
    

    submitForm(){
        const samples = {
            sampleName : this.state.sampleName
        }

        axios.post("http://localhost:5000/samples/add", samples)
                .then(res => console.log(res.data));

        this.setState({
            sampleName : ""
        })
    }

    render(){
        return (
            // <h1>Create Sample</h1>
            <form >
                <div className="form-group">
                    <label>SampleName</label>
                    <input type="text" className="form-control" onChange={this.changeSampleName} value={this.state.sampleName}/>
                    <input type="button" className="btn btn-success btn-block" value="Submit" onClick={this.submitForm}/>
                </div>
            </form>
        )
    }

}


export default CreateSample;