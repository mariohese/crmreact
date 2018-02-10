import React from 'react';
import { Button } from 'react-bootstrap';

export default class VisitListElements extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		
		this.props.visitClick(this.props.index)
	}


	render(){

	let visita = this.props.visita

	return(
		<Button bsStyle="success" tabIndex="0" onClick={this.handleClick}>
		
		<strong>Customer: </strong> 
		{visita.Customer.name}
		<br/>

		<strong>Salesman:</strong> 
		{visita.Salesman.fullname} 
		<br/>		

		<strong>Date:</strong> 
		{visita.plannedFor}
		
		
		</Button>
	)
		

	}

}