import React from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditPase from '../EditPage/EditPage';

import './List.css';
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bool : false
        }
    }
    delete() {
        console.log("delete");
    }
    edit() {
        this.setState({
            bool: !this.state.bool
        })
        console.log(this.state.bool);
    }
    render() {
        const gradients = this.props.obj.arrays.gradients.map((itm,i) =>
            {return(<li key={i}>{itm}</li>);}
        );
        const directions = this.props.obj.arrays.directions.map((itm,i) => 
            {return(<li key={i}>{itm}</li>);}
        );
        const count = {listStyle : 'decimal'}

        if(this.state.bool) {
            var editpage = () =>{
                return <h1>edit page</h1>
            }
        }
        return(
            <div className="recipie-list-wrapper">
                <section className="gradients">
                    <span className="heading"> Gradients:
                     <Delete onClick={this.delete.bind(this)}/>
                     <Edit onClick={this.edit.bind(this)}/>
                    </span>
                    <div className="gradients-list">
                        <ul>{gradients}</ul>
                    </div>
                    { this.state.bool ? <EditPase heading={this.props.heading} items={this.props.obj.arrays}/> : ''}
                </section>
                <section className="directions">
                    <span className="heading">directions:</span>
                    <div className="gradients-list">
                        <ul style={count}>
                           {directions}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}


export default List;