import React from 'react';
import './EditPage.css';

class EditPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mydata: JSON.parse(sessionStorage.getItem('data'))
        }
    }
    handelSubmit(event) {
        event.preventDefault();
        debugger
        console.log(this.state.mydata);
    }
    handelCancel(event) {
        event.preventDefault();
        console.log("cancel");
    }
    render() {
        const {index} = this.props
        return(
            <div className="editPageCard">
                <h3>Fill and submit</h3>
                <form>
                    <textarea 
                        className="inputStyle1" 
                        type='text' 
                        value={this.state.mydata.heading[index]} 
                        placeholder="recipie name......"
                    />
                    <textarea 
                        className="inputStyle" 
                        type='text'
                        value={this.state.mydata.gradients} 
                        placeholder="gradients....."
                    />
                    <textarea 
                        className="inputStyle" 
                        type='text' 
                        value={this.state.mydata.directions} 
                        placeholder="procedure...."
                    />
                    <div >
                        <button onClick={this.handelSubmit.bind(this)}>Submit</button>
                        <button onClick={this.handelCancel.bind(this)}> Cancel </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default EditPage