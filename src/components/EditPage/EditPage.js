import React from 'react';
import './EditPage.css';

class EditPage extends React.Component {
    render() {
        return(
            <div className="editPageCard">
                <h3>Fill and submit</h3>
                <form>
                    <textarea className="inputStyle1" type='text' value={this.props.heading} placeholder="recipie name......"/>
                    <textarea className="inputStyle" type='text' value={this.props.items.gradients} placeholder="gradients....."/>
                    <textarea className="inputStyle" type='text' value={this.props.items.directions} placeholder="procedure...."/>
                    <div >
                        <button>Submit</button>
                        <button> Cancel </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default EditPage