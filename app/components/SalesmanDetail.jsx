import React from 'react';

export default class CustomerDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: ""
		};
		
	}

	

	render(){

	var sales = this.props.sales

	return(
		
		<div>
		<p>	<img className="imagen" src = {sales.Photo.url} alt="Photograph not found"/> </p>
		<p> <strong> Name: </strong> {sales.fullname} </p>
		<p> <strong> Email: </strong> {sales.email1} </p>
		<p> <strong> Phone: </strong> {sales.phone1} </p>
	
		</div>
	)
		

	}

}