import React from 'react';
import PropTypes from 'prop-types'
import './EditPage.css';
class EditPage extends React.Component {
    constructor(props){
        super(props);
        var mydata =  JSON.parse(sessionStorage.getItem('data'));
        this.state = {
            open: true,
            heading: mydata[this.props.index].heading,
            gradients: mydata[this.props.index].gradients,
            directions: mydata[this.props.index].directions
        }
    }
    handelSubmit(event) {
        var data = JSON.parse(sessionStorage.getItem('data'));
        
        var gradientStr = this.state.gradients[0];
        var directionsStr = this.state.directions[0];
        
        data[this.props.index].gradients = gradientStr.split(',');
        data[this.props.index].directions = directionsStr.split(',');

        sessionStorage.setItem('data',JSON.stringify(data));
    }
    handelCancel(event) {
        event.preventDefault();
        console.log("cancel");
        this.setState({
            open: false,
        });
    }
    handleChange(event) {
        var target = event.target
        this.setState({
            heading: target.name  === "heading" ? [target.value] : this.state.heading,
            gradients: target.name  === "gradients" ? [target.value] : this.state.gradients,
            directions: target.name  === "directions" ? [target.value] : this.state.directions
        })
    }
    render() {
        const {index} = this.props
        return(
            this.state.open ? 
            <div className="editPageCard">
                <h3>Fill and submit</h3>
                {/* <button onClick={this.handelCancel.bind(this)}>close</button> */}
                <form>
                    <textarea 
                        onChange={this.handleChange.bind(this)}
                        className="inputStyle1" 
                        name="heading"
                        type='text' 
                        value={this.state.heading} 
                        placeholder = "recipie name......"
                        
                    />
                    <textarea 
                        onChange={this.handleChange.bind(this)}
                        className="inputStyle2"
                        name="gradients" 
                        type='text'
                        value={this.state.gradients}
                        placeholder="gradients....."
                    />
                    <textarea
                        onChange={this.handleChange.bind(this)} 
                        className="inputStyle3"
                        name="directions" 
                        type='text' 
                        value={this.state.directions} 
                        placeholder="procedure...."
                    />
                    <div >
                        <button onClick={this.handelSubmit.bind(this)}>Save</button>
                        <button onClick={this.handelCancel.bind(this)}> Cancel </button>
                    </div>
                </form>

            </div>
            : ''
        )
    }
}

EditPage.PropTypes = {
    index: PropTypes.number.isRequired
}
export default EditPage