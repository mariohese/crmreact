import React from 'react';

export default class CustomerDetail extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){

	var cust = this.props.cust

	return(
		
		<div>
		<p><strong>	Name: </strong>{cust.name} </p>
		<p> <strong> Code: </strong> {cust.code} </p>
		<p> <strong> CIF: </strong> {cust.cif} </p>
		<p> <strong> Email: </strong> {cust.email1} </p>
		<p> <strong> Address: </strong> {cust.address1} </p>
		<p> <strong> Phone: </strong> {cust.phone1} </p>



		</div>
	)
		

	}

}