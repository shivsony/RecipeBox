import React from 'react';
import PropTypes from 'prop-types'
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import EditPase from '../EditPage/EditPage';
import './List.css';
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bool : false
        }
    }
    delete(event) {
        var mydata = JSON.parse(sessionStorage.getItem('data'));
        mydata[this.props.index] = null;
        sessionStorage.setItem('data',JSON.stringify(mydata))
        this.reloadPage();
    }
    reloadPage() {
        window.location.reload()
    }
    edit() {
        this.setState({
            bool: !this.state.bool
        })
        //console.log(this.state.bool);
    }
    render() {
        const data = JSON.parse(sessionStorage.getItem('data'));
        const gradients = data[this.props.index].gradients.map((itm,i) =>
            {return(<li key={i}>{itm}</li>);}
        );
        const directions = data[this.props.index].directions.map((itm,i) => 
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
                     <Delete onClick={this.delete.bind(this)}>
                     <a href="javascript:location.reload(true)"></a>
                     </Delete>
                     <Edit onClick={this.edit.bind(this)}/>
                    </span>
                    <div className="gradients-list">
                        <ul>{gradients}</ul>
                    </div>
                    { this.state.bool ? 
                        <EditPase 
                            index={this.props.index} 
                        /> : ''
                    }
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

List.PropTypes = {
    index: PropTypes.number.isRequired
}

export default List;